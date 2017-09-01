/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;
using System.Data;
using System.Data.SqlClient;
using System.Reflection;
using System.Xml;
using OutSystems.HubEdition.Extensibility.Data.ConfigurationService;
using OutSystems.HubEdition.Extensibility.Data.Platform.DatabaseObjects;
using OutSystems.HubEdition.Extensibility.Data.ExecutionService;
using OutSystems.HubEdition.Extensibility.Data.TransactionService;
using OutSystems.RuntimeCommon;
using OutSystems.HubEdition.Extensibility.Data.ConfigurationService.MetaConfiguration;

namespace OutSystems.HubEdition.RuntimePlatform.DBCompatibilityProxies.Adapters {
    [Obsolete]
    internal class DBCompatibilityReflectionUtils {
        private static bool IsType(Type type, string typeName) {
            return type.FullName.Equals(typeName);
        }

        private static void CheckType(Type type, string typeName) {
            if (!IsType(type, typeName)) {
                throw new InvalidOperationException("Expected type " + typeName + " but found " + type.FullName);
            }
        }

        public static XmlReader ExecuteXmlReaderMethod(SqlCommand sqlCommand, IExecutionService executionService) {

            CheckType(executionService.GetType(), "OutSystems.HubEdition.DatabaseProvider.SqlServer.ExecutionService.ExecutionService");

            MethodInfo executeXmlReaderMethod = executionService.GetType().GetMethod("ExecuteXmlReader", new Type[]{ typeof (SqlCommand) });
            return executeXmlReaderMethod.Invoke(executionService, new Object[] { sqlCommand }) as XmlReader;
        }

        public static XmlReader ExecuteXmlReaderMethod(SqlCommand sqlCommand, string description, bool isApplication, IExecutionService executionService) {

            CheckType(executionService.GetType(), "OutSystems.HubEdition.DatabaseProvider.SqlServer.ExecutionService.ExecutionService");

            MethodInfo executeXmlReaderMethod = executionService.GetType().GetMethod("ExecuteXmlReader", 
                new Type[] { typeof (SqlCommand), typeof (string), typeof (bool) });
            
            return executeXmlReaderMethod.Invoke(executionService, new Object[] { sqlCommand }) as XmlReader;
        }
        
        public static bool ExecuteTransactionExistsMethod(IDbTransaction trans, ITransactionService transactionService) {

            CheckType(transactionService.GetType(), "OutSystems.HubEdition.DatabaseProvider.SqlServer.TransactionService.TransactionService");

            MethodInfo transactionExistsMethod = transactionService.GetType().GetMethod("TransactionExists", BindingFlags.Public | BindingFlags.Instance);
            return (bool)transactionExistsMethod.Invoke(transactionService, new Object[] { trans });
        }

        public static DBSqlServerVersion GetSqlServerVersion(IExecutionService executionService) {

            CheckType(executionService.GetType(), "OutSystems.HubEdition.DatabaseProvider.SqlServer.ExecutionService.ExecutionService");

            PropertyInfo serverVersionProperty = executionService.GetType().GetProperty("ServerVersion", BindingFlags.Public | BindingFlags.Instance);
            return (DBSqlServerVersion)Enum.Parse(typeof(DBSqlServerVersion), serverVersionProperty.GetValue(executionService, null).ToString());
        }

        public static bool GetIsIntegratedSecurityOnly(IExecutionService executionService) {

            CheckType(executionService.GetType(), "OutSystems.HubEdition.DatabaseProvider.SqlServer.ExecutionService.ExecutionService");

            PropertyInfo serverVersionProperty = executionService.GetType().GetProperty("IsIntegratedSecurityOnly", BindingFlags.Public | BindingFlags.Instance);
            return (bool)serverVersionProperty.GetValue(executionService, null);
        }

        public static ConnectionString GetConnectionString(IRuntimeDatabaseConfiguration config) {

            var wrapper = new MetaDatabaseConfiguration(config);

            var cs = wrapper.GetParameter("ConnectionString");
            var ons = wrapper.GetParameter("OnsConfig");

            if (ons != null) {
                return new ConnectionString(cs.Get(), ons.Get());
            } else {
                return new ConnectionString(cs.Get());
            }
    
        }

        public static void ForceCSASSetting(IDbTransaction trans, IExecutionService executionService) {

            CheckType(executionService.GetType(), "OutSystems.HubEdition.DatabaseProvider.Oracle.ExecutionService.ExecutionService");

            MethodInfo forceCSASSetting = executionService.GetType().GetMethod("ForceCSASSetting", new []{ typeof(IDbTransaction) });
            forceCSASSetting.Invoke(executionService, new object[] { trans });
        }

        public static void ForceCIAISetting(IDbTransaction trans, IExecutionService executionService) {

            CheckType(executionService.GetType(), "OutSystems.HubEdition.DatabaseProvider.Oracle.ExecutionService.ExecutionService");

            MethodInfo forceCIAISetting = executionService.GetType().GetMethod("ForceCIAISetting");
            forceCIAISetting.Invoke(executionService, new object[] { trans });
        }

        public static void RestoreComparisonSettings(IDbTransaction trans, IExecutionService executionService) {

            CheckType(executionService.GetType(), "OutSystems.HubEdition.DatabaseProvider.Oracle.ExecutionService.ExecutionService");

            MethodInfo restoreComparisonSettings = executionService.GetType().GetMethod("RestoreComparisonSettings");
            restoreComparisonSettings.Invoke(executionService, new object[] { trans });
        }
        
        public static bool IsConnectedUser(IDbConnection conn, string userName, IExecutionService executionService) {
            CheckType(executionService.GetType(), "OutSystems.HubEdition.DatabaseProvider.Oracle.ExecutionService.ExecutionService");

            MethodInfo isConnectedUser = executionService.GetType().GetMethod("IsConnectedUser", new[] { typeof(IDbConnection), typeof(string) });
            return (bool)isConnectedUser.Invoke(executionService, new object[] { conn, userName });
        }
    }
}