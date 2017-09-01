/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Reflection;
using System.Web;
using System.Web.UI;
using OutSystems.HubEdition.RuntimePlatform;
using OutSystems.HubEdition.RuntimePlatform.Web;
using OutSystems.RuntimeCommon;
using OutSystems.RuntimeCommon.Cryptography.Insecure;

#if JAVA

using System.Collections.Generic;
using OutSystems.HubEdition.RuntimePlatform.Log;

#endif

namespace OutSystems.HubEdition.WebWidgets {
    using RuntimePlatform.Log;
    using Pair = System.Web.UI.Pair;

    public abstract class OSPageViewState : OSPage, IViewStateAttributes, IPageJavascriptQueue {
        #if JAVA

        public interface IAbstractTopLevelComponentWithMandatory {}
        
        private HashSet<IAbstractTopLevelComponentWithMandatory> GetVisibleComponentsWithValidation(Control c) {
            return null;
        }
        
        private void ProcessComponentsWithValidationTurnedInvisible(HashSet<IAbstractTopLevelComponentWithMandatory> previousVisibleComponentsWithValidation, HashSet<IAbstractTopLevelComponentWithMandatory> newVisibleComponentsWithValidation) {}
        
#endif

        protected OSPageViewState(bool quirksMode) : base(quirksMode) {
            _viewStateAttributes = new ViewStateAttributes(ViewState);
        }

        protected sealed override void FinishAjaxRequest() {
            

            // ajax request
            OSJSONResponse resp = CreateJSONResponse();
            if (!AjaxRedirectLocation.IsEmpty()) {
                // ajax redirect...
                WriteAJAXClientRedirectResponse(Request, Response, AjaxRedirectLocation);
                return;
            }
            
            if (_partialViewStateBuckets.Count > 0) {
                // include in JSON response the updated viewstate buckets that is 
                // at this moment stored in _partialViewStateBuckets				
                foreach (string bucketName in _partialViewStateBuckets.Keys) {
                    resp.AddToHidden(bucketName, _partialViewStateBuckets[bucketName].ToString());
                }
            }
            // send the end request signal
            resp.AddToJs("OsEndRequest()");
            WriteJavascriptResponse(FormatJSONResponseString(resp), /*flush*/ false);
            
            return;
        }

        private string _onloadVSUpdate = string.Empty;

        private string OnloadVSUpdate {
            get {
                return _onloadVSUpdate;
            }
            set {
                _onloadVSUpdate = value;
            }
        }

#if !JAVA

        // for partial viewstate management
        private Hashtable _partialViewStateHashes = new Hashtable();
        private Hashtable _partialViewStateBuckets = new Hashtable();

#endif


        private ArrayList _bucketIds = new ArrayList();
				

        private bool _resetViewStateField = false;


        public void EnableResetViewState() {
            _resetViewStateField = true;
        }

        protected override void SavePageStateToPersistenceMedium(object viewState) {
            string name;
            string value;

            ParseViewStateForCachedObjects(viewState);

            // clear previous partial viewstate buckets
            _partialViewStateBuckets.Clear();

            // save main viewstate bucket
            name = "__OSVSTATE";
            string hash;
            value = SerializeViewState(viewState, out hash);


            if (IsAjaxRequest) {
                RegisterPartialViewState(name, value, hash);
            } else {
                // register the viewstate field
                ClientScript.RegisterHiddenField(name, value);

                // Set VIEWSTATE = "" so that Page::RenderViewStateFields() doesn't go through the buggy code branch that renders a CR inside the element's ID...
                this.GetType().GetProperty("ClientState", BindingFlags.Instance | BindingFlags.NonPublic).GetSetMethod(true).Invoke(this, new object[] { "" });

                if (_resetViewStateField) {
                    // #110767 - Add queued javascript to run when document is ready and set the viewstate with the proper value
                    // This will override input field cache for the viewstate field.
                    OSJSONResponse resp = new OSJSONResponse();
                    resp.AddToHidden(name, value);
                    // Ensure that this is the first queued javascript to be executed!
                    //_javascriptQueueResponse.InsertToJs(0, FormatJSONResponseString(resp));
                    //_javascriptQueueResponse.AddToHidden(name, value);
                    OnloadVSUpdate = value;
                }
            }
        }

