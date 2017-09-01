/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using OutSystems.HubEdition.Extensibility.Data;
using OutSystems.HubEdition.Extensibility.Data.DatabaseObjects;
using OutSystems.RuntimeCommon;

namespace OutSystems.HubEdition.DatabaseProvider.SqlServer.DatabaseObjects {
    public class TableSourceInfo : BaseTableSourceInfo {

        private const string DEFAULT_SCHEMA = "dbo";

        public TableSourceInfo(IDatabaseServices databaseServices, DatabaseInfo database, string name, string schema, string qualifiedName)
            : base(databaseServices, database, name, qualifiedName) {
            Schema = string.IsNullOrEmpty(schema) ? DEFAULT_SCHEMA : schema;
        }

        public new DatabaseInfo Database {
            get { return (DatabaseInfo)base.Database; }
        }

        public string Schema { get; private set; }

        public override string DisplayName {
            get { return (!Schema.EqualsIgnoreCase(DEFAULT_SCHEMA) ? Schema + "." : "") + Name; }
        }

        public override bool Equals(ITableSourceInfo other) {
            TableSourceInfo tsi = other as TableSourceInfo;

            return ReferenceEquals(this, other) 
                || (tsi != null && Database.Equals(tsi.Database) && Schema.EqualsIgnoreCase(tsi.Schema) && Name.EqualsIgnoreCase(tsi.Name));
        }

        public override int GetHashCode() {
            return Database.GetHashCode() ^ Schema.ToUpperInvariant().GetHashCode() ^ Name.ToUpperInvariant().GetHashCode();
        }
    }
}