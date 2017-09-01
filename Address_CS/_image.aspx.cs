﻿/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;
using System.Collections;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Caching;
using System.Web.SessionState;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;
using OutSystems.HubEdition.RuntimePlatform;
using OutSystems.HubEdition.RuntimePlatform.Db;
using OutSystems.HubEdition.RuntimePlatform.Internal;
using OutSystems.Internal.Db;
using OutSystems.RuntimeCommon.Cryptography.Insecure;
using System.Linq;

namespace ssAddress_CS {
	public struct DbImgConfig {
		public string DBConnection;
		public int CacheTime;
		public Func<int?, string, string> EntityGetter;
		public string Attribute;
		public string Id;
		public bool IsAlphaId;
		public bool UseTenantId;
		public DbImgConfig(int cacheTime, Func<int?, string, string> entityGetter, string attribute, string id, bool isAlphaId, bool useTenantId):
		this(null, cacheTime, entityGetter, attribute, id, isAlphaId, useTenantId) {}
		public DbImgConfig(string dbConnection, int cacheTime, Func<int?, string, string> entityGetter, string attribute, string id, bool isAlphaId, bool useTenantId) {
			DBConnection = dbConnection;
			CacheTime = cacheTime;
			EntityGetter = entityGetter;
			Attribute = attribute;
			Id = id;
			IsAlphaId = isAlphaId;
			UseTenantId = useTenantId;
		}
	}

	public struct DbImgCacheFile {
		public string md5Hash;
		public byte[] buffer;
		public DbImgCacheFile(string md5Hash, byte[] buffer) {
			this.md5Hash = md5Hash;
			this.buffer = buffer;
		}
	}

	public class Image: System.Web.UI.Page {
		string _entity= "";
		string _attribute= "";
		string _id= "";
		string _filename= "";
		string _extension= "";
		static protected string[] _cachecontrolstr;
		static Hashtable htDbImgConfig;

		static Image() {
			_cachecontrolstr = new String[4];
			_cachecontrolstr[0] = "no-cache";
			_cachecontrolstr[1] = "max-age=3600";
			_cachecontrolstr[2] = "max-age=86400";
			_cachecontrolstr[3] = "max-age=604800";

			htDbImgConfig = new Hashtable();

		}

		protected string getExtension() {
			if (_extension == "") {
				_extension = _filename.Substring(_filename.LastIndexOf(".") +1, _filename.Length-(_filename.LastIndexOf(".") +1));
			}
			return _extension;
		}

		protected string GetMIMEType() {
			object acceptHeader = Request.Headers["Accept"];
			string[] accept;

			if (acceptHeader == null) {
				accept = new string[0];
			} else {
				accept = acceptHeader.ToString().Split(new char[] {','}
				, 250);
			}

			int nTakesJPEG = 100000;
			int nTakesJPG = 100000;
			string mime;
			for (int i = 0; i < accept.Length; i++) {
				mime = accept[i] .Trim();
				if (string.Equals(mime, "image/jpeg", StringComparison.CurrentCultureIgnoreCase)) {
					nTakesJPEG = i;
				}
				if (string.Equals(mime, "image/jpg", StringComparison.CurrentCultureIgnoreCase)) {
					nTakesJPG = i;
				}
			}
			mime = RuntimePlatformUtils.GetMIMEType(getExtension());

			if (string.Equals(mime, "image/jpeg", StringComparison.CurrentCultureIgnoreCase)
			|| string.Equals(mime, "image/jpg", StringComparison.CurrentCultureIgnoreCase)) {
				if (nTakesJPEG < nTakesJPG) {
					mime = "image/jpeg";
				} else {
					mime = "image/jpg";
				}
			}

			return mime;
		}

		private static Regex _parametersRegex;
		private static Regex ParametersRegex {
			get {
				return _parametersRegex ??(_parametersRegex = new Regex("/(?'Entity'[^/]*)/(?'Attribute'[^/]*)/(?'Id'[^/]*)/(?'Filename'.*)", RegexOptions.Singleline | RegexOptions.Compiled | RegexOptions.IgnoreCase | RegexOptions.ExplicitCapture)); 
			}
		}