        private static string GetJsonUpdateScript() {
            string defineJsonUpdate = "if(!window.OsJSONUpdate){do{try {if(window.parent && window.parent.OsJSONUpdate)window.OsJSONUpdate = window.parent.OsJSONUpdate;}catch(ex){d = document.domain.indexOf('.')+1;document.domain = document.domain.substr(d, document.domain.length - d);}}while(!window.OsJSONUpdate && document.domain.indexOf('.')!=document.domain.lastIndexOf('.'));if (!window.OsJSONUpdate){try{document.domain = window.location.hostname;}catch(ex){}window.OsJSONUpdate = function() {};}}\n";
            return defineJsonUpdate;
        }

        public string GetEndPageJavaScript() {
            string ret = "";
            // send all the queued javascript, if any
            string onloadVSUpdate = OnloadVSUpdate;

            if (onloadVSUpdate.Length > 0) {
                ret += "<script type=\"text/javascript\">outsystems.internal.$._waitForViewstate = true;" +
                        "outsystems.internal.$(document).ready(function() {outsystems.internal.$('input[name=__OSVSTATE]').val('" + onloadVSUpdate + "');" +
                        "outsystems.internal.$._waitForViewstate = false;});</script>\n";
            }

            if (_javascriptQueueResponse.Js.Count > 0) {
                if (IsFirstAjaxResponse)
                    ret += JavascriptBeginTag + GetJsonUpdateScript() + JavascriptEndTag;

                OSJSONResponse resp = new OSJSONResponse();
                resp.AddToJs("outsystems.internal.$(document).ready(function() {" + FormatJSONResponseString(_javascriptQueueResponse) + "});");

                ret += JavascriptBeginTag + FormatJSONResponseString(resp) + JavascriptEndTag;
            }

            return ret;
        }

#if !JAVA

        private void ParseViewStateForCachedObjects(object vs) {
            if (!PageNeedsToValidateCachedObjects)
                return;
            if (vs is Pair) {
                System.Web.UI.Pair pair = (Pair)vs;
                if (pair.First is BlockOutputCache) {
                    BlockOutputCache cache = (BlockOutputCache)pair.First;
                    if (cache.ChildViewState == null) {
                        cache.ChildViewState = pair.Second;
                    } else {
                        pair.Second = cache.ChildViewState;
                    }
                    pair.First = cache.ViewState;
                }
                if (pair.First is PageOutputCache) {
                    PageOutputCache pagecache = (PageOutputCache)pair.First;
                    if (pagecache.ChildViewState == null) {
                        pagecache.ChildViewState = pair.Second;
                    } else {
                        pair.Second = pagecache.ChildViewState;
                    }
                    pair.First = pagecache.ViewState;
                }
                ParseViewStateForCachedObjects(pair.First);
                ParseViewStateForCachedObjects(pair.Second);
            } else if (vs != null && (vs is ArrayList || vs.GetType().IsArray)) {
                foreach (object item in (IEnumerable)vs) {
                    ParseViewStateForCachedObjects(item);
                }
            }
        }


        /// <summary>
        /// Registers a new partial viewstate value and determines whether it will be included or not in the output, 
        /// depending if its contents changed or not
        /// </summary>
        /// <param name="name"></param>
        /// <param name="value"></param>
        private void RegisterPartialViewState(string name, string value, string newHash) {
            // did the hash changed from last time ?
            if ((string)_partialViewStateHashes[name] != newHash) {
                // this viewstate bucket has changed, must output it
                _partialViewStateBuckets.Add(name, value);
                // store the new hash, since this bucket is going to be returned to the client
                StoreViewStateHash(name, value, newHash);
            }
        }


