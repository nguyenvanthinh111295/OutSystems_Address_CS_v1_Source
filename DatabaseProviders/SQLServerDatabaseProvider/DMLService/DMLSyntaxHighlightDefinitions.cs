/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using OutSystems.HubEdition.Extensibility.Data.DMLService;
using System.Collections.Generic;

namespace OutSystems.HubEdition.DatabaseProvider.SqlServer.DMLService {
    public class DMLSyntaxHighlightDefinitions : GenericDMLSyntaxHighlightDefinitions {

        public DMLSyntaxHighlightDefinitions(DMLService dmlService) : base(dmlService) { }

        /// <summary>
        /// Based on http://msdn.microsoft.com/en-us/library/ms189822(v=sql.110).aspx.
        /// Repeated words were removed (that are also in Function or Operators)
        /// </summary>
        public override IEnumerable<string> Keywords {
            get {
                return new[] {
                    "ADD", "ALTER", "AS", "ASC", "AUTHORIZATION","BACKUP", 
                    "BEGIN", "BREAK", "BROWSE", "BULK", "BY", 
                    "CASCADE", "CASE", "CHECK", "CHECKPOINT", "CLOSE", "CLUSTERED", "COLLATE", "COLUMN", "COMMIT", "COMPUTE", "CONSTRAINT", "CONTAINS", "CONTAINSTABLE", "CONTINUE", "CREATE", "CROSS", "CURRENT", "CURRENT_DATE", "CURRENT_TIME", "CURRENT_TIMESTAMP", "CURRENT_USER",
                    "DATABASE", "DBCC", "DEALLOCATE", "DECLARE", "DEFAULT", "DELETE", "DENY", "DESC", "DISK", "DISTINCT", "DISTRIBUTED", "DOUBLE", "DROP", "DUMP",
                    "ELSE", "END", "ERRLVL", "ESCAPE", "EXEC", "EXECUTE", "EXIT", "EXTERNAL",
                    "FETCH", "FILE", "FILLFACTOR", "FOR", "FOREIGN", "FREETEXT", "FREETEXTTABLE", "FROM", "FULL", "FUNCTION",
                    "GOTO", "GRANT", "GROUP",
                    "HAVING", "HOLDLOCK",
                    "IDENTITY", "IDENTITY_INSERT", "IDENTITYCOL", "IF", "INDEX", "INNER", "INSERT", "INTO", "IS",
                    "JOIN",
                    "KEY", "KILL", 
                    "LEFT", "LINENO", "LOAD",
                    "MERGE",
                    "NATIONAL", "NOCHECK", "NONCLUSTERED", "NULL",
                    "OF", "OFF", "OFFSETS", "ON",
                    "OPEN", "OPENDATASOURCE", "OPENQUERY", "OPENROWSET", "OPENXML", "OPTION", "ORDER", "OUTER", "OVER",
                    "PERCENT", "PIVOT", "PLAN", "PRECISION", "PRIMARY", "PRINT", "PROC", "PROCEDURE", "PUBLIC",
                    "RAISERROR", "READ", "READTEXT", "RECONFIGURE", "REFERENCES", "REPLICATION", "RESTORE", "RESTRICT", "RETURN", "REVERT", "REVOKE", "RIGHT", "ROLLBACK", "ROWCOUNT", "ROWGUIDCOL", "RULE", 
                    "SAVE", "SCHEMA", "SECURITYAUDIT", "SELECT", "SEMANTICKEYPHRASETABLE", "SEMANTICSIMILARITYDETAILSTABLE", "SEMANTICSIMILARITYTABLE", "SESSION_USER", "SET", "SETUSER", "SHUTDOWN", "STATISTICS", "SYSTEM_USER", 
                    "TABLE", "TABLESAMPLE", "TEXTSIZE", "THEN", "TO", "TOP", "TRAN", "TRANSACTION", "TRIGGER", "TRUNCATE", "TSEQUAL",
                    "UNIQUE", "UNPIVOT", "UPDATE", "UPDATETEXT", "USE", "USER",
                    "VALUES", "VARYING", "VIEW",
                    "WAITFOR", "WHEN", "WHERE", "WHILE", "WITH", "WITHIN GROUP", "WRITETEXT"
                };
            }
        }

