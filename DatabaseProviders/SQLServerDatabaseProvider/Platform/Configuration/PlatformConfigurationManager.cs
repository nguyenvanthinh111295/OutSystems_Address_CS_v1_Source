/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using OutSystems.HubEdition.DatabaseProvider.SqlServer.ConfigurationService;
using OutSystems.HubEdition.Extensibility.Data.ConfigurationService;
using OutSystems.HubEdition.Extensibility.Data.Platform.Configuration;

namespace OutSystems.HubEdition.DatabaseProvider.SqlServer.Platform.Configuration {

    public class PlatformConfigurationManager : BasePlatformConfigurationManager {

        protected const string TAG_CATALOG = "[CATALOG]";
        protected const string TAG_ADMINUSERNAME = "[OSADMIN_USERNAME]";
        protected const string TAG_ADMINPASSWORD = "[OSADMIN_PASSWORD]";
        protected const string TAG_RUNTIMEUSERNAME = "[OSRUNTIME_USERNAME]";
        protected const string TAG_RUNTIMEPASSWORD = "[OSRUNTIME_PASSWORD]";
        protected const string TAG_LOGUSERNAME = "[OSLOG_USERNAME]";
        protected const string TAG_LOGPASSWORD = "[OSLOG_PASSWORD]";
        protected const string TAG_AUTH = "[AUTH]";

        public PlatformConfigurationManager(IPlatformDatabaseConfiguration uiConfiguration)
            : base(uiConfiguration) {

            var config = (PlatformDatabaseConfiguration)uiConfiguration;

            config.SqlEngineEdition = ConfigurationManagerUtils.GetSqlEngineEdition(uiConfiguration);
        }

        public override bool RecommendDatabaseBackup {
            get {
                return false;
            }
        }

        public override FileStream StreamForScriptFile {
            get {
                string path = Path.Combine(Script_Path, "runtimemodel_sqlserver.sql");
                return new FileStream(path, FileMode.Open, FileAccess.Read);
            }
        }

        private FileStream StreamForSetupScriptFile {
            get {
                string path = Path.Combine(Script_Path, "runtime_sqlserver_creation.sql");
                return new FileStream(path, FileMode.Open, FileAccess.Read);
            }
        }

        private static readonly Regex _varcharRe = new Regex("([^A-Z0-9_\\[\"])varchar(2?)([^A-Z0-9_])", RegexOptions.IgnoreCase | RegexOptions.Compiled);
        private static readonly Regex _textRe = new Regex("([^A-Z0-9_\\[\"])text([^A-Z0-9_])", RegexOptions.IgnoreCase | RegexOptions.Compiled);
        private static readonly Regex _clobRe = new Regex("([^A-Z0-9_\"])clob([^A-Z0-9_])", RegexOptions.IgnoreCase | RegexOptions.Compiled);

        public override string ProcessStatement(string statement) {
            PlatformDatabaseConfiguration config = (PlatformDatabaseConfiguration)uiConfiguration;
            statement = statement.Trim();

            if (config.Unicode) {
                statement = _varcharRe.Replace(statement, "$1nvarchar$2$3");
                statement = _clobRe.Replace(statement, "$1nclob$2");
                statement = _textRe.Replace(statement, "$1ntext$2");
            }

            return statement;
        }

        private void NormalizeWindowsUser(Func<PlatformDatabaseConfiguration, string> get, Action<PlatformDatabaseConfiguration, string> set) {
            var uiConf = (PlatformDatabaseConfiguration)uiConfiguration;

            if (uiConf.AuthenticationMode != AuthenticationType.Windows_Authentication) {
                return;
            }

            set(uiConf, WindowsUser.Normalize(get(uiConf)));
        }

        private void NormalizeLogUser() {
            NormalizeWindowsUser(c => c.LogUser, (c, v) => c.LogUser = v);
        }

        private void NormalizeAdminUser() {
            NormalizeWindowsUser(c => c.AdminUser, (c, v) => c.AdminUser = v);
        }

        private void NormalizeRuntimeUser() {
            NormalizeWindowsUser(c => c.RuntimeUser, (c, v) => c.RuntimeUser = v);
        }

        private void NormalizeAllUsers() {
            NormalizeLogUser();
            NormalizeRuntimeUser();
            NormalizeAdminUser();
        }

        public override bool RequiresElevatedPrivilges() {

            try {

                RuntimeDatabaseConfiguration confAdmin = (RuntimeDatabaseConfiguration)uiConfiguration.RuntimeDatabaseConfiguration(Source.Services, User.Admin);

                return ConfigurationManagerUtils.LoginExists(confAdmin, confAdmin.Username) == false ||
                       ConfigurationManagerUtils.DatabaseExists(confAdmin, confAdmin.Catalog) == false;
            } catch {
                return base.RequiresElevatedPrivilges();
            }
        }

