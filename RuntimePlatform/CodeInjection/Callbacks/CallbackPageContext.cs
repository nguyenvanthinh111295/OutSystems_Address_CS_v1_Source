/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;
using OutSystems.ObjectKeys;

namespace OutSystems.HubEdition.RuntimePlatform.Callbacks {
    public sealed class CallbackPageContext {
        private ObjectKey _espaceKey;
        private string _webScreenName;
        private ObjectKey _webScreenKey;
        private int _userId;
        private string _eSpaceName;

        public CallbackPageContext(HeContext context, ObjectKey webScreenKey, string webScreenName) {
            _espaceKey = context.AppInfo.eSpaceUIDAsKey;
            _webScreenName = webScreenName;
            _webScreenKey = webScreenKey;
            _userId = context.Session.UserId;
            _eSpaceName = context.AppInfo.eSpaceName;
        }

        public ObjectKey ESpaceKey {
            get { return _espaceKey; }
        }
        public ObjectKey WebScreenKey {
            get { return _webScreenKey; }
        }
        public string WebScreenName {
            get { return _webScreenName; }
        }

        public int UserId {
            get { return _userId; }
        }

        public string ESpaceName {
            get { return _eSpaceName; }
        }

        public string OsPageInfo {
            get { return ESpaceKey.ToString() + "," + WebScreenName + "," + WebScreenKey.ToString(); }
        }
    }
}