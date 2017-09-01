﻿/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;
using System.Linq;
using OutSystems.HubEdition.RuntimePlatform;
using OutSystems.HubEdition.RuntimePlatform.Db;
using OutSystems.Internal.Db;

using System.Text;
using System.Data;
using System.Collections.Generic;
using Newtonsoft.Json;
using OutSystems.RESTService;
using OutSystems.RESTService.Behaviors;
using OutSystems.RESTService.Controllers;
using OutSystems.ObjectKeys;
using OutSystems.HubEdition.RuntimePlatform.NewRuntime;


namespace ssAddress_CS.RestRecords {

	public class JSONENAddressEntityRecord: AbstractRESTStructure<ENAddressEntityRecord> {
		[JsonProperty("Id")]
		public long? AttrId;

		[JsonProperty("AddressLine1")]
		public string AttrAddressLine1;

		[JsonProperty("AddressLine2")]
		public string AttrAddressLine2;

		[JsonProperty("AddressLine3")]
		public string AttrAddressLine3;

		[JsonProperty("AddressLine4")]
		public string AttrAddressLine4;

		[JsonProperty("AddressLine5")]
		public string AttrAddressLine5;

		[JsonProperty("City")]
		public string AttrCity;

		[JsonProperty("County")]
		public string AttrCounty;

		[JsonProperty("Postcode")]
		public string AttrPostcode;

		[JsonProperty("CountryId")]
		public long? AttrCountryId;

		[JsonProperty("AddressTypeId")]
		public long? AttrAddressTypeId;

		[JsonProperty("Active")]
		public bool? AttrActive;

		[JsonProperty("CreatedDate")]
		public String AttrCreatedDate;

		[JsonProperty("CreatedBy")]
		public int? AttrCreatedBy;

		[JsonProperty("LastUpdatedDate")]
		public String AttrLastUpdatedDate;

		[JsonProperty("LastUpdatedBy")]
		public int? AttrLastUpdatedBy;

		public JSONENAddressEntityRecord() {}

		public JSONENAddressEntityRecord(ENAddressEntityRecord s, IBehaviorsConfiguration config) {
			if (config.DefaultValuesBehavior == DefaultValuesBehavior.DontSend) {
				AttrId = (long?) s.ssId;
				AttrAddressLine1 = s.ssAddressLine1;
				AttrAddressLine2 = ConvertToRestWithoutDefaults(s.ssAddressLine2, "");
				AttrAddressLine3 = ConvertToRestWithoutDefaults(s.ssAddressLine3, "");
				AttrAddressLine4 = ConvertToRestWithoutDefaults(s.ssAddressLine4, "");
				AttrAddressLine5 = ConvertToRestWithoutDefaults(s.ssAddressLine5, "");
				AttrCity = s.ssCity;
				AttrCounty = ConvertToRestWithoutDefaults(s.ssCounty, "");
				AttrPostcode = ConvertToRestWithoutDefaults(s.ssPostcode, "");
				AttrCountryId = ConvertToRestWithoutDefaults(s.ssCountryId, 0L);
				AttrAddressTypeId = ConvertToRestWithoutDefaults(s.ssAddressTypeId, 0L);
				AttrActive = (bool?) s.ssActive;
				AttrCreatedDate = OutSystems.RESTService.Conversions.DateTimeToRestType(s.ssCreatedDate, config.DateTimeFormat);
				AttrCreatedBy = (int?) s.ssCreatedBy;
				AttrLastUpdatedDate = OutSystems.RESTService.Conversions.DateTimeToRestType(s.ssLastUpdatedDate, config.DateTimeFormat);
				AttrLastUpdatedBy = (int?) s.ssLastUpdatedBy;
			} else {
				AttrId = (long?) s.ssId;
				AttrAddressLine1 = s.ssAddressLine1;
				AttrAddressLine2 = s.ssAddressLine2;
				AttrAddressLine3 = s.ssAddressLine3;
				AttrAddressLine4 = s.ssAddressLine4;
				AttrAddressLine5 = s.ssAddressLine5;
				AttrCity = s.ssCity;
				AttrCounty = s.ssCounty;
				AttrPostcode = s.ssPostcode;
				AttrCountryId = (long?) s.ssCountryId;
				AttrAddressTypeId = (long?) s.ssAddressTypeId;
				AttrActive = (bool?) s.ssActive;
				AttrCreatedDate = OutSystems.RESTService.Conversions.DateTimeToRestType(s.ssCreatedDate, config.DateTimeFormat);
				AttrCreatedBy = (int?) s.ssCreatedBy;
				AttrLastUpdatedDate = OutSystems.RESTService.Conversions.DateTimeToRestType(s.ssLastUpdatedDate, config.DateTimeFormat);
				AttrLastUpdatedBy = (int?) s.ssLastUpdatedBy;
			}
		}

