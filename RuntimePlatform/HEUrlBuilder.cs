/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;
using System.Web;

namespace OutSystems.HubEdition.RuntimePlatform
{
	/// <summary>
	/// Summary description for HEUrlBuilder.
	/// </summary>
	public class HEUrlBuilder {
		protected string _espace = "";
		protected bool _multitenant = false;
		protected string _tenant = "";
		protected string _session = "";
		protected bool _sessionless = false;
		protected string _path = "";
		protected string _file = "";
		protected string _server = "";
		protected string _protocol = "";
		protected string _query = "";

		public string eSpace {
			get {
				return _espace;
			}
			set {
				_espace = value;
			}
		}

		public bool MultiTenant {
			get {
				return _multitenant;
			}
			set {
				_multitenant = value;
			}
		}

		public string Tenant {
			get {
				return _tenant;
			}
			set {
				_tenant = value;
			}
		}

		public string Session {
			get {
				return _session;
			}
			set {
				_session = value;
			}
		}

		public bool Sessionless {
			get {
				return _sessionless;
			}
			set {
				_sessionless = value;
			}
		}

		public string Path {
			get {
				return _path;
			}
			set {
				_path = CleanLastSlash(value);
			}
		}

		public string File {
			get {
				return _file;
			}
			set {
				_file = value;
			}
		}

		public string Server {
			get {
				return _server;
			}
			set {
				_server = value;
			}
		}

		public string Protocol {
			get {
				return _protocol;
			}
			set {
				_protocol = value;
			}
		}

		public string Query {
			get {
				return _query;
			}
			set {
				_query = value;
			}
		}

		public HEUrlBuilder() {
		}

		public HEUrlBuilder(HttpContext context) {  
			Parse(context);
		}

		public HEUrlBuilder(HttpRequest request) {
			Parse(request);
		}

		public HEUrlBuilder(Uri uri) {
			Parse(uri);
		}

		public HEUrlBuilder(string uri) {
			Parse(uri);
		}

		protected string CleanLastSlash(string s) {
			s = s.Trim();
			if (s.EndsWith("/")) {
				s = s.Substring(0, s.Length-1);
			}
			return s;
		}

		public void Parse(Uri uri) {
            _protocol = uri.Scheme;
            if (uri.Scheme == "http" && RuntimePlatformUtils.RequestIsHttps(HttpContext.Current.Request)) {
                _protocol = "https";
            }
			_server = uri.Host;
			_session = "";
			_sessionless = true;
			_multitenant = false;
			_tenant = "";
			_path = "";
			_file = "";
			if (!uri.IsDefaultPort) {
				_server += ":" + uri.Port.ToString();
			}
			int index=1;
			_espace = CleanLastSlash(uri.Segments[index++]);
			if (uri.Segments.Length > 2) {
				if (uri.Segments[index].StartsWith(RuntimePlatformUtils.SessionPrefix)) {  // #49674
					_session = CleanLastSlash(uri.Segments[index++]);
					_sessionless = false;
				}
				if (uri.Segments[index].IndexOf(".") < 0) {
					_tenant = CleanLastSlash(uri.Segments[index++]);
					if (_tenant == "img") {
						_path = _tenant + "/";
						_tenant = "";
					} else {
						_multitenant = true;
					}
				}
				while ((index < uri.Segments.Length) && (uri.Segments[index].IndexOf(".") < 0)) {
					_path += uri.Segments[index++];
				}
				_path = CleanLastSlash(_path);

				if (index < uri.Segments.Length) {
					_file = CleanLastSlash(uri.Segments[index++]);
				}
			}

			// Check that the img we earlier assumed to be from an image request lives
			// up to the hype.
			if (_path.StartsWith("img")) {
				// If a file wasn't request the "img" part this is a tenant default request
				// and not an image request.
				bool bImageReq = true;

				if (_file == String.Empty) {
					bImageReq = false;
				} else {
					int pos = _file.LastIndexOf(".");
					string ext = _file.Substring(pos, _file.Length-pos);
					switch (ext.ToLower()) {
						case ".gif":
						case ".jpg":
						case ".jpeg":
						case ".png":
						case ".bmp":
						case ".wbmp": {
							break;
						}
						default: {
							bImageReq = false;
							break;
						}
					}
				}

				if (!bImageReq) {
					_tenant = "img";
					_multitenant = true;
					_path = _path.Substring(3, _path.Length-3);
					if (_path.StartsWith("/")) {
						_path = _path.Substring(1, _path.Length-1);
					}
				}
			}
			_query = uri.Query;
		}

		public void Parse(string uri) {
			Parse(new Uri(uri));
		}

		public void Parse(HttpContext context) {
			Parse(context.Request);
		}
        
		public void Parse(HttpRequest request) {
			Uri u=null;
			string s = request.RawUrl;
			try {
				u = new Uri(s);
			} catch (UriFormatException) {
				if ((s.StartsWith("/")) || (s.StartsWith("\\"))) {
					s = (RuntimePlatformUtils.RequestIsHttps(request) ? "https" : "http") + "://locahost" + s;
				} else {
					s = (RuntimePlatformUtils.RequestIsHttps(request) ? "https" : "http") + "://localhost/" + s;
				}
				u = new Uri(s);
			}
			Parse(u);
		}

		public string MakeRelative(HEUrlBuilder builder) {
			return MakeRelative(new Uri(builder.ToString()));
		}

		public string MakeRelative(HttpContext context) {
			return MakeRelative(context.Request);
		}
        
		public string MakeRelative(HttpRequest request) {
			Uri u=null;
			string s = request.RawUrl;
			try {
				u = new Uri(s);
			} catch (UriFormatException) {
				if ((s.StartsWith("/")) || (s.StartsWith("\\"))) {
					s = (RuntimePlatformUtils.RequestIsHttps(request) ? "https" : "http") + "://localhost"+ s;
				} else {
					s = (RuntimePlatformUtils.RequestIsHttps(request) ? "https" : "http") + "://localhost/" + s;
				}
				u = new Uri(s);
			}
			return MakeRelative(u);
		}

		public string MakeRelative(string uri) {
			return MakeRelative(new Uri(uri));
		}

		public string MakeRelative(Uri uri) {
			Uri u;
			u = new Uri(ToString());
			return u.MakeRelativeUri(uri).ToString();
		}

		public override string ToString() {
			string url = _protocol + Uri.SchemeDelimiter + _server + "/" + _espace + "/";
			if (!_sessionless) {
				url += _session + "/";
			}
			if (_multitenant) {
				url += _tenant + "/";
			}
			if (_path.Length > 0) {
				url += _path + "/";
			}
			url += _file;
			if (_query.Length > 0) {
				url += "?" + _query;
			}
			return url;
		}
	}
}
