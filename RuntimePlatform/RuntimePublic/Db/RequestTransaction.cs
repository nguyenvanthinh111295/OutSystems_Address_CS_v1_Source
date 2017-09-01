/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using OutSystems.HubEdition.RuntimePlatform.Db;
using OutSystems.Internal.Db;
using OutSystems.RuntimeCommon;

namespace OutSystems.RuntimePublic.Db {
    
    /// <summary>
    /// Represents the transaction that is automatically managed by the platform.
    /// The transaction starts at the beginning of the web request, and is committed
    /// when the response is sent to the client.
    /// Can be used for selecting, inserting, updating, and deleting data.
    /// </summary>
    public sealed class RequestTransaction : IDisposable {

        private Transaction transaction;

        internal RequestTransaction(Transaction transaction) {
            if (transaction == null) {
                throw new ArgumentNullException("Transaction cannot be initialized with null.");
            }
            this.transaction = transaction;
        }

        /// <summary>
        /// Returns the native transaction object used by the stack in which the application is running.
        /// It allows to reuse existing code that receives a native data object as parameter.
        /// </summary>
        /// <returns>The native transaction object.</returns>
        public IDbTransaction GetDriverTransaction() {
            return transaction.DriverTransaction;
        }

        /// <summary>
        /// Checks if the transaction exists, and frees the resources associated with it.
        /// Since this transaction is automatically managed by the platform, no commit or rollback
        /// operations are performed when releasing the transaction.
        /// </summary>
        public void Release() {
            transaction.SafeRelease();
        }

        /// <summary>
        /// Creates an empty command to be executed in this transaction.
        /// </summary>
        /// <returns>A <see cref="Command"/> with no SQL associated.</returns>
        public Command CreateCommand() {
            try {
                return new Command(transaction.CreateCommand());
            } catch (ArgumentNullException) {
                throw new InvalidOperationException("A new command cannot be created from this transaction.");
            }
        }

        /// <summary>
        /// Creates a command to be executed in this transaction.
        /// </summary>
        /// <param name="sql">The SQL to be associated to the command.</param>
        /// <returns>A <see cref="Command"/> with SQL associated.</returns>
        public Command CreateCommand(string sql) {
            try {
                return new Command(transaction.CreateCommand(sql));
            } catch (ArgumentNullException) {
                throw new InvalidOperationException("A new command cannot be created from this transaction.");
            }
        }

        /// <summary>
        /// Gets the database connection associated with this transaction.
        /// </summary>
        /// <returns>A <see cref="Connection"/> based on this transaction, or Null if the connection is Null.</returns>
        public Connection GetConnection() {
            try {
                return new Connection(transaction.GetConnection());
            } catch (ArgumentNullException) {
                throw new InvalidOperationException("A new connection cannot be created from this transaction.");
            }
        }

        #region IDisposable Members

        /// <summary>
        /// Releases the transaction and frees the resources used by this object.
        /// </summary>
        public void Dispose() {
            transaction.Dispose();
        }

        #endregion
    }
}
