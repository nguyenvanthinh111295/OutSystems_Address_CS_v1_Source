/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;
using System.Collections.Generic;
using System.Data;
using OutSystems.HubEdition.DatabaseProvider.iDB2.DatabaseObjects;
using OutSystems.HubEdition.Extensibility.Data;
using OutSystems.HubEdition.Extensibility.Data.DatabaseObjects;
using OutSystems.HubEdition.Extensibility.Data.IntrospectionService;
using OutSystems.RuntimeCommon;

namespace OutSystems.HubEdition.DatabaseProvider.iDB2.IntrospectionService {
    public class iDB2IntrospectionService : BaseIntrospectionService {

        private readonly string paramPrefix;

        public iDB2IntrospectionService(IDatabaseServices databaseServices) : base(databaseServices) {
            paramPrefix = databaseServices.ExecutionService.ParameterPrefix;
        }
        

        /// <summary>
        /// The DB2 architecture is Database(s)->Schema(s)->Table(s).
        /// As the user can only connect to a specific Database (which is defined in the configuration)
        /// this method should return a list of the Schemas in that database, which were not created by the system
        /// </summary>
        /// <returns>List with schemas not created by the System</returns>
        public override IEnumerable<IDatabaseInfo> ListDatabases() {
            List<IDatabaseInfo> result = new List<IDatabaseInfo>();
            string query = "SELECT DISTINCT SCHEMA_NAME "
                            + "FROM SYSIBM.SCHEMATA ";
            using (IDbConnection conn = DatabaseServices.TransactionService.CreateConnection()) {
                IDbCommand cmd = DatabaseServices.ExecutionService.CreateCommand(conn, query);
                cmd.CommandTimeout = QueryTimeout;
                using (IDataReader reader = cmd.ExecuteReader()) {
                    while (reader.Read()) {
                        string dbName = (string)reader["SCHEMA_NAME"];
                        result.Add(new iDB2DatabaseInfo(DatabaseServices, dbName));
                    }
                }
            }
            return result;
        }

        public override IEnumerable<ITableSourceInfo> ListTableSources(IDatabaseInfo database, IsTableSourceToIgnore isTableSourceToIgnore) {
            IList<ITableSourceInfo> tables = new List<ITableSourceInfo>();
            iDB2DatabaseInfo databaseInfo = database as iDB2DatabaseInfo;
            if (databaseInfo == null) {
                return null;
            }
            using (IDbConnection conn = DatabaseServices.TransactionService.CreateConnection()) {

                string sql = "SELECT TABLE_NAME "
                           + "FROM QSYS2.SYSTABLES "
                           + "WHERE SYSTEM_TABLE = 'N' and SYSTEM_TABLE_SCHEMA = '" + database.Identifier + "'";

                IDbCommand cmd = DatabaseServices.ExecutionService.CreateCommand(conn, sql);
                cmd.CommandTimeout = QueryTimeout;
                using (IDataReader reader = cmd.ExecuteReader()) {
                    while (reader.Read()) {
                        string tableName = (string)reader["TABLE_NAME"];
                        if (!isTableSourceToIgnore(tableName) && DoesNotContainProblematicChars(tableName))
                        {
                            string qualifiedTableName = GetQualifiedIdentifier(databaseInfo.Database, tableName);
                            tables.Add(new iDB2TableSourceInfo(DatabaseServices, databaseInfo, tableName, qualifiedTableName));
                        }
                    }
                }
            }
            return tables;
        }

        private bool DoesNotContainProblematicChars(String tableName) {
            return !(tableName.Contains("'") ||
                     tableName.Contains("ª") ||
                     tableName.Contains("º") ||
                     tableName.Contains("«") ||
                     tableName.Contains("»") ||
                     tableName.Contains("´") ||
                     tableName.Contains("Ç") ||
                     tableName.Contains("§"));
        }

        private bool DatabaseExists(IDbConnection conn, iDB2DatabaseInfo databaseInfo)
        {
            string query = "SELECT COUNT(*) FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = " + paramPrefix + "schema";
            IDbCommand cmd = DatabaseServices.ExecutionService.CreateCommand(conn, query);
            cmd.CommandTimeout = QueryTimeout;
            DatabaseServices.ExecutionService.CreateParameter(cmd, paramPrefix + "schema", DbType.String, databaseInfo.Database);
            using (IDataReader reader = cmd.ExecuteReader()) {
                return reader.Read();
            }
        }

        private string GetQualifiedIdentifier(string schema, string tableName) {
            return DatabaseServices.DMLService.Identifiers.EscapeIdentifier(schema) + "." +
                DatabaseServices.DMLService.Identifiers.EscapeIdentifier(tableName);
        }

