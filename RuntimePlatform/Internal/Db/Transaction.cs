/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;
using System.Data;
using OutSystems.HubEdition.Extensibility.Data;
using OutSystems.RuntimeCommon;

namespace OutSystems.Internal.Db {

    public class Transaction : IDisposable {

        public IDbTransaction DriverTransaction { get; protected set; }

        public IDatabaseServices DatabaseServices { get; protected set; }

        /// <summary>
        /// Flag that indicates if this instance was already commit or rolled back.
        /// </summary>
        protected bool Completed { get; set; }

        internal Transaction(IDatabaseServices databaseServices, IDbTransaction transaction) {
            if (databaseServices == null || transaction == null) {
                throw new ArgumentNullException();
            }
            DriverTransaction = transaction;
            DatabaseServices = databaseServices;
        }

        public void Close() {
            DatabaseServices.TransactionService.CloseTransaction(DriverTransaction);
        }

        public Command CreateCommand() {
            return CreateCommand("");
        }

        public virtual Command CreateCommand(string sql) {
            var cmd = DatabaseServices.ExecutionService.CreateCommand(DriverTransaction, sql);
            return new Command(DatabaseServices.ExecutionService, cmd);
        }

        public DatabaseConnection GetConnection() {
            return DriverTransaction.Connection == null ? null : new DatabaseConnection(DatabaseServices, DriverTransaction.Connection);
        }

        public virtual void Commit() {
            if (!Completed) {
                DriverTransaction.Commit();
                Completed = true;
            }
        }

        public virtual void Rollback() {
            if (!Completed) {
                DriverTransaction.Rollback();
                Completed = true;
            }
        }

        public virtual void Release() {
            DriverTransaction.Dispose();
        }

        public virtual void Dispose() {
            Rollback();
            
            DriverTransaction.Dispose();

        } 
    }

    public static class TransactionExtensions {

        public static void SafeRollback(this Transaction trans) {
            if (trans != null) {
                trans.Rollback();
            }
        }

        public static void SafeRelease(this Transaction trans) {
            if (trans != null) {
                trans.Release();
            }
        }
    }
}
