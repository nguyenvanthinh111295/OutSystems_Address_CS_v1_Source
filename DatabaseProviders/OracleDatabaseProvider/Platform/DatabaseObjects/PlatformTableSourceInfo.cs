/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System.Collections.Generic;
using OutSystems.HubEdition.DatabaseProvider.Oracle.DatabaseObjects;
using OutSystems.HubEdition.Extensibility.Data.DatabaseObjects;
using OutSystems.HubEdition.Extensibility.Data.Platform.DatabaseObjects;

namespace OutSystems.HubEdition.DatabaseProvider.Oracle.Platform.DatabaseObjects {
    public class PlatformTableSourceInfo : TableSourceInfo, IPlatformTableSourceInfo {

        private readonly IList<IPlatformTableSourceIndexInfo> indexes = new List<IPlatformTableSourceIndexInfo>();

        public PlatformTableSourceInfo(TableSourceInfo tableSource)
            : base(tableSource.DatabaseServices, tableSource.Database, tableSource.Name, tableSource.QualifiedName) {}

        public IEnumerable<IPlatformTableSourceColumnInfo> Columns { get; set; }

        public IEnumerable<ITableSourceForeignKeyInfo> ForeignKeys { get; set; }

        public IEnumerable<IPlatformTableSourceIndexInfo> Indexes {
            get { return indexes; }
        }

        public void AddIndex(IPlatformTableSourceIndexInfo index) {
            indexes.Add(index);
        }

        public IPlatformTableSourceEventTriggerInfo EventTrigger { get; set; }

    }
}