        public override IEnumerable<ITableSourceColumnInfo> GetTableSourceColumns(ITableSourceInfo tableSource) {
            iDB2TableSourceInfo tableInfo = tableSource as iDB2TableSourceInfo;
            if (tableInfo == null) {
                return null;
            }
            using (IDbConnection conn = DatabaseServices.TransactionService.CreateConnection()) {
                if (!CheckTableExists(conn, tableInfo)) {
                    throw new IntrospectionServiceException("'" + tableSource.DisplayName + "' is not a valid physical table name.");
                }
            }
            return GetColumnsInfo(tableInfo);
        }

        public override IEnumerable<ITableSourceForeignKeyInfo> GetTableSourceForeignKeys(ITableSourceInfo tableSource) {
            iDB2TableSourceInfo tableInfo = tableSource as iDB2TableSourceInfo;
            if (tableInfo == null) {
                return null;
            }
            using (IDbConnection conn = DatabaseServices.TransactionService.CreateConnection()) {
                if (!CheckTableExists(conn, tableInfo)) {
                    throw new IntrospectionServiceException("'" + tableSource.DisplayName +
                                                            "' is not a valid physical table name.");
                }
            }
            return GetForeignKeysInfo(tableInfo);
        }

        private IList<ITableSourceColumnInfo> GetColumnsInfo(iDB2TableSourceInfo tableSource) {
            IList<ITableSourceColumnInfo> columnsInfo = new List<ITableSourceColumnInfo>();
            using (IDbConnection conn = DatabaseServices.TransactionService.CreateConnection()) {

                string query = @"SELECT COLS.*, PKS.PK_NAME, CHK.CHECK_CLAUSE, UDTS.ORDERING_ROUT_NAME 
                                 FROM QSYS2.SYSCOLUMNS COLS 
                                 INNER JOIN QSYS2.SYSTABLES TAB ON TAB.TABLE_NAME = COLS.TABLE_NAME AND TAB.TABLE_SCHEMA = COLS.TABLE_SCHEMA 
                                 LEFT JOIN QSYS.QADBFDEP DEP ON DEP.DBFFDP = TAB.SYSTEM_TABLE_NAME AND DEP.DBFLDP = TAB.SYSTEM_TABLE_SCHEMA
                                 LEFT JOIN SYSIBM.SQLPRIMARYKEYS  PKS ON PKS.COLUMN_NAME = COLS.COLUMN_NAME AND PKS.TABLE_NAME = COLS.TABLE_NAME AND PKS.TABLE_SCHEM = COLS.TABLE_SCHEMA 
                                 LEFT JOIN QSYS2.SYSCHKCST CHK ON  CHK.CHECK_CLAUSE LIKE COLS.COLUMN_NAME ||' IN%'
                                 LEFT JOIN SYSIBM.UDT_S UDTS ON UDTS.UDT_NAME = COLS.USER_DEFINED_TYPE_NAME 
                                 WHERE COLS.TABLE_NAME = '" + tableSource.Name + @"'
                                    AND COLS.SYSTEM_TABLE_SCHEMA = '" + tableSource.Database.Identifier + @"'
                                    AND ( CHK.CONSTRAINT_NAME IS NULL
                                          OR (( TAB.TABLE_TYPE = 'T' OR  TAB.TABLE_TYPE = 'P')  AND
                                              CHK.CONSTRAINT_NAME IN ( SELECT CONSTRAINT_NAME
                                                                       FROM QSYS2.SYSCST CST
                                                                       WHERE CST.system_table_name =  TAB.SYSTEM_TABLE_NAME 
                                                                             AND CST.system_table_schema = TAB.SYSTEM_TABLE_SCHEMA))
                                          OR (( TAB.TABLE_TYPE = 'V' or TAB.TABLE_TYPE = 'L')  AND
                                              CHK.CONSTRAINT_NAME IN ( SELECT CONSTRAINT_NAME
                                                                       FROM QSYS2.SYSCST CST
                                                                       WHERE CST.system_table_schema = DEP.DBFLIB
                                                                             AND CST.system_table_name =  DEP.DBFFIL)))";

                IDbCommand cmd = DatabaseServices.ExecutionService.CreateCommand(conn, query);
                cmd.CommandTimeout = QueryTimeout;

                using (IDataReader reader = cmd.ExecuteReader()) {
                    int primaryKeyColumnCount = 0;
                    while (reader.Read()) {
                        string columnName = (string)reader["COLUMN_NAME"];

                        IDataTypeInfo datatype = CreateDataTypeInfo(reader["DATA_TYPE"] == DBNull.Value ? null : (string)reader["DATA_TYPE"],
                            reader["LENGTH"] == DBNull.Value ? 0 : Convert.ToInt32(reader["LENGTH"]),
                            reader["NUMERIC_PRECISION"] == DBNull.Value ? 0 : Convert.ToInt32(reader["NUMERIC_PRECISION"]),
                            reader["NUMERIC_SCALE"] == DBNull.Value ? 0 : Convert.ToInt32(reader["NUMERIC_SCALE"]),
                            reader["CHECK_CLAUSE"] == DBNull.Value ? null : (string)reader["CHECK_CLAUSE"],
                            reader["ORDERING_ROUT_NAME"] == DBNull.Value ? null : (string)reader["ORDERING_ROUT_NAME"],
                            reader["CCSID"] == DBNull.Value ? 0 : Convert.ToInt32(reader["CCSID"]));

                        bool isMandatory = "N".EqualsIgnoreCase((string)reader["IS_NULLABLE"]);
                        bool isPrimaryKey = (reader["PK_NAME"] != DBNull.Value);
                        bool isAutoGenerated = "YES".EqualsIgnoreCase((string)reader["IS_IDENTITY"]);

                        iDB2TableSourceColumnInfo info = new iDB2TableSourceColumnInfo(tableSource, columnName, datatype, isMandatory, isPrimaryKey, isAutoGenerated);
                        columnsInfo.Add(info);
                        primaryKeyColumnCount += isPrimaryKey ? 1 : 0;
                    }
                    if (primaryKeyColumnCount > 1) {
                        //we don't support composite primary keys so setting all to non primary key
                        IList<ITableSourceColumnInfo> columnsInfoCopy = new List<ITableSourceColumnInfo>();

                        foreach (ITableSourceColumnInfo c in columnsInfo) {
                            columnsInfoCopy.Add(new iDB2TableSourceColumnInfo(c.TableSource, c.Name, c.DataType, c.IsMandatory, false, c.IsAutoGenerated));
                        }
                        columnsInfo = columnsInfoCopy;
                    }
                }
            }
            return columnsInfo;
        }

