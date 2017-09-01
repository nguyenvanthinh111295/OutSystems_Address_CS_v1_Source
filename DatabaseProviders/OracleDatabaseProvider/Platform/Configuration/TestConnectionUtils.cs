/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;
using System.Diagnostics;
using OutSystems.HubEdition.DatabaseProvider.Oracle.ConfigurationService;
using OutSystems.HubEdition.Extensibility.Data.Platform.Configuration;
using OutSystems.RuntimeCommon.Log;

namespace OutSystems.HubEdition.DatabaseProvider.Oracle.Platform.Configuration {

    internal class TestConnectionUtils {

        internal static int QueryTimeout = 30;

        internal static bool CheckTablespaceExists(RuntimeDatabaseConfiguration runtimeConf, User user, out string friendlyMessage) {
            bool exists = InnerCheckTablespaceExists(runtimeConf, runtimeConf.Tablespace, out friendlyMessage);
            if (exists && user == User.Admin) {
                exists = InnerCheckTablespaceExists(runtimeConf, runtimeConf.TablespaceIndex, out friendlyMessage);
            }
            return exists;
        }

        private static bool InnerCheckTablespaceExists(RuntimeDatabaseConfiguration runtimeConf, string tablespacename, out string friendlyMessage) {
            friendlyMessage = "Test completed successfully.";
            using (var conn = runtimeConf.DatabaseProvider.GetIntegrationDatabaseServices(runtimeConf).TransactionService.CreateConnection()) {
                using (var cmd = conn.CreateCommand()) {
                    cmd.CommandTimeout = QueryTimeout;
                    try {
                        cmd.CommandText = string.Format("SELECT COUNT(1) FROM USER_TABLESPACES WHERE TABLESPACE_NAME = '{0}'", tablespacename);
                        bool exists = Convert.ToBoolean(cmd.ExecuteScalar());
                        if (!exists) {
                            friendlyMessage = string.Format("Tablespace {0} does not exist", tablespacename);
                            EventLogger.WriteError(string.Format("Error testing connection to the database: {0}", friendlyMessage));
                            return false;
                        }
                    } catch (Exception e) {
                        friendlyMessage = e.Message;
                        EventLogger.WriteError(string.Format(
                            "Error testing connection to the database: {0}\n\n{1}\n{2}",
                            e.Message, e.StackTrace, (new StackTrace(true))));
                        return false;
                    }
                }
                return true;
            }
        }
    }
}