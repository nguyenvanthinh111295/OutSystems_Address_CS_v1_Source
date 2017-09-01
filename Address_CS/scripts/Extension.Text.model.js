define("Extension.Text.model$TextRec", ["exports", "OutSystems", "Extension.Text.model"], function (exports, OutSystems, Extension_TextModel) {
var OS = OutSystems.Internal;
var TextRec = (function (_super) {
__extends(TextRec, _super);
function TextRec(defaults) {
_super.apply(this, arguments);
}
TextRec.attributesToDeclare = function () {
return [
this.attr("Value", "valueAttr", "Value", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
TextRec.fromStructure = function (str) {
return new TextRec(new TextRec.RecordClass({
valueAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TextRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
TextRec.init();
return TextRec;
})(OS.DataTypes.GenericRecord);
Extension_TextModel.TextRec = TextRec;

});
define("Extension.Text.model$TextRecord", ["exports", "OutSystems", "Extension.Text.model", "Extension.Text.model$TextRec"], function (exports, OutSystems, Extension_TextModel) {
var OS = OutSystems.Internal;
var TextRecord = (function (_super) {
__extends(TextRecord, _super);
function TextRecord(defaults) {
_super.apply(this, arguments);
}
TextRecord.attributesToDeclare = function () {
return [
this.attr("Text", "textAttr", "Text", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_TextModel.TextRec());
}, Extension_TextModel.TextRec)
].concat(_super.attributesToDeclare.call(this));
};
TextRecord.fromStructure = function (str) {
return new TextRecord(new TextRecord.RecordClass({
textAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TextRecord.IsAnonymousRecord = true;
TextRecord.UniqueId = "0d84b59e-ff89-87c4-71ae-b49dfa9f2c39";
TextRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
TextRecord.init();
return TextRecord;
})(OS.DataTypes.GenericRecord);
Extension_TextModel.TextRecord = TextRecord;

});
define("Extension.Text.model$TextRecordList", ["exports", "OutSystems", "Extension.Text.model", "Extension.Text.model$TextRecord"], function (exports, OutSystems, Extension_TextModel) {
var OS = OutSystems.Internal;
var TextRecordList = (function (_super) {
__extends(TextRecordList, _super);
function TextRecordList(defaults) {
_super.apply(this, arguments);
}
TextRecordList.RecordType = Extension_TextModel.TextRecord;
return TextRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_TextModel.TextRecordList = TextRecordList;

});
define("Extension.Text.model", ["exports", "OutSystems"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Extension_TextModel = exports;
});
