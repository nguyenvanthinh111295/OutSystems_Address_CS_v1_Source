define("Address_CS.model$AddressRec",["exports", "OutSystems", "Address_CS.model"], function(exports, OutSystems, Address_CSModel) {
	var OS = OutSystems.Internal;
	var AddressRec = (function(_super) {
		__extends(AddressRec, _super);
		function AddressRec(defaults) {
			_super.apply(this, arguments);
		}
		AddressRec.attributesToDeclare = function() {
			return[
			this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function() {
				return OS.DataTypes.LongInteger.defaultValue;
			}
			),
			this.attr("AddressLine1", "addressLine1Attr", "AddressLine1", true, OS.Types.Text, function() {
				return "";
			}
			),
			this.attr("AddressLine2", "addressLine2Attr", "AddressLine2", false, OS.Types.Text, function() {
				return "";
			}
			),
			this.attr("AddressLine3", "addressLine3Attr", "AddressLine3", false, OS.Types.Text, function() {
				return "";
			}
			),
			this.attr("AddressLine4", "addressLine4Attr", "AddressLine4", false, OS.Types.Text, function() {
				return "";
			}
			),
			this.attr("AddressLine5", "addressLine5Attr", "AddressLine5", false, OS.Types.Text, function() {
				return "";
			}
			),
			this.attr("City", "cityAttr", "City", true, OS.Types.Text, function() {
				return "";
			}
			),
			this.attr("County", "countyAttr", "County", false, OS.Types.Text, function() {
				return "";
			}
			),
			this.attr("Postcode", "postcodeAttr", "Postcode", false, OS.Types.Text, function() {
				return "";
			}
			),
			this.attr("CountryId", "countryIdAttr", "CountryId", false, OS.Types.LongInteger, function() {
				return OS.DataTypes.LongInteger.defaultValue;
			}
			),
			this.attr("AddressTypeId", "addressTypeIdAttr", "AddressTypeId", false, OS.Types.LongInteger, function() {
				return OS.DataTypes.LongInteger.defaultValue;
			}
			),
			this.attr("Active", "activeAttr", "Active", true, OS.Types.Boolean, function() {
				return true;
			}
			),
			this.attr("CreatedDate", "createdDateAttr", "CreatedDate", true, OS.Types.DateTime, function() {
				return OS.DataTypes.DateTime.defaultValue;
			}
			),
			this.attr("CreatedBy", "createdByAttr", "CreatedBy", true, OS.Types.Integer, function() {
				return 0;
			}
			),
			this.attr("LastUpdatedDate", "lastUpdatedDateAttr", "LastUpdatedDate", true, OS.Types.DateTime, function() {
				return OS.DataTypes.DateTime.defaultValue;
			}
			),
			this.attr("LastUpdatedBy", "lastUpdatedByAttr", "LastUpdatedBy", true, OS.Types.Integer, function() {
				return 0;
			}
			)
			] .concat(_super.attributesToDeclare.call(this));
		};
		AddressRec.generateFromLocalStorage = function() {
			return false;
		};
		AddressRec.init();
		return AddressRec;
	}
	) (OS.DataTypes.GenericRecord);
	Address_CSModel.AddressRec = AddressRec;

});
define("Address_CS.model$AddressTypeRec",["exports", "OutSystems", "Address_CS.model"], function(exports, OutSystems, Address_CSModel) {
	var OS = OutSystems.Internal;
	var AddressTypeRec = (function(_super) {
		__extends(AddressTypeRec, _super);
		function AddressTypeRec(defaults) {
			_super.apply(this, arguments);
		}
		AddressTypeRec.attributesToDeclare = function() {
			return[
			this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function() {
				return OS.DataTypes.LongInteger.defaultValue;
			}
			),
			this.attr("Label", "labelAttr", "Label", true, OS.Types.Text, function() {
				return "";
			}
			),
			this.attr("Order", "orderAttr", "Order", false, OS.Types.Integer, function() {
				return 0;
			}
			),
			this.attr("Active", "activeAttr", "Active", true, OS.Types.Boolean, function() {
				return true;
			}
			),
			this.attr("CreatedDate", "createdDateAttr", "CreatedDate", true, OS.Types.DateTime, function() {
				return OS.DataTypes.DateTime.defaultValue;
			}
			),
			this.attr("CreatedBy", "createdByAttr", "CreatedBy", true, OS.Types.Integer, function() {
				return 0;
			}
			),
			this.attr("LastUpdatedDate", "lastUpdatedDateAttr", "LastUpdatedDate", true, OS.Types.DateTime, function() {
				return OS.DataTypes.DateTime.defaultValue;
			}
			),
			this.attr("LastUpdatedBy", "lastUpdatedByAttr", "LastUpdatedBy", false, OS.Types.Integer, function() {
				return 0;
			}
			)
			] .concat(_super.attributesToDeclare.call(this));
		};
		AddressTypeRec.generateFromLocalStorage = function() {
			return false;
		};
		AddressTypeRec.init();
		return AddressTypeRec;
	}
	) (OS.DataTypes.GenericRecord);
	Address_CSModel.AddressTypeRec = AddressTypeRec;

});
define("Address_CS.model",["exports", "OutSystems"], function(exports, OutSystems) {
	var OS = OutSystems.Internal;
	var Address_CSModel = exports;
});