        /// <summary>
        /// Based on http://msdn.microsoft.com/en-us/library/ms174318(v=sql.110).aspx
        /// </summary>
        public override IEnumerable<string> Functions {
            get {
                return new[] {
                    // Rowset
                    "OPENDATASOURCE", "OPENQUERY", "OPENROWSET", "OPENXML",
                    // Aggregate
                    "AVG", "CHECKSUM_AGG", "COUNT", "COUNT_BIG", "GROUPING", "GROUPING_ID", "MIN", "MAX", "STDEV", "STDEVP", "SUM", "VAR", "VARP", 
                    // Ranking
                    "DENSE_RANK", "NTILE", "RANK", "ROW_NUMBER",
                    // Scalar - Conversion
                    "CAST", "CONVERT", "TRY_CAST", "TRY_CONVERT", "TRY_PARSE",
                    // Scalar - Cursor
                    "CURSOR_STATUS",
                    // Scalar - Date and Time
                    "DATEADD", "DATEDIFF", "DATEFROMPARTS", "DATENAME", "DATEPART", "DATETIME2FROMPARTS", "DATETIMEFROMPARTS", 
                    "DATETIMEOFFSETFROMPARTS", "DAY", "EOMONTH", "GETDATE", "GETUTCDATE", "ISDATE", "MONTH", "SMALLDATETIMEFROMPARTS", 
                    "SWITCHOFFSET", "SYSDATETIME", "SYSDATETIMEOFFSET", "SYSUTCDATETIME", "TIMEFROMPARTS", "TODATETIMEOFFSET", "YEAR",   
                    // Scalar - Logical
                    "CHOOSE", "IIF",
                    // Scalar - Math
                    "ABS", "ACOS", "ASIN", "ATAN", "ATN2", "CEILING", "COS", "COT", "DEGREES", "EXP", "FLOOR", "LOG", "LOG10", "PI", 
                    "RADIANS", "RAND", "ROUND", "SIGN", "SIN", "SQRT", "SQUARE", "POWER", "TAN",  
                    // Scalar - Metadata
                    "APP_NAME", "APPLOCK_MODE", "APPLOCK_TEST", "ASSEMBLYPROPERTY", "COL_LENGTH", "COL_NAME", "COLUMNPROPERTY", "DATABASE_PRINCIPAL_ID",
                    "DATABASEPROPERTYEX", "DB_ID", "DB_NAME", "FILE_ID", "FILE_IDEX", "FILE_NAME", "FILEGROUP_ID", "FILEGROUP_NAME", "FILEGROUPPROPERTY",
                    "FILEPROPERTY", "FULLTEXTCATALOGPROPERTY", "FULLTEXTSERVICEPROPERTY", "INDEX_COL", "INDEXKEY_PROPERTY", "INDEXPROPERTY", "NEXT VALUE FOR",
                    "OBJECT_DEFINITION", "OBJECT_ID", "OBJECT_NAME", "OBJECT_SCHEMA_NAME", "OBJECTPROPERTY", "OBJECTPROPERTYEX", "ORIGINAL_DB_NAME",
                    "PARSENAME", "SCHEMA_ID", "SCHEMA_NAME", "SCOPE_IDENTITY", "SERVERPROPERTY", "STATS_DATE", "TYPE_ID", "TYPE_NAME", "TYPEPROPERTY",
                    // Scalar - Security
                    "CERTENCODED", "CERTPRIVATEKEY", "DATABASE_PRINCIPAL_ID", "HAS_PERMS_BY_NAME", "IS_MEMBER", "IS_ROLEMEMBER", 
                    "IS_SRVROLEMEMBER", "ORIGINAL_LOGIN", "PERMISSIONS", "PWDCOMPARE", "PWDENCRYPT", "SCHEMA_ID", "SCHEMA_NAME",
                    "SUSER_ID", "SUSER_SID", "SUSER_SNAME", "SUSER_NAME", "USER_ID", "USER_NAME",
                    // Scalar - String
                    "ASCII", "CHAR", "CHARINDEX", "CONCAT", "DIFFERENCE", "FORMAT", "LEFT", "LEN", "LOWER", "LTRIM", "NCHAR", "PATINDEX", "QUOTENAME", 
                    "REPLACE", "REPLICATE", "REVERSE", "RIGHT", "RTRIM", "SOUNDEX", "SPACE", "STR", "STUFF", "SUBSTRING", "UNICODE", "UPPER",
                    // Scalar - System
                    "BINARY_CHECKSUM", "CHECKSUM", "CONNECTIONPROPERTY", "CONTEXT_INFO", "CURRENT_REQUEST_ID", "ERROR_LINE", "ERROR_MESSAGE", "ERROR_NUMBER", 
                    "ERROR_PROCEDURE", "ERROR_SEVERITY", "ERROR_STATE", "FORMATMESSAGE", "GETANSINULL", "GET_FILESTREAM_TRANSACTION_CONTEXT", "HOST_ID",
                    "HOST_NAME", "ISNULL", "ISNUMERIC", "MIN_ACTIVE_ROWVERSION", "NEWID", "NEWSEQUENTIALID", "ROWCOUNT_BIG", "XACT_STATE",
                    // Scalar - Text and Image
                    "PATINDEX", "TEXTPTR", "TEXTVALID",
                    // Null related (rls: added because they don't make sense as keywords)
                    "COALESCE", "NULLIF"
                };
            }
        }

