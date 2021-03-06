/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;
using System.Xml;
using OutSystems.Extensibility.Model;
using System.Collections.Generic;
using OutSystems.RuntimeCommon;

namespace OutSystems.Extensibility {


    public abstract class ESpaceConfiguration : OutSystemsExtensionPoint {

        public virtual void DumpConfigurationFiles(IESpace eSpace) { }

        public virtual void TransformConfigurationFile(IESpace eSpace, XmlConfigurationFile file, bool isDownloadSourceCode) { }

#if JAVA

        protected readonly WebXmlHelper webXmlHelper = new WebXmlHelper();
        protected sealed class WebXmlHelper {
            public const string WEB_XML_PATH = "WEB-INF/web.xml";

            private int filterCount = 0;

            public void AddServletContextListener(XmlConfigurationFile file, Type listenerType) {
                if (file.Path == WEB_XML_PATH) {
                    XmlElement webApp = file.Contents.DocumentElement;
                    XmlElement listener = file.Contents.CreateElement("listener");
                    webApp.AppendChild(listener);
                    XmlElement listenerClass = file.Contents.CreateElement("listener-class");
                    listener.AppendChild(listenerClass);
                    listenerClass.AppendChild(file.Contents.CreateTextNode(listenerType.FullName));
                }
            }

            public void AddServletFilter(XmlConfigurationFile file, Type filterType) {
                if (file.Path == WEB_XML_PATH) {
                    string name = "Filter-" + (++filterCount);
                    XmlElement webApp = file.Contents.DocumentElement;
                    XmlElement filter = file.Contents.CreateElement("filter");
                    webApp.AppendChild(filter);
                    XmlElement filterName = file.Contents.CreateElement("filter-name");
                    filter.AppendChild(filterName);
                    filterName.AppendChild(file.Contents.CreateTextNode(name));
                    XmlElement filterClass = file.Contents.CreateElement("filter-class");
                    filter.AppendChild(filterClass);
                    filterClass.AppendChild(file.Contents.CreateTextNode(filterType.FullName));

                    XmlElement filterMapping = file.Contents.CreateElement("filter-mapping");
                    webApp.AppendChild(filterMapping);
                    XmlElement filterMappingName = file.Contents.CreateElement("filter-name");
                    filterMapping.AppendChild(filterMappingName);
                    filterMappingName.AppendChild(file.Contents.CreateTextNode(name));
                    XmlElement urlPattern = file.Contents.CreateElement("url-pattern");
                    filterMapping.AppendChild(urlPattern);
                    urlPattern.AppendChild(file.Contents.CreateTextNode("/*"));
                }
            }
        }

        protected readonly HandlerChainXmlHelper handlerChainXmlHelper = new HandlerChainXmlHelper();
        protected sealed class HandlerChainXmlHelper {
            private const string HANDLER_CHAIN_XML_NAME = "handler-chain.xml";

            public void AddSoapHandler(XmlConfigurationFile file, Type handlerType) {
                if (file.Name == HANDLER_CHAIN_XML_NAME) {
                    XmlElement handlerChains = file.Contents.DocumentElement;
                    XmlElement handlerChain = file.Contents.CreateElement("javaee:handler-chain");
                    handlerChains.AppendChild(handlerChain);
                    XmlElement handler = file.Contents.CreateElement("javaee:handler");
                    handlerChain.AppendChild(handler);
                    XmlElement handlerClass = file.Contents.CreateElement("javaee:handler-class");
                    handler.AppendChild(handlerClass);
                    handlerClass.AppendChild(file.Contents.CreateTextNode(handlerType.FullName));
                }
            }
        }

#endif

    }
}