        /// <summary>
        /// Saves the current partial state of the entire page, returning the buckets that have been modified 
        /// since the request or since last PartialSaveAllState()
        /// </summary>
        /// <returns>Hashtable with key = viewstate hidden field name and value = new viewstate base64-serialized value</returns>
        public Hashtable PartialSaveAllState() {
            Type t = typeof(Page);
            /*
             * #95403
             * Table records get additional stuff in viewstate without executing prerender for the whole page
             * Another situation occurs with radio buttons. If the prerender for the whole page is not 
             * executed prior to a SaveViewState, the viewstate infromation for radio buttons disappear 
             * from the viewstate after the second SaveViewState.
             * */

            MethodInfo preRenderRecursiveInternal = t.GetMethod("PreRenderRecursiveInternal", BindingFlags.NonPublic | BindingFlags.Instance);
            preRenderRecursiveInternal.Invoke(this, null);

            // save the current block javascript included so that they are not sent again in the next request
            BlocksJavaScript.SaveAlreadyIncludedBlocks(ViewState);

            // SavePageStateToPersistenceMedium will be called from the next invocation, the viewstate changes 
            // will be captured since (IsAjaxRequest == true)
            MethodInfo saveAllState = t.GetMethod("SaveAllState", BindingFlags.NonPublic | BindingFlags.Instance);
            saveAllState.Invoke(this, null);

            // partial viewstate buckets arraylist now contain the changed buckets that need to be sent back to the client
            return _partialViewStateBuckets;
        }

#endif


        private bool _isRefreshingWidget;

        public void AjaxRefresh(Control c, string animationName, StoreViewStateDelegate storeViewStateDelegate) {
            AjaxRefresh(c, 0, animationName, "", false, null, storeViewStateDelegate);
        }

        public delegate void StoreViewStateDelegate();

        public virtual void AjaxRefresh(Control c, int rowIndex, string animationName, string listOperation, bool isTableRecord, object dataItem, StoreViewStateDelegate storeViewStateDelegate) {
            AjaxRefresh(c, rowIndex, animationName, listOperation, isTableRecord, dataItem, storeViewStateDelegate, null);
        }