        private bool CheckTableExists(IDbConnection conn, iDB2TableSourceInfo tableSource){
            String query = "SELECT TABLE_NAME "
                            + "FROM QSYS2.SYSTABLES "
                            + "WHERE TABLE_NAME = '" + tableSource.Name + "' and SYSTEM_TABLE_SCHEMA = '" + tableSource.Database.Identifier + "'";

            IDbCommand cmd = DatabaseServices.ExecutionService.CreateCommand(conn, query);
            cmd.CommandTimeout = QueryTimeout;
            using (IDataReader reader = cmd.ExecuteReader()) {
                return reader.Read();
            }


        }

        private IDataTypeInfo CreateDataTypeInfo(string type, int length, int precision, int scale, String checkClause, String rout_name, int ccsid)
        {
            DBDataType dataType;
            int columnLength = 0, columnDecimals = 0;
            string typeCheck = type.ToLower();
            String boolCheck = "IN(0,1)";
            string extraInfo = "";


            if (typeCheck == "distinct")
                typeCheck = rout_name.ToLower(); //Means that this is a user defined type

            switch (typeCheck) {
                case "smallint":
                case "integer":
                    if (checkClause != null && checkClause.Replace(" ", "").EndsWith(boolCheck)) {
                        dataType = DBDataType.BOOLEAN;
                        columnLength = 2;
                    } else {
                        dataType = DBDataType.INTEGER;
                        columnLength = precision + 1; //Don't know why but, integer and smallints need a +1
                    }
                    break;
                case "bigint":
                    if (checkClause != null && checkClause.Replace(" ", "").EndsWith(boolCheck)) {
                        dataType = DBDataType.BOOLEAN;
                        columnLength = 2;
                    } else {
                        dataType = DBDataType.LONGINTEGER;
                    }
                    break;
                case "decimal":
                case "numeric":
                    if (precision > 28 || scale > 8) {
                        dataType = DBDataType.TEXT;
                        columnLength = precision + 3; // +3 ( extra space for sign, 0 and . )
                    } else if (1 <= precision && precision <= 9 && scale == 0) {
                        dataType = DBDataType.INTEGER;
                    } else if (10 <= precision && precision <= 18 && scale == 0) {
                        dataType = DBDataType.LONGINTEGER;
                    } else {
                        dataType = DBDataType.DECIMAL;
                        columnLength = precision;
                        columnDecimals = scale;
                    }
                    extraInfo = "(" + precision + "," + scale + ")";
                    break;
                case "date":
                    dataType = DBDataType.DATE;
                    columnLength = 11; // YYYY-MM-DD + extra character for possible string ending
                    break;
                case "timestmp":
                    dataType = DBDataType.DATE_TIME;
                    columnLength = 30; // YYYY-MM-DD-hh:mm:ss.nnnnnnnnn + extra character for possible string ending
                    break;
                case "time":
                    dataType = DBDataType.TEXT;
                    columnLength = 9; // hh:mm:ss + extra character for possible string ending
                    break;
                case "char":
                case "varchar":
                    if (ccsid == 65535) {
                        dataType = DBDataType.BINARY_DATA;
                    } else {
                        dataType = DBDataType.TEXT;
                        columnLength = Math.Min(int.MaxValue, length);
                        extraInfo = "(" + length + ")";
                    }
                    break;
                case "varg":
                case "graphic":
                    if (ccsid == 1200) {
                        dataType = DBDataType.TEXT;
                        columnLength = Math.Min(int.MaxValue, length);
                    } else {
                        dataType = DBDataType.UNKNOWN;
                    }
                    
                    break;
                case "clob":
                case "dbclob":
                case "xml":
                    dataType = DBDataType.TEXT;
        	        columnLength = Math.Min(int.MaxValue, length);
                    break;
                case "binary":
                case "varbin":
                case "blob":
                    dataType = DBDataType.BINARY_DATA;
                    break;
                case "decfloat":
                    dataType = DBDataType.TEXT;
                    columnLength = (precision == 16 ? 402 : 6180); // for 16 digits of precision we need 401 (16 + 384 + 2) chars, for 34 digits we need 6179 (34 + 6144 + 2) chars
                    extraInfo = "(" + precision + ")";
                    break;
                case "float":
                    dataType = DBDataType.TEXT;
                    columnLength = (precision == 24 ? 49 : 327); // for 24 bits of precision we need 49 (9 + 38 + 2) chars, for 53 bits of precision we need 327 (17 + 308 + 2) chars
                    extraInfo = "(" + precision + ")";
                    break;
                default:
                    dataType = DBDataType.UNKNOWN;
                    break;
            }
            return new iDB2DataTypeInfo(dataType, type + extraInfo, columnLength, columnDecimals);
        }

