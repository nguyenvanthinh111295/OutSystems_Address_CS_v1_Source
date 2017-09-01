/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using OutSystems.HubEdition.DatabaseProvider.iDB2.DatabaseObjects;
using OutSystems.HubEdition.DatabaseProvider.iDB2.DMLService;
using OutSystems.HubEdition.DatabaseProvider.iDB2.ExecutionService;
using OutSystems.HubEdition.DatabaseProvider.iDB2.IntrospectionService;
using OutSystems.HubEdition.DatabaseProvider.iDB2.TransactionService;
using OutSystems.HubEdition.Extensibility.Data;
using OutSystems.HubEdition.Extensibility.Data.ConfigurationService;
using OutSystems.HubEdition.Extensibility.Data.DatabaseObjects;
using OutSystems.HubEdition.Extensibility.Data.DMLService;
using OutSystems.HubEdition.Extensibility.Data.ExecutionService;
using OutSystems.HubEdition.Extensibility.Data.IntrospectionService;
using OutSystems.HubEdition.Extensibility.Data.TransactionService;
using OutSystems.RuntimeCommon.ObfuscationProperties;

namespace OutSystems.HubEdition.DatabaseProvider.iDB2 {

    [DoNotObfuscateType]
    internal class iDB2DatabaseServices : IDatabaseServices {
        private readonly IRuntimeDatabaseConfiguration configuration;
        private readonly IDatabaseObjectFactory objectFactory;
        private readonly ITransactionService transactionService;
        private readonly IExecutionService executionService;
        private readonly IDMLService dmlService;
        private readonly IIntrospectionService introspectionService;

        public iDB2DatabaseServices(IRuntimeDatabaseConfiguration databaseConfiguration) {
            configuration = databaseConfiguration;
            objectFactory = new IDB2DatabaseObjectFactory(this);
            transactionService = new iDB2TransactionService(this);
            executionService = new iDB2ExecutionService(this);
            dmlService = new iDB2DMLService(this);
            introspectionService = new iDB2IntrospectionService(this);
        }
        public IDatabaseObjectFactory ObjectFactory { get { return objectFactory; } }
        public ITransactionService TransactionService { get { return transactionService; } }
        public IExecutionService ExecutionService { get { return executionService; } }
        public IDMLService DMLService { get { return dmlService; } }
        public IIntrospectionService IntrospectionService { get { return introspectionService; } }
        public IRuntimeDatabaseConfiguration DatabaseConfiguration { get { return configuration; } }

    }
}
