/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using OutSystems.Internal.REST;

namespace OutSystems.RuntimePublic.REST {


    /// <summary>
    /// Provides access to the HTTP request object used for consuming a REST API method.
    /// </summary>
    public class RestRequest {

        private RequestContext requestContext;
        private RestRequest(RequestContext requestContext) {
            this.requestContext = requestContext;
        }

        /// <summary>
        /// Returns the request object used by a REST API.
        /// This method should only be used inside the OnBeforeRequestAdvanced callback of a REST API.
        /// </summary>
        /// <returns>The REST API request, or null when used outside the OnBeforeRequestAdvanced callback.</returns>
        public static RestRequest GetCurrent() {
            var requestContext = RequestContext.GetCurrent();
            if (requestContext != null) {
                return new RestRequest(requestContext);
            } else {
                return null; // not inside of an OnBeforeRequestAdvanced callback.
            }            
        }


        /// <summary>
        /// Returns the name of the REST API Method that invoked the extension.
        /// </summary>
        public string GetActionName() {
            return requestContext.GetActionName();
        }


        /// <summary>
        /// Returns the native HttpWebRequest object used to perform the web request.
        /// </summary>
        public HttpWebRequest GetHttpWebRequest() {
            return requestContext.GetHttpWebRequest();
        }


        /// <summary>
        /// Returns the message body of the web request as binary content.
        /// </summary>
		public byte[] GetRequestBodyAsBinary() {
            return requestContext.GetBinary();
        }


        /// <summary>
        /// Returns the message body of the web request as a string.
        /// </summary>
		public string GetRequestBodyAsText() {
            return requestContext.GetText();
        }


        /// <summary>
        /// Sets the message body of the web request with binary content.
        /// </summary>
        /// <param name="bytes">The body of the web request.</param>
		public void SetRequestBody(byte[] bytes) {
            requestContext.SetBinary(bytes);
        }


        /// <summary>
        /// Sets the message body of the web request.
        /// If the REST API Method has its 'Request Format' property set to 'Binary', no changes are made
        /// to the message body.
        /// </summary>
        /// <param name="text">The body of the web request.</param>
		public void SetRequestBody(string text) {
            requestContext.SetText(text);
        }
        
    }

}