		private void Page_Load(object sender, System.EventArgs e) {
			HttpContext current = HttpContext.Current;
			HttpRequest request = current.Request;
			HttpResponse response = current.Response;
			int cacheTime=0;

			if ((!string.Equals(HttpContext.Current.Request.HttpMethod, "GET", StringComparison.CurrentCultureIgnoreCase))
			&& (!string.Equals(HttpContext.Current.Request.HttpMethod, "HEAD", StringComparison.CurrentCultureIgnoreCase))) {
				response.Clear();
				response.Status = "405 Method Not Allowed";
				response.StatusCode = 405;
				response.AppendHeader("Allow", "GET, HEAD");
				response.StatusDescription = "Method Not Allowed";
				response.Write("Method Not Allowed");
				response.End();
				return;
			}

			string parameters = request.PathInfo;
			if (parameters.Substring(1).IndexOf("/") == parameters.Substring(1).LastIndexOf("/"))
			parameters = "/" + RC4CryptHelper.DecryptWithFixedKey(parameters.Substring(1, parameters.LastIndexOf("/") -1).Replace("-", "+").Replace("_", "/")) + parameters.Substring(parameters.LastIndexOf("/"));
			else
			parameters = "";
			Match m = ParametersRegex.Match(parameters);
			if (!m.Success) {
				response.Clear();
				response.Status = "400 Bad Request";
				response.StatusCode = 400;
				response.StatusDescription = "Bad Request";
				response.Write("Bad Request");
				response.End();
				return;
			}

			_entity = m.Groups["Entity"] .Value.ToLower();
			_attribute = m.Groups["Attribute"] .Value.ToLower();
			_id = m.Groups["Id"] .Value;
			_filename = m.Groups["Filename"] .Value.ToLower();

			object objt = htDbImgConfig[_entity + "/" + _attribute];
			if (objt == null) {
				NotFound(response);
				return;
			}
			DbImgConfig dbimgconfig;
			dbimgconfig = (DbImgConfig) objt;

			byte[] buffer= new byte[0];
			string md5Hash= "";

			string reqcachecontrol = "";
			string reqpragma = "";
			if (Request.Headers["Cache-Control"] != null) {
				reqcachecontrol = Request.Headers["Cache-Control"] .ToString().Trim();
			}
			if (Request.Headers["Pragma"] != null) {
				reqpragma = Request.Headers["Pragma"] .ToString().Trim();
			}
			bool refreshItem = ((reqcachecontrol == "no-cache") || (reqpragma == "no-cache") || (reqcachecontrol == "max-age=0"));

			object tmpHash = HttpRuntime.Cache.Get("DbImage/" + _entity + "/" + _attribute + "/" + _id + "/" + _filename);
			if ((!refreshItem) && (tmpHash != null)) {
				DbImgCacheFile cacheinfo = (DbImgCacheFile) tmpHash;
				md5Hash = cacheinfo.md5Hash;
				buffer = cacheinfo.buffer;
			} else {
				OutSystems.HubEdition.Extensibility.Data.DMLService.IDMLIdentifiers identifiers = null;
				IDatabaseAccessProvider dbAccessProvider;

				if (string.IsNullOrEmpty(dbimgconfig.DBConnection)) {
					dbAccessProvider = DatabaseAccess.ForCurrentDatabase;
					identifiers = DatabaseAccess.ForCurrentDatabase.DatabaseServices.DMLService.Identifiers;
				}
				else {
					dbAccessProvider = DatabaseAccess.ForDBConnection(dbimgconfig.DBConnection);
					identifiers = DatabaseAccess.ForDBConnection(dbimgconfig.DBConnection).DatabaseServices.DMLService.Identifiers;
				}

				string select = "SELECT " + identifiers.EscapeIdentifier(dbimgconfig.Attribute.ToUpper()) + " FROM " +
				dbimgconfig.EntityGetter(null, BuiltInFunction.GetCurrentLocale()) +
				 " WHERE " + identifiers.EscapeIdentifier(dbimgconfig.Id.ToUpper()) + " = ";
				if (dbimgconfig.IsAlphaId) {
					select += "'" + BuiltInFunction.EncodeSql(_id) + "'";
				} else {
					select += BuiltInFunction.EncodeSql(_id);
				}

				using(Transaction trans = dbAccessProvider.GetReadOnlyTransaction()) {
					try {
						Command cmd = trans.CreateCommand(select);
						using(IDataReader reader = cmd.ExecuteReader()) {
							if ((reader.IsClosed) || (!reader.Read())) {
								NotFound(response);
								return;
							}

							long size = reader.GetBytes(0, 0, null, 0, 0);
							buffer = new byte[size];
							reader.GetBytes(0, 0, buffer, 0, buffer.Length);
						}
					} catch (Exception) {
						NotFound(response);
						return;
					}
				}
				md5Hash = HashHelper.Hash(buffer);

				if (dbimgconfig.CacheTime != 0) {
					DateTime absoluteexpire = DateTime.Now;
					switch (dbimgconfig.CacheTime) {
						case 1: absoluteexpire = absoluteexpire.AddHours(1); break;
						case 2: absoluteexpire = absoluteexpire.AddDays(1); break;
						case 3: absoluteexpire = absoluteexpire.AddDays(7); break;
					}
					CacheItemPriority cachepriority = CacheItemPriority.Normal;
					HttpRuntime.Cache.Insert("DbImage/" + _entity + "/" + _attribute + "/" + _id + "/" + _filename, new DbImgCacheFile(md5Hash, buffer), null, absoluteexpire, TimeSpan.Zero, cachepriority, null);
				}
			}

			cacheTime = dbimgconfig.CacheTime;

			response.Clear();
			response.Status = "200 OK";
			response.StatusCode = 200;
			response.StatusDescription = "OK";
			response.ContentType = GetMIMEType();
			response.AppendHeader("Content-MD5", md5Hash);
			response.AppendHeader("Last-Modified", "Sat, 01 Jan 2000 00:00:00 GMT");
			response.AppendHeader("Cache-Control", _cachecontrolstr[cacheTime]);
			response.AppendHeader("ETag", "\"" + md5Hash + "\"");
			response.AppendHeader("Accept-Ranges", "none");
			switch (cacheTime) {
				case 0: {
					response.Expires = -1;
					break;
			}
				case 1: {
					response.Expires = 60; // 1 hour
					break;
			}
				case 2: {
					response.Expires = 1440; // 1 day - 60*24
					break;
			}
				case 3: {
					response.Expires = 10080; // 1 week - 60*24*7
					break;
			}
		}
		if (string.Equals(HttpContext.Current.Request.HttpMethod, "GET", StringComparison.CurrentCultureIgnoreCase)) {
			response.BinaryWrite(buffer);
		}
		response.End();
	}

	private static void NotFound(HttpResponse response) {
		response.Clear();
		response.Status = "404 Not Found";
		response.StatusCode = 404;
		response.StatusDescription = "Not Found";
		response.Write("Bad Request");
		response.End();
	}

	#region Web Form Designer generated code
	override protected void OnInit(EventArgs e) {
		InitializeComponent();
		base.OnInit(e);
	}

	private void InitializeComponent() {
		this.Load += new System.EventHandler(this.Page_Load);
	}
	#endregion
}
}