/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using OutSystems.HubEdition.Extensibility.Data.DMLService;
using System.Collections.Generic;

namespace OutSystems.HubEdition.DatabaseProvider.MySQL.DMLService {
    public class MySQLDMLSyntaxHighlightDefinitions : GenericDMLSyntaxHighlightDefinitions {

        public MySQLDMLSyntaxHighlightDefinitions(MySQLDMLService dmlService) : base(dmlService) { }

        public override IEnumerable<string> Keywords {
            get {
                return new[] {
                    "ACCESSIBLE", "ADD", "ALL", "ALTER", "ANALYZE", "AS", "ASC", "ASENSITIVE", "BEFORE",
                    "BOTH", "BY", "CALL", "CASCADE", "CASE", "CHANGE", "CHARACTER", "CHECK", "COLLATE", "COLUMN",
                    "CONDITION", "CONSTRAINT", "CONTINUE", "CREATE", "CROSS",
                    "CURSOR", "DATABASES", "DAY_HOUR", "DAY_MICROSECOND", "DAY_MINUTE", "DAY_SECOND", "DEC",
                    "DECLARE", "DEFAULT", "DELAYED", "DELETE", "DESC", "DESCRIBE", "DETERMINISTIC", "DISTINCT", "DISTINCTROW",
                    "DROP", "DUAL", "EACH", "ELSE", "ELSEIF", "ENCLOSED", "ESCAPED", "EXISTS", "EXIT", "EXPLAIN", "FALSE",
                    "FETCH", "FLOAT4", "FLOAT8", "FOR", "FORCE", "FOREIGN", "FROM", "FULLTEXT", "GRANT", "GROUP", "HAVING",
                    "HIGH_PRIORITY", "HOUR_MICROSECOND", "HOUR_MINUTE", "HOUR_SECOND", "IGNORE", "INDEX", "INFILE", "INNER",
                    "INOUT", "INSENSITIVE", "INSERT", "INT1", "INT2", "INT3", "INT4", "INT8", "INTO",
                    "IO_AFTER_GTIDS", "IO_BEFORE_GTIDS", "IS", "ITERATE", "JOIN", "KEY", "KEYS", "KILL", "LEADING", "LEAVE",
                    "LIMIT", "LINEAR", "LINES", "LOAD", "LOCK", "LONG", "LOOP",
                    "LOW_PRIORITY", "MASTER_BIND", "MASTER_SSL_VERIFY_SERVER_CERT", "MAXVALUE",
                    "MIDDLEINT", "MINUTE_MICROSECOND", "MINUTE_SECOND", "MODIFIES", "NATURAL",
                    "NO_WRITE_TO_BINLOG", "NULL", "ON", "OPTIMIZE", "OPTION", "OPTIONALLY", "ORDER", "OUT", "OUTER",
                    "OUTFILE", "PARTITION", "PRECISION", "PRIMARY", "PROCEDURE", "PURGE", "RANGE", "READ", "READS", "READ_WRITE",
                    "REFERENCES", "RELEASE", "RENAME", "REQUIRE", "RESIGNAL", "RESTRICT", "RETURN", "REVOKE",
                    "SCHEMAS", "SECOND_MICROSECOND", "SELECT", "SENSITIVE", "SEPARATOR", "SHOW", "SIGNAL",
                    "SPATIAL", "SPECIFIC", "SQL", "SQLEXCEPTION", "SQLSTATE", "SQLWARNING", "SQL_BIG_RESULT",
                    "SQL_CALC_FOUND_ROWS", "SQL_SMALL_RESULT", "SSL", "STARTING", "STRAIGHT_JOIN", "TABLE", "TERMINATED", "THEN",
                    "TO", "TRAILING", "TRIGGER", "TRUE", "UNDO", "UNION", "UNIQUE", "UNLOCK", "UNSIGNED", "UPDATE",
                    "USAGE", "USE", "USING", "VALUES", "VARCHARACTER",
                    "VARYING", "WHEN", "WHERE", "WHILE", "WITH", "WRITE", "YEAR_MONTH", "ZEROFILL", "GET", "IO_AFTER_GTIDS",
                    "IO_BEFORE_GTIDS", "MASTER_BIND", "ONE_SHOT", "PARTITION", "SQL_AFTER_GTIDS", "SQL_BEFORE_GTIDS"
                };
            }
        }

