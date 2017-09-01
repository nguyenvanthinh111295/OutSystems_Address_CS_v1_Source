/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System.Linq;
using System.Web.UI;
using OutSystems.HubEdition.RuntimePlatform;
using OutSystems.WidgetsRuntimeAPI;

namespace OutSystems.Plugin.Widgets {

    public partial class EditableTable {

        private const string RowAppendedViewStateKey = "RowAppended";

        private IRepeaterControl repeater;
        private IRepeaterControl Repeater {
            get {
                if (repeater == null) {
                    repeater = Owner.Controls.Cast<Control>().OfType<IRepeaterControl>().First();
                }
                return repeater;
            }
        }

        private int originalIndex = -1;
        private int previousMaxRecords = -1;
        private bool databound = false;
        private bool appendHiddenRow = false;

        public override void OnLoad() {
            base.OnLoad();
            appendHiddenRow = true;
            originalIndex = Repeater.CurrentIndex;
            if (Owner.Page.IsPostBack && !Owner.Page.Request.IsBuiltInAjaxEventRequest() && GetPropertyValue<bool?>(RowAppendedViewStateKey) == true) {
                // on postback and when not in a built-in event request and row hidden row was added, hide it because we don't want it to be visible to user actions
                previousMaxRecords = Repeater.DataSource.MaxRecords;
                Repeater.DataSource.MaxRecords = Repeater.Count - 1;
            }
        }

        public override void OnRender() {
            if (databound || !AppInfo.GetAppInfo().OsContext.IsAjaxRequest) {
                if (Repeater.Count == 0 || appendHiddenRow) {
                    // last hidden row doesn't exist
                    // on first load append hidden row (to allow add new row to work properly)
                    Repeater.Append();
                    appendHiddenRow = false;
                    Repeater.DataSource.HasHiddenRow = true;
                    //need to cast to nullable to be serializable in java
                    StorePropertyValue(RowAppendedViewStateKey, (bool?)true);
                }
            } else if (previousMaxRecords >= 0) {
                // restore the hidden row when rendering back the page to the browser
                Repeater.DataSource.MaxRecords = previousMaxRecords;
                previousMaxRecords = -1;
                //need to cast to nullable to be serializable in java
                StorePropertyValue(RowAppendedViewStateKey, (bool?)true);
            }
            base.OnRender();
        }

        public override void OnAfterDataBind() {
            base.OnAfterDataBind();
            databound = true; // set this flag on for the ajax refresh case
        }

        public override void OnBuiltInEventRaised(string eventName) {
            switch (eventName) {
                case "Append":
                    Repeater.Append(Owner.ClientID); // append hidden row and refresh view
                    //need to cast to nullable to be serializable in java
                    StorePropertyValue(RowAppendedViewStateKey, (bool?)true);
                    break;

                case "Remove":
                    // cancel event
                    Repeater.Remove(Owner.ClientID);
                    break;
            }
        }

        partial void OnTableRowSave() {
            if (originalIndex >= 0) {
                Repeater.CurrentIndex = originalIndex; // restore the index, because the list might have been iterated in the meanwhile
            }
            if (Repeater.CurrentIndex >= 0) {
                Repeater.Refresh(Owner.ClientID);
            }
        }

        partial void OnTableRowDelete() {
            if (originalIndex >= 0) {
                Repeater.CurrentIndex = originalIndex; // restore the index, because the list might have been iterated in the meanwhile
            }
            Repeater.Remove(Owner.ClientID);
        }

        public string GetEditableClass() {
            return IsEditable() ? " SupportsEdit" : "";
        }
    }
}