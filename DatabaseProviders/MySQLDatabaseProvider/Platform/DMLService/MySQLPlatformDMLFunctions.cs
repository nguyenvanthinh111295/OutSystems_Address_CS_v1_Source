/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using OutSystems.HubEdition.DatabaseProvider.MySQL.DMLService;
using OutSystems.HubEdition.Extensibility.Data.DMLService;
using OutSystems.HubEdition.Extensibility.Data.Platform.DMLService;

namespace OutSystems.HubEdition.DatabaseProvider.MySQL.Platform.DMLService {
    internal class MySQLPlatformDMLFunctions : MySQLDMLFunctions, IPlatformDMLFunctions {

        internal MySQLPlatformDMLFunctions(IDMLService dmlService) : base(dmlService) { }

        public string CheckRole(string RoleId, string UserId) {
            return string.Format("CheckRole({0}, {1})", RoleId, UserId);
        }
    }
}