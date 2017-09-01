/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System.Web.UI;
using System.Xml;
using OutSystems.HubEdition.RuntimePlatform;
using OutSystems.RuntimeCommon;
using OutSystems.WidgetsRuntimeAPI;

namespace OutSystems.HubEdition.WebWidgets {
    public class EmptyControl : Control, IWidgetRuntimeProperties {

        /// <summary>
        /// Return the empty clientId for controls not accessible in the current context
        /// </summary>
        public override string ClientID {
            get {
                return "";
            }
        }

        #region IWidgetRuntimeProperties Members
        // return default / empty values for all IWidgetRuntimeProperties Members

        public bool Valid {
            get {
                return false;
            }
            set { }
        }

        bool IControlWithValidation.Validate(ScreenContext context) {
            return Valid;
        }

        public bool Mandatory {
            get {
                return false;
            }
            set { }
        }

        public string TypedValue {
            get {
                return "";
            }
            set { }
        }

        public string ValidationMessage {
            get {
                return "";
            }
            set { }
        }

        public string MandatoryValidationMessage {
            get {
                return "";
            }
            set { }
        }

        public string TypeValidationMessage {
            get {
                return "";
            }
            set { }
        }

        #endregion

        public virtual void ToXml(object parent, XmlElement baseElem, string fieldName, int detailLevel) {}
        public virtual void EvaluateFields(VarValue variable, object parent, string baseName, string fields) {}

        public override bool Visible {
            get {
                return false;
            }
            set {}
        }
    }
}
