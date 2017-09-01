/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;
using OutSystems.RuntimeCommon;

namespace OutSystems.HubEdition.Extensibility.Data.TransactionService {
    
    /// <summary>
    /// General exception raised by a transaction.
    /// Check the message to see the reason of the exception.
    /// </summary>
    public class TransactionException : Exception {
        public TransactionException(string message) : base(message) { }
        public TransactionException(string message, Exception innerExcep) : base(message, innerExcep) { }
    }

    /// <summary>
    /// Exception raised when it's not possible to commit or rollback a transaction.
    /// Check the message to see the reason of the exception.
    /// </summary>
    public class InvalidCommitOrRollbackTransactionException : TransactionException {
        public InvalidCommitOrRollbackTransactionException(string message) : base(message) { }
    }

    /// <summary>
    /// Exception raised when it's not possible to release a transaction.
    /// Check the message to see the reason of the exception.
    /// </summary>
    public class InvalidTransactionReleaseException : TransactionException {
        public InvalidTransactionReleaseException(string message) : base(message) { }
    }

    /// <summary>
    /// Exception raised when a database transaction is in an invalid state.
    /// Check the message to see the reason of the exception.
    /// </summary>
    public class InvalidTransactionException : TransactionException {
        public InvalidTransactionException(string message) : base(message) { }
    }

    public class CloseConnectionTransactionException : TransactionException {
        public CloseConnectionTransactionException(string message) : base(message) { }
        public CloseConnectionTransactionException(string message, Exception innerExcep) : base(message, innerExcep) { }
    }
}
