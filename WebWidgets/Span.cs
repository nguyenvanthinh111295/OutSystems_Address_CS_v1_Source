/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;
using System.Collections;
using System.Web.UI;
using OutSystems.HubEdition.RuntimePlatform.Web;
using OutSystems.RuntimeCommon;

namespace OutSystems.HubEdition.WebWidgets {
    public sealed class Span : ViewStateSpecializations.ViewStateLessHtmlContainerControl, IBreakPointControl, IAjaxHandler, IAjaxClickEvent, IOSControl {

        public Span() : base("span") { }
        public Span(string tagName) : base("span") { }

        private Hashtable events;
        public void RegisterAjaxEvent(AjaxEventType eventType, Array controlIdsToSend) {
            if (events == null) {
                events = new Hashtable();
            }

            events[eventType] = controlIdsToSend;
        }

        public Hashtable GetRegisteredAjaxEvents() {
            return events;
        }

        protected override void SetAttribute(string name, string value) {
            if (name.ToLower() == "id") {
                Attributes.Remove("anonymous");
                this.ID = value;
            }
            base.SetAttribute(name, value);
        }

        // #428891 Web Accessibility - Section 508
        // allow custom tag name
        string _osTagName = "span";

        protected override void OnPreRender(EventArgs e) {
            base.OnPreRender(e);
            _osTagName = Utils.GetOSTagNameAndRemoveFromExtendedProperties(Attributes, _osTagName);
        }

        protected override void RenderBeginTag(HtmlTextWriter writer) {
            AjaxEventsHelper.AddAjaxEventAttribute(this, AjaxEventType.onAjaxClick, ClientID, UniqueID, "__OSVSTATE", Attributes);
            
            Utils.RemoveIdIfAnonymous(this, Attributes);

            writer.WriteBeginTag( _osTagName);
            this.RenderAttributes(writer);
            writer.Write('>');

        }


        protected override void RenderEndTag(HtmlTextWriter writer) {
             writer.WriteEndTag( _osTagName);
        }
        #region IBreakPointControl implementation

        private String _BreakpointHookId;
        private bool _BreakpointHookIsExpressionlessWidget = false;

        public event BreakpointHook BreakpointHookEvent;

        public string BreakpointHookId {
            get { return _BreakpointHookId; }
            set { _BreakpointHookId = value; }
        }

        public bool BreakpointHookIsExpressionlessWidget {
            get { return _BreakpointHookIsExpressionlessWidget; }
            set { _BreakpointHookIsExpressionlessWidget = value; }
        }

        public override void DataBind() {
            if (BreakpointHookEvent != null) {
                BreakpointHookEvent(BreakpointHookId, BreakpointHookIsExpressionlessWidget);
            }
            base.DataBind();
        }

        // Fix for stackoverflow on exceptions during DataBind
        protected override void DataBindChildren() {
            if (!this.HasControls())
                return;

            int count = this.Controls.Count;
            for (int index = 0; index < count; ++index)
                this.Controls[index].DataBind();
        }

        #endregion

        #region IAjaxClickEvent implementation

        public event EventHandler AjaxClick;

        public void OnAjaxClick(EventArgs e) {
            AjaxEventsHelper.RaiseAjaxEvent(this, AjaxClick);
        }

        #endregion

        #region IOSControl members
        string IOSControl.TagName { get { return _osTagName ?? this.TagName; } }
        string[] IOSControl.CssClass { get { return (this.Attributes["class"] ?? string.Empty).Split(' '); } }
        #endregion
    }
}