        /// <summary>
        /// Based on http://dev.mysql.com/doc/refman/5.6/en/func-op-summary-ref.html
        /// </summary>
        public override IEnumerable<string> Functions {
            get {
                return new[] {
                    // Comparison functions
                    "COALESCE", "GREATEST", "IN", "INTERVAL", "ISNULL", "LEAST",
                    // Control flow functions
                    "IF", "IFNULL", "NULLIF",
                    //String functions
                    "AGAINST", "ASCII", "BIN", "BIT_LENGTH", "CHAR_LENGTH", "CHARACTER_LENGTH", "CONCAT_WS", "CONCAT", "ELT", "EXPORT_SET",
                    "FIELD", "FIND_IN_SET", "FORMAT", "FROM_BASE64", "HEX", "INSERT", "INSTR", "LCASE", "LEFT", "LENGTH", "LOAD_FILE",
                    "LOCATE", "LOWER", "LPAD", "LTRIM", "MAKE_SET", "MATCH", "MID", "OCT", "OCTET_LENGTH", "ORD", "POSITION", "QUOTE",
                    "REPEAT", "REPLACE", "REVERSE", "RIGHT", "RPAD", "RTRIM", "SOUNDEX", "SPACE", "STRCMP", "SUBSTR", "SUBSTRING_INDEX",
                    "SUBSTRING", "TO_BASE64", "TRIM", "UCASE", "UNHEX", "UPPER", "WEIGHT_STRING",
                    // Numerical functions
                    "ABS", "ACOS", "ASIN", "ATAN", "ATAN2", "CEIL", "CEILING", "CONV", "COS", "COT", "CRC32", "DIV", "DEGREES", "EXP", "FLOOR",
                    "LN", "LOG10", "LOG2", "LOG", "MOD", "PI", "POW", "POWER", "RADIANS", "RAND", "ROUND", "SIGN", "SIN", "SQRT", "TAN",
                    "TRUNCATE",
                    // Date and time functions
                    "ADDDATE", "ADDTIME", "CONVERT_TZ", "CURDATE", "CURRENT_DATE", "CURRENT_TIME", "CURRENT_TIMESTAMP", "CURTIME", "DATE_ADD",
                    "DATE_FORMAT", "DATE_SUB", "DATE", "DATEDIFF", "DAY", "DAYNAME", "DAYOFMONTH", "DAYOFWEEK", "DAYOFYEAR", "EXTRACT", 
                    "FROM_DAYS", "FROM_UNIXTIME", "GET_FORMAT", "HOUR", "LAST_DAY", "LOCALTIME", "LOCALTIMESTAMP", "MAKEDATE", "MAKETIME",
                    "MICROSECOND", "MINUTE", "MONTH", "MONTHNAME", "NOW", "PERIOD_ADD", "PERIOD_DIFF", "QUARTER", "SEC_TO_TIME", "SECOND",
                    "STR_TO_DATE", "SUBDATE", "SUBTIME", "SYSDATE", "TIME_FORMAT", "TIME_TO_SEC", "TIME", "TIMEDIFF", "TIMESTAMP", "TIMESTAMPADD",
                    "TIMESTAMPDIFF", "TO_DAYS", "TO_SECONDS", "UNIX_TIMESTAMP", "UTC_DATE", "UTC_TIME", "UTC_TIMESTAMP", "WEEK", "WEEKDAY",
                    "WEEKOFYEAR", "YEAR", "YEARWEEK",
                    // Cast functions
                    "CAST", "CONVERT",
                    // XML functions
                    "ExtractValue", "UpdateXML",
                    //Bit functions
                    "BIT_COUNT",
                    // Encryption and compression functions
                    "AES_DECRYPT", "AES_ENCRYPT", "COMPRESS", "DECODE", "DES_DECRYPT", "DES_ENCRYPT", "ENCODE", "ENCRYPT", "MD5", 
                    "OLD_PASSWORD", "PASSWORD", "RANDOM_BYTES", "SHA", "SHA1", "SHA2", "UNCOMPRESS", "UNCOMPRESSED_LENGTH", "VALIDATE_PASSWORD_STRENGTH",
                    // Information functions
                    "BENCHMARK", "CHARSET", "COERCIBILITY", "COLLATION", "CONNECTION_ID", "CURRENT_USER", "DATABASE", "FOUND_ROWS", "LAST_INSERT_ID", 
                    "ROW_COUNT", "SCHEMA", "SESSION_USER", "SYSTEM_USER", "USER", "VERSION",                    
                    // Aggregate functions
                    "AVG", "BIT_AND", "BIT_OR", "BIT_XOR", "COUNT", "GROUP_CONCAT", "MAX", "MIN", "STD", "STDDEV_POP", "STDDEV_SAMP",
                    "STDDEV", "SUM", "VAR_POP", "VAR_SAMP", "VARIANCE",
                    // Geometry functions
                    "AsBinary", "AsWKB", "AsText", "AsWKT", "GeomFromText", "PointFromText", "LineFromText", "GeomFromWKB", "PointFromWKB", "LineFromWKB",
                    "Dimension", "Envelope", "GeometryType", "IsSimple", "SRID", "Boundary", "IsEmpty", "X", "Y", "EndPoint", "GLength", "IsClosed",
                    "NumPoints", "PointN", "StartPoint", "Area", "ExteriorRing", "InteriorRingN", "NumInteriorRings", "Centroid", "PointOnSurface",
                    "GeometryN", "NumGeometries",
                    // Global transaction identifiers functions
                    "GTID_SUBSET", "GTID_SUBTRACT", "SQL_THREAD_WAIT_AFTER_GTIDS", "WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS",
                    // Miscellaneous functions 
                    "DEFAULT", "GET_LOCK", "INET_ATON", "INET_NTOA", "INET6_ATON", "INET6_NTOA", "IS_FREE_LOCK", "IS_IPV4_MAPPED", "IS_IPV4",
                    "IS_IPV6", "IS_USED_LOCK", "MASTER_POS_WAIT", "NAME_CONST", "RAND", "RELEASE_LOCK", "SLEEP", "UUID_SHORT", "UUID", 
                    // Enterprise encryption functions
                    "ASYMMETRIC_DECRYPT", "ASYMMETRIC_DERIVE", "ASYMMETRIC_ENCRYPT", "ASYMMETRIC_SIGN", "ASYMMETRIC_VERIFY", 
                    "CREATE_ASYMMETRIC_PRIV_KEY", "CREATE_ASYMMETRIC_PUB_KEY", "CREATE_DIGEST"
                };
            }
        }

