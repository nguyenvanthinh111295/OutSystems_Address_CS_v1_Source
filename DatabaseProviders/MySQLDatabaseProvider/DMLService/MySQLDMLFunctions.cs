/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using OutSystems.HubEdition.Extensibility.Data.DMLService;
using OutSystems.RuntimeCommon;

namespace OutSystems.HubEdition.DatabaseProvider.MySQL.DMLService {
    internal class MySQLDMLFunctions : BaseDMLFunctions {

        private enum DateTimePart {
            Year,
            Month,
            Day,
            WeekDay,
            Hour,
            Minute,
            Second
        }

        internal MySQLDMLFunctions(IDMLService dmlService) : base(dmlService) { }

        public new MySQLDMLService DMLService {
            get { return (MySQLDMLService)base.DMLService; }
        }

        #region Math
        public override string Trunc(string n) {
            return string.Format("truncate({0}, 0)", n);
        }
        #endregion

        #region Text
        public override string Index(string t, string search) {
            return string.Format("(locate({0}, {1}) - if (character_length({0}) = 0, 2, 1))", search, t);
        }

        public override string Length(string t) {
            return string.Format("char_length({0})", t);
        }

        public override string Substr(string t, string start, string length) {
            return string.Format("substring({0}, {1} + 1, {2})", t, start, length);
        }

        public override string Trim(string t) {
            return string.Format("trim({0})", t);
        }
        #endregion

        #region Date & Time
        public override string AddDays(string dt, string n) {
            return DateAdd(DateTimePart.Day, dt, n);
        }

        public override string AddHours(string dt, string n) {
            return DateAdd(DateTimePart.Hour, dt, n);
        }

        public override string AddMinutes(string dt, string n) {
            return DateAdd(DateTimePart.Minute, dt, n);
        }

        public override string AddMonths(string dt, string n) {
            return DateAdd(DateTimePart.Month, dt, n);
        }

        public override string AddSeconds(string dt, string n) {
            return DateAdd(DateTimePart.Second, dt, n);
        }

        public override string AddYears(string dt, string n) {
            return DateAdd(DateTimePart.Year, dt, n);
        }

        //dvn: this function is fucked up
        public override string BuildDateTime(string d, string t) {
            return string.Format("TIMESTAMP(CONVERT({0}, DATE),CONVERT({1}, TIME))", d, t);
        }

        public override string Day(string dt) {
            return string.Format("DAYOFMONTH({0})", dt);
        }

        public override string DayOfWeek(string dt) {
            return string.Format("(DAYOFWEEK({0}) - 1)", dt);
        }

        public override string DiffDays(string dt1, string dt2) {
            //truncate time part of argument
            return DateDiff(DateTimePart.Day, DateTimeToDate(dt1), DateTimeToDate(dt2));
        }

        public override string DiffHours(string dt1, string dt2) {
            //truncate minuets and seconds
            return DateDiff(DateTimePart.Hour,
                "STR_TO_DATE(DATE_FORMAT(" + dt1 + ", '%Y-%m-%d %H:00:00'), '%Y-%m-%d %H:%i:%s')",
                "STR_TO_DATE(DATE_FORMAT(" + dt2 + ", '%Y-%m-%d %H:00:00'), '%Y-%m-%d %H:%i:%s')");
        }

        public override string DiffMinutes(string dt1, string dt2) {
            //truncate seconds
            return DateDiff(DateTimePart.Minute,
                "STR_TO_DATE(DATE_FORMAT(" + dt1 + ", '%Y-%m-%d %H:%i:00'), '%Y-%m-%d %H:%i:%s')",
                "STR_TO_DATE(DATE_FORMAT(" + dt2 + ", '%Y-%m-%d %H:%i:00'), '%Y-%m-%d %H:%i:%s')");
        }

        public override string DiffSeconds(string dt1, string dt2) {
            return DateDiff(DateTimePart.Second, dt1, dt2);
        }

        public override string Hour(string dt) {
            return string.Format("HOUR({0})", dt);
        }

        public override string Minute(string dt) {
            return string.Format("MINUTE({0})", dt);
        }

        public override string Month(string dt) {
            return string.Format("MONTH({0})", dt);
        }

        public override string Second(string dt) {
            return string.Format("SECOND({0})", dt);
        }

        public override string Year(string dt) {
            return string.Format("YEAR({0})", dt);
        }


        public override string NewDate(string y, string m, string d) {
            return CreateDateTime(y, m, d, "0", "0", "0");
        }

        public override string NewDateTime(string y, string mo, string d, string h, string m, string s) {
            return CreateDateTime(y, mo, d, h, m, s);
        }

        public override string NewTime(string h, string m, string s) {
            return NewDateTime("1900", "1", "1", h, m, s);
        }

        private string CreateDateTime(string y, string mo, string d, string h, string m, string s) {
            return string.Format("STR_TO_DATE(CONCAT({0},'-',{1},'-',{2},' ',{3},':',{4},':',{5}), '%Y-%m-%d %H:%i:%s,')", y, mo, d, h, m, s);
        }


        #endregion

        #region Data Conversion

