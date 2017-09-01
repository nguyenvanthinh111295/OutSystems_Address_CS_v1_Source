/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System.Collections.Generic;
using System.Data;
using System.Globalization;
using System.Threading;
using OutSystems.HubEdition.RuntimePlatform.Db;
using OutSystems.Internal.Db;
using OutSystems.RuntimeCommon;

namespace OutSystems.HubEdition.RuntimePlatform {
    
    public class DatabaseResourceManager : IResourceManager {

        private readonly Dictionary<string, string> EmptyDictionary = new Dictionary<string, string>();

        private int eSpaceId;
        private Dictionary<CultureInfo, Dictionary<string, string>> resources = new Dictionary<CultureInfo, Dictionary<string, string>>();
        private object lockingobject = new object();

        public DatabaseResourceManager(int eSpaceId) {
            this.eSpaceId = eSpaceId;
        }

        private Dictionary<string, string> LoadResources(CultureInfo culture) {
            Dictionary<string, string> cultureResources = null;

            using (Transaction transaction = DatabaseAccess.ForCurrentDatabase.GetRequestTransaction()) {
                using (IDataReader reader = DBRuntimePlatform.Instance.GetTextResources(transaction, eSpaceId, culture.Name)) {
                    if (reader.Read()) {
                        cultureResources = new Dictionary<string, string>();
                        do {
                            cultureResources.Add(reader.SafeGet<string>("ResourceKey"), reader.SafeGet<string>("Translation"));
                        } while (reader.Read());
                    } else {
                        cultureResources = EmptyDictionary;
                    }
                    resources.Add(culture, cultureResources);
                    return cultureResources;
                }
            }
        }

        public string GetString(string key) {
            Dictionary<string, string> cultureResources;
            CultureInfo culture = Thread.CurrentThread.CurrentUICulture;
            do {
                cultureResources = resources.GetValueOrDefault(culture);
                if (cultureResources == null) {
                    lock (lockingobject) {
                        cultureResources = resources.GetValueOrDefault(culture);
                        if (cultureResources == null) {
                            cultureResources = LoadResources(culture);
                        }
                    }
                }
                string resource = cultureResources.GetValueOrDefault(key);
                if (resource != null) {
                    return resource;
                }
                culture = culture.Parent;
            } while (culture != CultureInfo.InvariantCulture);

            return null;
        }
    }
}
