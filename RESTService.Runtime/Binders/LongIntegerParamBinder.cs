/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System.Web.Http.Controllers;
using System.Web.Http.ModelBinding;

namespace OutSystems.RESTService.Binders {

    public class LongIntegerParamBinder : AbstractParamBinder {

        public override bool BindModel(HttpActionContext actionContext, ModelBindingContext bindingContext) {
            return base.BindModelForType(actionContext, bindingContext, typeof(long));
        }

        protected override string GetParamTypeName() {
            return "LongInteger";
        }
    }
}