/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using OutSystems.HubEdition.RuntimePlatform;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace OutSystems.REST {

    /// <summary>
    /// Helper class with methods related to HTTP and URL handling.
    /// </summary>
    public class HttpHelper {

        /// <summary>
        /// On the passed HTTP Request, set an header field to some value.
        /// </summary>
        /// <param name="request">Request to update.</param>
        /// <param name="headerName">Header field to set.</param>
        /// <param name="headerValue">Value for the header field.</param>
        public static void SetRequestHeader(HttpWebRequest request, String headerName, String headerValue) {
            switch (headerName.ToLowerInvariant()) {
                case "accept": request.Accept = headerValue; break;
                case "expect": request.Expect = headerValue; break;
                case "referer": request.Referer = headerValue; break;
                case "user-agent": request.UserAgent = headerValue; break;
                case "if-modified-since": request.IfModifiedSince = DateTime.Parse(headerValue); break;
                case "content-type": request.ContentType = headerValue; break;
                case "host": request.Host = headerValue; break;
                case "date": request.Date = DateTime.Parse(headerValue); break;
                case "transfer-encoding":   // useful for sending compressed data or data in chuncks // return request.SendChunked = true; request.TransferEncoding = headerValue;
                case "connection":          // only used in HTTP 1.0
                case "content-length":      // this headerValue should be computed
                case "range":               // only useful for partial downloads
                case "proxy-connection":    // header equivalent to the connection header (no way to set it in .NET)
                    break;
                default: request.Headers.Set(headerName, headerValue); break;
            }
        }

        /// <summary>
        /// Encode the URL received, escaping illegal characters.
        /// </summary>
        /// <param name="urlToEncode">The URL.</param>
        /// <returns><code>urlToEncode</code>, appropriately encoded.</returns>
        public static string UrlEncode(String urlToEncode) {
            return Uri.EscapeDataString(Uri.UnescapeDataString(urlToEncode));
        }

        /// <summary>
        /// Encode URL query parameters, escaping prohibited characters.
        /// </summary>
        /// <param name="urlToEncode">Text to encode.</param>
        /// <returns><code>urlToEncode</code>, appropriately encoded.</returns>
        public static string UrlQueryEncode(String urlToEncode) {
            return BuiltInFunction.EncodeUrl(Uri.UnescapeDataString(urlToEncode.Replace('+',' ')));
        }
    }
}