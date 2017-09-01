/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;
using System.Data;
using OutSystems.RuntimeCommon;

namespace OutSystems.HubEdition.RuntimePlatform {

    [Obsolete]
    public interface IDBConnectionManager : IDisposable{
        DBKind DatabaseKind { get; }

        DBSqlServerVersion DBServerVersion { get; }

        string Schema { get; }

        ConnectionString ConnectionString { get; set; }

        int PooledBusyTransactionCount { get; }


        IDbTransaction CreateTransaction(ConnectionString connectionString);

        IDbTransaction CreateTransaction(string connectionString);

        IDbTransaction GetMainTransaction();

        IDbTransaction GetPrivateTransaction();

        IDbTransaction GetReadOnlyTransaction();

        IDbConnection GetConnection(ConnectionString connectionString);

        IDbConnection GetConnection(string connectionString);

        void ReleaseTransaction(IDbTransaction trans);

        void CommitTransaction(IDbTransaction trans);

        void RollbackTransaction(IDbTransaction trans);

        void SafeRollbackTransaction(IDbTransaction trans);

        void CommitAllTransactions();

        void RollbackAllTransactions();

        void abortTransaction(IDbTransaction trans);

        void FreeupResources(bool commit);

        bool AssociateReader(IDbTransaction trans, IDataReader reader);

        IDbDataParameter AddParameterWithoutReplacements(IDbCommand cmd, string name, DbType dbType, object paramValue);

        IDbDataParameter AddParameter(IDbCommand cmd, string name, DbType dbType, object paramValue);

        bool IsFromThisConnectionManager(IDbTransaction trans);

        void ForceCSASSetting(IDbTransaction trans);

        void ForceCIAISetting(IDbTransaction trans);

        void RestoreComparationSettings(IDbTransaction trans);

        DBAuthenticationType AuthenticationType { get; }
    }
}