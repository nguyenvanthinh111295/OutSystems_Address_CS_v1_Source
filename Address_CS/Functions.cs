﻿/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;
using OutSystems.HubEdition.RuntimePlatform;
using OutSystems.HubEdition.RuntimePlatform.Db;
using OutSystems.Internal.Db;
using OutSystems.RuntimeCommon;

namespace ssAddress_CS {
	public class Functions {
		/// <summary>
		/// Function <code>ssGetAddressType</code> that represents the Service Studio function
		///  <code>GetAddressType</code> <p> Description: </p>
		/// </summary>

		public static RCAddressTypeRecord ssGetAddressType(HeContext heContext, long inParamId) {
			RCAddressTypeRecord.EnsureInitialized();
			RCAddressTypeRecord outParamRecord;
			ExtendedActions.GetAddressType(heContext, inParamId, out outParamRecord);
			return outParamRecord;
		}

		/// <summary>
		/// Function <code>ssGetAddress</code> that represents the Service Studio function
		///  <code>GetAddress</code> <p> Description: </p>
		/// </summary>

		public static RCAddressRecord ssGetAddress(HeContext heContext, long inParamId) {
			RCAddressRecord.EnsureInitialized();
			RCAddressRecord outParamRecord;
			ExtendedActions.GetAddress(heContext, inParamId, out outParamRecord);
			return outParamRecord;
		}

		/// <summary>
		/// Function <code>ssGetUser</code> that represents the Service Studio function <code>GetUser</code>
		///  <p> Description: </p>
		/// </summary>

		public static RCUserRecord ssGetUser(HeContext heContext, int inParamId) {
			RCUserRecord.EnsureInitialized();
			RCUserRecord outParamRecord;
			ExtendedActions.GetUser(heContext, inParamId, out outParamRecord);
			return outParamRecord;
		}

		/// <summary>
		/// Function <code>ssGetCountry</code> that represents the Service Studio function
		///  <code>GetCountry</code> <p> Description: </p>
		/// </summary>

		public static RCCountryRecord ssGetCountry(HeContext heContext, long inParamId) {
			RCCountryRecord.EnsureInitialized();
			RCCountryRecord outParamRecord;
			ExtendedActions.GetCountry(heContext, inParamId, out outParamRecord);
			return outParamRecord;
		}

		/// <summary>
		/// Function <code>ssCheckAnonymousRole</code> that represents the Service Studio function
		///  <code>CheckAnonymousRole</code> <p> Description: </p>
		/// </summary>

		public static bool ssCheckAnonymousRole(HeContext heContext, int inParamUserId) {
			bool outParamHasRole;
			ExtendedActions.CheckAnonymousRole(heContext, inParamUserId, out outParamHasRole);
			return outParamHasRole;
		}

		/// <summary>
		/// Function <code>ssCheckRegisteredRole</code> that represents the Service Studio function
		///  <code>CheckRegisteredRole</code> <p> Description: </p>
		/// </summary>

		public static bool ssCheckRegisteredRole(HeContext heContext, int inParamUserId) {
			bool outParamHasRole;
			ExtendedActions.CheckRegisteredRole(heContext, inParamUserId, out outParamHasRole);
			return outParamHasRole;
		}

	}
}