        public void AjaxRefresh(Control c, int rowIndex, string animationName, string listOperation, bool isTableRecord, object dataItem, StoreViewStateDelegate storeViewStateDelegate, string clientIdOverride) {

            // don't do nothing if not in a partial request or if the control is not accessible (e.g.: refreshing widgets inside table records from outside)
            if (!IsAjaxRequest || c == null)
                return;

            // mark that we are refreshing a widget, so that possible queued javascripts happening in the databind are queued 
            // to be sent immediately after the control json (for web block preparations or user defined functions execution)			
            _isRefreshingWidget = true;

            try {
                LocalState stackBackup = null;
#if JAVA
                HashSet<IAbstractTopLevelComponentWithMandatory> previousVisibleComponentsWithValidation = null, 
                    newVisibleComponentsWithValidation = null;
#endif

                
                if (c is OSUserControl) {
                    OSUserControl blk = (OSUserControl)c;
                    stackBackup = ((IWebScreen)blk.Page).PushStack();
                } else {
                    stackBackup = ((IWebScreen)c.Page).PushStack();
                }

                if (listOperation == "") {
#if JAVA
                    previousVisibleComponentsWithValidation = GetVisibleComponentsWithValidation(c);
#endif

                    // databind the control
                    c.DataBind();

#if JAVA
				    newVisibleComponentsWithValidation = GetVisibleComponentsWithValidation(c);
#endif
                } else {
                    // some list operation
                    
                    if (!isTableRecord) {
                        // list records require the prerender phase before list append, insert and remove operations, since prerender creates the current child controls hierarchy
                        MethodInfo preRenderRecursiveInternal = typeof(Page).GetMethod("PreRenderRecursiveInternal", BindingFlags.NonPublic | BindingFlags.Instance);
                        preRenderRecursiveInternal.Invoke(c, null);
                    }

                    IListRefresh listWidget = (IListRefresh)c;
                    // execute the list refresh databind to restore LineCount and StartIndex runtime properties in the table / list record
                    listWidget.DoListRefreshDataBind();
                    // execute the operation in the list
                    switch (listOperation) {
                        case "Append":
                            listWidget.AppendItem(dataItem);
                            break;
                        case "Insert":
                            listWidget.InsertItem(rowIndex, dataItem);
                            break;
                        case "Remove":
                            listWidget.RemoveItem(rowIndex);
                            break;
                        case "Refresh":
                            listWidget.RefreshItem(rowIndex);
                            break;
                        default:
                            System.Diagnostics.Debug.Assert(false, "unknown list operation: " + listOperation);
                            break;
                    }
                }

                // call store viewstate in the calling page / block
                
                storeViewStateDelegate();

                if (stackBackup != null) {
                    Debugger.Pop(stackBackup, true);
                }

                // save partial viewstate and get modified buckets
                
                Hashtable modifiedBuckets = PartialSaveAllState();

                OSJSONResponse resp = CreateJSONResponse();

                // build JSON response with the control rendering and modified buckets 
                
                foreach (string bucketName in modifiedBuckets.Keys) {
                    resp.AddToHidden(bucketName, modifiedBuckets[bucketName].ToString());
                }

                string html = "";

                if (listOperation == "") {
                    // regular ajax refresh
                    // render control and add it to outers
                    resp.AddToOuter(c.ClientID, RenderControl(c));

#if JAVA
                    ProcessComponentsWithValidationTurnedInvisible(previousVisibleComponentsWithValidation, 
                        newVisibleComponentsWithValidation);
#endif
                } else {
                    // implicit ajax refresh via ListAppend, ListInsert or ListRemove
                    if (listOperation == "Append") {
                        html = RenderAjaxListOperationRow(c);
                    } else if (listOperation == "Insert") {
#if JAVA
                        html = RenderAjaxListOperationRow(c, rowIndex);
#else

                        html = RenderAjaxListOperationRow(c);

#endif
                    } else if (listOperation == "Remove") {
                        // need to render the empty message?
                        if (((IListRefresh)c).IsEmpty) {
                            html = RenderAjaxListOperationRow(c, true);
                        }
                    } else if (listOperation == "Refresh") {
                        // row refresh operation
                        html = RenderAjaxListOperationRow(c, rowIndex);
                    }

                    string oddLineStyle = "";
                    string evenLineStyle = "";
                    bool useBullets = false;

                    if (c is OSDataGrid) {
                        // get table record information to be sent to the client js
                        OSDataGrid dg = (OSDataGrid)c;
                        oddLineStyle = dg.OddLineStyle ?? oddLineStyle;
                        evenLineStyle = dg.EvenLineStyle ?? evenLineStyle;
                    } else {
                        // get list record information to be sent to the client js
                        Iterator it = (Iterator)c;
                        useBullets = it.UseBullets;
                    }

                    resp.AddToList(clientIdOverride ?? c.ClientID, html, listOperation, rowIndex, isTableRecord, oddLineStyle, evenLineStyle, useBullets);
                }


                // Add call to animation registration
                if (animationName != null && animationName != "None") {
                    if (listOperation == "Remove" && animationName == "Highlight")
                        animationName = "ListRemoveHighlight";
                    resp.AddToJs("OsRegisterEffect" + animationName.Replace(" ", "") + "();");
                }

                // write and flush the response
                WriteJavascriptResponse(FormatJSONResponseString(resp), /*flush*/ true);

                // send all the queued javascript gathered in this refresh
                if (_javascriptQueueResponse.Js.Count > 0) {
                    resp = CreateJSONResponse();
                    resp.AddToJs("outsystems.internal.$(document).ready(function() {" + FormatJSONResponseString(_javascriptQueueResponse) + "});");
                    // clear it for next executions
                    _javascriptQueueResponse.ClearJs();
                    // write the response
                    WriteJavascriptResponse(FormatJSONResponseString(resp), /*flush*/ true);
                }

                // cleanup JavaScript includes so the next refresh will not re-include it
                BlocksJavaScript.CleanupAlreadyIncludedBlocksWithJavaScript();
            } finally {
                // we're no longer refreshing a widget
                _isRefreshingWidget = false;
            }
        }


        //returns the output string from an OSJSONResponse object, ready to be interpreted by the osajax Javascript library included in AJAX aware pages
        private static string FormatJSONResponseString(OSJSONResponse resp) {
            return "OsJSONUpdate(" + resp.ToString() + ")";
        }


        private OSJSONResponse CreateJSONResponse() {
            OSJSONResponse resp = new OSJSONResponse();
            // ensure that block javascripts are sent in the first response            
            resp.AddToBlockJs(BlocksJavaScript.BlockJavaScriptIncludeFilenames);
            return resp;
        }


        private void WriteJavascriptResponse(string script, bool flush) {
            WriteJavascriptResponse(Request, Response, script, flush);
        }

        private static string JavascriptBeginTag {
            get { return @"<script type=""text/javascript"">//<![CDATA[" + Environment.NewLine; }
        }
        private static string JavascriptEndTag {
            get { return @"//]]></script>"; }
        }

