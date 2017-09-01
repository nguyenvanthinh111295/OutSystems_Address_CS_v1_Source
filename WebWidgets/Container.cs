/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;
using System.Collections;
using System.Reflection;
using System.Web.UI;
using OutSystems.HubEdition.RuntimePlatform.Web;
using OutSystems.RuntimeCommon;

namespace OutSystems.HubEdition.WebWidgets {
    [ParseChildren(false)]
    public class Container : ViewStateSpecializations.ViewStateLessWebControl, IBreakPointControl, IAjaxHandler, IAjaxClickEvent, IGridWidget, IOSControl {

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

        protected override void AddAttributesToRender(HtmlTextWriter writer) {
            AjaxEventsHelper.AddAjaxEventAttribute(this, AjaxEventType.onAjaxClick, ClientID, UniqueID, "__OSVSTATE", Attributes);
            Utils.RemoveIdIfAnonymous(this, Attributes);
            base.AddAttributesToRender(writer);
        }

        static Container() {
            //this prevent the writer from emitting newlines after the start and before the end of the div tag

            //private static void RegisterTag(string name, HtmlTextWriterTag key, TagType type) {
            MethodInfo method = null;
            foreach (MethodInfo m in typeof(HtmlTextWriter).GetMember("RegisterTag", BindingFlags.Static | BindingFlags.NonPublic)) {
                if (m.GetParameters().Length == 3) {
                    method = m;
                    break;
                }
            }

            method.Invoke(null, new object[] { "div ", HtmlTextWriterTag.Unknown, 0 }); //0 corresponds to HtmlTextWriterTag.TagType.Inline
        }


        // #428891 Web Accessibility - Section 508
        // allow custom tag name
        string _osTagName = "div";

        protected override void OnPreRender(EventArgs e) {
            base.OnPreRender(e);
            _osTagName = Utils.GetOSTagNameAndRemoveFromExtendedProperties(Attributes, _osTagName);
        }

        protected override void OnInit(EventArgs e) {
            base.OnInit(e);
            this.AddGridClassesAttribute();
        }

        public override void RenderBeginTag(HtmlTextWriter writer) {

            AddAttributesToRender(writer);
            /* the space after the div is there to work around a nice asp.net feature that 
             * replaces all DIV tags with Tables if the browser being used is not IE
             * check out: http://www.aspnetresources.com/blog/adaptive_rendering_redux.aspx
             */

            writer.RenderBeginTag( _osTagName + " ");
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
            OnBeforeDatabind();
            base.DataBind();
            OnAfterDataBind();
        }

        protected virtual void OnBeforeDatabind() {
        }

        protected virtual void OnAfterDataBind() {
        }

        #endregion

        public string GridCssClasses { get; set; }

        #region IAjaxClickEvent implementation

        public event EventHandler AjaxClick;

        public void OnAjaxClick(EventArgs e) {
            AjaxEventsHelper.RaiseAjaxEvent(this, AjaxClick);
        }

        #endregion

        #region IOSControl members
        string IOSControl.TagName { get { return _osTagName ?? this.TagName; } } 
        string[] IOSControl.CssClass { get { return this.CssClass.Split(' '); } }
        #endregion

        // Fix for stackoverflow on exceptions during DataBind
        protected override void DataBindChildren() {
            if (!this.HasControls())
                return;

            int count = this.Controls.Count;
            for (int index = 0; index < count; ++index)
                this.Controls[index].DataBind();
        }
    }
}