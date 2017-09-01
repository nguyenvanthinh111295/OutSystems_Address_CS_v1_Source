/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System.Web.UI.HtmlControls;

namespace OutSystems.HubEdition.WebWidgets.ViewStateSpecializations {
    public abstract class ViewStateLessHtmlContainerControl : HtmlContainerControl {
        protected ViewStateLessHtmlContainerControl() : base() { }
        protected ViewStateLessHtmlContainerControl(string tag) : base(tag) { }
        protected override object SaveViewState() { return null; }
    }
}