		public static Func<ssAddress_CS.RestRecords.JSONENAddressEntityRecord, ENAddressEntityRecord> ToStructureDelegate(IBehaviorsConfiguration config) {
			return (ssAddress_CS.RestRecords.JSONENAddressEntityRecord s) => ToStructure(s, config);
		}
		public static ENAddressEntityRecord ToStructure(ssAddress_CS.RestRecords.JSONENAddressEntityRecord obj, IBehaviorsConfiguration config) {
			ENAddressEntityRecord s = new ENAddressEntityRecord(null);
			if (obj != null) {
				s.ssId = obj.AttrId == null ? 0L: obj.AttrId.Value;
				s.ssAddressLine1 = obj.AttrAddressLine1 == null ? "": obj.AttrAddressLine1;
				s.ssAddressLine2 = obj.AttrAddressLine2 == null ? "": obj.AttrAddressLine2;
				s.ssAddressLine3 = obj.AttrAddressLine3 == null ? "": obj.AttrAddressLine3;
				s.ssAddressLine4 = obj.AttrAddressLine4 == null ? "": obj.AttrAddressLine4;
				s.ssAddressLine5 = obj.AttrAddressLine5 == null ? "": obj.AttrAddressLine5;
				s.ssCity = obj.AttrCity == null ? "": obj.AttrCity;
				s.ssCounty = obj.AttrCounty == null ? "": obj.AttrCounty;
				s.ssPostcode = obj.AttrPostcode == null ? "": obj.AttrPostcode;
				s.ssCountryId = obj.AttrCountryId == null ? 0L: obj.AttrCountryId.Value;
				s.ssAddressTypeId = obj.AttrAddressTypeId == null ? 0L: obj.AttrAddressTypeId.Value;
				s.ssActive = obj.AttrActive == null ? true: obj.AttrActive.Value;
				s.ssCreatedDate = obj.AttrCreatedDate == null ? new DateTime(1900, 1, 1, 0, 0, 0): OutSystems.RESTService.Conversions.TextToDateTime(obj.AttrCreatedDate, config.DateTimeFormat);
				s.ssCreatedBy = obj.AttrCreatedBy == null ? 0: obj.AttrCreatedBy.Value;
				s.ssLastUpdatedDate = obj.AttrLastUpdatedDate == null ? new DateTime(1900, 1, 1, 0, 0, 0): OutSystems.RESTService.Conversions.TextToDateTime(obj.AttrLastUpdatedDate, config.DateTimeFormat);
				s.ssLastUpdatedBy = obj.AttrLastUpdatedBy == null ? 0: obj.AttrLastUpdatedBy.Value;
			}
			return s;
		}

		public static Func<ENAddressEntityRecord, ssAddress_CS.RestRecords.JSONENAddressEntityRecord> FromStructureDelegate(IBehaviorsConfiguration config) {
			return (ENAddressEntityRecord s) => FromStructure(s, config);
		}
		public static ssAddress_CS.RestRecords.JSONENAddressEntityRecord FromStructure(ENAddressEntityRecord s, IBehaviorsConfiguration config) {
			return new ssAddress_CS.RestRecords.JSONENAddressEntityRecord(s, config);
		}

	}



}