/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using OutSystems.HubEdition.DatabaseProvider.Oracle.DatabaseObjects;
using OutSystems.HubEdition.Extensibility.Data;
using OutSystems.HubEdition.Extensibility.Data.DatabaseObjects;
using OutSystems.HubEdition.Extensibility.Data.Platform.DatabaseObjects;

namespace OutSystems.HubEdition.DatabaseProvider.Oracle.Platform.DatabaseObjects {
    public class PlatformDataTypeInfo : DataTypeInfo, IPlatformDataTypeInfo {

        public const int VARCHAR_MAXLENGTH = 2000;
        
        public PlatformDataTypeInfo(DBDataType type, string sqlDataType, int length, int decimals)
            : base(type, sqlDataType, length, decimals) {
        }

        public bool IsEquivalent(IDataTypeInfo other) {
            switch (Type) {
                case DBDataType.INTEGER:
                case DBDataType.LONGINTEGER:
                case DBDataType.BOOLEAN:
                case DBDataType.BINARY_DATA:
                    return Type == other.Type;
                case DBDataType.DATE_TIME:
                case DBDataType.DATE:
                case DBDataType.TIME:
                    return other.Type.IsDateOrTimeOrDateTime();
                case DBDataType.DECIMAL:
                    return Type == other.Type && Length == other.Length && Decimals == other.Decimals;
                case DBDataType.TEXT:
                    return Type == other.Type &&
                           (Length == other.Length || Length >= VARCHAR_MAXLENGTH && other.Length >= VARCHAR_MAXLENGTH);
                default:
                    return false;
            }
        }
    }
}
