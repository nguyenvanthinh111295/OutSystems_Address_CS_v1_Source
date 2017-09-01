/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using OutSystems.HubEdition.Extensibility.Data.Platform.DMLService;
using OutSystems.HubEdition.Extensibility.Data.Platform.QueryProvider;
using OutSystems.HubEdition.RuntimePlatform.Db;
using OutSystems.HubEdition.RuntimePlatform.Processes;
using OutSystems.ObjectKeys;
using OutSystems.RuntimeCommon;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using OutSystems.Internal.Db;

namespace OutSystems.HubEdition.RuntimePlatform {

    public partial class DBRuntimePlatform {

        private static Dictionary<GlobalObjectKey, string> tableNamesCache = new Dictionary<GlobalObjectKey, string>();
        internal static void InvalidateCachedTableNamesForTaskbox() {
            tableNamesCache = new Dictionary<GlobalObjectKey, string>();
        }

        private static bool? epaTaskboxHasEMUserProvider;
        // This should be discontinued, so we'll just return false for new databases
        protected virtual bool TaskboxUsesEnterpriseManagerUserProvider(Transaction trans) {
            lock (typeof(InboxQueries)) {
                if (!epaTaskboxHasEMUserProvider.HasValue) {
                    epaTaskboxHasEMUserProvider = ObjectKey.Parse(Instance.GetUserProviderKey(trans, Constants.EPATaskboxESpaceKey)) ==
                        Constants.EnterpriseManagerESpaceKey;
                }

                return epaTaskboxHasEMUserProvider.Value;
            }
        }

        protected static string GetCachedTableName(Transaction tran, GlobalObjectKey entityKey) {
            string fullTableName;

            lock (tableNamesCache) {
                if (!tableNamesCache.TryGetValue(entityKey, out fullTableName)) {
                    string catalog;
                    string tableName = Instance.GetPhysicalTableName(tran, entityKey, out catalog);

                    if (tableName.IsEmpty()) {
                        throw new DataBaseException("Entity '" + entityKey.ToString(ObjectKey.DatabaseFormat) + "' is required by the TaskBox to operate."
                            + " Please publish the eSpace '" + entityKey.OwnerKey + "' version that has the entity definition.");
                    }

                    fullTableName = (catalog == Constants.SystemDatabaseLogicalName)
                        ? tableName
                        : DatabaseAccess.ForDatabase(catalog)
                                        .DatabaseServices.DMLService.Identifiers.EscapeAndQualifyIdentifierForLocalDatabase(tableName);

                    tableNamesCache[entityKey] = fullTableName;
                }
            }

            return fullTableName;
        }
        
