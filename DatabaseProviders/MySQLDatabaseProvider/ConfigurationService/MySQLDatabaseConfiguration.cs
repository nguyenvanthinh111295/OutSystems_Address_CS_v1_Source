/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using OutSystems.HubEdition.Extensibility.Data;
using OutSystems.HubEdition.Extensibility.Data.ConfigurationService;
using OutSystems.RuntimeCommon.ObfuscationProperties;
using OutSystems.RuntimeCommon;

namespace OutSystems.HubEdition.DatabaseProvider.MySQL.ConfigurationService {

    public class MySQLDatabaseConfiguration : BaseDatabaseConfiguration {

        public override IDatabaseProvider DatabaseProvider { get { return MySQLDatabaseProvider.Instance; } }

        /*
        This annotation defines how the configuration will be displayed in Service Center by using the following properties:
            - Label: Label of the form for this field
            - IsMandatory: Defines if the configuration field is mandatory
            - Order: The order within each region that the field will show up in the configuration form
            - Region: Form segment that groups related configuration fields
                 * DatabaseLocation: First region of the configuration form that defines the database you are going to integrate with.
                                     Common examples of fields in this region are: Server, Port and Schema.
                 * UserSpecific: Second region of the configuration form that defines authentication information required to connect.
                                 Common examples of fields are: Username and password
                 * AdminSpecific: Ignore for integration purposes
                 * Advanced: Ignore for integration purposes
         
        In order to better understand the annotations please compare the code of this sample with the configuration screen of a MySQL database connection
            http://localhost/ServiceCenter/DatabaseConnections_List.aspx
        */
        [UserDefinedConfigurationParameter(Label = "Server", IsMandatory = true, Order = 1, Region = ParameterRegion.DatabaseLocation, Prompt = "Server")]
        public string Server { get; set; }

        [UserDefinedConfigurationParameter(Label = "Schema", IsMandatory = true, Order = 2, Region = ParameterRegion.DatabaseLocation, Prompt = "Schema")]
        public string Schema { get; set; }

        [UserDefinedConfigurationParameter(Label = "Username", IsMandatory = true, Order = 1, Region = ParameterRegion.UserSpecific, Prompt = "Username")]
        public string Username { get; set; }

        [UserDefinedConfigurationParameter(Label = "Password", IsPassword = true, Order = 2, Region = ParameterRegion.UserSpecific, Prompt = "Password")]
        public string Password { get; set; }


        private AdvancedConfiguration advancedConfiguration = new AdvancedConfiguration(
            "Insert configuration parameters separated by ';'. Username and Password will be inserted automatically if present. Example: Server=serverAddress, failoverServerAddress; Database=myDataBase; CharacterSet=utf8mb4;",
            "Connection String Parameters",
            "[user Uid=$Username; Pwd=<hidden>;] $AdvancedConnectionStringField");

        public override string DatabaseIdentifier {
            get { return Schema; }
        }

        public override AdvancedConfiguration AdvancedConfiguration {
            get { return advancedConfiguration; }
            set { advancedConfiguration = value; }
        }

        public override int GetHashCode() {
            return base.GetHashCode() ^ GetHashCodeBasedOnParts(Server, Schema, Username, Password);
        }

        public override bool Equals(object obj) {
            var config = obj as MySQLDatabaseConfiguration;

            return config != null && base.Equals(obj) && Server == config.Server && Schema == config.Schema &&
                Username == config.Username && Password == config.Password &&
                ConnectionStringOverride == config.ConnectionStringOverride && AdvancedConfiguration == config.AdvancedConfiguration;
        }

        protected override string AssembleBasicConnectionString() {
            return string.Format("Server={0};Database={1};Uid={2};Pwd={3};Allow User Variables=true;ConnectionLifeTime=6000;CharacterSet=utf8mb4", Server, Schema, Username, Password);
        }

        //TODO: dvn review
        protected override string AssembleAdvancedConnectionString() {
            string result = "";
            if (string.IsNullOrEmpty(Username) == false) {
                result += string.Format("Uid={0};", Username);

                if (string.IsNullOrEmpty(Password) == false) {
                    result += string.Format("Pwd={0};", Password);
                }
            }
            result += AdvancedConfiguration.AdvancedConnectionStringField;
            return result;
        }

        public override IRuntimeDatabaseConfiguration RuntimeDatabaseConfiguration {
            get {
                return new MySQLRuntimeDatabaseConfiguration {
                    Schema = Schema,
                    Username = Username,
                    ConnectionString = ConnectionString
                };
            }
        }
    }
}