        public override string GenerateSetupScript() {

            NormalizeAllUsers();
            PlatformDatabaseConfiguration conf = (PlatformDatabaseConfiguration)uiConfiguration;

            //for P10 the setup script is going to be generated by the conf tool to avoid duplication
            StringBuilder sb = new StringBuilder(ReadScriptFile(StreamForSetupScriptFile));
            sb.Replace(TAG_CATALOG, conf.Catalog);
            sb.Replace(TAG_ADMINUSERNAME, conf.AdminUser);
            sb.Replace(TAG_ADMINPASSWORD, conf.AdminPassword);
            sb.Replace(TAG_RUNTIMEUSERNAME, conf.RuntimeUser);
            sb.Replace(TAG_RUNTIMEPASSWORD, conf.RuntimePassword);
            sb.Replace(TAG_LOGUSERNAME, conf.LogUser);
            sb.Replace(TAG_LOGPASSWORD, conf.LogPassword);
            sb.Replace(TAG_AUTH, conf.AuthenticationMode == AuthenticationType.Windows_Authentication ? "windows" : "sql");

            return sb.ToString();
        }

        public override void Pre_CreateOrUpgradePlatform() {

            NormalizeAllUsers();

            var elevated = (IElevatedUserConfiguration)uiConfiguration;

            var masterElevated = ConfigurationManagerUtils.ConfigurationToMaster(elevated);

            var runtimeElevated = (RuntimeDatabaseConfiguration)elevated.ElevatedRuntimeDatabaseConfiguration();

            bool isAzureDB = ConfigurationManagerUtils.IsDatabaseAzure(masterElevated);

            if (isAzureDB) {
                // On the unlikely scenario of an on-premise installation with Azure SQL,
                // we try to minimise the chance of timeouts.
                ConfigurationManagerUtils.QueryTimeout = 300;
            }

            ConfigurationManagerUtils.CheckIfUserHasNecessaryElevatedPermissions(masterElevated);

            if (!isAzureDB) {
                ConfigurationManagerUtils.CreateSqlServerCatalogIfDoesntExist(masterElevated, runtimeElevated.Catalog);
            } else {
                // We will not support automatically creating Azure databases.
                // An appropriate message is displayed.
                ConfigurationManagerUtils.CheckIfAzureDatabaseExists(masterElevated, runtimeElevated.Catalog);
            }

            ConfigurationManagerUtils.GrantUserPermissions((PlatformDatabaseConfiguration)uiConfiguration);
            ConfigurationManagerUtils.AddHubLogRole(runtimeElevated);
        }

        public override string StatementSeparator {
            get {
                return "GO";
            }
        }

        public override bool TestAdminConnection(out string friendlyMessage, Source source) {
            NormalizeAdminUser();
            bool result = base.TestAdminConnection(out friendlyMessage, source);
            if (result) {
                ConfigurationManagerUtils.CheckRoles(uiConfiguration, out friendlyMessage, source, User.Admin, uiConfiguration.AdminAuthenticationCredential.UserName);
            }
            return result;
        }

        public override bool TestRuntimeConnection(out string friendlyMessage, Source source) {
            NormalizeRuntimeUser();
            bool result = base.TestRuntimeConnection(out friendlyMessage, source);
            if (result) {
                ConfigurationManagerUtils.CheckRoles(uiConfiguration, out friendlyMessage, source, User.Runtime, uiConfiguration.RuntimeAuthenticationCredential.UserName);
            }
            return result;
        }

        public override bool TestLogConnection(out string friendlyMessage, Source source) {
            NormalizeLogUser();
            bool result = base.TestLogConnection(out friendlyMessage, source);
            if (result) {
                ConfigurationManagerUtils.CheckRoles(uiConfiguration, out friendlyMessage, source, User.Log, uiConfiguration.LogAuthenticationCredential.UserName);
            }
            return result;
        }

        public override IEnumerable<Block> ExtraPlatformStatements(Version currentModelVersion) {
            // Create an extra Block for the current version to add extra permissions to runtime user.
            var newBlock = new Block();
            newBlock.SetTagValue(Tag.END_IGNORING_BLOCK.ToString(), "");
            string runtimeuser = ((PlatformDatabaseConfiguration)uiConfiguration).RuntimeUser;
            foreach (string statement in ConfigurationManagerUtils.GetGrantRuntimePermissionsStatements(runtimeuser)) {
                newBlock.AddStatement(statement);
            }
            yield return newBlock;
        }

        public override int QueryTimeout {
            set {
                ConfigurationManagerUtils.QueryTimeout = value;
            }
        }
    }
}