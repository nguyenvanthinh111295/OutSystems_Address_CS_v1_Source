define("ServiceCenter.model$Developer_EspaceRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Developer_EspaceRec = (function (_super) {
__extends(Developer_EspaceRec, _super);
function Developer_EspaceRec(defaults) {
_super.apply(this, arguments);
}
Developer_EspaceRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Developer_Id", "developer_IdAttr", "Developer_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Security_Level", "security_LevelAttr", "Security_Level", false, OS.Types.Integer, function () {
return 1;
})
].concat(_super.attributesToDeclare.call(this));
};
Developer_EspaceRec.generateFromLocalStorage = function () {
return false;
};
Developer_EspaceRec.init();
return Developer_EspaceRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Developer_EspaceRec = Developer_EspaceRec;

});
define("ServiceCenter.model$Log_Cyclic_JobRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Log_Cyclic_JobRec = (function (_super) {
__extends(Log_Cyclic_JobRec, _super);
function Log_Cyclic_JobRec(defaults) {
_super.apply(this, arguments);
}
Log_Cyclic_JobRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Instant", "instantAttr", "Instant", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Duration", "durationAttr", "Duration", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Cyclic_Job_Key", "cyclic_Job_KeyAttr", "Cyclic_Job_Key", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Executed_By", "executed_ByAttr", "Executed_By", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Error_Id", "error_IdAttr", "Error_Id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Should_Have_Run_At", "should_Have_Run_AtAttr", "Should_Have_Run_At", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Next_Run", "next_RunAttr", "Next_Run", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Cycle", "cycleAttr", "Cycle", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Request_Key", "request_KeyAttr", "Request_Key", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_Cyclic_JobRec.generateFromLocalStorage = function () {
return false;
};
Log_Cyclic_JobRec.init();
return Log_Cyclic_JobRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Log_Cyclic_JobRec = Log_Cyclic_JobRec;

});
define("ServiceCenter.model$Recompilation_Errors_LogRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Recompilation_Errors_LogRec = (function (_super) {
__extends(Recompilation_Errors_LogRec, _super);
function Recompilation_Errors_LogRec(defaults) {
_super.apply(this, arguments);
}
Recompilation_Errors_LogRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("OML", "oMLAttr", "OML", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Type", "typeAttr", "Type", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Message", "messageAttr", "Message", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Detail", "detailAttr", "Detail", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Module", "moduleAttr", "Module", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Recompilation_Errors_LogRec.generateFromLocalStorage = function () {
return false;
};
Recompilation_Errors_LogRec.init();
return Recompilation_Errors_LogRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Recompilation_Errors_LogRec = Recompilation_Errors_LogRec;

});
define("ServiceCenter.model$Report_Slow_Web_ServiceRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Report_Slow_Web_ServiceRec = (function (_super) {
__extends(Report_Slow_Web_ServiceRec, _super);
function Report_Slow_Web_ServiceRec(defaults) {
_super.apply(this, arguments);
}
Report_Slow_Web_ServiceRec.attributesToDeclare = function () {
return [
this.attr("espace", "espaceAttr", "espace", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("name", "nameAttr", "name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("method", "methodAttr", "method", false, OS.Types.Text, function () {
return "";
}), 
this.attr("avgtime", "avgtimeAttr", "avgtime", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("count", "countAttr", "count", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("totaltime", "totaltimeAttr", "totaltime", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("reportId", "reportIdAttr", "reportId", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("errors", "errorsAttr", "errors", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Report_Slow_Web_ServiceRec.generateFromLocalStorage = function () {
return false;
};
Report_Slow_Web_ServiceRec.init();
return Report_Slow_Web_ServiceRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Report_Slow_Web_ServiceRec = Report_Slow_Web_ServiceRec;

});
define("ServiceCenter.model$RoleRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var RoleRec = (function (_super) {
__extends(RoleRec, _super);
function RoleRec(defaults) {
_super.apply(this, arguments);
}
RoleRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Persistent", "persistentAttr", "Persistent", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
RoleRec.generateFromLocalStorage = function () {
return false;
};
RoleRec.init();
return RoleRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.RoleRec = RoleRec;

});
define("ServiceCenter.model$Virtual_NumberRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Virtual_NumberRec = (function (_super) {
__extends(Virtual_NumberRec, _super);
function Virtual_NumberRec(defaults) {
_super.apply(this, arguments);
}
Virtual_NumberRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Physical_Number_Id", "physical_Number_IdAttr", "Physical_Number_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Uses_Tenant_Msisdn", "uses_Tenant_MsisdnAttr", "Uses_Tenant_Msisdn", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Smsentry_Id", "smsentry_IdAttr", "Smsentry_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Order_Priority", "order_PriorityAttr", "Order_Priority", true, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Virtual_NumberRec.generateFromLocalStorage = function () {
return false;
};
Virtual_NumberRec.init();
return Virtual_NumberRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Virtual_NumberRec = Virtual_NumberRec;

});
define("ServiceCenter.model$Developer_ExtensionRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Developer_ExtensionRec = (function (_super) {
__extends(Developer_ExtensionRec, _super);
function Developer_ExtensionRec(defaults) {
_super.apply(this, arguments);
}
Developer_ExtensionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Developer_Id", "developer_IdAttr", "Developer_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Extension_Id", "extension_IdAttr", "Extension_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Security_Level", "security_LevelAttr", "Security_Level", false, OS.Types.Integer, function () {
return 1;
})
].concat(_super.attributesToDeclare.call(this));
};
Developer_ExtensionRec.generateFromLocalStorage = function () {
return false;
};
Developer_ExtensionRec.init();
return Developer_ExtensionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Developer_ExtensionRec = Developer_ExtensionRec;

});
define("ServiceCenter.model$Report_TypeRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Report_TypeRec = (function (_super) {
__extends(Report_TypeRec, _super);
function Report_TypeRec(defaults) {
_super.apply(this, arguments);
}
Report_TypeRec.attributesToDeclare = function () {
return [
this.attr("Report_Type", "report_TypeAttr", "Report_Type", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Report_TypeRec.fromStructure = function (str) {
return new Report_TypeRec(new Report_TypeRec.RecordClass({
report_TypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Report_TypeRec.generateFromLocalStorage = function () {
return false;
};
Report_TypeRec.init();
return Report_TypeRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Report_TypeRec = Report_TypeRec;

});
define("ServiceCenter.model$Deprecated_Authentication_Provider_PropertiesRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Deprecated_Authentication_Provider_PropertiesRec = (function (_super) {
__extends(Deprecated_Authentication_Provider_PropertiesRec, _super);
function Deprecated_Authentication_Provider_PropertiesRec(defaults) {
_super.apply(this, arguments);
}
Deprecated_Authentication_Provider_PropertiesRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("ExtAuthProviderId", "extAuthProviderIdAttr", "ExtAuthProviderId", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("SupportedPropertyId", "supportedPropertyIdAttr", "SupportedPropertyId", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("PropertyValue", "propertyValueAttr", "PropertyValue", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Deprecated_Authentication_Provider_PropertiesRec.generateFromLocalStorage = function () {
return false;
};
Deprecated_Authentication_Provider_PropertiesRec.init();
return Deprecated_Authentication_Provider_PropertiesRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Deprecated_Authentication_Provider_PropertiesRec = Deprecated_Authentication_Provider_PropertiesRec;

});
define("ServiceCenter.model$Activity_OutputRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Activity_OutputRec = (function (_super) {
__extends(Activity_OutputRec, _super);
function Activity_OutputRec(defaults) {
_super.apply(this, arguments);
}
Activity_OutputRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Output_Def_Id", "output_Def_IdAttr", "Output_Def_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Activity_Id", "activity_IdAttr", "Activity_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Data_Type", "data_TypeAttr", "Data_Type", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Output_Value", "output_ValueAttr", "Output_Value", false, OS.Types.Text, function () {
return "";
}), 
this.attr("SS_Type", "sS_TypeAttr", "SS_Type", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Activity_OutputRec.generateFromLocalStorage = function () {
return false;
};
Activity_OutputRec.init();
return Activity_OutputRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Activity_OutputRec = Activity_OutputRec;

});
define("ServiceCenter.model$Espace_VersionRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Espace_VersionRec = (function (_super) {
__extends(Espace_VersionRec, _super);
function Espace_VersionRec(defaults) {
_super.apply(this, arguments);
}
Espace_VersionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Version", "versionAttr", "Version", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("OML_File", "oML_FileAttr", "OML_File", true, OS.Types.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}), 
this.attr("Uploaded_By", "uploaded_ByAttr", "Uploaded_By", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Uploaded_Date", "uploaded_DateAttr", "Uploaded_Date", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("eSpace_Id", "eSpace_IdAttr", "eSpace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Valid", "is_ValidAttr", "Is_Valid", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Service_Studio_Version", "service_Studio_VersionAttr", "Service_Studio_Version", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Last_Upgrade_Version", "last_Upgrade_VersionAttr", "Last_Upgrade_Version", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Based_On_Previous", "based_On_PreviousAttr", "Based_On_Previous", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Hash", "hashAttr", "Hash", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Publishing_Id", "publishing_IdAttr", "Publishing_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Last_Modified", "last_ModifiedAttr", "Last_Modified", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Has_HTTPS", "has_HTTPSAttr", "Has_HTTPS", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Has_HTTPSClientCertificates", "has_HTTPSClientCertificatesAttr", "Has_HTTPSClientCertificates", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Has_IntegratedAuthentication", "has_IntegratedAuthenticationAttr", "Has_IntegratedAuthentication", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Has_SMS", "has_SMSAttr", "Has_SMS", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Has_WebServices", "has_WebServicesAttr", "Has_WebServices", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Has_PublicElements", "has_PublicElementsAttr", "Has_PublicElements", false, OS.Types.Boolean, function () {
return true;
}), 
this.attr("DBCatalog_Id", "dBCatalog_IdAttr", "DBCatalog_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_User_Provider", "is_User_ProviderAttr", "Is_User_Provider", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("User_Provider_Key", "user_Provider_KeyAttr", "User_Provider_Key", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_Provider_Name", "user_Provider_NameAttr", "User_Provider_Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Espace_Name", "espace_NameAttr", "Espace_Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LastUpdateDate", "lastUpdateDateAttr", "LastUpdateDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("HMAC", "hMACAttr", "HMAC", false, OS.Types.Text, function () {
return "";
}), 
this.attr("OmlHash", "omlHashAttr", "OmlHash", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Default_Theme_Is_Mobile", "default_Theme_Is_MobileAttr", "Default_Theme_Is_Mobile", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("HMACVersion", "hMACVersionAttr", "HMACVersion", false, OS.Types.Text, function () {
return "";
}), 
this.attr("OmlHashVersion", "omlHashVersionAttr", "OmlHashVersion", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Direct_Upgrade_From_Hash", "direct_Upgrade_From_HashAttr", "Direct_Upgrade_From_Hash", false, OS.Types.Text, function () {
return "";
}), 
this.attr("GeneralHash", "generalHashAttr", "GeneralHash", false, OS.Types.Text, function () {
return "";
}), 
this.attr("JQueryVersion", "jQueryVersionAttr", "JQueryVersion", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Espace_VersionRec.generateFromLocalStorage = function () {
return false;
};
Espace_VersionRec.init();
return Espace_VersionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Espace_VersionRec = Espace_VersionRec;

});
define("ServiceCenter.model$Site_Property_DefinitionRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Site_Property_DefinitionRec = (function (_super) {
__extends(Site_Property_DefinitionRec, _super);
function Site_Property_DefinitionRec(defaults) {
_super.apply(this, arguments);
}
Site_Property_DefinitionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Data_Type", "data_TypeAttr", "Data_Type", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Default_Value", "default_ValueAttr", "Default_Value", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Is_Shared", "is_SharedAttr", "Is_Shared", false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
Site_Property_DefinitionRec.generateFromLocalStorage = function () {
return false;
};
Site_Property_DefinitionRec.init();
return Site_Property_DefinitionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Site_Property_DefinitionRec = Site_Property_DefinitionRec;

});
define("ServiceCenter.model$Report_Integrations_PerformanceRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Report_Integrations_PerformanceRec = (function (_super) {
__extends(Report_Integrations_PerformanceRec, _super);
function Report_Integrations_PerformanceRec(defaults) {
_super.apply(this, arguments);
}
Report_Integrations_PerformanceRec.attributesToDeclare = function () {
return [
this.attr("espace", "espaceAttr", "espace", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("method", "methodAttr", "method", false, OS.Types.Text, function () {
return "";
}), 
this.attr("avgtime", "avgtimeAttr", "avgtime", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("count", "countAttr", "count", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("totaltime", "totaltimeAttr", "totaltime", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("reportId", "reportIdAttr", "reportId", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("errors", "errorsAttr", "errors", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Report_Integrations_PerformanceRec.generateFromLocalStorage = function () {
return false;
};
Report_Integrations_PerformanceRec.init();
return Report_Integrations_PerformanceRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Report_Integrations_PerformanceRec = Report_Integrations_PerformanceRec;

});
define("ServiceCenter.model$AppMobile_BTypeIOSRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var AppMobile_BTypeIOSRec = (function (_super) {
__extends(AppMobile_BTypeIOSRec, _super);
function AppMobile_BTypeIOSRec(defaults) {
_super.apply(this, arguments);
}
AppMobile_BTypeIOSRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Label", "labelAttr", "Label", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Order", "orderAttr", "Order", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
AppMobile_BTypeIOSRec.generateFromLocalStorage = function () {
return false;
};
AppMobile_BTypeIOSRec.init();
return AppMobile_BTypeIOSRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.AppMobile_BTypeIOSRec = AppMobile_BTypeIOSRec;

});
define("ServiceCenter.model$Authentication_ProviderRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Authentication_ProviderRec = (function (_super) {
__extends(Authentication_ProviderRec, _super);
function Authentication_ProviderRec(defaults) {
_super.apply(this, arguments);
}
Authentication_ProviderRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("EspaceId", "espaceIdAttr", "EspaceId", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("WebServiceId", "webServiceIdAttr", "WebServiceId", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("LastUsed", "lastUsedAttr", "LastUsed", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
Authentication_ProviderRec.generateFromLocalStorage = function () {
return false;
};
Authentication_ProviderRec.init();
return Authentication_ProviderRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Authentication_ProviderRec = Authentication_ProviderRec;

});
define("ServiceCenter.model$Physical_NumberRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Physical_NumberRec = (function (_super) {
__extends(Physical_NumberRec, _super);
function Physical_NumberRec(defaults) {
_super.apply(this, arguments);
}
Physical_NumberRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Phone_Number", "phone_NumberAttr", "Phone_Number", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
Physical_NumberRec.generateFromLocalStorage = function () {
return false;
};
Physical_NumberRec.init();
return Physical_NumberRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Physical_NumberRec = Physical_NumberRec;

});
define("ServiceCenter.model$Log_Sms_PreviousRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Log_Sms_PreviousRec = (function (_super) {
__extends(Log_Sms_PreviousRec, _super);
function Log_Sms_PreviousRec(defaults) {
_super.apply(this, arguments);
}
Log_Sms_PreviousRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Instant", "instantAttr", "Instant", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Message", "messageAttr", "Message", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Cycle", "cycleAttr", "Cycle", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Message_Id", "message_IdAttr", "Message_Id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Original_Message_Id", "original_Message_IdAttr", "Original_Message_Id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("MSISDN", "mSISDNAttr", "MSISDN", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Large_Account", "large_AccountAttr", "Large_Account", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Billing_Code", "billing_CodeAttr", "Billing_Code", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Billing_Description", "billing_DescriptionAttr", "Billing_Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Connection", "connectionAttr", "Connection", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Operator_Code", "operator_CodeAttr", "Operator_Code", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Custom_Id", "custom_IdAttr", "Custom_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Custom_1", "custom_1Attr", "Custom_1", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Custom_2", "custom_2Attr", "Custom_2", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Custom_3", "custom_3Attr", "Custom_3", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Type", "typeAttr", "Type", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Tenant_Path", "tenant_PathAttr", "Tenant_Path", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Screen_Name", "screen_NameAttr", "Screen_Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DLR_Status", "dLR_StatusAttr", "DLR_Status", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Error_Id", "error_IdAttr", "Error_Id", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_Sms_PreviousRec.generateFromLocalStorage = function () {
return false;
};
Log_Sms_PreviousRec.init();
return Log_Sms_PreviousRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Log_Sms_PreviousRec = Log_Sms_PreviousRec;

});
define("ServiceCenter.model$Msisdn_TenantRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Msisdn_TenantRec = (function (_super) {
__extends(Msisdn_TenantRec, _super);
function Msisdn_TenantRec(defaults) {
_super.apply(this, arguments);
}
Msisdn_TenantRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Msisdn", "msisdnAttr", "Msisdn", true, OS.Types.PhoneNumber, function () {
return "";
}), 
this.attr("Virtual_Number_Id", "virtual_Number_IdAttr", "Virtual_Number_Id", true, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Msisdn_TenantRec.generateFromLocalStorage = function () {
return false;
};
Msisdn_TenantRec.init();
return Msisdn_TenantRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Msisdn_TenantRec = Msisdn_TenantRec;

});
define("ServiceCenter.model$Developer_DBCatalogRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Developer_DBCatalogRec = (function (_super) {
__extends(Developer_DBCatalogRec, _super);
function Developer_DBCatalogRec(defaults) {
_super.apply(this, arguments);
}
Developer_DBCatalogRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Developer_Id", "developer_IdAttr", "Developer_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("DBCatalog_Id", "dBCatalog_IdAttr", "DBCatalog_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Security_Level", "security_LevelAttr", "Security_Level", false, OS.Types.Integer, function () {
return 1;
})
].concat(_super.attributesToDeclare.call(this));
};
Developer_DBCatalogRec.generateFromLocalStorage = function () {
return false;
};
Developer_DBCatalogRec.init();
return Developer_DBCatalogRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Developer_DBCatalogRec = Developer_DBCatalogRec;

});
define("ServiceCenter.model$Report_Espace_UsageRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Report_Espace_UsageRec = (function (_super) {
__extends(Report_Espace_UsageRec, _super);
function Report_Espace_UsageRec(defaults) {
_super.apply(this, arguments);
}
Report_Espace_UsageRec.attributesToDeclare = function () {
return [
this.attr("espaceId", "espaceIdAttr", "espaceId", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("reportId", "reportIdAttr", "reportId", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("WebHits", "webHitsAttr", "WebHits", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("InboundSms", "inboundSmsAttr", "InboundSms", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("OutboundSms", "outboundSmsAttr", "OutboundSms", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("WebServices", "webServicesAttr", "WebServices", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Errors", "errorsAttr", "Errors", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("UserLogins", "userLoginsAttr", "UserLogins", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("InboundMsisdn", "inboundMsisdnAttr", "InboundMsisdn", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("ActiveUsers", "activeUsersAttr", "ActiveUsers", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Sessions", "sessionsAttr", "Sessions", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("SessionDuration", "sessionDurationAttr", "SessionDuration", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("HitsPerSession", "hitsPerSessionAttr", "HitsPerSession", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("SlowWebHits", "slowWebHitsAttr", "SlowWebHits", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("TimerRuns", "timerRunsAttr", "TimerRuns", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("SlowTimerRuns", "slowTimerRunsAttr", "SlowTimerRuns", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("ExtensionCalls", "extensionCallsAttr", "ExtensionCalls", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("SlowExtensionCalls", "slowExtensionCallsAttr", "SlowExtensionCalls", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("MobileRequests", "mobileRequestsAttr", "MobileRequests", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Report_Espace_UsageRec.generateFromLocalStorage = function () {
return false;
};
Report_Espace_UsageRec.init();
return Report_Espace_UsageRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Report_Espace_UsageRec = Report_Espace_UsageRec;

});
define("ServiceCenter.model$Site_PropertyRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Site_PropertyRec = (function (_super) {
__extends(Site_PropertyRec, _super);
function Site_PropertyRec(defaults) {
_super.apply(this, arguments);
}
Site_PropertyRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Site_Property_Definition_Id", "site_Property_Definition_IdAttr", "Site_Property_Definition_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Property_Value", "property_ValueAttr", "Property_Value", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_Modified", "user_ModifiedAttr", "User_Modified", false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
Site_PropertyRec.generateFromLocalStorage = function () {
return false;
};
Site_PropertyRec.init();
return Site_PropertyRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Site_PropertyRec = Site_PropertyRec;

});
define("ServiceCenter.model$Log_Integration_PreviousRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Log_Integration_PreviousRec = (function (_super) {
__extends(Log_Integration_PreviousRec, _super);
function Log_Integration_PreviousRec(defaults) {
_super.apply(this, arguments);
}
Log_Integration_PreviousRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Id", "idAttr", "Id", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Instant", "instantAttr", "Instant", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Duration", "durationAttr", "Duration", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Source", "sourceAttr", "Source", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Endpoint", "endpointAttr", "Endpoint", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Action", "actionAttr", "Action", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Type", "typeAttr", "Type", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Error_Id", "error_IdAttr", "Error_Id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Executed_By", "executed_ByAttr", "Executed_By", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Cycle", "cycleAttr", "Cycle", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Expose", "is_ExposeAttr", "Is_Expose", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Request_Key", "request_KeyAttr", "Request_Key", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_Integration_PreviousRec.generateFromLocalStorage = function () {
return false;
};
Log_Integration_PreviousRec.init();
return Log_Integration_PreviousRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Log_Integration_PreviousRec = Log_Integration_PreviousRec;

});
define("ServiceCenter.model$ActivationRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var ActivationRec = (function (_super) {
__extends(ActivationRec, _super);
function ActivationRec(defaults) {
_super.apply(this, arguments);
}
ActivationRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Info", "infoAttr", "Info", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Host", "hostAttr", "Host", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Binary_Data", "binary_DataAttr", "Binary_Data", false, OS.Types.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}), 
this.attr("Text", "textAttr", "Text", false, OS.Types.Text, function () {
return "";
}), 
this.attr("HMAC", "hMACAttr", "HMAC", false, OS.Types.Text, function () {
return "";
}), 
this.attr("HMACVersion", "hMACVersionAttr", "HMACVersion", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
ActivationRec.generateFromLocalStorage = function () {
return false;
};
ActivationRec.init();
return ActivationRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.ActivationRec = ActivationRec;

});
define("ServiceCenter.model$SiteHeaderRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var SiteHeaderRec = (function (_super) {
__extends(SiteHeaderRec, _super);
function SiteHeaderRec(defaults) {
_super.apply(this, arguments);
}
SiteHeaderRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("RuleId", "ruleIdAttr", "RuleId", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Value", "valueAttr", "Value", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
SiteHeaderRec.generateFromLocalStorage = function () {
return false;
};
SiteHeaderRec.init();
return SiteHeaderRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.SiteHeaderRec = SiteHeaderRec;

});
define("ServiceCenter.model$PathRuleRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var PathRuleRec = (function (_super) {
__extends(PathRuleRec, _super);
function PathRuleRec(defaults) {
_super.apply(this, arguments);
}
PathRuleRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("RuleOrder", "ruleOrderAttr", "RuleOrder", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Incoming", "incomingAttr", "Incoming", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Translation", "translationAttr", "Translation", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Redirect", "redirectAttr", "Redirect", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("UseRegexp", "useRegexpAttr", "UseRegexp", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("StopProcessing", "stopProcessingAttr", "StopProcessing", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("ExclusiveToSiteRule", "exclusiveToSiteRuleAttr", "ExclusiveToSiteRule", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Kind", "kindAttr", "Kind", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
PathRuleRec.generateFromLocalStorage = function () {
return false;
};
PathRuleRec.init();
return PathRuleRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.PathRuleRec = PathRuleRec;

});
define("ServiceCenter.model$Log_Web_Reference_PreviousRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Log_Web_Reference_PreviousRec = (function (_super) {
__extends(Log_Web_Reference_PreviousRec, _super);
function Log_Web_Reference_PreviousRec(defaults) {
_super.apply(this, arguments);
}
Log_Web_Reference_PreviousRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Instant", "instantAttr", "Instant", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Duration", "durationAttr", "Duration", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("URL", "uRLAttr", "URL", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Method", "methodAttr", "Method", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Executed_By", "executed_ByAttr", "Executed_By", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Error_Id", "error_IdAttr", "Error_Id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IntegrationLog_Id", "integrationLog_IdAttr", "IntegrationLog_Id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Cycle", "cycleAttr", "Cycle", true, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Log_Web_Reference_PreviousRec.generateFromLocalStorage = function () {
return false;
};
Log_Web_Reference_PreviousRec.init();
return Log_Web_Reference_PreviousRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Log_Web_Reference_PreviousRec = Log_Web_Reference_PreviousRec;

});
define("ServiceCenter.model$Log_RequestEventRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Log_RequestEventRec = (function (_super) {
__extends(Log_RequestEventRec, _super);
function Log_RequestEventRec(defaults) {
_super.apply(this, arguments);
}
Log_RequestEventRec.attributesToDeclare = function () {
return [
this.attr("Instant", "instantAttr", "Instant", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("RequestKey", "requestKeyAttr", "RequestKey", true, OS.Types.Text, function () {
return "";
}), 
this.attr("RequestEventName", "requestEventNameAttr", "RequestEventName", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ModuleKey", "moduleKeyAttr", "ModuleKey", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ModuleName", "moduleNameAttr", "ModuleName", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ApplicationKey", "applicationKeyAttr", "ApplicationKey", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ApplicationName", "applicationNameAttr", "ApplicationName", true, OS.Types.Text, function () {
return "";
}), 
this.attr("EventDetails", "eventDetailsAttr", "EventDetails", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Cycle", "cycleAttr", "Cycle", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Log_RequestEventRec.generateFromLocalStorage = function () {
return false;
};
Log_RequestEventRec.init();
return Log_RequestEventRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Log_RequestEventRec = Log_RequestEventRec;

});
define("ServiceCenter.model$Activity_KindRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Activity_KindRec = (function (_super) {
__extends(Activity_KindRec, _super);
function Activity_KindRec(defaults) {
_super.apply(this, arguments);
}
Activity_KindRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Activity_KindRec.generateFromLocalStorage = function () {
return false;
};
Activity_KindRec.init();
return Activity_KindRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Activity_KindRec = Activity_KindRec;

});
define("ServiceCenter.model$App_Mobile_BuildRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var App_Mobile_BuildRec = (function (_super) {
__extends(App_Mobile_BuildRec, _super);
function App_Mobile_BuildRec(defaults) {
_super.apply(this, arguments);
}
App_Mobile_BuildRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Tracking_Number", "tracking_NumberAttr", "Tracking_Number", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Requested_By", "requested_ByAttr", "Requested_By", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Started_On", "started_OnAttr", "Started_On", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Finished_On", "finished_OnAttr", "Finished_On", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Build_Status", "build_StatusAttr", "Build_Status", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Build_Details", "build_DetailsAttr", "Build_Details", false, OS.Types.Text, function () {
return "";
}), 
this.attr("App_Mobile_Config", "app_Mobile_ConfigAttr", "App_Mobile_Config", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("App_Version", "app_VersionAttr", "App_Version", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Secret", "secretAttr", "Secret", false, OS.Types.Text, function () {
return "";
}), 
this.attr("NativeHash", "nativeHashAttr", "NativeHash", false, OS.Types.Text, function () {
return "";
}), 
this.attr("VersionNumber", "versionNumberAttr", "VersionNumber", false, OS.Types.Text, function () {
return "0.1";
}), 
this.attr("VersionCode", "versionCodeAttr", "VersionCode", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("ConfigurationHash", "configurationHashAttr", "ConfigurationHash", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
App_Mobile_BuildRec.generateFromLocalStorage = function () {
return false;
};
App_Mobile_BuildRec.init();
return App_Mobile_BuildRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.App_Mobile_BuildRec = App_Mobile_BuildRec;

});
define("ServiceCenter.model$AssemblyRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var AssemblyRec = (function (_super) {
__extends(AssemblyRec, _super);
function AssemblyRec(defaults) {
_super.apply(this, arguments);
}
AssemblyRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Area_Id", "area_IdAttr", "Area_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Extension_Id", "extension_IdAttr", "Extension_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Hash", "hashAttr", "Hash", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Signature", "signatureAttr", "Signature", false, OS.Types.Text, function () {
return "";
}), 
this.attr("In_Debug", "in_DebugAttr", "In_Debug", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Debugger_Version", "debugger_VersionAttr", "Debugger_Version", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CompiledButNotDeployedHash", "compiledButNotDeployedHashAttr", "CompiledButNotDeployedHash", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
AssemblyRec.generateFromLocalStorage = function () {
return false;
};
AssemblyRec.init();
return AssemblyRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.AssemblyRec = AssemblyRec;

});
define("ServiceCenter.model$Report_SuRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Report_SuRec = (function (_super) {
__extends(Report_SuRec, _super);
function Report_SuRec(defaults) {
_super.apply(this, arguments);
}
Report_SuRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("OMLComplexity", "oMLComplexityAttr", "OMLComplexity", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("EspaceId", "espaceIdAttr", "EspaceId", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Licensed_SUs", "licensed_SUsAttr", "Licensed_SUs", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Used_Licensed_SUs", "used_Licensed_SUsAttr", "Used_Licensed_SUs", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("LastUpdateDate", "lastUpdateDateAttr", "LastUpdateDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("HMAC", "hMACAttr", "HMAC", false, OS.Types.Text, function () {
return "";
}), 
this.attr("HMACVersion", "hMACVersionAttr", "HMACVersion", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Report_SuRec.generateFromLocalStorage = function () {
return false;
};
Report_SuRec.init();
return Report_SuRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Report_SuRec = Report_SuRec;

});
define("ServiceCenter.model$Espace_ExtensionRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Espace_ExtensionRec = (function (_super) {
__extends(Espace_ExtensionRec, _super);
function Espace_ExtensionRec(defaults) {
_super.apply(this, arguments);
}
Espace_ExtensionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Extension_Id", "extension_IdAttr", "Extension_Id", true, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Espace_ExtensionRec.generateFromLocalStorage = function () {
return false;
};
Espace_ExtensionRec.init();
return Espace_ExtensionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Espace_ExtensionRec = Espace_ExtensionRec;

});
define("ServiceCenter.model$APIStatusRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var APIStatusRec = (function (_super) {
__extends(APIStatusRec, _super);
function APIStatusRec(defaults) {
_super.apply(this, arguments);
}
APIStatusRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Label", "labelAttr", "Label", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Order", "orderAttr", "Order", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("ResponseId", "responseIdAttr", "ResponseId", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("ResponseMessage", "responseMessageAttr", "ResponseMessage", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ResponseAdditionalInfo", "responseAdditionalInfoAttr", "ResponseAdditionalInfo", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
APIStatusRec.generateFromLocalStorage = function () {
return false;
};
APIStatusRec.init();
return APIStatusRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.APIStatusRec = APIStatusRec;

});
define("ServiceCenter.model$TenantRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var TenantRec = (function (_super) {
__extends(TenantRec, _super);
function TenantRec(defaults) {
_super.apply(this, arguments);
}
TenantRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
TenantRec.generateFromLocalStorage = function () {
return false;
};
TenantRec.init();
return TenantRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.TenantRec = TenantRec;

});
define("ServiceCenter.model$Report_Hourly_UsageRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Report_Hourly_UsageRec = (function (_super) {
__extends(Report_Hourly_UsageRec, _super);
function Report_Hourly_UsageRec(defaults) {
_super.apply(this, arguments);
}
Report_Hourly_UsageRec.attributesToDeclare = function () {
return [
this.attr("espaceId", "espaceIdAttr", "espaceId", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("reportId", "reportIdAttr", "reportId", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("WebHits", "webHitsAttr", "WebHits", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("InboundSms", "inboundSmsAttr", "InboundSms", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("OutboundSms", "outboundSmsAttr", "OutboundSms", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("WebServices", "webServicesAttr", "WebServices", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Errors", "errorsAttr", "Errors", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Hour", "hourAttr", "Hour", false, OS.Types.Text, function () {
return "";
}), 
this.attr("SlowWebScreens", "slowWebScreensAttr", "SlowWebScreens", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("TimerRuns", "timerRunsAttr", "TimerRuns", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("SlowTimerRuns", "slowTimerRunsAttr", "SlowTimerRuns", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("ExtensionCalls", "extensionCallsAttr", "ExtensionCalls", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("SlowExtensionCalls", "slowExtensionCallsAttr", "SlowExtensionCalls", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("MobileRequests", "mobileRequestsAttr", "MobileRequests", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Report_Hourly_UsageRec.generateFromLocalStorage = function () {
return false;
};
Report_Hourly_UsageRec.init();
return Report_Hourly_UsageRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Report_Hourly_UsageRec = Report_Hourly_UsageRec;

});
define("ServiceCenter.model$Meta_Cyclic_JobRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Meta_Cyclic_JobRec = (function (_super) {
__extends(Meta_Cyclic_JobRec, _super);
function Meta_Cyclic_JobRec(defaults) {
_super.apply(this, arguments);
}
Meta_Cyclic_JobRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Default_Schedule", "default_ScheduleAttr", "Default_Schedule", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Priority", "priorityAttr", "Priority", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Timeout", "timeoutAttr", "Timeout", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Effective_Timeout", "effective_TimeoutAttr", "Effective_Timeout", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Shared", "is_SharedAttr", "Is_Shared", false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
Meta_Cyclic_JobRec.generateFromLocalStorage = function () {
return false;
};
Meta_Cyclic_JobRec.init();
return Meta_Cyclic_JobRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Meta_Cyclic_JobRec = Meta_Cyclic_JobRec;

});
define("ServiceCenter.model$Developer_ApplicationRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Developer_ApplicationRec = (function (_super) {
__extends(Developer_ApplicationRec, _super);
function Developer_ApplicationRec(defaults) {
_super.apply(this, arguments);
}
Developer_ApplicationRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Developer_Id", "developer_IdAttr", "Developer_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Application_Key", "application_KeyAttr", "Application_Key", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Security_Level", "security_LevelAttr", "Security_Level", false, OS.Types.Integer, function () {
return 1;
})
].concat(_super.attributesToDeclare.call(this));
};
Developer_ApplicationRec.generateFromLocalStorage = function () {
return false;
};
Developer_ApplicationRec.init();
return Developer_ApplicationRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Developer_ApplicationRec = Developer_ApplicationRec;

});
define("ServiceCenter.model$Extension_Version_SignatureRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Extension_Version_SignatureRec = (function (_super) {
__extends(Extension_Version_SignatureRec, _super);
function Extension_Version_SignatureRec(defaults) {
_super.apply(this, arguments);
}
Extension_Version_SignatureRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Extension_Version_Id", "extension_Version_IdAttr", "Extension_Version_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Signature_Binary", "signature_BinaryAttr", "Signature_Binary", false, OS.Types.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}), 
this.attr("Signature_Hash", "signature_HashAttr", "Signature_Hash", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Extension_Version_SignatureRec.generateFromLocalStorage = function () {
return false;
};
Extension_Version_SignatureRec.init();
return Extension_Version_SignatureRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Extension_Version_SignatureRec = Extension_Version_SignatureRec;

});
define("ServiceCenter.model$Process_DefinitionRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Process_DefinitionRec = (function (_super) {
__extends(Process_DefinitionRec, _super);
function Process_DefinitionRec(defaults) {
_super.apply(this, arguments);
}
Process_DefinitionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Label", "labelAttr", "Label", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return true;
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Locked", "is_LockedAttr", "Is_Locked", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Locked_Date", "locked_DateAttr", "Locked_Date", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Locked_By", "locked_ByAttr", "Locked_By", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Process_Entity_Id", "process_Entity_IdAttr", "Process_Entity_Id", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Process_DefinitionRec.generateFromLocalStorage = function () {
return false;
};
Process_DefinitionRec.init();
return Process_DefinitionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Process_DefinitionRec = Process_DefinitionRec;

});
define("ServiceCenter.model$Espace_ConfigurationRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Espace_ConfigurationRec = (function (_super) {
__extends(Espace_ConfigurationRec, _super);
function Espace_ConfigurationRec(defaults) {
_super.apply(this, arguments);
}
Espace_ConfigurationRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Val", "valAttr", "Val", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Espace_ConfigurationRec.generateFromLocalStorage = function () {
return false;
};
Espace_ConfigurationRec.init();
return Espace_ConfigurationRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Espace_ConfigurationRec = Espace_ConfigurationRec;

});
define("ServiceCenter.model$ServiceCenter_RoleRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var ServiceCenter_RoleRec = (function (_super) {
__extends(ServiceCenter_RoleRec, _super);
function ServiceCenter_RoleRec(defaults) {
_super.apply(this, arguments);
}
ServiceCenter_RoleRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("External_Id", "external_IdAttr", "External_Id", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
ServiceCenter_RoleRec.generateFromLocalStorage = function () {
return false;
};
ServiceCenter_RoleRec.init();
return ServiceCenter_RoleRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.ServiceCenter_RoleRec = ServiceCenter_RoleRec;

});
define("ServiceCenter.model$RuntimeKindRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var RuntimeKindRec = (function (_super) {
__extends(RuntimeKindRec, _super);
function RuntimeKindRec(defaults) {
_super.apply(this, arguments);
}
RuntimeKindRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Label", "labelAttr", "Label", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Order", "orderAttr", "Order", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
RuntimeKindRec.generateFromLocalStorage = function () {
return false;
};
RuntimeKindRec.init();
return RuntimeKindRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.RuntimeKindRec = RuntimeKindRec;

});
define("ServiceCenter.model$Web_Services_ErrorCodeRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Web_Services_ErrorCodeRec = (function (_super) {
__extends(Web_Services_ErrorCodeRec, _super);
function Web_Services_ErrorCodeRec(defaults) {
_super.apply(this, arguments);
}
Web_Services_ErrorCodeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Message", "messageAttr", "Message", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Order", "orderAttr", "Order", true, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Web_Services_ErrorCodeRec.generateFromLocalStorage = function () {
return false;
};
Web_Services_ErrorCodeRec.init();
return Web_Services_ErrorCodeRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Web_Services_ErrorCodeRec = Web_Services_ErrorCodeRec;

});
define("ServiceCenter.model$EspaceRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var EspaceRec = (function (_super) {
__extends(EspaceRec, _super);
function EspaceRec(defaults) {
_super.apply(this, arguments);
}
EspaceRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Is_Multitenant", "is_MultitenantAttr", "Is_Multitenant", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Is_System", "is_SystemAttr", "Is_System", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Version_Id", "version_IdAttr", "Version_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Consistent", "is_ConsistentAttr", "Is_Consistent", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Zone_Id", "zone_IdAttr", "Zone_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_User_Provider", "is_User_ProviderAttr", "Is_User_Provider", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("User_Provider_Key", "user_Provider_KeyAttr", "User_Provider_Key", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_Provider_Name", "user_Provider_NameAttr", "User_Provider_Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Is_Locked", "is_LockedAttr", "Is_Locked", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Locked_Date", "locked_DateAttr", "Locked_Date", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("DBCatalog_Id", "dBCatalog_IdAttr", "DBCatalog_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Pending_Version_Id", "pending_Version_IdAttr", "Pending_Version_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("HMAC", "hMACAttr", "HMAC", false, OS.Types.Text, function () {
return "";
}), 
this.attr("HMACVersion", "hMACVersionAttr", "HMACVersion", false, OS.Types.Text, function () {
return "";
}), 
this.attr("EspaceKind", "espaceKindAttr", "EspaceKind", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
EspaceRec.generateFromLocalStorage = function () {
return false;
};
EspaceRec.init();
return EspaceRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.EspaceRec = EspaceRec;

});
define("ServiceCenter.model$AppMobile_BTypeAndroidRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var AppMobile_BTypeAndroidRec = (function (_super) {
__extends(AppMobile_BTypeAndroidRec, _super);
function AppMobile_BTypeAndroidRec(defaults) {
_super.apply(this, arguments);
}
AppMobile_BTypeAndroidRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Label", "labelAttr", "Label", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Order", "orderAttr", "Order", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
AppMobile_BTypeAndroidRec.generateFromLocalStorage = function () {
return false;
};
AppMobile_BTypeAndroidRec.init();
return AppMobile_BTypeAndroidRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.AppMobile_BTypeAndroidRec = AppMobile_BTypeAndroidRec;

});
define("ServiceCenter.model$Activity_Def_LinkRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Activity_Def_LinkRec = (function (_super) {
__extends(Activity_Def_LinkRec, _super);
function Activity_Def_LinkRec(defaults) {
_super.apply(this, arguments);
}
Activity_Def_LinkRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Source_Activity_Def_Id", "source_Activity_Def_IdAttr", "Source_Activity_Def_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Target_Activity_Def_Id", "target_Activity_Def_IdAttr", "Target_Activity_Def_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Outcome", "outcomeAttr", "Outcome", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Activity_Def_LinkRec.generateFromLocalStorage = function () {
return false;
};
Activity_Def_LinkRec.init();
return Activity_Def_LinkRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Activity_Def_LinkRec = Activity_Def_LinkRec;

});
define("ServiceCenter.model$Log_IntegrationRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Log_IntegrationRec = (function (_super) {
__extends(Log_IntegrationRec, _super);
function Log_IntegrationRec(defaults) {
_super.apply(this, arguments);
}
Log_IntegrationRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Id", "idAttr", "Id", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Instant", "instantAttr", "Instant", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Duration", "durationAttr", "Duration", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Source", "sourceAttr", "Source", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Endpoint", "endpointAttr", "Endpoint", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Action", "actionAttr", "Action", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Type", "typeAttr", "Type", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Error_Id", "error_IdAttr", "Error_Id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Executed_By", "executed_ByAttr", "Executed_By", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Cycle", "cycleAttr", "Cycle", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Expose", "is_ExposeAttr", "Is_Expose", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Request_Key", "request_KeyAttr", "Request_Key", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_IntegrationRec.generateFromLocalStorage = function () {
return false;
};
Log_IntegrationRec.init();
return Log_IntegrationRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Log_IntegrationRec = Log_IntegrationRec;

});
define("ServiceCenter.model$Process_StatusRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Process_StatusRec = (function (_super) {
__extends(Process_StatusRec, _super);
function Process_StatusRec(defaults) {
_super.apply(this, arguments);
}
Process_StatusRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Is_Terminal", "is_TerminalAttr", "Is_Terminal", true, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
Process_StatusRec.generateFromLocalStorage = function () {
return false;
};
Process_StatusRec.init();
return Process_StatusRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Process_StatusRec = Process_StatusRec;

});
define("ServiceCenter.model$ModuleRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var ModuleRec = (function (_super) {
__extends(ModuleRec, _super);
function ModuleRec(defaults) {
_super.apply(this, arguments);
}
ModuleRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Module_Kind_Id", "module_Kind_IdAttr", "Module_Kind_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Extension_Id", "extension_IdAttr", "Extension_Id", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
ModuleRec.generateFromLocalStorage = function () {
return false;
};
ModuleRec.init();
return ModuleRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.ModuleRec = ModuleRec;

});
define("ServiceCenter.model$Log_Screen_PreviousRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Log_Screen_PreviousRec = (function (_super) {
__extends(Log_Screen_PreviousRec, _super);
function Log_Screen_PreviousRec(defaults) {
_super.apply(this, arguments);
}
Log_Screen_PreviousRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Instant", "instantAttr", "Instant", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Duration", "durationAttr", "Duration", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Screen", "screenAttr", "Screen", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Session_Id", "session_IdAttr", "Session_Id", true, OS.Types.Text, function () {
return "";
}), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Msisdn", "msisdnAttr", "Msisdn", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Screen_Type", "screen_TypeAttr", "Screen_Type", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Cycle", "cycleAttr", "Cycle", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Executed_By", "executed_ByAttr", "Executed_By", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Session_Bytes", "session_BytesAttr", "Session_Bytes", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Viewstate_Bytes", "viewstate_BytesAttr", "Viewstate_Bytes", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Session_Requests", "session_RequestsAttr", "Session_Requests", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Access_Mode", "access_ModeAttr", "Access_Mode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Request_Key", "request_KeyAttr", "Request_Key", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Action_Name", "action_NameAttr", "Action_Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Client_IP", "client_IPAttr", "Client_IP", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_Screen_PreviousRec.generateFromLocalStorage = function () {
return false;
};
Log_Screen_PreviousRec.init();
return Log_Screen_PreviousRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Log_Screen_PreviousRec = Log_Screen_PreviousRec;

});
define("ServiceCenter.model$ServerRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var ServerRec = (function (_super) {
__extends(ServerRec, _super);
function ServerRec(defaults) {
_super.apply(this, arguments);
}
ServerRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Ip_Address", "ip_AddressAttr", "Ip_Address", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Host_Serial", "host_SerialAttr", "Host_Serial", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
ServerRec.generateFromLocalStorage = function () {
return false;
};
ServerRec.init();
return ServerRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.ServerRec = ServerRec;

});
define("ServiceCenter.model$PageMetaRuleRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var PageMetaRuleRec = (function (_super) {
__extends(PageMetaRuleRec, _super);
function PageMetaRuleRec(defaults) {
_super.apply(this, arguments);
}
PageMetaRuleRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("RuleOrder", "ruleOrderAttr", "RuleOrder", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Incoming", "incomingAttr", "Incoming", false, OS.Types.Text, function () {
return "";
}), 
this.attr("TargetPage", "targetPageAttr", "TargetPage", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ExclusiveToESpace", "exclusiveToESpaceAttr", "ExclusiveToESpace", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", false, OS.Types.Boolean, function () {
return true;
})
].concat(_super.attributesToDeclare.call(this));
};
PageMetaRuleRec.generateFromLocalStorage = function () {
return false;
};
PageMetaRuleRec.init();
return PageMetaRuleRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.PageMetaRuleRec = PageMetaRuleRec;

});
define("ServiceCenter.model$User_OptionRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var User_OptionRec = (function (_super) {
__extends(User_OptionRec, _super);
function User_OptionRec(defaults) {
_super.apply(this, arguments);
}
User_OptionRec.attributesToDeclare = function () {
return [
this.attr("User_Id", "user_IdAttr", "User_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Skip_Intro", "skip_IntroAttr", "Skip_Intro", true, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
User_OptionRec.generateFromLocalStorage = function () {
return false;
};
User_OptionRec.init();
return User_OptionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.User_OptionRec = User_OptionRec;

});
define("ServiceCenter.model$Email_StatusRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Email_StatusRec = (function (_super) {
__extends(Email_StatusRec, _super);
function Email_StatusRec(defaults) {
_super.apply(this, arguments);
}
Email_StatusRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Last_Error_Id", "last_Error_IdAttr", "Last_Error_Id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Error_Count", "error_CountAttr", "Error_Count", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Next_Run", "next_RunAttr", "Next_Run", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Is_Running_At", "is_Running_AtAttr", "Is_Running_At", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Is_Running_Since", "is_Running_SinceAttr", "Is_Running_Since", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Sent", "sentAttr", "Sent", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
Email_StatusRec.generateFromLocalStorage = function () {
return false;
};
Email_StatusRec.init();
return Email_StatusRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Email_StatusRec = Email_StatusRec;

});
define("ServiceCenter.model$Area_Entry_PointRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Area_Entry_PointRec = (function (_super) {
__extends(Area_Entry_PointRec, _super);
function Area_Entry_PointRec(defaults) {
_super.apply(this, arguments);
}
Area_Entry_PointRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Area_Id", "area_IdAttr", "Area_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Is_Default", "is_DefaultAttr", "Is_Default", true, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
Area_Entry_PointRec.generateFromLocalStorage = function () {
return false;
};
Area_Entry_PointRec.init();
return Area_Entry_PointRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Area_Entry_PointRec = Area_Entry_PointRec;

});
define("ServiceCenter.model$Report_Top_ErrorsRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Report_Top_ErrorsRec = (function (_super) {
__extends(Report_Top_ErrorsRec, _super);
function Report_Top_ErrorsRec(defaults) {
_super.apply(this, arguments);
}
Report_Top_ErrorsRec.attributesToDeclare = function () {
return [
this.attr("Message", "messageAttr", "Message", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Count", "countAttr", "Count", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Espace", "espaceAttr", "Espace", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("ReportId", "reportIdAttr", "ReportId", true, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Report_Top_ErrorsRec.generateFromLocalStorage = function () {
return false;
};
Report_Top_ErrorsRec.init();
return Report_Top_ErrorsRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Report_Top_ErrorsRec = Report_Top_ErrorsRec;

});
define("ServiceCenter.model$Basic_TypeRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Basic_TypeRec = (function (_super) {
__extends(Basic_TypeRec, _super);
function Basic_TypeRec(defaults) {
_super.apply(this, arguments);
}
Basic_TypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Basic_TypeRec.generateFromLocalStorage = function () {
return false;
};
Basic_TypeRec.init();
return Basic_TypeRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Basic_TypeRec = Basic_TypeRec;

});
define("ServiceCenter.model$Module_StatusMessageTypeRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Module_StatusMessageTypeRec = (function (_super) {
__extends(Module_StatusMessageTypeRec, _super);
function Module_StatusMessageTypeRec(defaults) {
_super.apply(this, arguments);
}
Module_StatusMessageTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Label", "labelAttr", "Label", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Order", "orderAttr", "Order", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("ValidForEspaces", "validForEspacesAttr", "ValidForEspaces", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("ValidForExtensions", "validForExtensionsAttr", "ValidForExtensions", true, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
Module_StatusMessageTypeRec.generateFromLocalStorage = function () {
return false;
};
Module_StatusMessageTypeRec.init();
return Module_StatusMessageTypeRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Module_StatusMessageTypeRec = Module_StatusMessageTypeRec;

});
define("ServiceCenter.model$Process_InputRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Process_InputRec = (function (_super) {
__extends(Process_InputRec, _super);
function Process_InputRec(defaults) {
_super.apply(this, arguments);
}
Process_InputRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Input_Def_Id", "input_Def_IdAttr", "Input_Def_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Process_Id", "process_IdAttr", "Process_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Activity_Id", "activity_IdAttr", "Activity_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Data_Type", "data_TypeAttr", "Data_Type", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Input_Value", "input_ValueAttr", "Input_Value", false, OS.Types.Text, function () {
return "";
}), 
this.attr("SS_Type", "sS_TypeAttr", "SS_Type", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Process_InputRec.generateFromLocalStorage = function () {
return false;
};
Process_InputRec.init();
return Process_InputRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Process_InputRec = Process_InputRec;

});
define("ServiceCenter.model$SiteRuleRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var SiteRuleRec = (function (_super) {
__extends(SiteRuleRec, _super);
function SiteRuleRec(defaults) {
_super.apply(this, arguments);
}
SiteRuleRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Incoming", "incomingAttr", "Incoming", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Translation", "translationAttr", "Translation", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Redirect", "redirectAttr", "Redirect", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("UseRegexp", "useRegexpAttr", "UseRegexp", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("StopProcessing", "stopProcessingAttr", "StopProcessing", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", false, OS.Types.Boolean, function () {
return true;
})
].concat(_super.attributesToDeclare.call(this));
};
SiteRuleRec.generateFromLocalStorage = function () {
return false;
};
SiteRuleRec.init();
return SiteRuleRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.SiteRuleRec = SiteRuleRec;

});
define("ServiceCenter.model$Mobile_PlatformRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Mobile_PlatformRec = (function (_super) {
__extends(Mobile_PlatformRec, _super);
function Mobile_PlatformRec(defaults) {
_super.apply(this, arguments);
}
Mobile_PlatformRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Label", "labelAttr", "Label", true, OS.Types.Text, function () {
return "";
}), 
this.attr("FileExtension", "fileExtensionAttr", "FileExtension", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
Mobile_PlatformRec.generateFromLocalStorage = function () {
return false;
};
Mobile_PlatformRec.init();
return Mobile_PlatformRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Mobile_PlatformRec = Mobile_PlatformRec;

});
define("ServiceCenter.model$Log_GeneralRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Log_GeneralRec = (function (_super) {
__extends(Log_GeneralRec, _super);
function Log_GeneralRec(defaults) {
_super.apply(this, arguments);
}
Log_GeneralRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Instant", "instantAttr", "Instant", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Session_Id", "session_IdAttr", "Session_Id", true, OS.Types.Text, function () {
return "";
}), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Error_Id", "error_IdAttr", "Error_Id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Message", "messageAttr", "Message", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Message_Type", "message_TypeAttr", "Message_Type", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Module_Name", "module_NameAttr", "Module_Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Cycle", "cycleAttr", "Cycle", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Request_Key", "request_KeyAttr", "Request_Key", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Action_Name", "action_NameAttr", "Action_Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Entrypoint_Name", "entrypoint_NameAttr", "Entrypoint_Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Client_IP", "client_IPAttr", "Client_IP", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_GeneralRec.generateFromLocalStorage = function () {
return false;
};
Log_GeneralRec.init();
return Log_GeneralRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Log_GeneralRec = Log_GeneralRec;

});
define("ServiceCenter.model$Log_ErrorRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Log_ErrorRec = (function (_super) {
__extends(Log_ErrorRec, _super);
function Log_ErrorRec(defaults) {
_super.apply(this, arguments);
}
Log_ErrorRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Id", "idAttr", "Id", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Instant", "instantAttr", "Instant", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Session_Id", "session_IdAttr", "Session_Id", true, OS.Types.Text, function () {
return "";
}), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Message", "messageAttr", "Message", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Stack", "stackAttr", "Stack", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Module_Name", "module_NameAttr", "Module_Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Server", "serverAttr", "Server", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Cycle", "cycleAttr", "Cycle", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("EnvironmentInformation", "environmentInformationAttr", "EnvironmentInformation", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Request_Key", "request_KeyAttr", "Request_Key", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Entrypoint_Name", "entrypoint_NameAttr", "Entrypoint_Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Action_Name", "action_NameAttr", "Action_Name", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_ErrorRec.generateFromLocalStorage = function () {
return false;
};
Log_ErrorRec.init();
return Log_ErrorRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Log_ErrorRec = Log_ErrorRec;

});
define("ServiceCenter.model$Application_ParameterRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Application_ParameterRec = (function (_super) {
__extends(Application_ParameterRec, _super);
function Application_ParameterRec(defaults) {
_super.apply(this, arguments);
}
Application_ParameterRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("ApplicationId", "applicationIdAttr", "ApplicationId", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Val", "valAttr", "Val", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsBinary", "isBinaryAttr", "IsBinary", false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
Application_ParameterRec.generateFromLocalStorage = function () {
return false;
};
Application_ParameterRec.init();
return Application_ParameterRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Application_ParameterRec = Application_ParameterRec;

});
define("ServiceCenter.model$User_RoleRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var User_RoleRec = (function (_super) {
__extends(User_RoleRec, _super);
function User_RoleRec(defaults) {
_super.apply(this, arguments);
}
User_RoleRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Role_Id", "role_IdAttr", "Role_Id", true, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
User_RoleRec.generateFromLocalStorage = function () {
return false;
};
User_RoleRec.init();
return User_RoleRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.User_RoleRec = User_RoleRec;

});
define("ServiceCenter.model$PathHeaderRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var PathHeaderRec = (function (_super) {
__extends(PathHeaderRec, _super);
function PathHeaderRec(defaults) {
_super.apply(this, arguments);
}
PathHeaderRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("RuleId", "ruleIdAttr", "RuleId", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Value", "valueAttr", "Value", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
PathHeaderRec.generateFromLocalStorage = function () {
return false;
};
PathHeaderRec.init();
return PathHeaderRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.PathHeaderRec = PathHeaderRec;

});
define("ServiceCenter.model$Activity_StatusRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Activity_StatusRec = (function (_super) {
__extends(Activity_StatusRec, _super);
function Activity_StatusRec(defaults) {
_super.apply(this, arguments);
}
Activity_StatusRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Is_Terminal", "is_TerminalAttr", "Is_Terminal", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Appears_In_Inbox", "appears_In_InboxAttr", "Appears_In_Inbox", true, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
Activity_StatusRec.generateFromLocalStorage = function () {
return false;
};
Activity_StatusRec.init();
return Activity_StatusRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Activity_StatusRec = Activity_StatusRec;

});
define("ServiceCenter.model$Cyclic_JobRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Cyclic_JobRec = (function (_super) {
__extends(Cyclic_JobRec, _super);
function Cyclic_JobRec(defaults) {
_super.apply(this, arguments);
}
Cyclic_JobRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Meta_Cyclic_Job_Id", "meta_Cyclic_Job_IdAttr", "Meta_Cyclic_Job_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Schedule", "scheduleAttr", "Schedule", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Last_Run", "last_RunAttr", "Last_Run", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Next_Run", "next_RunAttr", "Next_Run", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Last_Duration", "last_DurationAttr", "Last_Duration", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Running_Since", "is_Running_SinceAttr", "Is_Running_Since", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Is_Running_By", "is_Running_ByAttr", "Is_Running_By", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Number_Of_Tries", "number_Of_TriesAttr", "Number_Of_Tries", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Cyclic_JobRec.generateFromLocalStorage = function () {
return false;
};
Cyclic_JobRec.init();
return Cyclic_JobRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Cyclic_JobRec = Cyclic_JobRec;

});
define("ServiceCenter.model$Email_DefinitionRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Email_DefinitionRec = (function (_super) {
__extends(Email_DefinitionRec, _super);
function Email_DefinitionRec(defaults) {
_super.apply(this, arguments);
}
Email_DefinitionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
Email_DefinitionRec.generateFromLocalStorage = function () {
return false;
};
Email_DefinitionRec.init();
return Email_DefinitionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Email_DefinitionRec = Email_DefinitionRec;

});
define("ServiceCenter.model$Log_RequestEvent_PreviousRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Log_RequestEvent_PreviousRec = (function (_super) {
__extends(Log_RequestEvent_PreviousRec, _super);
function Log_RequestEvent_PreviousRec(defaults) {
_super.apply(this, arguments);
}
Log_RequestEvent_PreviousRec.attributesToDeclare = function () {
return [
this.attr("Instant", "instantAttr", "Instant", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("RequestKey", "requestKeyAttr", "RequestKey", true, OS.Types.Text, function () {
return "";
}), 
this.attr("RequestEventName", "requestEventNameAttr", "RequestEventName", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ModuleKey", "moduleKeyAttr", "ModuleKey", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ModuleName", "moduleNameAttr", "ModuleName", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ApplicationKey", "applicationKeyAttr", "ApplicationKey", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ApplicationName", "applicationNameAttr", "ApplicationName", true, OS.Types.Text, function () {
return "";
}), 
this.attr("EventDetails", "eventDetailsAttr", "EventDetails", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Cycle", "cycleAttr", "Cycle", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Log_RequestEvent_PreviousRec.generateFromLocalStorage = function () {
return false;
};
Log_RequestEvent_PreviousRec.init();
return Log_RequestEvent_PreviousRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Log_RequestEvent_PreviousRec = Log_RequestEvent_PreviousRec;

});
define("ServiceCenter.model$Log_Web_ServiceRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Log_Web_ServiceRec = (function (_super) {
__extends(Log_Web_ServiceRec, _super);
function Log_Web_ServiceRec(defaults) {
_super.apply(this, arguments);
}
Log_Web_ServiceRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Instant", "instantAttr", "Instant", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Duration", "durationAttr", "Duration", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Method", "methodAttr", "Method", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Client_IP", "client_IPAttr", "Client_IP", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Executed_By", "executed_ByAttr", "Executed_By", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Error_Id", "error_IdAttr", "Error_Id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Cycle", "cycleAttr", "Cycle", true, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Log_Web_ServiceRec.generateFromLocalStorage = function () {
return false;
};
Log_Web_ServiceRec.init();
return Log_Web_ServiceRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Log_Web_ServiceRec = Log_Web_ServiceRec;

});
define("ServiceCenter.model$Activity_Definition_LangRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Activity_Definition_LangRec = (function (_super) {
__extends(Activity_Definition_LangRec, _super);
function Activity_Definition_LangRec(defaults) {
_super.apply(this, arguments);
}
Activity_Definition_LangRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Activity_Def_Id", "activity_Def_IdAttr", "Activity_Def_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Locale", "localeAttr", "Locale", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Label", "labelAttr", "Label", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Inbox_Instructions", "inbox_InstructionsAttr", "Inbox_Instructions", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Activity_Definition_LangRec.generateFromLocalStorage = function () {
return false;
};
Activity_Definition_LangRec.init();
return Activity_Definition_LangRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Activity_Definition_LangRec = Activity_Definition_LangRec;

});
define("ServiceCenter.model$Solution_PackRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Solution_PackRec = (function (_super) {
__extends(Solution_PackRec, _super);
function Solution_PackRec(defaults) {
_super.apply(this, arguments);
}
Solution_PackRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Filename", "filenameAttr", "Filename", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Content", "contentAttr", "Content", true, OS.Types.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}), 
this.attr("Creation", "creationAttr", "Creation", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("External", "externalAttr", "External", true, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
Solution_PackRec.generateFromLocalStorage = function () {
return false;
};
Solution_PackRec.init();
return Solution_PackRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Solution_PackRec = Solution_PackRec;

});
define("ServiceCenter.model$Log_Extension_PreviousRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Log_Extension_PreviousRec = (function (_super) {
__extends(Log_Extension_PreviousRec, _super);
function Log_Extension_PreviousRec(defaults) {
_super.apply(this, arguments);
}
Log_Extension_PreviousRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Instant", "instantAttr", "Instant", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Duration", "durationAttr", "Duration", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Action_Name", "action_NameAttr", "Action_Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Session_Id", "session_IdAttr", "Session_Id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_Id", "user_IdAttr", "User_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Extension_Id", "extension_IdAttr", "Extension_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Executed_By", "executed_ByAttr", "Executed_By", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Error_Id", "error_IdAttr", "Error_Id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Cycle", "cycleAttr", "Cycle", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Request_Key", "request_KeyAttr", "Request_Key", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_Extension_PreviousRec.generateFromLocalStorage = function () {
return false;
};
Log_Extension_PreviousRec.init();
return Log_Extension_PreviousRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Log_Extension_PreviousRec = Log_Extension_PreviousRec;

});
define("ServiceCenter.model$PropertiesRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var PropertiesRec = (function (_super) {
__extends(PropertiesRec, _super);
function PropertiesRec(defaults) {
_super.apply(this, arguments);
}
PropertiesRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Value", "valueAttr", "Value", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
PropertiesRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
PropertiesRec.init();
return PropertiesRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.PropertiesRec = PropertiesRec;

});
define("ServiceCenter.model$Process_UpgradeRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Process_UpgradeRec = (function (_super) {
__extends(Process_UpgradeRec, _super);
function Process_UpgradeRec(defaults) {
_super.apply(this, arguments);
}
Process_UpgradeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Process_Id", "process_IdAttr", "Process_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Activity_Def_Id", "activity_Def_IdAttr", "Activity_Def_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Active", "activeAttr", "Active", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Past", "pastAttr", "Past", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Future", "futureAttr", "Future", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Deleted", "deletedAttr", "Deleted", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Espace_Version_Id", "espace_Version_IdAttr", "Espace_Version_Id", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Process_UpgradeRec.generateFromLocalStorage = function () {
return false;
};
Process_UpgradeRec.init();
return Process_UpgradeRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Process_UpgradeRec = Process_UpgradeRec;

});
define("ServiceCenter.model$Web_ReferenceRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Web_ReferenceRec = (function (_super) {
__extends(Web_ReferenceRec, _super);
function Web_ReferenceRec(defaults) {
_super.apply(this, arguments);
}
Web_ReferenceRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("URL", "uRLAttr", "URL", true, OS.Types.Text, function () {
return "";
}), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Effective_URL", "effective_URLAttr", "Effective_URL", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Original_Name", "original_NameAttr", "Original_Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Integrated_Authentication", "integrated_AuthenticationAttr", "Integrated_Authentication", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Certificate_Id", "certificate_IdAttr", "Certificate_Id", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Web_ReferenceRec.generateFromLocalStorage = function () {
return false;
};
Web_ReferenceRec.init();
return Web_ReferenceRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Web_ReferenceRec = Web_ReferenceRec;

});
define("ServiceCenter.model$Developer_SolutionRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Developer_SolutionRec = (function (_super) {
__extends(Developer_SolutionRec, _super);
function Developer_SolutionRec(defaults) {
_super.apply(this, arguments);
}
Developer_SolutionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Developer_Id", "developer_IdAttr", "Developer_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Solution_Id", "solution_IdAttr", "Solution_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Security_Level", "security_LevelAttr", "Security_Level", false, OS.Types.Integer, function () {
return 1;
})
].concat(_super.attributesToDeclare.call(this));
};
Developer_SolutionRec.generateFromLocalStorage = function () {
return false;
};
Developer_SolutionRec.init();
return Developer_SolutionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Developer_SolutionRec = Developer_SolutionRec;

});
define("ServiceCenter.model$Log_SmsRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Log_SmsRec = (function (_super) {
__extends(Log_SmsRec, _super);
function Log_SmsRec(defaults) {
_super.apply(this, arguments);
}
Log_SmsRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Instant", "instantAttr", "Instant", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Message", "messageAttr", "Message", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Cycle", "cycleAttr", "Cycle", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Message_Id", "message_IdAttr", "Message_Id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Original_Message_Id", "original_Message_IdAttr", "Original_Message_Id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("MSISDN", "mSISDNAttr", "MSISDN", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Large_Account", "large_AccountAttr", "Large_Account", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Billing_Code", "billing_CodeAttr", "Billing_Code", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Billing_Description", "billing_DescriptionAttr", "Billing_Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Connection", "connectionAttr", "Connection", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Operator_Code", "operator_CodeAttr", "Operator_Code", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Custom_Id", "custom_IdAttr", "Custom_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Custom_1", "custom_1Attr", "Custom_1", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Custom_2", "custom_2Attr", "Custom_2", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Custom_3", "custom_3Attr", "Custom_3", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Type", "typeAttr", "Type", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Tenant_Path", "tenant_PathAttr", "Tenant_Path", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Screen_Name", "screen_NameAttr", "Screen_Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DLR_Status", "dLR_StatusAttr", "DLR_Status", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Error_Id", "error_IdAttr", "Error_Id", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_SmsRec.generateFromLocalStorage = function () {
return false;
};
Log_SmsRec.init();
return Log_SmsRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Log_SmsRec = Log_SmsRec;

});
define("ServiceCenter.model$UserRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var UserRec = (function (_super) {
__extends(UserRec, _super);
function UserRec(defaults) {
_super.apply(this, arguments);
}
UserRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Username", "usernameAttr", "Username", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Password", "passwordAttr", "Password", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Email", "emailAttr", "Email", false, OS.Types.Email, function () {
return "";
}), 
this.attr("MobilePhone", "mobilePhoneAttr", "MobilePhone", false, OS.Types.PhoneNumber, function () {
return "";
}), 
this.attr("External_Id", "external_IdAttr", "External_Id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Creation_Date", "creation_DateAttr", "Creation_Date", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Last_Login", "last_LoginAttr", "Last_Login", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return true;
})
].concat(_super.attributesToDeclare.call(this));
};
UserRec.generateFromLocalStorage = function () {
return false;
};
UserRec.init();
return UserRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.UserRec = UserRec;

});
define("ServiceCenter.model$Report_LineRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Report_LineRec = (function (_super) {
__extends(Report_LineRec, _super);
function Report_LineRec(defaults) {
_super.apply(this, arguments);
}
Report_LineRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("ReportType", "reportTypeAttr", "ReportType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Created", "createdAttr", "Created", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("StartDate", "startDateAttr", "StartDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("EndDate", "endDateAttr", "EndDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("DailyUsage", "dailyUsageAttr", "DailyUsage", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IntegrationType", "integrationTypeAttr", "IntegrationType", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Report_LineRec.generateFromLocalStorage = function () {
return false;
};
Report_LineRec.init();
return Report_LineRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Report_LineRec = Report_LineRec;

});
define("ServiceCenter.model$DBCatalogRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var DBCatalogRec = (function (_super) {
__extends(DBCatalogRec, _super);
function DBCatalogRec(defaults) {
_super.apply(this, arguments);
}
DBCatalogRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Logical_Name", "logical_NameAttr", "Logical_Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Username", "usernameAttr", "Username", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Password", "passwordAttr", "Password", false, OS.Types.Text, function () {
return "";
}), 
this.attr("OwnerUsername", "ownerUsernameAttr", "OwnerUsername", false, OS.Types.Text, function () {
return "";
}), 
this.attr("OwnerPassword", "ownerPasswordAttr", "OwnerPassword", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DataTablespace", "dataTablespaceAttr", "DataTablespace", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IndexTablespace", "indexTablespaceAttr", "IndexTablespace", false, OS.Types.Text, function () {
return "";
}), 
this.attr("UseIntegratedAuth", "useIntegratedAuthAttr", "UseIntegratedAuth", false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
DBCatalogRec.generateFromLocalStorage = function () {
return false;
};
DBCatalogRec.init();
return DBCatalogRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.DBCatalogRec = DBCatalogRec;

});
define("ServiceCenter.model$App_Mobile_Build_StatusRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var App_Mobile_Build_StatusRec = (function (_super) {
__extends(App_Mobile_Build_StatusRec, _super);
function App_Mobile_Build_StatusRec(defaults) {
_super.apply(this, arguments);
}
App_Mobile_Build_StatusRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Label", "labelAttr", "Label", true, OS.Types.Text, function () {
return "";
}), 
this.attr("BuilderStatus", "builderStatusAttr", "BuilderStatus", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Order", "orderAttr", "Order", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
App_Mobile_Build_StatusRec.generateFromLocalStorage = function () {
return false;
};
App_Mobile_Build_StatusRec.init();
return App_Mobile_Build_StatusRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.App_Mobile_Build_StatusRec = App_Mobile_Build_StatusRec;

});
define("ServiceCenter.model$Espace_EntityRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Espace_EntityRec = (function (_super) {
__extends(Espace_EntityRec, _super);
function Espace_EntityRec(defaults) {
_super.apply(this, arguments);
}
Espace_EntityRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Entity_Id", "entity_IdAttr", "Entity_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Read_Only", "read_OnlyAttr", "Read_Only", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Multitenant_View", "multitenant_ViewAttr", "Multitenant_View", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Espace_EntityRec.generateFromLocalStorage = function () {
return false;
};
Espace_EntityRec.init();
return Espace_EntityRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Espace_EntityRec = Espace_EntityRec;

});
define("ServiceCenter.model$Log_Error_PreviousRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Log_Error_PreviousRec = (function (_super) {
__extends(Log_Error_PreviousRec, _super);
function Log_Error_PreviousRec(defaults) {
_super.apply(this, arguments);
}
Log_Error_PreviousRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Id", "idAttr", "Id", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Instant", "instantAttr", "Instant", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Session_Id", "session_IdAttr", "Session_Id", true, OS.Types.Text, function () {
return "";
}), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Message", "messageAttr", "Message", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Stack", "stackAttr", "Stack", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Module_Name", "module_NameAttr", "Module_Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Server", "serverAttr", "Server", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Cycle", "cycleAttr", "Cycle", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("EnvironmentInformation", "environmentInformationAttr", "EnvironmentInformation", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Request_Key", "request_KeyAttr", "Request_Key", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Entrypoint_Name", "entrypoint_NameAttr", "Entrypoint_Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Action_Name", "action_NameAttr", "Action_Name", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_Error_PreviousRec.generateFromLocalStorage = function () {
return false;
};
Log_Error_PreviousRec.init();
return Log_Error_PreviousRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Log_Error_PreviousRec = Log_Error_PreviousRec;

});
define("ServiceCenter.model$User_Effective_RoleRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var User_Effective_RoleRec = (function (_super) {
__extends(User_Effective_RoleRec, _super);
function User_Effective_RoleRec(defaults) {
_super.apply(this, arguments);
}
User_Effective_RoleRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Role_Id", "role_IdAttr", "Role_Id", true, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
User_Effective_RoleRec.generateFromLocalStorage = function () {
return false;
};
User_Effective_RoleRec.init();
return User_Effective_RoleRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.User_Effective_RoleRec = User_Effective_RoleRec;

});
define("ServiceCenter.model$Entity_RecordRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Entity_RecordRec = (function (_super) {
__extends(Entity_RecordRec, _super);
function Entity_RecordRec(defaults) {
_super.apply(this, arguments);
}
Entity_RecordRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Data_Id", "data_IdAttr", "Data_Id", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Entity_SS_Key", "entity_SS_KeyAttr", "Entity_SS_Key", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
Entity_RecordRec.generateFromLocalStorage = function () {
return false;
};
Entity_RecordRec.init();
return Entity_RecordRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Entity_RecordRec = Entity_RecordRec;

});
define("ServiceCenter.model$Async_Operation_MessageRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Async_Operation_MessageRec = (function (_super) {
__extends(Async_Operation_MessageRec, _super);
function Async_Operation_MessageRec(defaults) {
_super.apply(this, arguments);
}
Async_Operation_MessageRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Message_Id", "message_IdAttr", "Message_Id", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Message", "messageAttr", "Message", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Detail", "detailAttr", "Detail", true, OS.Types.Text, function () {
return "";
}), 
this.attr("HelpRef", "helpRefAttr", "HelpRef", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("ExtraInfo", "extraInfoAttr", "ExtraInfo", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Type", "typeAttr", "Type", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Submitable", "submitableAttr", "Submitable", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("State_Id", "state_IdAttr", "State_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Read", "readAttr", "Read", false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
Async_Operation_MessageRec.generateFromLocalStorage = function () {
return false;
};
Async_Operation_MessageRec.init();
return Async_Operation_MessageRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Async_Operation_MessageRec = Async_Operation_MessageRec;

});
define("ServiceCenter.model$UserMTRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var UserMTRec = (function (_super) {
__extends(UserMTRec, _super);
function UserMTRec(defaults) {
_super.apply(this, arguments);
}
UserMTRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Username", "usernameAttr", "Username", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Password", "passwordAttr", "Password", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Email", "emailAttr", "Email", false, OS.Types.Text, function () {
return "";
}), 
this.attr("MobilePhone", "mobilePhoneAttr", "MobilePhone", false, OS.Types.PhoneNumber, function () {
return "";
}), 
this.attr("External_Id", "external_IdAttr", "External_Id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Creation_Date", "creation_DateAttr", "Creation_Date", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Last_Login", "last_LoginAttr", "Last_Login", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return true;
})
].concat(_super.attributesToDeclare.call(this));
};
UserMTRec.generateFromLocalStorage = function () {
return false;
};
UserMTRec.init();
return UserMTRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.UserMTRec = UserMTRec;

});
define("ServiceCenter.model$Report_Slow_ExtensionRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Report_Slow_ExtensionRec = (function (_super) {
__extends(Report_Slow_ExtensionRec, _super);
function Report_Slow_ExtensionRec(defaults) {
_super.apply(this, arguments);
}
Report_Slow_ExtensionRec.attributesToDeclare = function () {
return [
this.attr("espace", "espaceAttr", "espace", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Action_FullName", "action_FullNameAttr", "Action_FullName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("avgtime", "avgtimeAttr", "avgtime", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("totaltime", "totaltimeAttr", "totaltime", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("count", "countAttr", "count", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("ReportId", "reportIdAttr", "ReportId", true, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Report_Slow_ExtensionRec.generateFromLocalStorage = function () {
return false;
};
Report_Slow_ExtensionRec.init();
return Report_Slow_ExtensionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Report_Slow_ExtensionRec = Report_Slow_ExtensionRec;

});
define("ServiceCenter.model$EntityRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var EntityRec = (function (_super) {
__extends(EntityRec, _super);
function EntityRec(defaults) {
_super.apply(this, arguments);
}
EntityRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Physical_Table_Name", "physical_Table_NameAttr", "Physical_Table_Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Multitenant", "multitenantAttr", "Multitenant", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Multitenant_View", "multitenant_ViewAttr", "Multitenant_View", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Is_External", "is_ExternalAttr", "Is_External", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Is_System", "is_SystemAttr", "Is_System", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PrimaryKey_SS_Key", "primaryKey_SS_KeyAttr", "PrimaryKey_SS_Key", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Extension_Id", "extension_IdAttr", "Extension_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Generation", "generationAttr", "Generation", false, OS.Types.Integer, function () {
return -1;
}), 
this.attr("Is_Active_Attribute", "is_Active_AttributeAttr", "Is_Active_Attribute", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Label_Attribute", "label_AttributeAttr", "Label_Attribute", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Order_By_Attribute", "order_By_AttributeAttr", "Order_By_Attribute", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Data_Kind", "data_KindAttr", "Data_Kind", true, OS.Types.Text, function () {
return "entity";
}), 
this.attr("Multilingual", "multilingualAttr", "Multilingual", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("LogicalDatabase", "logicalDatabaseAttr", "LogicalDatabase", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Multilingual_Table_Name", "multilingual_Table_NameAttr", "Multilingual_Table_Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Expose_Process_Events", "expose_Process_EventsAttr", "Expose_Process_Events", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Event_Table_Name", "event_Table_NameAttr", "Event_Table_Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Base_View_Name", "base_View_NameAttr", "Base_View_Name", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
EntityRec.generateFromLocalStorage = function () {
return false;
};
EntityRec.init();
return EntityRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.EntityRec = EntityRec;

});
define("ServiceCenter.model$Site_Property_SharedRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Site_Property_SharedRec = (function (_super) {
__extends(Site_Property_SharedRec, _super);
function Site_Property_SharedRec(defaults) {
_super.apply(this, arguments);
}
Site_Property_SharedRec.attributesToDeclare = function () {
return [
this.attr("Site_Property_Definition_Id", "site_Property_Definition_IdAttr", "Site_Property_Definition_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Property_Value", "property_ValueAttr", "Property_Value", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_Modified", "user_ModifiedAttr", "User_Modified", false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
Site_Property_SharedRec.generateFromLocalStorage = function () {
return false;
};
Site_Property_SharedRec.init();
return Site_Property_SharedRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Site_Property_SharedRec = Site_Property_SharedRec;

});
define("ServiceCenter.model$Entity_AttrRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Entity_AttrRec = (function (_super) {
__extends(Entity_AttrRec, _super);
function Entity_AttrRec(defaults) {
_super.apply(this, arguments);
}
Entity_AttrRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Entity_Id", "entity_IdAttr", "Entity_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Type", "typeAttr", "Type", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Length", "lengthAttr", "Length", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Decimals", "decimalsAttr", "Decimals", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Mandatory", "is_MandatoryAttr", "Is_Mandatory", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Is_AutoNumber", "is_AutoNumberAttr", "Is_AutoNumber", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Delete_Rule", "delete_RuleAttr", "Delete_Rule", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Default_Label", "default_LabelAttr", "Default_Label", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Default_Value", "default_ValueAttr", "Default_Value", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Order_Num", "order_NumAttr", "Order_Num", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Original_Type", "original_TypeAttr", "Original_Type", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Database_Name", "database_NameAttr", "Database_Name", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Entity_AttrRec.generateFromLocalStorage = function () {
return false;
};
Entity_AttrRec.init();
return Entity_AttrRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Entity_AttrRec = Entity_AttrRec;

});
define("ServiceCenter.model$User_DeveloperRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var User_DeveloperRec = (function (_super) {
__extends(User_DeveloperRec, _super);
function User_DeveloperRec(defaults) {
_super.apply(this, arguments);
}
User_DeveloperRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Developer_Id", "developer_IdAttr", "Developer_Id", true, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
User_DeveloperRec.generateFromLocalStorage = function () {
return false;
};
User_DeveloperRec.init();
return User_DeveloperRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.User_DeveloperRec = User_DeveloperRec;

});
define("ServiceCenter.model$Zone_ServerRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Zone_ServerRec = (function (_super) {
__extends(Zone_ServerRec, _super);
function Zone_ServerRec(defaults) {
_super.apply(this, arguments);
}
Zone_ServerRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Zone_Id", "zone_IdAttr", "Zone_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Server_Id", "server_IdAttr", "Server_Id", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Zone_ServerRec.generateFromLocalStorage = function () {
return false;
};
Zone_ServerRec.init();
return Zone_ServerRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Zone_ServerRec = Zone_ServerRec;

});
define("ServiceCenter.model$Extension_ConfigurationRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Extension_ConfigurationRec = (function (_super) {
__extends(Extension_ConfigurationRec, _super);
function Extension_ConfigurationRec(defaults) {
_super.apply(this, arguments);
}
Extension_ConfigurationRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Extension_Id", "extension_IdAttr", "Extension_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Val", "valAttr", "Val", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Extension_ConfigurationRec.generateFromLocalStorage = function () {
return false;
};
Extension_ConfigurationRec.init();
return Extension_ConfigurationRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Extension_ConfigurationRec = Extension_ConfigurationRec;

});
define("ServiceCenter.model$Recent_ItemRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Recent_ItemRec = (function (_super) {
__extends(Recent_ItemRec, _super);
function Recent_ItemRec(defaults) {
_super.apply(this, arguments);
}
Recent_ItemRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("User_Id", "user_IdAttr", "User_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Type", "typeAttr", "Type", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Datetime", "datetimeAttr", "Datetime", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Item_Id", "item_IdAttr", "Item_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Text", "textAttr", "Text", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Recent_ItemRec.generateFromLocalStorage = function () {
return false;
};
Recent_ItemRec.init();
return Recent_ItemRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Recent_ItemRec = Recent_ItemRec;

});
define("ServiceCenter.model$Log_Integration_Detail_PreviousRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Log_Integration_Detail_PreviousRec = (function (_super) {
__extends(Log_Integration_Detail_PreviousRec, _super);
function Log_Integration_Detail_PreviousRec(defaults) {
_super.apply(this, arguments);
}
Log_Integration_Detail_PreviousRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Id", "idAttr", "Id", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Cycle", "cycleAttr", "Cycle", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Message", "messageAttr", "Message", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Detail", "detailAttr", "Detail", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DetailLabel", "detailLabelAttr", "DetailLabel", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_Integration_Detail_PreviousRec.generateFromLocalStorage = function () {
return false;
};
Log_Integration_Detail_PreviousRec.init();
return Log_Integration_Detail_PreviousRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Log_Integration_Detail_PreviousRec = Log_Integration_Detail_PreviousRec;

});
define("ServiceCenter.model$Solution_ReferenceRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Solution_ReferenceRec = (function (_super) {
__extends(Solution_ReferenceRec, _super);
function Solution_ReferenceRec(defaults) {
_super.apply(this, arguments);
}
Solution_ReferenceRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Kind", "kindAttr", "Kind", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Solution_Id", "solution_IdAttr", "Solution_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Extension_Id", "extension_IdAttr", "Extension_Id", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Solution_ReferenceRec.generateFromLocalStorage = function () {
return false;
};
Solution_ReferenceRec.init();
return Solution_ReferenceRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Solution_ReferenceRec = Solution_ReferenceRec;

});
define("ServiceCenter.model$Entity_Usage_SampleRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Entity_Usage_SampleRec = (function (_super) {
__extends(Entity_Usage_SampleRec, _super);
function Entity_Usage_SampleRec(defaults) {
_super.apply(this, arguments);
}
Entity_Usage_SampleRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Entity_GUID", "entity_GUIDAttr", "Entity_GUID", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Db_Boot_Instant", "db_Boot_InstantAttr", "Db_Boot_Instant", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Scan_Instant", "scan_InstantAttr", "Scan_Instant", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Size_In_Kb", "size_In_KbAttr", "Size_In_Kb", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Row_Count", "row_CountAttr", "Row_Count", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("User_Reads", "user_ReadsAttr", "User_Reads", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("User_Updates", "user_UpdatesAttr", "User_Updates", true, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Entity_Usage_SampleRec.generateFromLocalStorage = function () {
return false;
};
Entity_Usage_SampleRec.init();
return Entity_Usage_SampleRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Entity_Usage_SampleRec = Entity_Usage_SampleRec;

});
define("ServiceCenter.model$ActivityRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var ActivityRec = (function (_super) {
__extends(ActivityRec, _super);
function ActivityRec(defaults) {
_super.apply(this, arguments);
}
ActivityRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Activity_Def_Id", "activity_Def_IdAttr", "Activity_Def_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Process_Id", "process_IdAttr", "Process_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_Id", "user_IdAttr", "User_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Created", "createdAttr", "Created", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Opened", "openedAttr", "Opened", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Closed", "closedAttr", "Closed", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Status_Id", "status_IdAttr", "Status_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Running_Since", "is_Running_SinceAttr", "Is_Running_Since", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Is_Running_At", "is_Running_AtAttr", "Is_Running_At", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Next_Run", "next_RunAttr", "Next_Run", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Precedent_Activity_Id", "precedent_Activity_IdAttr", "Precedent_Activity_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Precedent_Outcome", "precedent_OutcomeAttr", "Precedent_Outcome", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Due_Date", "due_DateAttr", "Due_Date", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Inbox_Detail", "inbox_DetailAttr", "Inbox_Detail", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Expired", "expiredAttr", "Expired", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Skipped", "skippedAttr", "Skipped", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Error_Count", "error_CountAttr", "Error_Count", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Last_Error_Id", "last_Error_IdAttr", "Last_Error_Id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Last_Modified", "last_ModifiedAttr", "Last_Modified", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Group_Id", "group_IdAttr", "Group_Id", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
ActivityRec.generateFromLocalStorage = function () {
return false;
};
ActivityRec.init();
return ActivityRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.ActivityRec = ActivityRec;

});
define("ServiceCenter.model$App_Mobile_ConfigRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var App_Mobile_ConfigRec = (function (_super) {
__extends(App_Mobile_ConfigRec, _super);
function App_Mobile_ConfigRec(defaults) {
_super.apply(this, arguments);
}
App_Mobile_ConfigRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Application_Key", "application_KeyAttr", "Application_Key", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Device_Type", "device_TypeAttr", "Device_Type", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("VersionNumber", "versionNumberAttr", "VersionNumber", false, OS.Types.Text, function () {
return "";
}), 
this.attr("VersionCode", "versionCodeAttr", "VersionCode", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("VersionChanged", "versionChangedAttr", "VersionChanged", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("ConfigurationHash", "configurationHashAttr", "ConfigurationHash", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
App_Mobile_ConfigRec.generateFromLocalStorage = function () {
return false;
};
App_Mobile_ConfigRec.init();
return App_Mobile_ConfigRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.App_Mobile_ConfigRec = App_Mobile_ConfigRec;

});
define("ServiceCenter.model$App_Mobile_Build_DataRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var App_Mobile_Build_DataRec = (function (_super) {
__extends(App_Mobile_Build_DataRec, _super);
function App_Mobile_Build_DataRec(defaults) {
_super.apply(this, arguments);
}
App_Mobile_Build_DataRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Build_Content", "build_ContentAttr", "Build_Content", true, OS.Types.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
App_Mobile_Build_DataRec.generateFromLocalStorage = function () {
return false;
};
App_Mobile_Build_DataRec.init();
return App_Mobile_Build_DataRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.App_Mobile_Build_DataRec = App_Mobile_Build_DataRec;

});
define("ServiceCenter.model$PublishTraceRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var PublishTraceRec = (function (_super) {
__extends(PublishTraceRec, _super);
function PublishTraceRec(defaults) {
_super.apply(this, arguments);
}
PublishTraceRec.attributesToDeclare = function () {
return [
this.attr("Espace_SS_KEY", "espace_SS_KEYAttr", "Espace_SS_KEY", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Step", "stepAttr", "Step", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Instant", "instantAttr", "Instant", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("IsStart", "isStartAttr", "IsStart", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("TraceKindId", "traceKindIdAttr", "TraceKindId", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("ExtraInfo", "extraInfoAttr", "ExtraInfo", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ParentStep", "parentStepAttr", "ParentStep", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
PublishTraceRec.generateFromLocalStorage = function () {
return false;
};
PublishTraceRec.init();
return PublishTraceRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.PublishTraceRec = PublishTraceRec;

});
define("ServiceCenter.model$TraceKindRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var TraceKindRec = (function (_super) {
__extends(TraceKindRec, _super);
function TraceKindRec(defaults) {
_super.apply(this, arguments);
}
TraceKindRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Label", "labelAttr", "Label", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
TraceKindRec.generateFromLocalStorage = function () {
return false;
};
TraceKindRec.init();
return TraceKindRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.TraceKindRec = TraceKindRec;

});
define("ServiceCenter.model$PublishingRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var PublishingRec = (function (_super) {
__extends(PublishingRec, _super);
function PublishingRec(defaults) {
_super.apply(this, arguments);
}
PublishingRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Version_Id", "version_IdAttr", "Version_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Published_By", "published_ByAttr", "Published_By", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Published_Date", "published_DateAttr", "Published_Date", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("HubServerVersion", "hubServerVersionAttr", "HubServerVersion", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Debug_Mode", "debug_ModeAttr", "Debug_Mode", false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
PublishingRec.generateFromLocalStorage = function () {
return false;
};
PublishingRec.init();
return PublishingRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.PublishingRec = PublishingRec;

});
define("ServiceCenter.model$App_Definition_ModuleRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var App_Definition_ModuleRec = (function (_super) {
__extends(App_Definition_ModuleRec, _super);
function App_Definition_ModuleRec(defaults) {
_super.apply(this, arguments);
}
App_Definition_ModuleRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Application_Id", "application_IdAttr", "Application_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Module_Id", "module_IdAttr", "Module_Id", true, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
App_Definition_ModuleRec.generateFromLocalStorage = function () {
return false;
};
App_Definition_ModuleRec.init();
return App_Definition_ModuleRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.App_Definition_ModuleRec = App_Definition_ModuleRec;

});
define("ServiceCenter.model$Log_Mobile_Request_DetailRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Log_Mobile_Request_DetailRec = (function (_super) {
__extends(Log_Mobile_Request_DetailRec, _super);
function Log_Mobile_Request_DetailRec(defaults) {
_super.apply(this, arguments);
}
Log_Mobile_Request_DetailRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Id", "idAttr", "Id", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Cycle", "cycleAttr", "Cycle", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Message", "messageAttr", "Message", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Detail", "detailAttr", "Detail", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DetailLabel", "detailLabelAttr", "DetailLabel", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_Mobile_Request_DetailRec.generateFromLocalStorage = function () {
return false;
};
Log_Mobile_Request_DetailRec.init();
return Log_Mobile_Request_DetailRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Log_Mobile_Request_DetailRec = Log_Mobile_Request_DetailRec;

});
define("ServiceCenter.model$Group_UserRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Group_UserRec = (function (_super) {
__extends(Group_UserRec, _super);
function Group_UserRec(defaults) {
_super.apply(this, arguments);
}
Group_UserRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Group_Id", "group_IdAttr", "Group_Id", true, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Group_UserRec.generateFromLocalStorage = function () {
return false;
};
Group_UserRec.init();
return Group_UserRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Group_UserRec = Group_UserRec;

});
define("ServiceCenter.model$Process_Output_DefinitionRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Process_Output_DefinitionRec = (function (_super) {
__extends(Process_Output_DefinitionRec, _super);
function Process_Output_DefinitionRec(defaults) {
_super.apply(this, arguments);
}
Process_Output_DefinitionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Process_Def_Id", "process_Def_IdAttr", "Process_Def_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Data_Type", "data_TypeAttr", "Data_Type", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Default_Value", "default_ValueAttr", "Default_Value", false, OS.Types.Text, function () {
return "";
}), 
this.attr("SS_Type", "sS_TypeAttr", "SS_Type", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Process_Output_DefinitionRec.generateFromLocalStorage = function () {
return false;
};
Process_Output_DefinitionRec.init();
return Process_Output_DefinitionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Process_Output_DefinitionRec = Process_Output_DefinitionRec;

});
define("ServiceCenter.model$DBConnectionRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var DBConnectionRec = (function (_super) {
__extends(DBConnectionRec, _super);
function DBConnectionRec(defaults) {
_super.apply(this, arguments);
}
DBConnectionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ProviderName", "providerNameAttr", "ProviderName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DBMS_Id", "dBMS_IdAttr", "DBMS_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Connection_String", "connection_StringAttr", "Connection_String", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsMultiTenant", "isMultiTenantAttr", "IsMultiTenant", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("DefaultTenantName", "defaultTenantNameAttr", "DefaultTenantName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Database_Configuration", "database_ConfigurationAttr", "Database_Configuration", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
DBConnectionRec.generateFromLocalStorage = function () {
return false;
};
DBConnectionRec.init();
return DBConnectionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.DBConnectionRec = DBConnectionRec;

});
define("ServiceCenter.model$CallbackRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var CallbackRec = (function (_super) {
__extends(CallbackRec, _super);
function CallbackRec(defaults) {
_super.apply(this, arguments);
}
CallbackRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("CallbackName", "callbackNameAttr", "CallbackName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("URL", "uRLAttr", "URL", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ServiceName", "serviceNameAttr", "ServiceName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ProviderName", "providerNameAttr", "ProviderName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("MethodName", "methodNameAttr", "MethodName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("TenantId", "tenantIdAttr", "TenantId", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("EspaceId", "espaceIdAttr", "EspaceId", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Hide_In_Provider", "hide_In_ProviderAttr", "Hide_In_Provider", true, OS.Types.Boolean, function () {
return true;
}), 
this.attr("Is_Localized", "is_LocalizedAttr", "Is_Localized", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Is_Static", "is_StaticAttr", "Is_Static", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Is_Volatile", "is_VolatileAttr", "Is_Volatile", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Order", "orderAttr", "Order", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("CallbackLocationId", "callbackLocationIdAttr", "CallbackLocationId", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("CallbackTypeId", "callbackTypeIdAttr", "CallbackTypeId", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Script", "scriptAttr", "Script", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, OS.Types.Boolean, function () {
return true;
})
].concat(_super.attributesToDeclare.call(this));
};
CallbackRec.generateFromLocalStorage = function () {
return false;
};
CallbackRec.init();
return CallbackRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.CallbackRec = CallbackRec;

});
define("ServiceCenter.model$Log_Mobile_Request_PreviousRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Log_Mobile_Request_PreviousRec = (function (_super) {
__extends(Log_Mobile_Request_PreviousRec, _super);
function Log_Mobile_Request_PreviousRec(defaults) {
_super.apply(this, arguments);
}
Log_Mobile_Request_PreviousRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Id", "idAttr", "Id", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Instant", "instantAttr", "Instant", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Screen", "screenAttr", "Screen", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Source", "sourceAttr", "Source", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Endpoint", "endpointAttr", "Endpoint", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Duration", "durationAttr", "Duration", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Executed_By", "executed_ByAttr", "Executed_By", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Error_Id", "error_IdAttr", "Error_Id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Cycle", "cycleAttr", "Cycle", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Request_Key", "request_KeyAttr", "Request_Key", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Login_Id", "login_IdAttr", "Login_Id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Log_Mobile_Request_PreviousRec.generateFromLocalStorage = function () {
return false;
};
Log_Mobile_Request_PreviousRec.init();
return Log_Mobile_Request_PreviousRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Log_Mobile_Request_PreviousRec = Log_Mobile_Request_PreviousRec;

});
define("ServiceCenter.model$ParameterRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var ParameterRec = (function (_super) {
__extends(ParameterRec, _super);
function ParameterRec(defaults) {
_super.apply(this, arguments);
}
ParameterRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Val", "valAttr", "Val", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Host", "hostAttr", "Host", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Host_Serial", "host_SerialAttr", "Host_Serial", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
ParameterRec.generateFromLocalStorage = function () {
return false;
};
ParameterRec.init();
return ParameterRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.ParameterRec = ParameterRec;

});
define("ServiceCenter.model$AreaRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var AreaRec = (function (_super) {
__extends(AreaRec, _super);
function AreaRec(defaults) {
_super.apply(this, arguments);
}
AreaRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("User_Id", "user_IdAttr", "User_Id", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
AreaRec.generateFromLocalStorage = function () {
return false;
};
AreaRec.init();
return AreaRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.AreaRec = AreaRec;

});
define("ServiceCenter.model$Activity_DefinitionRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Activity_DefinitionRec = (function (_super) {
__extends(Activity_DefinitionRec, _super);
function Activity_DefinitionRec(defaults) {
_super.apply(this, arguments);
}
Activity_DefinitionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Label", "labelAttr", "Label", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Inbox_Instructions", "inbox_InstructionsAttr", "Inbox_Instructions", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Kind", "kindAttr", "Kind", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Process_Def_Id", "process_Def_IdAttr", "Process_Def_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Display_X", "display_XAttr", "Display_X", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Display_Y", "display_YAttr", "Display_Y", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Invoked_Process_Def_Id", "invoked_Process_Def_IdAttr", "Invoked_Process_Def_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Requires_Permission", "requires_PermissionAttr", "Requires_Permission", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Skippable", "skippableAttr", "Skippable", true, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
Activity_DefinitionRec.generateFromLocalStorage = function () {
return false;
};
Activity_DefinitionRec.init();
return Activity_DefinitionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Activity_DefinitionRec = Activity_DefinitionRec;

});
define("ServiceCenter.model$ProcessRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var ProcessRec = (function (_super) {
__extends(ProcessRec, _super);
function ProcessRec(defaults) {
_super.apply(this, arguments);
}
ProcessRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Label", "labelAttr", "Label", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Created", "createdAttr", "Created", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Created_By", "created_ByAttr", "Created_By", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Process_Def_Id", "process_Def_IdAttr", "Process_Def_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Parent_Process_Id", "parent_Process_IdAttr", "Parent_Process_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Parent_Activity_Id", "parent_Activity_IdAttr", "Parent_Activity_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Top_Process_Id", "top_Process_IdAttr", "Top_Process_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Status_Id", "status_IdAttr", "Status_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Last_Modified", "last_ModifiedAttr", "Last_Modified", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Last_Modified_By", "last_Modified_ByAttr", "Last_Modified_By", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Suspended_Date", "suspended_DateAttr", "Suspended_Date", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Suspended_By", "suspended_ByAttr", "Suspended_By", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
ProcessRec.generateFromLocalStorage = function () {
return false;
};
ProcessRec.init();
return ProcessRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.ProcessRec = ProcessRec;

});
define("ServiceCenter.model$Log_General_PreviousRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Log_General_PreviousRec = (function (_super) {
__extends(Log_General_PreviousRec, _super);
function Log_General_PreviousRec(defaults) {
_super.apply(this, arguments);
}
Log_General_PreviousRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Instant", "instantAttr", "Instant", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Session_Id", "session_IdAttr", "Session_Id", true, OS.Types.Text, function () {
return "";
}), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Error_Id", "error_IdAttr", "Error_Id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Message", "messageAttr", "Message", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Message_Type", "message_TypeAttr", "Message_Type", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Module_Name", "module_NameAttr", "Module_Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Cycle", "cycleAttr", "Cycle", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Request_Key", "request_KeyAttr", "Request_Key", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Action_Name", "action_NameAttr", "Action_Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Entrypoint_Name", "entrypoint_NameAttr", "Entrypoint_Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Client_IP", "client_IPAttr", "Client_IP", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_General_PreviousRec.generateFromLocalStorage = function () {
return false;
};
Log_General_PreviousRec.init();
return Log_General_PreviousRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Log_General_PreviousRec = Log_General_PreviousRec;

});
define("ServiceCenter.model$Espace_ReferenceRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Espace_ReferenceRec = (function (_super) {
__extends(Espace_ReferenceRec, _super);
function Espace_ReferenceRec(defaults) {
_super.apply(this, arguments);
}
Espace_ReferenceRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Consumer_Version_Id", "consumer_Version_IdAttr", "Consumer_Version_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Kind", "kindAttr", "Kind", true, OS.Types.Text, function () {
return "";
}), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Producer_Name", "producer_NameAttr", "Producer_Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Producer_Kind", "producer_KindAttr", "Producer_Kind", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Producer_SS_Key", "producer_SS_KeyAttr", "Producer_SS_Key", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Published_Prod_Version_Id", "published_Prod_Version_IdAttr", "Published_Prod_Version_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Broken", "is_BrokenAttr", "Is_Broken", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Missing_Status", "missing_StatusAttr", "Missing_Status", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Published_Prod_Version_Num", "published_Prod_Version_NumAttr", "Published_Prod_Version_Num", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Compatibility_Signature_Hash", "compatibility_Signature_HashAttr", "Compatibility_Signature_Hash", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Full_Signature_Hash", "full_Signature_HashAttr", "Full_Signature_Hash", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Espace_ReferenceRec.generateFromLocalStorage = function () {
return false;
};
Espace_ReferenceRec.init();
return Espace_ReferenceRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Espace_ReferenceRec = Espace_ReferenceRec;

});
define("ServiceCenter.model$Event_QueueRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Event_QueueRec = (function (_super) {
__extends(Event_QueueRec, _super);
function Event_QueueRec(defaults) {
_super.apply(this, arguments);
}
Event_QueueRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Activity_Id", "activity_IdAttr", "Activity_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Process_Def_Id", "process_Def_IdAttr", "Process_Def_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Data_Id", "data_IdAttr", "Data_Id", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Enqueue_Time", "enqueue_TimeAttr", "Enqueue_Time", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Dequeue_Time", "dequeue_TimeAttr", "Dequeue_Time", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Error_Count", "error_CountAttr", "Error_Count", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Next_Run", "next_RunAttr", "Next_Run", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
Event_QueueRec.generateFromLocalStorage = function () {
return false;
};
Event_QueueRec.init();
return Event_QueueRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Event_QueueRec = Event_QueueRec;

});
define("ServiceCenter.model$Application_Parameter_BinaryRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Application_Parameter_BinaryRec = (function (_super) {
__extends(Application_Parameter_BinaryRec, _super);
function Application_Parameter_BinaryRec(defaults) {
_super.apply(this, arguments);
}
Application_Parameter_BinaryRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Binary", "binaryAttr", "Binary", false, OS.Types.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
Application_Parameter_BinaryRec.generateFromLocalStorage = function () {
return false;
};
Application_Parameter_BinaryRec.init();
return Application_Parameter_BinaryRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Application_Parameter_BinaryRec = Application_Parameter_BinaryRec;

});
define("ServiceCenter.model$ApplicationRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var ApplicationRec = (function (_super) {
__extends(ApplicationRec, _super);
function ApplicationRec(defaults) {
_super.apply(this, arguments);
}
ApplicationRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Entry_eSpace_Id", "entry_eSpace_IdAttr", "Entry_eSpace_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("BackOffice_eSpace_Id", "backOffice_eSpace_IdAttr", "BackOffice_eSpace_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("DefaultThemeIsMobile", "defaultThemeIsMobileAttr", "DefaultThemeIsMobile", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Key", "keyAttr", "Key", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Disabled", "disabledAttr", "Disabled", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("ApplicationKind", "applicationKindAttr", "ApplicationKind", true, OS.Types.Text, function () {
return "";
}), 
this.attr("TemplateKey", "templateKeyAttr", "TemplateKey", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PrimaryColor", "primaryColorAttr", "PrimaryColor", false, OS.Types.Text, function () {
return "";
}), 
this.attr("NativeHash", "nativeHashAttr", "NativeHash", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
ApplicationRec.generateFromLocalStorage = function () {
return false;
};
ApplicationRec.init();
return ApplicationRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.ApplicationRec = ApplicationRec;

});
define("ServiceCenter.model$Developer_OperationRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Developer_OperationRec = (function (_super) {
__extends(Developer_OperationRec, _super);
function Developer_OperationRec(defaults) {
_super.apply(this, arguments);
}
Developer_OperationRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Operation_Type", "operation_TypeAttr", "Operation_Type", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("ESpace_Id", "eSpace_IdAttr", "ESpace_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Extension_Id", "extension_IdAttr", "Extension_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("DateTime", "dateTimeAttr", "DateTime", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
Developer_OperationRec.generateFromLocalStorage = function () {
return false;
};
Developer_OperationRec.init();
return Developer_OperationRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Developer_OperationRec = Developer_OperationRec;

});
define("ServiceCenter.model$Report_Slow_QueryRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Report_Slow_QueryRec = (function (_super) {
__extends(Report_Slow_QueryRec, _super);
function Report_Slow_QueryRec(defaults) {
_super.apply(this, arguments);
}
Report_Slow_QueryRec.attributesToDeclare = function () {
return [
this.attr("espace", "espaceAttr", "espace", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("query", "queryAttr", "query", false, OS.Types.Text, function () {
return "";
}), 
this.attr("tm", "tmAttr", "tm", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("ReportId", "reportIdAttr", "ReportId", true, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Report_Slow_QueryRec.generateFromLocalStorage = function () {
return false;
};
Report_Slow_QueryRec.init();
return Report_Slow_QueryRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Report_Slow_QueryRec = Report_Slow_QueryRec;

});
define("ServiceCenter.model$Async_Operation_LogicalDatabaseRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Async_Operation_LogicalDatabaseRec = (function (_super) {
__extends(Async_Operation_LogicalDatabaseRec, _super);
function Async_Operation_LogicalDatabaseRec(defaults) {
_super.apply(this, arguments);
}
Async_Operation_LogicalDatabaseRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Extension_Id", "extension_IdAttr", "Extension_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Extension", "extensionAttr", "Extension", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LogicalDatabase", "logicalDatabaseAttr", "LogicalDatabase", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DBConnection_Id", "dBConnection_IdAttr", "DBConnection_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("State_Id", "state_IdAttr", "State_Id", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Async_Operation_LogicalDatabaseRec.generateFromLocalStorage = function () {
return false;
};
Async_Operation_LogicalDatabaseRec.init();
return Async_Operation_LogicalDatabaseRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Async_Operation_LogicalDatabaseRec = Async_Operation_LogicalDatabaseRec;

});
define("ServiceCenter.model$Deprecated_Authentication_Supported_PropertiesRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Deprecated_Authentication_Supported_PropertiesRec = (function (_super) {
__extends(Deprecated_Authentication_Supported_PropertiesRec, _super);
function Deprecated_Authentication_Supported_PropertiesRec(defaults) {
_super.apply(this, arguments);
}
Deprecated_Authentication_Supported_PropertiesRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Label", "labelAttr", "Label", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Order", "orderAttr", "Order", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
Deprecated_Authentication_Supported_PropertiesRec.generateFromLocalStorage = function () {
return false;
};
Deprecated_Authentication_Supported_PropertiesRec.init();
return Deprecated_Authentication_Supported_PropertiesRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Deprecated_Authentication_Supported_PropertiesRec = Deprecated_Authentication_Supported_PropertiesRec;

});
define("ServiceCenter.model$Report_HourRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Report_HourRec = (function (_super) {
__extends(Report_HourRec, _super);
function Report_HourRec(defaults) {
_super.apply(this, arguments);
}
Report_HourRec.attributesToDeclare = function () {
return [
this.attr("Hour", "hourAttr", "Hour", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Display", "displayAttr", "Display", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Report_HourRec.generateFromLocalStorage = function () {
return false;
};
Report_HourRec.init();
return Report_HourRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Report_HourRec = Report_HourRec;

});
define("ServiceCenter.model$CertificateRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var CertificateRec = (function (_super) {
__extends(CertificateRec, _super);
function CertificateRec(defaults) {
_super.apply(this, arguments);
}
CertificateRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Path", "pathAttr", "Path", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
CertificateRec.generateFromLocalStorage = function () {
return false;
};
CertificateRec.init();
return CertificateRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.CertificateRec = CertificateRec;

});
define("ServiceCenter.model$DeveloperRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var DeveloperRec = (function (_super) {
__extends(DeveloperRec, _super);
function DeveloperRec(defaults) {
_super.apply(this, arguments);
}
DeveloperRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("User_Id", "user_IdAttr", "User_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Role_Id", "role_IdAttr", "Role_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Allow_Solutions", "allow_SolutionsAttr", "Allow_Solutions", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Allow_New_Espace", "allow_New_EspaceAttr", "Allow_New_Espace", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Allow_Extensions", "allow_ExtensionsAttr", "Allow_Extensions", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Allow_External_Entities", "allow_External_EntitiesAttr", "Allow_External_Entities", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Allow_System_Entities", "allow_System_EntitiesAttr", "Allow_System_Entities", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Solutions_Security", "solutions_SecurityAttr", "Solutions_Security", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Espaces_Security", "espaces_SecurityAttr", "Espaces_Security", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Extensions_Security", "extensions_SecurityAttr", "Extensions_Security", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Users_Security", "users_SecurityAttr", "Users_Security", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Phones_Security", "phones_SecurityAttr", "Phones_Security", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("DBConnections_Security", "dBConnections_SecurityAttr", "DBConnections_Security", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Certificates_Security", "certificates_SecurityAttr", "Certificates_Security", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("HubConfiguration_Security", "hubConfiguration_SecurityAttr", "HubConfiguration_Security", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("View_OnlineMonitoring", "view_OnlineMonitoringAttr", "View_OnlineMonitoring", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("View_Licensing", "view_LicensingAttr", "View_Licensing", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Reports_Security", "reports_SecurityAttr", "Reports_Security", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_System", "is_SystemAttr", "Is_System", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Allow_DBConnections", "allow_DBConnectionsAttr", "Allow_DBConnections", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Allow_Process_Management", "allow_Process_ManagementAttr", "Allow_Process_Management", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Allow_New_DBCatalog", "allow_New_DBCatalogAttr", "Allow_New_DBCatalog", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("DBCatalog_Security", "dBCatalog_SecurityAttr", "DBCatalog_Security", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Allow_SEO_Management", "allow_SEO_ManagementAttr", "Allow_SEO_Management", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Applications_Security", "applications_SecurityAttr", "Applications_Security", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Disable_Login", "disable_LoginAttr", "Disable_Login", false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
DeveloperRec.generateFromLocalStorage = function () {
return false;
};
DeveloperRec.init();
return DeveloperRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.DeveloperRec = DeveloperRec;

});
define("ServiceCenter.model$Async_Operation_StateRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Async_Operation_StateRec = (function (_super) {
__extends(Async_Operation_StateRec, _super);
function Async_Operation_StateRec(defaults) {
_super.apply(this, arguments);
}
Async_Operation_StateRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Target_Object_SSKey", "target_Object_SSKeyAttr", "Target_Object_SSKey", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Time_Stamp", "time_StampAttr", "Time_Stamp", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("State", "stateAttr", "State", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Operation_Type", "operation_TypeAttr", "Operation_Type", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Return_Url", "return_UrlAttr", "Return_Url", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Async_Operation_StateRec.generateFromLocalStorage = function () {
return false;
};
Async_Operation_StateRec.init();
return Async_Operation_StateRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Async_Operation_StateRec = Async_Operation_StateRec;

});
define("ServiceCenter.model$Report_Slow_ScreenRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Report_Slow_ScreenRec = (function (_super) {
__extends(Report_Slow_ScreenRec, _super);
function Report_Slow_ScreenRec(defaults) {
_super.apply(this, arguments);
}
Report_Slow_ScreenRec.attributesToDeclare = function () {
return [
this.attr("Espace", "espaceAttr", "Espace", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Hits", "hitsAttr", "Hits", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("screen_type", "screen_typeAttr", "screen_type", false, OS.Types.Text, function () {
return "";
}), 
this.attr("avg_time", "avg_timeAttr", "avg_time", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("total_time", "total_timeAttr", "total_time", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("Screen", "screenAttr", "Screen", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ReportId", "reportIdAttr", "ReportId", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("ajax_hits", "ajax_hitsAttr", "ajax_hits", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("ajax_avg_time", "ajax_avg_timeAttr", "ajax_avg_time", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("ajax_total_time", "ajax_total_timeAttr", "ajax_total_time", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("screen_ajax_total_time", "screen_ajax_total_timeAttr", "screen_ajax_total_time", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
Report_Slow_ScreenRec.generateFromLocalStorage = function () {
return false;
};
Report_Slow_ScreenRec.init();
return Report_Slow_ScreenRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Report_Slow_ScreenRec = Report_Slow_ScreenRec;

});
define("ServiceCenter.model$Web_ServiceRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Web_ServiceRec = (function (_super) {
__extends(Web_ServiceRec, _super);
function Web_ServiceRec(defaults) {
_super.apply(this, arguments);
}
Web_ServiceRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Internal_Access", "internal_AccessAttr", "Internal_Access", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Secure_Connection", "secure_ConnectionAttr", "Secure_Connection", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Integrated_Authentication", "integrated_AuthenticationAttr", "Integrated_Authentication", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Compatibility_Mode", "compatibility_ModeAttr", "Compatibility_Mode", false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
Web_ServiceRec.generateFromLocalStorage = function () {
return false;
};
Web_ServiceRec.init();
return Web_ServiceRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Web_ServiceRec = Web_ServiceRec;

});
define("ServiceCenter.model$GroupRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var GroupRec = (function (_super) {
__extends(GroupRec, _super);
function GroupRec(defaults) {
_super.apply(this, arguments);
}
GroupRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Created_By", "created_ByAttr", "Created_By", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Created", "createdAttr", "Created", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Has_Custom_Management", "has_Custom_ManagementAttr", "Has_Custom_Management", false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
GroupRec.generateFromLocalStorage = function () {
return false;
};
GroupRec.init();
return GroupRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.GroupRec = GroupRec;

});
define("ServiceCenter.model$TranslationOverrideRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var TranslationOverrideRec = (function (_super) {
__extends(TranslationOverrideRec, _super);
function TranslationOverrideRec(defaults) {
_super.apply(this, arguments);
}
TranslationOverrideRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("ResourceKey", "resourceKeyAttr", "ResourceKey", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Locale", "localeAttr", "Locale", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Translation", "translationAttr", "Translation", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
TranslationOverrideRec.generateFromLocalStorage = function () {
return false;
};
TranslationOverrideRec.init();
return TranslationOverrideRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.TranslationOverrideRec = TranslationOverrideRec;

});
define("ServiceCenter.model$Espace_Mobile_ConfigsRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Espace_Mobile_ConfigsRec = (function (_super) {
__extends(Espace_Mobile_ConfigsRec, _super);
function Espace_Mobile_ConfigsRec(defaults) {
_super.apply(this, arguments);
}
Espace_Mobile_ConfigsRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("TraceErrors", "traceErrorsAttr", "TraceErrors", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("TraceAll", "traceAllAttr", "TraceAll", false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
Espace_Mobile_ConfigsRec.generateFromLocalStorage = function () {
return false;
};
Espace_Mobile_ConfigsRec.init();
return Espace_Mobile_ConfigsRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Espace_Mobile_ConfigsRec = Espace_Mobile_ConfigsRec;

});
define("ServiceCenter.model$Process_OutputRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Process_OutputRec = (function (_super) {
__extends(Process_OutputRec, _super);
function Process_OutputRec(defaults) {
_super.apply(this, arguments);
}
Process_OutputRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Output_Def_Id", "output_Def_IdAttr", "Output_Def_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Process_Id", "process_IdAttr", "Process_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Data_Type", "data_TypeAttr", "Data_Type", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Output_Value", "output_ValueAttr", "Output_Value", false, OS.Types.Text, function () {
return "";
}), 
this.attr("SS_Type", "sS_TypeAttr", "SS_Type", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Process_OutputRec.generateFromLocalStorage = function () {
return false;
};
Process_OutputRec.init();
return Process_OutputRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Process_OutputRec = Process_OutputRec;

});
define("ServiceCenter.model$TestCaseRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var TestCaseRec = (function (_super) {
__extends(TestCaseRec, _super);
function TestCaseRec(defaults) {
_super.apply(this, arguments);
}
TestCaseRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("EspaceId", "espaceIdAttr", "EspaceId", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("SSKey", "sSKeyAttr", "SSKey", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("TransClosureCompilationHash", "transClosureCompilationHashAttr", "TransClosureCompilationHash", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
TestCaseRec.generateFromLocalStorage = function () {
return false;
};
TestCaseRec.init();
return TestCaseRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.TestCaseRec = TestCaseRec;

});
define("ServiceCenter.model$Developer_DBConnectionRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Developer_DBConnectionRec = (function (_super) {
__extends(Developer_DBConnectionRec, _super);
function Developer_DBConnectionRec(defaults) {
_super.apply(this, arguments);
}
Developer_DBConnectionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Developer_Id", "developer_IdAttr", "Developer_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("DBConnection_Id", "dBConnection_IdAttr", "DBConnection_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Security_Level", "security_LevelAttr", "Security_Level", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Developer_DBConnectionRec.generateFromLocalStorage = function () {
return false;
};
Developer_DBConnectionRec.init();
return Developer_DBConnectionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Developer_DBConnectionRec = Developer_DBConnectionRec;

});
define("ServiceCenter.model$Extension_DBConnectionRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Extension_DBConnectionRec = (function (_super) {
__extends(Extension_DBConnectionRec, _super);
function Extension_DBConnectionRec(defaults) {
_super.apply(this, arguments);
}
Extension_DBConnectionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("LogicalDatabase", "logicalDatabaseAttr", "LogicalDatabase", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ExtensionId", "extensionIdAttr", "ExtensionId", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("DBConnectionId", "dBConnectionIdAttr", "DBConnectionId", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Extension_DBConnectionRec.generateFromLocalStorage = function () {
return false;
};
Extension_DBConnectionRec.init();
return Extension_DBConnectionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Extension_DBConnectionRec = Extension_DBConnectionRec;

});
define("ServiceCenter.model$Security_CSP_DirectiveRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Security_CSP_DirectiveRec = (function (_super) {
__extends(Security_CSP_DirectiveRec, _super);
function Security_CSP_DirectiveRec(defaults) {
_super.apply(this, arguments);
}
Security_CSP_DirectiveRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Label", "labelAttr", "Label", true, OS.Types.Text, function () {
return "";
}), 
this.attr("FriendlyLabel", "friendlyLabelAttr", "FriendlyLabel", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("AllowNone", "allowNoneAttr", "AllowNone", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("AddSelf", "addSelfAttr", "AddSelf", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("AddData", "addDataAttr", "AddData", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("AddInternalURL", "addInternalURLAttr", "AddInternalURL", false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
Security_CSP_DirectiveRec.generateFromLocalStorage = function () {
return false;
};
Security_CSP_DirectiveRec.init();
return Security_CSP_DirectiveRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Security_CSP_DirectiveRec = Security_CSP_DirectiveRec;

});
define("ServiceCenter.model$ExtensionRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var ExtensionRec = (function (_super) {
__extends(ExtensionRec, _super);
function ExtensionRec(defaults) {
_super.apply(this, arguments);
}
ExtensionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Is_System", "is_SystemAttr", "Is_System", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return true;
}), 
this.attr("Version_Id", "version_IdAttr", "Version_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Published_Date", "published_DateAttr", "Published_Date", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Published_By", "published_ByAttr", "Published_By", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
ExtensionRec.generateFromLocalStorage = function () {
return false;
};
ExtensionRec.init();
return ExtensionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.ExtensionRec = ExtensionRec;

});
define("ServiceCenter.model$Process_Definition_LangRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Process_Definition_LangRec = (function (_super) {
__extends(Process_Definition_LangRec, _super);
function Process_Definition_LangRec(defaults) {
_super.apply(this, arguments);
}
Process_Definition_LangRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Process_Def_Id", "process_Def_IdAttr", "Process_Def_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Locale", "localeAttr", "Locale", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Label", "labelAttr", "Label", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Process_Definition_LangRec.generateFromLocalStorage = function () {
return false;
};
Process_Definition_LangRec.init();
return Process_Definition_LangRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Process_Definition_LangRec = Process_Definition_LangRec;

});
define("ServiceCenter.model$Group_RoleRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Group_RoleRec = (function (_super) {
__extends(Group_RoleRec, _super);
function Group_RoleRec(defaults) {
_super.apply(this, arguments);
}
Group_RoleRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Group_Id", "group_IdAttr", "Group_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Role_Id", "role_IdAttr", "Role_Id", true, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Group_RoleRec.generateFromLocalStorage = function () {
return false;
};
Group_RoleRec.init();
return Group_RoleRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Group_RoleRec = Group_RoleRec;

});
define("ServiceCenter.model$Solution_VersionRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Solution_VersionRec = (function (_super) {
__extends(Solution_VersionRec, _super);
function Solution_VersionRec(defaults) {
_super.apply(this, arguments);
}
Solution_VersionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Version", "versionAttr", "Version", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Creation", "creationAttr", "Creation", true, OS.Types.DateTime, function () {
return OS.BuiltinFunctions.currDateTime();
}), 
this.attr("Creation_By", "creation_ByAttr", "Creation_By", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Solution_Id", "solution_IdAttr", "Solution_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Publish", "publishAttr", "Publish", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Publish_By", "publish_ByAttr", "Publish_By", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Solution_VersionRec.generateFromLocalStorage = function () {
return false;
};
Solution_VersionRec.init();
return Solution_VersionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Solution_VersionRec = Solution_VersionRec;

});
define("ServiceCenter.model$Cyclic_Job_SharedRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Cyclic_Job_SharedRec = (function (_super) {
__extends(Cyclic_Job_SharedRec, _super);
function Cyclic_Job_SharedRec(defaults) {
_super.apply(this, arguments);
}
Cyclic_Job_SharedRec.attributesToDeclare = function () {
return [
this.attr("Meta_Cyclic_Job_Id", "meta_Cyclic_Job_IdAttr", "Meta_Cyclic_Job_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Schedule", "scheduleAttr", "Schedule", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Last_Run", "last_RunAttr", "Last_Run", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Next_Run", "next_RunAttr", "Next_Run", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Last_Duration", "last_DurationAttr", "Last_Duration", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Running_Since", "is_Running_SinceAttr", "Is_Running_Since", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Is_Running_By", "is_Running_ByAttr", "Is_Running_By", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Number_Of_Tries", "number_Of_TriesAttr", "Number_Of_Tries", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Cyclic_Job_SharedRec.generateFromLocalStorage = function () {
return false;
};
Cyclic_Job_SharedRec.init();
return Cyclic_Job_SharedRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Cyclic_Job_SharedRec = Cyclic_Job_SharedRec;

});
define("ServiceCenter.model$Sent_EmailRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Sent_EmailRec = (function (_super) {
__extends(Sent_EmailRec, _super);
function Sent_EmailRec(defaults) {
_super.apply(this, arguments);
}
Sent_EmailRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("From", "fromAttr", "From", false, OS.Types.Text, function () {
return "";
}), 
this.attr("To", "toAttr", "To", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CC", "cCAttr", "CC", false, OS.Types.Text, function () {
return "";
}), 
this.attr("BCC", "bCCAttr", "BCC", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Subject", "subjectAttr", "Subject", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Created", "createdAttr", "Created", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Activity_Id", "activity_IdAttr", "Activity_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Email_Definition_Id", "email_Definition_IdAttr", "Email_Definition_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Store_Content", "store_ContentAttr", "Store_Content", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Is_Test_Email", "is_Test_EmailAttr", "Is_Test_Email", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Size", "sizeAttr", "Size", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Message_Id", "message_IdAttr", "Message_Id", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Sent_EmailRec.generateFromLocalStorage = function () {
return false;
};
Sent_EmailRec.init();
return Sent_EmailRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Sent_EmailRec = Sent_EmailRec;

});
define("ServiceCenter.model$Report_Slow_TimerRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Report_Slow_TimerRec = (function (_super) {
__extends(Report_Slow_TimerRec, _super);
function Report_Slow_TimerRec(defaults) {
_super.apply(this, arguments);
}
Report_Slow_TimerRec.attributesToDeclare = function () {
return [
this.attr("espace", "espaceAttr", "espace", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("timer_key", "timer_keyAttr", "timer_key", false, OS.Types.Text, function () {
return "";
}), 
this.attr("avgtime", "avgtimeAttr", "avgtime", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("count", "countAttr", "count", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("totaltime", "totaltimeAttr", "totaltime", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("reportId", "reportIdAttr", "reportId", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("errors", "errorsAttr", "errors", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Report_Slow_TimerRec.generateFromLocalStorage = function () {
return false;
};
Report_Slow_TimerRec.init();
return Report_Slow_TimerRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Report_Slow_TimerRec = Report_Slow_TimerRec;

});
define("ServiceCenter.model$Log_ExtensionRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Log_ExtensionRec = (function (_super) {
__extends(Log_ExtensionRec, _super);
function Log_ExtensionRec(defaults) {
_super.apply(this, arguments);
}
Log_ExtensionRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Instant", "instantAttr", "Instant", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Duration", "durationAttr", "Duration", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Action_Name", "action_NameAttr", "Action_Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Session_Id", "session_IdAttr", "Session_Id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_Id", "user_IdAttr", "User_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Extension_Id", "extension_IdAttr", "Extension_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Executed_By", "executed_ByAttr", "Executed_By", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Error_Id", "error_IdAttr", "Error_Id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Cycle", "cycleAttr", "Cycle", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Request_Key", "request_KeyAttr", "Request_Key", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_ExtensionRec.generateFromLocalStorage = function () {
return false;
};
Log_ExtensionRec.init();
return Log_ExtensionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Log_ExtensionRec = Log_ExtensionRec;

});
define("ServiceCenter.model$Email_ContentRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Email_ContentRec = (function (_super) {
__extends(Email_ContentRec, _super);
function Email_ContentRec(defaults) {
_super.apply(this, arguments);
}
Email_ContentRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Content", "contentAttr", "Content", false, OS.Types.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
Email_ContentRec.generateFromLocalStorage = function () {
return false;
};
Email_ContentRec.init();
return Email_ContentRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Email_ContentRec = Email_ContentRec;

});
define("ServiceCenter.model$SharedConfigurationRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var SharedConfigurationRec = (function (_super) {
__extends(SharedConfigurationRec, _super);
function SharedConfigurationRec(defaults) {
_super.apply(this, arguments);
}
SharedConfigurationRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Kind", "kindAttr", "Kind", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Value", "valueAttr", "Value", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
SharedConfigurationRec.generateFromLocalStorage = function () {
return false;
};
SharedConfigurationRec.init();
return SharedConfigurationRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.SharedConfigurationRec = SharedConfigurationRec;

});
define("ServiceCenter.model$Log_Mobile_RequestRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Log_Mobile_RequestRec = (function (_super) {
__extends(Log_Mobile_RequestRec, _super);
function Log_Mobile_RequestRec(defaults) {
_super.apply(this, arguments);
}
Log_Mobile_RequestRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Id", "idAttr", "Id", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Instant", "instantAttr", "Instant", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Screen", "screenAttr", "Screen", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Source", "sourceAttr", "Source", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Endpoint", "endpointAttr", "Endpoint", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Duration", "durationAttr", "Duration", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Executed_By", "executed_ByAttr", "Executed_By", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Error_Id", "error_IdAttr", "Error_Id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Cycle", "cycleAttr", "Cycle", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Request_Key", "request_KeyAttr", "Request_Key", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Login_Id", "login_IdAttr", "Login_Id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Log_Mobile_RequestRec.generateFromLocalStorage = function () {
return false;
};
Log_Mobile_RequestRec.init();
return Log_Mobile_RequestRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Log_Mobile_RequestRec = Log_Mobile_RequestRec;

});
define("ServiceCenter.model$Assembly_DependencyRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Assembly_DependencyRec = (function (_super) {
__extends(Assembly_DependencyRec, _super);
function Assembly_DependencyRec(defaults) {
_super.apply(this, arguments);
}
Assembly_DependencyRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Assembly_Id", "assembly_IdAttr", "Assembly_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Extension_Id", "extension_IdAttr", "Extension_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Signature_In_Use", "signature_In_UseAttr", "Signature_In_Use", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Assembly_DependencyRec.generateFromLocalStorage = function () {
return false;
};
Assembly_DependencyRec.init();
return Assembly_DependencyRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Assembly_DependencyRec = Assembly_DependencyRec;

});
define("ServiceCenter.model$Application_IconRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Application_IconRec = (function (_super) {
__extends(Application_IconRec, _super);
function Application_IconRec(defaults) {
_super.apply(this, arguments);
}
Application_IconRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Content_Hash", "content_HashAttr", "Content_Hash", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Content", "contentAttr", "Content", false, OS.Types.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
Application_IconRec.generateFromLocalStorage = function () {
return false;
};
Application_IconRec.init();
return Application_IconRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Application_IconRec = Application_IconRec;

});
define("ServiceCenter.model$SolutionRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var SolutionRec = (function (_super) {
__extends(SolutionRec, _super);
function SolutionRec(defaults) {
_super.apply(this, arguments);
}
SolutionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Creation", "creationAttr", "Creation", true, OS.Types.DateTime, function () {
return OS.BuiltinFunctions.currDateTime();
}), 
this.attr("Creation_By", "creation_ByAttr", "Creation_By", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("External", "externalAttr", "External", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Publish", "publishAttr", "Publish", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Publish_By", "publish_ByAttr", "Publish_By", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Publish_HubServerVersion", "publish_HubServerVersionAttr", "Publish_HubServerVersion", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Publish_Version", "publish_VersionAttr", "Publish_Version", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Transient", "is_TransientAttr", "Is_Transient", false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
SolutionRec.generateFromLocalStorage = function () {
return false;
};
SolutionRec.init();
return SolutionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.SolutionRec = SolutionRec;

});
define("ServiceCenter.model$Log_Cyclic_Job_PreviousRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Log_Cyclic_Job_PreviousRec = (function (_super) {
__extends(Log_Cyclic_Job_PreviousRec, _super);
function Log_Cyclic_Job_PreviousRec(defaults) {
_super.apply(this, arguments);
}
Log_Cyclic_Job_PreviousRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Instant", "instantAttr", "Instant", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Duration", "durationAttr", "Duration", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Cyclic_Job_Key", "cyclic_Job_KeyAttr", "Cyclic_Job_Key", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Executed_By", "executed_ByAttr", "Executed_By", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Error_Id", "error_IdAttr", "Error_Id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Should_Have_Run_At", "should_Have_Run_AtAttr", "Should_Have_Run_At", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Next_Run", "next_RunAttr", "Next_Run", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Cycle", "cycleAttr", "Cycle", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Request_Key", "request_KeyAttr", "Request_Key", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_Cyclic_Job_PreviousRec.generateFromLocalStorage = function () {
return false;
};
Log_Cyclic_Job_PreviousRec.init();
return Log_Cyclic_Job_PreviousRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Log_Cyclic_Job_PreviousRec = Log_Cyclic_Job_PreviousRec;

});
define("ServiceCenter.model$Espace_Version_SignatureRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Espace_Version_SignatureRec = (function (_super) {
__extends(Espace_Version_SignatureRec, _super);
function Espace_Version_SignatureRec(defaults) {
_super.apply(this, arguments);
}
Espace_Version_SignatureRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Espace_Version_Id", "espace_Version_IdAttr", "Espace_Version_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Signature_Binary", "signature_BinaryAttr", "Signature_Binary", false, OS.Types.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}), 
this.attr("Signature_Hash", "signature_HashAttr", "Signature_Hash", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Espace_Version_SignatureRec.generateFromLocalStorage = function () {
return false;
};
Espace_Version_SignatureRec.init();
return Espace_Version_SignatureRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Espace_Version_SignatureRec = Espace_Version_SignatureRec;

});
define("ServiceCenter.model$Process_Input_DefinitionRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Process_Input_DefinitionRec = (function (_super) {
__extends(Process_Input_DefinitionRec, _super);
function Process_Input_DefinitionRec(defaults) {
_super.apply(this, arguments);
}
Process_Input_DefinitionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Process_Def_Id", "process_Def_IdAttr", "Process_Def_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Data_Type", "data_TypeAttr", "Data_Type", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Is_Mandatory", "is_MandatoryAttr", "Is_Mandatory", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Default_Value", "default_ValueAttr", "Default_Value", false, OS.Types.Text, function () {
return "";
}), 
this.attr("SS_Type", "sS_TypeAttr", "SS_Type", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Process_Input_DefinitionRec.generateFromLocalStorage = function () {
return false;
};
Process_Input_DefinitionRec.init();
return Process_Input_DefinitionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Process_Input_DefinitionRec = Process_Input_DefinitionRec;

});
define("ServiceCenter.model$PageRuleRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var PageRuleRec = (function (_super) {
__extends(PageRuleRec, _super);
function PageRuleRec(defaults) {
_super.apply(this, arguments);
}
PageRuleRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("RuleOrder", "ruleOrderAttr", "RuleOrder", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Incoming", "incomingAttr", "Incoming", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Translation", "translationAttr", "Translation", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Redirect", "redirectAttr", "Redirect", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("UseRegexp", "useRegexpAttr", "UseRegexp", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("StopProcessing", "stopProcessingAttr", "StopProcessing", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("ExclusiveToPathRule", "exclusiveToPathRuleAttr", "ExclusiveToPathRule", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("ImplementsMetaRule", "implementsMetaRuleAttr", "ImplementsMetaRule", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
PageRuleRec.generateFromLocalStorage = function () {
return false;
};
PageRuleRec.init();
return PageRuleRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.PageRuleRec = PageRuleRec;

});
define("ServiceCenter.model$CapabilityRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var CapabilityRec = (function (_super) {
__extends(CapabilityRec, _super);
function CapabilityRec(defaults) {
_super.apply(this, arguments);
}
CapabilityRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Value", "valueAttr", "Value", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
CapabilityRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
CapabilityRec.init();
return CapabilityRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.CapabilityRec = CapabilityRec;

});
define("ServiceCenter.model$PluginAPIStatusRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var PluginAPIStatusRec = (function (_super) {
__extends(PluginAPIStatusRec, _super);
function PluginAPIStatusRec(defaults) {
_super.apply(this, arguments);
}
PluginAPIStatusRec.attributesToDeclare = function () {
return [
this.attr("Success", "successAttr", "Success", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("ResponseId", "responseIdAttr", "ResponseId", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("ResponseMessage", "responseMessageAttr", "ResponseMessage", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ResponseAdditionalInfo", "responseAdditionalInfoAttr", "ResponseAdditionalInfo", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
PluginAPIStatusRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
PluginAPIStatusRec.init();
return PluginAPIStatusRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.PluginAPIStatusRec = PluginAPIStatusRec;

});
define("ServiceCenter.model$Sms_EntryRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Sms_EntryRec = (function (_super) {
__extends(Sms_EntryRec, _super);
function Sms_EntryRec(defaults) {
_super.apply(this, arguments);
}
Sms_EntryRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Pattern", "patternAttr", "Pattern", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Regexp_Pattern", "regexp_PatternAttr", "Regexp_Pattern", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Sms_EntryRec.generateFromLocalStorage = function () {
return false;
};
Sms_EntryRec.init();
return Sms_EntryRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Sms_EntryRec = Sms_EntryRec;

});
define("ServiceCenter.model$Activity_Output_DefinitionRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Activity_Output_DefinitionRec = (function (_super) {
__extends(Activity_Output_DefinitionRec, _super);
function Activity_Output_DefinitionRec(defaults) {
_super.apply(this, arguments);
}
Activity_Output_DefinitionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Activity_Def_Id", "activity_Def_IdAttr", "Activity_Def_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Data_Type", "data_TypeAttr", "Data_Type", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Is_Input", "is_InputAttr", "Is_Input", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Is_Mandatory", "is_MandatoryAttr", "Is_Mandatory", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Default_Value", "default_ValueAttr", "Default_Value", false, OS.Types.Text, function () {
return "";
}), 
this.attr("SS_Type", "sS_TypeAttr", "SS_Type", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Activity_Output_DefinitionRec.generateFromLocalStorage = function () {
return false;
};
Activity_Output_DefinitionRec.init();
return Activity_Output_DefinitionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Activity_Output_DefinitionRec = Activity_Output_DefinitionRec;

});
define("ServiceCenter.model$Extension_DependencyRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Extension_DependencyRec = (function (_super) {
__extends(Extension_DependencyRec, _super);
function Extension_DependencyRec(defaults) {
_super.apply(this, arguments);
}
Extension_DependencyRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Extension_Id", "extension_IdAttr", "Extension_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Filename", "filenameAttr", "Filename", true, OS.Types.Text, function () {
return "";
}), 
this.attr("File_Content", "file_ContentAttr", "File_Content", true, OS.Types.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}), 
this.attr("Last_Modified", "last_ModifiedAttr", "Last_Modified", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Compile_Action", "compile_ActionAttr", "Compile_Action", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Path", "pathAttr", "Path", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Extension_Version_Id", "extension_Version_IdAttr", "Extension_Version_Id", true, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Extension_DependencyRec.generateFromLocalStorage = function () {
return false;
};
Extension_DependencyRec.init();
return Extension_DependencyRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Extension_DependencyRec = Extension_DependencyRec;

});
define("ServiceCenter.model$Espace_RuntimeRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Espace_RuntimeRec = (function (_super) {
__extends(Espace_RuntimeRec, _super);
function Espace_RuntimeRec(defaults) {
_super.apply(this, arguments);
}
Espace_RuntimeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Broken_References", "broken_ReferencesAttr", "Broken_References", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Outdated_References", "outdated_ReferencesAttr", "Outdated_References", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Outdated_Broken_References", "outdated_Broken_ReferencesAttr", "Outdated_Broken_References", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Missing_References", "missing_ReferencesAttr", "Missing_References", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Outdated_Missing_References", "outdated_Missing_ReferencesAttr", "Outdated_Missing_References", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("OldProducer_References", "oldProducer_ReferencesAttr", "OldProducer_References", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Unassigned_Phones", "unassigned_PhonesAttr", "Unassigned_Phones", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Requires_Compilation", "requires_CompilationAttr", "Requires_Compilation", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Disabled", "disabledAttr", "Disabled", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("UserProvider_Version_Id", "userProvider_Version_IdAttr", "UserProvider_Version_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Outdated_UserProvider", "outdated_UserProviderAttr", "Outdated_UserProvider", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Missing_UserProvider", "missing_UserProviderAttr", "Missing_UserProvider", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("OldProducer_UserProvider", "oldProducer_UserProviderAttr", "OldProducer_UserProvider", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("SecuritySettingsChanged", "securitySettingsChangedAttr", "SecuritySettingsChanged", false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
Espace_RuntimeRec.generateFromLocalStorage = function () {
return false;
};
Espace_RuntimeRec.init();
return Espace_RuntimeRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Espace_RuntimeRec = Espace_RuntimeRec;

});
define("ServiceCenter.model$Activity_Def_RoleRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Activity_Def_RoleRec = (function (_super) {
__extends(Activity_Def_RoleRec, _super);
function Activity_Def_RoleRec(defaults) {
_super.apply(this, arguments);
}
Activity_Def_RoleRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Role_Id", "role_IdAttr", "Role_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Activity_Def_Id", "activity_Def_IdAttr", "Activity_Def_Id", true, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Activity_Def_RoleRec.generateFromLocalStorage = function () {
return false;
};
Activity_Def_RoleRec.init();
return Activity_Def_RoleRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Activity_Def_RoleRec = Activity_Def_RoleRec;

});
define("ServiceCenter.model$Async_Operation_DBCatalogRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Async_Operation_DBCatalogRec = (function (_super) {
__extends(Async_Operation_DBCatalogRec, _super);
function Async_Operation_DBCatalogRec(defaults) {
_super.apply(this, arguments);
}
Async_Operation_DBCatalogRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Espace", "espaceAttr", "Espace", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DBCatalogName", "dBCatalogNameAttr", "DBCatalogName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DBCatalog_Id", "dBCatalog_IdAttr", "DBCatalog_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("State_Id", "state_IdAttr", "State_Id", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Async_Operation_DBCatalogRec.generateFromLocalStorage = function () {
return false;
};
Async_Operation_DBCatalogRec.init();
return Async_Operation_DBCatalogRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Async_Operation_DBCatalogRec = Async_Operation_DBCatalogRec;

});
define("ServiceCenter.model$Espace_SharedConfigurationRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Espace_SharedConfigurationRec = (function (_super) {
__extends(Espace_SharedConfigurationRec, _super);
function Espace_SharedConfigurationRec(defaults) {
_super.apply(this, arguments);
}
Espace_SharedConfigurationRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("eSpaceId", "eSpaceIdAttr", "eSpaceId", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("SharedConfigurationId", "sharedConfigurationIdAttr", "SharedConfigurationId", true, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Espace_SharedConfigurationRec.generateFromLocalStorage = function () {
return false;
};
Espace_SharedConfigurationRec.init();
return Espace_SharedConfigurationRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Espace_SharedConfigurationRec = Espace_SharedConfigurationRec;

});
define("ServiceCenter.model$Log_Integration_DetailRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Log_Integration_DetailRec = (function (_super) {
__extends(Log_Integration_DetailRec, _super);
function Log_Integration_DetailRec(defaults) {
_super.apply(this, arguments);
}
Log_Integration_DetailRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Id", "idAttr", "Id", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Cycle", "cycleAttr", "Cycle", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Message", "messageAttr", "Message", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Detail", "detailAttr", "Detail", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DetailLabel", "detailLabelAttr", "DetailLabel", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_Integration_DetailRec.generateFromLocalStorage = function () {
return false;
};
Log_Integration_DetailRec.init();
return Log_Integration_DetailRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Log_Integration_DetailRec = Log_Integration_DetailRec;

});
define("ServiceCenter.model$PluginAPIConfigurationParameterRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var PluginAPIConfigurationParameterRec = (function (_super) {
__extends(PluginAPIConfigurationParameterRec, _super);
function PluginAPIConfigurationParameterRec(defaults) {
_super.apply(this, arguments);
}
PluginAPIConfigurationParameterRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Value", "valueAttr", "Value", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
PluginAPIConfigurationParameterRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
PluginAPIConfigurationParameterRec.init();
return PluginAPIConfigurationParameterRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.PluginAPIConfigurationParameterRec = PluginAPIConfigurationParameterRec;

});
define("ServiceCenter.model$DBMSRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var DBMSRec = (function (_super) {
__extends(DBMSRec, _super);
function DBMSRec(defaults) {
_super.apply(this, arguments);
}
DBMSRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
DBMSRec.generateFromLocalStorage = function () {
return false;
};
DBMSRec.init();
return DBMSRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.DBMSRec = DBMSRec;

});
define("ServiceCenter.model$Recompilation_LogRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Recompilation_LogRec = (function (_super) {
__extends(Recompilation_LogRec, _super);
function Recompilation_LogRec(defaults) {
_super.apply(this, arguments);
}
Recompilation_LogRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("DateStarted", "dateStartedAttr", "DateStarted", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("DateFinished", "dateFinishedAttr", "DateFinished", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("By", "byAttr", "By", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Version", "versionAttr", "Version", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Recompilation_LogRec.generateFromLocalStorage = function () {
return false;
};
Recompilation_LogRec.init();
return Recompilation_LogRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Recompilation_LogRec = Recompilation_LogRec;

});
define("ServiceCenter.model$Security_ReferrerRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Security_ReferrerRec = (function (_super) {
__extends(Security_ReferrerRec, _super);
function Security_ReferrerRec(defaults) {
_super.apply(this, arguments);
}
Security_ReferrerRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Label", "labelAttr", "Label", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Security_ReferrerRec.generateFromLocalStorage = function () {
return false;
};
Security_ReferrerRec.init();
return Security_ReferrerRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Security_ReferrerRec = Security_ReferrerRec;

});
define("ServiceCenter.model$Report_Slow_SqlRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Report_Slow_SqlRec = (function (_super) {
__extends(Report_Slow_SqlRec, _super);
function Report_Slow_SqlRec(defaults) {
_super.apply(this, arguments);
}
Report_Slow_SqlRec.attributesToDeclare = function () {
return [
this.attr("espace", "espaceAttr", "espace", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("query", "queryAttr", "query", false, OS.Types.Text, function () {
return "";
}), 
this.attr("avgtime", "avgtimeAttr", "avgtime", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("totaltime", "totaltimeAttr", "totaltime", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("count", "countAttr", "count", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("ReportId", "reportIdAttr", "ReportId", true, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Report_Slow_SqlRec.generateFromLocalStorage = function () {
return false;
};
Report_Slow_SqlRec.init();
return Report_Slow_SqlRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Report_Slow_SqlRec = Report_Slow_SqlRec;

});
define("ServiceCenter.model$Log_Web_ReferenceRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Log_Web_ReferenceRec = (function (_super) {
__extends(Log_Web_ReferenceRec, _super);
function Log_Web_ReferenceRec(defaults) {
_super.apply(this, arguments);
}
Log_Web_ReferenceRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Instant", "instantAttr", "Instant", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Duration", "durationAttr", "Duration", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("URL", "uRLAttr", "URL", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Method", "methodAttr", "Method", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Executed_By", "executed_ByAttr", "Executed_By", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Error_Id", "error_IdAttr", "Error_Id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IntegrationLog_Id", "integrationLog_IdAttr", "IntegrationLog_Id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Cycle", "cycleAttr", "Cycle", true, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Log_Web_ReferenceRec.generateFromLocalStorage = function () {
return false;
};
Log_Web_ReferenceRec.init();
return Log_Web_ReferenceRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Log_Web_ReferenceRec = Log_Web_ReferenceRec;

});
define("ServiceCenter.model$Log_Mobile_Request_Detail_PreviousRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Log_Mobile_Request_Detail_PreviousRec = (function (_super) {
__extends(Log_Mobile_Request_Detail_PreviousRec, _super);
function Log_Mobile_Request_Detail_PreviousRec(defaults) {
_super.apply(this, arguments);
}
Log_Mobile_Request_Detail_PreviousRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Id", "idAttr", "Id", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Cycle", "cycleAttr", "Cycle", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Message", "messageAttr", "Message", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Detail", "detailAttr", "Detail", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DetailLabel", "detailLabelAttr", "DetailLabel", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_Mobile_Request_Detail_PreviousRec.generateFromLocalStorage = function () {
return false;
};
Log_Mobile_Request_Detail_PreviousRec.init();
return Log_Mobile_Request_Detail_PreviousRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Log_Mobile_Request_Detail_PreviousRec = Log_Mobile_Request_Detail_PreviousRec;

});
define("ServiceCenter.model$Extension_VersionRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Extension_VersionRec = (function (_super) {
__extends(Extension_VersionRec, _super);
function Extension_VersionRec(defaults) {
_super.apply(this, arguments);
}
Extension_VersionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Generation", "generationAttr", "Generation", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Xif_File", "xif_FileAttr", "Xif_File", true, OS.Types.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}), 
this.attr("Uploaded_By", "uploaded_ByAttr", "Uploaded_By", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Uploaded_Date", "uploaded_DateAttr", "Uploaded_Date", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Extension_Id", "extension_IdAttr", "Extension_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Valid", "is_ValidAttr", "Is_Valid", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("XIf_Version", "xIf_VersionAttr", "XIf_Version", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Tool_Version", "tool_VersionAttr", "Tool_Version", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Hash", "hashAttr", "Hash", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Last_Modified", "last_ModifiedAttr", "Last_Modified", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("NeededDBConnection", "neededDBConnectionAttr", "NeededDBConnection", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Has_SAP", "has_SAPAttr", "Has_SAP", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("LastUpdateDate", "lastUpdateDateAttr", "LastUpdateDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("HMAC", "hMACAttr", "HMAC", false, OS.Types.Text, function () {
return "";
}), 
this.attr("HMACVersion", "hMACVersionAttr", "HMACVersion", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Direct_Upgrade_From_Hash", "direct_Upgrade_From_HashAttr", "Direct_Upgrade_From_Hash", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Extension_VersionRec.generateFromLocalStorage = function () {
return false;
};
Extension_VersionRec.init();
return Extension_VersionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Extension_VersionRec = Extension_VersionRec;

});
define("ServiceCenter.model$Solution_Version_ReferenceRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Solution_Version_ReferenceRec = (function (_super) {
__extends(Solution_Version_ReferenceRec, _super);
function Solution_Version_ReferenceRec(defaults) {
_super.apply(this, arguments);
}
Solution_Version_ReferenceRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Kind", "kindAttr", "Kind", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Main_Reference", "main_ReferenceAttr", "Main_Reference", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Solution_Version_Id", "solution_Version_IdAttr", "Solution_Version_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Espace_Version_Id", "espace_Version_IdAttr", "Espace_Version_Id", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Extension_Version_Id", "extension_Version_IdAttr", "Extension_Version_Id", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Solution_Version_ReferenceRec.generateFromLocalStorage = function () {
return false;
};
Solution_Version_ReferenceRec.init();
return Solution_Version_ReferenceRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Solution_Version_ReferenceRec = Solution_Version_ReferenceRec;

});
define("ServiceCenter.model$Application_IconHighResRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Application_IconHighResRec = (function (_super) {
__extends(Application_IconHighResRec, _super);
function Application_IconHighResRec(defaults) {
_super.apply(this, arguments);
}
Application_IconHighResRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Image", "imageAttr", "Image", false, OS.Types.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
Application_IconHighResRec.generateFromLocalStorage = function () {
return false;
};
Application_IconHighResRec.init();
return Application_IconHighResRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Application_IconHighResRec = Application_IconHighResRec;

});
define("ServiceCenter.model$Developer_Operation_TypeRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Developer_Operation_TypeRec = (function (_super) {
__extends(Developer_Operation_TypeRec, _super);
function Developer_Operation_TypeRec(defaults) {
_super.apply(this, arguments);
}
Developer_Operation_TypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Label", "labelAttr", "Label", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Order", "orderAttr", "Order", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("DeployPhaseId", "deployPhaseIdAttr", "DeployPhaseId", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Developer_Operation_TypeRec.generateFromLocalStorage = function () {
return false;
};
Developer_Operation_TypeRec.init();
return Developer_Operation_TypeRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Developer_Operation_TypeRec = Developer_Operation_TypeRec;

});
define("ServiceCenter.model$Log_ScreenRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Log_ScreenRec = (function (_super) {
__extends(Log_ScreenRec, _super);
function Log_ScreenRec(defaults) {
_super.apply(this, arguments);
}
Log_ScreenRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Instant", "instantAttr", "Instant", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Duration", "durationAttr", "Duration", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Screen", "screenAttr", "Screen", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Session_Id", "session_IdAttr", "Session_Id", true, OS.Types.Text, function () {
return "";
}), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Msisdn", "msisdnAttr", "Msisdn", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Screen_Type", "screen_TypeAttr", "Screen_Type", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Cycle", "cycleAttr", "Cycle", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Executed_By", "executed_ByAttr", "Executed_By", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Session_Bytes", "session_BytesAttr", "Session_Bytes", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Viewstate_Bytes", "viewstate_BytesAttr", "Viewstate_Bytes", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Session_Requests", "session_RequestsAttr", "Session_Requests", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Access_Mode", "access_ModeAttr", "Access_Mode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Request_Key", "request_KeyAttr", "Request_Key", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Action_Name", "action_NameAttr", "Action_Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Client_IP", "client_IPAttr", "Client_IP", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_ScreenRec.generateFromLocalStorage = function () {
return false;
};
Log_ScreenRec.init();
return Log_ScreenRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Log_ScreenRec = Log_ScreenRec;

});
define("ServiceCenter.model$Persistent_LoginRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Persistent_LoginRec = (function (_super) {
__extends(Persistent_LoginRec, _super);
function Persistent_LoginRec(defaults) {
_super.apply(this, arguments);
}
Persistent_LoginRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Terminal_Type", "terminal_TypeAttr", "Terminal_Type", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Secret", "secretAttr", "Secret", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Expires", "expiresAttr", "Expires", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
Persistent_LoginRec.generateFromLocalStorage = function () {
return false;
};
Persistent_LoginRec.init();
return Persistent_LoginRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Persistent_LoginRec = Persistent_LoginRec;

});
define("ServiceCenter.model$ZoneRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var ZoneRec = (function (_super) {
__extends(ZoneRec, _super);
function ZoneRec(defaults) {
_super.apply(this, arguments);
}
ZoneRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
ZoneRec.generateFromLocalStorage = function () {
return false;
};
ZoneRec.init();
return ZoneRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.ZoneRec = ZoneRec;

});
define("ServiceCenter.model$Log_Web_Service_PreviousRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Log_Web_Service_PreviousRec = (function (_super) {
__extends(Log_Web_Service_PreviousRec, _super);
function Log_Web_Service_PreviousRec(defaults) {
_super.apply(this, arguments);
}
Log_Web_Service_PreviousRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Instant", "instantAttr", "Instant", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Duration", "durationAttr", "Duration", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Method", "methodAttr", "Method", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Client_IP", "client_IPAttr", "Client_IP", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Executed_By", "executed_ByAttr", "Executed_By", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Error_Id", "error_IdAttr", "Error_Id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Cycle", "cycleAttr", "Cycle", true, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Log_Web_Service_PreviousRec.generateFromLocalStorage = function () {
return false;
};
Log_Web_Service_PreviousRec.init();
return Log_Web_Service_PreviousRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Log_Web_Service_PreviousRec = Log_Web_Service_PreviousRec;

});
define("ServiceCenter.model$Entity_UsageRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Entity_UsageRec = (function (_super) {
__extends(Entity_UsageRec, _super);
function Entity_UsageRec(defaults) {
_super.apply(this, arguments);
}
Entity_UsageRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Entity_GUID", "entity_GUIDAttr", "Entity_GUID", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Date", "dateAttr", "Date", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Size_In_Kb", "size_In_KbAttr", "Size_In_Kb", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Row_Count", "row_CountAttr", "Row_Count", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("User_Reads", "user_ReadsAttr", "User_Reads", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("User_Updates", "user_UpdatesAttr", "User_Updates", true, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
Entity_UsageRec.generateFromLocalStorage = function () {
return false;
};
Entity_UsageRec.init();
return Entity_UsageRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Entity_UsageRec = Entity_UsageRec;

});
define("ServiceCenter.model$Espace_TenantRec", ["exports", "OutSystems", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Espace_TenantRec = (function (_super) {
__extends(Espace_TenantRec, _super);
function Espace_TenantRec(defaults) {
_super.apply(this, arguments);
}
Espace_TenantRec.attributesToDeclare = function () {
return [
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Tenant_Name", "tenant_NameAttr", "Tenant_Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
Espace_TenantRec.generateFromLocalStorage = function () {
return false;
};
Espace_TenantRec.init();
return Espace_TenantRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Espace_TenantRec = Espace_TenantRec;

});
define("ServiceCenter.model", ["exports", "OutSystems"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var ServiceCenterModel = exports;
});
