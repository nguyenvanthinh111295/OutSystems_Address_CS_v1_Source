/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;
using System.Text;
using System.Text.RegularExpressions;
using OutSystems.RuntimeCommon;

namespace OutSystems.HubEdition.RuntimePlatform.Email {

    public class EmailFunctions {

        private static string NonQPNameStr = @"[0-9a-z\\ ]*";
        private static string EnclosedEmailStr = "<[^\r\n]*>";
        private static Regex NonQPNameRegex = ScriptableEmailFunctions.GetRegex(NonQPNameStr, RegexOptions.IgnoreCase);
        private static Regex EnclosedEmailRegex = ScriptableEmailFunctions.GetRegex(EnclosedEmailStr, RegexOptions.IgnoreCase);

        internal static string EncloseEmail(string emailAddr) {
            string trimmedEmail = emailAddr.Trim();
            if (!trimmedEmail.IsEmpty()) {
                if (!EnclosedEmailRegex.IsMatch(trimmedEmail)) {
                    int lastSpace = trimmedEmail.LastIndexOf(' ');
                    if (lastSpace != -1) {
                        // Consider that part after the space is the email address
                        trimmedEmail = trimmedEmail.Substring(0, lastSpace + 1) + "<" + trimmedEmail.Substring(lastSpace + 1) + ">";
                    } else {
                        // No white space, the whole string should be the email address
                        trimmedEmail = "<" + trimmedEmail + ">";
                    }
                }
            }

            return trimmedEmail;
        }

        public static string Normalize(string addresses) {
            if (addresses == null) {
                return "";
            }

            StringBuilder buf = new StringBuilder();
            bool first = true;

            foreach (string emailAddr in addresses.Split(',', ';')) {
                string trimmedEmail = emailAddr.Trim();
                if (!trimmedEmail.IsEmpty()) {
                    trimmedEmail = EncloseEmail(trimmedEmail);
                    if (!ScriptableEmailFunctions.IsValid(trimmedEmail)) {
                        throw new ArgumentException("'" + emailAddr + "' is not a valid email address.");
                    }

                    if (first) {
                        first = false;
                    } else {
                        buf.Append(", ");
                    }

                    buf.Append(trimmedEmail);
                }
            }

            return buf.ToString();
        }

        public static string Append(string address1, string address2) {
            string firstEmail = address1.Replace(";", ",").Trim(',', ' ', '\t', '\r', '\n');
            string secondEmail = address2.Replace(";", ",").Trim(',', ' ', '\t', '\r', '\n');

            if (firstEmail.IsEmpty()) {
                return secondEmail;
            } else if (secondEmail.IsEmpty()) {
                return firstEmail;
            } else {
                return firstEmail + ", " + secondEmail;
            }
        }

        public static string Compose(Encoding mailEncoding, string name, string email) {

            string qp_name = string.Empty;

            if (!name.IsEmpty()) {
                if (NonQPNameRegex.Match(name).Value == name) {
                    if (!name.Contains(" ")) {
                        qp_name = name;
                    } else {
                        qp_name = "\"" + name + "\"";
                    }
                } else {
                    qp_name = "\"" + EmailEncoding.EncodeString(mailEncoding, name, EncodeFlags.SingleLine | EncodeFlags.QuotedPrintable) + "\"";
                }
            }

            email = email.Trim();

            if (!email.StartsWith("<") || !email.EndsWith(">")) {
                Match enclosedEmail = EnclosedEmailRegex.Match(email);
                if (enclosedEmail != Match.Empty) {
                    email = enclosedEmail.Value;
                } else {
                    email = "<" + email + ">";
                }
            }

            return (qp_name.IsEmpty() ? "" : (qp_name + " ")) + email;
        }
    }
}
