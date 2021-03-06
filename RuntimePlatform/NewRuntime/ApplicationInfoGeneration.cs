/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using Newtonsoft.Json;
using OutSystems.Internal.Db;
using OutSystems.RuntimeCommon;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;

namespace OutSystems.HubEdition.RuntimePlatform.NewRuntime {
    public class ApplicationInfoGenerator {

        private struct ESpaceInfo {
            public ESpaceInfo(int id, string key, string name) {
                Id = id;
                Key = key;
                Name = name;
            }

            public int Id;
            public string Key;
            public string Name;
        }

        public static ModuleDefinitions DeserializeToModuleDefinitions(string payload) {
            return JsonConvert.DeserializeObject<ModuleDefinitions>(payload, new JsonSerializerSettings() { DateParseHandling = DateParseHandling.None });
        }

        public ApplicationInfo GenerateApplicationInfo(string manifestContent, string[] entityModuleNames, string moduleDefinitions, string espaceName, int espaceId, int espaceVersionId, string espaceUID) {
            var applicationInfo = new ApplicationInfo(manifestContent, entityModuleNames);

            int applicationid = GetEspaceApplicationId(espaceId);
            applicationInfo.Data.ApplicationDefaultTimeout = GetApplicationDefaultTimeout(applicationid);
            applicationInfo.Data.HasTracingEnabled = ShouldEnableTracing();

            var producersVersionsIds = new HashSet<int>();
            GetProducersEspaceVersionIds(espaceVersionId, producersVersionsIds);

            IEnumerable<ESpaceInfo> eSpaceInfos = GetEspaceInfos(espaceId, producersVersionsIds).Concat(new[] { new ESpaceInfo(espaceId, espaceUID, espaceName) });

            var moduleDefinitionsJson = DeserializeToModuleDefinitions(moduleDefinitions);

            foreach (var info in eSpaceInfos) {
                var staticEntities = GetStaticEntities(info.Id);

                if (moduleDefinitionsJson.ContainsKey(info.Key)) {
                    moduleDefinitionsJson[info.Key].StaticEntities = staticEntities;
                } else {
                    var moduleDef = new ModuleDefinition();
                    moduleDef.StaticEntities = staticEntities;
                    moduleDefinitionsJson.Add(info.Key, moduleDef);
                }
            }

            applicationInfo.Data.ModuleDefinitions = moduleDefinitionsJson;

            return applicationInfo;
        }

        public string SerializeApplicationInfoToJSON(ApplicationInfo appInfo) {
            return JsonConvert.SerializeObject(appInfo);
        }

        public string GetApplicationInfoJSON(string manifestContent, string[] entityModuleNames, string moduleDefinitions, string espaceName, int espaceId, int espaceVersionId, string espaceUID) {
            return SerializeApplicationInfoToJSON(GenerateApplicationInfo(manifestContent, entityModuleNames, moduleDefinitions, espaceName, espaceId, espaceVersionId, espaceUID));
        }

        protected virtual StaticEntities GetStaticEntities(int espaceId) {
            var staticEntities = new StaticEntities();

            using (Transaction systemTransaction = DatabaseAccess.ForSystemDatabase.GetReadOnlyTransaction()) {
                using (IDataReader reader = DBRuntimePlatform.Instance.GetStaticRecordsByEspaceId(systemTransaction, espaceId)) {
                    while (reader.Read()) {
                        // "SELECT DATA_ID, NAME, SS_KEY, ENTITY_SS_KEY " ...
                        var dataId = reader.SafeGet<string>("DATA_ID");
                        var ssKey = reader.SafeGet<string>("SS_KEY");
                        var entityKey = reader.SafeGet<string>("ENTITY_SS_KEY");

                        Records records;
                        // Doing this way because java fails to translate otherwise
                        if (!staticEntities.ContainsKey(entityKey)) {
                            records = new Records();
                            staticEntities.Add(entityKey, records);
                        } else {
                            records = staticEntities[entityKey];
                        }

                        records.Add(ssKey, dataId);
                    }
                }
            }

            return staticEntities;
        }

        private static int GetEspaceApplicationId(int espaceId) {
            using (Transaction trans = DatabaseAccess.ForSystemDatabase.GetReadOnlyTransaction()) {
                using (IDataReader reader = DBRuntimePlatform.Instance.GetApplicationOfEspace(trans, espaceId)) {
                    if (reader.Read()) {
                        return reader.SafeGet<int>("ApplicationId");
                    }
                }
            }
            return -1;
        }

        private static int GetApplicationDefaultTimeout(int applicationId) {
            using (Transaction transaction = DatabaseAccess.ForSystemDatabase.GetReadOnlyTransaction()) {
                var value = DBRuntimePlatform.GetAppParameterValue(transaction, Settings.AppConfigs.ApplicationDefaultTimeout, applicationId);
                return (value != null ? Convert.ToInt32(value) : 0);
            }
        }

        private static bool ShouldEnableTracing() {
            return OSTrace.getRealLogLevel().TraceVerbose || Settings.GetBool(Settings.Configs.Compiler_ForceClientSideTracing);
        }

        private static void GetProducersEspaceVersionIds(int consumerVersionId, HashSet<int> producersVersionsIds) {
            if (producersVersionsIds.Add(consumerVersionId)) {
                var producers = new HashSet<int>();
                using (Transaction trans = DatabaseAccess.ForSystemDatabase.GetReadOnlyTransaction()) {
                    using (IDataReader reader = DBRuntimePlatform.Instance.GetDistinctEspaceReferences(trans, consumerVersionId)) {
                        while (reader.Read()) {
                            producers.Add(reader.SafeGet<int>("PUBLISHED_PROD_VERSION_ID"));
                        }
                    }
                }
                foreach (var producer in producers.Where(p => !producersVersionsIds.Contains(p))) {
                    GetProducersEspaceVersionIds(producer, producersVersionsIds);
                }
            }
        }

        private static IEnumerable<ESpaceInfo> GetEspaceInfos(int currentEspaceId, IEnumerable<int> espaceVersionIds) {
            List<ESpaceInfo> eSpaceInfos = new List<ESpaceInfo>();

            using (Transaction systemTransaction = DatabaseAccess.ForSystemDatabase.GetReadOnlyTransaction()) {
                using (IDataReader reader = DBRuntimePlatform.Instance.GetEspaceInfoByVersionIds(systemTransaction, espaceVersionIds)) {
                    while (reader.Read()) {
                        int eSpaceID = reader.SafeGet<int>("ID");
                        string ssKey = reader.SafeGet<string>("SS_KEY");
                        string eSpaceName = reader.SafeGet<string>("NAME");

                        if (eSpaceID != currentEspaceId) {
                            eSpaceInfos.Add(new ESpaceInfo(eSpaceID, ssKey, eSpaceName));
                        }
                    }
                }
            }
            return eSpaceInfos;
        }
    }

    public class ApplicationInfoGeneratorMock : ApplicationInfoGenerator {
        public Func<int, StaticEntities> GetStaticEntitiesFunc {
            get; set;
        }

        protected override StaticEntities GetStaticEntities(int espaceId) {
            if (GetStaticEntitiesFunc != null) {
                return GetStaticEntitiesFunc(espaceId);
            }
            return base.GetStaticEntities(espaceId);
        }
    }
}
