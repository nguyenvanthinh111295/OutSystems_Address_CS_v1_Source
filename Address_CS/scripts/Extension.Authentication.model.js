define("Extension.Authentication.model$PropertyRec", ["exports", "OutSystems", "Extension.Authentication.model"], function (exports, OutSystems, Extension_AuthenticationModel) {
var OS = OutSystems.Internal;
var PropertyRec = (function (_super) {
__extends(PropertyRec, _super);
function PropertyRec(defaults) {
_super.apply(this, arguments);
}
PropertyRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Value", "valueAttr", "Value", false, OS.Types.Text, function () {
return "";
}), 
this.attr("MoreValues", "moreValuesAttr", "MoreValues", false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
PropertyRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
PropertyRec.init();
return PropertyRec;
})(OS.DataTypes.GenericRecord);
Extension_AuthenticationModel.PropertyRec = PropertyRec;

});
define("Extension.Authentication.model$PropertyRecord", ["exports", "OutSystems", "Extension.Authentication.model", "Extension.Authentication.model$PropertyRec"], function (exports, OutSystems, Extension_AuthenticationModel) {
var OS = OutSystems.Internal;
var PropertyRecord = (function (_super) {
__extends(PropertyRecord, _super);
function PropertyRecord(defaults) {
_super.apply(this, arguments);
}
PropertyRecord.attributesToDeclare = function () {
return [
this.attr("Property", "propertyAttr", "Property", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_AuthenticationModel.PropertyRec());
}, Extension_AuthenticationModel.PropertyRec)
].concat(_super.attributesToDeclare.call(this));
};
PropertyRecord.fromStructure = function (str) {
return new PropertyRecord(new PropertyRecord.RecordClass({
propertyAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PropertyRecord.IsAnonymousRecord = true;
PropertyRecord.UniqueId = "2aecf770-0991-dc7a-4e48-23959f585367";
PropertyRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
PropertyRecord.init();
return PropertyRecord;
})(OS.DataTypes.GenericRecord);
Extension_AuthenticationModel.PropertyRecord = PropertyRecord;

});
define("Extension.Authentication.model$NodeRec", ["exports", "OutSystems", "Extension.Authentication.model"], function (exports, OutSystems, Extension_AuthenticationModel) {
var OS = OutSystems.Internal;
var NodeRec = (function (_super) {
__extends(NodeRec, _super);
function NodeRec(defaults) {
_super.apply(this, arguments);
}
NodeRec.attributesToDeclare = function () {
return [
this.attr("Path", "pathAttr", "Path", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
NodeRec.fromStructure = function (str) {
return new NodeRec(new NodeRec.RecordClass({
pathAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
NodeRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
NodeRec.init();
return NodeRec;
})(OS.DataTypes.GenericRecord);
Extension_AuthenticationModel.NodeRec = NodeRec;

});
define("Extension.Authentication.model$NodeRecord", ["exports", "OutSystems", "Extension.Authentication.model", "Extension.Authentication.model$NodeRec"], function (exports, OutSystems, Extension_AuthenticationModel) {
var OS = OutSystems.Internal;
var NodeRecord = (function (_super) {
__extends(NodeRecord, _super);
function NodeRecord(defaults) {
_super.apply(this, arguments);
}
NodeRecord.attributesToDeclare = function () {
return [
this.attr("Node", "nodeAttr", "Node", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_AuthenticationModel.NodeRec());
}, Extension_AuthenticationModel.NodeRec)
].concat(_super.attributesToDeclare.call(this));
};
NodeRecord.fromStructure = function (str) {
return new NodeRecord(new NodeRecord.RecordClass({
nodeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
NodeRecord.IsAnonymousRecord = true;
NodeRecord.UniqueId = "98d9cf11-7a35-73d3-8fae-41966ca62bb9";
NodeRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
NodeRecord.init();
return NodeRecord;
})(OS.DataTypes.GenericRecord);
Extension_AuthenticationModel.NodeRecord = NodeRecord;

});
define("Extension.Authentication.model$NodeRecordList", ["exports", "OutSystems", "Extension.Authentication.model", "Extension.Authentication.model$NodeRecord"], function (exports, OutSystems, Extension_AuthenticationModel) {
var OS = OutSystems.Internal;
var NodeRecordList = (function (_super) {
__extends(NodeRecordList, _super);
function NodeRecordList(defaults) {
_super.apply(this, arguments);
}
NodeRecordList.RecordType = Extension_AuthenticationModel.NodeRecord;
return NodeRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_AuthenticationModel.NodeRecordList = NodeRecordList;

});
define("Extension.Authentication.model$GroupRec", ["exports", "OutSystems", "Extension.Authentication.model"], function (exports, OutSystems, Extension_AuthenticationModel) {
var OS = OutSystems.Internal;
var GroupRec = (function (_super) {
__extends(GroupRec, _super);
function GroupRec(defaults) {
_super.apply(this, arguments);
}
GroupRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
GroupRec.fromStructure = function (str) {
return new GroupRec(new GroupRec.RecordClass({
nameAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GroupRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
GroupRec.init();
return GroupRec;
})(OS.DataTypes.GenericRecord);
Extension_AuthenticationModel.GroupRec = GroupRec;

});
define("Extension.Authentication.model$GroupRecord", ["exports", "OutSystems", "Extension.Authentication.model", "Extension.Authentication.model$GroupRec"], function (exports, OutSystems, Extension_AuthenticationModel) {
var OS = OutSystems.Internal;
var GroupRecord = (function (_super) {
__extends(GroupRecord, _super);
function GroupRecord(defaults) {
_super.apply(this, arguments);
}
GroupRecord.attributesToDeclare = function () {
return [
this.attr("Group", "groupAttr", "Group", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_AuthenticationModel.GroupRec());
}, Extension_AuthenticationModel.GroupRec)
].concat(_super.attributesToDeclare.call(this));
};
GroupRecord.fromStructure = function (str) {
return new GroupRecord(new GroupRecord.RecordClass({
groupAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GroupRecord.IsAnonymousRecord = true;
GroupRecord.UniqueId = "57010155-1e66-edd3-beb2-a1c7247ad958";
GroupRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
GroupRecord.init();
return GroupRecord;
})(OS.DataTypes.GenericRecord);
Extension_AuthenticationModel.GroupRecord = GroupRecord;

});
define("Extension.Authentication.model$PropertyRecordList", ["exports", "OutSystems", "Extension.Authentication.model", "Extension.Authentication.model$PropertyRecord"], function (exports, OutSystems, Extension_AuthenticationModel) {
var OS = OutSystems.Internal;
var PropertyRecordList = (function (_super) {
__extends(PropertyRecordList, _super);
function PropertyRecordList(defaults) {
_super.apply(this, arguments);
}
PropertyRecordList.RecordType = Extension_AuthenticationModel.PropertyRecord;
return PropertyRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_AuthenticationModel.PropertyRecordList = PropertyRecordList;

});
define("Extension.Authentication.model$GroupRecordList", ["exports", "OutSystems", "Extension.Authentication.model", "Extension.Authentication.model$GroupRecord"], function (exports, OutSystems, Extension_AuthenticationModel) {
var OS = OutSystems.Internal;
var GroupRecordList = (function (_super) {
__extends(GroupRecordList, _super);
function GroupRecordList(defaults) {
_super.apply(this, arguments);
}
GroupRecordList.RecordType = Extension_AuthenticationModel.GroupRecord;
return GroupRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_AuthenticationModel.GroupRecordList = GroupRecordList;

});
define("Extension.Authentication.model", ["exports", "OutSystems"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Extension_AuthenticationModel = exports;
});