        //in mysql boolean is actually a tinyint(1) no conversion needed
        public override string BooleanToInteger(string b) {
            return b;
        }

        public override string BooleanToText(string b) {
            return string.Format("(CASE WHEN {0} = 0 THEN 'False' ELSE 'True' end)", b);
        }

        public override string DateTimeToDate(string dt) {
            return string.Format("CONVERT({0}, DATE)", dt);
        }

        public override string DateTimeToTime(string dt) {
            return string.Format("TIMESTAMP({0},CONVERT({1}, TIME))", NullDate(), dt);
        }

        public override string DecimalToBoolean(string d) {
            return string.Format("if({0} = 0, 0, 1)", d);
        }

        public override string DecimalToInteger(string d) {
            return string.Format("CONVERT({0}, SIGNED)", d);
        }

        public override string DecimalToLongInteger(string d) {
            return string.Format("CONVERT({0}, SIGNED)", d);
        }

        public override string LongIntegerToInteger(string b) {
            return string.Format("CONVERT({0}, SIGNED)", b);
        }

        public override string IntegerToLongInteger(string b) {
            return string.Format("CONVERT({0}, SIGNED)", b);
        }

        public override string LongIntegerToText(string b) {
            return string.Format("CONVERT({0}, CHAR)", b);
        }

        public override string DecimalToText(string d) {
            return string.Format("CONVERT({0}, CHAR)", d);
        }

        public override string IdentifierToInteger(string id) {
            return string.Format("IFNULL({0}, 0)", id);
        }

        public override string IdentifierToLongInteger(string id) {
            return string.Format("IFNULL({0}, 0)", id);
        }

        public override string IdentifierToText(string id) {
            return string.Format("IFNULL({0}, '')", id);
        }

        public override string IntegerToBoolean(string i) {
            return string.Format("if({0} = 0, 0, 1)", i);
        }

        public override string IntegerToDecimal(string i) {
            return string.Format("CONVERT({0}, DECIMAL({1},{2}))", i, Constants.DecimalTotalPrecision, Constants.DecimalDecimals);
        }

        public override string LongIntegerToDecimal(string i) {
            return string.Format("CONVERT({0}, DECIMAL(37,8))", i);
        }

        public override string IntegerToText(string i) {
            return string.Format("CONVERT({0}, CHAR)", i);
        }

        public override string NullDate() {
            return "MAKEDATE(1900, 1)";
        }

        public override string DateTimeToText(string dt, string dateFormat) {
            return string.Format("DATE_FORMAT({0},'{1}')", dt, TranslateDateFormatToMySQL(dateFormat) + " " + TIME_FORMAT);
        }

        public override string DateToText(string d, string dateFormat) {
            return string.Format("DATE_FORMAT({0},'{1}')", d, TranslateDateFormatToMySQL(dateFormat));
        }

        public override string TextToDate(string t, string dateFormat) {
            return string.Format("STR_TO_DATE({0},'{1}')", t, TranslateDateFormatToMySQL(dateFormat));
        }

        public override string TextToDateTime(string t, string dateFormat) {
            return string.Format("STR_TO_DATE({0},'{1}')", t, TranslateDateFormatToMySQL(dateFormat) + " " + TIME_FORMAT);
        }

        private string TranslateDateFormatToMySQL(string dateFormat) {
            switch (dateFormat.ToUpper()) {
                case "DD-MM-YYYY":
                    return "%d-%m-%Y";
                case "MM-DD-YYYY":
                    return "%m-%d-%Y";
                case "YYYY/MM/DD":
                    return "%Y/%m/%d";
                case "YYYY.MM.DD":
                    return "%Y.%m.%d";
                case "DD/MM/YYYY":
                    return "%d/%m/%Y";
                case "MM/DD/YYYY":
                    return "%m/%d/%Y";
                case "YYYY-MM-DD":
                default:
                    return "%Y-%m-%d";
            }
        }

        private const string TIME_FORMAT = "%H:%i:%s";

        public override string TextToDecimal(string t) {
            return string.Format("CONVERT({0}, DECIMAL({1},{2}))", t, Constants.DecimalTotalPrecision, Constants.DecimalDecimals);
        }

        public override string TextToInteger(string t) {
            return string.Format("CONVERT({0}, SIGNED)", t);
        }

        public override string TextToLongInteger(string t) {
            return string.Format("CONVERT({0}, SIGNED)", t);
        }

        public override string TextToTime(string t) {
            return string.Format("TIMESTAMP({0},CONVERT({1}, TIME))", NullDate(), t);
        }

        public override string TimeToText(string t) {
            return string.Format("CONVERT(CONVERT({0}, TIME),CHAR)", t);
        }

        #endregion

        #region Date-handling
        private static string DateAdd(DateTimePart part, string dt, string n) {
            return string.Format("DATE_ADD({0}, INTERVAL {1} {2})", dt, n, part.ToString().ToUpper());
        }

        private static string DateDiff(DateTimePart part, string dt1, string dt2) {
            return string.Format("TIMESTAMPDIFF({0}, {1}, {2})", part.ToString().ToUpper(), dt1, dt2);
        }

        #endregion
    }
}
