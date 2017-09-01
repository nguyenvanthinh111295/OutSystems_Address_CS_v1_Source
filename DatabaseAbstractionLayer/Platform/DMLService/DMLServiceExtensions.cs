/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using OutSystems.HubEdition.Extensibility.Data.DatabaseObjects;

namespace OutSystems.HubEdition.Extensibility.Data.Platform.DMLService {
    public static class DMLServiceExtensions {
        /// <summary>
        /// Returns an escaped identifier representing an object (e.g. table or view) that is qualified using 
        /// the information provided by the <see cref="IDatabaseServices.DatabaseConfiguration"/> associated with the <see cref="DMLService"/>.
        /// NOTE: This method uses the <see cref="IDatabaseObjectFactory.CreateLocalDatabaseInfo"/> for qualification.
        /// </summary>
        /// <param name="identifiers">IPlatformDMLIdentifiers to use for qualification</param>
        /// <param name="objectName">Name of the database object (e.g. table, view, stored procedure).</param>
        /// <returns>A string representing the escaped and qualified identifier.</returns>
        public static string EscapeAndQualifyIdentifierForLocalDatabase(this IPlatformDMLIdentifiers identifiers, string objectName) {
            return identifiers.EscapeAndQualifyIdentifier(
                identifiers.DMLService.DatabaseServices.ObjectFactory.CreateLocalDatabaseInfo(), objectName);
        }
    }
}
