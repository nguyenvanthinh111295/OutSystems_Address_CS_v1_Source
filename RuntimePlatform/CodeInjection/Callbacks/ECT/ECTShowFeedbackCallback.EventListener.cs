/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;
using System.Collections.Generic;

namespace OutSystems.HubEdition.RuntimePlatform.Callbacks.ECT {
    partial class ECTShowFeedbackCallback {
        public new class EventListener : AbstractCallback.EventListener {
            public EventListener(ECTShowFeedbackCallback callback, CallbackEvent evt, int espaceId, int tenantId) : base(callback, evt, espaceId, tenantId) {
            }

            public override bool NeedsInvoke(AppInfo app, SessionInfo session, CallbackEvent triggeredEvt) {
                return base.NeedsInvoke(app, session, triggeredEvt) && !ECTGetHtmlCallback.IsEctDisabled(app);
            }
        }
    }
}