        private static bool IsFirstAjaxResponse {
            get {
                if (HttpContext.Current.Items["_isFirstAjaxResponse"] == null) {
                    return true;
                }
                return (bool)(HttpContext.Current.Items["_isFirstAjaxResponse"]);
            }
            set {
                HttpContext.Current.Items["_isFirstAjaxResponse"] = value;
            }
        }

        private static void WriteJavascriptResponse(HttpRequest request, HttpResponse response, string script, bool flush) {
            try {
                

                bool isIE =
                    
                    (request.Browser.Browser == "IE");

                response.ContentType = "text/html";

                

                // #90781
                // Internet explorer requires the first ajax response to be of at least 256 bytes, otherwise it will 
                // only be executed when the receive buffer fills up in subsequent responses or when the request ends.
                // After that, subsequent responses can be of any size that they are executed promptly
                if (IsFirstAjaxResponse && isIE) {
                    // This padding string ensures that 256 bytes are sent, even when compression is enabled
                    // Using deflate compression stream, it outputs 256 bytes
                    // Using gzip compression stream, it outputs 266 bytes
                    // Using no compression, it outputs 334 bytes
                    string firstPadding = "<!-- OSPADDING VURGXTTJYZMCVZAFKKOPWKYUBXQDXDADFBRUSOSCDMISJYMZIROBPVAHBEFPZLMQVJXTEGNVRMLKCGGCLQQBLYJFAFTOEYYOARSAWSRCEVURGXTTJYZMCVZAFKKOPWKYUBXQDXDADFBRUSOSCDMISJYMZIROBPVAHBEFPZLMQVJXTEGNVRMLKCGGCLQQBLYJFAFTOEYYOARSAWSRCEVURGXTTJYZMCVZAFKKOPWKYUBXQDXDADFBRUSOSCDMISJYMZIROBPVAHBEFPZLMQVJXTEGNVRMLKCGGCLQQBLYJFAFTOEYYOARSAWSRCE -->";
                    response.Write(firstPadding);
                }

                if (IsFirstAjaxResponse) {
                    // Make sure the JSONUpdate function is defined in the current window
                    response.Write(JavascriptBeginTag + GetJsonUpdateScript() + JavascriptEndTag);
                    try {
                        //Add requestInfo necessary data for beacon in performanceprobe.js
                        OSJSONResponse resp = new OSJSONResponse();
                        RequestTracer perfTracer = AppInfo.GetAppInfo().OsContext.RequestTracer;
                        resp.AddToJs("OsSetRequestInfo('{0}','{1}','{2}')".F(perfTracer.RequestKey, perfTracer.EntryActionName, perfTracer.EntryActionKey));
                        response.Write(JavascriptBeginTag + FormatJSONResponseString(resp) + JavascriptEndTag);
                    } catch (Exception e) {
                        ErrorLog.LogApplicationError(e, null, "WebWidgets");
                    }
                    IsFirstAjaxResponse = false;
                }

                // This padding ensures that, if we are using a compression filter, that the output
                // is completely flushed to the underlying stream.
                // It is needed because the compression may flush every but the last few bytes.
                // Usually in a compressed flush the last one or two bytes will be missing.
                string padding = "<!-- OSPADDING -->";

                // write the respose and its end tag
                response.Write(JavascriptBeginTag + script + JavascriptEndTag);
                if (RuntimePlatformUtils.IsJava() || flush) {
                    response.Flush();
                }
                response.Write(padding);
                if (RuntimePlatformUtils.IsJava() || flush) {
                    //the padding goes on a separate chunk to make sure the actual content
                    //get's flushed to the client
                    response.Flush();
                }
            } catch {
                // Ignore errors writting the response (eg: client closed tab)
            }
        }

#if !JAVA

        private void StoreViewStateHash(string fieldName, string value, string hash) {
            _partialViewStateHashes[fieldName] = hash;
        }



