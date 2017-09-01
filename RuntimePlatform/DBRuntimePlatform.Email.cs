/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;
using System.Data;
using System.Runtime.CompilerServices;
using OutSystems.HubEdition.Extensibility.Data.DMLService;
using OutSystems.HubEdition.Extensibility.Data.Platform.QueryProvider;
using OutSystems.Internal.Db;

namespace OutSystems.HubEdition.RuntimePlatform {

    public partial class DBRuntimePlatform {

        [MethodImpl(MethodImplOptions.NoInlining)]
        [DoNotTestSyntax("Foreign key constraints - emailId")]
        public void CreateEmailStatus(Transaction tran, int emailId) {
            Command cmd = tran.CreateCommand("INSERT INTO OSSYS_EMAIL_STATUS (ID, ERROR_COUNT, NEXT_RUN) VALUES (@EMAILID, 0, GETDATE())");
            cmd.CreateParameter("@EMAILID", DbType.String, emailId);
            cmd.ExecuteNonQuery();
        }


        [MethodImpl(MethodImplOptions.NoInlining)]
        [DoNotTestSyntax("Foreign key constraints - activityId")]
        public virtual int SaveEmail(Transaction tran, string from, string to, string cc, string bcc, string subject, byte[] content, int contentlen, int activityId, int tenantId, int eSpaceId, string emailDefSSKey, bool storeContent, string messageId, bool enableEmails, string testEmails) {

            throw new NotImplementedException(GetNotImplementedMessage());
        }

        [MethodImpl(MethodImplOptions.NoInlining)]
        public byte[] GetEmailContent(Transaction tran, int emailId) {
            Command cmd = tran.CreateCommand(tran.DatabaseServices.DMLService.Queries.GetMaxRecordsSQL(1, tran.DatabaseServices.DMLService.Identifiers.EscapeIdentifier("CONTENT"), "OSSYS_EMAIL_CONTENT", "ID = @EMAILID"));
            cmd.CreateParameter("@EMAILID", DbType.String, emailId);
            return DataReaderUtils.SafeGet<byte[]>(cmd.ExecuteScalar(true), new byte[0]);
        }
    }
}
