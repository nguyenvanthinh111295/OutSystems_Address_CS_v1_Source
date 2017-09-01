define("Business_CS.model$BusinessCategoryRec", ["exports", "OutSystems", "Business_CS.model"], function (exports, OutSystems, Business_CSModel) {
var OS = OutSystems.Internal;
var BusinessCategoryRec = (function (_super) {
__extends(BusinessCategoryRec, _super);
function BusinessCategoryRec(defaults) {
_super.apply(this, arguments);
}
BusinessCategoryRec.attributesToDeclare = function () {
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
BusinessCategoryRec.generateFromLocalStorage = function () {
return false;
};
BusinessCategoryRec.init();
return BusinessCategoryRec;
})(OS.DataTypes.GenericRecord);
Business_CSModel.BusinessCategoryRec = BusinessCategoryRec;

});
define("Business_CS.model$CountryRec", ["exports", "OutSystems", "Business_CS.model"], function (exports, OutSystems, Business_CSModel) {
var OS = OutSystems.Internal;
var CountryRec = (function (_super) {
__extends(CountryRec, _super);
function CountryRec(defaults) {
_super.apply(this, arguments);
}
CountryRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("ISO", "iSOAttr", "ISO", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Active", "activeAttr", "Active", false, OS.Types.Boolean, function () {
return true;
}), 
this.attr("CreatedDate", "createdDateAttr", "CreatedDate", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("LastUpdatedDate", "lastUpdatedDateAttr", "LastUpdatedDate", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("LastUpdatedBy", "lastUpdatedByAttr", "LastUpdatedBy", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
CountryRec.generateFromLocalStorage = function () {
return false;
};
CountryRec.init();
return CountryRec;
})(OS.DataTypes.GenericRecord);
Business_CSModel.CountryRec = CountryRec;

});
define("Business_CS.model$CurrencyRec", ["exports", "OutSystems", "Business_CS.model"], function (exports, OutSystems, Business_CSModel) {
var OS = OutSystems.Internal;
var CurrencyRec = (function (_super) {
__extends(CurrencyRec, _super);
function CurrencyRec(defaults) {
_super.apply(this, arguments);
}
CurrencyRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("ISO", "iSOAttr", "ISO", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Currency", "currencyAttr", "Currency", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Active", "activeAttr", "Active", false, OS.Types.Boolean, function () {
return true;
}), 
this.attr("CreatedDate", "createdDateAttr", "CreatedDate", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("LastUpdatedDate", "lastUpdatedDateAttr", "LastUpdatedDate", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("LastUpdatedBy", "lastUpdatedByAttr", "LastUpdatedBy", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
CurrencyRec.generateFromLocalStorage = function () {
return false;
};
CurrencyRec.init();
return CurrencyRec;
})(OS.DataTypes.GenericRecord);
Business_CSModel.CurrencyRec = CurrencyRec;

});
define("Business_CS.model", ["exports", "OutSystems"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Business_CSModel = exports;
});
