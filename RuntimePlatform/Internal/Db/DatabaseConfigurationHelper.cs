/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using OutSystems.HubEdition.Extensibility.Data.ConfigurationService;
using OutSystems.HubEdition.Extensibility.Data.Platform.QueryProvider;
using OutSystems.RuntimeCommon.ObfuscationProperties;

namespace OutSystems.Internal.Db {

    [DoNotObfuscateType]
    internal class DatabaseConfigurationHelper {

        internal static Type[] ProviderSpecificTypes {
            get { return new[] {typeof (DatabaseConfigurationHelperOracle)}; }
        }

        internal virtual IRuntimeDatabaseConfiguration ChangeConnectionString(IIntegrationDatabaseConfiguration configuration, string connectionString, string databaseIdentifier) {
            configuration.ConnectionStringOverride = connectionString;
            return configuration.RuntimeDatabaseConfiguration;
        }

    }
}
