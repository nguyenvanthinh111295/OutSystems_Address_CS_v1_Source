/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;
using System.Collections.Generic;
using System.Linq;
using System.Messaging;
using System.Text;
using OutSystems.RuntimeCommon;

namespace OutSystems.HubEdition.RuntimePlatform.Email {

    internal class SendEmailNotifier {

        private static object _lockObject = new object();
        private static volatile SendEmailNotifier _current;
        private MessageQueue emailNotificationQueue;

        private SendEmailNotifier() {
            emailNotificationQueue = new MessageQueue(Settings.Get(Settings.Configs.EmailNotification_QueuePath));
            emailNotificationQueue.Formatter = new BinaryMessageFormatter();
        }

        internal static SendEmailNotifier Current {
            get {
                if (_current == null){
                    lock(_lockObject){
                        _current = new SendEmailNotifier();
                    }
                }
                return _current;
            }
        }

        internal void NotifiyNewEmail(){

            string sandboxKey = Settings.Get(Settings.Configs.Sandbox_BoxKeyName) ?? "";

            if (Settings.GetBool(Settings.Configs.Sandbox_OperatingSandboxMode)) {
                Message msg = new Message(sandboxKey, new BinaryMessageFormatter());
                msg.Recoverable = false;
                msg.Label = sandboxKey;
                msg.AcknowledgeType = AcknowledgeTypes.None;
                msg.TimeToBeReceived = TimeSpan.FromMinutes(Settings.GetInt(Settings.Configs.Log_QueueMessageMaxAge));
                emailNotificationQueue.Send(msg);
            }
        }
    }
}