        /// <summary>
        /// Based on http://dev.mysql.com/doc/refman/5.6/en/non-typed-operators.html
        /// </summary>
        public override IEnumerable<string> Operators {
            get { return new[] {
                // Arithmetic
                "+", "-", "*", "/", "%",
                // Bitwise
                "&", "|", "^", "<<", ">>", "~",
                // Comparison
                "=", ">", "<", ">=", "<=", "<>", "!=", "<=>", "BETWEEN", 
                // Assignment
                ":=",
                // Logical
                "AND", "&&", "LIKE", "NOT", "!", "OR", "||", "XOR",
                // String
                "BINARY", "REGEXP", "RLIKE", "SOUNDS"
            }; }
        }

        public override IEnumerable<string> DataTypes {
            get {
                return new[] {
                    // Exact
                   "INTEGER", "INT", "SMALLINT", "TINYINT", "MEDIUMINT", "BIGINT", "DECIMAL", "NUMERIC", "BIT",
                   // Approximate
                   "FLOAT", "DOUBLE", "REAL",
                    // Date and Time
                    "DATE", "DATETIME", "TIMESTAMP", "TIME", "YEAR",
                    // Character Strings
                    "CHAR", "VARCHAR", "ENUM", "SET",
                    // Binary Strings
                    "BINARY", "VARBINARY", "TINYBLOB", "BLOB", "MEDIUMBLOB", "LONGBLOB", "TINYTEXT", "TEXT", "MEDIUMTEXT", "LONGTEXT",
                    // Spatial
                    "GEOMETRY", "POINT", "LINESTRING", "POLYGON", "MULTIPOINT", "MULTILINESTRING", "MULTIPOLYGON", "GEOMETRYCOLLECTION"
                }; 
            }
        }
    }
}