/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using OutSystems.HubEdition.DatabaseProvider.SqlServer.DatabaseObjects;
using OutSystems.HubEdition.DatabaseProvider.SqlServer.DMLService;
using OutSystems.HubEdition.DatabaseProvider.SqlServer.IntrospectionService;
using OutSystems.HubEdition.Extensibility.Data.DatabaseObjects;
using OutSystems.HubEdition.Extensibility.Data.DMLService;
using OutSystems.HubEdition.Extensibility.Data.IntrospectionService;
using OutSystems.HubEdition.Extensibility.Data.Platform.DMLService;

namespace OutSystems.HubEdition.DatabaseProvider.SqlServer.Platform.DMLService {
    internal class PlatformDMLIdentifiers: DMLIdentifiers, IPlatformDMLIdentifiers {
        internal PlatformDMLIdentifiers(IDMLService dmlService) : base(dmlService) {}

        public string EscapeAndQualifyIdentifier(IDatabaseInfo database, string objectName) {
            string catalogName = ((DatabaseInfo) database).Catalog;
            
            // Only the dbo schema is supported for now
            return EscapeIdentifier(catalogName) + ".DBO." + EscapeIdentifier(objectName);
        }

        public override string EscapeIdentifier(string identifierName) {
            return base.EscapeIdentifier(identifierName.ToUpper());
        }

        public bool IsValidColumnName(string columnName) {
            return true;
        }
    }
}