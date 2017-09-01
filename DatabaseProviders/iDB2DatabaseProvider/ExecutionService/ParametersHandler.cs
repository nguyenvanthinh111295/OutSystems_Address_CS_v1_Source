/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using IBM.Data.DB2.iSeries;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Diagnostics;
using System.Linq;
using System.Text;

namespace OutSystems.HubEdition.DatabaseProvider.iDB2.ExecutionService
{
    static class ParametersHandler
    {
        private static readonly int MAX_VARCHAR_SIZE = 32740;


        public static IDbCommand CastAndMultiplicateParameters(IDbCommand cmd)
        {
            Dictionary<String, DbParameter> parametersDictionary = createParamDictionary(cmd);
            List<string> parametersReferenced = new List<string>();

            string query = cmd.CommandText;
            var sb = new StringBuilder();
            int currParamBeginIndex = 0;
            int i = 0;
            bool isBetweenQuotes = false;
            bool hasCasted = false;
            bool hitSeparatorChar = false;

            while (i < query.Length)
            {
                char c = query[i];
                switch (c)
                {
                    case '\'':
                    case '\"':
                        isBetweenQuotes = !isBetweenQuotes;
                        hitSeparatorChar = false;
                        break;
                    case '@':
                        if (!isBetweenQuotes)
                        {
                            currParamBeginIndex = i;
                            appendCastBegin(sb);
                            hasCasted = true;
                            hitSeparatorChar = false;
                        }
                        break;
                    case '_':
                        break;
                    default:
                        hitSeparatorChar = !isBetweenQuotes && !char.IsLetterOrDigit(c);
                        break;
                }

                if (hasCasted && hitSeparatorChar)
                {
                    string paramName = query.Substring(currParamBeginIndex, i - currParamBeginIndex);

                    appendCastEnd(parametersDictionary, paramName, sb);
                    hasCasted = false;
                    hitSeparatorChar = false;

                    ////// Multiple parameters check
                    // The current IBM iSeries driver is bugged, it checks the number of parameters in the query string and 
                    // the number of parameters in the Command Parameters list, without checking the parameters names,
                    // throwing a runtime exception if that number doesn't match, point, the driver doesn't support
                    // multiple params with the same name in the query.
                    // As we already need to parse the parameters to deal with the casting problem, we're going to also
                    // multiplicate the required parameters.
                    if (!parametersReferenced.Contains(paramName))
                    {
                        parametersReferenced.Add(paramName);
                    }
                    else
                    {
                        CloneParameterInCommand(cmd, parametersDictionary[paramName]);
                    }
                }

                sb.Append(c);
                ++i;
            }

            if (hasCasted) //this happens when the param is at the end of the string, if so, we need to close the cast
            {
                string paramName = query.Substring(currParamBeginIndex, i - currParamBeginIndex);
                appendCastEnd(parametersDictionary, paramName, sb);
                hasCasted = false;
                hitSeparatorChar = false;
            }

            cmd.CommandText = sb.ToString();
            return cmd;
        }

        private static void CloneParameterInCommand(IDbCommand cmd, DbParameter parameter)
        {
            iDB2Parameter newParameter = new iDB2Parameter();
            iDB2Parameter oldParameter = (iDB2Parameter)parameter;
            newParameter.DbType = oldParameter.DbType;
            newParameter.Direction = oldParameter.Direction;
            newParameter.iDB2DbType = oldParameter.iDB2DbType;
            newParameter.iDB2Value = oldParameter.iDB2Value;
            newParameter.IsNullable = oldParameter.IsNullable;
            newParameter.ParameterName = oldParameter.ParameterName;
            newParameter.Precision = oldParameter.Precision;
            newParameter.Scale = oldParameter.Scale;
            newParameter.Size = oldParameter.Size;
            newParameter.SourceColumn = oldParameter.SourceColumn;
            newParameter.SourceColumnNullMapping = oldParameter.SourceColumnNullMapping;
            newParameter.SourceVersion = oldParameter.SourceVersion;
            newParameter.Value = oldParameter.Value;

            cmd.Parameters.Add(newParameter);
        }

        private static Dictionary<string, DbParameter> createParamDictionary(IDbCommand cmd)
        {
            IDataParameterCollection paramsList = cmd.Parameters;
            int paramsCount = paramsList.Count;
            var paramsDictionary = new Dictionary<String, DbParameter>(paramsCount);
            for (int i = 0; i < paramsCount; i++)
            {
                DbParameter param = paramsList[i] as DbParameter;
                string paramName = param.ParameterName;
                if (param != null && paramName != null && !paramsDictionary.ContainsKey(paramName))
                    paramsDictionary.Add(paramName, param);
            }

            return paramsDictionary;
        }


        private static void appendCastEnd(Dictionary<String, DbParameter> parametersDictionary, String parameterName, StringBuilder sb)
        {
            DbParameter p = parametersDictionary[parameterName];
            switch (p.DbType)
            {
                case DbType.Boolean:
                    sb.Append(" AS SMALLINT)");
                    break;
                case DbType.Date:
                    sb.Append(" AS DATE)");
                    break;
                case DbType.Time:
                    sb.Append(" AS TIME)");
                    break;
                case DbType.Decimal:
                    if (p.Value is String) {
                        p.Value = ((String)p.Value).Replace(".", ",");
                    }
                    decimal castedValue = p.Value is string ? Decimal.Parse((string)p.Value) : (decimal)p.Value;
                    var sqlDecimal = new System.Data.SqlTypes.SqlDecimal(castedValue);
                    int precision = sqlDecimal.Precision;
                    int scale = sqlDecimal.Scale;
                    sb.Append(string.Format(" AS DECIMAL({0},{1}))", precision, scale));
                    break;
                case DbType.Int16:
                case DbType.Int32:
                    sb.Append(" AS INTEGER)");
                    break;
                case DbType.Int64:
                    sb.Append(" AS BIGINT)");
                    break;
                case DbType.String:
                case DbType.StringFixedLength:
                    int length = Math.Max((p.Value == DBNull.Value ? String.Empty : (string)p.Value).Length, 1);
                    if (length <= MAX_VARCHAR_SIZE)
                    {
                        sb.Append(string.Format(" AS VARCHAR({0}))", length));
                    }
                    else
                    {
                        sb.Append(string.Format(" AS CLOB)", length));
                    }
                    break;
                case DbType.DateTime:
                case DbType.DateTime2:
                    sb.Append(" AS TIMESTAMP)");
                    break;
                case DbType.Binary:
                    sb.Append(" AS BLOB)");
                    break;
                default:
                    sb.Append(" AS VARCHAR(256))");
                    Console.Error.WriteLine(string.Format("[IDbCommandExtensions.cs] Unkown DbType, going to cast to VARCHAR(256). ParamName> {0} DbType> {1}", parameterName, p.DbType.ToString()));
                    break;
            }
        }

        private static void appendCastBegin(StringBuilder sb)
        {
            sb.Append("cast(");
        }

        [Conditional("DEBUG")]
        private static void printParameter(Dictionary<string, DbParameter> paramDic, string paramName)
        {
            Console.Out.WriteLine(paramName + " = " + paramDic[paramName].Value);
        }
    }
}