        private IList<ITableSourceForeignKeyInfo> GetForeignKeysInfo(iDB2TableSourceInfo tableSource) {
            IList<ITableSourceForeignKeyInfo> foreignKeys = new List<ITableSourceForeignKeyInfo>();

            string query = "SELECT FKS.*, RCS.DELETE_RULE AS CASCADE "
                        + "FROM SYSIBM.SQLFOREIGNKEYS FKS "
                        + "LEFT JOIN SYSIBM.REFERENTIAL_CONSTRAINTS RCS ON RCS.CONSTRAINT_NAME = FKS.FK_NAME "
                        + "WHERE FKTABLE_SCHEM = '" + tableSource.Database.Identifier + "' "
                        + "and FKTABLE_NAME = '" + tableSource.Name + "'"
                        + "and CONSTRAINT_SCHEMA = '" + tableSource.Database.Identifier + "'";

            using (IDbConnection conn = DatabaseServices.TransactionService.CreateConnection()) {
                IDbCommand cmd = DatabaseServices.ExecutionService.CreateCommand(conn, query);
                cmd.CommandTimeout = QueryTimeout;
                using (IDataReader reader = cmd.ExecuteReader()) {
                    while (reader.Read()) {
                        string foreignKeyName = (string)reader["FK_NAME"];
                        string columnName = (string)reader["FKCOLUMN_NAME"];
                        string referencedSchemaName = (string)reader["PKTABLE_SCHEM"];
                        string referencedTableName = (string)reader["PKTABLE_NAME"];
                        string referencedColumnName = (string)reader["PKCOLUMN_NAME"];
                        bool isCascadeDelete = "CASCADE".EqualsIgnoreCase((string)reader["CASCADE"]);
                        string qualifiedReferencedTableName = GetQualifiedIdentifier(referencedSchemaName, referencedTableName);
                        var a = tableSource.Database;
                        ITableSourceInfo referencedTableSource = new iDB2TableSourceInfo(DatabaseServices, tableSource.Database, referencedTableName, qualifiedReferencedTableName);
                        ITableSourceForeignKeyInfo foreignKeyInfo = new iDB2TableSourceForeignKeyInfo(tableSource, foreignKeyName, columnName, referencedTableSource, referencedColumnName, isCascadeDelete);
                        foreignKeys.Add(foreignKeyInfo);
                    }
                }
                return foreignKeys;
            }
        }
    }
}