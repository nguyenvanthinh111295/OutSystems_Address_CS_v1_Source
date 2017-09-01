/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System.Collections.Generic;
using System.Linq;
using OutSystems.HubEdition.Extensibility.Data.DatabaseObjects;
using OutSystems.HubEdition.Extensibility.Data.Platform.DatabaseObjects;
using OutSystems.RuntimeCommon;

namespace OutSystems.HubEdition.DatabaseProvider.Oracle.Platform.DatabaseObjects {
    public class PlatformTableSourceIndexInfo : IPlatformTableSourceIndexInfo {

        private readonly IList<IPlatformTableSourceColumnInfo> columns = new List<IPlatformTableSourceColumnInfo>();
        private readonly IList<IPlatformTableSourceColumnInfo> functionIndexColumns = new List<IPlatformTableSourceColumnInfo>();

        public PlatformTableSourceIndexInfo(ITableSourceInfo tableSource, string name, bool isUnique, bool isPrimaryKey) {           
            TableSource = tableSource;
            Name = name;
            IsUnique = isUnique;
            IsPrimaryKey = isPrimaryKey;
        }

        public void AddColumn(IPlatformTableSourceColumnInfo columnInfo, bool isFunctionIndex) {
            if (columnInfo != null && !columns.Any(col => StringUtils.EqualsIgnoreCase(col.Name, columnInfo.Name))) {
                columns.Add(columnInfo);
                if (isFunctionIndex) {
                    functionIndexColumns.Add(columnInfo);
                }
            }
        }
        
        public bool IsFunctionIndexColumn(IPlatformTableSourceColumnInfo columnInfo) {
            return functionIndexColumns.Contains(columnInfo);
        }

        public ITableSourceInfo TableSource { get; private set; }

        public string Name { get; private set; }

        public IEnumerable<IPlatformTableSourceColumnInfo> Columns {
            get { return columns; }
        }

        public bool IsUnique { get; private set; }

        public bool IsPrimaryKey { get; private set; }
    }
}
