/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;
using System.Text;
using System.Text.RegularExpressions;
using OutSystems.HubEdition.RuntimePlatform;
using OutSystems.ObjectKeys;
using OutSystems.RuntimeCommon;
using System.Linq;

namespace OutSystems.HubEdition.RuntimePlatform.Sql {

    public class ReplaceAttributes : SimpleSQLParser {
        private static readonly Regex _linkRegex = new Regex(@"@(?:\.?\w)+$", RegexOptions.Compiled | RegexOptions.CultureInvariant);
        private static readonly Regex _entityAttributeNameRegEx = new Regex(@"([{`]\w+[}`])(\s*\.\s*)([""\[`])([^""\]`]+)([""\]`])", RegexOptions.Compiled | RegexOptions.CultureInvariant);

        private Func<string, string, string> resolve;

        public ReplaceAttributes(Func<string, string, string> entityAttributeToColumnName) {
            this.resolve = entityAttributeToColumnName;
        }

        protected override string ProcessSQLSpan(string sqlSpan, bool allowCommentHints) {
            string result = sqlSpan;

            // #1146855 - special behavior to allow that oracle hints are not removed
            if (allowCommentHints) {
                result = sqlCommentsWithoutHints.Replace(sqlSpan, string.Empty); //sqlspan;
            } else {
                result = sqlComments.Replace(sqlSpan, string.Empty); //sqlspan;
            }

            // #14295 Replace attr with physical table column name outside literals
            result = Replace(result, _entityAttributeNameRegEx, new MatchEvaluator(ProcessAttributeName));
            return result;
        }

        private string ProcessAttributeName(Match match) {
            string entName = match.Groups[1].Value.Substring(1, match.Groups[1].Value.Length - 2);
            string attr = match.Groups[4].Value;
            string resolvedColumnName = resolve(entName.ToLower(), attr.ToLower());
            return match.Groups[1].Value + match.Groups[2].Value + match.Groups[3].Value + (resolvedColumnName!=null ? resolvedColumnName : attr) + match.Groups[5].Value;
        }

        private string Replace(string sql, Regex regex, MatchEvaluator matchEval) {
            int fixup = 0;
            MatchCollection mc = regex.Matches(sql);
            for (int i = 0; i < mc.Count; i++) {
                string s = matchEval(mc[i]);
                sql = ReplaceSpan(sql, mc[i].Index + fixup, mc[i].Length, s);
                fixup += s.Length - mc[i].Value.Length;
            }
            return sql;
        }

        private string ReplaceSpan(string sql, int start, int length, string replaceWith) {
            return sql.Substring(0, start) + replaceWith + sql.Substring(start + length);
        }

    }
}