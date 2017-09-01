﻿/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;
using System.Runtime.Serialization;
using OutSystems.HubEdition.RuntimePlatform;
using OutSystems.HubEdition.RuntimePlatform.Log;
using OutSystems.HubEdition.RuntimePlatform.Sms;

namespace ssAddress_CS {
	// The default exception node
	[Serializable()]
	public class defaultExceptionNode : SmsNode {
		public defaultExceptionNode () {
			_key="defaultExceptionNode";
		}		
		
		public defaultExceptionNode (SerializationInfo info, StreamingContext context) : base (info, context) {}
			
		public override bool MatchTest(HeContext heContext) {
            return false;
        }
			
		public override SmsNode Match (HeContext heContext) {
			CheckPermissions( heContext);
			return null;
		}

		public override SmsNode Execute (HeContext heContext) {
			LoadDefaultLargeAccount( heContext);
			Render(heContext);
			return this;
		}
		
		protected override void Render (HeContext heContext){
			Exception except = null;
			except = heContext.Context.Server.GetLastError();
			if (except == null) {
				except = (Exception)heContext.Context.Application["ApplicationStartError"];
			}
			string content="";
			content += "There was an error processing your request:\n";
			content += GetMessage(except);

            ErrorLog.LogApplicationError(except, heContext, "");

			heContext.Context.Server.ClearError ();
			ReplyISms (heContext, content);
		}
		
		private string GetMessage (Exception excep) {
			while (excep.InnerException != null) {
				excep = excep.InnerException;
			}
			return excep.Message;
		}
		protected override void CheckPermissions (HeContext heContext) {
		}

		public override SmsNode HandleException (HeContext heContext, Exception e) {
			return null;
		}
	}
}