        internal bool CheckUserPermissionForActivity(Transaction tran, int activityId, int userId, int tenantId) {
            StringBuilder sql = new StringBuilder(@"
                SELECT 1
                FROM OSSYS_BPM_ACTIVITY ACT
                INNER JOIN OSSYS_BPM_ACTIVITY_DEFINITION AD ON AD.ID = ACT.ACTIVITY_DEF_ID ");

            GetTaskboxWhereClauseSql(sql, tran, /*canIgnoreAssignedUser*/true, " AND ACT.ID=@ACTIVITYID ");
            Command cmd = tran.CreateCommand(sql.ToString());
            cmd.CreateParameter("@ACTIVITYID", DbType.Int32, activityId);
            cmd.CreateParameter("@USERID", DbType.Int32, userId);
            cmd.CreateParameter("@TENANTID", DbType.Int32, tenantId);
            return Convert.ToBoolean(cmd.ExecuteScalar());
        }

        [TestSyntaxValues(Values = new[] { TestSyntaxValues.AUTO, "1", "1", "en-US", "" })]
        internal IDataReader GetActivityCount(Transaction trans, int userId, int tenantId, string locale, string additionalWhereClauses) {
            StringBuilder sql = new StringBuilder();
            string lastSeenActivityQuery = GetTaskboxLastSeenActivitySql(GetCachedTableName(trans, Constants.EpaTaskboxSeenActivityKey));
            bool needsLocaleTable = !String.IsNullOrEmpty(locale) && !String.IsNullOrEmpty(additionalWhereClauses);
            GetTaskboxActivityCountSelectClauseSql(sql, lastSeenActivityQuery);
            GetTaskboxFromClauseSql(sql, needsLocaleTable);
            GetTaskboxWhereClauseSql(sql, trans, /*canIgnoreAssignedUser*/ false, additionalWhereClauses);
            Command cmd = trans.CreateCommand(sql.ToString());
            cmd.CreateParameter("@USERID", DbType.Int32, userId);
            cmd.CreateParameter("@TENANTID", DbType.Int32, tenantId);

            if (needsLocaleTable) {
                cmd.CreateParameter("@LOCALE", DbType.String, locale);
            }

            return cmd.ExecuteReader();
        }
        
        [TestSyntaxValues(Values = new [] { TestSyntaxValues.AUTO, "1", "1", "0", "en-US", "", "10" })]
        internal virtual IDataReader GetActivities(Transaction trans, int userId, int tenantId, int startIndex, string locale, string additionalWhereClauses, int maxActivitiesReturned) {

            StringBuilder sql = new StringBuilder();

            sql.AppendFormat(@"
                WITH INBOXACTIVITIES AS (
                    SELECT 
                        ROW_NUMBER() OVER (
                            ORDER BY (CASE ACT.DUE_DATE WHEN @NULLDATE THEN @LONGFUTUREDATE ELSE ACT.DUE_DATE END) ASC,
                            ACT.OPENED DESC,
                            ACT.CREATED DESC) AS ROWNUMBER,
                        ACT.ID ID, 
                        AD.LABEL LABEL, 
                        ADL.LABEL LABEL_LANG, 
                        ACT.INBOX_DETAIL INBOX_DETAIL, 
                        ACT.DUE_DATE DUE_DATE, 
                        (CASE ACT.STATUS_ID WHEN 2 THEN 1 ELSE 0 END) AS OPENED, 
                        (CASE WHEN ACT.ID > {0} THEN 0 ELSE 1 END) AS SEEN ",
                GetTaskboxLastSeenActivitySql(GetCachedTableName(trans, Constants.EpaTaskboxSeenActivityKey)));

            GetTaskboxFromClauseSql(sql, true);
            GetTaskboxWhereClauseSql(sql, trans, false, additionalWhereClauses);

            sql.Append(@"
                )

                SELECT ID, LABEL, LABEL_LANG, INBOX_DETAIL, DUE_DATE, OPENED, SEEN
                FROM INBOXACTIVITIES
                WHERE ROWNUMBER > @STARTINDEX AND ROWNUMBER <= @ENDINDEX ");

            Command cmd = trans.CreateCommand(sql.ToString());
            cmd.CreateParameter("@USERID", DbType.Int32, userId);
            cmd.CreateParameter("@TENANTID", DbType.Int32, tenantId);
            cmd.CreateParameter("@STARTINDEX", DbType.Int32, startIndex);
            cmd.CreateParameter("@ENDINDEX", DbType.Int32, startIndex + maxActivitiesReturned);
            cmd.CreateParameter("@NULLDATE", DbType.DateTime, BuiltInFunction.NullDate());
            cmd.CreateParameter("@LONGFUTUREDATE", DbType.DateTime, BuiltInFunction.NewDate(3000, 1, 1));
            cmd.CreateParameter("@LOCALE", DbType.String, locale);
            IDataReader reader = cmd.ExecuteReader();
            return reader;
        }

        internal IDataReader GetNewOpenActivity(Transaction trans, int userId, int tenantId, int processId, string locale) {
            StringBuilder sql = new StringBuilder(@"
                SELECT 
                    ACT.ID ID, 
                    AD.LABEL LABEL, 
                    ADL.LABEL LABEL_LANG, 
                    ACT.INBOX_DETAIL INBOX_DETAIL, 
                    ACT.DUE_DATE DUE_DATE, 
                    1 OPENED, 
                    0 SEEN ");

            GetTaskboxFromClauseSql(sql, true);

            GetTaskboxWhereClauseSql(sql, trans, false,
                string.Format(" AND P.ID = @PROCESSID AND ACT.ID > {0} AND ACT.STATUS_ID = 2", GetTaskboxLastSeenActivitySql(GetCachedTableName(trans, Constants.EpaTaskboxSeenActivityKey))));

            sql.Append(" ORDER BY ACT.OPENED DESC");
            Command cmd = trans.CreateCommand(sql.ToString());
            cmd.CreateParameter("@USERID", DbType.Int32, userId);
            cmd.CreateParameter("@PROCESSID", DbType.Int32, processId);
            cmd.CreateParameter("@LOCALE", DbType.String, locale);
            cmd.CreateParameter("@TENANTID", DbType.Int32, tenantId);
            IDataReader reader = cmd.ExecuteReader();
            return reader;
        }

        // SQL Fragments
        protected string GetTaskboxLastSeenActivitySql(string lastSeenActivityTableName) {
            return string.Format("COALESCE((SELECT LAST_SEEN_ACTIVITY_ID FROM {0} SA WHERE SA.USER_ID = @USERID), 0)", lastSeenActivityTableName);
        }

        protected virtual void GetTaskboxActivityCountSelectClauseSql(StringBuilder sql, string lastSeenActivityQuery) {
            sql.AppendFormat("SELECT COUNT(1) TOTAL, SUM(CASE WHEN ACT.ID > {0} THEN 1 ELSE 0 END) UNSEEN ", lastSeenActivityQuery);
        }
        
        protected void GetTaskboxFromClauseSql(StringBuilder result, bool includeActivityDefinitionLang) {
            result.Append(string.Format(@"FROM OSSYS_BPM_ACTIVITY ACT
                INNER JOIN OSSYS_BPM_ACTIVITY_DEFINITION AD ON ACT.STATUS_ID IN ({0}, {1}) AND ACT.ACTIVITY_DEF_ID = AD.ID AND AD.IS_ACTIVE = 1
                INNER JOIN OSSYS_BPM_PROCESS_DEFINITION PD ON AD.PROCESS_DEF_ID = PD.ID AND PD.IS_ACTIVE = 1 AND PD.IS_LOCKED = 0
                INNER JOIN OSSYS_BPM_PROCESS P ON ACT.PROCESS_ID = P.ID AND P.STATUS_ID = 1
                INNER JOIN OSSYS_TENANT ON ACT.TENANT_ID = OSSYS_TENANT.ID AND OSSYS_TENANT.IS_ACTIVE = 1
                INNER JOIN OSSYS_ESPACE E ON PD.ESPACE_ID = E.ID AND E.IS_ACTIVE = 1 AND E.IS_LOCKED = 0 ", (int)ActivityStatus.Open, (int)ActivityStatus.Ready));

            if (includeActivityDefinitionLang) {
                result.Append("LEFT JOIN OSSYS_BPM_ACTIVITY_DEF_LANG ADL ON ACT.ACTIVITY_DEF_ID = ADL.ACTIVITY_DEF_ID AND ADL.LOCALE = @LOCALE ");
            }
        }

        protected virtual void GetTaskboxWhereClauseSql(StringBuilder result, Transaction trans, bool canIgnoreAssignedUser, string additionalWhereClauses) {

            bool useEM = TaskboxUsesEnterpriseManagerUserProvider(trans);

            if (useEM) {
                // complete the from clause...
                result.AppendFormat("LEFT JOIN {0} AE ON ACT.ID = AE.ID ",
                    GetCachedTableName(trans, Constants.EnterPriseManager.ACTIVITY_EXTENSION));
            }

            result.Append("WHERE (");

            if (useEM) {
                string groupTableName = GetCachedTableName(trans, Constants.EnterPriseManager.GROUP);
                string userMasterRoleTableName = GetCachedTableName(trans, Constants.EnterPriseManager.USER_MASTER_ROLE);
                string rolePermissionTableName = GetCachedTableName(trans, Constants.EnterPriseManager.ROLE_PERMISSION);
                string permissionAreaExtensionTableName = GetCachedTableName(trans, Constants.EnterPriseManager.PERMISSION_AREA_EXTENSION);
                string userExtensionTableName = GetCachedTableName(trans, Constants.EnterPriseManager.USER_EXTENSION);

                result.AppendFormat(@"
                    (
                        ACT.TENANT_ID = @TENANTID AND
                        (
                            ACT.USER_ID = @USERID 
                            OR (
                                {5} (
                                    (
                                        AE.GROUPID IS NULL 
                                        AND (
                                            ACT.GROUP_ID IS NULL 
                                            OR EXISTS (
                                                SELECT 1
                                                FROM OSSYS_GROUP_USER GU
                                                WHERE GU.USER_ID = @USERID AND GU.GROUP_ID = ACT.GROUP_ID  AND GU.TENANT_ID = ACT.TENANT_ID
                                            )
                                        )
                                        AND (
                                            AD.REQUIRES_PERMISSION = 0 
                                            OR EXISTS (
                                                SELECT 1
                                                FROM OSSYS_BPM_ACTIVITY_DEF_ROLE ADP
                                                INNER JOIN OSSYS_USER_ROLE EP ON EP.USER_ID = @USERID AND ADP.ROLE_ID = EP.ROLE_ID 
                                                WHERE ADP.ACTIVITY_DEF_ID = AD.ID AND EP.TENANT_ID = ACT.TENANT_ID
                                            )
                                            OR EXISTS (
				    							SELECT 1
                                                FROM OSSYS_BPM_ACTIVITY_DEF_ROLE ADP
                                                INNER JOIN OSSYS_GROUP_ROLE GR ON GR.ROLE_ID = ADP.ROLE_ID
                                                INNER JOIN OSSYS_GROUP_USER GU ON GU.GROUP_ID = GR.GROUP_ID AND GU.USER_ID = @USERID 
                                                WHERE ADP.ACTIVITY_DEF_ID = AD.ID AND GU.TENANT_ID = ACT.TENANT_ID
                                            )
                                        ) 
		                            ) 
                                    OR (
                                        AE.GROUPID IS NOT NULL 
                                        AND (
                                            AD.REQUIRES_PERMISSION = 1 
                                            OR EXISTS (
                                                SELECT 1 FROM {0} G
                                                JOIN {1} UMR ON 
                                                    G.ID = UMR.GROUPID 
                                                    AND UMR.USERMASTERID = (
                                                        SELECT UE.USERMASTERID FROM {2} UE WHERE UE.ID = @USERID
                                                    )
                                                WHERE G.ID = AE.GROUPID
                                            )
                                        )
                                        AND (
                                            AD.REQUIRES_PERMISSION = 0 
                                            OR EXISTS (
                                                SELECT 1 FROM {0} G
                                                JOIN {1} UMR ON
                                                    G.ID = UMR.GROUPID 
                                                    AND UMR.USERMASTERID = (
                                                        SELECT UE.USERMASTERID FROM {2} UE WHERE UE.ID = @USERID
                                                    )
                                                JOIN {3} RP ON RP.ROLEID = UMR.ROLEID 
                                                JOIN {4} PAE ON PAE.PERMISSIONMASTERID = RP.PERMISSIONMASTERID
                                                JOIN OSSYS_ROLE PA ON PAE.ID = PA.ID AND PA.IS_ACTIVE = 1
                                                JOIN OSSYS_BPM_ACTIVITY_DEF_ROLE ADR ON ADR.ROLE_ID = PA.ID
                                                WHERE AE.GROUPID = G.ID AND ADR.ACTIVITY_DEF_ID = AD.ID
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )",
                    groupTableName, // {0} g
                    userMasterRoleTableName,    // {1} umr
                    userExtensionTableName, // {2} ue
                    rolePermissionTableName,    // {3} rp
                    permissionAreaExtensionTableName, // {4} pae
                    canIgnoreAssignedUser ? string.Empty : "ACT.USER_ID IS NULL AND " // {5}
                );
            } else {
                result.AppendFormat(@"
                    ( ACT.TENANT_ID = @TENANTID AND
                        (
                            ACT.USER_ID = @USERID 
                            OR (
                                {0}
                                (
                                    ACT.GROUP_ID IS NULL 
                                    OR EXISTS (
                                        SELECT 1
                                        FROM OSSYS_GROUP_USER GU
                                        WHERE GU.USER_ID = @USERID AND GU.GROUP_ID = ACT.GROUP_ID AND GU.TENANT_ID = ACT.TENANT_ID
                                    )
                                )
                                AND (
                                    AD.REQUIRES_PERMISSION = 0 
                                    OR EXISTS (
                                        SELECT 1
                                        FROM OSSYS_BPM_ACTIVITY_DEF_ROLE ADP
                                        INNER JOIN OSSYS_USER_EFFECTIVE_ROLE EP 
                                        ON EP.USER_ID = @USERID AND ADP.ROLE_ID = EP.ROLE_ID 
                                        WHERE ADP.ACTIVITY_DEF_ID = AD.ID AND EP.TENANT_ID = ACT.TENANT_ID
                                    )
                                )
                            )
                        )
                    )",
                    canIgnoreAssignedUser ? String.Empty : "ACT.USER_ID IS NULL AND ");
            }

            result.Append(") ");

            if (!string.IsNullOrEmpty(additionalWhereClauses)) {
                result.Append(additionalWhereClauses);
            }
        }
    }
}