        protected override object LoadPageStateFromPersistenceMedium() {
            object mainViewState;
            bool useQueryString = false;
            ViewStateIsValid = false;

            NameValueCollection request = this.Request.Form;
            if (this.Request.Form.AllKeys.Length == 0 && this.Request.QueryString.Count > 0) {
                // use query string as source for the request
                request = this.Request.QueryString;
                useQueryString = true;
            }

            // load the main view state
            string viewState = request["__OSVSTATE"];
            // unescape spaces...
            if (useQueryString && viewState != null)
                viewState = viewState.Replace(' ', '+');

            string hash = "";
            if (viewState == null) {
                mainViewState = new System.Web.UI.Pair();
            } else {
                mainViewState = DeserializeViewState(viewState, out hash);
                ViewStateIsValid = true;
            }

            // compute and store the hash of this viewstate
            StoreViewStateHash("__OSVSTATE", viewState, hash);

            return mainViewState;
        }


        protected virtual string SerializeViewState(object viewState, out string hash) {
            ObjectStateFormatter formatter = new ObjectStateFormatter();
            var vstate = formatter.Serialize(viewState);
            hash = MD5HashHelper.HashUsingDefaultEncoding(vstate ?? string.Empty);
            return vstate;
        }

        protected virtual object DeserializeViewState(string viewState, out string hash) {
            ObjectStateFormatter formatter = new ObjectStateFormatter();
            hash = MD5HashHelper.HashUsingDefaultEncoding(viewState ?? string.Empty);
            var result = formatter.Deserialize(viewState);
            return result;
        }


        /// <summary>
        /// Override render element to skip of the entire page in partial rendering
        /// </summary>
        /// <param name="writer"></param>
        protected override void Render(HtmlTextWriter writer) {
            if (!IsAjaxRequest) {
                // regular request
                base.Render(writer);
            } else {
                FinishRequest();
            }
        }

#endif

        public static void WriteAJAXClientRedirectResponse(HttpRequest request, HttpResponse response, string location) {
            OSJSONResponse resp = new OSJSONResponse();
            resp.AddOtherValues("__RedirectToURL", location);
            // write the JSON response
            try {
                WriteJavascriptResponse(request, response, FormatJSONResponseString(resp), /*flush*/false);
                //this way the padding win't go on a separate chunk
                response.Flush();
            } catch {
                // Ignore errors writting the response (eg: client closed tab)
            }
        }

        public override void VerifyRenderingInServerForm(Control control) {
            if (!IsAjaxRequest)
                base.VerifyRenderingInServerForm(control);
        }

        private OSJSONResponse _javascriptQueueResponse = new OSJSONResponse();

        public virtual void AddQueuedJavascript(string script) {
            if (IsAjaxRequest && !_isRefreshingWidget) {
                //immediate js
                OSJSONResponse resp = CreateJSONResponse();
                resp.AddToJs(script);
                WriteJavascriptResponse(FormatJSONResponseString(resp), /*flush*/true);
            } else {
                //queue javascript
                _javascriptQueueResponse.AddToJs(script);
            }
        }


        #region IViewStateAttributes Members

#if !JAVA

        protected ViewStateAttributes _viewStateAttributes;
        public ViewStateAttributes ViewStateAttributes {
            get {
                return _viewStateAttributes;
            }
        }

#endif

        #endregion
    }

    public sealed class ViewStateBucket {

        public string id;
        public object data;

        public static string MAIN_BUCKET_ID = "__MAIN__";

        public ViewStateBucket(string id, object data) {
            this.id = id;
            this.data = data;
        }

        /// <summary>
        /// Gets the bucket data, stripping other buckets inside
        /// </summary>
        /// <returns></returns>
        public object GetData() {
            StripDataBuckets(data);
            return data;
        }

        private void StripDataBuckets(object cur) {
            if (cur == null) {
                return;
            } else if (cur.GetType() == typeof(Pair)) {
                Pair p = cur as Pair;
                StripDataBuckets(p.First);
                StripDataBuckets(p.Second);
            } else if (cur.GetType() == typeof(IList)) {
                IList list = cur as IList;
                for (int i = 0; i < list.Count; i += 2) {
                    object key = list[i];
                    object value = list[i + 1];
                    ViewStateBucket valueBucket = value as ViewStateBucket;
                    if (valueBucket != null && valueBucket.id == this.id)
                        // this bucket has the same id, place the data
                        list[i + 1] = valueBucket.data;
                    else if (valueBucket != null)
                        // this bucket has another id, data is null
                        list[i + 1] = null;
                    else {
                        // plain data is already in the array
                    }

                }
            }
        }
    }

}