        /// <summary>
        /// Based on http://msdn.microsoft.com/en-us/library/ms174986(v=sql.110).aspx
        /// </summary>
        public override IEnumerable<string> Operators {
            get { return new[] {
                // Arithmetic
                "+", "-", "*", "/", "%",
                // Bitwise
                "&", "|", "^",
                // Comparison
                "=", ">", "<", ">=", "<=", "<>", "!=", "!<", "!>",
                // Compound
                "+=", "-=", "*=", "/=", "%=", "&=", "|=", "^=",
                // Logical
                "ALL", "AND", "ANY", "BETWEEN", "EXISTS", "IN", "LIKE", "NOT", "OR", "SOME",
                // Scope
                "::",
                // Set
                "EXCEPT", "INTERSECT", "UNION",
                // String
                /* "+", "+=" // commented because these are overloads of operators already defined here */
                // Unary
                "~" /* , "+", "-" // commented because these are overloads of operators already defined here */
            }; }
        }

        /// <summary>
        /// Based on http://msdn.microsoft.com/en-us/library/ms187752(v=sql.110).aspx
        /// </summary>
        public override IEnumerable<string> DataTypes {
            get {
                return new[] {
                    // Exact
                   "BIGINT", "BIT", "DECIMAL", "INT", "MONEY", "NUMERIC", "SMALLINT", "SMALLMONEY", "TINYINT",
                   // Approximate
                   "FLOAT", "REAL",
                    // Date and Time
                    "DATE", "DATETIME2", "DATETIME", "DATETIMEOFFSET", "SMALLDATETIME", "TIME",
                    // Character Strings
                    "CHAR", "TEXT", "VARCHAR",
                    // Unicode Character Strings
                    "NCHAR", "NTEXT", "NVARCHAR",
                    // Binary Strings
                    "BINARY", "IMAGE", "VARBINARY",
                    // Other
                    "CURSOR", "HIERARCHYID", "SQL_VARIANT", "TABLE", "TIMESTAMP", "UNIQUEIDENTIFIER", "XML", "GEOGRAPHY", "GEOMETRY"
                }; 
            }
        }
    }
}