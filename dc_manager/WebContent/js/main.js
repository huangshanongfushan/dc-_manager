/*
 * This code is for Internal Salesforce use only, and subject to change without notice.
 * Customers shouldn't reference this file in any web pages.
 */
var UiSkin = {
	"ALOHA" : {
		"apiValue" : "Theme3",
		"dbValue" : "4"
	},
	"WEBSTORE" : {
		"apiValue" : "Webstore",
		"dbValue" : "3"
	},
	"CLASSIC" : {
		"apiValue" : "Theme1",
		"dbValue" : "0"
	},
	"SALESFORCE" : {
		"apiValue" : "Theme2",
		"dbValue" : "1"
	},
	"TOUCH" : {
		"apiValue" : "Touch",
		"dbValue" : "5"
	},
	"PORTAL_DEFAULT" : {
		"apiValue" : "PortalDefault",
		"dbValue" : "2"
	}
};
var LayoutItemTypeEnum = {
	"PAGE" : {
		"apiValue" : "P",
		"dbValue" : "P"
	},
	"EMPTY_SPACE" : {
		"apiValue" : "E",
		"dbValue" : "E"
	},
	"CONTROL" : {
		"apiValue" : "O",
		"dbValue" : "O"
	},
	"TAGGING" : {
		"apiValue" : "T",
		"dbValue" : "T"
	},
	"RELATED_LOOKUP" : {
		"apiValue" : "U",
		"dbValue" : "U"
	},
	"CUSTOM_S_CONTROL" : {
		"apiValue" : "S",
		"dbValue" : "S"
	},
	"ANALYTICS_COMPONENT" : {
		"apiValue" : "V",
		"dbValue" : "V"
	},
	"CUSTOM_FIELD" : {
		"apiValue" : "C",
		"dbValue" : "C"
	},
	"CUSTOM_LINK" : {
		"apiValue" : "K",
		"dbValue" : "K"
	},
	"STANDARD_RELATED_LIST" : {
		"apiValue" : "R",
		"dbValue" : "R"
	},
	"STANDARD_FIELD" : {
		"apiValue" : "F",
		"dbValue" : "F"
	},
	"DETAIL_BUTTON_BAR" : {
		"apiValue" : "B",
		"dbValue" : "B"
	},
	"AURA_COMPONENT" : {
		"apiValue" : "A",
		"dbValue" : "A"
	},
	"CUSTOM_RELATED_LIST" : {
		"apiValue" : "L",
		"dbValue" : "L"
	}
};
var InlineEditState = {
	"EDIT" : {
		"display" : true,
		"cssClass" : "inlineEditWrite"
	},
	"READONLY" : {
		"display" : true,
		"cssClass" : "inlineEditLock"
	},
	"POSTONLY" : {
		"display" : false,
		"cssClass" : ""
	},
	"NONE" : {
		"display" : false,
		"cssClass" : ""
	}
};
var PerfLogLevel = {
	"INTERNAL" : {
		"name" : "INTERNAL",
		"value" : 2
	},
	"DEBUG" : {
		"name" : "DEBUG",
		"value" : 1
	},
	"PRODUCTION" : {
		"name" : "PRODUCTION",
		"value" : 3
	}
};
var ColumnType = {
	"DUEDATE" : {
		"inlineEditFieldObject" : "DateField",
		"queryOperators" : ["e", "n", "l", "g", "m", "h"],
		"needsLookup" : false,
		"filterQueryOperators" : ["e", "n", "l", "g", "m", "h"],
		"inlineEditFieldConstructor" : function () {
			return DateField;
		},
		"inlineEditExtraData" : ["hasTime"],
		"comparableDatatypes" : ["D", "F"],
		"datatypeLetter" : "F",
		"isDate" : true,
		"isNumber" : false,
		"inlineEditable" : true,
		"isCompond" : false
	},
	"DYNAMICENUM" : {
		"inlineEditFieldObject" : "DynamicEnumField",
		"queryOperators" : ["e", "n", "l", "g", "m", "h", "c", "k", "s", "i"],
		"needsLookup" : true,
		"filterQueryOperators" : ["e", "n", "c", "k", "s"],
		"inlineEditFieldConstructor" : function () {
			return DynamicEnumField;
		},
		"inlineEditExtraData" : ["picklistId", "controller", "controllerLabel"],
		"comparableDatatypes" : ["L", "U", "E", "H", "X", "S"],
		"datatypeLetter" : "L",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : true,
		"isCompond" : false
	},
	"MULTIENUM" : {
		"inlineEditFieldObject" : "MultiEnumField",
		"queryOperators" : ["e", "n", "u", "x"],
		"needsLookup" : true,
		"filterQueryOperators" : ["e", "n"],
		"inlineEditFieldConstructor" : function () {
			return MultiEnumField;
		},
		"inlineEditExtraData" : ["picklistId", "controller", "controllerLabel", "height"],
		"comparableDatatypes" : ["Q"],
		"datatypeLetter" : "Q",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : true,
		"isCompond" : false
	},
	"STRINGPLUSCLOB" : {
		"inlineEditFieldObject" : "MultiLineTextField",
		"queryOperators" : ["e", "n", "l", "g", "m", "h", "c", "k", "s", "i"],
		"needsLookup" : false,
		"filterQueryOperators" : ["e", "n", "c", "k", "s"],
		"inlineEditFieldConstructor" : function () {
			return MultiLineTextField;
		},
		"inlineEditExtraData" : ["maxLength"],
		"comparableDatatypes" : ["J"],
		"datatypeLetter" : "J",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : true,
		"isCompond" : false
	},
	"DATACATEGORYGROUPREFERENCE" : {
		"queryOperators" : ["e", "n"],
		"needsLookup" : false,
		"filterQueryOperators" : ["e", "n"],
		"comparableDatatypes" : ["d"],
		"datatypeLetter" : "d",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : false,
		"isCompond" : false
	},
	"SWITCHABLE_PERSONNAME" : {
		"needsLookup" : false,
		"inlineEditFieldConstructor" : function () {
			return null;
		},
		"comparableDatatypes" : ["m"],
		"datatypeLetter" : "m",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : true,
		"isCompond" : true
	},
	"TIMEONLY" : {
		"queryOperators" : ["e", "n", "l", "g", "m", "h"],
		"needsLookup" : false,
		"filterQueryOperators" : ["e", "n", "l", "g", "m", "h"],
		"comparableDatatypes" : ["f"],
		"datatypeLetter" : "f",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : false,
		"isCompond" : false
	},
	"YEARQUARTER" : {
		"needsLookup" : false,
		"comparableDatatypes" : ["O"],
		"datatypeLetter" : "O",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : false,
		"isCompond" : true
	},
	"COMPLEXVALUETYPE" : {
		"needsLookup" : false,
		"comparableDatatypes" : ["v"],
		"datatypeLetter" : "v",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : false,
		"isCompond" : false
	},
	"FAX" : {
		"inlineEditFieldObject" : "PhoneField",
		"queryOperators" : ["e", "n", "l", "g", "m", "h", "c", "k", "s", "i"],
		"needsLookup" : false,
		"filterQueryOperators" : ["e", "n", "c", "k", "s"],
		"inlineEditFieldConstructor" : function () {
			return PhoneField;
		},
		"inlineEditExtraData" : ["maxLength", "formatPhone", "addDir"],
		"comparableDatatypes" : ["G"],
		"datatypeLetter" : "G",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : true,
		"isCompond" : false
	},
	"ENCRYPTEDTEXT" : {
		"inlineEditFieldObject" : "EncryptedTextField",
		"queryOperators" : ["e", "n", "l", "g", "m", "h", "c", "k", "s", "i"],
		"needsLookup" : false,
		"filterQueryOperators" : ["e", "n", "c", "k", "s"],
		"inlineEditFieldConstructor" : function () {
			return EncryptedTextField;
		},
		"inlineEditExtraData" : ["maxLength", "masked"],
		"comparableDatatypes" : ["6"],
		"datatypeLetter" : "6",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : true,
		"isCompond" : false
	},
	"RAW" : {
		"needsLookup" : false,
		"comparableDatatypes" : ["r"],
		"datatypeLetter" : "r",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : false,
		"isCompond" : false
	},
	"ANYTYPE" : {
		"needsLookup" : false,
		"comparableDatatypes" : ["K"],
		"datatypeLetter" : "K",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : false,
		"isCompond" : false
	},
	"RECORDTYPE" : {
		"queryOperators" : ["e", "n"],
		"needsLookup" : true,
		"filterQueryOperators" : ["e", "n"],
		"comparableDatatypes" : ["7"],
		"datatypeLetter" : "7",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : false,
		"isCompond" : false
	},
	"BOOLEAN" : {
		"inlineEditFieldObject" : "BooleanField",
		"queryOperators" : ["e", "n"],
		"needsLookup" : true,
		"filterQueryOperators" : ["e", "n"],
		"inlineEditFieldConstructor" : function () {
			return BooleanField;
		},
		"comparableDatatypes" : ["B"],
		"datatypeLetter" : "B",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : true,
		"isCompond" : false
	},
	"MULTILINETEXT" : {
		"inlineEditFieldObject" : "MultiLineTextField",
		"queryOperators" : ["e", "n", "l", "g", "m", "h", "c", "k", "s", "i"],
		"needsLookup" : false,
		"filterQueryOperators" : ["e", "n", "c", "k", "s"],
		"inlineEditFieldConstructor" : function () {
			return MultiLineTextField;
		},
		"inlineEditExtraData" : ["maxLength"],
		"comparableDatatypes" : ["U", "L", "E", "H", "X", "S"],
		"datatypeLetter" : "X",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : true,
		"isCompond" : false
	},
	"INETADDRESS" : {
		"queryOperators" : ["e", "n", "l", "g", "m", "h", "c", "k", "s", "i"],
		"needsLookup" : false,
		"filterQueryOperators" : ["e", "n", "c", "k", "s"],
		"comparableDatatypes" : ["W"],
		"datatypeLetter" : "W",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : false,
		"isCompond" : false
	},
	"BITVECTOR" : {
		"queryOperators" : ["e", "n", "l", "g", "m", "h", "c", "k", "s", "i"],
		"needsLookup" : false,
		"filterQueryOperators" : ["e", "n", "c", "k", "s"],
		"comparableDatatypes" : ["8"],
		"datatypeLetter" : "8",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : false,
		"isCompond" : false
	},
	"DOUBLE" : {
		"inlineEditFieldObject" : "NumberField",
		"queryOperators" : ["e", "n", "l", "g", "m", "h"],
		"needsLookup" : false,
		"filterQueryOperators" : ["e", "n", "l", "g", "m", "h"],
		"inlineEditFieldConstructor" : function () {
			return NumberField;
		},
		"comparableDatatypes" : ["P", "N"],
		"datatypeLetter" : "N",
		"isDate" : false,
		"isNumber" : true,
		"inlineEditable" : true,
		"isCompond" : false
	},
	"DIVISION" : {
		"inlineEditFieldObject" : "StaticEnumField",
		"queryOperators" : ["e", "n", "l", "g", "m", "h", "c", "k", "s", "i"],
		"needsLookup" : true,
		"filterQueryOperators" : ["e", "n", "c", "k", "s"],
		"inlineEditFieldConstructor" : function () {
			return StaticEnumField;
		},
		"inlineEditExtraData" : ["picklistData"],
		"comparableDatatypes" : ["I"],
		"datatypeLetter" : "I",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : true,
		"isCompond" : false
	},
	"TEXTENUM" : {
		"inlineEditFieldObject" : "TextField",
		"queryOperators" : ["e", "n", "l", "g", "m", "h", "c", "k", "s", "i"],
		"needsLookup" : false,
		"filterQueryOperators" : ["e", "n", "c", "k", "s"],
		"inlineEditFieldConstructor" : function () {
			return TextField;
		},
		"inlineEditExtraData" : ["maxLength"],
		"comparableDatatypes" : ["L", "U", "E", "H", "X", "S"],
		"datatypeLetter" : "L",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : true,
		"isCompond" : false
	},
	"ENCRYPTEDBASE64" : {
		"needsLookup" : false,
		"comparableDatatypes" : ["c"],
		"datatypeLetter" : "c",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : false,
		"isCompond" : false
	},
	"FFX_BLOB" : {
		"needsLookup" : false,
		"comparableDatatypes" : ["U", "L", "E", "H", "X", "S"],
		"datatypeLetter" : "X",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : false,
		"isCompond" : false
	},
	"STATICENUM" : {
		"inlineEditFieldObject" : "StaticEnumField",
		"queryOperators" : ["e", "n", "l", "g", "m", "h", "c", "k", "s", "i"],
		"needsLookup" : true,
		"filterQueryOperators" : ["e", "n", "c", "k", "s"],
		"inlineEditFieldConstructor" : function () {
			return StaticEnumField;
		},
		"inlineEditExtraData" : ["picklistData"],
		"comparableDatatypes" : ["L", "U", "E", "H", "X", "S"],
		"datatypeLetter" : "L",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : true,
		"isCompond" : false
	},
	"SFDCENCRYPTEDTEXT" : {
		"queryOperators" : ["e", "n", "l", "g", "m", "h", "c", "k", "s", "i"],
		"needsLookup" : false,
		"filterQueryOperators" : ["e", "n", "c", "k", "s"],
		"comparableDatatypes" : ["T"],
		"datatypeLetter" : "T",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : false,
		"isCompond" : false
	},
	"INTEGER" : {
		"inlineEditFieldObject" : "NumberField",
		"queryOperators" : ["e", "n", "l", "g", "m", "h"],
		"needsLookup" : false,
		"filterQueryOperators" : ["e", "n", "l", "g", "m", "h"],
		"inlineEditFieldConstructor" : function () {
			return NumberField;
		},
		"comparableDatatypes" : ["P", "N"],
		"datatypeLetter" : "N",
		"isDate" : false,
		"isNumber" : true,
		"inlineEditable" : true,
		"isCompond" : false
	},
	"EXTERNALID" : {
		"inlineEditFieldObject" : "ExternalIdField",
		"queryOperators" : ["e", "n", "l", "g", "m", "h", "c", "k", "s", "i"],
		"needsLookup" : false,
		"filterQueryOperators" : ["e", "n", "c", "k", "s"],
		"inlineEditFieldConstructor" : function () {
			return ExternalIdField;
		},
		"inlineEditExtraData" : ["maxLength"],
		"comparableDatatypes" : ["x"],
		"datatypeLetter" : "x",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : true,
		"isCompond" : false
	},
	"PERSONNAME" : {
		"inlineEditFieldObject" : "PersonNameField",
		"needsLookup" : false,
		"inlineEditFieldConstructor" : function () {
			return PersonNameField;
		},
		"inlineEditExtraData" : ["hasSalutation", "reverse", "picklistId", "labels"],
		"comparableDatatypes" : ["M"],
		"datatypeLetter" : "M",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : true,
		"isCompond" : true
	},
	"BLOB" : {
		"needsLookup" : false,
		"comparableDatatypes" : ["U", "L", "E", "H", "X", "S"],
		"datatypeLetter" : "X",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : false,
		"isCompond" : false
	},
	"PERCENT" : {
		"inlineEditFieldObject" : "NumberField",
		"queryOperators" : ["e", "n", "l", "g", "m", "h"],
		"needsLookup" : false,
		"filterQueryOperators" : ["e", "n", "l", "g", "m", "h"],
		"inlineEditFieldConstructor" : function () {
			return NumberField;
		},
		"comparableDatatypes" : ["P", "N"],
		"datatypeLetter" : "P",
		"isDate" : false,
		"isNumber" : true,
		"inlineEditable" : true,
		"isCompond" : false
	},
	"ADDRESSSTATE" : {
		"inlineEditFieldObject" : "TextField",
		"queryOperators" : ["e", "n", "l", "g", "m", "h", "c", "k", "s", "i"],
		"needsLookup" : false,
		"filterQueryOperators" : ["e", "n", "c", "k", "s"],
		"inlineEditFieldConstructor" : function () {
			return TextField;
		},
		"inlineEditExtraData" : ["maxLength"],
		"comparableDatatypes" : ["U", "L", "E", "H", "X", "S"],
		"datatypeLetter" : "S",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : true,
		"isCompond" : false
	},
	"DATETIME" : {
		"inlineEditFieldObject" : "DateField",
		"queryOperators" : ["e", "n", "l", "g", "m", "h"],
		"needsLookup" : false,
		"filterQueryOperators" : ["e", "n", "l", "g", "m", "h"],
		"inlineEditFieldConstructor" : function () {
			return DateField;
		},
		"inlineEditExtraData" : ["hasTime"],
		"comparableDatatypes" : ["D", "F"],
		"datatypeLetter" : "F",
		"isDate" : true,
		"isNumber" : false,
		"inlineEditable" : true,
		"isCompond" : false
	},
	"ADDRESSCOUNTRY" : {
		"inlineEditFieldObject" : "TextField",
		"queryOperators" : ["e", "n", "l", "g", "m", "h", "c", "k", "s", "i"],
		"needsLookup" : false,
		"filterQueryOperators" : ["e", "n", "c", "k", "s"],
		"inlineEditFieldConstructor" : function () {
			return TextField;
		},
		"inlineEditExtraData" : ["maxLength"],
		"comparableDatatypes" : ["U", "L", "E", "H", "X", "S"],
		"datatypeLetter" : "S",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : true,
		"isCompond" : false
	},
	"PHONE" : {
		"inlineEditFieldObject" : "PhoneField",
		"queryOperators" : ["e", "n", "l", "g", "m", "h", "c", "k", "s", "i"],
		"needsLookup" : false,
		"filterQueryOperators" : ["e", "n", "c", "k", "s"],
		"inlineEditFieldConstructor" : function () {
			return PhoneField;
		},
		"inlineEditExtraData" : ["maxLength", "formatPhone", "addDir"],
		"comparableDatatypes" : ["L", "H", "X", "S"],
		"datatypeLetter" : "H",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : true,
		"isCompond" : false
	},
	"CONTENT" : {
		"inlineEditFieldObject" : "TextField",
		"queryOperators" : ["e", "n", "l", "g", "m", "h", "c", "k", "s", "i"],
		"needsLookup" : false,
		"filterQueryOperators" : ["e", "n", "c", "k", "s"],
		"inlineEditFieldConstructor" : function () {
			return TextField;
		},
		"inlineEditExtraData" : ["maxLength"],
		"comparableDatatypes" : ["9"],
		"datatypeLetter" : "9",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : true,
		"isCompond" : false
	},
	"DATEONLY" : {
		"inlineEditFieldObject" : "DateField",
		"queryOperators" : ["e", "n", "l", "g", "m", "h"],
		"needsLookup" : false,
		"filterQueryOperators" : ["e", "n", "l", "g", "m", "h"],
		"inlineEditFieldConstructor" : function () {
			return DateField;
		},
		"inlineEditExtraData" : ["hasTime"],
		"comparableDatatypes" : ["D", "F"],
		"datatypeLetter" : "D",
		"isDate" : true,
		"isNumber" : false,
		"inlineEditable" : true,
		"isCompond" : false
	},
	"TEXT" : {
		"inlineEditFieldObject" : "TextField",
		"queryOperators" : ["e", "n", "l", "g", "m", "h", "c", "k", "s", "i"],
		"needsLookup" : false,
		"filterQueryOperators" : ["e", "n", "c", "k", "s"],
		"inlineEditFieldConstructor" : function () {
			return TextField;
		},
		"inlineEditExtraData" : ["maxLength"],
		"comparableDatatypes" : ["U", "L", "E", "H", "X", "S"],
		"datatypeLetter" : "S",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : true,
		"isCompond" : false
	},
	"FILE" : {
		"needsLookup" : false,
		"comparableDatatypes" : ["l"],
		"datatypeLetter" : "l",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : false,
		"isCompond" : true
	},
	"EMAIL" : {
		"inlineEditFieldObject" : "TextField",
		"queryOperators" : ["e", "n", "l", "g", "m", "h", "c", "k", "s", "i"],
		"needsLookup" : false,
		"filterQueryOperators" : ["e", "n", "c", "k", "s"],
		"inlineEditFieldConstructor" : function () {
			return TextField;
		},
		"inlineEditExtraData" : ["maxLength"],
		"comparableDatatypes" : ["L", "E", "X", "S"],
		"datatypeLetter" : "E",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : true,
		"isCompond" : false
	},
	"URL" : {
		"inlineEditFieldObject" : "TextField",
		"queryOperators" : ["e", "n", "l", "g", "m", "h", "c", "k", "s", "i"],
		"needsLookup" : false,
		"filterQueryOperators" : ["e", "n", "c", "k", "s"],
		"inlineEditFieldConstructor" : function () {
			return TextField;
		},
		"inlineEditExtraData" : ["maxLength"],
		"comparableDatatypes" : ["U", "L", "X", "S"],
		"datatypeLetter" : "U",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : true,
		"isCompond" : false
	},
	"NAMESPACE" : {
		"needsLookup" : false,
		"comparableDatatypes" : ["n"],
		"datatypeLetter" : "n",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : false,
		"isCompond" : true
	},
	"HTMLMULTILINETEXT" : {
		"inlineEditFieldObject" : "HtmlMultiLineTextField",
		"queryOperators" : ["e", "n", "l", "g", "m", "h", "c", "k", "s", "i"],
		"needsLookup" : false,
		"filterQueryOperators" : ["e", "n", "c", "k", "s"],
		"inlineEditFieldConstructor" : function () {
			return HtmlMultiLineTextField;
		},
		"inlineEditExtraData" : ["maxLength", "isHtml"],
		"comparableDatatypes" : ["5"],
		"datatypeLetter" : "5",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : true,
		"isCompond" : false
	},
	"BIRTHDAY" : {
		"inlineEditFieldObject" : "DateField",
		"queryOperators" : ["e", "n", "l", "g", "m", "h"],
		"needsLookup" : false,
		"filterQueryOperators" : ["e", "n", "l", "g", "m", "h"],
		"inlineEditFieldConstructor" : function () {
			return DateField;
		},
		"inlineEditExtraData" : ["hasTime"],
		"comparableDatatypes" : ["D", "F"],
		"datatypeLetter" : "D",
		"isDate" : true,
		"isNumber" : false,
		"inlineEditable" : true,
		"isCompond" : false
	},
	"ADDRESS" : {
		"inlineEditFieldObject" : "AddressField",
		"queryOperators" : ["e", "n", "l", "g", "m", "h", "c", "k", "s", "i"],
		"needsLookup" : false,
		"filterQueryOperators" : ["e", "n", "c", "k", "s"],
		"inlineEditFieldConstructor" : function () {
			return AddressField;
		},
		"inlineEditExtraData" : ["hasAddressPicklists", "addressFormat", "labels"],
		"comparableDatatypes" : ["A"],
		"datatypeLetter" : "A",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : true,
		"isCompond" : true
	},
	"ENUMORID" : {
		"queryOperators" : ["e", "n", "l", "g", "m", "h", "c", "k", "s", "i"],
		"needsLookup" : true,
		"filterQueryOperators" : ["e", "n", "c", "k", "s"],
		"comparableDatatypes" : ["L", "U", "E", "H", "X", "S"],
		"datatypeLetter" : "L",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : false,
		"isCompond" : false
	},
	"AUTONUMBER" : {
		"inlineEditFieldObject" : "TextField",
		"queryOperators" : ["e", "n", "l", "g", "m", "h", "c", "k", "s", "i"],
		"needsLookup" : false,
		"filterQueryOperators" : ["e", "n", "c", "k", "s"],
		"inlineEditFieldConstructor" : function () {
			return TextField;
		},
		"comparableDatatypes" : ["V"],
		"datatypeLetter" : "V",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : true,
		"isCompond" : false
	},
	"ENTITYID" : {
		"inlineEditFieldObject" : "ForeignKeyField",
		"queryOperators" : ["e", "n", "s"],
		"needsLookup" : false,
		"filterQueryOperators" : ["e", "n", "s"],
		"inlineEditFieldConstructor" : function () {
			return ForeignKeyField;
		},
		"inlineEditExtraData" : ["domain", "useNewLookups", "lookupEntityPrefix", "lookupFieldEnumOrId", "mruServletUri", "mruAutoComplete", "controllerIds", "validationServletURI", "matchBlanks"],
		"comparableDatatypes" : ["Y"],
		"datatypeLetter" : "Y",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : true,
		"isCompond" : false
	},
	"LOCATION" : {
		"queryOperators" : ["w", "y"],
		"needsLookup" : false,
		"filterQueryOperators" : ["w", "y"],
		"comparableDatatypes" : ["g"],
		"datatypeLetter" : "g",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : false,
		"isCompond" : true
	},
	"CURRENCY" : {
		"inlineEditFieldObject" : "NumberField",
		"queryOperators" : ["e", "n", "l", "g", "m", "h"],
		"needsLookup" : false,
		"filterQueryOperators" : ["e", "n", "l", "g", "m", "h"],
		"inlineEditFieldConstructor" : function () {
			return NumberField;
		},
		"comparableDatatypes" : ["C"],
		"datatypeLetter" : "C",
		"isDate" : false,
		"isNumber" : true,
		"inlineEditable" : true,
		"isCompond" : false
	},
	"BASE64" : {
		"needsLookup" : false,
		"comparableDatatypes" : ["4"],
		"datatypeLetter" : "4",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : false,
		"isCompond" : false
	},
	"HTMLSTRINGPLUSCLOB" : {
		"inlineEditFieldObject" : "HtmlStringPlusClobField",
		"queryOperators" : ["e", "n", "l", "g", "m", "h", "c", "k", "s", "i"],
		"needsLookup" : false,
		"filterQueryOperators" : ["e", "n", "c", "k", "s"],
		"inlineEditFieldConstructor" : function () {
			return HtmlStringPlusClobField;
		},
		"inlineEditExtraData" : ["maxLength", "numCols", "numRows", "isHtml", "basePath", "caseSafe18Id", "useCKEditor", "visualforce", "RTA_LIBRARY"],
		"comparableDatatypes" : ["z"],
		"datatypeLetter" : "z",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : true,
		"isCompond" : false
	},
	"CURRENCYCODE" : {
		"inlineEditFieldObject" : "StaticEnumField",
		"queryOperators" : ["e", "n", "l", "g", "m", "h", "c", "k", "s", "i"],
		"needsLookup" : false,
		"filterQueryOperators" : ["e", "n", "c", "k", "s"],
		"inlineEditFieldConstructor" : function () {
			return StaticEnumField;
		},
		"inlineEditExtraData" : ["picklistData"],
		"comparableDatatypes" : ["L", "U", "E", "H", "X", "S"],
		"datatypeLetter" : "L",
		"isDate" : false,
		"isNumber" : false,
		"inlineEditable" : true,
		"isCompond" : false
	}
};
var ZenCss = {
	"lowlight" : "zen-lowlight",
	"handle" : "zen-handle",
	"collapsible" : "zen-collapsible",
	"navViaSearch" : "zen-navViaSearch",
	"arrow" : "zen-arrow",
	"toggleIntro" : "zen-toggleIntro",
	"bodyOverlapsTabs" : "zen-bodyOverlapsTabs",
	"headerBottom" : "zen-headerBottom",
	"deemphasize" : "zen-deemphasize",
	"bodyZen" : "zen-bodyZen",
	"hdTable" : "zen-hdTable",
	"numberedList" : "zen-numberedList",
	"lastUnit" : "zen-lastUnit",
	"bodyInner" : "zen-bodyInner",
	"h5" : "zen-h5",
	"textTop" : "zen-textTop",
	"h4" : "zen-h4",
	"size1of2" : "zen-size1of2",
	"size1of1" : "zen-size1of1",
	"h6" : "zen-h6",
	"size1of4" : "zen-size1of4",
	"h1" : "zen-h1",
	"size1of3" : "zen-size1of3",
	"right" : "zen-right",
	"h3" : "zen-h3",
	"size1of5" : "zen-size1of5",
	"lastItem" : "zen-lastItem",
	"h2" : "zen-h2",
	"textLeft" : "zen-textLeft",
	"pageFooter" : "zen-pageFooter",
	"cropH" : "zen-cropH",
	"cropEllipsis" : "zen-cropEllipsis",
	"expanded" : "zen-expanded",
	"header" : "zen-header",
	"promoBtn" : "zen-promoBtn",
	"cornerRight" : "zen-cornerRight",
	"valueNotOk" : "zen-valueNotOk",
	"notNeeded" : "zen-notNeeded",
	"arrowRight" : "zen-arrowRight",
	"fieldMedium" : "zen-fieldMedium",
	"textCenter" : "zen-textCenter",
	"mrl" : "zen-mrl",
	"alertBackground" : "zen-alertBackground",
	"simple" : "zen-simple",
	"data" : "zen-data",
	"mrn" : "zen-mrn",
	"mrm" : "zen-mrm",
	"assistiveLink" : "zen-assistiveLink",
	"date" : "zen-date",
	"mrs" : "zen-mrs",
	"hdTableMenusCell" : "zen-hdTableMenusCell",
	"hasMessages" : "zen-hasMessages",
	"textRight" : "zen-textRight",
	"instructionsBackground" : "zen-instructionsBackground",
	"left" : "zen-left",
	"mas" : "zen-mas",
	"bgdThemed" : "zen-bgdThemed",
	"mal" : "zen-mal",
	"mam" : "zen-mam",
	"man" : "zen-man",
	"cropV" : "zen-cropV",
	"firstMenuItem" : "zen-firstMenuItem",
	"headerTop" : "zen-headerTop",
	"navViaMenus" : "zen-navViaMenus",
	"field" : "zen-field",
	"mbl" : "zen-mbl",
	"chartHeader" : "zen-chartHeader",
	"toggleOpen" : "zen-toggleOpen",
	"zen" : "zen",
	"mbs" : "zen-mbs",
	"labelMedium" : "zen-labelMedium",
	"chart" : "zen-chart",
	"themed" : "zen-themed",
	"confirm" : "zen-confirm",
	"mbm" : "zen-mbm",
	"mbn" : "zen-mbn",
	"progress" : "zen-progress",
	"body" : "zen-body",
	"sideSouth" : "zen-sideSouth",
	"mts" : "zen-mts",
	"instructions" : "zen-instructions",
	"inner" : "zen-inner",
	"bulletedList" : "zen-bulletedList",
	"mtm" : "zen-mtm",
	"mtn" : "zen-mtn",
	"handleTop" : "zen-handleTop",
	"mtl" : "zen-mtl",
	"accessibleMode" : "zen-accessibleMode",
	"customBranding" : "zen-customBranding",
	"textMiddle" : "zen-textMiddle",
	"basic" : "zen-basic",
	"faqBackground" : "zen-faqBackground",
	"pipedList" : "zen-pipedList",
	"actionBtn" : "zen-actionBtn",
	"skipLinkTarget" : "zen-skipLinkTarget",
	"hasSubmenu" : "zen-hasSubmenu",
	"select" : "zen-select",
	"faq" : "zen-faq",
	"label" : "zen-label",
	"highlightBtn" : "zen-highlightBtn",
	"inputMedium" : "zen-inputMedium",
	"inlineForm" : "zen-inlineForm",
	"input" : "zen-input",
	"pbs" : "zen-pbs",
	"branding" : "zen-branding",
	"tabMenu" : "zen-tabMenu",
	"ptm" : "zen-ptm",
	"active" : "zen-active",
	"ptl" : "zen-ptl",
	"skinnyForm" : "zen-skinnyForm",
	"detailTable" : "zen-detailTable",
	"ptn" : "zen-ptn",
	"listSmall" : "zen-listSmall",
	"pts" : "zen-pts",
	"mvs" : "zen-mvs",
	"legal" : "zen-legal",
	"toggleArrow" : "zen-toggleArrow",
	"handleBottom" : "zen-handleBottom",
	"hdTableSearchCell" : "zen-hdTableSearchCell",
	"infoBackground" : "zen-infoBackground",
	"size3of4" : "zen-size3of4",
	"mvl" : "zen-mvl",
	"detailListExt" : "zen-detailListExt",
	"pbl" : "zen-pbl",
	"inlineList" : "zen-inlineList",
	"pbm" : "zen-pbm",
	"pbn" : "zen-pbn",
	"noTabOrganizer" : "zen-noTabOrganizer",
	"mvm" : "zen-mvm",
	"mvn" : "zen-mvn",
	"size3of5" : "zen-size3of5",
	"standardBackground" : "zen-standardBackground",
	"pas" : "zen-pas",
	"handleMiddle" : "zen-handleMiddle",
	"sidebarCollapsed" : "zen-sidebarCollapsed",
	"cropMe" : "zen-cropMe",
	"prs" : "zen-prs",
	"listMedium" : "zen-listMedium",
	"pal" : "zen-pal",
	"fieldSmall" : "zen-fieldSmall",
	"detailList" : "zen-detailList",
	"stepsHeader" : "zen-stepsHeader",
	"pam" : "zen-pam",
	"main" : "zen-main",
	"pan" : "zen-pan",
	"message" : "zen-message",
	"hasActionsInFoot" : "zen-hasActionsInFoot",
	"unit" : "zen-unit",
	"labelSmall" : "zen-labelSmall",
	"arrowCenter" : "zen-arrowCenter",
	"inputSmall" : "zen-inputSmall",
	"prn" : "zen-prn",
	"box" : "zen-box",
	"disabled" : "zen-disabled",
	"prm" : "zen-prm",
	"prl" : "zen-prl",
	"arrowUp" : "zen-arrowUp",
	"toggleShowAll" : "zen-toggleShowAll",
	"mhl" : "zen-mhl",
	"mhm" : "zen-mhm",
	"mhn" : "zen-mhn",
	"sideWest" : "zen-sideWest",
	"mhs" : "zen-mhs",
	"highlight" : "zen-highlight",
	"info" : "zen-info",
	"columnSort" : "zen-columnSort",
	"help" : "zen-help",
	"lastRow" : "zen-lastRow",
	"warnBackground" : "zen-warnBackground",
	"phs" : "zen-phs",
	"page" : "zen-page",
	"phn" : "zen-phn",
	"phm" : "zen-phm",
	"phl" : "zen-phl",
	"skipLink" : "zen-skipLink",
	"form" : "zen-form",
	"wizardBackground" : "zen-wizardBackground",
	"menu" : "zen-menu",
	"importHeader" : "zen-importHeader",
	"divider" : "zen-divider",
	"sidebar" : "zen-sidebar",
	"formBody" : "zen-formBody",
	"arrowBottom" : "zen-arrowBottom",
	"start" : "zen-start",
	"mediaBody" : "zen-mediaBody",
	"inlineListExt" : "zen-inlineListExt",
	"healthyPlanet" : "zen-healthyPlanet",
	"formFieldInfo" : "zen-formFieldInfo",
	"moreTabs" : "zen-moreTabs",
	"line" : "zen-line",
	"navMenus" : "zen-navMenus",
	"subPageMsg" : "zen-subPageMsg",
	"firstItem" : "zen-firstItem",
	"inputFull" : "zen-inputFull",
	"imgExt" : "zen-imgExt",
	"btn" : "zen-btn",
	"selectArrow" : "zen-selectArrow",
	"end" : "zen-end",
	"note" : "zen-note",
	"valueOk" : "zen-valueOk",
	"requiredMark" : "zen-requiredMark",
	"options" : "zen-options",
	"sideNorth" : "zen-sideNorth",
	"trigger" : "zen-trigger",
	"pvs" : "zen-pvs",
	"corner" : "zen-corner",
	"pvn" : "zen-pvn",
	"pvl" : "zen-pvl",
	"pvm" : "zen-pvm",
	"footer" : "zen-footer",
	"breadcrumbList" : "zen-breadcrumbList",
	"valueStrong" : "zen-valueStrong",
	"noEdit" : "zen-noEdit",
	"arrowMiddle" : "zen-arrowMiddle",
	"innerBackground" : "zen-innerBackground",
	"arrowTop" : "zen-arrowTop",
	"img" : "zen-img",
	"mls" : "zen-mls",
	"mll" : "zen-mll",
	"arrowLeft" : "zen-arrowLeft",
	"pls" : "zen-pls",
	"mlm" : "zen-mlm",
	"mln" : "zen-mln",
	"pln" : "zen-pln",
	"pll" : "zen-pll",
	"plm" : "zen-plm",
	"value" : "zen-value",
	"confirmBackground" : "zen-confirmBackground",
	"listLarge" : "zen-listLarge",
	"sideEast" : "zen-sideEast",
	"pageMessages" : "zen-pageMessages",
	"pageBoxHeader" : "zen-pageBoxHeader",
	"chattyBackground" : "zen-chattyBackground",
	"hasDefault" : "zen-hasDefault",
	"hasTabOrganizer" : "zen-hasTabOrganizer",
	"recycleBackground" : "zen-recycleBackground",
	"collapsed" : "zen-collapsed",
	"formFieldAction" : "zen-formFieldAction",
	"mediaExt" : "zen-mediaExt",
	"checkGroup" : "zen-checkGroup",
	"noSubmenu" : "zen-noSubmenu",
	"media" : "zen-media",
	"hdTableLogoCell" : "zen-hdTableLogoCell",
	"warn" : "zen-warn",
	"errorMessage" : "zen-errorMessage",
	"actionLink" : "zen-actionLink",
	"quickHeader" : "zen-quickHeader",
	"inputLarge" : "zen-inputLarge",
	"stats" : "zen-stats",
	"quick" : "zen-quick",
	"popHeader" : "zen-popHeader",
	"disabledBtn" : "zen-disabledBtn",
	"chartBackground" : "zen-chartBackground",
	"toggle" : "zen-toggle",
	"cornerLeft" : "zen-cornerLeft",
	"midlight" : "zen-midlight",
	"hasActionsInHead" : "zen-hasActionsInHead",
	"callout" : "zen-callout",
	"fieldLarge" : "zen-fieldLarge",
	"assistiveText" : "zen-assistiveText",
	"goToRecord" : "zen-goToRecord",
	"list" : "zen-list",
	"closeBtn" : "zen-closeBtn",
	"pageBoxFooter" : "zen-pageBoxFooter",
	"textBottom" : "zen-textBottom",
	"size2of5" : "zen-size2of5",
	"pageMsg" : "zen-pageMsg",
	"tabCornerRight" : "zen-tabCornerRight",
	"primaryBtn" : "zen-primaryBtn",
	"size2of3" : "zen-size2of3",
	"size4of5" : "zen-size4of5",
	"inputTiny" : "zen-inputTiny"
};
var QueryOperator = {
	"INCLUDES" : {
		"value" : "u"
	},
	"STARTS_WITH" : {
		"value" : "s"
	},
	"EXACT_EQUALS" : {
		"value" : "a"
	},
	"NOT_WITHIN" : {
		"value" : "y"
	},
	"GREATER_THAN" : {
		"value" : "g"
	},
	"RANGE_INCLUSIVE" : {
		"value" : "I"
	},
	"NOT_START_WITH" : {
		"value" : "t"
	},
	"NOT_EQUAL" : {
		"value" : "n"
	},
	"EXCLUDES" : {
		"value" : "x"
	},
	"LESS_OR_EQUAL" : {
		"value" : "m"
	},
	"GREATER_OR_EQUAL" : {
		"value" : "h"
	},
	"CONTAINS" : {
		"value" : "c"
	},
	"LESS_THAN" : {
		"value" : "l"
	},
	"WITHIN" : {
		"value" : "w"
	},
	"NOT_LIKE" : {
		"value" : "j"
	},
	"NOT_EXACT_EQUALS" : {
		"value" : "o"
	},
	"EQUALS" : {
		"value" : "e"
	},
	"RANGE_EXCLUSIVE" : {
		"value" : "E"
	},
	"RANGE_INCL_RIGHT" : {
		"value" : "R"
	},
	"NOT_CONTAIN" : {
		"value" : "k"
	},
	"RANGE_INCL_LEFT" : {
		"value" : "L"
	},
	"LIKE" : {
		"value" : "i"
	}
};
function copyInnerHTML(a, b) {
	b.innerHTML = a.innerHTML
}
function listProperties(a) {
	var b = "",
	c;
	for (c in a)
		b += c + ", ";
	alert(b)
}
function getLocalOffsetTop(a) {
	return getLocalOffset(a, "Top")
}
function getLocalOffsetLeft(a) {
	return getLocalOffset(a, "Left")
}
function getLocalOffset(a, b) {
	var c = a["offset" + b],
	d;
	try {
		d = a.offsetParent
	} catch (e) {
		return c
	}
	for (; d && "static" == getCurrentStyle(d, "position"); ) {
		c += d["offset" + b];
		try {
			d = d.offsetParent
		} catch (f) {
			break
		}
	}
	return c
}
function makeAjaxRequest(a, b) {
	if (window.XMLHttpRequest)
		xmlhttp = new XMLHttpRequest;
	else if (window.ActiveXObject)
		xmlhttp = new ActiveXObject("MSXML2.XMLHTTP");
	else
		return !1;
	xmlhttp.open("GET", a, !0);
	xmlhttp.onreadystatechange = function () {
		4 == xmlhttp.readyState && b && b(xmlhttp.responseText)
	};
	xmlhttp.send(null)
}
function getElementsByClassName(a, b, c) {
	b || (b = document.body);
	if (b.getElementsByClassName) {
		var d = b.getElementsByClassName(a);
		if (strTagNameUpper = c ? c.toUpperCase() : null) {
			if (Array.filter)
				return Array.filter(d, function (a) {
					return a.nodeName == strTagNameUpper
				});
			c = [];
			a = d.length;
			for (b = 0; b < a; b++)
				d[b].nodeName == strTagNameUpper && c.push(d[b]);
			return c
		}
		return d
	}
	c || (c = "*");
	d = "*" == c && b == document.body && document.all ? document.all : b.getElementsByTagName(c);
	c = [];
	a = a.replace(/\-/g, "\\-");
	var e = RegExp("\\b" + a + "\\b");
	a = d.length;
	for (b = 0; b < a; b++)
		e.test(d[b].className) && c.push(d[b]);
	return c
}
function getLoginCookieValue() {
	var a = document.cookie,
	b = a.indexOf("login\x3d");
	if (-1 == b)
		return "";
	var b = b + 6,
	c = a.indexOf(";", b);
	-1 == c && (c = a.length);
	return a.substring(b, c)
}
function assureInt(a) {
	var b;
	return isNaN(b = parseInt(a)) ? 0 : b
}
var isIE = -1 != navigator.appName.indexOf("Microsoft"), isIE5 = 0 < navigator.userAgent.indexOf("MSIE 5.0"), isIE7 = -1 != navigator.userAgent.indexOf("MSIE 7"), isOpera = -1 != navigator.userAgent.indexOf("Opera"), isSafari = -1 != navigator.userAgent.indexOf("AppleWebKit"), isFirefox = -1 != navigator.userAgent.indexOf("Firefox/"), isNetscape = -1 != navigator.userAgent.indexOf("Netscape/"), lastMouseX, lastMouseY, curPopupWindow = null, closeOnParentUnloadWindow = null, helpWindow = null, win = null, editPage = !1, currentEntityId = "", currentEntityId2 =
	"", picklistNAMarker = "_\u0001_";
function EventData(a, b, c, d) {
	this.element = a;
	this.type = b;
	this.handler = c;
	this.useCapture = d
}
var eventRegistry, addEvent = function () {
	return window.addEventListener ? function (a, b, c, d) {
		a.addEventListener(b, c, d);
		eventRegistry || (eventRegistry = [], window.addEventListener("unload", cleanupEvents, !1));
		eventRegistry.push(new EventData(a, b, c, d))
	}
	 : window.attachEvent ? function (a, b, c, d) {
		d = a.attachEvent("on" + b, c);
		eventRegistry || (eventRegistry = [], window.attachEvent("onunload", cleanupEvents));
		eventRegistry.push(new EventData(a, b, c));
		return d
	}
	 : function () {
		return null
	}
}
(), removeEvent = function () {
	return window.removeEventListener ?
	function (a, b, c, d) {
		a.removeEventListener(b, c, d)
	}
	 : window.detachEvent ? function (a, b, c, d) {
		a.detachEvent("on" + b, c)
	}
	 : function () {
		return null
	}
}
();
function cleanupEvents() {
	if (eventRegistry) {
		for (var a = 0; a < eventRegistry.length; a++) {
			var b = eventRegistry[a];
			removeEvent(b.element, b.type, b.handler, b.useCapture)
		}
		eventRegistry = null;
		removeEvent(window, "unload", cleanupEvents, !1)
	}
}
function mouseExited(a, b) {
	for (var c = getEventToElement(a); c && c != document.body; ) {
		if (c == b)
			return !1;
		c = c.parentNode
	}
	return !0
}
function getEvent(a) {
	return a || window.event
}
function getEventTarget(a) {
	return window.event ? a.srcElement : a.target
}
function getEventToElement(a) {
	return a.relatedTarget ? a.relatedTarget : a.toElement
}
function eventCancelBubble(a) {
	a.cancelBubble = !0;
	a.stopPropagation && a.stopPropagation()
}
var beenFocused = !1, focusedElement = null, textAreaTimer = null;
function markFocused() {
	beenFocused = !0
}
addEvent(document, "mousedown", markFocused);
function trackFocused(a) {
	a || (a = window.event);
	focusedElement = a && a.target || null
}
addEvent(document, "focus", trackFocused);
function reFocus() {
	if (focusedElement && focusedElement.focus) {
		var a = focusedElement.id;
		if (a) {
			for (var b = reFocus.arguments, c = 0; c < b.length; c += 2)
				if (a == b[c]) {
					a = document.getElementById(b[c + 1]);
					hiddenOrDisabled(a) || a.focus();
					focusedElement = a;
					return
				}
			if ((a = document.getElementById(a)) && a.focus && !hiddenOrDisabled(a))
				a.focus(), focusedElement = a
		}
	}
}
function setEntityInformation(a, b, c, d, e, f, g) {
	currentEntityId = d;
	currentEntityId2 = g;
	g = self.getAccessibleParentWindow ? getAccessibleParentWindow(self) : self;
	editPage = e;
	f && g && (g.sendCTIMessage && g.sendCTIMessage("ADD_LOG_OBJECT?ID\x3d" + d + "\x26OBJECT_LABEL\x3d" + escape(b) + "\x26ENTITY_NAME\x3d" + c + "\x26OBJECT_NAME\x3d" + escape(a)), g.cleanupClickToDial && g.cleanupClickToDial());
	if (g && g.Sfdc && (b = g.Sfdc.ns("Sfdc.support.api"), b.pageInfo = b.pageInfo || {}, b.pageInfo[d] = {
				url : location.href,
				objectId : d,
				objectName : a,
				object : c
			},
			g.Sfdc.interaction && (g.Sfdc.interaction.currentEntityId = d, g.Sfdc.interaction.isListenerEnabled.onFocus && g.Sfdc.support.api.pageInfo[d])))
		g.Sfdc.interaction.onFocus()
}
function setLastMousePosition(a) {
	-1 != navigator.appName.indexOf("Microsoft") && (a = window.event);
	lastMouseX = a.screenX;
	lastMouseY = a.screenY
}
function openClickout(a) {
	openClickoutWithSize(a, 640, 480)
}
function openClickoutWithSize(a, b, c) {
	window.open(a, "_blank", "width\x3d" + b + ",height\x3d" + c + ",dependent\x3dno,resizable\x3dyes,toolbar\x3dyes,status\x3dyes,directories\x3dyes,menubar\x3dyes,scrollbars\x3d1", !1)
}
function openIntegration(a, b, c) {
	a = window.open(a, "_blank", b, !1);
	2 == c ? a.moveTo(0, 0) : 0 == c && (a.moveTo(0, 0), a.resizeTo(self.screen.width, self.screen.height))
}
function openPopup(a, b, c, d, e, f) {
	openPopupFocus(a, b, c, d, e, f, !0)
}
function openPopupFocusEscapePounds(a, b, c, d, e, f, g) {
	openPopupFocus(a.replace("#", "%23"), b, c, d, e, f, g)
}
function openPopupFocus(a, b, c, d, e, f, g, m) {
	closePopup();
	f && (0 > lastMouseX - c && (lastMouseX = c), lastMouseY + d > screen.height && (lastMouseY -= lastMouseY + d + 50 - screen.height), lastMouseX -= c, lastMouseY += 10, e += ",screenX\x3d" + lastMouseX + ",left\x3d" + lastMouseX + ",screenY\x3d" + lastMouseY + ",top\x3d" + lastMouseY);
	g ? (curPopupWindow = window.open(a, b, e, !1), curPopupWindow.focus()) : (win = window.open(a, b, e, !1), win.focus());
	m && (closeOnParentUnloadWindow = win)
}
function openPopupFocusWithOffset(a, b, c, d) {
	win = window.open(a, "", b);
	win.moveTo(window.pageXOffset + c, window.pageYOffset + d);
	win.focus()
}
var closetimer, ie9 = 0 <= navigator.userAgent.indexOf("MSIE 9");
function closePopupOnBodyFocus() {
	ie9 ? (closetimer && clearTimeout(closetimer), closetimer = window.setTimeout(function () {
				closetimer = null;
				closePopup()
			}, 500)) : closePopup()
}
function closePopup() {
	closetimer && (clearTimeout(closetimer), closetimer = null);
	if (null != curPopupWindow) {
		try {
			if (curPopupWindow.confirmOnClose && curPopupWindow.confirm(curPopupWindow.confirmOnCloseLabel))
				return curPopupWindow.confirmOnClose = !1, curPopupWindow.focus(), !1;
			curPopupWindow.close()
		} catch (a) {}

		curPopupWindow = null
	}
}
var modalWindow = null;
function ignoreModalEvents(a) {
	return !1
}
function handleModalFocus() {
	modalWindow && (modalWindow.closed ? (window.top.releaseEvents(Event.CLICK | Event.FOCUS), window.top.onclick = "") : modalWindow.focus());
	return !1
}
function invokeResultFunc() {
	(window.dialogArguments ? window.dialogArguments : window.opener.resultFunc)()
}
function openPopupModal(a, b, c, d, e, f, g) {
	if (window.showModalDialog)
		window.showModalDialog(a, null == f ? window : f, e);
	else if (window.top.captureEvents)
		window.top.captureEvents(Event.CLICK | Event.FOCUS), window.top.onclick = ignoreModalEvents, window.top.onfocus = handleModalFocus, modalWindow = window.open(a, b, e + ",modal\x3dyes"), f && (window.resultFunc = f);
	else
		return g ? g() : openPopup(a, b, c, d, e, !1)
}
var clickedLink, warningText;
function confirmPopup(a, b, c, d, e, f) {
	clickedLink = e.href ? e.href : e;
	warningText = f;
	e = new Function("window.location \x3d clickedLink");
	e.window = window;
	openPopupModal(a, "_blank", b, c, d, e, new Function("return confirm(warningText)"));
	return !1
}
function openLookup(a, b, c, d) {
	"1" == c && (a += d);
	openPopup(a, "lookup", 350, 480, "width\x3d" + b + ",height\x3d480,toolbar\x3dno,status\x3dno,directories\x3dno,menubar\x3dno,resizable\x3dyes,scrollable\x3dno", !0)
}
function pick(a, b, c, d) {
	document.getElementById(a)[b].value = c;
	if (d)
		document.getElementById(a)[b].onchange();
	closePopup();
	return !1
}
function pickSubmit(a, b, c, d) {
	document.getElementById(a)[b].value = c;
	if (d)
		document.getElementById(a)[b].onchange();
	document.getElementById(a).submit();
	closePopup();
	hiddenOrDisabled(document.getElementById(a)[b]) || (document.getElementById(a)[b].focus(), document.getElementById(a)[b].select());
	return !1
}
function hiddenOrDisabled(a) {
	do {
		if (null == a || "hidden" == a.type || a.disabled || "none" == getCurrentStyle(a, "display") || "hidden" == getCurrentStyle(a, "visibility"))
			return !0;
		a = a.parentNode
	} while (null != a && "BODY" != a.tagName);
	return !1
}
function hiddenOrDisabledOrReadOnly(a) {
	do {
		if (null == a || "hidden" == a.type || a.readOnly || a.disabled || "none" == getCurrentStyle(a, "display") || "hidden" == getCurrentStyle(a, "visibility"))
			return !0;
		a = a.parentNode
	} while (null != a && "BODY" != a.tagName);
	return !1
}
function pickcolor(a, b, c) {
	var d = parseInt(c, 16);
	a = document.getElementById(a)[b];
	a.setValue ? a.setValue(d) : a.value = d;
	document.getElementById(b + "cell").style.backgroundColor = "#" + c;
	closePopup();
	return !1
}
function comboBoxPick(a, b, c, d) {
	a = document.getElementById(a)[b];
	null != a && (c = eval(c), null != c && (0 <= d && d < c.length) && (a.value = c[d], hiddenOrDisabled(a) || (a.focus(), a.select())));
	closePopup();
	return !1
}
function attachEventToElement(a, b, c) {
	a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
}
function navigateToUrl(a) {
	window.location = a
}
function hitUrl(a) {
	var b = document.getElementsByTagName("body")[0],
	c = document.getElementById("goToUrlFrame");
	c || (c = document.createElement("div"), c.style.display = "none", b.appendChild(c), c.innerHTML = '\x3ciframe src\x3d"javascript:false" style\x3d"display:none;" id\x3d"goToUrlFrame" name\x3d"goToUrlFrame"\x3e\x3c/iframe\x3e', c = document.getElementById("goToUrlFrame"), c.title = "blank - ignore");
	c = document.createElement("form");
	b.appendChild(c);
	c.target = "goToUrlFrame";
	c.method = "POST";
	c.action = a;
	c.submit();
	b.removeChild(c)
}
function doLookupPick(a, b, c, d, e, f, g, m, l) {
	var h = b.parentIdElement,
	k = b.parentEditElement,
	n = k.name,
	p = b.parentEditOldValueElement;
	if ("select-one" == h.type) {
		e = !1;
		for (i = 0; i < h.options.length; i++)
			if (h.options[i].value == c) {
				h.selectedIndex = i;
				e = !0;
				break
			}
		e || (h.options[h.options.length] = new Option(d, c), h.selectedIndex = h.options.length - 1);
		k.value = d;
		p.value = d;
		!hiddenOrDisabled(h) && "function" == typeof h.onchange && (c = h.value, window.Sfdc && (Sfdc.Event && Sfdc.Event.fireEvent) && Sfdc.Event.fireEvent(h, "change"), h.value = c,
			k.value = d)
	} else {
		if (b.extraNameElement)
			if (f) {
				if ("undefined" !== typeof b.extraNameElement.value && (0 == b.extraNameElement.value.length || b.extraNameElement.value == k.value))
					b.extraNameElement.value = d
			} else if ((e || null == b.extraNameElement.value || "" == b.extraNameElement.value) && null != m && "" != m)
				b.extraNameElement.value = m, b.extraIdElement && (b.extraIdElement.value = l), b.extraEditOldValueElement && (b.extraEditOldValueElement.value = m);
		h.value = c;
		k.value = d;
		p.value = d;
		window.ForeignKeyInputElement && ForeignKeyInputElement.dispatchLookupChange(k.name);
		window.sfdcPage && sfdcPage.getFieldById && (p = sfdcPage.getFieldById(k.name)) && p.lookupPickCalled();
		!hiddenOrDisabled(k) && "function" == typeof k.onchange && (window.Sfdc && (Sfdc.Event && Sfdc.Event.fireEvent) && Sfdc.Event.fireEvent(k, "change"), h.value = c, k.value = d)
	}
	b.relatedFieldElement && (b.relatedFieldElement.value = g);
	var q = getElementByIdCS(n + "_onpk");
	q && "" != q.value && setTimeout(function () {
		eval(q.value)
	}, 1);
	if ((d = getElementsByNameCS(n + "_lspf")[0]) && "1" == d.value) {
		if (n = getElementsByNameCS(n + "_lspfsub")[0])
			n.value =
				"1";
		document[a].submit()
	}
	b.modElement && (b.modElement.value = "1");
	closePopup();
	hiddenOrDisabled(k) || (k.focus(), k.select());
	return !1
}
function lookupPick(a, b, c, d, e, f, g, m) {
	function l(a, b) {
		for (var c = 0, d = a.length; c < d; c++)
			if (a[c].getAttribute("name") === b)
				return a[c]
	}
	var h = document.forms[a];
	b = {
		parentIdElement : l(Sfdc.select(Sfdc.String.format("input[name\x3d'{name}'], select[name\x3d'{name}']", {
					name : b
				}), h), b),
		parentEditElement : l(Sfdc.select(Sfdc.String.format("input[name\x3d'{name}'], select[name\x3d'{name}']", {
					name : c
				}), h), c),
		parentEditOldValueElement : l(Sfdc.select(Sfdc.String.format("input[name\x3d'{name}'], select[name\x3d'{name}']", {
					name : c + "_lkold"
				}), h), c + "_lkold"),
		relatedFieldElement : getElementsByNameCS(d)[0],
		extraNameElement : getElementsByNameCS(m)[0],
		modElement : getElementsByNameCS(c + "_mod")[0]
	};
	return doLookupPick(a, b, e, f, !1, !0, g)
}
function lookupPick2(a, b, c, d, e, f, g, m, l, h) {
	function k(a, b) {
		for (var c = 0, d = a.length; c < d; c++)
			if (a[c].getAttribute("name") === b)
				return a[c]
	}
	var n = document.forms[a];
	b = {
		parentIdElement : k(Sfdc.select(Sfdc.String.format("input[name\x3d'{name}'], select[name\x3d'{name}']", {
					name : b
				}), n), b),
		parentEditElement : k(Sfdc.select(Sfdc.String.format("input[name\x3d'{name}'], select[name\x3d'{name}']", {
					name : c
				}), n), c),
		parentEditOldValueElement : k(Sfdc.select(Sfdc.String.format("input[name\x3d'{name}'], select[name\x3d'{name}']", {
					name : c + "_lkold"
				}), n), c + "_lkold"),
		extraNameElement : getElementsByNameCS(f)[0],
		extraIdElement : getElementsByNameCS(m)[0],
		extraEditOldValueElement : getElementsByNameCS(f + "_lkold")[0],
		modElement : getElementsByNameCS(c + "_mod")[0]
	};
	return doLookupPick(a, b, d, e, h, !1, null, g, l)
}
function searchEntityTwo(a, b, c) {
	b = document.getElementById(b);
	if (a) {
		if (b.checked = !0, a = document.getElementsByName(c))
			for (i = 0; i < a.length; ++i)
				a[i] != b && (a[i].checked = !1)
	} else
		b.checked = !1
}
function lookupPhonePick(a, b) {
	var c = document.getElementById(a);
	c.value = b;
	closePopup();
	c.focus();
	c.select()
}
function setFocusOnLoad() {
	beenFocused || setFocus()
}
function elementFocus(a) {
	hiddenOrDisabled(a) || a.focus()
}
function elementSelect(a) {
	hiddenOrDisabled(a) || a.select()
}
function setFocus() {
	for (var a = 1; 5 > a; a++)
		for (var b = a, c = 0; c < document.forms.length; c++)
			for (var d = document.forms[c], e = 0; e < d.elements.length; e++) {
				var f = d.elements[e];
				if (f.tabIndex == b) {
					if (("text" == f.type || "textarea" == f.type || "password" == f.type) && !hiddenOrDisabledOrReadOnly(f) && "sbstr" != f.name && 0 != f.name.indexOf("owner") && 0 != f.name.indexOf("tsk1") && 0 != f.name.indexOf("evt1") && "tsid" !== f.name)
						return f.focus(), "text" == f.type && f.select(), !0;
					b++;
					e = 0
				}
			}
	for (c = 0; c < document.forms.length; c++)
		if (d = document.forms[c],
			a = d.name, "sbsearch" != a && "srch_solution_sbar" != a && "srch_product_sbar" != a && "srch_document_sbar" != a && "srch_article_sbar" != a)
			for (e = 0; e < d.elements.length; e++)
				if (f = d.elements[e], ("text" == f.type || "textarea" == f.type || "password" == f.type) && !hiddenOrDisabledOrReadOnly(f) && 0 != f.name.indexOf("owner") && "tsid" !== f.name)
					return f.focus(), "text" == f.type && f.select(), !0;
	return !0
}
function setNamedFocus(a) {
	for (var b = 0; b < document.forms.length; b++)
		for (var c = document.forms[b], d = 0; d < c.elements.length; d++) {
			var e = c.elements[d];
			if (e.name == a && !hiddenOrDisabled(e))
				return e.focus(), "text" == e.type && !hiddenOrDisabled(e) && e.select(), !0
		}
	return !0
}
function formatPhoneOnEnter(a, b) {
	getEvent(b).keyCode == KEY_ENTER && formatPhone(a)
}
function formatPhone(a) {
	a.value = trim(a.value);
	var b = a.value,
	c = "",
	d = -1;
	if (0 < b.length && "+" != b.charAt(0)) {
		var e = 0;
		"1" == b.charAt(0) && (b = b.substring(1, b.length));
		for (i = 0; i < b.length; i++) {
			var f = b.charAt(i);
			"0" <= f && "9" >= f && (0 == e ? c += "(" : 3 == e ? c += ") " : 6 == e && (c += "-"), c += f, e++);
			if (!("0" <= f && "9" >= f) && " " != f && "-" != f && "." != f && "(" != f && ")" != f) {
				d = i;
				break
			}
		}
		0 <= d && (c += " " + b.substring(d, b.length));
		10 == e && 40 >= c.length && (a.value = c)
	}
	return !0
}
function clearcols() {
	for (var a = 0; a < document.forms.length; a++)
		for (var b = 0; b < document.forms[a].elements.length; b++) {
			var c = document.forms[a].elements[b];
			if ("c" == c.name || "c_" == c.name.substring(0, 2))
				c.checked = !1
		}
}
function setcols() {
	for (var a = 0; a < document.forms.length; a++)
		for (var b = 0; b < document.forms[a].elements.length; b++) {
			var c = document.forms[a].elements[b];
			if ("c" == c.name || "c_" == c.name.substring(0, 2))
				c.checked = !0
		}
}
function setUsername(a, b, c, d) {
	0 == a.value.length && (a.value = b.value.substring(0, 1).toLowerCase() + c.value.toLowerCase() + "@" + d.value)
}
function setAlias(a, b, c) {
	0 == a.value.length && (a.value = b.value.substring(0, 1).toLowerCase() + c.value.substring(0, 4).toLowerCase())
}
function popWin(a) {
	closePopup();
	curPopupWindow = window.open(a, "win", "toolbar\x3d0,location\x3d0,directories\x3d0,status\x3d0,menubar\x3d0,scrollbars\x3d1,resizable\x3d0,width\x3d550,height\x3d300", !1)
}
function popWin2(a) {
	win = window.open(a, "win", "toolbar\x3d0,location\x3d0,directories\x3d0,status\x3d0,menubar\x3d0,scrollbars\x3d1,resizable\x3d0,width\x3d720,height\x3d500", !1)
}
function adminWin(a) {
	win = window.open(a, "win", "toolbar\x3d1,location\x3d1,directories\x3d0,status\x3d1,menubar\x3d1,scrollbars\x3d1,resizable\x3d1,width\x3d800,height\x3d600", !1)
}
function printWin(a) {
	popWin = window.open(a, "win", "dependent\x3dno,toolbar\x3d1,directories\x3d0,location\x3d0,status\x3d1,menubar\x3d1,scrollbars\x3d1,resizable\x3d1,width\x3d705,height\x3d400", !1);
	popWin.focus()
}
function moveSelectElement3(a, b, c, d, e) {
	if (-1 < a.selectedIndex) {
		for (i = 0; i < a.length; ++i) {
			var f = a.options[i];
			if (f.selected)
				if (f.text != c) {
					var g = new Option(f.text, f.value);
					g.title = f.title;
					0 < b.options.length && b.options[0].text == d ? (b.options[0] = g, b.selectedIndex = 0) : (b.options[b.options.length] = g, b.selectedIndex = b.options.length - 1)
				} else
					a.selectedIndex = -1
		}
		e || removeSelectElement3(a, c)
	}
}
function sortOrderNumeric(a, b) {
	return a - b
}
function sortOrderNumericReverse(a, b) {
	return b - a
}
function moveSelectElementIds(a, b, c, d, e) {
	if (c) {
		b = b.options;
		for (i = 0; i < c.length; i++) {
			var f = a.options[c[i]],
			g = new Option(f.text, f.value);
			g.title = f.title;
			1 == b.length && b[0].text == e ? (b[0] = g, b[0].selected = !0) : b[b.length] = g
		}
		if (!d) {
			c = c.sort(sortOrderNumericReverse);
			for (i = 0; i < c.length; i++)
				a.options[c[i]] = null;
			0 == a.length && (c = new Option(e, e), a.options[0] = c)
		}
	}
}
function moveOption(a, b, c, d, e, f, g, m, l) {
	DuelingListBoxesElement.moveOption(a, b, c, d, e, f, g, m, l)
}
function removeSelectElement3(a, b) {
	if (-1 < a.selectedIndex) {
		for (i = a.length - 1; -1 < i; i--)
			a.options[i].selected && (a.options[i] = null);
		if (0 == a.length) {
			var c = new Option(b, b);
			a.options[0] = c
		}
	}
}
function moveUp(a, b, c, d, e) {
	return DuelingListBoxesElement.moveUp(a, b, c, d, e)
}
function moveDown(a, b, c, d, e) {
	return DuelingListBoxesElement.moveDown(a, b, c, d, e)
}
function moveTop(a, b) {
	return DuelingListBoxesElement.moveTop(a, b)
}
function moveBottom(a, b) {
	DuelingListBoxesElement.moveBottom(a, b)
}
function saveAllSelected(a, b, c, d, e) {
	DuelingListBoxesElement.saveAllSelected(a, b, c, d, e)
}
function ddChangeAllElements(a, b) {
	var c = a.selectedIndex;
	if (0 < c)
		for (var d = 0; d < b.length; d++) {
			var e = getElementByIdCS(b[d]);
			e && (e.selectedIndex = c - 1)
		}
}
function ddElementChange(a, b, c) {
	a = getElementByIdCS(b[0]).selectedIndex;
	for (var d = 1; d < b.length; d++)
		if (getElementByIdCS(b[d]).selectedIndex != a) {
			a = -1;
			break
		}
	getElementByIdCS(c).selectedIndex = a + 1
}
function ddRadioClicked(a, b, c) {
	a = "all" == a.value;
	document.getElementById(c).disabled = !a;
	for (var d = 0; d < b.length; d++) {
		var e = getElementByIdCS(b[d]);
		e && (e.disabled = a);
		if (a) {
			var f = getElementByIdCS(c).selectedIndex;
			0 < f && (e.selectedIndex = f - 1)
		}
	}
}
function openwizard(a, b, c) {
	b = window.open("", b, "toolbar\x3d0,location\x3d0,directories\x3d0,status\x3d0,menubar\x3d0,scrollbars\x3d1,resizable\x3d" + c + ",width\x3d700,height\x3d550,screenx\x3d50,screeny\x3d10,left\x3d50,top\x3d10", !1);
	if ("" == b.document.URL || "about:blank" == b.document.URL)
		b.location = a;
	b.focus()
}
function openwizard2(a, b, c) {
	window.open(a, b, "toolbar\x3d0,location\x3d0,directories\x3d0,status\x3d0,menubar\x3d0,scrollbars\x3d1,resizable\x3d" + c + ",width\x3d700,height\x3d550,screenx\x3d50,screeny\x3d10,left\x3d50,top\x3d10", !1)
}
function escapeUTF(a) {
	var b = "";
	for (i = 0; i < a.length; i++) {
		var c = a.charCodeAt(i);
		127 >= c ? b += escape(a.charAt(i)) : 2047 >= c ? b += "%" + (c >> 6 | 192).toString(16) + "%" + (c & 63 | 128).toString(16) : 2048 <= c && (b += "%" + (c >> 12 | 224).toString(16) + "%" + (c >> 6 & 63 | 128).toString(16) + "%" + (c & 63 | 128).toString(16))
	}
	return b
}
function openRefer(a) {
	window.open(a, "referv2", "resizable\x3dno,toolbar\x3dno,status\x3dno,directories\x3dno,scrollbars\x3dyes,width\x3d420,height\x3d500", !1)
}
function changeOpenerWindowLocation(a) {
	null == window.top.opener || window.top.opener.closed ? window.top.open(a) : (window.top.opener.location.href = a, window.top.opener.focus())
}
function verifyUnderLimit(a, b, c, d) {
	var e = 0;
	for (i = 0; i < a.elements.length; i++)
		if (a.elements[i].name == b && a.elements[i].checked && ++e > c)
			return alert(d), !1;
	return !0
}
function verifyChecked(a, b, c) {
	for (i = 0; i < a.elements.length; i++)
		if (a.elements[i].name == b && a.elements[i].checked)
			return !0;
	alert(c);
	return !1
}
function verifyCheckedByPrefix(a, b, c) {
	for (i = 0; i < a.elements.length; i++)
		if (0 == a.elements[i].name.indexOf(b) && a.elements[i].checked)
			return !0;
	alert(c);
	return !1
}
function verifySingleCheckedByPrefix(a, b, c) {
	var d = 0;
	for (i = 0; i < a.elements.length; i++)
		0 == a.elements[i].name.indexOf(b) && a.elements[i].checked && d++;
	if (1 == d)
		return !0;
	alert(c);
	return !1
}
function verifyCheckedWarning(a, b, c) {
	var d = !1;
	for (i = 0; i < a.elements.length; i++)
		a.elements[i].name == b && a.elements[i].checked && (d = !0);
	return d ? window.confirm(c) : !0
}
function submitFormActionURL(a, b) {
	a.action = b;
	a.submit()
}
function updateToggleAllBox(a, b, c) {
	var d = null;
	"undefined" != typeof c ? d = document.getElementById(c) : a.allBox && (d = a.allBox);
	null != d && (d.checked = allChecked(a, b))
}
function allChecked(a, b) {
	for (var c = 0, c = 0; c < a.elements.length; c++) {
		var d = a.elements[c];
		if (d.name == b && "checkbox" == d.type && !1 == d.checked)
			return !1
	}
	return !0
}
function SelectChecked(a, b, c) {
	for (var d = 0, d = 0; d < a.elements.length; d++)
		a.elements[d].name == b && !1 == a.elements[d].disabled && (a.elements[d].checked = c)
}
function SelectAllOrNoneByCheckbox(a, b, c) {
	for (var d = c.parentNode; d && "form" !== d.tagName; )
		d = d.parentNode;
	null != d && (a = d);
	SelectChecked(a, b, c.checked)
}
function loader() {
	var a = getCookie("login");
	0 < a.length ? (document.login_noop.un_noop.value = a, document.login.un.value = a, document.login.pw.focus()) : document.login_noop.un_noop.focus();
	document.login.width.value = screen.width;
	document.login.height.value = screen.height
}
function handleSelectAllNoneCheckboxClick(a, b) {
	for (var c = 0; c < b.length; c++) {
		var d = document.getElementById(b[c]);
		d && (d.checked = a.checked)
	}
}
function getObjX(a) {
	for (var b = 0; null != a; )
		b += a.offsetLeft, a = a.offsetParent;
	return b
}
function getObjY(a) {
	for (var b = 0; null != a; )
		b += a.offsetTop, a = a.offsetParent;
	return b
}
function getScrollX() {
	if (window.pageXOffset)
		return window.pageXOffset;
	if (document.documentElement && document.documentElement.scrollLeft)
		return document.documentElement.scrollLeft;
	if (document.body.scrollHeight)
		return document.body.scrollLeft
}
function getScrollY() {
	if (window.pageYOffset)
		return window.pageYOffset;
	if (document.documentElement && document.documentElement.scrollTop)
		return document.documentElement.scrollTop;
	if (document.body.scrollWidth)
		return document.body.scrollTop
}
function getMouseX(a) {
	return a.pageX ? a.pageX : getScrollX() + a.clientX
}
function getMouseY(a) {
	return a.pageY ? a.pageY : getScrollY() + a.clientY
}
function getSrcElement(a) {
	a = getEvent(a);
	return a.srcElement ? a.srcElement : a.currentTarget
}
function ltrim(a) {
	return a.replace(/^\s*/, "")
}
function rtrim(a) {
	return a.replace(/\s*$/, "")
}
function trim(a) {
	return rtrim(ltrim(a))
}
function escapeHTML(a) {
	a && a.replace && (a = a.replace(/&/g, "\x26amp;"), a = a.replace(/</g, "\x26lt;"), a = a.replace(/>/g, "\x26gt;"));
	return a
}
function unescapeHTML(a) {
	a && a.replace && (a = a.replace(/\&amp;/g, "\x26"), a = a.replace(/&lt;/g, "\x3c"), a = a.replace(/&gt;/g, "\x3e"));
	return a
}
function unescapeJsInHtml(a) {
	a && a.replace && (a = a.replace(/\\\\/g, "\\"), a = a.replace(/\\'/g, "'"), a = a.replace(/\\n/g, "\n"), a = a.replace(/&quot;/g, '"'));
	return a
}
function unescapeXML(a) {
	a && a.replace && (a = a.replace(/\&amp;/g, "\x26"), a = a.replace(/&lt;/g, "\x3c"), a = a.replace(/&gt;/g, "\x3e"), a = a.replace(/&quot;/g, '"'), a = a.replace(/&apos;/g, "'"));
	return a
}
function isValidEmail(a, b) {
	if (!a)
		return !1;
	a = a.toLowerCase();
	var c = a.split("@");
	if (2 != c.length || 0 > c[1].indexOf("."))
		return !1;
	if (b) {
		for (var d = b.split(","), e = 0; e < d.length; e++) {
			var f = d[e];
			if (c[1] == f || 0 < c[1].indexOf(f, c[1].length - f.length) && "." == c[1].charAt(c[1].length - f.length - 1))
				return !0
		}
		return !1
	}
	return !0
}
function isValidDomain(a) {
	if (!/^[a-zA-Z0-9\-\.]+$/.test(a) || 0 > a.indexOf(".") || 0 <= a.indexOf("..") || (0 <= a.indexOf(".-") || 0 <= a.indexOf("-.")) || ("." == a.charAt(0) || "-" == a.charAt(0)) || ("." == a.charAt(a.length - 1) || "-" == a.charAt(a.length - 1)) || "localhost.localdomain" == a.toLowerCase())
		return !1;
	a = a.split(".");
	return !a || 2 > a.length || 0 == a[0].length || 1 >= a[1].length ? !1 : !0
}
function setCookie(a, b, c, d, e) {
	document.cookie = a + "\x3d" + (e ? encodeURIComponent : escape)(b) + (c ? "; expires\x3d" + c.toGMTString() : "") + (d ? "; path\x3d" + d : "; path\x3d/")
}
function getCookie(a) {
	var b = document.cookie;
	a += "\x3d";
	var c = b.indexOf("; " + a);
	if (-1 == c) {
		if (c = b.indexOf(a), 0 != c)
			return null
	} else
		c += 2;
	var d = document.cookie.indexOf(";", c);
	-1 == d && (d = b.length);
	return unescape(b.substring(c + a.length, d))
}
function deleteCookie(a, b) {
	if (getCookie(a)) {
		var c = new Date((new Date).getTime() + -1E4);
		document.cookie = a + "\x3d-deleted-" + (b ? "; path\x3d" + b : "; path\x3d/") + "; expires\x3d" + c.toGMTString()
	}
}
function addTwistCookie(a, b, c) {
	var d = getCookie(a);
	c = b + ":" + (c ? "1" : "0") + ",";
	if (d) {
		for (var e = d.indexOf(b); -1 < e; ) {
			var f = e + 18;
			d.substring(e, f);
			d = d.substring(0, e) + d.substring(f, d.length);
			e = d.indexOf(b)
		}
		c = d + c
	}
	setCookie(a, c)
}
function handleTextAreaElementChange(a, b, c, d) {
	handleTextAreaElementChangeWithByteCheck(a, b, 0, c, d)
}
function handleTextAreaElementChangeWithByteCheck(a, b, c, d, e) {
	textAreaTimer && clearTimeout(textAreaTimer);
	textAreaTimer = setTimeout(function () {
			var f = document.getElementById(a),
			g = document.getElementById(a + "_counter"),
			m = 0;
			if (!f || !g)
				return b;
			var l = f.value.length;
			if (0 < l && !isIE && !isIE5) {
				var h = f.value.match(/\n/g);
				h && (m = h.length)
			}
			h = b - (l + m);
			50 < h && 0 < c && (l = unescape(encodeURIComponent(f.value)).length, l += m, f = c - l, 50 > f && (h = f));
			Sfdc.Dom.addClass(g.parentNode, "textCounterMiddle");
			0 > h ? (Sfdc.Dom.addClass(g.parentNode,
					"over"), Sfdc.Dom.removeClass(g.parentNode, "warn"), g.innerHTML = -1 * h + " " + e) : 50 > h ? (Sfdc.Dom.removeClass(g.parentNode, "over"), Sfdc.Dom.addClass(g.parentNode, "warn"), g.innerHTML = h + " " + d) : Sfdc.Dom.removeClass(g.parentNode, ["over", "warning"])
		}, 500)
}
var filterLookupValueElem;
function openFilterLookupWindow(a, b, c, d) {
	filterLookupValueElem = d;
	c = document.getElementById(c);
	c = "number" == typeof c.selectedIndex ? c.options[c.selectedIndex] : c;
	if (null != a || null == b) {
		a = document.getElementById(a);
		d = a.action;
		var e = a.target,
		f = a.lookup.value;
		null != b && (a.action = b);
		a.target = "filter_lookup";
		a.lookup.value = c.value;
		a.submit();
		a.action = d;
		a.target = e;
		a.lookup.value = f
	} else
		a = 0 <= b.indexOf("?") ? "\x26" : "?", curPopupWindow.location.href = b + a + "lookup\x3d" + c.value + "\x26workflow\x3d1"
}
function submitCalcAgg(a, b) {
	var c = document.report;
	c || (c = opener.document.report);
	c.target = "aggcalc_popup";
	c.calcagg_request.value = a;
	c.calcagg_index.value = b;
	if ("new" == a)
		clearCalcAgg(c, "_v");
	else if ("edit" == a)
		copyCalcaggParams(c, b, c, "_v");
	else if ("done" == a || "validate" == a) {
		var d = document.getElementById("calcagg_form");
		copyCalcaggParams(d, "_v", c, "_v")
	}
	c.nav.value = "agg";
	c.submit();
	c.calcagg_request.value = "";
	c.target = ""
}
function finishValidCalcAgg(a) {
	var b = opener.document.getElementById("report"),
	c = document.getElementById("calcagg_form");
	b.calcagg_index.value = a;
	copyCalcaggParams(c, "_v", b, a);
	b.calcagg_active_v.value = c.calcagg_name_v.value;
	b.nav.value = "agg";
	b.submit();
	self.close()
}
var calcagg_params = "calcagg_label calcagg_name calcagg_formula calcagg_type calcagg_desc calcagg_scale".split(" ");
function clearCalcAgg(a, b) {
	for (var c in calcagg_params)
		a[calcagg_params[c] + b].value = ""
}
function deleteCalcAgg(a) {
	var b = document.getElementById("report");
	clearCalcAgg(b, a);
	b.nav.value = "agg";
	b.submit()
}
function copyCalcaggParams(a, b, c, d) {
	for (var e in calcagg_params)
		c[calcagg_params[e] + d].value = a[calcagg_params[e] + b].value
}
function getIframeContents(a) {
	return (a.contentDocument || a.contentWindow.document).body.innerHTML
}
function adjustIFrameSize(a) {
	if (a) {
		var b;
		a.contentDocument ? b = a.contentDocument.body.offsetHeight : (b = document.frames && document.frames(a.id) ? document.frames(a.id).document.body : a.document.body, b = 0 >= b.children.length ? 0 : b.scrollHeight);
		var c = a.height - b;
		0 > c && (c = -c);
		15 < c && (a.height = b)
	}
}
function showTextStateField(a, b) {
	a.style.display = "";
	b.style.display = "none"
}
function showPicklistStateField(a, b, c) {
	var d = a[0];
	a = a[1];
	c.options.length = 1;
	for (i = 0; i < d.length; i++)
		c.options[i + 1] = new Option(d[i], a[i]);
	b.style.display = "none";
	c.style.display = ""
}
function showStateListForCountry(a, b, c, d) {
	a = b[a];
	c.value = "";
	a ? showPicklistStateField(a, c, d) : showTextStateField(c, d)
}
function scaleImage(a, b, c) {
	if (Sfdc.userAgent.isIE7 && 0 === a.width)
		setTimeout(function () {
			scaleImage(a, b, c)
		}, 10);
	else {
		var d = a.width * b / a.height,
		e = b;
		d > c && (d = c, e = a.height * c / a.width);
		if (d < a.width || e < a.height)
			a.width = d, a.height = e;
		Sfdc.userAgent.isIE7 && (a.style.visibility = "visible")
	}
}
function refreshWizardPage(a) {
	var b = document.getElementById("goRefresh");
	"goRefresh" != b.value && (b.value = "goRefresh", b = document.getElementById("stageForm"), b.action += a, b.submit())
}
function getOffsetLeft(a) {
	if (!a)
		return 0;
	for (var b = a.offsetLeft; a.offsetParent; )
		a = a.offsetParent, b += a.offsetLeft;
	return b
}
function getWindowWidth() {
	if ("number" == typeof window.innerWidth)
		return window.innerWidth;
	if (document.documentElement && document.documentElement.clientWidth)
		return document.documentElement.clientWidth;
	if (document.body && document.body.clientWidth)
		return document.body.clientWidth
}
function getWindowHeight() {
	if ("number" == typeof window.innerHeight)
		return window.innerHeight;
	if (document.documentElement && document.documentElement.clientHeight)
		return document.documentElement.clientHeight;
	if (document.body && document.body.clientHeight)
		return document.body.clientHeight
}
function getScrollTop() {
	if (self.pageYOffset)
		return self.pageYOffset;
	if (document.documentElement && document.documentElement.scrollTop)
		return document.documentElement.scrollTop;
	if (document.body)
		return document.body.scrollTop
}
function getScrollLeft() {
	if (self.pageXOffset)
		return self.pageYOffset;
	if (document.documentElement && document.documentElement.scrollLeft)
		return document.documentElement.scrollLeft;
	if (document.body)
		return document.body.scrollLeft
}
function hasStyleClass(a, b) {
	return 0 <= (" " + a.className + " ").indexOf(" " + b + " ")
}
function addStyleClass(a, b) {
	0 > (" " + a.className + " ").indexOf(" " + b + " ") && (a.className += a.className && 0 < a.className.length ? " " + b : b)
}
function delStyleClass(a, b) {
	var c = " " + a.className + " ",
	d = b.length,
	e = c.indexOf(" " + b + " ");
	0 <= e && (d = e + d + 1, a.className = trim(c.substring(0, e) + c.substring(d, c.length)))
}
function hiOn(a) {
	null != a && addStyleClass(a, "highlight")
}
function hiOff(a) {
	null != a && delStyleClass(a, "highlight")
}
function toggleVis(a) {
	a.style.visibility = "hidden" == a.style.visibility ? "visible" : "hidden"
}
function toggleVisWithPositionAbsolute(a) {
	if (a = document.getElementById(a))
		toggleVis(a), a.style.position = "absolute" == a.style.position ? "static" : "absolute"
}
function setVis(a, b) {
	a.style.visibility = b ? "visible" : "hidden"
}
function toggleVisWIframe(a) {
	var b = document.getElementById(a.id + "_iframe");
	"undefined" != typeof b && ("hidden" == a.style.visibility ? (b.style.left = a.offsetLeft, b.style.left == a.offsetLeft + "px" && (b.style.top = a.offsetTop, b.style.width = a.offsetWidth, b.style.height = a.offsetHeight, b.style.display = "block")) : b.style.display = "none");
	toggleVis(a)
}
function formatMessage(a) {
	var b = arguments;
	return a.replace(/\{([0-9]*)\}/g, function (a, d, e, f) {
		return b[parseInt(d) + 1]
	})
}
function highlightToc(a, b) {
	top.frames.frames.body && top.frames.body.frames.toc && top.frames.body.frames.toc.document.getElementById("fullyLoadedDiv") && top.frames.body.frames.toc.HTMLTreeNode.prototype.openHTMLTree(a, b)
}
function loadToc(a) {
	var b = top.frames.body.frames.content.location.href,
	b = b.substring(b.lastIndexOf("/") + 1, b.indexOf(".htm"));
	top.frames.body.frames.toc.location.href = a + "?item\x3d" + b + "\x26section\x3dnone"
}
function deepCopy(a, b) {
	var c = b.createElement(a.tagName);
	if ("undefined" != typeof a.attributes && null != a.attributes)
		for (var d = 0; d < a.attributes.length; d++)
			c.setAttribute(a.attributes[d].name, a.attributes[d].value);
	null != a.nodeValue && c.appendChild(b.createTextNode(a.nodeValue));
	if ("undefined" != typeof a.childNodes && null != a.childNodes)
		for (d = 0; d < a.childNodes.length; d++)
			c.appendChild(deepCopy(a.childNodes[d], b));
	return c
}
function borrowForm(a, b, c) {
	a = document.getElementById(a);
	var d = a.action,
	e = a.target;
	null != b && (a.action = b);
	null != c && (a.target = c);
	if (a.onsubmit)
		a.onsubmit();
	a.submit();
	a.action = d;
	a.target = e
}
function toggleRow(a, b) {
	var c = document.getElementById(a);
	if (null != c) {
		for (; null != c && "TR" != c.tagName; )
			c = c.parentNode;
		toggleDisplay(c, b)
	}
}
function setRowVis(a, b) {
	var c = document.getElementById(a);
	if (null != c) {
		for (; null != c && "TR" != c.tagName; )
			c = c.parentNode;
		null != c && setVis(c, b)
	}
}
function toggleDisplay(a, b) {
	null != a && (a.style.display = isIE && !isOpera ? b ? "block" : "none" : b ? "table-row" : "none")
}
function toggleDisplayWithDisplayType(a, b, c) {
	var d = document.getElementById(a);
	d && (b || (b = "block"), c ? "none" == d.style.display ? Sfdc.Effects.rollIn(d, function () {
			d.style.display = b
		}) : Sfdc.Effects.rollOut(d) : d.style.display = "none" == d.style.display ? b : "none")
}
function getElementsByNameCS(a) {
	for (var b = document.getElementsByName(a), c = [], d = 0; d < b.length; d++)
		b[d].name == a && c.push(b[d]);
	return c
}
function getElementByIdCS(a) {
	return getElementByIdCSWithDoc(document, a)
}
function getElementByIdCSWithDoc(a, b) {
	var c = a.getElementById(b);
	return null == c || c.id == b ? c : a.all ? a.all[b] : null
}
function dashify(a) {
	return a.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
}
function getCurrentStyle(a, b) {
	var c;
	c = a.currentStyle ? a.currentStyle[b] : document.defaultView && document.defaultView.getComputedStyle ? (c = document.defaultView.getComputedStyle(a, null)) ? c.getPropertyValue(dashify(b)) : null : null;
	return c
}
function copyAddr(a, b, c, d, e, f, g, m, l, h, k, n, p) {
	document.getElementById(f).value = document.getElementById(a).value;
	document.getElementById(g).value = document.getElementById(b).value;
	document.getElementById(m).value = document.getElementById(c).value;
	document.getElementById(l).value = document.getElementById(d).value;
	if (p)
		document.getElementById(l).onchange();
	k && n && (document.getElementById(h).value = document.getElementById(e).value)
}
function showMoreList(a, b, c) {
	Sfdc.warn("Legacy Function showMoreList was called, use RelatedList.get(listId).showMoreList() instead.");
	RelatedList.get(c).showMoreList(a, b)
}
function callRelatedListAction(a, b, c, d, e, f) {
	Sfdc.warn("Legacy Function callRelatedListAction was called, use RelatedList.get(listId).callRelatedListAction() instead.");
	RelatedList.get(d).callRelatedListAction(a, b, c, null, null, e, f)
}
function setElementsEnabledBasedOnCheckbox(a, b) {
	var c = document.getElementById(a);
	if (null != c && null != b)
		for (var d = 0; d < b.length; d++) {
			var e = c,
			f = document.getElementById(b[d]);
			f && (f.style.display = e.checked ? "" : "none")
		}
}
function registerClickToDial(a, b) {
	var c;
	(c = self.location.pathname === "/" + IFrameElement.EmptyRelatedListDoc ? self.parent : self) && c.registerClickToDialEnabled && (b ? c.registerClickToDialEnabled(a) : c.registerClickToDialDisabled(a))
}
function stripDomainFromUrl(a) {
	var b = a.indexOf("://");
	-1 != b && (a = a.substring(b + 3), a = a.substring(a.indexOf("/")));
	return a
}
function bodyOnFocus() {}

isIE7 && window.attachEvent("onunload", function () {
	for (var a = document.body.getElementsByTagName("iframe"), b = 0; b < a.length; b++)
		a[b].id && "066" === a[b].id.substring(0, 3) && (a[b].src = "javascript:false", a[b].parentNode.removeChild(a[b]))
});
var ScheduleElement = {
	pFreq : "freq",
	pStartDate : "start",
	pMonthlyOnDayN : "mdom",
	pEndDate : "end",
	pDailyEveryNDays : "dn",
	pMonthlyRec : "mr",
	pMonthlyOnNDayOfWeek : "mdn",
	pMonthlyOnNthDay : "mond",
	pPrefTimeLoadingDiv : "prefTimeLoad",
	pPrefTimeLabelDiv : "prefTimeLabel",
	pOuterBox : "outerBox",
	pDailyRec : "dr",
	pOtherPrefTimeLabelDiv : "otherPrefTimeLabel",
	pDayOfWeek : "ww",
	pPrefTime : "pst",
	pPrefTimeDiv : "prefTime"
}, VisualforceConstants = {
	SHOW_BUTTONS : "visualforce_showbuttons",
	RTA_LIBRARY : "",
	EDITOR_NAME : "SFDC_INTERNAL_EDITOR",
	IFRAME_SUFFIX : "_frame",
	CURRENT_VALUE : "currentValue",
	CHANGED_STYLE_CLASS : "visualforce_changedStyleClass",
	RESET_FUNCTION : "visualforce_resetFunction",
	PICKLIST_INFO : "visualforce_picklist",
	ERROR : "visualforce_error",
	LABEL : "visualforce_label",
	HIDE_BUTTONS : "visualforce_hidebuttons",
	UPDATE_VALUE : "UV"
}, BaseIntermediateRedirectServlet = {
	DESTINATION_URL_PARAM_NAME : "retURL"
}, RuleFilterPageConstants = {
	NO_REASSIGN_SUFFIX : "_noReassign"
}, SoftphoneLayoutEditorConstants = {
	XSLT_INFO_FIELDS_CSS : "infoFields",
	FLIPPY_PREFIX : "flippy_",
	LISTING_PREFIX : "listing_",
	FLIPPY_CONTROL_PREFIX : "control_",
	RESULT_FIELDS_KEY : "resultFields",
	HIDDEN_IFRAME_ID : "previewIframe",
	CALL_TYPE_PREVIEW_PREFIX : "callTypePreview_",
	XSLT_RELATED_OBJS_CSS : "relatedObjects",
	FIRST_FLIPPY_CSS : "firstFlippy",
	CALL_TYPE_PREFIX : "callType_"
}, EmailAttachmentManagementConstants = {
	START_DATE_ID : "start_date",
	FILE_NAME_ID : "file_name",
	SEARCH_BY_DATA : "data",
	END_DATE_ID : "end_date",
	SENDER_LOOKUP_ID : "sender",
	SEARCH_BY_URL : "url",
	LOOKUP_URL_ID : "lookup_url"
}, CompactLayoutAssignmentConstants = {
	CUSTOM_COMPACT_LAYOUT : "c",
	INHERIT_COMPACT_LAYOUT : "i",
	SYSTEM_COMPACT_LAYOUT : "s"
}, MenuButtonElement = {
	BUTTON : "Button",
	MENU : "Menu",
	LABEL : "Label",
	SELECT : "Select",
	GO_BUTTON : "Go"
}, EventDescriptionServlet = {
	EVENT_ID_PARAM_KEY : "eid"
}, UnifiedSearchComponents = {
	SUB_COMPONENT_FROM_SUMMARY_VIEW : "FromSummaryView",
	COMPONENT_TRACKING_SEARCH_ALL : "SearchAll",
	COMPONENT_TRACKING_DRILL_DOWN_SUMMARY : "DrillDownFromSummary",
	COMPONENT_TRACKING_DRILL_DOWN_SIDETAB : "DrillDownFromSidetab",
	COMPONENT_TRACKING_FEEDS_TOGGLE : "FeedsToggle",
	COMPONENT_TRACKING_RECORDS_TOGGLE : "RecordsToggle",
	COMPONENT_TRACKING_SECONDARY_SEARCH : "SecondarySearch",
	SUB_COMPONENT_FROM_SIDETABS : "FromSidetabs"
}, EmailTemplatePreviewConstants = {
	REQUIRED_BLOCK_CLASS : "requiredBlock",
	ID_REQUIRED_BLOCK_ID : "_id_required_block",
	LOOKUP_REQUIRED_BLOCK_ID : "_lookup_required_block"
}, SlaProcessUi = {
	TIMELINE_DIV : "entitlement_timeline",
	ENTRY_DATE_FIELD_DIV : "edfield",
	EXIT_CRITERIA_DIV : "exitcrt"
}, EmailSyncConfigConstants = {
	ALLOW_USER_MODIFY : "_usrMod",
	OVERRIDE_MAPPINGS_SUFFIX : "ofm",
	OVERRIDE_SYNCDIR_SUFFIX : "osd",
	OVERRIDE_ENT_SUFFIX : "oes",
	MATCH_PREF_DIV : "_matchPrefDiv",
	ROUTING_ADDRESS_ID : "outlook_routing_address",
	CONFLICT_RES_STATIC_SUFFIX : "_conf_res_static",
	LAST_MODIFIED : "lastModified",
	LAST_ACTIVITY : "lastActivity",
	FM_HIDE_SUFFIX : "_fmHideLink",
	FM_ROW_SUFFIX : "_fmRow",
	MATCH_PREF : "_matchPref",
	ADD_CASE_ID : "add_case",
	CONFLICT_RES_SUFFIX : "_conf_res",
	ADVANCED_SETTINGS_PARAM : "advanced_settings",
	ADVANCED_SETTINGS_ROW_PREFIX : "adv_row_",
	OWNERSHIP_ALL : "ownership_all",
	FM_SHOW_SUFFIX : "_fmShowLink",
	OLDEST : "oldest",
	OVERRIDE_CONFLICT_SUFFIX : "ocr",
	OWNERSHIP_SELECTED : "ownership_selected",
	SYNC_DIR_SUFFIX : "_sync_dir",
	MATCH_PREF_LABEL : "_matchPrefLabel",
	ADVANCED_SETTINGS_TABLE_ID : "advSettingsTable"
}, UiData = {
	pRET_URL : "retURL",
	pID : "id",
	pCANCEL_URL : "cancelURL",
	pSAVE_URL : "saveURL",
	pFAIL_RET_URL : "failRetURL"
}, LiveAgentConstants = {
	CHAT_ID_PARAM : "chatId"
}, LookupsUi = {
	FIELD : "field",
	PATH : "path",
	LOOKUPS : "lookups"
}, HoverTooltipElement = {
	DEFAULT_CLASS_TEXT : "mouseOverText"
}, WhoWhatQueue = {
	ARROW_IMG : "aqarrow_",
	WHAT_RECOMMENDER_INPUT_TEXT_SUFFIX : "_input",
	RECOMMENDATION_MADE_TRACKER_SUFFIX : "_recommendationMade",
	RIGHT_ARROW : "/img/twistyRoundRight.jpeg",
	DONT_ASSIGN_MESSAGE_PREFIX : "da_msg_",
	NO_DESC_TEXT_ID : "qNoDescTextId",
	WHAT_LOOKUP_NAME_PREFIX : "qselkupwhat_",
	WHAT_RECOMMENDER_CONTROL_PREFIX : "whatRecommender_",
	WHO_LOOKUP_NAME_PREFIX : "qselkupwho_",
	RECOMMENDATION_PICKED_TRACKER_SUFFIX : "_recommendationPicked",
	LEFT_ARROW : "/img/twistyRoundLeft.png",
	TURN_RECOMMENDER_OFF_LINK_ID : "whatRecommenderOffId",
	HIDDEN_WHO_DISAMBIGUATION_SELECTOR_INPUT_NAME : "whoDisambiguationSelectId",
	TURN_RECOMMENDER_ON_LINK_ID : "whatRecommenderOnId",
	TR_PREFIX : "aqtr_"
}, ChangePasswordConstants = {
	WANT_LOWERCASE_LABELS : "wantLowercaseLabels",
	SECRET_DESC_BOX : "secretDescBox",
	pNEW_PASSWORD_STRENGTH_PROMPT : "passStrengthPrompt",
	pANSWER_ELEM : "p3",
	pNEW_PASSWORD_STRENGTH_INFO_ELEM : "passStrengthInfo",
	IS_ALPHANUMERIC_REQ : "isAlphanumericRequired",
	PASSWORD_POLICY : "passwordPolicy",
	pANSWER_ICON_ELEM : "answerVerify",
	pNEW_PASSWORD_ELEM : "p5",
	MIN_PASSWORD_LENGTH : "minPasswordLength",
	pQUESTION_ELEM : "p2",
	CHANGE_PASSWORD_PARAMS : "changePasswordParams",
	IS_SPECIALCHARACTER_REQ : "isSpecialCharacterRequired",
	pNEW_PASSWORD_STRENGTH_ELEM : "passStrength",
	pNEW_PASSWORD_CONFIRMATION_ICON_ELEM : "passVerify",
	pANSWER_ERROR_ELEM : "answerContainsPassword",
	LAST_PW_CHANGE_BOX : "lastPWChangeBox",
	pOLD_PASSWORD_ELEM : "p4",
	IS_PASSWORD_ALLOWED_IN_ANSWER : "isPasswordAllowedInAnswer",
	pNEW_PASSWORD_ICON_ELEM : "strengthImage",
	pNEW_PASSWORD_CONFIRMATION_ELEM : "p6"
}, JigsawImport = {
	SELECTED_IDS : "selectedIds",
	SUCCESS : "globalSuccess",
	MESSAGE : "message",
	RESULT : "result",
	IMPORT_ALL : "importAll",
	TOTAL_ROWS : "totalRows",
	ERRORS : "globalErrors",
	METHOD : "method",
	IMPORT_TARGET_TYPE : "targetType",
	IMPORT_SELECTED : "importSelected",
	EI : "ei"
}, MyCustomObjectConstants = {
	EDITPAGE_TOOLBAR_SAVE_ID : "toolbarButtonSaveId",
	EDITPAGE_TOOLBAR_CREATEREPORT_ID : "toolbarButtonCreateReportId",
	TABLE_CONFIG_KEY_TABLE_DESCRIPTION : "tableDescription",
	MAX_VISIBLE_COUNT : 5,
	EDITPAGE_TOOLBAR_CLOSE_ID : "toolbarButtonCloseId",
	EDIT_TABLE_CONFIG_KEY_TYPE_DESCRIPTION : "editTableDescription",
	DETAILPAGE_ACTION_PANEL_DELETE_TABLE_ID : "actionDeleteTableId",
	EDIT_TABLE_CONFIG_KEY_TYPE_TABLE_DETAIL : "editTableDetail",
	DETAILPAGE_ACTION_PANEL_CREATE_REPORT_ID : "actionCreateReportId",
	EDITPAGE_TOOLBAR_SHARE_ID : "toolbarButtonShareId",
	DETAILPAGE_ACTION_PANEL_EDITDETAILS_ID : "actionEditDetailsId",
	ANALYTICS_REPORT_OVERLAY_ID : "myCustomObjectReportOverlayDialogId",
	TABLE_CONFIG_KEY_MCOID : "mcoId",
	EDIT_TABLE_CONFIG_KEY_TYPE : "editType",
	DETAILPAGE_REPORTS_SHOW_ALL_LINK_ID : "viewAllReportsLinkId",
	TABLE_CONFIG_KEY_TABLENAME : "tableName",
	EDITPAGE_TOOLBAR_ADDCOLUMN_ID : "toolbarButtonAddColumnId",
	DETAILPAGE_GRIDPANEL_ID : "myCustomObjectViewerPanelId",
	DETAILPAGE_ACTION_PANEL_EDITTABLE_ID : "actionEditTableId",
	DETAILPAGE_ACTION_PANEL_SHARE_ID : "actionShareId",
	EDITPAGE_TOOLBAR_ADDROW_ID : "toolbarButtonAddRowId",
	EDITPAGE_TOOLBAR_PROMOTE_ID : "toolbarButtonPromoteId"
}, EmailTaskDescriptionServlet, TaskDescriptionServlet = {
	TASK_ID_PARAM_KEY : "tid"
}, SoftphoneScreenPopTypeEnum = {
	POP_TO_SEARCH : "PopToSearch",
	POP_TO_VISUALFORCE : "PopToVisualforce",
	POP_TO_ENTITY : "PopToEntity",
	DO_NOT_POP : "DoNotPop"
}, AjaxScanFieldsForShrinkage = {
	pENTITY_NAME : "entityName",
	pFIELD_ID : "fieldId",
	pLENGTH_SPECIFIED : "lengthSpecified"
}, LiveAgentAutoQuery = {
	PAGE_URL : "/liveagent/autoquery.apexp",
	JSON_DETAILPAGEURL_KEY : "detailPageUrl",
	JSON_NORESULTS_KEY : "noResults",
	DETAILS_PARAM : "details"
}, ChatterService = {
	pVoteTargetId : "v1",
	TB_SEARCH_MAX_LENGTH : 255,
	DISLIKE_CLASS : "cxdislike",
	FOLLOW_COUNT_CLASS : "followCount",
	AFTER_LIKE_CLASS : "cxafterlike",
	CLASS_MINX_LINK : "cxminxlink",
	SEND_NOTIFICATION : "sendNotification",
	COOKIE_NAME : "ChatterAnswersSearchResultClick",
	CLASS_REPORT_ABUSE_ACTION : "cxreportabuseaction",
	pFEEDTYPE : "feedtype",
	pID : "id",
	LIKE_CLASS : "cxlike",
	CLASS_MINX : "cxminx",
	pVoteType : "v2",
	APP_CONTEXT_NAME : "ChatterAnswers",
	pEMAIL_INFO_BUBBLE_CLASS : "emailInfoBubble",
	pDATACATEGORY : "dc",
	pFEEDCRITERIA : "criteria",
	UP_VOTE_COUNT_CLASS : "upVoteCount",
	pSearchAskState : "s",
	DOWN_VOTE_COUNT_CLASS : "downVoteCount",
	pQUESTIONBODY : "b",
	SCC_ORIGIN : "Chatter Answers",
	pIsFollow : "v3",
	SEARCH_MIN_LENGTH : 3,
	pQUESTION : "q",
	FOLLOW_CLASS : "cxfollow",
	DATA_CATEGORY_DELETED : "dataCategoryDeleted",
	CLASS_DROPDOWN : "cxdropdown",
	AFTER_DISLIKE_CLASS : "cxafterdislike",
	QA_MAX_LENGTH : 1E3,
	IS_CHATTER_ANSWER_USER_PERM : "UserPermissions_15",
	REPLY_RTE_ID : "cs:replyInput"
}, SidetabConstants = {
	SIDETAB_ID_PREFIX : "st:",
	DEALVIEW_FEED_PANEL_DIV_ID : "dvFeedPanelDiv",
	ITEM_FLYOUT_ID : "RLPanelShadow",
	SIDE_TABS_ID : "st:SideTabs",
	HIDDEN_LIST_SHOW_LINK_ID : "st:HiddenListShowLink",
	DETAIL_SIDETAB_NAME : "DetailTab",
	GENIUS_SIDETAB_NAME : "GeniusTab",
	DEALVIEW_LOADING_IMG_ID : "dvLoadingImg",
	DETAIL_SIDETAB_ID : "st:DetailTab",
	DEALVIEW_DETAIL_PANEL_DIV_ID : "dvDetailsPanelDiv",
	DEALVIEW_SIDETABS_DIV_ID : "dvSidetabsDiv",
	HIDE_BUCKET_ID : "st:HideBucket",
	FEED_SIDETAB_NAME : "FeedTab",
	SIDETAB_ITEM_ID_SUFFIX : ":item",
	DEALVIEW_GENIUS_PANEL_DIV_ID : "dvGeniusPanelDiv",
	HIDDEN_LIST_ID : "st:HiddenList",
	FEED_SIDETAB_ID : "st:FeedTab",
	DEALVIEW_MAIN_CELL_ID : "sales-main-content-cell",
	HIDDEN_LIST_PANEL_DROP_COVER_ID : "st:HiddenListPanelDropCover",
	DEALVIEW_SIDETABS_CELL_CLASS : "sales-sidetabs-cell",
	HIDDEN_LIST_PANE_ID : "st:HiddenListPane",
	HIDDEN_LIST_TOGGLE_LINK_ID : "st:HiddenListToggleLink",
	HIDDEN_LIST_PANEL_ID : "st:HiddenListPanel",
	CANVAS_BODY_PANEL_ID : "st:CanvasBodyPanel",
	BACK_TO_TOP_BTN_ID : "st:BackToTopBtn",
	ITEM_PROXY_ID : "st:ItemProxy",
	DEALVIEW_LOADING_MESSAGE_PANE_ID : "dvLoadingMessagePane",
	GENIUS_SIDETAB_ID : "st:GeniusTab"
}, ChartConstants = {
	pCHART_SUMMARY : "cs",
	pCHART_SHOW_AS : "chsa",
	pCHART_USE_MULTI : "chum",
	pCHART_SHOW_PLOT_BY_VALUES : "chspv",
	pCHART_SHOW_VALUES : "chsv",
	MORE_BARS : "mbars",
	pCHART_SHOW_PERCENTAGE : "chsp",
	pCOMBINE_OTHERS : "chco",
	ONLY_LINE : "ol",
	pCHART_SHOW_TOTAL : "chst",
	pCHART_DIFF_AXIS : "chda",
	pCHART_SUMMARY_3 : "cs3",
	pCHART_SUMMARY_2 : "cs2",
	pCHART_SUMMARY_4 : "cs4"
},
ActivityUi = {
	PUBLISHER_SUBJECT_SUFFIX : "_sub",
	PUBLISHER_DUE_SUFFIX : "_due",
	MANY_WHO_TITLE_ELEMENT_SUFFIX : "_manyWTitle",
	MANY_WHO_COMPANY_ELEMENT_SUFFIX : "_manyWCompany",
	RECURRENCE_PATTERN_DIV : "recpat",
	MANY_WHO_ACCESS_BIT_SUFFIX : "_manyWAccessBit",
	MANY_WHO_ID_ELEMENT_SUFFIX : "_manyWId",
	ALL_SUBGROUP_DIVS : "dwmy",
	WHO_TIP_DIV_ID : "whoTipText",
	MANY_WHO_OWNER_ELEMENT_SUFFIX : "_manyWOwner",
	MANY_WHO_CONTACT_FIELD_NAME_SUFFIX : "_manyWContactField",
	MANY_WHO_NAME_ELEMENT_SUFFIX : "_manyWName"
}, FilterSelectionElement = {
	pFILTER_VALUE : "fval",
	pOPERATOR : "oper",
	ON_LOAD_CRITERIA : "onLoadCriteria",
	pCOLUMN : "col"
}, InviterLookupMatch = {
	NAME : "name",
	ID : "id",
	TYPE_USER : "user",
	EMAIL : "email",
	TYPE_LEAD : "lead",
	TYPE_CONTACT : "contact",
	TYPE : "type"
}, RelatedListServlet = {
	pParentId : "parentId",
	pRlId : "rlId"
}, SummaryFieldConstants = {
	OPERATION_CONTAINER_ID : "operationCtr"
}, CustomObjectTeamTemplateUiConstants = {
	pMEMBER_PREFIX : "tm_",
	REMOVED_CONTAINER : "rmc",
	pMEMBERS_COUNT : "tmc",
	pCSP_PORTAL_PREFIX : "csp_",
	pSHARE_ACCESS_PREFIX : "sa_",
	pROLE_PREFIX : "tmr_",
	pREMOVED_PREFIX : "rm_"
},
PersonalSetupConstants = {
	HELP_URL : "helpUrl",
	SHOW_HIDE_HELP_LINK : "showHideHelpLink"
}, MCXHRParams = {
	pQSTestResults : "qsTestResults",
	pLoadObjId : "LOI",
	pFilterItemCount : "itemCount",
	pSaveObjRelField : "SORF",
	pCollisionParam : "LMT",
	pSaveObjType : "SOT",
	pIsSuccess : "isSuccess",
	pTestResultRecordCount : "recordCount",
	pTotalsElement : "totalsElement",
	pData : "data",
	pScope : "scope",
	pTestResultDataSize : "dataSize",
	pLoadObjType : "LOT",
	pSaveObjId : "SOI",
	pTestResultQSID : "id",
	pLoadObjRelField : "LORF",
	pTestResultConfigError : "configError",
	pAction : "ACT",
	pSaveObjParentId : "SPI"
}, RoleTreeCookieConstants = {
	COOKIE_KEY : "roleopen"
}, SearchClickLogging = {
	CLK_QUERY_GUID_PARAM_NAME : "clkQueryGuid",
	CLK_RESULT_ORDERING_PARAM_NAME : "clkSort",
	MAC_SEARCH_STRING_PARAM_NAME : "macSearchString",
	MAC_RECORD_NAME_PARAM_NAME : "macRecordName",
	CLK_RECORDID_PARAM_NAME : "clkRecordId",
	CLK_NUM_RESULTS_PER_PAGE_PARAM_NAME : "clkNumResultsPerPage",
	CLK_FILTER_PARAM_NAME : "clkFilter",
	CLK_IS_TAGGING_PARAM_NAME : "clkIsTagging",
	CLK_LOG_FLAG_PARAM_NAME : "clkLogFlag",
	CLK_NUM_RESULTS_FOR_ENTITY_BEFORE_DB_PARAM_NAME : "clkNumResultsForEntityBeforeDb",
	CLK_TOTAL_RESULTS_FOR_ENTITY_PARAM_NAME : "clkCount",
	MAC_RECORD_ID_PARAM_NAME : "macRecordId",
	CLK_RANK_PARAM_NAME : "clkRank",
	CLK_ENTITY_BUCKET_RANK_PARAM_NAME : "clkBucketRank",
	CLK_ID_HASH_PARAM_NAME : "clkIdHash",
	MAC_SEARCH_AREA_PARAM_NAME : "macSearchArea",
	MAC_POSITION_PARAM_NAME : "macPosition",
	MAC_LOG_FLAG_PARAM_NAME : "macLogFlag",
	CLK_PAGE_NUM_PARAM_NAME : "clkPageNum",
	CLK_ENTITY_NAME_PARAM_NAME : "clkEntityName"
}, CriteriaInputConstants = {
	pVAL : "pVAL",
	HAS_ERROR_OR_WARNING : "HasErrorOrWarning",
	pCOL : "critfld",
	RESET_ERROR_MESSAGE : "rstErrMsg",
	INVALID_PREFIX : "fk__",
	INVALID_FIELD_VALUE : "invalid__",
	pLOOKUP : "pLOOKUP",
	INFO_MESSAGE : "InfoMessage",
	IS_OPTIONAL : "IsOptional",
	LOOKUP_FILTER_SECTION_ID : "lookupFilterSection",
	INSERT_DEP_BUTTON_ID : "insertDepButton",
	CLEAR_FILTERS_LINK : "clrFiltersLnk",
	ERROR_CLS : "FAErrorCell",
	MAX_ROWS_ID : "maxRowsReached",
	pFLD : "pFLD",
	BOOL_FILTER_NAME : "bool_filter",
	IS_DEFAULT_MESSAGE : "isDefaultMsg",
	INSERT_DEP_ID_PREFIX : "dep_",
	pFIELD_VAL : "critfld_val",
	ERROR_MESSAGE : "ErrorMessage",
	IS_ACTIVE : "Active",
	SHOW_SUMMARY_FILTER : "filterControl",
	pOP : "critop",
	RESET_ERROR_MESSAGE_LINK : "rstErrMsgLnk",
	pIS_FLD : "pIS_FLD",
	FILTER_SECTION_ID : "filterSection",
	LABEL_PREFIX : "labelFor",
	F_ROW : "frow"
}, GoogleDocCreator = {
	DOC_NAME : "docName",
	CREATE : 0,
	FORM_NAME : "googleDocForm",
	DOC_UPLOAD : "docUpload",
	DIALOG_ID : "DocNameInputId",
	DOC_TYPE : "docType",
	METHOD : "method",
	DOC_UPLOAD_NAME : "docUploadName",
	PARENT_ID : "parentId",
	UPLOAD : 1
}, HolidayUi = {
	START_TIME_PARAM : "sttime",
	END_TIME_PARAM : "endtime"
}, MRUAutoCompleteServlet = {
	DEPDATA_PARAM : "aclkdata"
}, EmailRelayConstants = {
	RESTRICT_TO_DOMAINS_ID : "restrict_to_domains",
	EMAIL_HOST_ID : "email_host",
	EMAIL_HOST_PORT_ID : "email_host_port",
	ACTIVATE_RESTRICT_TO_DOMAINS_ID : "activate_restrict_to_domains",
	ACTIVATE_EMAIL_RELAY_ID : "activate_email_relay",
	RESTRICT_TO_DOMAINS_HIDDEN_ID : "restrict_to_domains_hidden",
	EMAIL_RELAY_TLS_SETTING_ID : "email_relay_tls_setting"
}, TaskMassAction = {
	ROW_LIMIT : 200
}, PlatformCanvas = {
	PLATFORM_CONNECT_INVALIDATE_OAUTH_COOKIE : "canvas_token_list"
}, MWPicker = {
	INNER_SELECTED_DIV : "inner_selected_div",
	INVITEE_PICKER_ID : "invitee_picker_",
	SERVLET_NAME : "core.activity.ActivityRelationSearchServlet",
	SEARCH_BUTTON : "search_btn",
	TELL_ME_MORE_LINK : "tell_me_more_link",
	LISTS_AREA : "list_area",
	PRIMARY_BUTTON : "primary_button",
	OVERLAY_DIV : "overlay_div",
	SEARCH_TYPES : "search_types",
	SEARCH_CLEAR_TEXT_BUTTON : "search_clear_text_btn",
	LIMIT_EXCEEDED_MESSAGE : "limit_exceeded_message",
	HEADER_LABEL_ID : "header_label",
	LIST_ROW : "list_row",
	ADD_BUTTON : "add_button",
	WHO_COUNT_MAX : 50,
	MAX_EVENT_INVITEES : 1E3,
	SEARCH_TABLE : "search_table",
	DONE_BUTTON : "save_btn",
	OVERLAY_PANEL : "overlay_panel",
	LOADING_ICON_DIV : "loading_icon_div",
	FOUND_LIST : "found_list_id",
	LIST_ITEM_PREFIX : "list_item_",
	SELECTED_LIST : "selected_list_id",
	FOUND_LABEL : "found_label",
	REMOVE_BUTTON : "remove_button",
	OVER_LIMIT_MESSAGE : "overlimit_results_message",
	CANCEL_BUTTON : "cancel_btn",
	SELECTED_LABEL : "selected_label",
	MAX_RECURRING_EVENT_INVITEES : 100,
	MW_PICKER_ID : "mw_picker_",
	SEARCH_INPUT : "search_prefix"
}, AjaxServlet = {
	ERROR_MSG_KEY : "errMsg",
	SESSION_TIMEOUT : "sessionTimeout",
	CSRF_PROTECT : "while(1);\n"
}, EmailAuthorConstants = {
	EMAIL_ADDR_DELIM : "; "
}, SuggestedTimeProvider = {
	TARGET_SUGGESTION_NUMBER : 5
}, ProfileEditConstants = {
	CRUD_READ : "crudRead",
	CRUD_VIEW_ALL : "crudViewAll",
	CRUD_UPDATE : "crudUpdate",
	CRUD_MODIFY_ALL : "crudModifyAll",
	CRUD_DELETE_SETUP : "crudDeleteSetup",
	CRUD_CREATE : "crudCreate",
	CRUD_CUSTOMIZE_SETUP : "crudCustomizeSetup",
	CRUD_VIEW_SETUP : "crudViewSetup",
	CRUD_DELETE : "crudDelete"
}, EventPage = {
	CALENDAR_IFRAME_ID : "calendarIFrame",
	MINI_EDIT_PAGE_LINK_ID : "miniEditPageLink",
	MINI_CANCEL_SAVE_ID : "miniSave",
	MINI_CANCEL_BUTTON_ID : "miniCancel"
}, BusinessHoursPageConstants = {
	p24X7_CHECKBOX : "has24x7"
}, DatePickerIds = {
	DOM_ID : "datePicker",
	TABLE_ID : "datePickerCalendar",
	YEAR_PICKER : "calYearPicker",
	MONTH_PICKER : "calMonthPicker"
}, JSPDispatcher = {
	NONSTANDARD_PACKAGE_PREFIX : "_ui/",
	PACKAGE_MARKER : "p/",
	STANDARD_PACKAGE : "ui"
}, TabSetPageConstants = {
	LC_WORKSPACE_TABLE_ID : "lcWorkspaceTable",
	WORKSPACE_MAPPING_ROW_CLASS : "workspaceMappingRow",
	WORKSPACE_MAPPING_TABLE_ID : "workspaceMappingTable",
	ROW_PREFIX : "row"
}, ForecastingPage = {
	QUANTITY_CONTROL_NAME : "enableQuantity",
	BEGIN_PERIOD_CONTROL_NAME : "beginPeriod",
	PERIODS_DISPLAYED_CONTROL_NAME : "periodsDisplayed",
	REVENUE_CONTROL_NAME : "enableRevenue",
	PERIOD_TYPE : "periodSelect"
}, CaseUi = {
	TIMELINE_DIV : "entitlement_timeline"
}, MailmergeTemplateSelectElementConst = {
	TEMPLATE_DESCRIPTION : "mmtse_description",
	TEMPLATE_TITLE : "mmtse_title",
	TEMPLATE_VIEW_BUTTON : "mmtse_preview",
	TEMPLATE_ID : "mmtse_id"
}, RelatedListPrioritizationServlet = {
	pPOSITION : "position",
	pRELATIVE : "relative",
	pMOVED : "moved",
	pCONFIG_KEY : "configKey"
}, EditPageConstants = {
	pQUICK_SAVE : "quick_save",
	pSAVE_NEW : "save_new",
	pCANCEL : "cancel",
	NOSAVE : "nosave",
	pSAVE_NEW_URL : "save_new_url",
	pSAVE : "save",
	pSAVE_CLOSE : "save_close",
	pSAVE_ATTACH : "save_attach",
	pEDIT_PAGE : "editPage"
}, BusyTimesAjaxServlet = {
	SERVLET_NAME : "core.activity.scheduling.BusyTimesAjaxServlet",
	TIME_ZONE_PARAM : "timezone",
	USER_ID_PARAM : "userid",
	DATE_OF_THE_WEEK_PARAM : "date"
}, EventUi = {
	START_TIME_PARAM_NAME : "startTimeId",
	WHO_NAME_PARAM_NAME : "whoNameId",
	ALL_DAY_PARAM_NAME : "allDayId",
	LEAD_PREFIX_PARAM_NAME : "leadPrefix",
	REMINDER_DATE_TIME_PARAM_NAME : "reminderDateTimeTimeId",
	WHAT_ID_PARAM_NAME : "whatIdId",
	WHO_ID_PARAM_NAME : "whoId",
	RECURRING_EVENT_PARAM_NAME : "isRecurringId",
	CURRENT_USER : "currUser",
	PRIVATE_CHECKBOX_PARAM_NAME : "privateCheckboxId",
	WHO_LINK_PARAM_NAME : "whoLinkId",
	VISIBLE_IN_SS_PARAM_NAME : "isVisibleInSelfServiceId",
	EVENT_CONVERT : "convert",
	START_DATE_PARAM_NAME : "startDateId",
	pISPERSONACCOUNT : "pip",
	WHAT_LINK_PARAM_NAME : "whatLinkId",
	EVENT_OWNER : "eventOwner",
	WHAT_NAME_PARAM_NAME : "whatNameId",
	pADD_INVITEE_ID : "addInvId",
	WHAT_TYPE_PARAM_NAME : "whatTypeId",
	END_TIME_PARAM_NAME : "endTimeId",
	WHO_TYPE_PARAM_NAME : "whoTypeId",
	END_DATE_PARAM_NAME : "endDateId"
}, TabOrganizerConstants = {
	MORE_TABS_LIST_ID : "MoreTabs_List",
	ZEN_TAB_CONTAINER_ID : "tabContainer",
	MORE_TABS_TAB_ID : "MoreTabs_Tab",
	TAB_BAR_ID : "tabBar"
}, CreateNewElement = {
	DOM_ID : "createNew"
}, CSRFConstants = {
	CSRF_TOKEN : "_CONFIRMATIONTOKEN"
}, SearchSettingsConstants = {
	OPTIMIZE_SEARCH_FOR_CJK_WARNING : "optimizeSearchForCJKWarning",
	OPTIMIZE_SEARCH_FOR_CJK_NAME : "optimizeSearchForCJK",
	SIDEBAR_SEARCH_ENTITY_PICKER_ID : "enableSidebarSearchEntityPicker",
	DEFAULT_SEARCH_ENTITY_CHECKBOX_ID : "defaultSearchEntityCheckbox",
	DEFAULT_SEARCH_ENTITY_PICKLIST_ID : "defaultSearchEntityPicklist"
}, OpportunitySalesTeamEdit = {
	SALES_TEAM_MEMBER_TABLE_ID : "stt",
	SPLIT_TOTAL_PER_ID : "splitTotPer",
	SPLIT_TOTAL_ID : "splitTotal",
	SPLIT_AMOUNT_TOTAL_ID : "splitAmtPer"
}, DetailElement = {
	DEFAULT_ERROR_DIV_ID : "errorDiv_ep",
	TOP_BUTTON_ROW : "topButtonRow",
	DEFAULT_DETAIL_ELEMENT_ID : "ep",
	BOTTOM_BUTTON_ROW : "bottomButtonRow"
}, CustomSchemaObjectDefinitionUiModel = {
	CLOB_LENGTH_CONFIG : "clobLengthConfig",
	AUTONUMBER_HELP_HTML : "autonumberHelpHtml",
	SUMMARY_FIELD_CONFIG : "summaryFieldConfig",
	TYPE_INDEPENDENT_NAME_TO_UNIQUE_NAME : "typeIndependentNameToUniqueName",
	EDITABLE_PROPERTIES : "editableProperties",
	VALID_PROPERTIES : "validProperties",
	IS_NEW : "isNew",
	ENCRYPTED_EXAMPLE_CONFIG : "encryptedExampleConfig",
	DOMAIN_ENUM_OR_ID_CONFIG : "domainEnumOrIdConfig",
	PROPERTY_VALUES : "propertyValues"
}, AjaxValidateFormula = {
	VALID_KEY : "valid",
	RANGE_KEY : "range"
}, AjaxInNumericRange = {
	pTO_TEST : "toTest",
	pHIGH : "high",
	pLOW : "low",
	pRESULT : "result"
},
LookupUi = {
	pSEARCH_VALUE : "lksrch"
}, ForecastSettings = {
	pALLOW_FM_SHARING : "allowFMSharing",
	pFORECAST_SHARING : "forecastSharing"
}, ColumnTypeConstants = {
	FILE_CONTENTTYPE_LENGTH : 120,
	DEFAULT_LASTNAME_LENGTH : 80,
	FILE_LENGTH_OFFSET : 3,
	DEFAULT_LATITUDE_LENGTH : -1,
	LOCATION_LONGITUDE_OFFSET : 1,
	ADDRESS_COUNTRY_OFFSET : 4,
	PERSONNAME_FIRSTNAME_OFFSET : 1,
	FILE_NAME_LENGTH : 40,
	ADDRESS_STATE_CODE_OFFSET : 5,
	DEFAULT_LONGITUDE_LENGTH : -1,
	ADDRESS_STATE_OFFSET : 2,
	DEFAULT_ZIP_LENGTH : 20,
	DEFAULT_COUNTRY_CODE_LENGTH : 10,
	ADDRESS_STREET_OFFSET : 0,
	ADDRESS_LATITUDE_OFFSET : 7,
	FILE_FIELDDATA_OFFSET : 0,
	DEFAULT_SALUTATION_LENGTH : 40,
	DEFAULT_TEXTNAME_LENGTH : 255,
	ADDRESS_POSTAL_CODE_OFFSET : 3,
	ADDRESS_XYZ_OFFSET : 9,
	PERSONNAME_SALUTATION_OFFSET : 0,
	PERSONNAME_LASTNAME_OFFSET : 2,
	DEFAULT_COUNTRY_LENGTH : 80,
	DEFAULT_FIRSTNAME_LENGTH : 40,
	ADDRESS_CITY_OFFSET : 1,
	DEFAULT_XYZ_LENGTH : 40,
	DEFAULT_STREET_LENGTH : 255,
	DEFAULT_STATE_CODE_LENGTH : 10,
	ADDRESS_LONGITUDE_OFFSET : 8,
	FILE_BODY_OFFSET : 4,
	ADDRESS_COUNTRY_CODE_OFFSET : 6,
	FILE_NAME_OFFSET : 1,
	FILE_CONTENTTYPE_OFFSET : 2,
	DEFAULT_STATE_LENGTH : 80,
	LOCATION_LATITUDE_OFFSET : 0,
	DEFAULT_CITY_LENGTH : 40
}, ListView = {
	ACTION_COLUMN : "ACTION_COLUMN",
	CHECKBOX_ID : "ids",
	SELECT_ALL_BOX_ID : "allBox",
	ID_COLUMN : "LIST_RECORD_ID",
	CHECKBOX_COLUMN : "checkbox",
	DEFAULT_ROWS_PER_PAGE : 25,
	ACTION_COLUMN_LABELS : "ACTION_COLUMN_LABELS"
}, SoftphoneConstants = {
	OPEN_CTI_MODULE_CLASS : "openCTISoftphoneModule",
	MODULE_CLASS : "softphoneModule",
	SOFTPHONE_ID : "softphone",
	SIDEBAR_SOFTPHONE_WIDTH_STYLE_PX : "220"
}, MultiLookupInputElement = {
	MULTI_LOOKUP_SELECT_SUFFIX : "_mlktp"
}, TaskUi = {
	pNOTIFY_PREFERENCE_GROUP_ELEMENT : "prefEl",
	pSHOW_PREFERENCE : "show_pref",
	pMAX_ASSIGNEE_TEXT_LENGTH : 200,
	pLOOKUP_SUMMARY_SUFFIX : "_sum",
	pLOOKUP_BUTTON_MULTI_OWNER_SUFFIX : "m",
	ASSIGNEE_SEPARATOR : ",",
	pLOOKUP_DISPLAY_SUFFIX : "_dsp",
	MAX_TMU_ASSIGNEES : 100
}, AjaxLoadRelatedListItem = {
	pRELATED_LIST_ID : "RelatedListId"
}, SchedulingUtils = {
	SCHEDULING_URL_KEY : "sched",
	OVERLAY_DIALOG_WIDTH : "877"
}, ActivityReminderConstants = {
	DUE_TIME_ATTR : "due_time",
	DUE_MINUTES_ID : "minutes",
	SNOOZE_TIME_ID : "snooze_time",
	pAT : "at",
	pSNOOZED_AT : "snoozed_at",
	SNOOZE_ID : "snooze",
	REMINDERS_OK : "reminders_ready",
	REMINDERS_NONE : "reminders_none_active",
	REMINDER_ID : "reminder",
	DISMISS_ID : "dismiss",
	pTEST : "test",
	DISMISS_ALL_ID : "dismiss_all",
	SUMMARY_ID : "summary",
	ALL_DAY_ATTR : "all_day"
}, ActivityPage = {
	DISABLED_RECURRENCE_MSG_DIV : "DisabledRecurrenceMsgDiv"
}, ReportsFch = {
	FLOATING_HEADER : "floatingHeader",
	FCH_AREA : "fchArea",
	HEADER_ROW : "headerRow"
}, RelatedListSuppressionServlet = {
	pSUPPRESS : "suppress",
	pCONFIG_KEY : "configKey"
}, CrtObjectElement = {
	JOIN_RADIO : "radio",
	MAX_OBJECTS_WARNING : "warning",
	LEVEL : "level",
	INNER_JOIN_SELECT : "inner_select",
	ELBOW_OUTER : "elbow_outer",
	INNER_JOIN_OPTION : "inner_join_option",
	OUTER_JOIN_SELECT : "outer_select",
	REMOVE_OBJECT_LINK : "remove",
	GHOST_ELBOW : "ghost_elbow",
	EST_OBJECT_LABEL : "estObjLabel",
	ELBOW_INNER : "elbow_inner",
	GHOST0 : "ghost0",
	TERMINAL_OBJECT_WARNING : "endWarning",
	GHOST1 : "ghost1",
	OUTER_JOIN_OPTION : "outer_join_option"
}, EditEventMultiUserCalendarElementConstants = {
	ADD_INVITEES : 0,
	EDIT_PAGE_CALENDAR : "editEventCalendar",
	EDIT_PAGE_CALENDAR_MARKER : "\x3d\x3d\x3dxyzCALENDARzyx\x3d\x3d\x3d",
	ADD_AND_REMOVE_INVITEE : 2,
	REMOVE_INVITEE : 1
}, DeveloperSettings = {
	LICENSE_MGR_CHOICE_STR : "licenseMgr"
}, EmailChangeVerification = {
	APP_CONTEXT : "appContext"
}, KnowledgeSettingsUI = {
	pASSIGNEE_PREFIX : "da_",
	pMAX_LANG_ROW_INDEX : "mlangri",
	pEXISTING_LANG_COUNT : "oldlangc",
	pLANG_SELECT_PREFIX : "las_",
	LANG_CONFIG_TABLE : "langtbl",
	pSTATUS_PREFIX : "st_",
	LANG_CONFIG_ADDER_ROW : -1,
	pREVIEW_PREFIX : "dr_",
	pLANG_PREFIX : "la_",
	pREMOVE_PREFIX : "rm_",
	WRAPPING_NEWROW_DIV : "newLanguageSetting"
}, EditElement = {
	FIELD_NAME_CITY : "city",
	pID_SUFFIX : "_lkid",
	FIELD_NAME_STATE : "state",
	FIELD_NAME_LATITUDE : "latitude",
	FIELD_NAME_FIRST : "name_first",
	FIELD_NAME_COUNTRY : "country",
	FIELD_NAME_ZIP : "zip",
	FIELD_NAME_STREET : "street",
	pTYPE_SUFFIX : "_lktp",
	ERROR_CLASS : "error",
	FIELD_NAME_LAST : "name_last",
	pMOD_SUFFIX : "_mod",
	SELECTED_ID_SUFFIX : "_selected",
	FIELD_NAME_SALUTATION : "name_salutation",
	pAUTO_SUBMITTED_FROM : "lspffrom",
	FIELD_NAME_LONGITUDE : "longitude",
	pBASE_NAME : "lknm",
	STREET_NUM_ROWS : 2,
	pOLD_NAME_SUFFIX : "_lkold",
	UNSELECTED_ID_SUFFIX : "_unselected",
	STREET_NUM_COLS : 27,
	CHECKBOX_SUFFIX : "_chkbox"
},
BrandingColor = {
	DEFAULT_NAME : "Default",
	TRANSPARENT_NAME : "Transparent"
}, ForecastSummaryPage = {
	pLOOKUP_INPUT_ENTERED : "lookupEntered"
}, AjaxGetUser = {
	pUSER_IDS : "userIds",
	pUSERS : "users",
	pTHUMBNAIL_ELEMENT : "thumbnailElement",
	pUSER_NAME : "userName",
	pUSER_ID : "userId",
	pLABEL_ELEMENT : "labelElement"
}, InlineEditConstants = {
	SAVED : "saved",
	LAST_MOD : "sysMod",
	FIELD_DATA : "fields",
	COLUMN_ID : "columnId",
	FIELD_VALUE : "initialValue",
	SAVE_BUTTON : "inlineEditSave",
	FIELD_TYPE : "fieldType",
	VALIDATION_ERRORS : "validationErrors",
	IDS : "recordIds",
	FIELD_REQUIRED : "required",
	MAX_SAVE : 200,
	FIELD_STATE : "state",
	COLUMN_LABEL : "label",
	INIT_HOOK : "initHook",
	DYNAMIC_DATA : "dynamicData",
	SAVE_URL : "saveUrl",
	OVERRIDE_TYPE : "overrideType",
	IS_PERSON : "isPerson",
	NON_SPECIFIC_ERRORS : "nonSpecificErrors",
	SUCCESS : "success",
	EDITABLE : "editable",
	FIELD_ID : "fieldId",
	NULLABLE : "nullable",
	AFTER_SAVE_REDIRECT_URL : "afterSaveUrl",
	VF_ENABLED : "visualforce",
	ENTITY_ID : "entityId",
	SORTABLE : "isSortable",
	ENTITY_TYPE : "entityType",
	CELL_ID : "_ilecell",
	COLUMN_NAME : "columnName",
	LAYOUT_INFO : "layoutInfo",
	ROLODEXABLE : "useRolodex",
	MASS_EDITABLE : "massEditable",
	CANCEL_BUTTON : "inlineEditCancel",
	IS_TASK : "isTask",
	INNER_ID : "_ileinner",
	NAME_LABEL : "nameLabel"
}, ManageableInfo = {
	MORE_INFO_CLASS : "manageableMoreInfo",
	DHTML_ID : "manageableInfo"
}, CreateNewList = {
	DHTML_ID : "newEntityList"
}, ReportChartMetadataServlet = {
	SUCCESS : "success",
	REPORT_CHART_AGGS : "chartAggs",
	HAS_CHART : "hasChart",
	TOPN_VALUES : "topNValues",
	REPORT_CHART_DIMS : "chartDims",
	IS_MULTIBLOCK_REPORT : "isMultiBlockReport",
	TOPN_NAMES : "topNNames",
	REPORT_AGGREGATES : "reportAggregates",
	SERVLETURL : "analytics.dashboard.servlet.ReportChartMetadataServlet",
	HAS_DASHBOARDSETTINGS : "hasDBSettings",
	TOPN : "topN",
	REPORT_GROUPINGS : "reportGroupings",
	NAME_FROM_DASHBOARDSETTINGS : "nameFromDbSettings",
	VALUE_FROM_DASHBOARDSETTINGS : "valueFromDbSettings",
	REPORT_ID : "reportId"
}, BlowoutServlet = {
	SERVLETURL : "/_ui/system/scheduler/cron/ScheduleBlowoutServlet",
	SUCCESS : "success",
	BLOWOUT : "blowout",
	SUFFIX : "suf"
}, UnifiedSearchUI = {
	SIDETABS_ID : "searchSidetabs",
	INITIAL_VIEW_MODE_SUMMARY : "summary",
	GLOBAL_SEARCH_SUGGESTED_SCOPES : "suggestedScopes",
	SEARCH_MORE_OBJECTS_ID : "searchMoreObjects",
	GLOBAL_SEARCH_CLEAR_BUTTON_ID : "phSearchClearButton",
	CSS_CLASS_SUMMARY_VIEW_SHOW_MORE_LINK : "summaryShowMoreLink",
	SEARCH_LOGGING_HANDLER : "search",
	SEARCH_SCOPE_DIALOG_WIDTH : 655,
	SEARCH_ALL_SUMMARY_VIEW_ID : "searchAllSummaryView",
	INITIAL_VIEW_MODE_FEEDS : "feeds",
	SIDETABS_LEFT_NAV_WRAPPER_ID : "leftnavwrapper",
	SIDETABS_FEED_RESULTS_ID : "feedToggle",
	SIDETABS_RECORDS_SLIDE_ID : "records",
	INITIAL_VIEW_MODE : "initialViewMode",
	SECOND_SEARCH_TEXT_ID : "secondSearchText",
	HEADER_SEARCH_SCOPE_INDICATOR_MAX_LENGTH : 38,
	SECOND_SEARCH_BUTTON_ID : "secondSearchButton",
	GLOBAL_SEARCH_CONTAINER_ID : "phSearchContainer",
	SIDETABS_RECORD_RESULTS_ID : "recordToggle",
	FIRST_PAGE_QUERY_ID_OVERRIDE : "firstPageQueryIdOverride",
	SEARCHRESULT_HOLDER_DIV_ID : "searchResultsHolderDiv",
	SIDETABS_SELECTED_SUMMARY_ID : "selectedSummary",
	SECOND_SEARCH_FORM_ID : "secondSearchForm",
	GLOBAL_SEARCH_CLEAR_BUTTON_DEFAULT_CLASS : "headerSearchClearButton",
	FOCUSED_ENTITY_PARAM_NAME : "fen",
	SIDETABS_SELECTED_DRILLDOWN_ID : "selectedDrilldown",
	GLOBAL_SEARCH_BUTTON_ID : "phSearchButton",
	MAX_VALID_MRU_SUGGESTIONS : 10,
	CACHE_TIMEOUT_MILLIS : 3E5,
	UNIFIED_SEARCH_PAGE_VERSION : "unifiedSearchPageVersion",
	HEADER_SEARCH_OPTIONS_CONTAINER_ID : "searchOptionsContainer",
	SIDETABS_EDIT_ID : "sidetabsSearchOptionsTop",
	SELECTED_OBJECTS_ID : "selectedObjects",
	GLOBAL_SEARCH_P2_ENHANCEMENTS : "globalSearchP2Enhancements",
	GLOBAL_SEARCH_P1_ENHANCEMENTS : "globalSearchP1Enhancements",
	SECOND_SEARCH_INFO_ICON_ID : "secondSearchInfo",
	GLOBAL_NAV_HEADER_SEARCH_BOX_LENGTH : 100,
	GLOBAL_SEARCH_INPUT_ID : "phSearchInput",
	UNIFIED_SEARCH_AJAX_SERVLET_CSRF_TOKEN : "ajaxServletCSRFToken",
	GLOBAL_SEARCH_FORM_ID : "phSearchForm",
	GUIDED_TOUR_LINK_ID : "guidedTourLink",
	INITIAL_VIEW_MODE_DETAIL : "detail",
	SECOND_SEARCH_DIV_ID : "secondSearchDiv",
	SEARCH_ALL_ID : "searchAll"
}, RtaImageServlet = {
	RTA_IMAGE_SERVLET_URL : "/servlet/rtaImage?"
}, ActivityReminderRefreshPage = {
	pCLASS_NAME : "ui.core.activity.ActivityReminderRefreshPage"
}, CaptchaVerifierServlet = {
	CLIENT_ERROR_PARAM : "error",
	CHALLENGE_PARAM : "chal",
	SERVLET_NAME : "common.html.captcha.CaptchaVerifierServlet",
	RESPONSE_PARAM : "resp",
	VALID_KEY : "valid"
}, AjaxLoadPLAServlet = {
	PAGE_SIZE : "pageSize",
	TYPE : "type"
}, FindSimilarOppsFilter = {
	MAX_DISPLAY_ROWS : 300
}, ActivityReminderPage = {
	pCLASS_NAME : "ui.core.activity.ActivityReminderPage"
}, SummaryLayoutEditor = {
	SUMMARY_LAYOUT_MIN_COL : 1,
	SUMMARY_LAYOUT_MAX_COL : 4
}, EmailAddrEditConstants = {
	pPASS_IN_EMAIL_ADDRESS : "pass_in_email_address",
	pSAVE_CANCEL : "saveCancel"
}, MultiSelectList = {
	availableRowPrefix : "row_",
	deselectLabelId : "deselectLabel",
	selectLabelId : "selectLabel",
	pTOTAL_ROW_COUNT : "msl_totalRowCount",
	allOrNoneCheckbox : "allOrNone",
	pUNSAVED_IDS : "unsavedIds",
	selectedFrameId : "selected",
	pIDS : "selectedIds",
	pTOTAL_ROW_COUNT_FILTER : "msl_totalRowCountFilter",
	pSELECT_ALL : "msl_selectAll",
	availableTableId : "availableTable",
	availableFrameId : "available",
	listEmptyLabelId : "listEmptyLabel",
	nameCellPrefix : "name_",
	availableCheckboxPrefix : "chk_",
	selectionsTableId : "selections",
	selectedRowPrefix : "sel_",
	pFILTER_TYPE : "filterType",
	selectedCheckboxPrefix : "uch_"
}, HomeCalendarAjaxServlet = {
	SERVLET_NAME : "core.activity.scheduling.HomeCalendarAjaxServlet",
	HOME_CALENDAR_ID : "homeCalendarSection",
	PROPOSED_EVENT_TAB_PARAM : "pe",
	HTML_PAYLOAD_PARAM : "htmlPayload",
	ACTIVE_TAB_ID : "activeTabId"
}, ProfileListInlineEditConstants = {
	DISABLE_PERMISSION : "disabledPermissionHtml",
	ENABLE_PERMISSION : "enabledPermissionHtml"
}, DashboardConstants = {
	CHART_RANGE_MIN_ELEMENT_NAME : "p19",
	DASHBOARD_COMPONENT_TYPE_ELEMENT_NAME : "p3",
	CHART_RADIO_BUTTON_VALUE : "0",
	TABLE_COLUMN2_ELEMENT_NAME : "pCol2",
	LEGEND_POSITION_ELEMENT_NAME : "p17",
	DRILLTYPE_REPORT_VALUE : "Report",
	TABLE_COLUMN_SORT_DESCENDING_VALUE : "DSC",
	USE_MULTI_COLUMN : "useMultiColumnTable",
	SORT_BY_ELEMENT_NAME : "p8",
	TABLE_COLUMN3_LABEL_NAME : "pCol3Lbl",
	TABLE_COLUMN_GROUP_NAME : "tcColGrp",
	CHART_RANGE_MAX_ELEMENT_NAME : "p20",
	DRILLTYPE_DETAIL_VALUE : "Detail",
	TABLE_COLUMN1_LABEL_NAME : "pCol1Lbl",
	TABLE_COLUMN4_ELEMENT_NAME : "pCol4",
	USE_MULTI_COLUMN_LABEL_NAME : "umcLbl",
	TABLE_COLUMN_SORT_LBL_ID : "tcSortByLbl",
	DRILL_TYPE : "p25",
	CUSTOM_REPORT_ELEMENT_NAME : "p2",
	NUMBER_ROWS_ELEMENT_NAME : "p9",
	TABLE_SORT_BY_PICKLIST : "tcSbp",
	TABLE_COLUMN2_LABEL_NAME : "pCol2Lbl",
	TABLE_COLUMN1_ELEMENT_NAME : "pCol1",
	TABLE_COLUMN4_LABEL_NAME : "pCol4Lbl",
	CHART_RANGE_MANUAL_ELEMENT_NAME : "p21",
	NUMBER_OF_TABLE_COLUMNS : "4",
	TABLE_SORT_RADIO_ELEMENT_NAME : "tcSbr",
	TABLE_COLUMN3_ELEMENT_NAME : "pCol3",
	TABLE_COLUMN_SORT_ASCENDING_VALUE : "ASC",
	TABLE_SORT_COLUMN_ELEMENT_NAME : "pSortCol",
	DRILLTYPE_FILTER_VALUE : "FilterReport",
	DRILLTYPE_URL_VALUE : "URL"
}, ForecastingTree = {
	HAS_MY_OVERRIDE_HAS_OTHER_OVERRIDE_INT : 3,
	NO_MY_OVERRIDE_NO_OTHER_OVERRIDE_INT : 0,
	HAS_MY_OVERRIDE_NO_OTHER_OVERRIDE_INT : 1,
	NO_MY_OVERRIDE_HAS_OTHER_OVERRIDE_INT : 2
}, OrganizerPage = {
	PROPOSE_TIME_MODE_MANUAL : "MANUAL",
	PROPOSE_TIME_MODE_AUTO : "AUTO",
	MAX_TOTAL_ATTENDEES : 50
}, AbstractAutoCompleteServlet = {
	AUTOCOMPLETE_USED_SUFFIX : "_acused",
	SUGGESTIONS : "suggestions",
	pINPUT : "inputString"
}, ForecastSharingPrefPopup = {
	DISABLE_CHECKBOX : "disableCheckbox",
	pIS_FCT_SHARE_ENABLED : "isFctShareEnabled",
	CAN_SHARE_RADIO : "enableRadio"
}, CrtLookupConstants = {
	LOOKUP_DEPTH_LIMIT : 4,
	LOOKUP_ELEM : "lookupBox",
	PATH_ELEM : "pathBox",
	CONTROL_ELEM_1 : "controlLinks1",
	LOOKUP_HEADER : "lookupInnerHeader"
}, ForecastingViewingIsoServlet = {
	NAME : "name",
	ISO : "iso"
},
DynamicContent = {
	pERROR_DESC : "errorDesc",
	pERROR_TITLE : "errorTitle",
	pTYME : "tyme",
	pCOOKIE_PARAM : "cookieParam"
}, NonUddKeyConstants = {
	SUBKEY_SEPARATOR : "___"
}, ChatterFilesConstants = {
	MAX_VISIBLE_COUNT : 5,
	DOC_VIEWER_CONTAINER_CLASS : "docViewerContainer",
	FILE_CONFIG_KEY_DOCID : "docId",
	FILE_SHARE_PERM : "share",
	FILE_VIEW_PERM : "view",
	FILE_VIEW_JS : "viewJS",
	FILE_VIEW_URL_POPUP_WINDOW : "viewUrlWindow",
	FILE_DOWNLOAD_CONFIG : "downloadCfg",
	FILE_VIEW_URL : "viewUrl",
	FILE_CONFIG_KEY_DESC : "desc",
	OVERLAY_ID : "docViewerOverlay",
	FILE_TITLE_SMALL_FONT_CLASS : "fileTitleSmallFont",
	FILE_SIZE : "fileSize",
	FEED_ACTION_PARAM_NAME : "fa",
	EDIT_FILE_CONFIG_KEY_TYPE_DESCRIPTION : "editDescription",
	FILE_DOWNLOAD_URL : "downloadUrl",
	FILE_DELETE_PERM : "delete",
	FILE_FIELD_CONFIG : "fieldCfg",
	FILE_EDIT_PERM : "edit",
	EDIT_FILE_CONFIG_KEY_TYPE : "editType",
	DOC_VIEWER_OVERLAY_CLASS : "docViewerOverlay",
	EDIT_FILE_CONFIG_KEY_TYPE_FILE_DETAIL : "editFileDetail",
	FILE_TITLE_ID : "fileTitle",
	UPLOAD_DIALOG_APPENDIX : "_upload",
	FILE_CONFIG_KEY_VERID : "verId",
	FILE_VIEW_CONFIG : "viewCfg",
	FILE_CONFIG_KEY_FILENAME : "fileName",
	CONTAINER_ID : "docViewerContainer",
	FILE_ADD_NEW_VERSION_PERM : "addNewVersion",
	DOC_VIEWER_CONTAINER_PARENT_CLASS : "docViewerContainerParent",
	DOCUMENT_ID : "documentid",
	FILE_PERM_CONFIG : "permCfg"
}, Activity = {
	pATT_WARNING : "attWarning",
	DAY_OF_WEEK_TUESDAY : "4",
	MAX_RECURRENCE_SPAN_ID : "maxRecurrence",
	WHO_BUTTON_ID : "whobtn",
	DAY_OF_WEEK_MONDAY : "2",
	REMINDER_LEAD_DAYS_TIME_ID : "reminder_ldt",
	DAY_OF_WEEK_FRIDAY : "32",
	MAX_RECURRENCE_END_DATE : "maxRecurrenceEndDate",
	pYEARLY_MONTHOFYEAR : "ymoy",
	DAY_OF_WEEK_SATURDAY : "64",
	DAY_OF_WEEK_SUNDAY : "1",
	REMINDER_DATE_TIME_ID : "reminder_dt",
	MAX_RECURRENCE_ERRORS : "maxRecurrenceErrors",
	REMINDER_SET_ID : "reminder_select_check",
	REMINDER_SELECT_ID : "reminder_lt",
	DAY_OF_WEEK_WEDNESDAY : "8",
	DAY_OF_WEEK_THURSDAY : "16",
	pYEARLY_DAYOFMONTH : "ydom",
	pNEW_ATTACHMENTS : "newatt",
	ACTIVITY_TYPE : "activityType"
}, SetupSearchElement = {
	SETUP_SEARCH_PARAM : "setupSearch",
	ATT_SEARCH_TEXT : "searchText"
}, SchemaBuilderConfig = {
	MAX_OBJECTS : 200,
	MAX_FIELDS : 25
}, TagConstants = {
	TAG_SEARCH_FIELD : "tagsSearch",
	EDIT_TAGS_PAGE : "/ui/tag/TagsEditPage",
	PUBLIC_TAG_NAMES_ELEM : "pTagNames",
	TAG_HEADER : "tag_header",
	TAG_SUMMARY_ID : "tagSummary",
	HIDDEN_TAG_ID_LIST : "hidden_tag_id_list",
	ERROR_DIV_ID : "tagHomeErrorDiv",
	BROWSER_TAG_TABLE_ID : "browseTagsTable",
	LOOKUP_TAGS_PAGE : "/ui/tag/LookupTagsPage",
	ROLODEX_SEARCH_VALUE : "-10",
	HIDING_SECTION_ID : "layoutEditSection",
	TAG_EDIT_ID : "tag_edit",
	TAG_RESULTS_BODY_ID : "tagListBody",
	BROWSER_SEARCH_HEADER_CLASS : "pbTagBrowserSearch",
	TAG_RESULTS_ID : "tagResults",
	TAG_IDS_ELEM : "tagIds",
	CHANGE_TAGS_IDS : "changeTagsIds",
	NOTIFY_MSG_ID : "successNotifyId",
	TAG_EDIT_LIST : "tag_edit_list",
	TAG_ROLODEX_ID : "tagRolodexId",
	SAVE_TAGS_PAGE : "/ui/tag/SaveTagsPage",
	EDIT_AREA_ID : "tag_edit_area",
	TAG_ID_LIST : "tIdList",
	TAG_NAMES_ELEM : "tagNames",
	IS_DELETE : "isDelete",
	TAG_UPDATE_STRING : "tagUpdate",
	SAVED_TAG_SEARCH : "savedTagSearch",
	TAG_DISPLAY_CONTAINER : "tag_display_container",
	pTAG_SCOPE_MODE : "scopeMode",
	EDIT_SECTION_ID : "editSectionId",
	TAG_DISPLAY_LIST : "tag_display_list",
	TAG_EDIT_ERROR_ID : "tag_edit_error",
	TAG_MERGE_CHECK : "/ui/tag/TagMergeCheckServlet",
	TAG_VALUE_FOR_UPDATE : "tValForUpdate",
	TAG_SAVE_ID : "tag_save",
	TAG_EDIT_TEXT_ID : "tag_edit_text",
	BROWSER_LIST_ID : "browseTags",
	HIDING_PUBLIC_SECTION_ID : "layoutPublicEditSection",
	PUBLIC_TAG_IDS_ELEM : "pTagIds",
	CHANGE_TAGS_NAMES : "changeTagsNames",
	TAG_CANCEL_ID : "tag_cancel",
	TAG_DROP_DOWN_CONTENTS_ID : "tag_drop_down_contents",
	TAG_SEARCH_RESULTS_URL : "/search/TagSearchResults",
	TAG_SET_HAS_RECORDS : "tagSetHasRecords",
	TAG_DROP_DOWN_ID : "tag_drop_down",
	HIDDEN_TAG_LIST : "hidden_tag_list"
}, GenerateRelationshipDefaults = {
	pRELATED_LIST_LABEL : "relatedListLabel",
	pENTITY_NAME : "entityName",
	pAGGREGATE_NAME : "aggregateName",
	pTARGET_ENTITY_NAME : "targetEntityName",
	pMASTER_LABEL : "masterLabel"
}, NewLayoutEditor = {
	PAGE_ID_PREFIX : "PG__",
	RELATED_LOOKUP_ID_PREFIX : "RLo__",
	STD_BTN_PREFIX : "BTN__",
	RL_ID_PREFIX : "RL__",
	BLANK_ID : "__BLANK"
}, InviterLookup = {
	pINVITED_IDS : "invtdids",
	EMAIL_ADDRESS_REQUIRED : "emailreq",
	pINVITEE_ID_SELECTED : "invsel",
	RETURN_INVITEE_DATA : "returnmore",
	HIDE_SEARCH_TYPES : "hidetype",
	MAX_TOTAL_ATTENDEES : "maxtotalattendees"
},
HTPortal = {
	pSECTION : "section",
	pCLASS_DAY : "R_DAY",
	pBODY : "body",
	pID : "id",
	pLOCATION : "loc",
	pFEATURE : "feature",
	pORG_ID : "orgId",
	pSELECT_LOCATION : "sel_loc",
	pCLASS_NAME : "cname",
	pTRACK : "track",
	pTARGET : "target"
}, BaseAssociationConstants = {
	VIDEO_LINK_ID : "queue_tutorial_video",
	SOURCE_PARAM_NAME : "src",
	HELP_LINK_ID : "queue_help",
	MASS_ASSOCIATION_MODE_PARAM : "massAssociationMode"
}, SchemaBuilder = {
	pREL_FIELDS : "rflds",
	FILTER_SYSTEM : "sys",
	pMANAGED_STATE : "man",
	pHASERRORFLAG : "hasError",
	pTOP : "to",
	pLEFT : "le",
	pALL_FLDS_LOADED : "afl",
	pFILTER_OPTIONS : "filter_opts",
	pDATATYPE_FORMULA : "Z",
	pHIDE_LEGEND_FLAG : "hlf",
	MASTER_DETAIL : "md",
	pSOFTDELETEINFOMESSAGE : "softDeleteInfoMessage",
	pLAYOUTID : "sblid",
	pLABEL : "l",
	pOBJECTS : "objs",
	pID : "id",
	pRELATIONSHIP : "rel",
	pENTITYID : "eid",
	pSBLAYOUT : "sbl",
	FILTER_SELECTED : "sel",
	FILTER_ALL : "all",
	HIERARCHY : "hi",
	pREQUIRED : "r",
	pWASDELETEDFLAG : "wasDeleted",
	pSHOW_RELATIONSHIP_FLAG : "srf",
	pRELATEDELEMENT : "relatedElement",
	pEDIT_PROFILE_FLAG : "epf",
	pLISTELEMENTLABELS : "listElementLabels",
	LOOKUP : "lu",
	NON_SPECIFIC_ERROR : "nonSpecificError",
	pURL : "u",
	pSHOW_LABELS_FLAG : "slf",
	pDATATYPE : "dt",
	FILTER_CUSTOM : "cus",
	pFIELDS : "flds",
	pLAYOUT_ITEM_ID : "sblitemid",
	pMESSAGETOP : "messageTop",
	pIS_CUSTOM : "cust",
	pCHECKBOXLABEL : "checkBoxLabel",
	pTYPE : "t",
	pNAME : "n",
	pHIDDEN : "h",
	FILTER_STANDARD : "std",
	pDELETEMSG : "deleteMsg",
	pDOMAIN : "d",
	pDATAEXPORTMESSAGE : "dataExportMessage"
}, ForecastingTabPage = {
	CURRENCY_INDICATOR_NAME : "currencyIndicatorName",
	CURRENCY_SELECT_ERROR_ID : "currencySelectError",
	CURRENCY_OVERLAY_CONTENT_DIV_ID : "currencyOverlayContent",
	CORP_CONVERSION_SPAN_ID : "corpConvert",
	CURRENCY_INDICATOR : "currencyIndicator",
	CURRENCY_SELECT_ID : "currencySelect"
}, vaSelectElementConst = {
	DOWN_CLASS : "down",
	UP_CLASS : "up"
}, AjaxLoadPLAForPageServlet = {
	PAGE_NUM : "pageNum"
}, UserDeactivate = {
	pREMOVE_FROM_CLOSED_OPP_TEAMS : 2,
	pREMOVE_FROM_ACCOUNT_TEAMS : 1,
	pREMOVE_FROM_ADHOC_CASE_TEAMS : 6,
	pREMOVE_FROM_OPEN_OPP_TEAMS : 3,
	pREMOVE_FROM_PREDEFINED_CASE_TEAMS : 5,
	pSPLITS_REMOVAL_NOTE : 4
}, CrtConstants = {
	MAX_OBJECTS : 4,
	OBJECT_PREFIX : "o",
	PICKLIST_VALUE_ID_SEPARATOR : "|",
	PICKLIST_VALUE_TABLE_FIELD_SEPARATOR : "."
}, CustomObjectTeamMemberUiConstants = {
	pMEMBER_PREFIX : "tm_",
	REMOVED_TEAMS_CONTAINER : "rtc",
	pCSP_PORTAL_PREFIX : "csp_",
	pTEAM_RECORD_PREFIX : "tt_",
	pREMOVED_TEAMS_PREFIX : "rt_",
	TEAMS_TABLE_ROW_PREFIX : "tt_t_r_",
	MEMBERS_TABLE_ROW_PREFIX : "tm_t_r_",
	pREMOVED_MEMBERS_PREFIX : "rm_",
	pTEAM_RECORDS_COUNT : "ttc",
	pMEMBERS_COUNT : "tmc",
	pSHARE_ACCESS_PREFIX : "sa_",
	REMOVED_MEMBERS_CONTAINER : "rmc",
	pROLE_PREFIX : "tmr_",
	MEMBERS_TABLE : "tm_t",
	TEAMS_TABLE : "tt_t"
}, LiveChatButtonConstants = {
	pERROR : "ferror",
	pID : "fid",
	pOP : "fop",
	pROW : "frow",
	pAND : "fand",
	pVALUE : "fval",
	pORDER : "fo",
	pTYPE : "ftype",
	pNAME : "fname"
}, ServiceDeskPage = {
	SERVICE_DESK_TAB_STATES_VALID : "sdtsvalid"
}, CustomFieldDefinitionUiModel = {
	FLS_VALUES : "flsValues",
	CAN_SET_EDITABLE : "canSetEditable",
	FLS_PROPERTIES : "flsProperties"
}, Kb2Id = {
	MAIN_ARTICLE_LIST_ID : "articleList"
}, LiveAgentConsoleAjaxServlet = {
	FINDORCREATE_COMMAND : "FINDORCREATE",
	JSON_SUCCESS_KEY : "success",
	ENTITY_ID_PARAM : "eid",
	AUTOQUERY_SEARCH_COMMAND : "AUTOQUERY_SEARCH",
	SERVLET_URL : "/_ui/support/liveagent/servicedesk/ajax/ConsoleAjaxServlet",
	COMMAND_PARAM : "cmd",
	GET_NAME_COMMAND : "GET_NAME",
	JSON_ENTITY_NAME : "name"
}, ColorInputConstants = {
	ERROR_COLOR_BOX_CSS : "errorColorBox",
	COLOR_BOX_CSS : "colorBox"
}, EntitySharingConstants = {
	ENTITY_ID : "entityId",
	SHARING_TYPE : "sharingType",
	SHARING_CURRENT_TYPE : "currentType",
	SHAREDWITH_GROUPS : "g",
	SHAREDWITH_NETWORK : "n",
	SHAREDWITH_COMPANY : "c",
	SHARE_OPTION_PARAM_NAME : "so",
	SHAREDWITH_PARAM : "sw",
	SHAREDWITH_PEOPLE : "p"
}, SoftphoneMatchTypeEnum = {
	SINGLE_MATCH : "SingleMatch",
	MULTIPLE_MATCHES : "MultipleMatches",
	NO_MATCH : "NoMatch"
}, QuickTextAutoCompleteServlet = {
	QUICK_TEXT_TRIGGER_KEY : "qtTrig",
	QUICK_TEXT_ID_PARAM : "qtIdParam",
	CHANNEL_PARAM : "channel",
	REQUEST_TYPE_PARAM : "reqType",
	QUICK_TEXT_BULKUPDATEMRU : "qtBulkUpdateMru",
	REQUEST_TYPE_SEARCH : "0",
	QUICK_TEXT_WHO_ID : "qtWhoId",
	REQUEST_TYPE_UPDATEMRU : "2",
	QUICK_TEXT_WHAT_ID : "qtWhatId",
	REQUEST_TYPE_LOOKUP : "1"
}, CustomMotifDefinitionPageConst = {
	COLOR_ELEMENT : "ce",
	MOTIF_ICON_PARAM : "file_id"
}, CrtLayoutElement = {
	cFIELD_UNUSED : "#CCCCAA",
	CSS_CLASS_LAYOUT_ITEM_SEPARATOR : "sepCell",
	cFIELD_USED_FONT : "#B0B0B0",
	ITEM_SHOWLABEL : "showLabel",
	NUM_LAYOUT_COLS : 4,
	SECTION_AVAIL_WRAPPER_ID : "availableSectionWrapper",
	ACTIONREF_ORDER : "order",
	COLUMN_ID : "columnId",
	SECTION_EDIT_HEADING : "editHeading",
	ACTIONREF_NAME : "name",
	FIELD_TYPE_SELECT_NAME : "availableDropDown",
	cSEPARATOR_ON : "#000000",
	ITEM_POS_X : "xPos",
	ITEM_DEFAULT_CHECKED : "defaultChecked",
	SECTION_TABLE_ID_PREFIX : "table",
	SECTION_DETAIL_HEADING : "detailHeading",
	ROOT_CONTAINER : "root",
	ITEM_BEHAVIOR : "behavior",
	LEFT_SECTION_ID : "layoutdndLeft",
	AVAIL_CELL : "availCell",
	COLUMN : "column",
	ITEM_LAYOUT_IDS : "lIds",
	SECTION_DIV_SUFFIX : "availSectionDiv",
	ITEM_NAME : "name",
	LAYOUT_NAME : "name",
	LAST_SEC_SEP_DIV : "LAST_SEC_SEP_DIV",
	SCROLL_BUFFER_ID : "scrollBuffer",
	ITEM_HEIGHT : "height",
	cFIELD_EMPTY : "#FFFFFF",
	cFIELD_IN_SECTION : "#CCCCCC",
	pVALUE : "val",
	ITEM : "item",
	SECTION : "section",
	XML_FORM_NAME : "submitForm",
	cFIELD_SELECTED : "#6699CC",
	ITEM_TYPE : "itemType",
	ITEM_ID : "itemId",
	cAVAILABLE_HIGHLIGHT : "#000000",
	SECTION_ID : "sectionId",
	CSS_CLASS_LAYOUT_ITEM : "itemCell",
	ITEM_CUSTOMLABEL : "customLabel",
	SECTION_CAN_EDIT_LABEL : "canEditLabel",
	pSAVE_AND_CLOSE : "saveAndClose",
	cFIELD_USED : "#EEEEEE",
	SEPARATOR_PREFIX : "rp_",
	SECTION_NUM_COLUMNS : "numColumns",
	SECTION_HEADER_ID_PREFIX : "sec_",
	SECTION_SEP_DIV_PREFIX : "LayoutSectionSeparator_",
	DEFAULT_NUM_COLS : "defaultNumCols",
	HOVER_DIV : "MOUSE_HOVER_DIV",
	MAX_DISPLAY_FIELD_LENGTH : 15,
	SECTION_SORT_ORDER : "sortOrder",
	CSS_CLASS_LAYOUT_CELL : "layoutCell",
	SECTION_SORT_ORDER_HORIZONTAL : "h",
	ITEM_SHOWSCROLLBARS : "showScrollbars",
	SECTION_NAME : "name",
	COLUMN_NAME : "columnName",
	SECTION_MASTER_LABEL : "masterLabel",
	MAIN_TABLE_DIV_ID : "mainTableDiv",
	LAYOUT_FIELDS_LIMIT : 1E3,
	ACTIONREF : "actionRef",
	ITEM_WIDTH : "width"
}, AdvancedCurrencyEnable = {
	enableButton : "enableButton",
	pENABLE : "enable"
}, DurationInputElement = {
	pMINUTES_NAME : "mi",
	pHOURS_NAME : "hh"
}, ContextPaneEditor = {
	COMPONENT_SELECT_ELEMENT_CLASS : "sourceTypeSelectElement",
	VISUALFORCE_ID : "visualforce_id_",
	COMPONENT_HEADER_ID : "cmpHeaderId_",
	CANVAS_ID : "canvas_id_",
	LOOKUP_ID : "lookup_id_"
}, RequestInfo = {
	pSID : "sid"
}, InlineHelp = {
	ORB : "helpOrb",
	DISPLAY_DIV_CLASS : "helpText",
	CLASS_NAME_HOVER : "helpButtonOn",
	CLASS_NAME : "helpButton",
	ID_SUFFIX : "-_help",
	SUFFIX_DELIMITER : "-_"
}, findSimilarQueryPage = {
	SEARCH_QUERY_STRING : "srch"
}, FieldTreeConstants = {
	SELECT_ID : "FieldTreeSelect",
	DB_NAME : "dbName",
	TYPE : "type",
	COLUMN_TYPE : "columnType"
}, FilterEditConstants = {
	pDEV_NAME : "devname",
	pSCOPE : "fscope",
	pVALUE : "fval",
	pOPERATOR : "fop",
	pCOLUMN : "fcol",
	pNAME : "fname"
}, AjaxGetUsersInGroups = {
	pNUM_USERS : "numUsers",
	pOWNER_NAME_LIST : "ownerNameList",
	pINVALID_GROUPS_MESSAGE : "invalidGroups",
	pOWNER_ID_LIST : "ownerIdList",
	pCLASS_NAME : "common.ownership.group.AjaxGetUsersInGroups"
},
AjaxLoadFieldsForEntity = {
	pPARENT_ENTITY_NAME : "parentEntity",
	pENTITY_NAME : "entity",
	pFIELD_LIST : "fieldList"
}, DesktopSidebarComponents = {
	GOOGLETALK_CONTAINER_ID : "googleTalk",
	SOFTPHONE_CONTAINER_ID : "softphoneContainer",
	MRU_LIST_CONTAINER_ID : "mruList"
}, IFrameElement = {
	EmptyRelatedListDoc : "emptyHtmlDoc.html",
	BLANK_SRC : "javascript: ''"
}, SynonymConstants = {
	SYNONYM_NAME_FILTER_PARAM_VALUE : "synonymFilterValue",
	SORT_DIRECTION_PARAM_NAME : "sortDirection",
	SYNONYM_PAGE_PARAM : "page",
	SORT_COLUMN_PARAM_NAME : "sortColumn",
	SYNONYM_GROUP_DISPLAY_STRING_PARAM : "synGroupDispStr"
}, EmailCCBccLookupConstants = {
	BCC_ADDR_ID : "bcc_addr",
	ADDITIONAL_TO_ID : "additional_to",
	CC_NAME_ID : "cc_name",
	BCC_NAME_ID : "bcc_name",
	ADDITIONAL_TO_ADDR_ID : "additional_to_addr",
	BCC_ID : "bcc",
	CC_ID : "cc",
	CC_ADDR_ID : "cc_addr",
	ADDITIONAL_TO_NAME_ID : "additional_to_name",
	REF_ID : "ref"
}, AccountAssociationSuggestionsServlet = {
	pASSOCIATION_DATA_PARAM : "adp",
	SEARCH : "SEARCH",
	pCONTACT_ID_PARAM : "adpc",
	DEFAULT : "DEFAULT",
	ACTION_COUNT : 3
}, CampaignManageMembers = {
	MEMBERS_UPDATED : "membersUpdated",
	NOTICE_DIV_ID : "notice",
	ERROR_TEXT_ID : "save_error_text",
	pLOOKUP_ID : "lookup",
	LEAD_JS : "l",
	pCOLUMN : "col",
	ERROR_DIV_ID : "save_error",
	CAMPAIGN_MEMBER_JS : "CampaignMember",
	ACCOUNT_JS : "a",
	FILTER_ID_PREFIX : "mm_filters_",
	MEMBERS_TOTAL : "membersTotal",
	EXISTING_TAB : 1,
	pFILTER_VALUE : "fval",
	DEFAULT_FILTER_ROW_COUNT : 5,
	pOPERATOR : "oper",
	ERROR_MSG : "membersError",
	CONTACT_JS : "c",
	ADD_TAB : 0,
	MEMBERS_REMOVED : "membersRemoved",
	MEMBERS_ADDED : "membersAdded"
}, PersonalSetup = {
	PERSONAL_SETUP_MODERATOR_INFO_VIDEO : "ModeratorVideoLink",
	PERSONAL_SETUP_MODERATORS : "Moderators",
	PERSONAL_SETUP_NODE_STR : "PersonalSetup"
}, Ideas = {
	COOKIE_IDEA_TOGGLE : "ideaToggle"
}, InlineScontrolElement = {
	DEFAULT_HEIGHT : 200,
	DEFAULT_WIDTH : -100
}, FilterEditPageConstants = {
	pSEARCH_ANCHOR : "searchAnchor"
}, ForecastRoleUser = {
	FORECAST_SHARE_RADIO : "forecastSharingRadios",
	pCAN_SHARE : "allowMgrFctSharing",
	pUSER : "user"
}, Desktop = {
	VIEW : "vw",
	CLOSETAB_ACTION : "closeTab",
	PROJECTONE : "p1",
	VIEW_LAYOUT_ID : "layoutId",
	OPEN_POPUP_FOCUS : "openPopupFocus",
	pGOTO_URL : "goToUrl",
	IS_IN_CONTEXT_PANE : "inContextPane",
	SFDCIFRAMEORIGIN : "sfdcIFrameOrigin",
	IS_WORKSPACE_VIEW : "isWsVw",
	OPEN_POPUP_MODAL_FOCUS : "openPopupModalFocus",
	CUSTOM_SIDEBAR_COMPONENTS : "sidebarCts",
	AgentConsoleX : "AgentConsoleX",
	AgentConsoleY : "AgentConsoleY",
	RESIZE_WIDTH : "resizeWidth",
	ENCLOSING_VIEW_ENTITY_ID : "id",
	VIEW_HEIGHT_MIN_RATIO : 0.5,
	LOCK : "lk",
	NAVIGATOR : "nv",
	AgentConsoleS : "AgentConsoleS",
	JIFFY_AUTOMEASURE : "Complete",
	pGOTO_ID : "goToId",
	SIDEBAR_NORMAL_WIDTH_STYLE_PX : "200",
	VIEW_WIDTH_MIN_RATIO : 0.5,
	NONCE : "nonce",
	BROWSER_MAX_URL : "2048",
	AgentConsoleFE : "AgentConsoleFE",
	IS_DESKTOP : "isdtp",
	REQUEST_ORIGIN : "consoleReqOrigin",
	REQUEST_ORIGIN_MRU_HOVER : "mruhover"
}, SearchRelatedList = {
	ERROR_DIV_ID_PREFIX : "srchErrorDiv_",
	SHOW_FILTERS_ID : "showFiltersId",
	ShouldNotLookUp : "noLookUp",
	COLUMN_PARAMETER : "columns",
	FILTER_FIELDS_SAVE_PREFIX : "save_filter_",
	FILTER_FIELD_FORM_PREFIX : "field_name_form_",
	pSEARCH : "search",
	COLUMN_SELECTOR_PREFIX : "selector_",
	SearchUserLayoutServletName : "UserSearchListLayout",
	SEARCH_IDENTIFIER_PARAM : "searchId",
	HIDE_FILTERS_ID : "hideFiltersId",
	ENTITY_PARAMETER : "entity",
	pENTITY_ALL : "0",
	COMBO_BUTTON_ID : "comboButton",
	SEARCH_ACTION_IDENTIFIER_PARAM : "aId",
	ALL_STATES_PREFIX : "allStates_",
	LIST_LAYOUT_TYPE_PARAMETER : "layoutType",
	FILTER_FIELDS_PARAM : "sFltrFields",
	SearchFilterInfoServletName : "SearchFilterInfo",
	FILTER_FIELDS_PREFIX : "field_name_",
	PER_ENTITY_VALUE : "perEntityValue",
	pSEARCH_STR : "str"
}, TagMode = {
	PUBLIC : "public",
	PERSONAL : "personal"
}, AjaxGetFieldTreeChildren = {
	NODE_LIST : "nodeList",
	FORMULA_TYPE : "formulaType",
	NODE_KEY : "nodeKey"
}, ForecastingJumpToUserServlet = {
	THUMBNAILURL : "thumbnailUrl",
	USERNAME : "userName",
	pSEARCH : "search",
	USERID : "userId"
}, ServiceDeskHotkeyEditor = {
	ACTIVE_CHECKBOX_PARAM : "pActiveCheckbox",
	C_HOTKEY_TABLE : "customHotkeyTable",
	K_EVENT_NAME : "eventName",
	K_ID : "id",
	DEFAULT_HOTKEY_PARAM : "pDefaultHotkey",
	C_DIALOG_KEY_NAME_ID : "c_keyNameDialogId",
	K_KEY_COMBO : "keyCombo",
	K_KEY_NAME : "keyName",
	C_DIALOG_KEY_EVENT_ID : "c_keyEventDialogId",
	TABLE_KEY_NAME_ID : "tableKeyNameId",
	C_DIALOG_KEY_DESC_ID : "c_keyDescriptionDialogId",
	ATTRIBUTE_HOTKEY_TYPE : "hotkeytype",
	CATEGORY : "category",
	CUSTOM_HOTKEY_PARAM : "pCustomHotkey",
	C_TABLE_KEY_NAME_ID : "c_keyNameTableId",
	DEFAULT_HOTKEY_DIALOG_ID : "defaultHotkeyDialogId",
	C_DIALOG_KEY_COMBO_ID : "c_keyComboDialogId",
	ADD_CUSTOM_HOTKEY_ID : "_addHotkey",
	DIALOG_KEY_COMBO_ID : "dialogKeyComboId",
	TABLE_KEY_COMBO_ID : "tableKeyComboId",
	DIALOG_KEY_NAME_ID : "dialogKeyNameId",
	C_HOTKEY_DIALOG_ID : "customHotkeyDialogId",
	C_TABLE_KEY_COMBO_ID : "c_keyComboTableId",
	KEY_COMBO_CELL : "keyComboCell",
	C_TABLE_KEY_EVENT_ID : "c_keyEventTableId",
	K_KEY_DESC : "keyDesc",
	C_TABLE_KEY_DESC_ID : "c_keyDescTableId",
	C_HOTKEY_ROW_ID : "customHotkeyRowId",
	CONFIG_SECTION_ID : "keyConfigSectionId",
	C_DELETE_DIALOG_ID : "customDeleteHotkeyId"
}, TaskOwnerLookup = {
	pTABBED_TMU_LOOKUP : "tabbedTmuLookup",
	pLOOKUP_UROG_SUFFIX : "_lkurogid",
	DONE_BUTTON_ID : "doneButton"
}, MotifInputElementConst = {
	MOTIF_ELEMENT_SUFFIX : "motifElement",
	FIELD_NAME_MOTIF : "motifName",
	FIELD_NAME_ICON : "motifIcon",
	FIELD_NAME_DESCRIPTION : "motifClass"
}, Udd = {
	EMPTY_KEY : "000000000000000"
}, SideTabPreferenceServlet = {
	pTAB_NAME_PARAM : "tabName",
	pIS_COLLAPSED_PARAM : "isCollapsed",
	pSAVE : "save",
	pCONFIG_LIST : "configList",
	pCONFIG_KEY : "configKey",
	pQUERY_ORDER_PARAM : "tabIndex"
}, LiveAgentFindOrCreate = {
	JSON_ISFINDORCREATE_KEY : "isFindOrCreate",
	SAVE_TO_TRANSCRIPT : "SaveToTranscript",
	JSON_FINDORCREATE_KEY : "findOrCreatePageUrl",
	ISTRANSFERRED_PARAM : "isTransferred",
	FINDORCREATE_PARAM : "findorcreate"
}, UserInterfaceUI = {
	pALOHA_CHATTER_MSG : "alohaChatterMsg",
	pINLINE_SCHEDULING_NAME : "inlineScheduling",
	pALOHA_SKIN : "alohaSkin",
	pSPELL_CHECKER_ACTIVITIES_NAME : "spellcheckerActivities",
	pUSE_SETUP_SEARCH_NAME : "useSetupSearch",
	pUSE_PROFILE_CUSTOM_TABSETS : "useProfileCustomTabsets",
	pCLICK_AND_CREATE_ON_CALENDAR_NAME : "clickAndCreateOnCalendar",
	pUSE_SETUP_V2_NAME : "useSetupV2",
	pSPELL_CHECKER_ENABLED_NAME : "spellchecker",
	pINLINE_SCHEDULING_NAME_MESSAGE : "inlineSchedulingMessage",
	pDRAG_AND_DROP_ON_CALENDAR_NAME : "dragAndDropOnCalendar",
	pNEW_LIST_VIEW_NAME : "newListView"
}, ViralInviteSignupConstants = {
	STAGE_ACCOUNT : "ACCOUNT",
	LOGIN_ID : "p1",
	PAGE_BLOCK_STAGE : "PageBlockStage",
	ORG_NAME_ID : "org_name",
	SPINNER_IMAGE_ID : "finishSpinnerImgId",
	VIRAL_INVITE_SIGNUP_PAGE_ID : "ViralInviteSignup",
	READONLY_ORG_NAME_ID : "org_name_readonly",
	PREVIOUS_BUTTON_DOM_ID : "goPrevious",
	DEFAULT_PAGE_BLOCK_STAGE : "DefaultPageBlockStage",
	NEXT_BUTTON_DOM_ID : "goNext"
}, HelpBubbleConstants = {
	CLASS_CREATE_GROUP_HELP_BUBBLE : "createGroupHelpBubble",
	CLASS_CHANGE_EMAIL_SETTINGS_HELP_BUBBLE : "changeGroupEmailSettingsHelpBubble",
	CLASS_INVITE_PEOPLE_BUBBLE : "invitePeopleHelpBubble",
	CLASS_JOIN_GROUP_HELP_BUBBLE : "joinGroupHelpBubble",
	CLASS_CHATTER_INVITE_HELP_BUBBLE : "chatterInviteHelpBubble",
	CLASS_FOLLOW_PEOPLE_HELP_BUBBLE : "followPeopleHelpBubble",
	CLASS_ADD_GROUP_MEMBERS_HELP_BUBBLE : "addGroupMembersHelpBubble"
},
LookupInputElement = {
	pLOOKUP_WIDGET : "_lkwgt",
	DIALOG_ID : "LookupOverlayDialog",
	LOOKUP_IFRAME : "lookupIFrame"
}, PortalStyleConfigEditorConstants = {
	PARAM_PREFIX : "p_"
}, BodyLayout = {
	BODY_CELL_ID : "bodyCell",
	SIDEBAR_CELL : "sidebarCell",
	BODY_TABLE_ID : "bodyTable",
	NO_TABLE_BODY_ID : "ssResultsPageContainer",
	PAGE_HEADER_ID : "AppBodyHeader",
	FOOTER_DIV_ID : "bodyFooter"
}, ChangeUsernameConstants = {
	pNEW_USERNAME_ELEM : "p102",
	pIS_USERNAME_CHANGED_ELEM : "p101"
}, MouseOverElement = {
	DEFAULT_CLASS : "mouseOverInfoOuter",
	DEFAULT_CLASS_INNER : "mouseOverInfo"
},
GoogleTalkConstants = {
	COLLAPSED_HEIGHT : 0,
	MIN_EXPANDED_HEIGHT : 22,
	HEIGHT_COOKIE : "gTalkHeight",
	COLLAPSED_COOKIE : "gTalkCollapsed",
	EXPANDED_HEIGHT : 400
}, AssociationSelectElement = {
	ASSOCIATION_DATA_PREFIX : "aasead_",
	SERVLET_NAME : "sync.association.actions.AccountAssociationSuggestionsServlet",
	PARENT_ID_NAME_PREFIX : "aasepid_",
	SELECT_NAME_PREFIX : "aasesel_",
	LOOKUP_NAME_PREFIX : "aaselkup_"
}, SetupTreeNodeConstants = {
	COOKIE_KEY : "setupopen"
}, JigsawSearch = {
	CONTACT_SEARCH_OPTIONS : "contactSearchOptions",
	COMPANY_SEARCH_OPTIONS : "companySearchOptions",
	ST : "st",
	EI : "ei"
}, MCFilterPaneParams = {
	pNO_LIMIT : "noLimit",
	pSCOPE : "ofscope",
	pORDER_BY_DIV : "orderBySection",
	pSET_LIMIT : "setLimit",
	NONE_SCOPE_VALUE : "-1",
	pMAX_RECORD_RADIO : "maxRecordRadio"
}, ReportConstants = {
	pDELREP : "delrep",
	YES : "yes",
	pDRILLDOWN_VAL : "drillval",
	pDRILLDOWN : "drilldown",
	pEDIT : "edit",
	pDRILLDOWN_BREAK : "drillbreak",
	pSubTotalBy0 : "subtotalBy0",
	pDRILLDOWN_OPERATOR : "drillop",
	pDRILLDOWN_COL : "drillcol"
}, CompactLayoutUiConst = {
	hideItemsRight : "hideItemsRight",
	saveButtonId : "saveButton",
	switchColumnToRight : "switchColumnRight",
	hideItemsLeft : "hideItemsLeft",
	showItemsLeft : "showItemsLeft",
	switchColumnToLeft : "switchColumnLeft",
	showItemsRight : "showItemsRight"
}, AjaxLoadPLAForRecordTypeServlet = {
	RECORD_TYPE_ID : "rtId"
}, EventObject = {
	ONE_DAY_IN_MINUTES : 1440
}, BounceEmailConstants = {
	HIDDEN_BOUNCE_REASON : "hidden_bounce_reason",
	HIDDEN_EMAIL_ADDRESS : "hidden_email_address",
	HIDDEN_BOUNCE_DATE : "hidden_bounce_date"
}, SessionTimeServlet = {
	TIMEOUTP : "sp",
	TIMEOUT : "sr"
}, SidebarConstants = {
	pSEARCH_SIDEBAR_STR : "sbstr",
	SIDEBAR_DIV_ID : "sidebarDiv",
	HANDLE_ID : "handle",
	SIDEBAR_COLLAPSED_CLASS : "sidebarCollapsed",
	HANDLEBAR_CONTAINER : "handlebarContainer",
	PIN_INDICATOR_ID : "pinIndicator",
	SIDEBAR_PINNED_COOKIE : "sidebarPinned",
	PIN2_INDICATOR_ID : "pinIndicator2"
}, MultiUserCalendar = {
	SHOW_NAMES_RIGHT : "2",
	SHOW_NAMES_BOTH : "0",
	SHOW_NAMES_LEFT : "1",
	SHOW_NAMES_NONE : "3"
}, TimePickerInputElementConstants = {
	EMPTY_TIME_STANDIN : "HH:MM"
}, LookupValidationServlet = {
	pENTITY_NAME : "acent",
	pFILTER_RESULTS : "filterresults",
	pLKFIELD_NAME : "aclkfield",
	pDEPDATA_NAME : "aclkdata",
	pLKID_NAME : "aclkid",
	pLKENTITY_NAME : "aclkent"
},
ColorPickerConstants = {
	DOM_ID : "colorPicker",
	COLOR_VIEW_ID : "colorPickerColorView",
	HEX_VIEW_ID : "colorPickerHexView"
}, HighlightsPanelConstants = {
	HOVER_ICON_CONTAINER_CLASS : "hp_hover_icons",
	HOVER_LABEL_CLASS : "hp_hover_label",
	HIGHLIGHTS_PANEL_ID : "highlights_panel",
	VALUE_ELLIPSIS_CLASS : "hp_value_ellipsis",
	VALUE_CLASS : "hp_value",
	ROW_PREFIX_CLASS : "hp_row",
	LABEL_CLASS : "hp_label",
	HOVER_VALUE_CLASS : "hp_hover_value",
	HOVER_CLASS : "hp_hover",
	LABEL_ELLIPSIS_CLASS : "hp_label_ellipsis",
	DRAWER_ID : "highlights_panel_drawer",
	SINGLE_ITEM_COLUMN_CLASS : "hp_single_item_col",
	CELL_DIV_CLASS : "hp_cell"
}, SectionElement = {
	LEFT_TABLE_CLASS : "detailList"
}, DataDotComCleanConstants = {
	MATCH_OPTION_NAME : "cleanAcctMatchOption",
	FIELD_OPTION_SUFFIX : "_fieldOption",
	ENTITY_ENABLE_SUFFIX : "_entityEnable",
	ENTITY_OPTION_SUFFIX : "_entityOption"
}, StageManager = {
	pWIZARD_RET_URL : "wizardRetUrl"
}, SchedulePage = {
	pDuelOuter : "duelOuter",
	pIsOffPeak : "isoffpeak",
	pNotifyMe : "nm",
	pNotifyOthers : "no",
	pBlowout : "bout",
	pJobType : "jt",
	pEmailUrog : "eurog"
}, ForecastingDateRangeServlet = {
	PERIODDURATION : "periodDuration",
	pPERIODLABELS : "periodLabels",
	PERIODTYPE : "periodType",
	STARTPERIOD : "startPeriod",
	pDATERANGETYPE : "dateRangeType"
};
function GenericSfdcPage() {
	this.init();
	this.inlineHelpMap = {};
	this.helpParentElement = this.helpFader = null;
	this.actionListeners = {};
	this.errorDiv = this.personalSetupArgs = null;
	var a = this;
	this.dirtyState = GenericSfdcPage.STATE_CLEAN;
	this.updateDirtyState = function (a) {
		this.dirtyState = a;
		this.callListeners(GenericSfdcPage.UPDATE_DIRTY_STATE_EVENT, a)
	};
	this.getDirtyState = function () {
		return this.dirtyState
	};
	this.handleHelpHover = function (b) {
		if ((b = getEventTarget(getEvent(b))) && !UserContext.isAccessibleMode)
			if (b.className ==
				InlineHelp.CLASS_NAME)
				b.className = InlineHelp.CLASS_NAME_HOVER;
			else if ("LABEL" == b.nodeName && b.parentNode && b.parentNode.className == InlineHelp.CLASS_NAME)
				b.parentNode.className = InlineHelp.CLASS_NAME_HOVER;
			else if (b.className == InlineHelp.ORB) {
				for (helpSpan = b.parentNode; !(helpSpan.className == InlineHelp.CLASS_NAME || helpSpan.className == InlineHelp.CLASS_NAME_HOVER); )
					helpSpan = helpSpan.parentNode;
				var c = helpSpan.id;
				helpSpan.className = InlineHelp.CLASS_NAME_HOVER;
				c && c.length > InlineHelp.SUFFIX_DELIMITER.length &&
				(c = c.substring(0, c.lastIndexOf(InlineHelp.SUFFIX_DELIMITER)), a.showHelp(c, helpSpan, b))
			}
	};
	this.handleHelpUnhover = function (b) {
		var c = getEventTarget(getEvent(b));
		c && !UserContext.isAccessibleMode && (c.className == InlineHelp.CLASS_NAME_HOVER && mouseExited(b, c) ? c.className = InlineHelp.CLASS_NAME : "LABEL" == c.nodeName && c.parentNode.className == InlineHelp.CLASS_NAME_HOVER && mouseExited(b, c.parentNode) ? c.parentNode.className = InlineHelp.CLASS_NAME : c.className == InlineHelp.DISPLAY_DIV_CLASS && mouseExited(b, c) ? (b = getEventToElement(getEvent(b))) &&
				(b.className != InlineHelp.ORB && a.helpFader) && a.helpFader.fadeOut() : c.className == InlineHelp.ORB && mouseExited(b, c) && (b = getEventToElement(getEvent(b)), c = c.parentNode, UserContext.isAccessibleMode && (c = c.parentNode), b.className != InlineHelp.DISPLAY_DIV_CLASS && (b != c && (c.className = InlineHelp.CLASS_NAME), a.helpFader && a.helpFader.fadeOut())))
	};
	this.appendToOnloadQueue(function () {
		addEvent(window, "resize", function () {
			a.executeOnResizeQueue()
		});
		addEvent(document, "mouseover", a.handleHelpHover, !1);
		addEvent(document,
			"mouseout", a.handleHelpUnhover, !1);
		(Sfdc.userAgent.isIE6 || Sfdc.userAgent.isIE7 || Sfdc.userAgent.isIE8) && addEvent(document.body, "click", a.handleLabelClickIEOnly)
	});
	this.appendToOnloadQueue(GenericSfdcPage.displayAlohaWarning)
}
GenericSfdcPage.STATE_CLEAN = 0;
GenericSfdcPage.STATE_DIRTY = 1;
GenericSfdcPage.STATE_ERROR = 2;
GenericSfdcPage.STATE_SAVING = 3;
GenericSfdcPage.UPDATE_DIRTY_STATE_EVENT = "updateDirtyState";
GenericSfdcPage.prototype.init = function () {
	this.onLoadQueue = [];
	this.onBeforeUnloadQueue = [];
	this.onResizeQueue = [];
	this.hasRun = !1;
	this.relatedLists = [];
	this.relatedListsById = {};
	this.dialogs = {};
	this.messages = {};
	this.appendToOnloadQueue(function () {
		try {
			document.execCommand("BackgroundImageCache", !1, !0)
		} catch (a) {}

	}, "Turn on CSS background image cache (IE6 only)")
};
GenericSfdcPage.prototype.handleLabelClickIEOnly = function (a) {
	var b = getEvent(a);
	if ((b = getEventTarget(b)) && "LABEL" == b.tagName && b.htmlFor)
		if (b = getElementByIdCS(b.htmlFor))
			type = (b.type || "").toLowerCase(), ("checkbox" == type || "radio" == type) && b.click(), b.focus && (b.focus(), a.returnValue = !1)
};
GenericSfdcPage.prototype.prependToOnloadQueue = function (a, b) {
	b && (a.desc = b);
	this.hasRun ? this.execFunctionNoThrow(a) : this.onLoadQueue.unshift(a)
};
GenericSfdcPage.prototype.appendToOnloadQueue = function (a, b) {
	b && (a.desc = b);
	this.hasRun ? this.execFunctionNoThrow(a) : this.onLoadQueue.push(a)
};
GenericSfdcPage.prototype.executeOnloadQueue = function () {
	if (!this.hasRun) {
		GenericSfdcPage.HAS_INITIALIZED_TAB_ORGANIZER || (GenericSfdcPage.HAS_INITIALIZED_TAB_ORGANIZER = !0, SfdcApp.Controls.TabOrganizer && new SfdcApp.Controls.TabOrganizer);
		for (var a = 0; this.onLoadQueue && a < this.onLoadQueue.length; a++)
			this.execFunctionNoThrow(this.onLoadQueue[a]);
		this.hasRun = !0;
		this.onLoadQueue = []
	}
};
GenericSfdcPage.prototype.prependToOnBeforeUnloadQueue = function (a, b) {
	b && (a.desc = b);
	this.onBeforeUnloadQueue.unshift(a)
};
GenericSfdcPage.prototype.appendToOnBeforeUnloadQueue = function (a, b) {
	b && (a.desc = b);
	this.onBeforeUnloadQueue.push(a)
};
GenericSfdcPage.prototype.executeOnBeforeUnloadQueue = function () {
	for (var a = 0; this.onBeforeUnloadQueue && a < this.onBeforeUnloadQueue.length; a++)
		this.execFunctionNoThrow(this.onBeforeUnloadQueue[a]);
	if (window.Jiffy && Jiffy.onUnload)
		Jiffy.onUnload()
};
GenericSfdcPage.prototype.prependToOnResizeQueue = function (a, b) {
	b && (a.desc = b);
	this.onResizeQueue.unshift(a)
};
GenericSfdcPage.prototype.appendToOnResizeQueue = function (a, b) {
	b && (a.desc = b);
	this.onResizeQueue.push(a)
};
GenericSfdcPage.prototype.executeOnResizeQueue = function () {
	for (var a = 0; this.onResizeQueue && a < this.onResizeQueue.length; a++)
		this.execFunctionNoThrow(this.onResizeQueue[a])
};
GenericSfdcPage.prototype.execFunctionNoThrow = function (a) {
	try {
		a()
	} catch (b) {
		a.desc && (b.sfdcDesc = a.desc),
		Sfdc.error(b)
	}
};
GenericSfdcPage.prototype.registerListener = function (a, b) {
	this.actionListeners[a] = this.actionListeners[a] || [];
	this.actionListeners[a].push(b)
};
GenericSfdcPage.prototype.callListeners = function (a, b) {
	var c = this.actionListeners[a];
	if (c)
		for (var d = 0; d < c.length; ++d)
			c[d](b)
};
GenericSfdcPage.prototype.setPrefAndHideBanner = function (a, b, c) {
	UserContext.userPreferences.setBoolean(a, b);
	this.hideMessage(c)
};
GenericSfdcPage.prototype.getRelatedListCount = function (a) {
	return a.relatedLists.length
};
GenericSfdcPage.prototype.registerRelatedList = function (a, b, c, d, f, g, h, k, l, m) {
	var n = 0 == sfdcPage.getRelatedListCount(this);
	this.relatedListsById[a] || (this.relatedListsById[a] = new RelatedList(a, b, c, d, f, g, h, k, m), this.relatedLists.push(this.relatedListsById[a]));
	this.relatedListPanel && l && this.relatedListPanel.registerList(this.relatedListsById[a]);
	var e = this;
	n && this.prependToOnloadQueue(function () {
		e.relatedListPanel && e.relatedListPanel.addListsToPanel && e.relatedListPanel.addListsToPanel()
	}, "rlHovers: Initializing panel")
};
GenericSfdcPage.prototype.registerDialog = function (a) {
	this.appendToOnloadQueue(function () {
		a.createDialog()
	}, "Create a dialog");
	this.dialogs[a.id] = a
};
GenericSfdcPage.prototype.unRegisterDialog = function (a) {
	this.dialogs[a.id] = null
};
GenericSfdcPage.prototype.getDialogById = function (a) {
	return this.dialogs[a]
};
GenericSfdcPage.prototype.getRelatedListById = function (a) {
	return this.relatedListsById[a]
};
GenericSfdcPage.prototype.getHrefAsRetURL = function () {
	var a = window.location.href.split("/");
	a.splice(0, 3);
	return encodeURIComponent("/" + a.join("/"))
};
GenericSfdcPage.prototype.includeJavascriptTag = function (a) {
	return this.embedJSTag(a, document)
};
GenericSfdcPage.prototype.embedJSTag = function (a, b) {
	var c = b.getElementsByTagName("head").item(0),
	d = b.createElement("script");
	d.setAttribute("language", "javascript");
	d.setAttribute("type", "text/javascript");
	d.setAttribute("src", a);
	c.appendChild(d);
	return !1
};
GenericSfdcPage.prototype.embedExternalStyleSheet = function (a, b) {
	var c = b.createElement("link");
	c.setAttribute("href", a);
	c.setAttribute("type", "text/css");
	c.setAttribute("rel", "stylesheet");
	b.body.parentNode.firstChild.appendChild(c)
};
GenericSfdcPage.prototype.hideEmbeddingIframe = function (a) {
	a.name && document.getElementById(a.name) && (document.getElementById(a.name).style.display = "none", document.getElementById(a.name).parentNode.style.border = "none")
};
GenericSfdcPage.prototype.setHelp = function (a, b) {
	this.inlineHelpMap[a] = b
};
GenericSfdcPage.prototype.getHelp = function (a) {
	return this.inlineHelpMap[a]
};
GenericSfdcPage.prototype.setHelpParent = function (a) {
	this.helpParentElement = a
};
GenericSfdcPage.prototype.showHelp = function (a, b, c) {
	var d = this.getHelp(a);
	"undefined" === typeof c && (c = null);
	d && (this.displayDiv || (this.displayDiv = document.createElement("DIV"), this.displayDiv.className = InlineHelp.DISPLAY_DIV_CLASS), a = this.helpParentElement, a || (a = document.getElementById("bodyDiv_setup"), a || (a = document.getElementById(BodyLayout.BODY_CELL_ID), a || (a = document.body))), a.appendChild(this.displayDiv), this.displayDiv.style.top = getObjY(b) + b.offsetHeight + 8 - getObjY(a) + "px", this.helpFader || (this.helpFader =
				new MouseOverFadeHandler(c, this.displayDiv, !1, "left")), this.displayDiv.innerHTML = d, this.helpFader.setPosition(), d = (c = document.getElementById(SidebarConstants.SIDEBAR_DIV_ID)) ? c.offsetWidth : 0, LC.isRtlPage() ? (b = getObjX(a) + a.offsetWidth - getObjX(b) - this.displayDiv.offsetWidth, c && 0 < d && (b += d, a = getObjX(a) + a.offsetWidth - getObjX(c), b < a && (b = a)), 0 <= b && (this.displayDiv.style.right = b + "px")) : (b = getObjX(b) - getObjX(a) + b.offsetWidth - this.displayDiv.offsetWidth, c && (b += d, a = getObjX(c) + d, b < a && (b = a)), 0 <= b && (this.displayDiv.style.left =
					b + "px")), this.helpFader.fadeIn())
};
GenericSfdcPage.prototype.registerMessage = function (a) {
	var b = document.getElementById(a);
	b && !this.messages[a] && (this.messages[a] = b)
};
GenericSfdcPage.prototype.hideMessage = function (a) {
	if (a = this.messages[a])
		a.style.display = "none"
};
GenericSfdcPage.prototype.showMessage = function (a) {
	if (a = this.messages[a])
		a.style.display = "block"
};
GenericSfdcPage.prototype.handleDivisionOnChange = function (a, b) {
	var c = UserContext.getUrl(a),
	d = {};
	d[b.name] = b.value;
	Sfdc.Ajax.post(c, function () {
		document.filter_element && document.filter_element.submit();
		if (ListViewport.instances)
			for (var a in ListViewport.instances) {
				var b = ListViewport.instances[a];
				b.refreshList && b.refreshList()
			}
	}, {
		data : d
	})
};
GenericSfdcPage.prototype.registerDependentLookup = function () {};
GenericSfdcPage.prototype.getReferredDomIds = function (a) {
	if ("undefined" != typeof apexDependentLookupInfo)
		return apexDependentLookupInfo.lookupInfo[a]
};
GenericSfdcPage.prototype.save = function () {
	var a = document.getElementsByName(EditPageConstants.pSAVE);
	0 < a.length && a[0].click()
};
GenericSfdcPage.prototype.getEntityId = function (a) {
	if ("undefined" != typeof apexDependentLookupInfo)
		return apexDependentLookupInfo.entitiesByClientId[a]
};
GenericSfdcPage.prototype.getFieldValueById = function (a) {
	var b = getElementByIdCS(a + EditElement.pID_SUFFIX);
	b || (b = getElementByIdCS(a));
	if (b)
		return "checkbox" == b.type ? b.checked ? "1" : "0" : hasStyleClass(b.parentNode, "dateOnlyInput") ? (a = b.value, LC.isEnglishLanguage() && (a = LC.isEnglishUS() ? DateUtil.getCheckYearValue(b.value) || b.value : DateUtil.getEvaluateShortcutValue(b.value) || b.value), a) : b.value
};
GenericSfdcPage.prototype.initLookups = function () {
	for (var a in ForeignKeyInputElement.allElements)
		if (ForeignKeyInputElement.allElements.hasOwnProperty(a)) {
			var b = ForeignKeyInputElement.allElements[a];
			b.referredDomIds = this.getReferredDomIds(a);
			b.afterLoad()
		}
	for (a in ForeignKeyInputElement.allElements)
		ForeignKeyInputElement.allElements.hasOwnProperty(a) && ForeignKeyInputElement.allElements[a].validateAfterLoadIfNecessary()
};
GenericSfdcPage.prototype.notifyAriaErrorMsg = function () {
	this.errorDiv || (this.errorDiv = Sfdc.get(DetailElement.DEFAULT_ERROR_DIV_ID + (this.visualforce ? "_" + this.visualforce : "")));
	this.errorDiv && (this.errorDiv.innerHTML && "none" != Sfdc.Dom.getStyle(this.errorDiv, "display")) && Sfdc.Aria.alert(this.errorDiv.innerHTML)
};
GenericSfdcPage.displayAlohaWarning = function () {
	var a = document.getElementById("browserWarningContent");
	if (a && !UserContext.userPreferences.getBoolean("HideBrowserWarning")) {
		var b = Dialogs.types.INFO,
		a = Dialogs.createDialog({
				id : "browserWarningDialog",
				title : LC.getLabel("BrowserWarnings", "DialogTitle"),
				message : a.innerHTML,
				backgroundClass : b.backgroundClass,
				contentClass : b.contentClass,
				iconClass : b.iconClass,
				iconAlt : b.getIconAlt(),
				actions : [function () {
						UserContext.userPreferences.setBoolean("HideBrowserWarning",
							!0)
					}
				],
				actionLabels : [LC.getLabel("Buttons", "ok")]
			}, !1);
		sfdcPage.dialogs[a.id] = a;
		a.createDialog();
		a.setWidth(560);
		a.show()
	}
};
GenericSfdcPage.prototype.getPersonalSetupArgs = function () {
	return this.personalSetupArgs
};
GenericSfdcPage.prototype.resetPersonalSetupArgs = function () {
	return delete this.personalSetupArgs
};
GenericSfdcPage.prototype.openPersonalSetup = function (a, b, c) {
	window.Jiffy && Jiffy.mark("personalSetupOpen");
	this.personalSetupArgs = b ? [b, c] : null;
	b = this.getDialogById("PersonalSetup");
	c = !1;
	b || (c = !0, b = new PersonalSettingsDialog("PersonalSetup", LC.getLabel("PersonalSetup", "title"), a, 20, 840, {
				extraClass : "personalSetupOverlay absolutePositionedOverlayDialog",
				resizable : !0,
				movable : !0
			}), b.register());
	window.Jiffy && Jiffy.measure("dialogCreatedOrRetrieved", "personalSetupOpen");
	b.show();
	c || (a = b.getContentWindow()) &&
	(a.Sfdc && a.Sfdc.setup.PersonalSetup.instance) && a.Sfdc.setup.PersonalSetup.instance.checkNodeDataFromParent();
	window.Jiffy && (window.addEventListener && window.addEventListener("DOMFrameContentLoaded", function () {
			Jiffy.measure("dialogLoaded", "personalSetupOpen")
		}, !1), Jiffy.measure("dialogShown", "personalSetupOpen"))
};
var UserContext = {
	initialized : !1,
	locale : "",
	language : "",
	startOfWeek : 0,
	dateFormat : "",
	dateTimeFormat : "",
	timeFormat : "",
	ampm : null,
	today : "",
	isAccessibleMode : !1,
	userPreferences : null,
	orgPreferences : null,
	siteUrlPrefix : "",
	userId : "",
	uiSkin : "",
	renderMode : "",
	labelLastModified : "",
	networkId : "",
	isDefaultNetwork : !0,
	initialize : function (a) {
		a ? UserContext.processValues(a) : UserContext.initializeFromServlet()
	},
	initializeFromServlet : function () {
		var a = UserContext.getUrl("/_ui/system/context/UserContextServlet");
		Sfdc.Ajax.get(a,
			function (a) {
			a = Sfdc.JSON.parseWithCSRF(a);
			UserContext.processValues(a)
		})
	},
	processValues : function (a) {
		for (var b in a)
			"undefined" != typeof UserContext[b] && (UserContext[b] = "userPreferences" == b || "orgPreferences" == b ? new PreferenceBits(b, a[b]) : a[b]);
		UserContext.initialized = !0
	},
	getUrl : function (a) {
		return "undefined" == typeof a || ("undefined" == typeof UserContext.siteUrlPrefix || !UserContext.siteUrlPrefix) || 0 !== a.indexOf("/") || 0 === a.indexOf(UserContext.siteUrlPrefix) ? a : UserContext.siteUrlPrefix + a
	}
};
var DesktopContext = {
	pageTitle : "",
	pageTitleIcon : "",
	pageTitleIconAlt : "",
	interactionLog : {},
	setCurrentDesktopParam : function (a) {
		var b = (new QueryString(null)).get(Desktop.IS_DESKTOP);
		b && (a[Desktop.IS_DESKTOP] = b);
		return a
	},
	getDesktopParam : function (a) {
		return (a = QueryString.createQueryString(a, !0).get(Desktop.IS_DESKTOP)) ? a[0] : null
	},
	preserveDesktopPageParam : function (a, b) {
		a = a || window.location.href;
		var c = QueryString.createQueryString(a, !0).get(Desktop.IS_DESKTOP);
		c && (b[Desktop.IS_DESKTOP] = c[0])
	},
	preserveDesktopPageUrl : function (a,
		b, c) {
		var d = QueryString.getURI(a);
		a = QueryString.createQueryString(a, !0);
		if (!c || null === a.get(Desktop.IS_DESKTOP))
			b || (b = (new QueryString(null)).get(Desktop.IS_DESKTOP)), b && a.add(Desktop.IS_DESKTOP, b);
		return d + a.toString()
	},
	fireBeforeRedirectPage : function (a, b, c, d) {
		"undefined" !== typeof isServiceDeskPage && isServiceDeskPage && a && (a = Ext.getCmp(a)) && a.fireBeforeRedirectPage(b, d, c)
	},
	fireCloseTab : function (a, b, c, d) {
		"undefined" !== typeof isServiceDeskPage && isServiceDeskPage && ("string" === typeof a && (a = Ext.getCmp(a)),
			a && a.fireCloseTab(b, c, d))
	},
	fireAfterLoadPage : function (a) {
		a && (a = Ext.getCmp(a)) && a.fireAfterLoadPage()
	},
	isUrlNavigatorEnable : function () {
		return !!Sfdc.servicedeskUrlNavigator
	}
};
var Util = {
	makeOptionString : function (a, b, c) {
		if (c)
			c.push('\x3coption value\x3d"'), c.push(b), c.push('"\x3e'), c.push(a), c.push("\x3c/option\x3e");
		else
			return "\x3coption value\x3d'" + b + "'\x3e" + a + "\x3c/option\x3e"
	},
	scriptCache : {},
	evalScriptsUnderElement : function (a) {
		function b(a, b, d) {
			var f = function (a) {
				d[b] = a;
				c(d)
			};
			"" !== a ? Sfdc.Url.getHostFromUrl(a) != window.location.host ? f({
				url : a,
				isRemote : !0
			}) : Sfdc.Ajax.request(a, {
				success : f,
				failure : f
			}) : c(d)
		}
		function c(a) {
			for (var b = 0, d, f = a.length; b < f; b++) {
				d = a[b];
				if (!Sfdc.isDefAndNotNull(d))
					break;
				if (!0 !== d) {
					if (!0 === d.isRemote) {
						Sfdc.Ajax.jsonp(d.url, {
							onScriptLoad : function (a, b) {
								return function () {
									a[b] = !0;
									c(a)
								}
							}
							(a, b),
							cache : !1
						});
						a[b] = null;
						break
					}
					if (d.length)
						try {
							if (window.execScript)
								window.execScript(d);
							else if (window.eval)
								with (window)window.eval(d);
							else
								eval(d)
						} catch (g) {
							Sfdc.error(g)
						}
					a[b] = !0
				}
			}
		}
		Util.evalScriptsUnderElement = function (a) {
			var c = a.getElementsByTagName("script");
			a = [];
			for (var d = [], f = 0; f < c.length; f++) {
				var g = c[f].src;
				g ? (Util.scriptCache[g] || (Util.scriptCache[g] = !0), a.push(g)) : (a.push(""),
					d[f] = c[f].innerHTML)
			}
			for (c = 0; c < a.length; c++)
				b(a[c], c, d)
		};
		return Util.evalScriptsUnderElement(a)
	},
	stripScriptsUnderElement : function (a) {
		a = a.getElementsByTagName("script");
		var b = [],
		c;
		for (c = 0; c < a.length; c++)
			a[c].src ? b.push(a[c].cloneNode(!0)) : b.push(a[c].innerHTML);
		for (c = a.length - 1; 0 <= c; c--)
			a[c].parentNode.removeChild(a[c]);
		return b
	},
	evalScriptList : function (a) {
		for (var b = 0; b < a.length; b++) {
			var c = a[b].src;
			c ? Util.scriptCache[c] || (Sfdc.Resource.addJavaScript(c), Util.scriptCache[c] = !0) : eval(a[b])
		}
	},
	evalScriptsUnderElementWithSrc : function (a) {
		setTimeout(function () {
			for (var b =
					a.getElementsByTagName("script"), c = document.getElementsByTagName("head")[0], e = 0; e < b.length; e++) {
				var h = document.createElement("script");
				h.type = b[e].type;
				if (b[e].src) {
					var d = b[e].src,
					f = d.indexOf("://");
					-1 != f && (d = d.substring(d.indexOf("/", f + 3)));
					eval(Sfdc.Ajax.get(d, null, {
							async : !1
						}));
					h.src = d;
					c.appendChild(h)
				} else
					b[e].text && (eval(b[e].text), h.text = b[e].text, c.appendChild(h))
			}
		}, 0)
	},
	evalAjaxServletOutput : function (a) {
		if (a) {
			if (a.substring(0, AjaxServlet.CSRF_PROTECT.length) !== AjaxServlet.CSRF_PROTECT)
				throw "CSRF protect string not added to servlet response.";
			return eval("(" + Util.stripCSRFProtect(a) + ")")
		}
		return null
	},
	stripCSRFProtect : function (a) {
		return 0 === a.indexOf(AjaxServlet.CSRF_PROTECT) ? a.substring(AjaxServlet.CSRF_PROTECT.length, a.length) : a
	},
	refreshDynamicSelect : function (a, b, c, e) {
		for (var h = 0, d = ["\x3cselect name\x3d'", a.name, "' id\x3d'", a.id, "' class\x3d'", a.className, "' title\x3d'", a.title, "'"], f = ["size", "multiple", "tabindex"], g = 0; g < f.length; g++) {
			var k = f[g];
			a[k] && (d.push(" "), d.push(k), d.push("\x3d'"), d.push(a[k]), d.push("'"))
		}
		a.attributes.tabindex &&
		(d.push(" "), d.push("tabindex"), d.push("\x3d'"), d.push(a.attributes.tabindex.nodeValue), d.push("'"));
		d.push("\x3e");
		f = 0;
		c && (Util.makeOptionString(LC.getLabel("SelectElement", "Required"), "", d), f++);
		for (g = 0; g < b.length; g++)
			c = b[g][1], Util.makeOptionString(b[g][0], c, d), e && c === e && (h = f), f++;
		d.push("\x3c/select\x3e");
		b = a.parentNode;
		b.isDynamicSelect || (g = document.createElement("SPAN"), g.isDynamicSelect = !0, b.insertBefore(g, a), b.removeChild(a), b = g);
		b.innerHTML = d.join("");
		a = b.firstChild;
		e && (a.selectedIndex = h);
		return a
	},
	createDynamicSelect : function (a, b, c) {
		var e = ["\x3cselect"],
		h;
		for (h in a)
			a.hasOwnProperty(h) && (e.push(" "), e.push(h), e.push("\x3d'"), e.push(a[h]), e.push("'"));
		e.push("\x3e");
		c && Util.makeOptionString(LC.getLabel("SelectElement", "Required"), "", e);
		for (a = 0; a < b.length; a++)
			Util.makeOptionString(b[a][0], b[a][1], e);
		e.push("\x3c/select\x3e");
		return e.join("")
	},
	insertOption : function (a, b, c) {
		a.currentStyle ? a.add(b, c) : a.add(b, a.options[c])
	},
	convertOptionsForPicklistData : function (a) {
		for (var b = [], c = 0; c < a.length; c++) {
			var e =
				escapeHTML(a[c][1]);
			e && "function" === typeof e.replace && (e = e.replace(/\'/g, "\x26#39;"), e = e.replace(/\"/g, "\x26quot;"));
			b.push(e);
			b.push(escapeHTML(a[c][0]))
		}
		return b
	},
	hasStyleEndsWith : function (a, b) {
		var c = RegExp(" (\\S*" + b + ") ").exec(" " + a.className + " ");
		return c ? c[1] : !1
	},
	convertPathToTitle : function (a) {
		if (navigator.platform && 0 <= navigator.platform.indexOf("Win")) {
			var b = "\\";
			0 <= a.lastIndexOf(b) && (a = a.substring(a.lastIndexOf(b) + 1));
			b = "/";
			0 <= a.lastIndexOf(b) && (a = a.substring(a.lastIndexOf(b) + 1))
		} else
			0 <=
			a.lastIndexOf("/") && (a = a.substring(a.lastIndexOf("/") + 1));
		b = a.lastIndexOf(".");
		return 1 > b ? {
			name : a
		}
		 : {
			name : a.substring(0, b),
			extension : a.substring(b + 1, a.length)
		}
	},
	getFileNameFromFileInputUsingJS : function (a) {
		if (a.files && a.files.item(0)) {
			var b = a.files.item(0).fileName;
			b || (b = a.files.item(0).name);
			return b
		}
		return a.value
	},
	extend : function (a, b) {
		var c = function () {};
		c.prototype = b.prototype;
		c = new c;
		c.constructor = a;
		a.prototype = c
	},
	functionMapping : {},
	stripCustomFunctionFromObjectPrototype : function (a) {
		var b = this.functionMapping[a];
		b || (b = {});
		for (var c in a.prototype)
			a.prototype.hasOwnProperty(c) && (b[c] = a.prototype[c], delete a.prototype[c]);
		this.functionMapping[a] = b
	},
	restoreCustomFunctionsToObjectPrototype : function (a) {
		var b = this.functionMapping[a];
		if (b) {
			for (var c in b)
				if ((!b.hasOwnProperty || b.hasOwnProperty(c)) && "undefined" === typeof a.prototype[c])
					a.prototype[c] = b[c];
			this.functionMapping[a] = null
		}
	}
};
function ApiUtils() {}

ApiUtils.getApiURL = function (a, c) {
	var d = window.location.href,
	b = d.indexOf("/", 10);
	return d.substring(0, b) + UserContext.getUrl("/services/Soap/") + (a ? "u" : "c") + "/" + c
};
ApiUtils.getSessionId = function () {
	return getCookie(RequestInfo.pSID)
};
ApiUtils.to18CharId = function (a) {
	if (null == a || 18 == a.length)
		return a;
	a = a.replace(/\"/g, "");
	if (15 != a.length)
		return null;
	for (var c = "", d = 0; 3 > d; d++) {
		for (var b = 0, e = 0; 5 > e; e++) {
			var f = a.charAt(5 * d + e);
			"A" <= f && "Z" >= f && (b += 1 << e)
		}
		c = 25 >= b ? c + "ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(b) : c + "012345".charAt(b - 26)
	}
	return a + c
};
ApiUtils.to15CharId = function (a) {
	return !a ? null : a.substring(0, 15)
};
ApiUtils.getId = function (a) {
	if (!a)
		return null;
	a = a.get("Id");
	a.splice && (a.length && 0 < a.length) && (a = a[0]);
	a && (a = ApiUtils.to15CharId(a));
	return a
};
ApiUtils.soqlEncode = function (a) {
	a = a.replace("\\", "\\\\");
	return a = a.replace("'", "\\'")
};
function CustomEntityDefinition(a, b, d) {
	if (document.getElementsByName(b)) {
		CustomEntityDefinition.prototype.pickerPrefix = a;
		CustomEntityDefinition.prototype.standardHelpId = d;
		CustomEntityDefinition.prototype.currentSelect = null;
		CustomEntityDefinition.prototype.enableScontrolPicker = function (a) {
			a = getEventTarget(getEvent(a));
			null != CustomEntityDefinition.prototype.currentSelect && (CustomEntityDefinition.prototype.currentSelect.value = "", a.id == d ? CustomEntityDefinition.prototype.currentSelect.disabled = !0 : CustomEntityDefinition.prototype.currentSelect.className =
					"hidden");
			a = document.getElementById(CustomEntityDefinition.prototype.pickerPrefix + a.value);
			null != a && (a.className = "", a.disabled = !1, CustomEntityDefinition.prototype.currentSelect = a)
		};
		a = document.getElementsByName(b);
		for (b = 0; b < a.length; b++) {
			var c = a[b];
			addEvent(c, "click", CustomEntityDefinition.prototype.enableScontrolPicker, !1);
			c = document.getElementById(CustomEntityDefinition.prototype.pickerPrefix + c.value);
			null != c && "hidden" != c.className && (CustomEntityDefinition.prototype.currentSelect = c)
		}
	}
}
CustomEntityDefinition.handleAutoNumberSel = function (a, b, d) {
	a = "AutoNumber" == a.options[a.selectedIndex].value;
	toggleRow(b, a);
	d && toggleRow(d, a)
};
CustomEntityDefinition.hasAlerted = !1;
CustomEntityDefinition.displayFormatChangeWarning = function () {
	CustomEntityDefinition.hasAlerted || (alert(LC.getLabel("Page_CustomEntityDefinition_Edit", "DisplayFormatChangeWarning")), CustomEntityDefinition.hasAlerted = !0)
};
CustomEntityDefinition.setNameLabel = function (a, b) {
	if (0 == b.value.length && 0 != a.value.length) {
		var d = b.maxLength,
		c = LC.getLabel("Page_CustomEntityDefinition_Edit", "DefaultNameLabel", a.value);
		c.length > d && (c = c.substring(0, d));
		b.value = c
	}
};
function CustomSummaryFieldAttributes(a, b, d, f, g, e, h, k) {
	this.radios = document.getElementsByName(g);
	this.parentEntityEnumOrId = b;
	this.servletUrl = a;
	this.entityElement = document.getElementById(d);
	this.fieldTarget = document.getElementById(f);
	if (this.entityElement)
		this.currentEntity = this.getEntityValue(this.entityElement.options[this.entityElement.selectedIndex].value);
	else
		for (var m in k) {
			this.currentEntity = m;
			break
		}
	this.oldOpVal = null;
	for (a = 0; a < this.radios.length; a++)
		if (this.radios[a].checked) {
			this.oldOpVal =
				this.radios[a].value;
			break
		}
	this.cache = k ? k : {};
	this.criteriaCache = {};
	var c = this;
	this.handleRadioClick = function (a) {
		var b;
		for (a = 0; a < c.radios.length; a++)
			if (c.radios[a].checked) {
				b = c.radios[a].value;
				break
			}
		CustomSummaryFieldAttributes.getShownFields(b) != CustomSummaryFieldAttributes.getShownFields(c.oldOpVal) && c.setCurrentEntity();
		c.oldOpVal = b
	};
	this.handleEntityChange = function (a) {
		a = c.getEntityValue(c.entityElement.options[c.entityElement.selectedIndex].value);
		c.setCurrentEntity(a)
	};
	this.handleFilterViewClick =
	function (a) {
		a = getEventTarget(getEvent(a));
		document.getElementById(CriteriaInputConstants.FILTER_SECTION_ID).style.display = "1" == a.value ? "block" : "none"
	};
	this.cacheFieldsFromResponse = function (a) {
		a = Util.evalAjaxServletOutput(a);
		c.cache[a[AjaxLoadFieldsForEntity.pENTITY_NAME]] = a[AjaxLoadFieldsForEntity.pFIELD_LIST];
		c.fillFieldsFromCache()
	};
	this.setCurrentEntity = function (a) {
		"undefined" != typeof a && (c.currentEntity = a);
		c.currentEntity ? (c.setOpsEnabled(!0), c.cache[c.currentEntity] ? c.fillFieldsFromCache() : (a = {}, a[c.entityElement.name] = c.currentEntity, a[AjaxLoadFieldsForEntity.pPARENT_ENTITY_NAME] = c.parentEntityEnumOrId, Sfdc.Ajax.post(c.servletUrl, c.cacheFieldsFromResponse, {
					data : a,
					escape : encodeURIComponent
				}))) : c.setOpsEnabled(!1)
	};
	this.setOpsEnabled = function (a) {
		if (c.radios && 0 < c.radios.length)
			for (var b = 0; b < c.radios.length; b++)
				c.radios[b].disabled = !a, a || (c.radios[b].checked = !1);
		c.fieldTarget && (c.fieldTarget.disabled = !a, a || (c.fieldTarget = Util.refreshDynamicSelect(c.fieldTarget, [], !0), c.fieldTarget.disabled =
					!0))
	};
	var l;
	this.currentEntity && (l = new CriteriaEntityData(this.currentEntity, this.cache[this.currentEntity]), this.criteriaCache[this.currentEntity] = l);
	this.criteriaInput = new CriteriaInput(e, h, l);
	this.currentEntity ? this.setCurrentEntity() : this.setOpsEnabled(!1);
	this.initEvents()
}
CustomSummaryFieldAttributes.prototype.getEntityValue = function (a) {
	return !a ? null : a.substring(0, a.indexOf("."))
};
CustomSummaryFieldAttributes.prototype.showOptions = function (a) {
	document.getElementById(SummaryFieldConstants.OPTIONS_ID).style.display = a ? "block" : "none"
};
CustomSummaryFieldAttributes.prototype.initEvents = function () {
	for (var a = 0; a < this.radios.length; a++)
		addEvent(this.radios[a], "click", this.handleRadioClick, !1);
	for (var b = document.getElementsByName(CriteriaInputConstants.SHOW_SUMMARY_FILTER), a = 0; a < b.length; a++)
		addEvent(b[a], "click", this.handleFilterViewClick, !1), "1" == b[a].value && b[a].checked && (document.getElementById(CriteriaInputConstants.FILTER_SECTION_ID).style.display = "block");
	this.entityElement && addEvent(this.entityElement, "change", this.handleEntityChange,
		!1)
};
CustomSummaryFieldAttributes.prototype.setCurrentCriteria = function (a) {
	var b = this.cache[a];
	b || Sfdc.error("criteriadata set before fields loaded.  Entity: " + a);
	var d = this.criteriaCache[a];
	d || (d = new CriteriaEntityData(a, b), this.criteriaCache[a] = d);
	this.criteriaInput.setEntity(d)
};
CustomSummaryFieldAttributes.prototype.fillFieldsFromCache = function () {
	for (var a, b = 0; b < this.radios.length; b++)
		if (this.radios[b].checked) {
			a = CustomSummaryFieldAttributes.getShownFields(this.radios[b].value);
			break
		}
	this.setCurrentCriteria(this.currentEntity);
	var d = !1;
	if (this.fieldTarget) {
		if (a) {
			var f;
			this.fieldTarget.options && 0 <= this.fieldTarget.selectedIndex && (f = this.fieldTarget.options[this.fieldTarget.selectedIndex].value);
			for (var g = [], e = this.cache[this.currentEntity], h = 1, b = 0; b < e.length; b++)
				e[b].columnType in
				a && (d = !0, g.push([e[b].label, e[b].name]), h++);
			this.fieldTarget = Util.refreshDynamicSelect(this.fieldTarget, g, !0, f)
		} else
			this.fieldTarget = Util.refreshDynamicSelect(this.fieldTarget, [], !0, "");
		this.fieldTarget.disabled = d ? !1 : !0
	}
};
CustomSummaryFieldAttributes.getShownFields = function (a) {
	switch (a) {
	case "0":
		return null;
	case "1":
		a = {};
		for (var b in ColumnType)
			ColumnType[b].isNumber && (a[b] = !0);
		return a;
	case "2":
	case "3":
		a = {};
		for (b in ColumnType)
			if (ColumnType[b].isNumber || ColumnType[b].isDate)
				a[b] = !0;
		return a
	}
};
function MaskTypeSelector(d, e, f, g) {
	this.targetDiv = document.getElementById(d);
	this.typeSelect = document.getElementById(e);
	this.charSelect = document.getElementById(f);
	this.maskData = g;
	var a = this;
	this.handleSelectChange = function (c) {
		var b = a.typeSelect.options[a.typeSelect.selectedIndex].value;
		c = a.charSelect.options[a.charSelect.selectedIndex].value;
		!b || !c ? a.targetDiv.innerHTML = "" : (b = a.maskData[b], b = b.replace(/X/g, c), a.targetDiv.innerHTML = b)
	};
	addEvent(this.typeSelect, "change", this.handleSelectChange, !1);
	addEvent(this.charSelect, "change", this.handleSelectChange, !1);
	this.handleSelectChange()
};
function CompactLayoutUi(b, c, a) {
	var d = this;
	this.appendToOnloadQueue(function () {
		d.attachEvents()
	})
}
CompactLayoutUi.prototype = new GenericSfdcPage;
CompactLayoutUi.prototype.initialize = function (b, c, a) {
	this.unusedItems = b;
	this.leftColItems = c;
	this.rightColItems = a
};
CompactLayoutUi.prototype.attachEvents = function () {
	var b = document.getElementById(this.unusedItems),
	c = document.getElementById(this.leftColItems),
	a = document.getElementById(this.rightColItems),
	d = this;
	CompactLayoutUi.addClick(document.getElementById(CompactLayoutUiConst.switchColumnToRight), function () {
		moveOption(c, a, LC.getLabel("SelectElement", "Required"), [], null, LC.getLabel("SelectElement", "Required"))
	});
	CompactLayoutUi.addClick(document.getElementById(CompactLayoutUiConst.switchColumnToLeft), function () {
		moveOption(a,
			c, LC.getLabel("SelectElement", "Required"), [], null, LC.getLabel("SelectElement", "Required"))
	});
	CompactLayoutUi.addClick(document.getElementById(CompactLayoutUiConst.hideItemsLeft), function () {
		moveOption(c, b, LC.getLabel("SelectElement", "Required"), [], null, LC.getLabel("SelectElement", "Required"))
	});
	CompactLayoutUi.addClick(document.getElementById(CompactLayoutUiConst.showItemsLeft), function () {
		moveOption(b, c, LC.getLabel("SelectElement", "Required"), [], null, LC.getLabel("SelectElement", "Required"))
	});
	CompactLayoutUi.addClick(document.getElementById(CompactLayoutUiConst.hideItemsRight),
		function () {
		moveOption(a, b, LC.getLabel("SelectElement", "Required"), [], null, LC.getLabel("SelectElement", "Required"))
	});
	CompactLayoutUi.addClick(document.getElementById(CompactLayoutUiConst.showItemsRight), function () {
		moveOption(b, a, LC.getLabel("SelectElement", "Required"), [], null, LC.getLabel("SelectElement", "Required"))
	});
	CompactLayoutUi.addClick(document.getElementById(CompactLayoutUiConst.saveButtonId), function () {
		d.selectAll();
		return !0
	})
};
CompactLayoutUi.prototype.selectAll = function () {
	for (var b = document.getElementById(this.leftColItems), c = document.getElementById(this.rightColItems), a = 0; a < b.length; a++)
		b.options[a].selected = !0;
	for (a = 0; a < c.length; a++)
		c.options[a].selected = !0
};
CompactLayoutUi.addClick = function (b, c) {
	addEvent(b, "click", c, !1)
};
var CustomFieldRelatedList = {
	_mapCDTToComponents : {},
	_setupPlusGif : "",
	_setupMinusGif : "",
	registerCDT : function (b, a, c, d) {
		this._mapCDTToComponents[b] = a;
		this._setupPlusGif = c;
		this._setupMinusGif = d;
		(b = document.getElementById(b + "_twisty")) && addEvent(b, "click", this.onClickCDTTwisty, !1)
	},
	onClickCDTTwisty : function (b) {
		var a = getEventTarget(b);
		if (null != a) {
			b = !1;
			-1 != a.src.indexOf(CustomFieldRelatedList._setupPlusGif) ? (a.src = CustomFieldRelatedList._setupMinusGif, b = !0) : a.src = CustomFieldRelatedList._setupPlusGif;
			a = a.id.split("_")[0];
			a = CustomFieldRelatedList._mapCDTToComponents[a];
			for (compRow = 0; compRow < a.length; compRow++)
				document.getElementById(a[compRow]) && toggleDisplay(document.getElementById(a[compRow]), b)
		}
	}
};
function ActionOverrideUi() {}

ActionOverrideUi.prototype.visiblePicklist = null;
ActionOverrideUi.prototype.setVisiblePicklist = function (a) {
	null != ActionOverrideUi.prototype.visiblePicklist && (document.getElementById(ActionOverrideUi.prototype.visiblePicklist).className = "hidden");
	document.getElementById(a).className = null;
	ActionOverrideUi.prototype.visiblePicklist = a
};
function Scontrol() {}

Scontrol.prototype.getSelectedRecordIdsFromForm = function (b, d) {
	var c = [];
	if (b)
		for (i = 0; i < b.elements.length; i++) {
			var a = b.elements[i];
			"ids" == a.name && a.checked && (a = a.value, a.substr(0, 3) == d && c.push(a))
		}
	else
		alert("Unable to find a form for this button");
	return c
};
function ValidateFormula(c, e, f, d, g) {
	this.bodyId = d;
	this.validTextId = f;
	this.fieldArray = g;
	this.servletUrl = c;
	this.isLoading = !1;
	this.loading = new LoadingScreen(document.getElementById(d).parentNode, LC.getLabel("Scontrol", "CheckingSyntax"));
	var a = this;
	this.handleCheckSyntaxResponse = function (b) {
		response = Util.evalAjaxServletOutput(b);
		document.getElementById(a.validTextId).innerHTML = response[AjaxServlet.ERROR_MSG_KEY];
		if (!response[AjaxValidateFormula.VALID_KEY] && (b = response[AjaxValidateFormula.RANGE_KEY]))
			setContentWindow(window),
			setSelectionInEditor(a.bodyId, b[0], b[1]);
		a.setLoading(!1)
	};
	this.handleCheckSyntaxError = function (b) {
		document.getElementById(a.validTextId).innerHTML = LC.getLabel("Scontrol", "AjaxError");
		a.setLoading(!1)
	};
	this.handleCheckSyntaxClick = function (b) {
		a.setLoading(!0);
		b = {};
		for (var c = 0; c < a.fieldArray.length; c++)
			b[a.fieldArray[c]] = document.getElementById(a.fieldArray[c]).value;
		b[a.bodyId] = document.getElementById(a.bodyId).value;
		Sfdc.Ajax.post(a.servletUrl, a.handleCheckSyntaxResponse, {
			data : b,
			failure : a.handleCheckSyntaxError,
			escape : encodeURIComponent
		})
	};
	addEvent(document.getElementById(e), "click", this.handleCheckSyntaxClick, !0)
}
ValidateFormula.prototype.setLoading = function (c) {
	c != this.isLoading && (c ? (this.loading.show(), this.isLoading = !0) : (this.loading.hide(), this.isLoading = !1))
};
function WebLinkUi() {}

WebLinkUi.prototype.updateOpenType = function (a, b, c) {
	a = document.getElementById(a);
	var d = a.options;
	if (null == a._saveOpts) {
		a._saveOpts = Array(d.length);
		for (var e = 0; e < d.length; ++e)
			a._saveOpts[e] = d[e]
	}
	var f = d[a.selectedIndex].value;
	f == b && !c && (f = d[0].value);
	for (e = d.length = 0; e < a._saveOpts.length; ++e) {
		var g = a._saveOpts[e];
		g.selected = g.value == f;
		if (c || g.value != b)
			d[d.length] = g
	}
	WebLinkUi.prototype.updateContentValues()
};
WebLinkUi.prototype.updateRequireRowSelectionVisibility = function (a, b) {
	this.setDisplay(a, b)
};
WebLinkUi.prototype.setContentType = function (a, b, c, d) {
	a = document.getElementById(a);
	if (null != a)
		if (b)
			a.value = c;
		else if (a.value == c && (b = a.options, null != b)) {
			for (c = 0; c < b.length; ++c)
				if (b[c].value == d) {
					b[c].selected = !0;
					return
				}
			b[0].selected = !0
		}
};
WebLinkUi.prototype.currentDisplayedDiv = null;
WebLinkUi.prototype.displayDiv = function (a) {
	WebLinkUi.prototype.currentDisplayedDiv && (WebLinkUi.prototype.currentDisplayedDiv.style.display = "none");
	a = document.getElementById(a);
	a.style.display = "block";
	a.style.zIndex = 0;
	WebLinkUi.prototype.currentDisplayedDiv = a
};
WebLinkUi.prototype.setDisplay = function (a, b) {
	var c = document.getElementById(a);
	c && (c.style.display = b ? "block" : "none")
};
WebLinkUi.prototype.updateContentValues = function () {
	var a = document.getElementById("LinkType").value,
	b = document.getElementById("WebLinkFields_DisplayTypeM"),
	c = null != b ? b.checked : !1,
	b = document.getElementById("Scontrol");
	if (null == WebLinkUi.scontrolOptions) {
		WebLinkUi.scontrolOptions = [];
		for (n = 0; n < b.options.length; n++)
			WebLinkUi.scontrolOptions.push(b.options[n])
	}
	"V" == a ? (a = c ? vfSetOrientedOptions : vfOptions, c = "066") : (a = WebLinkUi.scontrolOptions, c = "01N");
	var d = b.value;
	null != d && d.substring(0, 3) != c && (d = null);
	var e =
		[];
	for (n = 0; n < a.length; n++) {
		var f = a[n];
		f.value.substring(0, 3) == c && e.push([f.text, f.value])
	}
	Util.refreshDynamicSelect(b, e, !1, d)
};
WebLinkUi.prototype.addNewInputVariable = function () {
	var a = document.getElementById("inputVarsTable").getElementsByTagName("tbody")[0].getElementsByTagName("tr");
	for (i = 0; i < a.length; i++)
		if ("none" == a[i].style.display) {
			a[i].style.display = "";
			break
		}
};
WebLinkUi.prototype.clearInputVariable = function (a) {
	var b = document.getElementById("inputVarsTable").getElementsByTagName("tbody")[0].getElementsByTagName("tr");
	a + 1 < b.length && this.resetRow(b[a + 1])
};
WebLinkUi.prototype.handleFlowChange = function () {
	var a = document.getElementById("inputVarsTable"),
	b = document.getElementById("flowId").value,
	c = flowList[b];
	document.getElementById("setInputVariablesBooleanDiv").style.display = 0 < c.length ? "" : "none";
	document.getElementById("flowInputVars").checked = !1;
	WebLinkUi.prototype.updateInputVariablesDivVisibility();
	b = [];
	for (n = 0; n < c.length; n++) {
		var d = c[n];
		b.push([d.text, d.value])
	}
	a = a.getElementsByTagName("SELECT");
	for (n = 0; n < a.length; n++)
		Util.refreshDynamicSelect(a[n],
			b, !0, null)
};
WebLinkUi.prototype.updateInputVariablesDivVisibility = function () {
	var a = document.getElementById("flowInputVars"),
	b = document.getElementById("inputVariablesDiv");
	!0 == a.checked ? b.style.display = "" : (b.style.display = "none", this.resetTable(inputVarsTable))
};
WebLinkUi.prototype.showFieldPicker = function (a) {
	sfdcPage.getDialogById("FieldTreeDialogId").controller.setInsertToElementName("ParamValue" + a);
	sfdcPage.getDialogById("FieldTreeDialogId").show()
};
WebLinkUi.prototype.resetTable = function (a) {
	if (a) {
		a = a.getElementsByTagName("tr");
		for (i = 1; i < a.length; i++)
			this.resetRow(a[i]), 1 != i && (a[i].style.display = "none")
	}
};
WebLinkUi.prototype.resetRow = function (a) {
	if (a) {
		if (0 < a.cells.length) {
			var b = a.cells[0];
			b && 0 < b.childNodes.length && (b.childNodes[0].selectedIndex = 0)
		}
		if (1 < a.cells.length && (a = a.cells[1]) && 0 < a.childNodes.length)
			a.childNodes[0].value = ""
	}
};
function DefaultTabWarning(a) {
	this.selectedTabsId = a
}
DefaultTabWarning.prototype.defaultIsSelectedToMove = function () {
	for (var a = document.getElementById(this.selectedTabsId).options, b = 0; b < a.length; b++)
		if (a[b].selected && this.isDefault(a[b].text))
			return !0;
	return !1
};
DefaultTabWarning.prototype.isDefault = function (a) {
	var b = LC.getLabel("Page_My_Tabs", "DefaultTabMarkerOnly");
	return 0 <= a.indexOf(b) ? !0 : !1
};
function TabSetPage(a, b) {
	this.selectToUpdateId = a;
	this.workspaceMappingServletUrl = b
}
TabSetPage.prototype.update = function (a) {
	var b = document.getElementById(a);
	a = document.getElementById(this.selectToUpdateId);
	for (var c = a.options[a.selectedIndex].value, b = b.options, d = [], e = !1, f = 0; f < b.length; f++) {
		var g = b[f];
		d[f] = [g.text, g.value];
		g.value == c && (e = !0)
	}
	e || (c = d[0].value);
	Util.refreshDynamicSelect(a, d, !1, c)
};
TabSetPage.prototype.updateWorkspaceMapping = function (a) {
	var b = Ext.getDom(a).options,
	c = [];
	a = [];
	for (var d = 0; d < b.length; d++) {
		var e = b[d].value,
		f = Ext.get(TabSetPageConstants.ROW_PREFIX + e);
		null === f ? c.push(e) : (f.enableDisplayMode().show(), a[e] = 1)
	}
	if (0 < c.length)
		Ext.Ajax.request({
			url : UserContext.getUrl(this.workspaceMappingServletUrl),
			params : {
				tabNames : c
			},
			method : "POST",
			success : this.updateWorkspaceMappingRows,
			scope : this
		});
	else {
		b = Ext.select("#" + TabSetPageConstants.WORKSPACE_MAPPING_TABLE_ID + " .dataRow");
		for (d =
				0; d < b.getCount(); d++)
			f = b.item(d), c = f.dom.id.substr(TabSetPageConstants.ROW_PREFIX.length), void 0 == a[c] && f.enableDisplayMode().hide()
	}
};
TabSetPage.prototype.updateWorkspaceMappingRows = function (a) {
	a = Util.evalAjaxServletOutput(a.responseText).html;
	Ext.select("#" + TabSetPageConstants.WORKSPACE_MAPPING_TABLE_ID + " .last").removeClass("last");
	Ext.fly(TabSetPageConstants.WORKSPACE_MAPPING_TABLE_ID).insertHtml("beforeEnd", a)
};
var TabSetPageUtil = {
	enableField : function (a) {
		document.getElementById(a).style.display = "inline";
		document.getElementById(a + "_fake").style.display = "none"
	},
	disableField : function (a) {
		document.getElementById(a).style.display = "none";
		document.getElementById(a + "_fake").style.display = "inline"
	},
	toggleRadioButtonGroup : function (a) {
		a = document.getElementsByName(a);
		for (var b = 0; b < a.length; b++)
			a[b].disable = !a[b].disable
	},
	selectRow : function (a, b) {
		Ext.get(b).dom.checked = !0;
		for (var c = Ext.get("oTable").dom.rows, d = 1; d < c.length; d++) {
			var e =
				c[d];
			Ext.get(e).removeClass("sdSelectedRow");
			(e = Ext.get("size_" + e.id)) && e.hide()
		}
		Ext.get(a).addClass("sdSelectedRow");
		(c = Ext.get("size_" + a)) && c.show()
	},
	stopEventBubbleUp : function () {
		"undefined" !== typeof window.event && (window.event.cancelBubble = !0)
	}
}, fixUpSelectRow = function () {
	for (var a = Ext.query('input[name\x3d"sdOrientation"]'), b = 0; b < a.length; b++)
		a[b].checked && TabSetPageUtil.selectRow("oRow" + b, a[b].id)
};
TabSetPage.sdCompSetupUtil = function () {
	var a = null,
	b = null,
	c = null,
	d = null,
	e = null,
	f = !1;
	return {
		init : function () {
			f || (a = Sfdc.get("sd_components_duel_select_1"), b = Sfdc.get("sd_components_duel_select_0"), c = Sfdc.get("sd_components_just"), d = c.options[0], e = Sfdc.select("option[value\x3d0]", c)[0], f = !0)
		},
		isCompSelectedInRightDLEBox : function () {
			for (var b = a.options, c = 0; c < b.length; c++)
				if (b[c].selected && b[c].value)
					return !0;
			return !1
		},
		isCompSelectedInLeftDLEBox : function () {
			for (var a = b.options, c = 0; c < a.length; c++)
				if (a[c].selected &&
					a[c].value)
					return !0;
			return !1
		},
		isSdCompRightDLEBoxEmpty : function () {
			var b = a.options[0].value;
			return !b || b === LC.getLabel("SelectElement", "Required")
		},
		isOnlyOneCompInRightDLEBox : function () {
			return !this.isSdCompRightDLEBoxEmpty() && 1 === a.options.length
		},
		disableSdCompJustificationSelect : function () {
			d.selected = !0;
			c.setAttribute("disabled", "disabled")
		},
		enableSdCompJustificationSelect : function () {
			c.removeAttribute("disabled");
			e.selected = !0
		},
		isSdCompJustificationSelectEnabled : function () {
			return !c.disabled
		}
	}
}
();
TabSetPage.onSdCompAddClicked = function () {
	TabSetPage.sdCompSetupUtil.init();
	TabSetPage.sdCompSetupUtil.isCompSelectedInLeftDLEBox() && TabSetPage.sdCompSetupUtil.isSdCompRightDLEBoxEmpty() && TabSetPage.sdCompSetupUtil.enableSdCompJustificationSelect()
};
TabSetPage.onSdCompRemoveClicked = function () {
	TabSetPage.sdCompSetupUtil.init();
	TabSetPage.sdCompSetupUtil.isOnlyOneCompInRightDLEBox() && TabSetPage.sdCompSetupUtil.isCompSelectedInRightDLEBox() && TabSetPage.sdCompSetupUtil.disableSdCompJustificationSelect()
};
function LiveAgent() {}

LiveAgent.onLiveAgentEnabledClicked = function (a) {
	var b = document.getElementById("live_chat_sd_enabled"),
	c = null !== document.getElementById("la_knowledge_enabled") ? document.getElementById("la_knowledge_enabled").parentNode.parentNode : null,
	d = document.getElementById("lcWorkspaceTable").parentNode.parentNode.parentNode.parentNode.parentNode;
	b.checked ? (d.style.display = "", null != c && (c.style.display = "")) : (d.style.display = "none", null != c && (c.style.display = "none"));
	LiveAgent.onLiveAgentApexPageClicked(a)
};
LiveAgent.onLiveAgentApexPageClicked = function (a) {
	if (null != a)
		if (a = a.split(","), document.getElementById("live_chat_new_vfpage").checked)
			for (var b = 0; b < a.length; b++)
				document.getElementById(a[b]).parentNode.parentNode.style.display = "";
		else
			for (b = 0; b < a.length; b++)
				document.getElementById(a[b]).parentNode.parentNode.style.display = "none"
};
function SchedulePageUtil() {}

SchedulePageUtil.clickExpand = function () {
	Sfdc.Effects.rollIn(document.getElementById(SchedulePage.pDuelOuter), function () {})
};
SchedulePageUtil.clickCollapse = function () {
	Sfdc.Effects.rollOut(document.getElementById(SchedulePage.pDuelOuter), function () {})
};
SchedulePageUtil.disableTime = function (a) {
	document.getElementById(ScheduleElement.pPrefTime + a).value = "";
	document.getElementById(ScheduleElement.pPrefTime + a).style.display = "none";
	document.getElementById(ScheduleElement.pPrefTime + a).disabled = !0;
	document.getElementById(ScheduleElement.pOtherPrefTimeLabelDiv + a).style.display = "none";
	document.getElementById(ScheduleElement.pPrefTimeLabelDiv + a).style.display = "block"
};
SchedulePageUtil.enableTime = function (a) {
	document.getElementById(ScheduleElement.pPrefTimeLabelDiv + a).style.display = "none";
	document.getElementById(ScheduleElement.pOtherPrefTimeLabelDiv + a).style.display = "none";
	document.getElementById(ScheduleElement.pPrefTimeLoadingDiv + a).style.display = "block";
	document.getElementById(ScheduleElement.pPrefTimeLoadingDiv + a).focus();
	var b = SchedulePageUtil.buildPost(a);
	Sfdc.Ajax.post(UserContext.getUrl(BlowoutServlet.SERVLETURL), function (b) {
		SchedulePageUtil.handleResponse(a,
			b)
	}, {
		data : b
	});
	return !1
};
SchedulePageUtil.buildPost = function (a) {
	var b = {};
	b[BlowoutServlet.SUFFIX] = a;
	b[SchedulePage.pBlowout] = document.getElementById(SchedulePage.pBlowout).value;
	b[SchedulePage.pIsOffPeak] = document.getElementById(SchedulePage.pIsOffPeak).value;
	b[ScheduleElement.pFreq + a] = SchedulePageUtil.getCheckedValue(ScheduleElement.pFreq + a);
	b[ScheduleElement.pStartDate + a] = document.getElementById(ScheduleElement.pStartDate + a).value;
	b[ScheduleElement.pEndDate + a] = document.getElementById(ScheduleElement.pEndDate + a).value;
	b[ScheduleElement.pDailyRec +
		a] = SchedulePageUtil.getCheckedValue(ScheduleElement.pDailyRec + a);
	for (var c = 0; 7 > c; c++)
		b[ScheduleElement.pDayOfWeek + c + a] = document.getElementById(ScheduleElement.pDayOfWeek + c + a).checked ? "1" : "0";
	b[ScheduleElement.pMonthlyRec + a] = SchedulePageUtil.getCheckedValue(ScheduleElement.pMonthlyRec + a);
	b[ScheduleElement.pMonthlyOnDayN + a] = document.getElementById(ScheduleElement.pMonthlyOnDayN + a).value;
	b[ScheduleElement.pMonthlyOnNthDay + a] = document.getElementById(ScheduleElement.pMonthlyOnNthDay + a).value;
	b[ScheduleElement.pMonthlyOnNDayOfWeek +
		a] = document.getElementById(ScheduleElement.pMonthlyOnNDayOfWeek + a).value;
	b[SchedulePage.pJobType] = document.getElementById(SchedulePage.pJobType).value;
	return b
};
SchedulePageUtil.getCheckedValue = function (a) {
	a = document.getElementsByName(a);
	if (null == a.length) {
		if (a.checked)
			return a.value
	} else
		for (var b = 0; b < a.length; b++)
			if (a[b].checked)
				return a[b].value;
	return ""
};
SchedulePageUtil.handleResponse = function (a, b) {
	var c = null;
	try {
		c = Util.evalAjaxServletOutput(b)
	} catch (d) {
		window.location.replace ? window.location.replace(window.location) : window.location.href = window.location.href;
		return
	}
	document.getElementById(ScheduleElement.pPrefTimeLoadingDiv + a).style.display = "none";
	c[BlowoutServlet.SUCCESS] ? (SchedulePageUtil.setTimePicklist(a, c[BlowoutServlet.BLOWOUT]), document.getElementById(ScheduleElement.pPrefTime + a).disabled = !1, document.getElementById(ScheduleElement.pPrefTime +
			a).style.display = "block", document.getElementById(ScheduleElement.pPrefTime + a).focus()) : document.getElementById(ScheduleElement.pPrefTimeLabelDiv + a).style.display = "block";
	SchedulePageUtil.handleErrors(c)
};
SchedulePageUtil.setTimePicklist = function (a, b) {
	var c = document.getElementById(ScheduleElement.pPrefTime + a).options;
	c.length = 0;
	if (0 == b.length)
		c[0] = new Option(LC.getLabel("SelectElement", "Required"), "");
	else
		for (var d = 0; d < b.length; d++)
			c[d] = new Option(b[d], b[d])
};
SchedulePageUtil.handleErrors = function (a) {
	a = a[AjaxServlet.ERROR_MSG_KEY];
	if (a instanceof Array) {
		3 < a.length ? document.getElementById(DetailElement.DEFAULT_ERROR_DIV_ID).style.display = "block" : document.getElementById(DetailElement.DEFAULT_ERROR_DIV_ID).style.display = "none";
		for (var b = 0; b < a.length; b++) {
			var c = SchedulePageUtil.getIdAndVal(a[b]);
			SchedulePageUtil.setError(c[0], c[1])
		}
	}
};
SchedulePageUtil.getIdAndVal = function (a) {
	return a.split(",")
};
SchedulePageUtil.setError = function (a, b) {
	for (var c = null, c = "DIV" == document.getElementById(a).nodeName ? document.getElementById(a).parentNode : document.getElementById(a).parentNode.parentNode, d = !1, f, e = 0; e < c.childNodes.length; e++)
		null != c.childNodes[e].className && "errorMsg" == c.childNodes[e].className && (d = !0, f = e);
	d ? null != b ? (c.childNodes[f].innerHTML = b, c.childNodes[f].style.display = "block") : c.childNodes[f].style.display = "none" : "" != b && (d = document.createElement("div"), d.className = "errorMsg", d.innerHTML = b, c.appendChild(d))
};
SchedulePageUtil.toggleMonthlyActive = function (a, b) {
	a ? (document.getElementById(ScheduleElement.pMonthlyOnDayN + b).disabled = !1, document.getElementById(ScheduleElement.pMonthlyOnNDayOfWeek + b).disabled = !0, document.getElementById(ScheduleElement.pMonthlyOnNthDay + b).disabled = !0) : (document.getElementById(ScheduleElement.pMonthlyOnDayN + b).disabled = !0, document.getElementById(ScheduleElement.pMonthlyOnNDayOfWeek + b).disabled = !1, document.getElementById(ScheduleElement.pMonthlyOnNthDay + b).disabled = !1)
};
AutoComplete = function (a) {
	this.baseName = this.getBaseName(a);
	this.type = this.getLookupType(a);
	this.lookupInput = this.getLookupInput(a);
	this.lookupInput.onkeyup = AutoComplete.prototype.onKeyUp;
	this.lookupInput.onfocus = AutoComplete.prototype.onFocus;
	this.lookupInput.onblur = AutoComplete.prototype.onBlur;
	this.hasFocus = !1;
	this.valQueried = null;
	this.records;
	this.selected = -1;
	this.entityName;
	this.entityNameFields;
	"001" == this.type ? (this.entityName = "Account", this.entityNameFields = ["Name"]) : "003" == this.type ? (this.entityName =
			"Contact", this.entityNameFields = ["FirstName", "LastName"]) : "005" == this.type && (this.entityName = "User", this.entityNameFields = ["FirstName", "LastName", "Alias"])
};
AutoComplete.prototype.RECORD_HEIGHT = 17;
AutoComplete.prototype.MIN_LENGTH_THRESHOLD = 3;
AutoComplete.prototype.TYPING_THRESHOLD_MILLIS = 200;
AutoComplete.prototype.HIGHLIGHT_COLOR = "#AACCFF";
AutoComplete.prototype.IS_IE = document.all;
AutoComplete.prototype.AUTOCOMPLETE_MAP = [];
AutoComplete.prototype.IS_PROCESSING = !1;
AutoComplete.prototype.FORM_NAME = "editPage";
AutoComplete.prototype.getBaseName = function (a) {
	if (!a)
		return this.baseName;
	a = a.name;
	var d = a.indexOf("_");
	return -1 < d ? a.substring(0, d) : a
};
AutoComplete.prototype.isLookup = function (a) {
	return 0 < a.name.indexOf("_lkid")
};
AutoComplete.prototype.getLookupInput = function (a) {
	if (!a)
		return this.lookupInput;
	a = this.getBaseName(a);
	return document.getElementById(a)
};
AutoComplete.prototype.getLookupType = function (a) {
	if (!a)
		return this.type;
	var d;
	a = this.getBaseName(a) + "_lktp";
	if (a = document.getElementById(a))
		d = a.value;
	return d
};
AutoComplete.prototype.doLookup = function (a) {
	if (this.hasFocus && !AutoComplete.prototype.IS_PROCESSING) {
		var d = this.parseName(a);
		if (d && 0 != d.length) {
			AutoComplete.prototype.IS_PROCESSING = !0;
			this.valQueried = a;
			for (var b = "SELECT Id", c = 0; c < this.entityNameFields.length; c++)
				b += ", " + this.entityNameFields[c];
			b += " FROM " + this.entityName + " WHERE ";
			if (1 == this.entityNameFields.length)
				b += this.entityNameFields[0] + " like '" + a + "%' ";
			else
				for (c = 0; c < this.entityNameFields.length; c++)
					for (var e = 0; e < d.length; e++) {
						var f = d[e];
						if (f && (b += this.entityNameFields[c] + " like '" + f + "%' ", c != this.entityNameFields.length - 1 || e != d.length - 1))
							b += " OR "
					}
			this.records = AutoComplete.prototype.query(b).records;
			this.displayResults(this.records, a);
			AutoComplete.prototype.IS_PROCESSING = !1
		}
	}
};
AutoComplete.prototype.parseName = function (a) {
	a = a ? a.split(" ") : [];
	for (var d = [], b = 0; b < a.length; b++) {
		var c = a[b];
		(c = c.replace(" ", "")) && d.push(c)
	}
	return d
};
AutoComplete.prototype.displayResults = function (a, d) {
	if (a && 0 < a.length) {
		var b = this.getBaseName(),
		c = [];
		c.push("\x3ctable width\x3d'100%' cellpadding\x3d'0' cellspacing\x3d'0' border\x3d'0'\x3e");
		for (var e = 0; e < a.length; e++) {
			var f = a[e],
			g = ApiUtils.getId(f);
			c.push("\x3ctr\x3e\x3ctd style\x3d'cursor: pointer;' onmouseover\x3d'AutoComplete.prototype.setSelected(\"" + b + '", ' + e + ');this.style.backgroundColor\x3d"' + AutoComplete.prototype.HIGHLIGHT_COLOR + "\";' onmouseout\x3d'this.style.backgroundColor\x3d\"\";'\x3e");
			c.push("\x3cdiv style\x3d'height:" + AutoComplete.prototype.RECORD_HEIGHT + "px;' id\x3d'" + g + "'\x3e");
			f = this.getName(f);
			c.push(this.highlightMatch(f, d));
			c.push("\x3c/div\x3e");
			c.push("\x3c/td\x3e\x3c/tr\x3e")
		}
		c.push("\x3c/table\x3e");
		e = this.getBaseName();
		(f = AutoComplete.prototype.getBox(e)) ? AutoComplete.prototype.resizeBox(b, a.length * AutoComplete.prototype.RECORD_HEIGHT, 200) : (f = AutoComplete.prototype.makeBox(e, a.length * AutoComplete.prototype.RECORD_HEIGHT, 200), g = this.getLookupInput(), b = getObjY(g) + 20,
			g = getObjX(g), AutoComplete.prototype.moveBox(e, b, g));
		f.innerHTML = c.join("");
		this.displaySuggestions(!0)
	}
};
AutoComplete.prototype.getName = function (a) {
	for (var d = "", b = 0; b < this.entityNameFields.length; b++) {
		var c = a.get(this.entityNameFields[b]);
		c && (d += c + " ")
	}
	return d
};
AutoComplete.prototype.highlightMatch = function (a, d) {
	if (!a || !d)
		return "";
	var b = a.toLowerCase(),
	c = d.toLowerCase(),
	e = b.indexOf(c);
	if (-1 == e)
		return a;
	b = a.substring(0, e);
	c = a.substring(e, e + d.length);
	e = a.substring(e + d.length);
	return b + "\x3cb\x3e" + c + "\x3c/b\x3e" + e
};
AutoComplete.prototype.doFilter = function (a) {
	for (var d = [], b = 0; b < this.records.length; b++) {
		var c = this.records[b];
		this.isMatch(c, a) && d.push(c)
	}
	d && 0 < d.length ? this.displayResults(d, a) : this.doClear()
};
AutoComplete.prototype.isMatch = function (a, d) {
	var b = null;
	return (b = 1 == this.entityNameFields.length ? a.get(this.entityNameFields[0]) : this.getName(a)) && -1 < b.toLowerCase().indexOf(d.toLowerCase())
};
AutoComplete.prototype.doClear = function () {
	this.displaySuggestions(!1);
	this.selected = -1
};
AutoComplete.prototype.displaySuggestions = function (a) {
	AutoComplete.prototype.showBox(this.getBaseName(), a)
};
AutoComplete.prototype.selectItem = function (a) {
	var d = this.getBaseName(),
	b = null,
	c = null,
	e = AutoComplete.prototype.getBox(d);
	if (e && 0 <= a && (e = e.childNodes[0].childNodes[0]) && e.rows && a < e.rows.length)
		if (a = e.rows[a])
			if (a = a.cells[0].getElementsByTagName("div")[0])
				b = a.id;
	if (b)
		for (a = 0; a < this.records.length; a++)
			if (e = this.records[a], b == ApiUtils.getId(e)) {
				c = this.getName(e);
				break
			}
	b && c && lookupPick(AutoComplete.prototype.FORM_NAME, d + "_lkid", d, "", b, c, "", "");
	(d = AutoComplete.prototype.AUTOCOMPLETE_MAP[d]) && d.doClear()
};
AutoComplete.prototype.onKeyUp = function (a) {
	a || (a = window.event);
	var d = AutoComplete.prototype.AUTOCOMPLETE_MAP[this.name];
	if (d) {
		var b = this.value,
		c = a && a.keyCode;
		if (!AutoComplete.prototype.IS_PROCESSING && (!c || !AutoComplete.prototype.isEnter(a)))
			if (c && AutoComplete.prototype.isNavigation(a))
				AutoComplete.prototype.handleNav(this.name, a);
			else if (!c || !AutoComplete.prototype.isTypingFast(this.name, a))
				if (!c || !AutoComplete.prototype.isIgnore(a))
					if (c && AutoComplete.prototype.isEscape(a))
						d.doClear();
					else if (null !=
						b && b.length >= AutoComplete.prototype.MIN_LENGTH_THRESHOLD)
						null == d.valQueried || -1 == b.toLowerCase().indexOf(d.valQueried.toLowerCase()) ? d.doLookup(b) : d.doFilter(b);
					else if (null == b || b.length <= AutoComplete.prototype.MIN_LENGTH_THRESHOLD)
						d.valQueried = null, d.doClear()
	}
};
AutoComplete.prototype.onFocus = function (a) {
	if (a = AutoComplete.prototype.AUTOCOMPLETE_MAP[this.name])
		a.hasFocus = !0
};
AutoComplete.prototype.onBlur = function (a) {
	a || (a = window.event);
	var d = AutoComplete.prototype.AUTOCOMPLETE_MAP[this.name];
	d && (d.hasFocus = !1, AutoComplete.prototype.TIMEOUT_ID && clearTimeout(AutoComplete.prototype.TIMEOUT_ID), a && !AutoComplete.prototype.isIgnore(a) && !AutoComplete.prototype.isEscape(a) && 0 <= d.selected ? d.selectItem(d.selected) : setTimeout("AutoComplete.prototype.AUTOCOMPLETE_MAP['" + this.name + "'].doClear()", 200))
};
AutoComplete.prototype.setSelected = function (a, d) {
	var b = AutoComplete.prototype.AUTOCOMPLETE_MAP[a];
	b && (b.selected = d)
};
AutoComplete.prototype.handleNav = function (a, d) {
	var b = AutoComplete.prototype.AUTOCOMPLETE_MAP[a];
	if (b) {
		var c = 40 == d.keyCode,
		e = b.selected,
		f = AutoComplete.prototype.getBox(b.getBaseName());
		if (f && (f = f.childNodes[0].childNodes[0]) && f.rows) {
			c ? b.selected < f.rows.length - 1 && e++ : 0 < b.selected && e--;
			if (0 <= b.selected && (c = f.rows[b.selected]) && c.childNodes[0])
				c.childNodes[0].onmouseout();
			if (0 <= e) {
				if ((c = f.rows[e]) && c.childNodes[0])
					c.childNodes[0].onmouseover();
				b.selected = e
			}
		}
	}
};
AutoComplete.prototype.LAST_DATE = null;
AutoComplete.prototype.TIMEOUT_ID = null;
AutoComplete.prototype.isTypingFast = function (a, d) {
	AutoComplete.prototype.TIMEOUT_ID && clearTimeout(AutoComplete.prototype.TIMEOUT_ID);
	var b = new Date;
	if (null == AutoComplete.prototype.LAST_DATE)
		return AutoComplete.prototype.LAST_DATE = b, !0;
	var c = b.getTime() - AutoComplete.prototype.LAST_DATE.getTime();
	AutoComplete.prototype.LAST_DATE = b;
	return c < AutoComplete.prototype.TYPING_THRESHOLD_MILLIS ? (AutoComplete.prototype.TIMEOUT_ID = setTimeout("document.getElementById('" + a + "').onkeyup();", AutoComplete.prototype.TYPING_THRESHOLD_MILLIS),
		!0) : !1
};
AutoComplete.prototype.isNavigation = function (a) {
	a = a.keyCode;
	return 38 == a || 40 == a
};
AutoComplete.prototype.isIgnore = function (a) {
	a = a.keyCode;
	return 9 == a || 16 == a || 33 <= a && 46 >= a || 112 <= a && 123 >= a
};
AutoComplete.prototype.isEscape = function (a) {
	return 27 == a.keyCode
};
AutoComplete.prototype.isEnter = function (a) {
	return 13 == a.keyCode
};
AutoComplete.prototype.query = function (a) {
	try {
		var d = sforce.connection.query(a);
		a = {};
		a.size = d.size;
		a.records = d.getArray("records");
		return a
	} catch (b) {
		alert("error: " + b)
	}
};
AutoComplete.prototype.makeBox = function (a, d, b) {
	if (AutoComplete.prototype.IS_IE) {
		var c = document.createElement("iframe");
		c.id = a + "I";
		c.style.display = "block";
		c.style.position = "absolute";
		c.style.padding = "3px";
		c.style.height = d + "px";
		c.style.width = b + "px";
		c.style.backgroundColor = "#ffffCC";
		document.body.appendChild(c)
	}
	c = document.createElement("div");
	c.id = a + "D";
	c.style.border = "1px solid #666";
	c.style.display = "block";
	c.style.position = "absolute";
	c.style.padding = "2px";
	c.style.height = d + "px";
	c.style.width = b + "px";
	c.style.backgroundColor = "#ffffCC";
	document.body.appendChild(c);
	return c
};
AutoComplete.prototype.getBox = function (a) {
	return document.getElementById(a + "D")
};
AutoComplete.prototype.resizeBox = function (a, d, b) {
	var c = document.getElementById(a + "I");
	c && (c.style.height = d + "px", c.style.width = b + "px");
	if (a = document.getElementById(a + "D"))
		a.style.height = d + "px", a.style.width = b + "px"
};
AutoComplete.prototype.moveBox = function (a, d, b) {
	var c = document.getElementById(a + "I");
	c && (c.style.top = d + "px", c.style.left = b + "px", c.style.zIndex = 10);
	if (a = document.getElementById(a + "D"))
		a.style.top = d + "px", a.style.left = b + "px", a.style.zIndex = 20
};
AutoComplete.prototype.showBox = function (a, d) {
	var b = d ? "block" : "none",
	c = document.getElementById(a + "I");
	c && (c.style.display = b);
	if (c = document.getElementById(a + "D"))
		c.style.display = b
};
AutoComplete.prototype.loadAutoComplete = function (a) {
	a || (AutoComplete.prototype.FORM_NAME = "editPage");
	a = getCookie("sid");
	var d = ApiUtils.getApiURL(!0, "7.0");
	sforce.connection.init(a, d, !0);
	a = document.getElementsByTagName("input");
	for (d = 0; d < a.length; d++) {
		var b = a[d];
		AutoComplete.prototype.isLookup(b) && (b = new AutoComplete(b), AutoComplete.prototype.AUTOCOMPLETE_MAP[b.getBaseName()] = b)
	}
};
function Banner(a) {
	this.bannerDiv = document.getElementById(a);
	this.bannerY = Banner.BANNER_END;
	this.fadingOut = this.fadingIn = null;
	this.clicked = !1;
	var b = this;
	getCookie("sawBanner") != a && (this.shim = new iframeShim(this.bannerDiv), addEvent(this.bannerDiv, "click", function () {
			b.click()
		}, !1), this.shim.setStyle("display", "block"), this.fadeIn())
}
Banner.BANNER_END = -50;
Banner.BANNER_START = 0;
Banner.BANNER_STEP = -5;
Banner.BANNER_STEP_DELAY = 40;
Banner.BANNER_DELAY = 4E3;
Banner.COOKIE_LIFE = 90;
Banner.prototype.click = function () {
	this.fadingIn && (clearTimeout(this.fadingIn), this.fadingIn = null);
	this.clicked = !0;
	var a = new Date;
	a.setDate(a.getDate() + Banner.COOKIE_LIFE);
	setCookie("sawBanner", this.bannerDiv.id, a);
	this.fadeOut()
};
Banner.prototype.goAway = function () {
	if (!this.clicked) {
		var a = this;
		this.fadingOut = setTimeout(function () {
				a.fadeOut()
			}, Banner.BANNER_DELAY)
	}
};
Banner.prototype.interrupt = function () {
	if (!this.clicked && this.fadingOut) {
		var a = this;
		clearTimeout(this.fadingOut);
		this.fadingOut = null;
		this.fadingIn = setTimeout(function () {
				a.fadeIn()
			}, 0)
	}
};
Banner.prototype.fadeOut = function () {
	this.fadingOut && (clearTimeout(this.fadingOut), this.fadingOut = null);
	if (this.bannerY > Banner.BANNER_END) {
		var a = this;
		this.bannerY += Banner.BANNER_STEP;
		this.shim.setStyle("top", this.bannerY + "px");
		this.fadingOut = setTimeout(function () {
				a.fadeOut()
			}, Banner.BANNER_STEP_DELAY)
	}
};
Banner.prototype.fadeIn = function () {
	this.fadingIn && (clearTimeout(this.fadingIn), this.fadingIn = null);
	if (this.bannerY < Banner.BANNER_START) {
		var a = this;
		this.bannerY -= Banner.BANNER_STEP;
		this.shim.setStyle("top", this.bannerY + "px");
		this.fadingIn = setTimeout(function () {
				a.fadeIn()
			}, Banner.BANNER_STEP_DELAY)
	}
};
function toggleDependentCheckboxes(d, b) {
	for (var e = document.getElementById(d), f = b.length, a = 0; a < f; a++) {
		var c = document.getElementById(b[a]);
		"" == c.disabled && (c.checked = e.checked)
	}
};
function ButtonInputElement() {}

ButtonInputElement.prototype.enableButton = function (e, c) {
	var a = document.getElementsByName(e);
	if (a)
		for (var b = 0; b < a.length; b++) {
			var d = a[b];
			d.disabled = !c;
			d.className = c ? "btn" : "btnDisabled"
		}
};
function CheckedMenu(a, b) {
	this.id = a;
	this.needCheckMark = b;
	if (this.id)
		if (this.hook_isAccessibleMode())
			this.initAccessibilityMode(this.id);
		else {
			this.parentDiv = document.getElementById(a);
			this.buttonDiv = document.getElementById(a + CheckedMenu.BUTTON);
			this.buttonLabel = document.getElementById(a + CheckedMenu.LABEL);
			this.menuDiv = document.getElementById(a + CheckedMenu.MENU);
			this.buttonWidth = CheckedMenu.DEFAULT_ARROW;
			this.shim = new iframeShim(this.menuDiv);
			this.zIndexParent = null;
			var c = this;
			addEvent(document, "click",
				function (a) {
				c.hideOthers(a)
			}, !1);
			Sfdc.userAgent.isIE7 || addEvent(document, "keydown", function (a) {
				c.handleKeyPress(a)
			}, !1);
			addEvent(this.parentDiv, "click", function (a) {
				c.handleDivClick(a)
			}, !1);
			this.needCheckMark && addEvent(this.menuDiv, "click", function (a) {
				return c.handleMenuClick(a)
			}, !1);
			addEvent(this.parentDiv, "mouseover", function (a) {
				addStyleClass(c.parentDiv, "menuButtonOver")
			});
			addEvent(this.parentDiv, "mouseout", function (a) {
				delStyleClass(c.parentDiv, "menuButtonOver")
			});
			addEvent(this.buttonLabel, "mousedown",
				function (a) {
				c.removeDottedLinkOutline(a)
			}, !1);
			addEvent(this.buttonLabel, "mouseout", function (a) {
				c.removeDottedLinkOutline(a)
			}, !1);
			addEvent(this.buttonLabel, "keydown", function (a) {
				a.keyCode == KEY_ENTER && c.handleDivClick(a)
			}, !1)
		}
}
CheckedMenu.DEFAULT_ARROW = 17;
CheckedMenu.GO_BUTTON = "Go";
CheckedMenu.SELECT = "Select";
CheckedMenu.BUTTON = "Button";
CheckedMenu.MENU = "Menu";
CheckedMenu.LABEL = "Label";
CheckedMenu.Z_INDEX_PARENT_MAP = {
	rechat : ".feeditembodyandfooter"
};
CheckedMenu.OPTION_LINK_CSS_CLASS = "checkedMenuMenuLink";
CheckedMenu.CONTAINER_CSS_CLASS = "checkedMenu";
CheckedMenu.prototype.isInOptionLink = function (a) {
	return a ? hasStyleClass(a.dom, CheckedMenu.OPTION_LINK_CSS_CLASS) || !!a.parent("." + CheckedMenu.OPTION_LINK_CSS_CLASS) : !1
};
CheckedMenu.prototype.handleDivClick = function (a) {
	"none" == Sfdc.Dom.getStyle(this.menuDiv, "display") ? this.show() : (a = Ext.get(getEventTarget(a)), this.isInOptionLink(a) && this.hide())
};
CheckedMenu.prototype.handleMenuClick = function (a) {
	a = Ext.get(getEventTarget(a));
	if (this.isInOptionLink(a) && !a.parent(".checkedMenuChecked")) {
		var b = Ext.get(this.parentDiv).child(".checkedMenuChecked");
		b.removeClass("checkedMenuChecked");
		b.parent().removeClass("selected");
		a = a.parent(".checkedMenuOptionContainer").child(".checkedMenuOptionIcon");
		a.addClass("checkedMenuChecked");
		a.parent().addClass("selected");
		hasStyleClass(this.parentDiv, "checkedMenuActivated") && delStyleClass(this.parentDiv, "checkedMenuActivated")
	}
};
CheckedMenu.prototype.hook_isAccessibleMode = function () {
	return UserContext.isAccessibleMode
};
CheckedMenu.prototype.defaultAction = function () {
	var a = this.menuDiv.childNodes[0];
	this.hide();
	if (a.target) {
		var b = document.getElementsByName(a.target);
		b && b[0].src && (b[0].src = a.href)
	} else
		navigateToUrl(a.href)
};
CheckedMenu.prototype.show = function () {
	addStyleClass(this.parentDiv, "checkedMenuActivated");
	this.shim.setStyle("display", "block");
	this.fixIe7ZIndex();
	this.position()
};
CheckedMenu.prototype.getMenuWidth = function () {
	return this.buttonDiv.offsetWidth - 2
};
CheckedMenu.prototype.position = function () {
	this.menuDiv.style.width = "";
	for (var a = this.getMenuWidth(), b = 0; b < this.menuDiv.childNodes.length; b++) {
		var c = this.menuDiv.childNodes[b];
		c.nodeType == Node.ELEMENT_NODE && c.offsetWidth > a && (a = c.offsetWidth)
	}
	this.shim.setStyle("width", a + "px")
};
CheckedMenu.prototype.fixIe7ZIndex = function () {
	if (Sfdc.userAgent.isIE7) {
		var a = this.getZIndexParent();
		a && a.setStyle("z-index", "10")
	}
};
CheckedMenu.prototype.revertIe7ZIndexChange = function () {
	if (Sfdc.userAgent.isIE7) {
		var a = this.getZIndexParent();
		a && a.setStyle("z-index", "")
	}
};
CheckedMenu.prototype.getZIndexParent = function () {
	if (!this.zIndexParent) {
		var a = CheckedMenu.Z_INDEX_PARENT_MAP,
		b;
		for (b in a)
			if (-1 != this.parentDiv.className.indexOf(b))
				return this.zIndexParent = Ext.get(this.parentDiv).parent(a[b]);
		return null
	}
	return this.zIndexParent
};
CheckedMenu.prototype.hide = function () {
	delStyleClass(this.parentDiv, "checkedMenuActivated");
	"none" != Sfdc.Dom.getStyle(this.menuDiv, "display") && (this.shim.setStyle("display", "none"), this.parentDiv.style.position = "", this.revertIe7ZIndexChange())
};
CheckedMenu.prototype.hideOthers = function (a) {
	a = Ext.get(getEventTarget(a));
	a = hasStyleClass(a.dom, CheckedMenu.CONTAINER_CSS_CLASS) ? a : a.parent("." + CheckedMenu.CONTAINER_CSS_CLASS);
	a && a.dom.id === this.id || (this.hide(!0), hasStyleClass(this.parentDiv, "checkedMenuActivated") && delStyleClass(this.parentDiv, "checkedMenuActivated"))
};
CheckedMenu.prototype.handleKeyPress = function (a) {
	a.keyCode == KEY_ESC && this.hide()
};
CheckedMenu.prototype.initAccessibilityMode = function (a) {
	var b = document.getElementById(a + CheckedMenu.SELECT);
	addEvent(b, "change", function () {
		var c = b.options[b.selectedIndex];
		document.getElementById(a + CheckedMenu.GO_BUTTON).onclick = function (a) {
			!window.event && a && (window.event = a);
			eval(c.value)
		}
	}, !1)
};
CheckedMenu.prototype.removeDottedLinkOutline = function (a) {
	getEventTarget(a) == this.buttonLabel && ("mousedown" == a.type ? (this.buttonLabel.blur(), isIE ? this.buttonLabel.hideFocus = !0 : this.buttonLabel.style.outline = "none") : "mouseout" == a.type && (this.buttonLabel.blur(), isIE ? this.buttonLabel.hideFocus = !1 : this.buttonLabel.style.outline = null))
};
ColorInput = function (a) {
	this.id = a;
	this.box = document.createElement("div");
	this.box.innerHTML = "\x3cspan\x3e\x3c/span\x3e";
	this.input = document.getElementById(a);
	var b = this;
	this.handleChange = function (a) {
		b.formatInput();
		b.updateColor()
	};
	this.init()
};
ColorInput.prototype.updateColor = function () {
	var a = this.input.value,
	b = !0;
	a.match(/^(#[0-9a-f]{6})$/i) ? (delStyleClass(this.box, ColorInputConstants.ERROR_COLOR_BOX_CSS), this.box.style.backgroundColor = a) : (this.box.style.backgroundColor = "#FFFFFF", addStyleClass(this.box, ColorInputConstants.ERROR_COLOR_BOX_CSS), b = !1);
	return b
};
ColorInput.prototype.formatInput = function () {
	var a = this.input.value;
	"#" != a.charAt(0) && 6 == a.length && (a = "#" + a);
	a = a.toUpperCase();
	if (a.match(/^#[0-9a-f]{3}$/i))
		var b = a.charAt(1), c = a.charAt(2), a = a.charAt(3), a = "#" + b + b + c + c + a + a;
	this.input.value = a
};
ColorInput.prototype.init = function () {
	addStyleClass(this.box, ColorInputConstants.COLOR_BOX_CSS);
	this.updateColor();
	this.input.parentNode.insertBefore(this.box, this.input);
	var a = this;
	addEvent(this.input, "change", this.handleChange, !1);
	var b = function (b) {
		ColorPicker.pick(a.id, b)
	};
	addEvent(this.box, "click", b, !1);
	addEvent(this.input, "focus", b, !1);
	addEvent(this.input, "click", b, !1);
	addEvent(this.input, "click", ColorPicker.cancelHide, !1);
	this.input.updateColor = function () {
		a.updateColor()
	}
};
function ColorPicker() {
	this.pickerDiv = document.getElementById(ColorPickerConstants.DOM_ID);
	this.colorView = document.getElementById(ColorPickerConstants.COLOR_VIEW_ID);
	this.hexView = document.getElementById(ColorPickerConstants.HEX_VIEW_ID);
	this.shim = new iframeShim(this.pickerDiv);
	this.field = null;
	this.addedFields = {};
	var a = this;
	addEvent(document, "click", function () {
		a.hide()
	}, !1);
	addEvent(this.pickerDiv, "click", function (a) {
		ColorPicker.cancelHide(a)
	}, !1)
}
ColorPicker.prototype.position = function () {
	for (var a = 0, b = 0, c = this.field, d = this.pickerDiv.offsetHeight, e = this.pickerDiv.offsetWidth; null != c && c != this.pickerDiv.offsetParent; )
		a += c.offsetLeft, b += c.offsetTop, c.scrollLeft && (a -= c.scrollLeft), c.scrollTop && (b -= c.scrollTop), c = c.offsetParent;
	Dialogs.hasOpenDialog() ? (b = b + d + this.field.offsetHeight > Sfdc.Window.getWindowHeight() ? b - d : b + this.field.offsetHeight, a + e > getWindowWidth() && (a -= e - this.field.offsetWidth), this.shim.setStyle("position", "fixed")) : (getObjX(this.field) +
		e > getScrollX() + Sfdc.Window.getWindowWidth() && (a -= e - this.field.offsetWidth), b = getObjY(this.field) + d > getScrollY() + Sfdc.Window.getWindowHeight() ? b - d : b + this.field.offsetHeight, this.shim.setStyle("position", "absolute"));
	this.shim.setStyle("left", a + "px");
	this.shim.setStyle("top", b + "px")
};
ColorPicker.prototype.hide = function () {
	this.shim.setStyle("display", "none")
};
ColorPicker.prototype.show = function (a) {
	this.field = document.getElementById(a);
	this.updateView(this.field.value);
	this.shim.setStyle("display", "block");
	if (!this.addedFields[a]) {
		this.addedFields[a] = !0;
		var b = this;
		addEvent(document, "keydown", function (a) {
			b.handleKeyPress(a)
		}, !1)
	}
	this.position()
};
ColorPicker.prototype.handleKeyPress = function (a) {
	getEvent(a).keyCode == KEY_ESC && this.hide()
};
ColorPicker.prototype.selectBasic = function (a) {
	!this.field.disabled && this.field.value != a && (this.field.value = ColorPicker.formatHex(a), Sfdc.Event.fireEvent(this.field, "change"));
	this.field.focus();
	Sfdc.userAgent.isIE ? Sfdc.Function.delay(this.hide, 100, this) : this.hide()
};
ColorPicker.prototype.updateView = function (a) {
	a = ColorPicker.formatHex(a);
	this.colorView.style.backgroundColor = a;
	this.hexView.value = a
};
ColorPicker.singleton = null;
ColorPicker.cancelHide = function (a) {
	eventCancelBubble(a);
	return !1
};
ColorPicker.pick = function (a, b) {
	ColorPicker.singleton || (ColorPicker.singleton = new ColorPicker);
	ColorPicker.singleton.show(a);
	b && ColorPicker.cancelHide(b)
};
ColorPicker.formatHex = function (a) {
	var b = "#" == a.charAt(0) ? a : "#" + a;
	if (b.match(/^#[0-9a-f]{3}$/i)) {
		a = b.charAt(1);
		var c = b.charAt(2),
		b = b.charAt(3),
		b = "#" + a + a + c + c + b + b
	} else
		b.match(/^#[0-9a-f]{6}$/i) || (b = "#FFFFFF");
	return b
};
ColorPicker.hiOn = function (a, b) {
	hiOn(a);
	a.style.backgroundColor = "#000000";
	ColorPicker.singleton.updateView(b)
};
ColorPicker.hiOff = function (a, b) {
	hiOff(a);
	a.style.backgroundColor = ColorPicker.formatHex(b)
};
function CriteriaInput(a, c, b) {
	if (a) {
		this.oppLabels = a;
		this.numFilters = c;
		this.hook_isPopulated = !1;
		this.currentEntityData = b;
		this.entityCache = {};
		b && (this.entityCache[b.entityName] = b);
		var d = this;
		this.handleFieldChange = function (a) {
			a = getEventTarget(getEvent(a));
			d.updateOperator(a, d.getOp(a))
		};
		this.handleClearFiltersClick = function (a) {
			document.getElementById(CriteriaInputConstants.pCOL + "1").disabled || d.clearFilters()
		};
		this.handleClearFilterRowClick = function (a) {
			document.getElementById(CriteriaInputConstants.pCOL +
				"1").disabled || d.clearFilterRow(a)
		};
		this.revealHiddenRow = function (a) {
			var b = a.hiddenId;
			void 0 === b && (b = getEventTarget(getEvent(a)).id);
			for (var e = 0; e < b.length; e++)
				if ((a = parseInt(b.substr(e), 10)) && d.isRowPopulated(a)) {
					if (b = document.getElementById(CriteriaInputConstants.F_ROW + (a + 1)))
						b.style.display = "";
					if (a >= c && (b = document.getElementById(CriteriaInputConstants.MAX_ROWS_ID)))
						b.style.display = "";
					break
				}
			d.hook_revealHiddenRow()
		};
		this.init()
	}
}
CriteriaInput.prototype.init = function () {
	for (var a = this, c = function (b) {
		return function () {
			a.handleClearFilterRowClick(b)
		}
	}, b = 1; b <= this.numFilters; b++) {
		var d = document.getElementById(CriteriaInputConstants.pCOL + b);
		("number" == typeof d.selectedIndex && 0 < d.selectedIndex || "number" != typeof d.selectedIndex && 0 < d.value.length) && this.updateOperator(d, this.getOp(d));
		addEvent(d, "change", this.handleFieldChange, !1);
		addEvent(d, "blur", this.revealHiddenRow, !1);
		addEvent(document.getElementById(CriteriaInputConstants.pVAL +
				b), "blur", this.revealHiddenRow, !1);
		addEvent(document.getElementById(CriteriaInputConstants.pOP + b), "blur", this.revealHiddenRow, !1);
		(d = document.getElementById(CriteriaInputConstants.CLEAR_FILTERS_LINK + b)) && addEvent(d, "click", c(b), !1)
	}
	(c = document.getElementById(CriteriaInputConstants.CLEAR_FILTERS_LINK)) && addEvent(c, "click", this.handleClearFiltersClick)
};
CriteriaInput.prototype.setEntity = function (a, c) {
	a !== this.currentEntityData && (this.currentEntityData = a, this.refreshElementsFromData(c))
};
CriteriaInput.prototype.setIsPopulatedHook = function (a) {
	this.hook_isPopulated = a
};
CriteriaInput.prototype.isPopulated = function () {
	for (var a = 1; a <= this.numFilters; a++)
		if (this.isRowPopulated(a))
			return !0;
	return !1
};
CriteriaInput.prototype.isAllPopulated = function () {
	for (var a = 1; a <= this.numFilters; a++)
		if (!this.isRowPopulated(a))
			return !1;
	return !0
};
CriteriaInput.prototype.isRowPopulated = function (a) {
	return 0 < document.getElementById(CriteriaInputConstants.pCOL + a).value.length || 0 < document.getElementById(CriteriaInputConstants.pVAL + a).value.length || 0 < document.getElementById(CriteriaInputConstants.pOP + a).value.length
};
CriteriaInput.prototype.refreshElementsFromData = function (a) {
	for (a = 1; a <= this.numFilters; a++) {
		var c = Util.refreshDynamicSelect(document.getElementById(CriteriaInputConstants.pCOL + a), this.currentEntityData.getFieldOptions(), !0);
		addEvent(c, "change", this.handleFieldChange, !1);
		document.getElementById(CriteriaInputConstants.pOP + a).selectedIndex = 0;
		document.getElementById(CriteriaInputConstants.pVAL + a).value = "";
		document.getElementById(CriteriaInputConstants.pLOOKUP + a).style.display = "none"
	}
};
CriteriaInput.prototype.updateOperator = function (a, c) {
	var b;
	0 < c.offsetWidth && (b = c.offsetWidth + "px");
	var d = null,
	g = "number" == typeof a.selectedIndex ? a.options[a.selectedIndex].value : a.value,
	d = g ? this.currentEntityData.getOperators(g) : null,
	h = c.options[c.selectedIndex].value,
	e = [];
	if (d)
		for (var f = 0; f < d.length; f++)
			e.push([this.oppLabels[d[f]], d[f]]);
	c = Util.refreshDynamicSelect(c, e, !0, h);
	c.style.width = b ? b : "98%";
	b = this.getLookup(a);
	this.currentEntityData.needsLookup(g) ? b.style.display = "block" : b.style.display =
		"none"
};
CriteriaInput.prototype.getLookup = function (a) {
	a = a.id.substring(CriteriaInputConstants.pCOL.length, a.id.length);
	return document.getElementById(CriteriaInputConstants.pLOOKUP + a)
};
CriteriaInput.prototype.getOp = function (a) {
	a = a.id.substring(CriteriaInputConstants.pLOOKUP.length, a.id.length);
	return document.getElementById(CriteriaInputConstants.pOP + a)
};
CriteriaInput.prototype.clearFilters = function () {
	for (var a = 1; a <= this.numFilters; a++)
		this.clearFilterRow(a, !0);
	if (a = document.getElementById(CriteriaInputConstants.BOOL_FILTER_NAME))
		a.value = "";
	this.hook_isPopulated && this.hook_isPopulated(this.isPopulated())
};
CriteriaInput.prototype.clearFilterRow = function (a, c) {
	var b = document.getElementById(CriteriaInputConstants.pCOL + a);
	"number" == typeof b.selectedIndex ? b.selectedIndex = 0 : b.value = "";
	document.getElementById(CriteriaInputConstants.pOP + a).selectedIndex = 0;
	b = document.getElementById(CriteriaInputConstants.pVAL + a);
	b.value = "";
	document.getElementById(CriteriaInputConstants.pLOOKUP + a).style.display = "none";
	document.getElementById(CriteriaInputConstants.ERROR_CLS + a).innerHTML = "";
	document.getElementById(CriteriaInputConstants.pVAL +
		a + "_error");
	b.nextSibling && hasStyleClass(b.nextSibling, "errorMsg") && (b.nextSibling.innerHTML = "");
	!c && this.hook_isPopulated && this.hook_isPopulated(this.isPopulated())
};
CriteriaInput.prototype.hook_revealHiddenRow = function () {
	this.hook_isPopulated && this.hook_isPopulated(this.isPopulated())
};
function CriteriaEntityData(a, c) {
	this.entityName = a;
	this.fields = c
}
CriteriaEntityData.prototype.getFieldOptions = function () {
	if (this.fieldOptions)
		return this.fieldOptions;
	this.fieldOptions = [];
	for (var a = 0; a < this.fields.length; a++)
		this.fieldOptions.push([this.fields[a].label, this.entityName + "." + this.fields[a].name]);
	return this.fieldOptions
};
CriteriaEntityData.prototype.getColunmTypeByName = function (a) {
	return ColumnType[this.getFieldByName(a).columnType]
};
CriteriaEntityData.prototype.getOperators = function (a) {
	a = this.getColunmTypeByName(a);
	return a.filterQueryOperators ? a.filterQueryOperators : a.queryOperators
};
CriteriaEntityData.prototype.getFieldByName = function (a) {
	var c;
	a = a.split(".")[1];
	for (var b = 0; b < this.fields.length; b++)
		if (this.fields[b].name === a) {
			c = this.fields[b];
			break
		}
	return c
};
CriteriaEntityData.prototype.needsLookup = function (a) {
	return !a || "MEMBER_STATUS" == a || "CAMPAGN_MEMBER.STATUS" == a || "Lead.CampaignMemberStatus" == a ? !1 : 0 <= a.indexOf("$Profile.Name") ? !0 : this.getColunmTypeByName(a).needsLookup
};
function FormulaFilterCriteriaEntityData(a) {
	CriteriaEntityData.call(this, a)
}
FormulaFilterCriteriaEntityData.prototype = new CriteriaEntityData;
FormulaFilterCriteriaEntityData.prototype.getColunmTypeByName = function (a) {
	return (a = sfdcPage.getDialogById("FieldTreeDialogId").controller.getNodeByDbName(a)) ? "DYNAMICENUM" == a.attributes[FieldTreeConstants.COLUMN_TYPE] || "TEXTENUM" == a.attributes[FieldTreeConstants.COLUMN_TYPE] || "STATICENUM" == a.attributes[FieldTreeConstants.COLUMN_TYPE] || "CURRENCYCODE" == a.attributes[FieldTreeConstants.COLUMN_TYPE] || "DIVISION" == a.attributes[FieldTreeConstants.COLUMN_TYPE] ? {
		needsLookup : ColumnType[a.attributes[FieldTreeConstants.COLUMN_TYPE]].needsLookup,
		filterQueryOperators : ["e", "n", "c", "k", "s"]
	}
	 : ColumnType[a.attributes[FieldTreeConstants.COLUMN_TYPE]] : {
		needsLookup : !1,
		queryOperators : "enscklgmhux".split("")
	}
};
function DatePicker() {
	this.today = DateUtil.getDateTimeFromUserLocale(UserContext.today);
	this.calendarDiv = document.getElementById(DatePickerIds.DOM_ID);
	this.shim = new iframeShim(this.calendarDiv);
	this.table = document.getElementById(DatePickerIds.TABLE_ID);
	this.monthPicker = document.getElementById(DatePickerIds.MONTH_PICKER);
	this.yearPicker = document.getElementById(DatePickerIds.YEAR_PICKER);
	this.callOnChange = !1;
	this.currentDate = this.myElement = this.myField = null;
	this.hasTime = !1;
	this.addedFields = {};
	this.skipReopen =
		!1;
	var a = this;
	this.closeHandler = function (c) {
		a.hide(c)
	};
	addEvent(document, "click", this.closeHandler, !1);
	addEvent(this.calendarDiv, "click", function (c) {
		a.cancelHide(c)
	}, !1);
	addEvent(this.monthPicker, "change", function () {
		a.generateMonth()
	}, !1);
	addEvent(this.yearPicker, "change", function () {
		a.generateMonth()
	}, !1)
}
DatePicker.prototype.setMyDate = function (a) {
	var c = !1,
	b = a.getFullYear(),
	d = b;
	LC.isThaiTHLocale() && (d += LC.BUDDHIST_CAL_OFFSET);
	for (var e = 0; e < this.yearPicker.options.length; e++)
		if (parseInt(this.yearPicker[e].value) > a.getFullYear()) {
			Util.insertOption(this.yearPicker, new Option(d, b, !1, !0), e);
			c = !0;
			break
		} else if (parseInt(this.yearPicker[e].value) == b) {
			this.yearPicker.selectedIndex = e;
			c = !0;
			break
		}
	c || (this.yearPicker.options[this.yearPicker.options.length] = new Option(d, b, !1, !0));
	this.monthPicker.selectedIndex =
		a.getMonth()
};
DatePicker.prototype.prevMonth = function () {
	if (0 == this.monthPicker.selectedIndex) {
		var a = parseInt(this.yearPicker[this.yearPicker.selectedIndex].value) - 1;
		if (0 == this.yearPicker.selectedIndex || a != this.yearPicker[this.yearPicker.selectedIndex - 1].value) {
			var c = new Date;
			c.setFullYear(a);
			c.setMonth(11);
			this.setMyDate(c)
		} else
			this.yearPicker.selectedIndex--, this.monthPicker.selectedIndex = 11
	} else
		this.monthPicker.selectedIndex--;
	this.generateMonth()
};
DatePicker.prototype.nextMonth = function () {
	if (11 == this.monthPicker.selectedIndex) {
		var a = parseInt(this.yearPicker[this.yearPicker.selectedIndex].value) + 1;
		if (this.yearPicker.selectedIndex == this.yearPicker.length - 1 || a != this.yearPicker[this.yearPicker.selectedIndex + 1].value) {
			var c = new Date;
			c.setFullYear(a);
			c.setMonth(0);
			this.setMyDate(c)
		} else
			this.yearPicker.selectedIndex++, this.monthPicker.selectedIndex = 0
	} else
		this.monthPicker.selectedIndex++;
	this.generateMonth()
};
DatePicker.prototype.generateMonth = function () {
	var a = parseInt(this.monthPicker[this.monthPicker.selectedIndex].value),
	c = parseInt(this.yearPicker[this.yearPicker.selectedIndex].value),
	b = new Date;
	b.setDate(1);
	b.setFullYear(c);
	b.setMonth(a);
	var d = UserContext.startOfWeek - b.getDay();
	1 < d && (d -= 7);
	b.setDate(d);
	document.getElementById("calRow5").style.display = "";
	document.getElementById("calRow6").style.display = "";
	for (var d = this.table.getElementsByTagName("td"), e = 0; e < d.length; e++) {
		var f = b.getDay(),
		f = 0 == f || 6 ==
			f ? "weekend" : "weekday";
		if (b.getMonth() == a - 1 || b.getFullYear() == c - 1)
			f += " prevMonth";
		else if (b.getMonth() == a + 1 || b.getFullYear() == c + 1) {
			if (0 == e % 7) {
				document.getElementById("calRow6").style.display = "none";
				4 == e / 7 && (document.getElementById("calRow5").style.display = "none");
				break
			}
			f += " nextMonth"
		}
		DateUtil.equals(b, this.today) && (f += " todayDate");
		DateUtil.equals(b, this.currentDate) && (f += " selectedDate");
		d[e].className = f;
		d[e].innerHTML = b.getDate();
		b.setDate(b.getDate() + 1)
	}
};
DatePicker.prototype.selectDate = function (a) {
	if ("today" == a)
		this.currentDate = this.today, a = this.hasTime ? DateUtil.getDateTimeStringFromUserLocale(this.today) : DateUtil.getDateStringFromUserLocale(this.today), this.setMyDate(this.today), this.generateMonth();
	else {
		var c = new Date(this.today.getTime());
		c.setDate(1);
		c.setFullYear(parseInt(this.yearPicker[this.yearPicker.selectedIndex].value));
		var b = parseInt(this.monthPicker[this.monthPicker.selectedIndex].value);
		-1 != a.className.indexOf("nextMonth") ? b++ : -1 != a.className.indexOf("prevMonth") &&
		b--;
		c.setMonth(b);
		c.setDate(a.innerHTML);
		a = this.hasTime ? DateUtil.getDateTimeStringFromUserLocale(c) : DateUtil.getDateStringFromUserLocale(c);
		this.hide()
	}
	DatePicker.insertDate(a, this.myField.id, this.callOnChange)
};
DatePicker.prototype.position = function () {
	for (var a = 0, c = 0, b = this.myElement; null != b && b != this.calendarDiv.offsetParent; )
		a += b.offsetLeft - b.scrollLeft, c += b.offsetTop - b.scrollTop, b = b.offsetParent;
	c = getObjY(this.myElement) + this.calendarDiv.offsetHeight > Sfdc.Window.getScrollY() + Sfdc.Window.getWindowHeight() ? c - (this.calendarDiv.offsetHeight + 1) : c + (this.myElement.offsetHeight + 1);
	b = "left";
	LC.isRtlPage() && (b = "right", a = this.calendarDiv.offsetParent.offsetWidth - a - this.myElement.offsetWidth);
	this.shim.setStyle(b,
		a + "px");
	this.shim.setStyle("top", c + "px")
};
DatePicker.prototype.show = function (a, c, b, d) {
	if (this.skipReopen)
		this.skipReopen = !1;
	else {
		this.callOnChange = a;
		this.hasTime = b;
		this.myField = DatePicker.getDateField(c);
		this.myElement = d ? d : this.myField;
		var e = this;
		"hidden" != this.myField.type && (this.addedFields[c] !== this.myField && (this.addedFields[c] = null), this.addedFields[c] || (this.addedFields[c] = this.myField, addEvent(this.myField, "keydown", function (a) {
					e.handleKeyPress(a)
				}, !1), !b && LC.isEnglishLanguage() && (a = LC.isEnglishUS() ? function () {
					DateUtil.checkYear(e.myField,
						e.callOnChange)
				}
					 : function () {
					DateUtil.evaluateShortcut(e.myField, e.callOnChange)
				}, addEvent(this.myField, "blur", a, !1))));
		b = b ? DateUtil.getDateFromFormat(this.myField.value, UserContext.dateTimeFormat) : DateUtil.getDateFromFormat(this.myField.value, UserContext.dateFormat);
		0 != b ? (this.currentDate = new Date(b), this.setMyDate(this.currentDate)) : this.setMyDate(this.today);
		this.generateMonth();
		this.display()
	}
};
DatePicker.prototype.cancelHide = function (a) {
	eventCancelBubble(a);
	return !1
};
DatePicker.prototype.handleKeyPress = function (a) {
	a = getEvent(a).keyCode;
	a == KEY_ESC || a == KEY_TAB ? this.hide() : a == KEY_ENTER && !this.hasTime && (LC.isEnglishUS() ? DateUtil.checkYear(this.myField) : LC.isEnglishLanguage() && DateUtil.evaluateShortcut(this.myField))
};
DatePicker.prototype.hide = function (a) {
	a && getEventTarget(a) === this.myField || this.shim.setStyle("display", "none")
};
DatePicker.prototype.display = function () {
	this.shim.setStyle("display", "block");
	this.position();
	this.skipReopen = !1
};
DatePicker.datePicker = null;
DatePicker.getDatePicker = function () {
	DatePicker.datePicker || (DatePicker.datePicker = new DatePicker);
	return DatePicker.datePicker
};
DatePicker.getDateField = function (a) {
	a = Sfdc.get(a);
	if (!a)
		return null;
	Sfdc.Data.get(a, "DatePicker:onClickAdded") || (Sfdc.on(a, "click", function (a) {
			if (document.activeElement && this === document.activeElement && Sfdc.isFunction(this.onfocus))
				this.onfocus(a)
		}), Sfdc.Data.set(a, "DatePicker:onClickAdded", !0));
	return a
};
DatePicker.pickDate = function (a, c, b, d) {
	DatePicker.getDatePicker().show(a, c, b, d)
};
DatePicker.insertDate = function (a, c, b) {
	var d = DatePicker.getDateField(c);
	if (!d.disabled && d.value != a) {
		d.value = a;
		if (window.sfdcPage && window.sfdcPage.getLookupFieldsControlledBy) {
			c = (a = sfdcPage.getLookupFieldsControlledBy(c)) ? a.length : 0;
			for (var e = 0; e < c; e++)
				ForeignKeyInputElement.allElements[a[e]].validate()
		}
		b && Sfdc.Event.fireEvent(d, "change");
		DatePicker.getDatePicker().skipReopen = !0;
		d.focus()
	}
};
DatePicker.datePickEventRemove = function () {
	DatePicker.datePicker && removeEvent(document, "click", DatePicker.datePicker.closeHandler, !1)
};
function confirmDelete(a) {
	a || (a = LC.getLabel("Global", "are_you_sure"));
	return Modal.confirm(a)
};
function DeveloperNameInputElement() {}

DeveloperNameInputElement.setName = function (d, c, g) {
	d = d.value;
	var a = "",
	e = !1,
	f = !1;
	if (null !== c && 0 == c.value.length && 0 < d.length) {
		for (i = 0; i < d.length; i++) {
			var b = d.charAt(i);
			"a" <= b && "z" >= b || "A" <= b && "Z" >= b || "0" <= b && "9" >= b ? (!e && ("0" <= b && "9" >= b) && (a += "X"), a += b, e = !0, f = !1) : e && !f && (a += "_", f = !0)
		}
		e ? (c.maxLength && 0 < c.maxLength && (a = a.substr(0, c.maxLength)), c.value = f ? a.substring(0, a.length - 1) : a) : c.value = g
	}
	return !0
};
function DuelingListBoxesElement(a, b, e, f) {
	this.sListIds = a;
	this.warnDiv = b;
	this.removeWarnIf = e;
	this.removeWarningText = f
}
DuelingListBoxesElement.prototype.storeStateOnce = function () {
	this.isStored || (this.isStored = !0, this.storeState())
};
DuelingListBoxesElement.prototype.storeState = function () {
	this.selectContents = [];
	for (var a = 0; a < this.sListIds.length; a++) {
		var b = document.getElementById(this.sListIds[a]);
		if (b) {
			this.selectContents[a] = [];
			for (var e = 0; e < b.options.length; e++)
				this.selectContents[a][e] = [b.options[e].text, b.options[e].value]
		}
	}
};
DuelingListBoxesElement.prototype.resetSelection = function () {
	if (this.isStored)
		for (var a = 0; a < this.sListIds.length; a++) {
			var b = document.getElementById(this.sListIds[a]);
			b && Util.refreshDynamicSelect(b, this.selectContents[a])
		}
};
DuelingListBoxesElement.prototype.quickWarn = function (a) {
	DuelingListBoxesElement.warning(this.warnDiv, a)
};
DuelingListBoxesElement.prototype.quickUnwarn = function () {
	DuelingListBoxesElement.removeWarning(this.warnDiv)
};
DuelingListBoxesElement.prototype.instMoveDown = function (a, b, e, f, g) {
	this.storeStateOnce();
	DuelingListBoxesElement.moveDown(a, b, e, f, g)
};
DuelingListBoxesElement.prototype.instMoveUp = function (a, b, e, f, g) {
	this.storeStateOnce();
	DuelingListBoxesElement.moveUp(a, b, e, f, g)
};
DuelingListBoxesElement.prototype.instMoveBottom = function (a, b) {
	this.storeStateOnce();
	DuelingListBoxesElement.moveBottom(a, b)
};
DuelingListBoxesElement.prototype.instMoveTop = function (a, b) {
	this.storeStateOnce();
	DuelingListBoxesElement.moveTop(a, b)
};
DuelingListBoxesElement.prototype.instMoveOption = function (a, b, e, f, g, d, c, h, k) {
	this.storeStateOnce();
	DuelingListBoxesElement.moveOption(a, b, e, f, g, d, c, h, k, this.removeWarnIf, this.removeWarningText)
};
DuelingListBoxesElement.prototype.instSaveAllSelected = function (a, b, e, f, g) {
	DuelingListBoxesElement.saveAllSelected(a, b, e, f, g)
};
DuelingListBoxesElement.warning = function (a, b) {
	if (a) {
		var e = document.getElementById(a);
		e && (e.innerHTML = LC.getLabel("Global", "colonSeparatedWords", LC.getLabel("Global", "error"), b), e.style.display = "block")
	}
};
DuelingListBoxesElement.removeWarning = function (a) {
	if (a && (a = document.getElementById(a)))
		a.innerHTML = "", a.style.display = "none"
};
DuelingListBoxesElement.moveTop = function (a, b) {
	if (1 < a.length) {
		for (var e = a.options, f = [], g = 0, d = 0; d < a.length; d++)
			e[d].selected && (f[g] = d, g++);
		for (d = 0; d < f.length; d++) {
			g = f[d];
			delta = g - d;
			for (var c = 0; c < delta; c++)
				DuelingListBoxesElement.privateMoveUp(e, g - c), e[g - c].selected = !1, e[g - c - 1].selected = !0
		}
		a.focus();
		if (a.onLocalMoveTop)
			a.onLocalMoveTop()
	}
	DuelingListBoxesElement.removeWarning(b)
};
DuelingListBoxesElement.moveBottom = function (a, b) {
	if (1 < a.length) {
		for (var e = a.options, f = [], g = 0, d = 0; d < a.length; d++)
			e[d].selected && (f[g] = d, g++);
		for (var g = a.length - 1, c, d = f.length - 1; 0 <= d; d--) {
			c = f[d];
			for (var h = g - c, k = 0; k < h; k++)
				DuelingListBoxesElement.privateMoveDown(e, c + k), e[c + k].selected = !1, e[c + k + 1].selected = !0;
			g--
		}
		a.focus();
		if (a.onLocalMoveBottom)
			a.onLocalMoveBottom()
	}
	DuelingListBoxesElement.removeWarning(b)
};
DuelingListBoxesElement.privateMoveUp = function (a, b) {
	var e = new Option(a[b - 1].text, a[b - 1].value);
	a[b - 1].text = a[b].text;
	a[b - 1].value = a[b].value;
	a[b].text = e.text;
	a[b].value = e.value
};
DuelingListBoxesElement.privateMoveDown = function (a, b) {
	var e = new Option(a[b + 1].text, a[b + 1].value);
	a[b + 1].text = a[b].text;
	a[b + 1].value = a[b].value;
	a[b].text = e.text;
	a[b].value = e.value
};
DuelingListBoxesElement.moveDown = function (a, b, e, f, g) {
	var d = !1;
	if (1 < a.length) {
		var c = a.options,
		h = [],
		k = 0;
		if (null != b) {
			if (b == c[0].value && c[0].selected && (c[1].value != e || c[1].selected))
				c[0].selected = !1, null != f && (DuelingListBoxesElement.warning(g, f), d = !0);
			e && (c[1].value == b && c[1].selected) && (c[1].selected = !1, null != f && (DuelingListBoxesElement.warning(g, nmovableAlertMessage), d = !0))
		}
		for (b = a.length - 2; 0 <= b; b--)
			a.options[b].selected && (h[k] = b, k++);
		for (b = 0; b < h.length; b++)
			k = h[b], DuelingListBoxesElement.privateMoveDown(c,
				k), c[k].selected = !1, c[k + 1].selected = !0;
		a.focus();
		if (a.onLocalMoveDown)
			a.onLocalMoveDown()
	}
	d || DuelingListBoxesElement.removeWarning(g)
};
DuelingListBoxesElement.moveUp = function (a, b, e, f, g) {
	if (1 < a.length) {
		var d = a.options,
		c = [],
		h = 0;
		if (null != b) {
			if (d[0].value == b && (d[1].selected && d[1].value != e) && (d[1].selected = !1, null != f)) {
				DuelingListBoxesElement.warning(g, f);
				return
			}
			if (e && d[2].selected && (d[1].value == b || d[1].selected))
				if (d[2].selected = !1, null != f) {
					DuelingListBoxesElement.warning(g, f);
					return
				}
		}
		for (b = 1; b < a.length; b++)
			d[b].selected && (c[h] = b, h++);
		for (b = 0; b < c.length; b++)
			h = c[b], DuelingListBoxesElement.privateMoveUp(d, h), d[h].selected = !1, d[h - 1].selected =
				!0;
		a.focus();
		if (a.onLocalMoveUp)
			a.onLocalMoveUp()
	}
	DuelingListBoxesElement.removeWarning(g)
};
DuelingListBoxesElement.moveOption = function (a, b, e, f, g, d, c, h, k, p, l) {
	if (!p || !p() || Modal.confirm && Modal.confirm(l) || !Modal.confirm && window.confirm(l)) {
		p = !1;
		l = a.options;
		var n,
		m = [],
		r = 0;
		if (a.cannotBeEmpty || c) {
			for (c = n = 0; c < a.length; c++)
				a.options[c].selected && n++;
			if (n == a.options.length) {
				a.handleEmptyList && a.handleEmptyList();
				h && DuelingListBoxesElement.warning(k, h);
				return
			}
		}
		for (c = 0; c < a.length; c++)
			if (h = l[c], h.selected) {
				if ((n = h.text != e) && null != f)
					for (var q = 0; q < f.length; q++)
						if (f[q] == h.value) {
							n = !1;
							null != g[q] && (DuelingListBoxesElement.warning(k,
									g[q]), p = !0);
							break
						}
				n ? (m[r] = c, r++) : h.selected = !1
			}
		f = b.options;
		if (0 < m.length) {
			b.selectedIndex = -1;
			for (c = 0; c < m.length; c++)
				h = new Option(l[m[c]].text, l[m[c]].value), h.title = l[m[c]].title, 1 == f.length && f[0].text == d ? (f[0] = h, f[0].selected = !0) : (f[f.length] = h, f[f.length - 1].selected = !0)
		}
		if (b.onchange)
			b.onchange();
		if (a.onchange)
			a.onchange();
		for (c = m.length - 1; -1 < c; c--)
			a.remove(m[c]);
		a.disabled = !0;
		a.disabled = !1;
		0 == l.length && (l[0] = new Option(e, e));
		0 < m.length && b.focus();
		if (b.onLocalMoveOptions)
			b.onLocalMoveOptions();
		if (a.onLocalMoveOptions)
			a.onLocalMoveOptions();
		p || DuelingListBoxesElement.removeWarning(k)
	}
};
DuelingListBoxesElement.saveAllSelected = function (a, b, e, f, g) {
	var d,
	c;
	for (d = 0; d < a.length; d++) {
		b[d].value = "";
		for (c = 0; c < a[d].length; c++) {
			if (!(1 == a[d].length && a[d].options[0].value == g)) {
				var h = a[d].options[c].value.replace(RegExp(f + f, "g"), f + f);
				b[d].value += h.replace(RegExp(e, "g"), f + e)
			}
			c + 1 < a[d].length && (b[d].value += e)
		}
	}
};
function EncryptedTextInputElement(c, d, e) {
	if (e && (this.maxLength = d, this.element = getElementByIdCS(c))) {
		this.wasCleared = !1;
		this.origValue = this.element.value;
		var a = this;
		this.handleOnFocus = function (b) {
			a.wasCleared || a.element.select()
		};
		this.handleKey = function (b) {
			a.wasCleared || (b = getEvent(b).keyCode, b === KEY_ENTER || (b === KEY_TAB || b === KEY_PAGEUP || b === KEY_PAGEDOWN) || (a.element.value = "", a.element.maxLength = a.maxLength, a.wasCleared = !0))
		};
		this.handleBlur = function (b) {
			a.element.value === a.origValue && (a.wasCleared =
					!1)
		};
		addEvent(this.element, "focus", this.handleOnFocus, !0);
		addEvent(this.element, "blur", this.handleBlur, !0);
		addEvent(this.element, "keypress", this.handleKey, !0)
	}
};
function FileFieldInputElement(a) {
	this.elementId = a;
	this.ffDiv = document.getElementById(a);
	this.ffUploadingDiv = document.getElementById(a + "_uploading");
	this.backupOfDiv = this.ffDiv.innerHTML;
	this.isTimeout = !1
}
FileFieldInputElement.prototype.completeUpload = function (a, b) {
	this.isTimeout = !1;
	document.getElementById(this.elementId + "_timeout").style.display = "none";
	this.isCancelled ? this.isCancelled = !1 : (this.ffDiv.innerHTML = a.innerHTML, b && a.parentNode.removeChild(a), this.ffDiv.style.display = "block", this.ffUploadingDiv.style.display = "none", window.sfdcPage && window.sfdcPage.enableSaveButtons && window.sfdcPage.enableSaveButtons(), FileFieldInputElement.stopUpload && FileFieldInputElement.stopUpload())
};
FileFieldInputElement.prototype.removeUpload = function () {
	this.ffDiv.innerHTML = this.backupOfDiv
};
FileFieldInputElement.prototype.createHiddenInput = function (a, b) {
	var c = document.createElement("input");
	c.setAttribute("type", "hidden");
	c.setAttribute("name", a);
	c.setAttribute("value", b);
	return c
};
FileFieldInputElement.prototype.restoreFormTarget = function () {
	var a = this.ffDiv.getElementsByTagName("input")[0].form;
	a.targetBak ? a.target = a.targetBak : a.removeAttribute("target")
};
FileFieldInputElement.prototype.upload = function (a) {
	var b = a.form.elements[this.elementId + ":file"];
	if (!b.value || b.files && 1 == b.files.length && 0 == b.files[0].fileSize)
		return alert(LC.getLabel("FileFieldType", "InvalidFile")), !1;
	this.isCancelled = !1;
	this.isTimeout = !0;
	FileFieldInputElement.startUpload && FileFieldInputElement.startUpload(a);
	a.form.targetBak = a.form.target;
	a.form.target = this.elementId + "_upload_iframe";
	this.ffDiv.style.display = "none";
	this.ffUploadingDiv.style.display = "block";
	return !0
};
FileFieldInputElement.prototype.timeout = function () {
	this.isTimeout && (document.getElementById(this.elementId + "_timeout").style.display = "block", this.cancelUpload(null))
};
FileFieldInputElement.prototype.cancelUpload = function (a) {
	this.isCancelled = !0;
	this.restoreFormTarget();
	this.ffDiv.style.display = "block";
	this.ffUploadingDiv.style.display = "none";
	FileFieldInputElement.stopUpload && FileFieldInputElement.stopUpload()
};
ForeignKeyInputElement = function (a, c, b, d, e) {
	this.id = a;
	this.validationServletURI = c;
	this.mruServletURI = b;
	this.requestParams = e;
	this.element = getElementByIdCS(this.id);
	this.idElement = getElementByIdCS(this.id + EditElement.pID_SUFFIX);
	this.matchBlanks = d;
	this.onChangeListeners = [];
	ForeignKeyInputElement.allElements[a] = this
};
ForeignKeyInputElement.allElements = {};
ForeignKeyInputElement.reload = function () {
	var a = [],
	c;
	for (c in ForeignKeyInputElement.allElements) {
		var b = ForeignKeyInputElement.allElements[c],
		d = getElementByIdCS(b.id);
		d ? (b.element = d, b.idElement = getElementByIdCS(b.id + EditElement.pID_SUFFIX)) : (b.element = null, b.idElement = null, a.push(c))
	}
	for (c = 0; c < a.length; c++)
		delete ForeignKeyInputElement.allElements[a[c]]
};
ForeignKeyInputElement.dispatchLookupChange = function (a) {
	if (a = ForeignKeyInputElement.allElements[a])
		a.applyValidationChanges({}), a.validateDependents(), ForeignKeyInputElement.showHideLookup(a, !0), a.clearButton && (a.clearButton.style.display = "inline-block")
};
ForeignKeyInputElement.showHideLookup = function (a, c) {
	a.ghostTextInput && (c ? (a.element.style.display = "", a.ghostTextInput.style.display = "none") : (a.element.style.display = "none", a.ghostTextInput.style.display = ""))
};
ForeignKeyInputElement.disableAndAddClearButton = function (a) {
	if (a && !a.isDisabled) {
		a.element.readOnly = !0;
		addStyleClass(a.element, "readonly");
		var c = document.createElement("INPUT");
		c.className = "emptyDependentLookup readonly";
		c.style.display = "none";
		c.readOnly = !0;
		c.value = LC.getLabel("Global", "click_lookup_icon");
		c.tabIndex = a.element.tabIndex;
		a.element.parentNode.insertBefore(c, a.element.nextSibling);
		a.ghostTextInput = c;
		var b = document.createElement("IMG");
		b.className = "closeIcon";
		b.alt = LC.getLabel("Global",
				"clear");
		b.src = "/s.gif";
		addEvent(b, "mouseover", function () {
			this.className = "closeIconOn"
		}, !0);
		addEvent(b, "mouseout", function () {
			this.className = "closeIcon"
		}, !0);
		addEvent(b, "focus", function () {
			this.className = "closeIconOn"
		}, !0);
		addEvent(b, "blur", function () {
			this.className = "closeIcon"
		}, !0);
		a.element.parentNode.insertBefore(b, a.element.nextSibling);
		a.clearButton = b;
		if ("" == a.idElement.value || "" == a.element.value)
			b.style.display = "none", ForeignKeyInputElement.showHideLookup(a, !1);
		addEvent(b, "click", function () {
			b.style.display =
				"none";
			a.element.value = "";
			a.idElement.value = "";
			ForeignKeyInputElement.showHideLookup(a, !1);
			a.validateDependents()
		}, !0);
		a.isDisabled = !0;
		a.element.blur();
		a.blurred = !0
	}
};
ForeignKeyInputElement.prototype.validate = function () {
	this.element.value && this.performValidation();
	this.lookupAutoCompleteElement && this.lookupAutoCompleteElement.clearCache && this.lookupAutoCompleteElement.clearCache()
};
ForeignKeyInputElement.prototype.validateDependents = function () {
	for (var a = 0; a < this.onChangeListeners.length; a++)
		this.onChangeListeners[a].validate()
};
ForeignKeyInputElement.prototype.afterLoad = function () {
	var a = !1;
	if (this.referredDomIds)
		for (var c = this, b = 0; b < this.referredDomIds.length; b++) {
			var d = ForeignKeyInputElement.allElements[this.referredDomIds[b]];
			d ? (d.onChangeListeners.push(this), ForeignKeyInputElement.disableAndAddClearButton(d), a = a || d.blurred) : (d = getElementByIdCS(this.referredDomIds[b])) && addEvent(d, "change", function () {
				c.validate()
			})
		}
	this.initAutoComplete();
	a && setFocus()
};
ForeignKeyInputElement.prototype.initAutoComplete = function () {
	this.mruServletURI && (this.lookupAutoCompleteElement = this.createAutoCompleteInputElement(this.id, this.mruServletURI, 1, this.requestParams, this.matchBlanks, this.referredDomIds ? this.id : null))
};
ForeignKeyInputElement.prototype.createAutoCompleteInputElement = function (a, c, b, d, e, f, g) {
	return new LookupAutoCompleteInputElement(a, c, b, d, e, f, g)
};
ForeignKeyInputElement.prototype.validateAfterLoadIfNecessary = function () {
	var a = getElementByIdCS(this.id + EditElement.pMOD_SUFFIX);
	a && "1" == a.value && this.validateDependents()
};
ForeignKeyInputElement.prototype.performValidation = function () {
	var a = new QueryString;
	if (this.requestParams)
		for (var c in this.requestParams)
			a.add(c, this.requestParams[c]);
	a.add(LookupUi.pSEARCH_VALUE, this.element.value);
	a.add(LookupValidationServlet.pLKID_NAME, this.idElement.value);
	sfdcPage.getReferredDomIds && (c = sfdcPage.getReferredDomIds(this.id)) && a.add(LookupValidationServlet.pDEPDATA_NAME, dpdLkUtil.serialize(c, this.id));
	a.add(EditElement.pBASE_NAME, this.id);
	var b = this;
	Sfdc.Ajax.get(this.validationServletURI +
		a.toString(), function (a) {
		a && (a = Util.evalAjaxServletOutput(a)) && a[LookupValidationServlet.pFILTER_RESULTS] && b.applyValidationChanges(a[LookupValidationServlet.pFILTER_RESULTS])
	});
	return !0
};
ForeignKeyInputElement.ARIA_ERROR_SUFFIX = "_pcm";
ForeignKeyInputElement.prototype.applyValidationChanges = function (a) {
	var c = this.element.parentNode,
	b = c.nextSibling;
	b && "errorMsg" != b.className && (b = null);
	if (a.error) {
		if (!b) {
			var d = this.element.getAttribute("aria-labelledby"),
			b = document.createElement("div");
			d && (b.id = this.id + ForeignKeyInputElement.ARIA_ERROR_SUFFIX, this.element.setAttribute("aria-labelledby", d + " " + b.id));
			b.className = "errorMsg";
			c.parentNode.appendChild(b)
		}
		b.innerHTML = a.error
	} else
		b && (delStyleClass(this.element, "error"), (d = this.element.getAttribute("aria-labelledby")) &&
			this.element.setAttribute("aria-labelledby", d.replace(" " + this.id + ForeignKeyInputElement.ARIA_ERROR_SUFFIX, "")), c.parentNode.removeChild(b))
};
ForeignKeyInputElementSelectProxy = function (a) {
	ForeignKeyInputElement.call(this, a)
};
Util.extend(ForeignKeyInputElementSelectProxy, ForeignKeyInputElement);
ForeignKeyInputElementSelectProxy.prototype.performValidation = function () {};
ForeignKeyInputElementSelectProxy.prototype.validateAfterLoadIfNecessary = function () {};
ForeignKeyInputElementSelectProxy.prototype.showHideLookup = function () {};
ForeignKeyInputElementSelectProxy.prototype.disableAndAddClearButton = function () {};
HtmlDetailElement = {
	populateIframeFromDiv : function (a, c) {
		var b = document.getElementById(a);
		if (null !== b && (b = b.contentWindow.document, null !== b)) {
			var d = document.getElementById(c);
			null !== d && (b.body.innerHTML = d.innerHTML)
		}
	},
	adjustSfdcSpaceSize : function (a) {
		a = document.getElementById(a + "_frame");
		HtmlDetailElement.adjustFrameSize(a)
	},
	registerRta : function (a) {
		if ("function" == typeof window.twistSection) {
			if (!HtmlDetailElement.rtaIds) {
				HtmlDetailElement.rtaIds = [];
				var c = window.twistSection;
				window.twistSection = function (a,
					d) {
					return c(a, d) ? (HtmlDetailElement.adjustSfdcAllFrames(), !0) : !1
				}
			}
			HtmlDetailElement.rtaIds.push(a)
		}
	},
	adjustSfdcAllFrames : function () {
		for (var a = 0; a < HtmlDetailElement.rtaIds.length; a++)
			HtmlDetailElement.adjustSfdcSpaceSize(HtmlDetailElement.rtaIds[a])
	},
	adjustFrameSize : function (a) {
		if (a) {
			var c;
			c = a.Document ? a.Document.body : a.contentWindow.document.documentElement;
			if (!document.getElementById("knowledgeTOCRenderer")) {
				var b = 600,
				d = c.scrollWidth + 20;
				d > b && (b = d);
				a.width = b
			}
			var b = c.getElementsByTagName("body")[0],
			e = d = 0;
			ua = navigator.userAgent.toLowerCase();
			if (/msie 8/.test(ua))
				e = 40;
			else if (/msie/.test(ua) || /gecko/.test(ua) && /rv:1/.test(ua))
				e = 20;
			b ? (b.scrollHeight != b.clientHeight && (d = b.scrollHeight - b.clientHeight), c = b.clientHeight + d + HtmlDetailElement.adjustFrameSizeForListOnly(b) + e, b.firstChild && b.firstChild.offsetTop && (c += b.firstChild.offsetTop), a.height = c) : (c.scrollHeight != c.clientHeight && (d = c.scrollHeight - c.clientHeight), a.height = c.scrollHeight + d + HtmlDetailElement.adjustFrameSizeForListOnly(c) + e)
		}
	},
	adjustFrameSizeForListOnly : function (a) {
		return a &&
		(a.childNodes && 1 == a.childNodes.length && "ul" == a.firstChild.nodeName.toLowerCase()) && (a = a.firstChild, a.childNodes && 1 <= a.childNodes.length) ? a.getElementsByTagName("li")[0].clientHeight : 0
	}
};
function ImageSelectElement(b, d, e) {
	var a = this;
	this.inputElement = document.getElementById(b);
	this.image = document.getElementById(d);
	this.partialImageURL = e;
	this.inputElement.imageSelectElement = this;
	this.inputElement.onchange = function () {
		var b = QueryString.getURI(a.partialImageURL),
		c = QueryString.createQueryString(a.partialImageURL, !1);
		c.replace("id", a.inputElement.value);
		a.image.src = c.concatenateWithUrl(b, !1)
	}
}
ImageSelectElement.prototype.isNull = function () {
	return !(this.inputElement && this.inputElement.value && 0 < this.inputElement.value.length)
};
function ListElement(a) {
	this.formName = a
}
ListElement.prototype.cbWarn = function () {
	var a = document.getElementById(this.formName);
	for (i = 0; i < a.elements.length; i++)
		if (a.elements[i].name == ListView.CHECKBOX_ID && a.elements[i].checked)
			if (window.confirm(LC.getLabel("List", "checkboxWarning"))) {
				for (j = i; j < a.elements.length; j++)
					a.elements[j].name == ListView.CHECKBOX_ID && (a.elements[j].checked = !1);
				break
			} else
				return !1;
	return !0
};
ListElement.getList = function (a) {
	return instances[a]
};
ListElement.instances = {};
ListElement.createListElement = function (a) {
	ListElement.instances[a] = new ListElement(a)
};
function LookupElement() {
	var c = this;
	this.lookupPick = function (b, a, d, e, f, g, h, k) {
		setTimeout(function () {
			c.closeLookup()
		}, 1);
		lookupPick(b, a, d, e, f, g, h, k)
	};
	this.lookupPick2 = function (b, a, d, e, f, g, h, k, l, m) {
		setTimeout(function () {
			c.closeLookup()
		}, 1);
		lookupPick2(b, a, d, e, f, g, h, k, l, m)
	};
	this.lookupPhonePick = function (b, a) {
		setTimeout(function () {
			c.closeLookup()
		}, 1);
		lookupPhonePick(b, a)
	}
}
LookupElement.prototype.openLookup = function (c, b, a, d) {
	"1" == a && (c += d);
	this.initOverlay(c).show()
};
LookupElement.prototype.closeLookup = function () {
	this.getOverlay().hide();
	this.redirectIframe(IFrameElement.BLANK_SRC)
};
LookupElement.prototype.getOverlay = function () {
	return sfdcPage.getDialogById(LookupInputElement.DIALOG_ID)
};
LookupElement.prototype.redirectIframe = function (c) {
	this.getOverlay().getContentElement().firstChild.src = c
};
LookupElement.prototype.initOverlay = function (c) {
	var b = this.getOverlay();
	if (b)
		this.redirectIframe(c);
	else {
		var a = [];
		a.push("\x3ciframe ");
		a.push('src\x3d"');
		a.push(c);
		a.push('" class\x3d"pageMaskIFrame" scrolling\x3d"no" ');
		a.push('id\x3d"');
		a.push(LookupInputElement.LOOKUP_IFRAME);
		a.push('" name\x3d"');
		a.push(LookupInputElement.LOOKUP_IFRAME);
		a.push('"\x3e\x3c/iframe\x3e');
		a = a.join("");
		b = new FunctionalDialog(LookupInputElement.DIALOG_ID, !0, LC.getLabel("Lookup", "Title"));
		b.setWidth(900);
		b.setMaxHeight(700);
		b.hideSummaryElement();
		b.clearButtons();
		sfdcPage.registerDialog(b);
		b.setContentInnerHTML(a)
	}
	return b
};
function ManageableInfoElement(a) {
	if (a && (a = document.getElementById(a))) {
		var c = Sfdc.select("DIV." + ManageableInfo.MORE_INFO_CLASS, a);
		if (c && !(1 > c.length)) {
			var d = c[0],
			b = this;
			this.isHidden = !0;
			this.onLinkClickHandler = function () {
				b.isHidden ? (d.style.display = "block", b.link.innerHTML = LC.getLabel("ManageableInfo", "LessInfo"), b.isHidden = !1) : (d.style.display = "none", b.link.innerHTML = LC.getLabel("ManageableInfo", "MoreInfo"), b.isHidden = !0);
				window.VFEditor && window.VFEditor.refreshTroughPosition()
			};
			if ((a = a.getElementsByTagName("a")) &&
				0 < a.length)
				this.link = a[0], addEvent(this.link, "click", this.onLinkClickHandler, !1)
		}
	}
};

/* Search...菜单点击 */
function MenuButton(a, b) {
	this.id = a;
	this.hasDefaultAction = b;
	if (this.id)
		if (this.hook_isAccessibleMode())
			this.initAccessibilityMode(this.id);
		else {
			this.parentDiv = document.getElementById(a);
			this.buttonDiv = document.getElementById(a + MenuButtonElement.BUTTON);
			this.buttonLabel = document.getElementById(a + MenuButtonElement.LABEL);
			this.menuDiv = document.getElementById(a + MenuButtonElement.MENU);
			this.buttonWidth = MenuButton.DEFAULT_ARROW;
			this.shim = new iframeShim(this.menuDiv);
			var c = this;
			addEvent(document, "click", function (a) {
				c.hideOthers(a)
			}, !1);
			addEvent(document, "keydown", function (a) {
				c.handleKeyPress(a)
			}, !1);
			addEvent(this.parentDiv, "click", function (a) {
				c.handleDivClick(a)
			}, !1);
			addEvent(this.parentDiv, "mouseover", function (a) {
				addStyleClass(c.parentDiv, "menuButtonOver")
			});
			addEvent(this.parentDiv, "mouseout", function (a) {
				delStyleClass(c.parentDiv, "menuButtonOver")
			});
			addEvent(this.buttonLabel, "mousedown", function (a) {
				c.removeDottedLinkOutline(a)
			}, !1);
			addEvent(this.buttonLabel, "mouseout", function (a) {
				c.removeDottedLinkOutline(a)
			}, !1);
			addEvent(this.buttonLabel, "keydown", function (a) {
				a.keyCode == KEY_ENTER && c.handleDivClick(a)
			}, !1);
			addEvent(this.menuDiv, "click", function (a) {
				return c.handleMenuClick(a)
			}, !1)
		}
}

MenuButton.DEFAULT_ARROW = 17;
MenuButton.prototype.handleDivClick = function (a) {
	if (this.hasDefaultAction) {
		var b = getEventTarget(a),
		b = b.parentNode,
		b = getMouseX(a) - getObjX(b);
		if (this.defaultActionCondition(b, a)) {
			this.defaultAction();
			return
		}
	}
	"none" == Sfdc.Dom.getStyle(this.menuDiv, "display") ? this.show() : this.hide()
};
MenuButton.prototype.handleDivKeyDown = function (a) {
	a.keyCode == KEY_ENTER && this.handleDivClick(a)
};
MenuButton.prototype.handleMenuClick = function (a) {
	this.hide();
	hasStyleClass(this.parentDiv, "menuButtonActivated") && delStyleClass(this.parentDiv, "menuButtonActivated");
	eventCancelBubble(a)
};
MenuButton.prototype.defaultActionCondition = function (a, b) {
	return LC.isRtlPage() ? a > this.buttonWidth && a < this.buttonDiv.offsetWidth : a < this.buttonDiv.offsetWidth - this.buttonWidth
};
MenuButton.prototype.hook_isAccessibleMode = function () {
	return UserContext.isAccessibleMode
};
MenuButton.prototype.defaultAction = function () {
	var a = this.menuDiv.childNodes[0];
	this.hide();
	if (a.target) {
		var b = document.getElementsByName(a.target);
		b && b[0].src && (b[0].src = a.href)
	} else
		navigateToUrl(a.href)
};
MenuButton.prototype.show = function () {
	addStyleClass(this.parentDiv, "menuButtonActivated");
	this.shim.setStyle("display", "block");
	this.position();
	this.show_hook()
};
MenuButton.prototype.show_hook = function () {};
MenuButton.prototype.getMenuWidth = function () {
	return this.buttonDiv.offsetWidth - 2
};
MenuButton.prototype.position = function () {
	this.menuDiv.style.width = "";
	for (var a = this.getMenuWidth(), b = 0; b < this.menuDiv.childNodes.length; b++) {
		var c = this.menuDiv.childNodes[b];
		c.nodeType == Node.ELEMENT_NODE && c.offsetWidth > a && (a = c.offsetWidth)
	}
	this.shim.setStyle("width", a + "px");
	a = Sfdc.Dom.getStyle(this.parentDiv, "display");
	if ("inline" == a || "inline-block" == a)
		this.parentDiv.style.position = "relative", this.shim.setStyle("top", this.buttonDiv.offsetHeight + "px")
};
MenuButton.prototype.hide = function (a) {
	delStyleClass(this.parentDiv, "menuButtonActivated");
	"none" != Sfdc.Dom.getStyle(this.menuDiv, "display") && (this.shim.setStyle("display", "none"), this.parentDiv.style.position = "", a || this.hide_hook())
};
MenuButton.prototype.hide_hook = function () {};
MenuButton.prototype.hideOthers = function (a) {
	a = getEventTarget(a);
	a != this.buttonDiv && (a != this.buttonLabel && a != this.parentDiv && a.parentNode != this.buttonDiv && !hasStyleClass(a, "menuButtonMenuLink")) && (this.hide(!0), hasStyleClass(this.parentDiv, "menuButtonActivated") && delStyleClass(this.parentDiv, "menuButtonActivated"))
};
MenuButton.prototype.handleKeyPress = function (a) {
	a.keyCode == KEY_ESC && this.hide()
};
MenuButton.prototype.addOption = function (a, b, c, e) {
	if (!this.hook_isAccessibleMode()) {
		var d = document.createElement("a");
		c && (d.className = c);
		e && (d.target = e);
		d.href = b;
		d.innerHTML = a;
		this.menuDiv.appendChild(d)
	}
};
MenuButton.prototype.addOptionAsMediaBlock = function (a, b, c) {
	if (!this.hook_isAccessibleMode()) {
		var e = document.createElement("li"),
		d = e;
		c && (d = document.createElement("a"), d.href = c, Sfdc.Dom.addClass(d, ["zen-gotoRecord"]), e.appendChild(d));
		var f = document.createElement("div");
		Sfdc.Dom.addClass(f, "zen-media");
		d.appendChild(f);
		a && (f.innerHTML = a, Sfdc.Dom.addClass(f.firstChild, ["zen-img", "zen-mhs", "zen-mvn", "mruIcon"]));
		d = document.createElement("div");
		f.appendChild(d);
		Sfdc.Dom.addClass(d, "zen-mediaBody");
		!a &&
		!c && Sfdc.Dom.addClass(d, "zen-pas");
		d.innerHTML = b;
		this.menuDiv.appendChild(e);
		return e
	}
};
MenuButton.prototype.addOptionsAsMediaBlock = function (a) {
	if (!this.hook_isAccessibleMode())
		for (var b = 0; b < a.length; b++) {
			var c = this.addOptionAsMediaBlock(a[b].img, a[b].name, a[b].href);
			0 === b && Sfdc.Dom.addClass(c, "zen-firstItem");
			b === a.length - 1 && Sfdc.Dom.addClass(c, "zen-lastItem")
		}
};
MenuButton.prototype.initAccessibilityMode = function (a) {
	var b = document.getElementById(a + MenuButtonElement.GO_BUTTON);
	addEvent(b, "click", function () {
		var b = document.getElementById(a + MenuButtonElement.SELECT),
		b = b.options[b.selectedIndex].value;
		"" != b && navigateToUrl(b)
	}, !1)
};
MenuButton.prototype.removeDottedLinkOutline = function (a) {
	getEventTarget(a) == this.buttonLabel && ("mousedown" == a.type ? (this.buttonLabel.blur(), isIE ? this.buttonLabel.hideFocus = !0 : this.buttonLabel.style.outline = "none") : "mouseout" == a.type && (this.buttonLabel.blur(), isIE ? this.buttonLabel.hideFocus = !1 : this.buttonLabel.style.outline = null))
};
var MultiSelectPicklist = {
	setState : function (a, c) {
		for (var b = 0, f = a.options.length; b < f; b++) {
			var e = a.options[b];
			e.selected = !1;
			for (var d = 0; d < c.length; d++)
				e.value === c[d][1] && (e.selected = !0)
		}
		this.handleMSPChange(a)
	},
	loadMSP : function (a) {
		var c = getElementByIdCS(a + "_selected");
		a = getElementByIdCS(a + "_unselected");
		MultiSelectPicklist.resizeMSP(c, a);
		MultiSelectPicklist.showSelectOptionsHint(c, a)
	},
	resizeMSP : function (a, c) {
		if (a && c) {
			a.style.width = "auto";
			c.style.width = "auto";
			var b = Math.max(a.offsetWidth, c.offsetWidth) +
				35;
			35 != b && (a.style.width = b + "px", c.style.width = b + "px")
		}
	},
	handleMSPChange : function (a) {
		var c = getElementByIdCS(a.id + "_selected"),
		b = getElementByIdCS(a.id + "_unselected");
		if (Sfdc.userAgent.isIE9) {
			this.clearOptions(c);
			this.clearOptions(b);
			for (var f = c.getElementsByTagName("optgroup"), e = b.getElementsByTagName("optgroup"), d = 0, h = a.options.length, g; d < h; d++)
				a.options[d].value != picklistNAMarker && (g = new Option(a.options[d].text, d), a.options[d].selected ? f.length ? f[0].appendChild(g) : c.options.push(g) : e.length ? e[0].appendChild(g) :
					b.options.push(g))
		} else {
			e = f = 0;
			c.length = 0;
			for (d = b.length = 0; d < a.options.length; d++)
				a.options[d].value != picklistNAMarker && (a.options[d].selected ? (c.options[f] = new Option(a.options[d].text, d), f++) : (b.options[e] = new Option(a.options[d].text, d), e++))
		}
		MultiSelectPicklist.resizeMSP(c, b);
		MultiSelectPicklist.showSelectOptionsHint(c, b);
		if (a.onchange)
			a.onchange()
	},
	clearOptions : function (a) {
		if (Sfdc.userAgent.isIE9) {
			var c = a.getElementsByTagName("optgroup");
			if (c && c.length)
				for (var b = 0, f = c.length, e, d; b < f; b++) {
					e = c[b];
					d = e.getElementsByTagName("option");
					0 === d.length && e.appendChild(new Option("", 0));
					for (e = d.length - 1; 0 <= e; e--)
						d[e].removeNode()
				}
			else
				a.length = 0
		} else
			a.length = 0;
		MultiSelectPicklist.showSelectOptionsHint(a)
	},
	handleMSPSelect : function (a) {
		var c = getElementByIdCS(a);
		a = getElementByIdCS(a + "_unselected");
		for (var b = 0; b < a.options.length; b++)
			a.options[b].selected && (c.options[parseInt(a.options[b].value)].selected = !0);
		MultiSelectPicklist.handleMSPChange(c)
	},
	handleMSPUnSelect : function (a) {
		var c = getElementByIdCS(a);
		a = getElementByIdCS(a + "_selected");
		for (var b = 0; b < a.options.length; b++)
			a.options[b].selected && (c.options[parseInt(a.options[b].value)].selected = !1);
		MultiSelectPicklist.handleMSPChange(c)
	},
	showSelectOptionsHint : function (a, c) {
		if (Sfdc.userAgent.isSafariIOS) {
			if (a) {
				var b = document.getElementById(a.id + "_hint");
				b || (a.style.color = "transparent", b = document.createElement("div"), b.id = a.id + "_hint", a.parentNode.parentNode.appendChild(b));
				var f = LC.getLabel("MultiSelectElement", "Chosen");
				b.innerHTML = LC.getLabel("Global",
						"colonSeparatedWords", f, a.length)
			}
			c && (b = document.getElementById(c.id + "_hint"), b || (c.style.color = "transparent", b = document.createElement("div"), b.id = c.id + "_hint", c.parentNode.parentNode.appendChild(b)), f = LC.getLabel("MultiSelectElement", "Available"), b.innerHTML = LC.getLabel("Global", "colonSeparatedWords", f, c.length))
		}
	}
};
function OverlayDialog() {
	this.dialog = this.id = null;
	this.isModal = !0;
	this.extraClass = "";
	this.background = null;
	this.width = OverlayDialog.MAX_WIDTH;
	this.minHeight = OverlayDialog.MIN_HEIGHT;
	this.minWidth = OverlayDialog.MIN_WIDTH;
	this.buttons = [];
	this.info = this.header = this.title = null;
	this.created = this.isOpen = !1;
	this.allowKeyboardEsc = this.displayX = !0;
	this.resizing = this.moving = this.positioned = this.isAbsolutePositioned = this.isMovable = this.isResizable = !1;
	this.changeY = this.changeX = this.relativeY = this.relativeX = this.fixedY =
		this.fixedX = 0;
	this.wrappingPointId = this.focusPointId = null;
	this.focusOnShow = !0;
	this.useCSS = !1;
	this.htmlOverflow = "";
	this.refreshOnClose = !1
}
OverlayDialog.MAX_BUTTONS = 4;
OverlayDialog.MAX_WIDTH = 800;
OverlayDialog.MIN_WIDTH = 300;
OverlayDialog.MIN_HEIGHT = 200;
OverlayDialog.EDGE_BUFFER = 40;
OverlayDialog.LOAD_MARK = "OverlayLoadStart";
OverlayDialog.LOAD_MEASURE = "overlayLoadDone";
OverlayDialog.HIDDEN_STYLE = "width:2px;height:2px;position:absolute;border:0;margin:0;padding:0;background:none;outline:none;z-index:-1;cursor:none;";
OverlayDialog.prototype.addEvents = function () {
	if (this.id) {
		var a = this;
		this.allowKeyboardEsc && addEvent(document, "keydown", function (c) {
			a.handleKeyPress(c)
		}, !1);
		this.useCSS || (addEvent(window, "resize", function () {
				a.resizeEvent()
			}, !1), Sfdc.userAgent.isIE6 && addEvent(window, "scroll", function () {
				a.scrollEvent()
			}, !1))
	}
};
OverlayDialog.prototype.setTitle = function (a) {
	this.title = a;
	this.created && (document.getElementById(this.id + "Title").innerHTML = this.title)
};
OverlayDialog.prototype.setHeader = function (a) {
	this.header = a;
	this.created && (document.getElementById(this.id + "Header").innerHTML = this.header)
};
OverlayDialog.prototype.setInfo = function (a) {
	this.info = a;
	this.created && (document.getElementById(this.id + "Info").innerHTML = this.info)
};
OverlayDialog.prototype.setWidth = function (a) {
	this.width = a;
	this.dialog && (Sfdc.isDefAndNotNull(a) && (this.dialog.style.width = "string" == typeof a ? a : a + "px"), this.isOpen && this.position())
};
OverlayDialog.prototype.setMinHeight = function (a) {
	this.minHeight = a
};
OverlayDialog.prototype.setMinWidth = function (a) {
	this.minWidth = a
};
OverlayDialog.prototype.overrideButton = function (a, c, b) {
	if (a >= OverlayDialog.MAX_BUTTONS)
		throw "Cannot have more than " + OverlayDialog.MAX_BUTTONS + " buttons.";
	this.buttons[a] = {
		display : c,
		action : b
	}
};
OverlayDialog.prototype.setupDefaultButtons = function () {
	this.buttons = [];
	this.buttons[0] = {
		display : LC.getLabel("Buttons", "ok"),
		action : null
	};
	this.buttons[1] = {
		display : LC.getLabel("Buttons", "cancel"),
		action : null
	}
};
OverlayDialog.prototype.clearButtons = function () {
	this.buttons = []
};
OverlayDialog.prototype.show = function () {
	if (this.useCSS) {
		var a;
		a = Sfdc.userAgent.isFirefox ? document.body.style : document.documentElement.style;
		this.htmlOverflow = a.overflow;
		a.overflow = "hidden"
	}
	this.dialog && (this.dialog.style.display = "block", this.position(), this.isModal && (this.background || this.createBackground(), this.resizeBackground(), this.background.style.display = "block", this.processSelectElems()), this.dialog.style.visibility = "visible", this.isOpen = !0, Sfdc.Function.delay(this.setPrimaryFocus, 1, this, [this]),
		Jiffy.measure(OverlayDialog.LOAD_MEASURE, OverlayDialog.LOAD_MARK))
};
OverlayDialog.prototype.setPrimaryFocus = function (a, c) {
	a || (a = this);
	if (!0 === c) {
		if (null !== a.wrappingPointId) {
			var b = document.getElementById(a.wrappingPointId);
			if (null !== b && !0 !== b.disabled)
				try {
					b.focus()
				} catch (d) {}

			else
				Sfdc.error(a.wrappingPointId + " could not be focused")
		}
	} else if (!0 === a.focusOnShow) {
		b = null;
		null !== a.focusPointId && (b = document.getElementById(a.focusPointId));
		if (null === b || b.disabled || "none" === b.style.display || "hidden" === b.style.display.visibility) {
			var e = a.dialog.getElementsByTagName("*"),
			f = null,
			h = null;
			for (i = 0; i < e.length; i++)
				if (!e[i].disabled && !("none" === e[i].style.display || "hidden" === e[i].style.visibility)) {
					var g = e[i].tagName;
					if ("INPUT" === g || "TEXTAREA" === g || "SELECT" === g) {
						h = i;
						break
					}
					null === f && "A" === g && (f = i)
				}
			null !== h ? b = e[h] : null !== f && (b = e[f])
		}
		if (null !== b && !0 !== b.disabled) {
			try {
				b.focus()
			} catch (k) {}

			("text" == b.type || "textarea" == b.type) && b.select()
		} else
			Sfdc.error(a.focusPointId + " could not be focused")
	}
};
OverlayDialog.prototype.processSelectElems = function (a) {
	if (Sfdc.userAgent.isIE6) {
		for (var c = document.getElementsByTagName("select"), b = c.length, d = 0; d < b; d++)
			c[d].style.visibility = a ? "visible" : "hidden";
		if (!a) {
			a = this.dialog.getElementsByTagName("select");
			c = a.length;
			for (d = 0; d < c; d++)
				a[d].style.visibility = "visible"
		}
	}
};
OverlayDialog.prototype.hide = function () {
	this.isMovable && this.stopDrag();
	this.isModal && (this.background.style.display = "none", this.processSelectElems(!0));
	this.dialog.style.visibility = "hidden";
	Sfdc.userAgent.isFirefox || (this.dialog.style.display = "none");
	this.useCSS && (Sfdc.userAgent.isFirefox ? document.body.style.overflow = this.htmlOverflow : document.documentElement.style.overflow = this.htmlOverflow);
	this.isOpen = !1;
	this.refreshOnClose && (Sfdc.userAgent.isChromeFrame ? window.location = window.location : window.location.reload(!0))
};
OverlayDialog.prototype.cancel = function () {
	this.hide()
};
OverlayDialog.prototype.handleKeyPress = function (a) {
	if (this.isOpen) {
		a = getEvent(a);
		var c = a.keyCode;
		c == KEY_ESC && this.allowKeyboardEsc ? this.handleCancel() : c == KEY_ENTER && this.captureEnter(getEventTarget(a)) && this.enter()
	}
};
OverlayDialog.prototype.captureEnter = function (a) {
	return "A" != a.nodeName && "TEXTAREA" != a.nodeName && "button" != a.type
};
OverlayDialog.prototype.enter = function () {};
OverlayDialog.prototype.handleCancel = function () {
	this.cancel()
};
OverlayDialog.prototype.position = function () {
	if (this.dialog) {
		var a = this.dialog.style;
		if (this.useCSS)
			a.marginTop = -0.25 * this.dialog.offsetHeight + "px", LC && LC.isRtlPage() ? a.marginRight = -0.5 * this.dialog.offsetWidth + "px" : a.marginLeft = -0.5 * this.dialog.offsetWidth + "px";
		else if (this.resizing) {
			var c = this.startWidth + this.changeX,
			b = this.startHeight + this.changeY;
			c < this.minWidth && (c = this.minWidth);
			b < this.minHeight && (b = this.minHeight);
			a.width = c + "px";
			a.height = b + "px";
			document.getElementById(this.getContentId()).style.height =
				b - 46 + "px"
		} else {
			if (c = document.getElementById(this.getContentId()))
				c.style.height = "", c.style.overflowY = "", c.style.position = "", this.dialog.offsetHeight > getWindowHeight() && (c.style.height = getWindowHeight() - 100 + "px", c.style.overflowY = "auto", c.style.position = "relative");
			if (this.positioned) {
				var c = Sfdc.Window.getWindowWidth() - OverlayDialog.EDGE_BUFFER,
				b = Sfdc.Window.getWindowHeight() - OverlayDialog.EDGE_BUFFER,
				d = OverlayDialog.EDGE_BUFFER - this.dialog.offsetWidth,
				e = -OverlayDialog.EDGE_BUFFER / 2;
				this.fixedX < d ?
				this.fixedX = d : this.fixedX > c && (this.fixedX = c);
				this.fixedY < e ? this.fixedY = e : this.fixedY > b && (this.fixedY = b)
			} else
				this.setInnerHeight(), c = Sfdc.Window.getWindowWidth() - this.dialog.offsetWidth, c = 6 > c ? 6 : c / 2, b = Sfdc.Window.getWindowHeight() - this.dialog.offsetHeight, this.fixedX = c, this.fixedY = 6 > b ? 6 : b / 2;
			Sfdc.userAgent.isIE6 ? (a.left = this.fixedX + getScrollX() + "px", a.top = this.fixedY + getScrollY() + "px") : (a.left = this.fixedX + "px", a.top = this.fixedY + "px")
		}
	}
};
OverlayDialog.prototype.setInnerHeight = function () {};
OverlayDialog.prototype.createBackground = function () {
	this.background = document.createElement("div");
	this.background.className = "overlayBackground";
	this.useCSS && (Sfdc.userAgent.isSafariIOS ? (this.background.style.width = document.body.scrollWidth + "px", this.background.style.height = document.body.scrollHeight + "px") : (this.background.style.width = "10000px", this.background.style.height = "20000px"));
	document.body.appendChild(this.background);
	var a = this;
	addEvent(this.background, "mousedown", function (c) {
		a.smash(c)
	},
		!1);
	addEvent(this.background, "click", function (c) {
		a.smash(c)
	}, !1)
};
OverlayDialog.prototype.resizeBackground = function () {
	if (this.background && !this.useCSS && this.created) {
		var a = this.background.style;
		this.dialog.currentStyle && Sfdc.userAgent.isIE6 ? (a.width = document.body.offsetWidth + "px", a.height = document.body.offsetHeight + "px") : (a.width = Math.max(document.documentElement.scrollWidth, Sfdc.Window.getWindowWidth()) + "px", a.height = Math.max(document.documentElement.scrollHeight, Sfdc.Window.getWindowHeight()) + "px")
	}
};
OverlayDialog.prototype.scrollEvent = function () {
	this.created && this.position()
};
OverlayDialog.prototype.resizeEvent = function () {
	this.resizeBackground();
	this.position()
};
OverlayDialog.prototype.createDialog = function () {
	this.dialog = this.createDialogElement();
	document.body.appendChild(this.dialog);
	this.setWidth(this.width);
	var a = this;
	addEvent(document.getElementById(this.blurCatchId), "focus", function () {
		a.setPrimaryFocus(a, !0)
	});
	addEvent(document.body, "keyup", function () {
		if (a && a.isOpen) {
			for (var b = document.activeElement, c = !0; b.id != a.id; ) {
				if (b === document.body) {
					c = !1;
					break
				}
				b = b.parentNode
			}
			c || a.setPrimaryFocus(a)
		}
	});
	if (!this.useCSS && (this.isMovable || this.isResizable))
		if (addEvent(document,
				"mouseup", function () {
				a.stopDrag()
			}, !1), this.isMovable && (addEvent(this.dialog.firstChild, "mousedown", function (b) {
					a.startMove(b)
				}, !1), addEvent(document, "mousemove", function (b) {
					a.move(b)
				}, !1)), this.isResizable) {
			var c = document.getElementById(this.id + "Resize");
			addEvent(c, "mousedown", function (b) {
				a.startResize(b)
			}, !1);
			addEvent(document, "mousemove", function (b) {
				a.resize(b)
			}, !1)
		}
	this.createContent();
	this.created = !0
};
OverlayDialog.prototype.createDialogElement = function () {
	this.blurCatchId = this.id + "BlurCatch";
	this.focusPointId = this.id + "FocusPoint";
	this.wrappingPointId = this.id + "X";
	var a = this.id + "Title",
	c = document.createElement("div");
	c.id = this.id;
	c.setAttribute("role", "dialog");
	c.setAttribute("aria-live", "assertive");
	c.setAttribute("aria-describedby", a);
	var b = ["overlayDialog"];
	this.isAbsolutePositioned && b.push("absolutePositionedOverlayDialog");
	this.useCSS && b.push("cssDialog");
	b.push(this.extraClass);
	c.className =
		b.join(" ");
	b = [];
	b.push("\x3cdiv class\x3d'topRight");
	this.isMovable && b.push(" movable");
	b.push("'\x3e");
	b.push("\x3ca id\x3d'" + this.focusPointId + "' ");
	b.push("href\x3d'javascript:void(0)' ");
	b.push("onclick\x3d'return false;' ");
	b.push("style\x3d'" + OverlayDialog.HIDDEN_STYLE + "' ");
	b.push("title\x3d'" + LC.getLabel("Global", "startOfDialog") + "' ");
	this.displayX && b.push("onfocus\x3d'document.getElementById(\"" + this.wrappingPointId + "\").focus()'");
	b.push("\x3e");
	b.push(LC.getLabel("Global", "startOfDialog"));
	b.push("\x3c/a\x3e");
	b.push("\x3cdiv class\x3d'topLeft'\x3e");
	this.displayX && (b.push("\x3ca id\x3d'" + this.wrappingPointId + "' title\x3d'" + LC.getLabel("Buttons", "close") + "' tabindex\x3d'0' onmouseover\x3d\"this.className \x3d 'dialogCloseOn'\" onmouseout\x3d\"this.className \x3d 'dialogClose'\" onclick\x3d\"sfdcPage.getDialogById('"), b.push(this.id), b.push("').cancel()\" href\x3d'javascript:void(0)' class\x3d'dialogClose'\x3e" + LC.getLabel("Buttons", "close") + "\x3c/a\x3e"));
	b.push("\x3ch2 id\x3d'" + a +
		"'\x3e");
	b.push(this.title);
	b.push("\x3c/h2\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'middle'\x3e\x3cdiv class\x3d'innerContent' id\x3d'");
	b.push(this.getContentId());
	b.push("'\x3e\x3c/div\x3e\x3c/div\x3e");
	this.isResizable && (b.push("\x3cdiv id\x3d'"), b.push(this.id), b.push("Resize' class\x3d'dialogResize'\x3e\x3c/div\x3e"));
	b.push('\x3cdiv class\x3d\'bottomRight\'\x3e\x3clabel style\x3d"display:none;" for \x3d"' + this.blurCatchId + "\"\x3e'\x26nbsp;'\x3c/label\x3e\x3cinput id\x3d'" + this.blurCatchId +
		"' style\x3d'" + OverlayDialog.HIDDEN_STYLE + "' type\x3d'text' /\x3e\x3cdiv class\x3d'bottomLeft'\x3e\x3c/div\x3e\x3c/div\x3e");
	c.innerHTML = b.join("");
	return c
};
OverlayDialog.prototype.createContent = function () {};
OverlayDialog.prototype.startMove = function (a) {
	a = getEvent(a);
	"IMG" != getEventTarget(a).nodeName && (this.moving = this.positioned = !0, this.relativeX = a.clientX - this.dialog.offsetLeft, this.relativeY = a.clientY - this.dialog.offsetTop, Sfdc.userAgent.isIE6 && (this.relativeX += getScrollX(), this.relativeY += getScrollY()), this.fixedX = a.clientX - this.relativeX, this.fixedY = a.clientY - this.relativeY, this.smash(a))
};
OverlayDialog.prototype.startResize = function (a) {
	a = getEvent(a);
	this.resizing = this.positioned = !0;
	this.relativeX = a.clientX;
	this.relativeY = a.clientY;
	this.startWidth = this.dialog.offsetWidth;
	this.startHeight = this.dialog.offsetHeight;
	this.smash(a)
};
OverlayDialog.prototype.stopDrag = function () {
	this.resizing = this.moving = !1
};
OverlayDialog.prototype.move = function (a) {
	this.moving && (a = getEvent(a), this.smash(a), this.fixedX = a.clientX - this.relativeX, this.fixedY = a.clientY - this.relativeY, this.position())
};
OverlayDialog.prototype.resize = function (a) {
	this.resizing && (a = getEvent(a), this.smash(a), this.changeX = a.clientX - this.relativeX, this.changeY = a.clientY - this.relativeY, this.position())
};
OverlayDialog.prototype.smash = function (a) {
	a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
	a.preventDefault ? a.preventDefault() : a.returnValue = !1
};
OverlayDialog.prototype.getContentId = function () {
	return this.id + "Content"
};
OverlayDialog.prototype.createButtons = function (a) {
	a.push("\x3cdiv id\x3d'" + this.id + "_buttons' class\x3d'buttons ");
	a.push(ZenCss.zen);
	a.push("'\x3e");
	for (var c = 0; c < this.buttons.length; c++) {
		var b = this.buttons[c].display,
		d = this.buttons[c].action,
		e = this.buttons[c].id;
		a.push("\x3cinput class\x3d'");
		a.push(ZenCss.btn);
		a.push("' type\x3d'button' value\x3d'");
		a.push(b);
		e && (a.push("' id\x3d'"), a.push(e));
		a.push("' onclick\x3d\"");
		"string" == typeof d ? (a.push("if("), a.push(d.replace(/"/, '\\"')), a.push(")")) :
		"function" == typeof d && (a.push("if("), a.push(d.name), a.push("())"));
		a.push("sfdcPage.getDialogById('");
		a.push(this.id);
		a.push("').hide();\"\x3e")
	}
	a.push("\x3c/div\x3e")
};
OverlayDialog.prototype.register = function () {
	sfdcPage.registerDialog(this)
};
function Paginator(a) {
	a && this.init(a)
}
Paginator.prototype.init = function (a) {
	a.listId ? (this.listId = a.listId, this.id = this.listId + "_paginator") : this.id = a.id;
	Paginator.addPaginator(this);
	this.containerIds = a.containerIds;
	this.handler = a.handler;
	this.ref = "Paginator.instances['" + this.id + "']";
	this.setState(a)
};
Paginator.prototype.setState = function (a) {
	this.currentPage = parseInt(a.currentPage) || this.currentPage || 1;
	this.recordsPerPage = parseInt(a.recordsPerPage) || this.recordsPerPage || 50;
	this.totalRecords = parseInt(a.totalRecords) || this.totalRecords;
	this.recordsOnThisPage = parseInt(a.recordsOnThisPage);
	this.more = a.more;
	this.totalRecords && (this.totalPages = Math.ceil(this.totalRecords / this.recordsPerPage));
	this.startingRecord = (this.currentPage - 1) * this.recordsPerPage + 1;
	if (!a.nodraw) {
		var b = this;
		window.sfdcPage.appendToOnloadQueue(function () {
			b.draw()
		})
	}
};
Paginator.prototype.draw = function () {
	var a = [];
	a.push("\x3cdiv class\x3d'paginator'\x3e");
	a.push("\x3cspan class\x3d'left'\x3e");
	a.push(this.getRecordCounts());
	a.push("\x3c/span\x3e");
	a.push(this.getPrevNextLinks());
	a.push("\x3cspan class\x3d'right'\x3e");
	a.push(this.getPageXofY());
	a.push("\x3c/span\x3e");
	a.push("\x3c/div\x3e");
	a.push("\x3cdiv class\x3d'clearingBox'/\x3e");
	for (var b = 0; b < this.containerIds.length; b++)
		document.getElementById(this.containerIds[b]).innerHTML = a.join("").replace(/__CID__/g,
				this.containerIds[b])
};
Paginator.keyHandle = function (a) {
	if (window.ActiveXObject && a.keyCode == KEY_ENTER)
		getEventTarget(a).onchange()
};
Paginator.prototype.getTempId = function (a) {
	return "__CID__" + a
};
Paginator.prototype.getPageXofY = function () {
	var a = [];
	this.totalPages ? (a.push("\x3clabel for\x3d'"), a.push(this.getTempId("_getPageXofY")), a.push("'\x3e"), a.push(LC.getLabel("Paginator", "page")), a.push("\x3c/label\x3e"), a.push("\x3cinput class\x3d'pageInput' maxlength\x3d'4' onchange\x3d\""), a.push(this.ref), a.push('.goToPage(this.value)"'), a.push(' onkeydown\x3d"'), a.push('Paginator.keyHandle(event)"'), a.push(" value\x3d'"), a.push(this.currentPage), a.push("' id\x3d'"), a.push(this.getTempId("_getPageXofY")),
		a.push("'/\x3e"), a.push(LC.getLabel("Paginator", "of", this.totalPages))) : (a.push(LC.getLabel("Paginator", "page")), a.push("\x26nbsp;"), a.push(this.currentPage));
	return a.join("")
};
Paginator.prototype.getRecordCounts = function () {
	if (!this.totalRecords && 0 == this.recordsOnThisPage)
		return "0";
	var a = [];
	a.push(this.startingRecord);
	a.push("-");
	var b = 0,
	b = this.totalRecords ? Math.min(this.startingRecord + this.recordsPerPage - 1, this.totalRecords) : Math.min(this.startingRecord + this.recordsPerPage - 1, this.startingRecord + this.recordsOnThisPage - 1);
	a.push(b);
	this.totalRecords && (a.push(" "), a.push(LC.getLabel("Paginator", "of", this.totalRecords)));
	return a.join("")
};
Paginator.prototype.getPrevNextLinks = function () {
	var a = [],
	b = "";
	a.push("\x3cspan class\x3d'prevNextLinks'\x3e");
	1 != this.currentPage ? (b = this.ref + ".goToPage(1)", a.push("\x3ca title\x3d'"), a.push(LC.getLabel("Paginator", "first_page")), a.push("' class\x3d'prevNext' href\x3d\"javascript:"), a.push(b), a.push('"\x3e')) : a.push("\x3cspan class\x3d'prevNext prevNextDisabled'\x3e");
	a.push("\x26lt;\x26lt;");
	1 != this.currentPage ? a.push("\x3c/a\x3e") : a.push("\x3c/span\x3e");
	1 != this.currentPage ? (b = this.ref + ".goToPage(" +
			(this.currentPage - 1) + ")", a.push("\x3ca title\x3d'"), a.push(LC.getLabel("Paginator", "previous_page")), a.push("' class\x3d'prevNext' href\x3d\"javascript:"), a.push(b), a.push('"\x3e')) : a.push("\x3cspan class\x3d'prevNext prevNextDisabled'\x3e");
	a.push("\x26lt; ");
	a.push(LC.getLabel("Paginator", "previous"));
	1 != this.currentPage ? a.push("\x3c/a\x3e") : a.push("\x3c/span\x3e");
	this.more || this.totalPages && this.currentPage != this.totalPages ? (b = this.ref + ".goToPage(" + (this.currentPage + 1) + ")", a.push("\x3ca title\x3d'"),
		a.push(LC.getLabel("Paginator", "next_page")), a.push("' class\x3d'prevNext' href\x3d\"javascript:"), a.push(b), a.push('"\x3e')) : a.push("\x3cspan class\x3d'prevNext prevNextDisabled'\x3e");
	a.push(LC.getLabel("Paginator", "next"));
	a.push(" \x26gt;");
	this.more || this.totalPages && this.currentPage != this.totalPages ? a.push("\x3c/a\x3e") : a.push("\x3c/span\x3e");
	this.totalPages && this.currentPage != this.totalPages ? (b = this.ref + ".goToPage(" + this.totalPages + ")", a.push("\x3ca title\x3d'"), a.push(LC.getLabel("Paginator",
				"last_page")), a.push("' class\x3d'prevNext' href\x3d\"javascript:"), a.push(b), a.push('"\x3e')) : a.push("\x3cspan class\x3d'prevNext prevNextDisabled'\x3e");
	a.push("\x26gt;\x26gt;");
	this.totalPages && this.currentPage != this.totalPages ? a.push("\x3c/a\x3e") : a.push("\x3c/span\x3e");
	a.push("\x3c/span\x3e");
	return a.join("")
};
Paginator.prototype.goToPage = function (a) {
	isNaN(a) || 1 > a ? a = 1 : a > this.totalPages && (a = this.totalPages);
	this.handler && this.handler(a)
};
Paginator.addPaginator = function (a) {
	Paginator.instances[a.id] = a
};
Paginator.instances = {};
function RelatedListPanel(a, b) {
	this.panelId = a;
	this.delayingShow = this.delayingHide = this.currentListId = null;
	this.numLists = 0;
	this.linksHtml = [];
	this.isConsole = -1 < location.search.indexOf(Desktop.IS_DESKTOP);
	this.iframeReady = !1;
	this.skipAppendOnView = b
}
RelatedListPanel.prototype.getPanelNode = function () {
	return document.getElementById(this.panelId)
};
RelatedListPanel.prototype.getPanelShadowNode = function () {
	return this.getPanelNode() ? this.getPanelNode().parentNode : null
};
RelatedListPanel.prototype.getIFrameNode = function () {
	return Sfdc.select("iframe", this.getPanelNode())[0]
};
RelatedListPanel.prototype.registerList = function (a) {
	this.linksHtml.push(this.getSimpleLinkHTML(a))
};
RelatedListPanel.prototype.addListsToPanel = function (a) {
	var b = this.getHoverableLinksNode();
	if ((a || 0 > b.innerHTML.indexOf("linklet")) && "SCRIPT" !== b.nodeName) {
		Sfdc.Dom.updateHTML(b, this.linksHtml.join('\x3cspan class\x3d"pipe"\x3e | \x3c/span\x3e'));
		a = b.getElementsByTagName("a");
		for (var c = 0; c < a.length; c++)
			this.addEventsToLinks(a[c])
	}
	b.style.visibility = "visible"
};
RelatedListPanel.prototype.addEventsToLinks = function (a) {
	var b = a.href.substring(a.href.indexOf("#") + 1, a.href.indexOf("_target")),
	c = RelatedList.get(b);
	c && c.isHoverEnabled() && (Sfdc.on(a, "mouseover", function () {
			sfdcPage.getRelatedListPanel(b).showRLDelayed(b)
		}), Sfdc.on(a, "mouseout", function () {
			sfdcPage.getRelatedListPanel(b).hideRLDelayed(b)
		}), Sfdc.on(a, "click", function () {
			sfdcPage.getRelatedListPanel(b).hideRL(b)
		}))
};
RelatedListPanel.prototype.getSimpleLinkHTML = function (a) {
	var b = [];
	b.push('\x3ca class\x3d"linklet" href\x3d"#');
	b.push(a.getLinkTarget());
	b.push('" id\x3d"');
	b.push(this.getLinkId(a.listId));
	b.push('"');
	b.push("\x3e");
	b.push('\x3cspan class\x3d"listTitle"\x3e');
	b.push(a.getTitle());
	b.push(this.getCountIndicator(a));
	b.push("\x3c/span\x3e\x3c/a\x3e");
	return b.join("")
};
RelatedListPanel.prototype.getCountIndicator = function (a) {
	var b = [];
	a.shouldLoad ? b.push('\x3cspan class\x3d"count"\x3e[...]\x3c/span\x3e') : (b.push('\x3cspan class\x3d"count"\x3e['), b.push(a.getNumberVisibleRows()), a.hasMore() && b.push('\x3cspan class\x3d"plus"\x3e+\x3c/span\x3e'), b.push("]\x3c/span\x3e"));
	return b.join("")
};
RelatedListPanel.prototype.getHoverableLinksNode = function () {
	return this.getPanelShadowNode().nextSibling
};
RelatedListPanel.prototype.showRLDelayed = function (a) {
	var b = !1;
	this.clearhidemenu();
	if (this.currentListId && this.currentListId != a)
		this.hideRL(this.currentListId), this.populateRL(a), this.showRL(a);
	else {
		var c = this;
		this.delayingShow = setTimeout(function () {
				c.showRL(a)
			}, 500);
		try {
			if (!this.iframeReady && (b = this.iframeReady = !0, !this.skipAppendOnView)) {
				var d = c.getIFrameNode().contentWindow,
				e = d.document;
				DomUtil.copyScriptsCssBodyClass(document, e, sfdcPage.scriptsToNotCopy, function () {
					d.navigateToUrl = function (a) {
						window.navigateToUrl(a)
					};
					d.RelatedList = window.RelatedList;
					d.sfdcPage = window.sfdcPage
				});
				e.body.className += " rlHoverFrame"
			}
		} catch (f) {}

		b ? setTimeout(function () {
			c.populateRL(a)
		}, 1) : c.populateRL(a)
	}
};
RelatedListPanel.prototype.hideRLDelayed = function (a, b) {
	this.clearshowmenu();
	b || (b = 50);
	a || (a = this.currentListId);
	var c = this;
	this.delayingHide = setTimeout(function () {
			c.hideRL(a)
		}, b)
};
RelatedListPanel.prototype.getStyleSheetHtml = function () {
	for (var a = [], b = 0; b < document.styleSheets.length; b++)
		document.styleSheets[b].owningElement && document.styleSheets[b].owningElement.outerHTML && a.push(document.styleSheets[b].owningElement.outerHTML);
	return a.join("")
};
RelatedListPanel.prototype.populateRL = function (a) {
	a || (a = this.currentListId);
	if (!this.currentListId && this.currentListId != a) {
		var b = this.getIFrameNode();
		if (b) {
			var c = getElementByIdCS(a),
			d = b.contentWindow.document;
			if (c && d) {
				this.currentListId = a;
				if (Sfdc.isFunction(d.importNode) && -1 != d.importNode.toString().indexOf("[native code]"))
					Sfdc.Dom.updateHTML(d.body, ""), d.body.appendChild(d.importNode(c, !1)), Sfdc.Dom.updateHTML(d.body.firstChild, c.innerHTML);
				else if (c.outerHTML)
					Sfdc.Dom.updateHTML(d.body, c.outerHTML);
				else
					return !1;
				var e = this;
				setTimeout(function () {
					e.fixContent()
				}, 1);
				b.contentWindow.navigateToUrl = function (a) {
					window.navigateToUrl(a)
				}
			}
		}
	}
};
RelatedListPanel.prototype.copyStyle = function () {
	var a,
	b,
	c,
	d,
	e,
	f,
	g,
	h;
	if (a = this.getIFrameNode()) {
		e = a.contentWindow.document;
		c = (f = Sfdc.isFunction(e.importNode) && -1 != e.importNode.toString().indexOf("[native code]")) ? e.getElementsByTagName("HEAD")[0] : e.body;
		d = c.getElementsByTagName("STYLE");
		for (a = 0; a < d.length; a++)
			c.removeChild(d[a]);
		d = document.getElementsByTagName("HEAD")[0].getElementsByTagName("STYLE");
		g = e.styleSheets.length;
		b = d.length;
		for (a = 0; a < b; a++)
			f ? (c.appendChild(e.importNode(d[a], !0)), h = e.styleSheets[g +
						a], h.cssText || (h.cssText = d[a].innerHTML)) : c.innerHTML += "\x3cstyle\x3e" + d[a].innerHTML + "\x3c/style\x3e"
	}
};
RelatedListPanel.prototype.showRL = function (a, b) {
	this.clearhidemenu();
	if (a == this.currentListId) {
		var c = this.getPanelShadowNode();
		if (c) {
			var d = this.getIFrameNode(),
			e = getElementByIdCS(this.getLinkId(a)),
			f = Sfdc.get(".bPageBlock", Sfdc.get(a));
			if (d && e && (!(0 < e.className.indexOf("linkletOn")) || b)) {
				c.style.top = e.offsetTop + e.offsetHeight + "px";
				if (this.isConsole)
					c.style.left = getObjX(this.getHoverableLinksNode()) - 4 + "px", c.style.width = f.offsetWidth - 3 + "px";
				else {
					if (LC.isRtlPage()) {
						var g = this.getHoverableLinksNode().parentNode;
						c.style.right = getObjX(g) + g.offsetWidth - (getObjX(this.getHoverableLinksNode()) + this.getHoverableLinksNode().offsetWidth) - 14 + "px"
					} else
						c.style.left = getObjX(this.getHoverableLinksNode()) - 14 + "px";
					c.style.width = f.offsetWidth + 13 + "px"
				}
				d.style.height = f.offsetHeight + 5 + "px";
				c.style.display = "block";
				e.className += " linkletOn";
				this.copyStyle()
			}
		}
	}
};
RelatedListPanel.prototype.hideRL = function (a) {
	if (!Modal.isBlocked()) {
		this.clearshowmenu();
		a || (a = this.currentListId);
		this.currentListId = null;
		var b = this.getPanelShadowNode();
		if (a = getElementByIdCS(this.getLinkId(a)))
			a.className = "linklet";
		b && (b.style.display = "none")
	}
};
RelatedListPanel.prototype.clearhidemenu = function () {
	this.delayingHide && clearTimeout(this.delayingHide)
};
RelatedListPanel.prototype.clearshowmenu = function () {
	this.delayingShow && clearTimeout(this.delayingShow)
};
RelatedListPanel.prototype.getLinkId = function (a) {
	return a + "_link"
};
RelatedListPanel.prototype.fixContent = function () {
	for (var a = ["a", "form"], b = this.getIFrameNode().contentWindow, c = 0, d; d = a[c]; c++) {
		d = b.document.body.getElementsByTagName(d);
		for (var e = 0, f; f = d[e]; e++)
			f.target || (f.target = "_parent")
	}
	a = b.document.body.getElementsByTagName("script");
	for (c = 0; c < a.length; c++)
		b.eval(a[c].innerHTML)
};
RelatedListPanel.prototype.refresh = function (a) {
	for (var b in a) {
		var c = a[b],
		d = [],
		e = this.getIFrameNode().contentWindow.document.getElementById(c.listId),
		f = document.getElementById(c.listId),
		g = document.getElementById(this.getLinkId(c.listId));
		e && e.innerHTML && (Sfdc.Dom.updateHTML(e, f.innerHTML), this.fixContent(e), g && (g.className && -1 < g.className.indexOf("linkletOn")) && this.showRL(c.listId, !0));
		g && (d.push('\x3cspan class\x3d"listTitle"\x3e'), d.push(c.getTitle()), d.push(this.getCountIndicator(c)), d.push("\x3c/span\x3e"),
			Sfdc.Dom.updateHTML(g, d.join("")))
	}
};
var RoleTreeNodeElement = function () {
	this.openRoleList = [];
	this.downloadedRoles = [];
	this.downloadedAll = !1;
	this.treeFormName = null
};
RoleTreeNodeElement.prototype.init = function (b, a) {
	this.downloadedAll = b;
	null != a && (this.openRoleList = a.split(":"), this.downloadedRoles = a.split(":"))
};
RoleTreeNodeElement.prototype.addToOpenRoles = function (b) {
	for (var a = 0; a < this.openRoleList.length; a++)
		if (null == this.openRoleList[a] || "" == this.openRoleList[a]) {
			this.openRoleList[a] = b;
			this.updateCookiesRole();
			return
		}
	this.openRoleList[this.openRoleList.length] = b;
	this.updateCookiesRole()
};
RoleTreeNodeElement.prototype.isInDownloadedRoles = function (b) {
	if ("000000000000000" == b)
		return !0;
	for (var a = 0; a < this.downloadedRoles.length; a++)
		if (this.downloadedRoles[a] == b)
			return !0;
	return !1
};
RoleTreeNodeElement.prototype.removeFromOpenRoles = function (b) {
	for (var a = 0; a < this.openRoleList.length; a++)
		this.openRoleList[a] == b && (this.openRoleList[a] = null);
	this.updateCookiesRole()
};
RoleTreeNodeElement.prototype.updateCookiesRole = function () {
	for (var b = "", a = 0; a < this.openRoleList.length; a++)
		null != this.openRoleList[a] && "" != this.openRoleList[a] && (b = b + this.openRoleList[a] + ":");
	Sfdc.Cookie.setCookie(RoleTreeCookieConstants.COOKIE_KEY, b, null, "/")
};
RoleTreeNodeElement.prototype.toggleRoles = function (b, a, c) {
	a = document.getElementById(a);
	null != a && ((visible = "none" != a.style.display) ? (a.style.display = "none", b.className = TreeNodeElement.prototype.getCollapsedWidgetState(b.className), this.removeFromOpenRoles(c)) : (this.addToOpenRoles(c), this.downloadedAll || this.isInDownloadedRoles(c) ? (a.style.display = "block", b.className = TreeNodeElement.prototype.getExpandedWidgetState(b.className)) : this.refreshTree()))
};
RoleTreeNodeElement.prototype.collapseAllRoles = function () {
	Sfdc.Cookie.setCookie(RoleTreeCookieConstants.COOKIE_KEY, "", null, "/");
	this.refreshTree()
};
RoleTreeNodeElement.prototype.expandAllRoles = function () {
	Sfdc.Cookie.setCookie(RoleTreeCookieConstants.COOKIE_KEY, "EXPANDALL", null, "/");
	this.refreshTree()
};
RoleTreeNodeElement.prototype.setTreeFormName = function (b) {
	this.treeFormName = b
};
RoleTreeNodeElement.prototype.refreshTree = function () {
	null == this.treeFormName ? window.location.replace(window.location.href) : window.document.forms[this.treeFormName].submit()
};
function ScheduleReportOverlayUtil() {}

ScheduleReportOverlayUtil.displayScheduleReportDialogElement = function (b, c) {
	var d = OverlayDialogElement.getDialog("deleteScheduleReportDialog_" + b);
	d.isModal = !0;
	d.setWidth(480);
	var a = DesktopContext.preserveDesktopPageUrl("/" + b + "?" + ReportConstants.pDELREP + "\x3d1");
	c && (a += "\x26" + CSRFConstants.CSRF_TOKEN + "\x3d" + c);
	return ScheduleReportOverlayUtil.warnScheduleReportDialogElement(b, function () {
		navigateToUrl(a)
	}, function () {
		document.getElementById("del_" + b).focus()
	})
};
ScheduleReportOverlayUtil.warnScheduleReportDialogElement = function (b, c, d) {
	var a = OverlayDialogElement.getDialog("deleteScheduleReportDialog_" + b);
	a.isModal = !0;
	a.setWidth(480);
	a.onOkayCallback = c;
	a.onCancelCallback = d;
	var e;
	0 === b.indexOf("00O") ? (c = LC.getLabel("Report", "DeleteScheduleReportTitle"), d = LC.getLabel("Report", "DeleteScheduleReportContentTopHalf"), e = LC.getLabel("Report", "DeleteScheduleReportConfirm")) : (c = LC.getLabel("Report", "DeleteScheduleDashboardTitle"), d = LC.getLabel("Report", "DeleteScheduleDashboardContentTopHalf"),
		e = LC.getLabel("Report", "DeleteScheduleDashboardConfirm"));
	a.buttonContents = '\x3cinput value\x3d"' + e + '" class\x3d"btn" id\x3d"deleteScheduleReportDialog_' + b + '_overlayConfirmButton" name\x3d"overlayConfirmButton" onclick\x3d"if(true) {var dialog \x3d sfdcPage.getDialogById(\'deleteScheduleReportDialog_' + b + '\'); dialog.hide(); dialog.onOkayCallback()}" title\x3d"' + LC.getLabel("Report", "DeleteScheduleReportConfirm") + '" type\x3d"button" /\x3e\x3cinput value\x3d"' + LC.getLabel("Buttons", "cancel") + '" class\x3d"btn" name\x3d"cancel" onclick\x3d"var dialog \x3d OverlayDialogElement.getDialog(\'deleteScheduleReportDialog_' +
		b + '\');dialog.onCancelCallback();dialog.cancel()" title\x3d"' + LC.getLabel("Buttons", "cancel") + '" type\x3d"button" /\x3e';
	a.setTitle(c);
	c = d;
	d = LC.getLabel("Report", "DeleteScheduleReportContentBottom");
	a.contents = '\x3cdiv\x3e\x3ctable \x3e\x3ctr\x3e\x3ctd\x3e\x3cimg src\x3d"/s.gif" alt\x3d"Warning"  class\x3d"warningLarge" style\x3d\'margin-right: 15px; margin-left: 8px\'\x3d"style\x3d\'margin-right: 15px\'" title\x3d"Warning"/\x3e\x3c/td\x3e\x3ctd\x3e\x3cbr/\x3e' + c + "\x3cbr/\x3e\x3cbr/\x3e" + d + "\x3c/td\x3e\x3c/tr\x3e\n\x3c/table\x3e\x3c/div\x3e";
	a.createContent();
	a.show();
	document.getElementById("deleteScheduleReportDialog_" + b + "_overlayConfirmButton").focus();
	return !1
};
function SelectElementDependency(b, c) {
	this.divIds = c;
	this.selectElementId = b;
	var d = this;
	this.changeVisibleDiv = function () {
		for (var b = document.getElementById(d.selectElementId).selectedIndex, a = 0; a < c.length; a++) {
			var e;
			e = a == b ? "block" : "none";
			document.getElementById(d.divIds[a]).style.display = e
		}
	};
	this.changeVisibleDiv();
	addEvent(document.getElementById(this.selectElementId), "change", this.changeVisibleDiv, !1)
};
var SelectFilterElement = function (a, b, d, c, f, e, h, g) {
	this.controllerName = a;
	this.controllerOption = b;
	this.targetName = d;
	this.targetOption = c;
	this.existingName = f;
	this.selectedOptions = [];
	this.allOptions = [];
	this.maxValues = e;
	this.searchQueueCount = 0;
	this.useJsSearch = h;
	this.itemAdded = this.searchStringChanged = !1;
	this.ajaxFilterUrl = g;
	this.usesAbbreviateOption = !1
};
SelectFilterElement.prototype.getSearchElementId = function () {
	return "searchValue_" + this.controllerName
};
SelectFilterElement.prototype.addOptions = function (a, b) {
	this.usesAbbreviateOption = a;
	for (var d = 0; d < b.length; d++)
		this.addOption.apply(this, b[d])
};
SelectFilterElement.prototype.addOption = function (a, b, d, c, f) {
	var e = null;
	this.usesAbbreviateOption ? (e = SelectFilterElement.formatOptionLabel(b), e = new Option(e, d), e.title = b) : e = new Option(b, d);
	e.searchValue = c;
	c = this.allOptions[a];
	c || (c = [], this.allOptions[a] = c);
	c[c.length] = e;
	f && (null != this.selectedOptions && this.selectedOptions[d]) && (f.options[f.options.length] = new Option(b, d))
};
SelectFilterElement.formatOptionLabel = function (a) {
	var b = a;
	42 < a.length && (-1 != a.indexOf(": ") ? (b = a.split(": "), a = b[0], b = b[1], 20 < a.length ? 20 < b.length ? (a = a.substring(0, 17) + "...", b = b.substring(0, 17) + "...") : a = a.substring(0, 37 - b.length) + "..." : b = b.substring(0, 37 - a.length) + "...", b = a + ": " + b) : b = a.substring(0, 39) + "...");
	return b
};
SelectFilterElement.prototype.queueSearch = function () {
	this.searchQueueCount++;
	var a = this.getJavascriptVarName() + ".doSearch()";
	setTimeout(a, 300)
};
SelectFilterElement.prototype.doSearch = function () {
	this.searchQueueCount--;
	0 < this.searchQueueCount || (this.searchQueueCount = 0, this.useJsSearch ? this.doSearchJS() : this.doSearchServer())
};
SelectFilterElement.prototype.doSearchJS = function () {
	var a = document.getElementById(this.controllerName),
	b = document.getElementById(this.targetName),
	d = document.getElementById(this.existingName),
	c = document.getElementById(this.getSearchElementId()),
	c = c.value ? c.value.toLowerCase() : "";
	if (0 == c.length)
		this.filter();
	else {
		var f = b.options.length = 0,
		e = 0;
		if (a = this.allOptions[a.value])
			for (var h = 0; h < a.length && e < this.maxValues + 1; h++) {
				var g = a[h];
				if (d && this.selectedOptions[g.value])
					f++;
				else if (!g.searchValue || 0 == g.searchValue.length ||
					0 == g.searchValue.indexOf(c) || -1 < g.searchValue.indexOf(" " + c))
					e < this.maxValues && (b.options[e] = g), f++, e++
			}
		this.showErrorMessage(f > this.maxValues);
		0 == b.options.length && (b.options[0] = new Option(LC.getLabel("SelectElement", "Required"), "000000000000000"))
	}
};
SelectFilterElement.prototype.onSearchComplete = function (a) {
	document.getElementById(this.controllerName);
	a = Util.evalAjaxServletOutput(a);
	document.getElementById(this.existingName);
	var b = document.getElementById(this.targetName);
	b.options.length = 0;
	if (a.FilteredOptions && 0 < a.FilteredOptions.length) {
		for (var d = [], c = 0; c < a.FilteredOptions.length && c < this.maxValues; c++)
			d[c] = [a.FilteredOptions[c].text, a.FilteredOptions[c].value];
		Util.refreshDynamicSelect(b, d, !1, null);
		this.showErrorMessage(a.FilteredOptions.length >
			this.maxValues)
	} else
		b.options[0] = new Option(LC.getLabel("SelectElement", "Required"), Udd.EMPTY_KEY)
};
SelectFilterElement.prototype.doSearchServer = function () {
	if (this.ajaxFilterUrl) {
		var a = document.getElementById(this.getSearchElementId()),
		a = a.value ? a.value : "";
		if (0 === a.length)
			this.filter();
		else {
			var b = document.getElementById(this.controllerName);
			Sfdc.Ajax.post(UserContext.getUrl(this.ajaxFilterUrl), this.onSearchComplete, {
				data : {
					searchStr : a,
					controlType : b.value
				},
				context : this
			})
		}
	} else {
		a = document.forms[SelectFilterElement.FORMNAME];
		if (a.onsubmit)
			a.onsubmit();
		a.submit()
	}
};
SelectFilterElement.FORMNAME = EditPageConstants.pEDIT_PAGE;
SelectFilterElement.prototype.handleKeyDown = function (a) {
	a = getEvent(a);
	return 13 == a.keyCode || 13 == a.which ? (this.queueSearch(), !1) : this.searchStringChanged = !0
};
SelectFilterElement.prototype.handlePropertyChange = function () {
	this.useJsSearch && this.queueSearch()
};
SelectFilterElement.prototype.showErrorMessage = function (a, b) {
	var d = document.getElementById(this.getSearchElementId()),
	c = document.getElementById("error_" + this.targetName);
	d && c && (a ? (c.style.visibility = "visible", c.innerHTML = b ? b : LC.getLabel("Search_Filter", "too_many", this.maxValues, this.maxValues)) : c.style.visibility = "hidden")
};
SelectFilterElement.prototype.filter = function () {
	var a = document.getElementById(this.controllerName),
	b = document.getElementById(this.targetName),
	d = document.getElementById(this.getSearchElementId());
	this.useJsSearch && (d && 0 != d.value.length) && (d.value = "");
	b.options.length = 0;
	SelectFilterElement.prototype.NONE_LABEL && (b.options[0] = new Option(SelectFilterElement.prototype.NONE_LABEL, "000000000000000"));
	var c = 0,
	f = 0;
	if (a = this.allOptions[a.value]) {
		var e = this.existingName;
		e && this.initSelectedOptionsFromUi();
		for (var h =
				0; h < a.length && (null === d || f < this.maxValues + 1); h++) {
			var g = a[h];
			if (!e || !this.selectedOptions[g.value])
				if (c++, null === d || f < this.maxValues)
					b.options[f++] = g
		}
	}
	this.showErrorMessage(c > this.maxValues);
	0 == b.options.length && (b.options[0] = new Option(LC.getLabel("SelectElement", "Required"), "000000000000000"))
};
SelectFilterElement.prototype.initSelectedOptionsFromUi = function () {
	if (this.existingName) {
		this.selectedOptions = [];
		var a = document.getElementById(this.existingName);
		if (a)
			for (var b = 0; b < a.options.length; b++)
				0 < a.options[b].value.length && (this.selectedOptions[a.options[b].value] = !0)
	}
};
SelectFilterElement.prototype.init = function () {
	this.filter();
	if (this.existingName) {
		var a = document.getElementById(this.existingName);
		a && (a.selectFilterEl = this, a.onchange = function () {
			this.selectFilterEl.initSelectedOptionsFromUi()
		})
	}
	if (this.controllerOption && this.controllerName) {
		var b = document.getElementById(this.controllerName);
		if (null != b.options && void 0 != b.options)
			for (a = 0; a < b.options.length; a++)
				b.options[a].value == this.controllerOption && (b.options[a].selected = !0)
	}
	if (this.targetOption) {
		b = document.getElementById(this.targetName);
		for (a = 0; a < b.options.length; a++)
			b.options[a].value == this.targetOption && (b.options[a].selected = !0)
	}
};
SelectFilterElement.prototype.getJavascriptVarName = function () {
	return this.targetName + "Var"
};
SelectFilterElement.prototype.filterDropdown = function (a, b) {
	for (var d = b.selectedIndex, c = 0; c < b.options.length; c++)
		document.getElementById(a + "_" + b.options[c].value).style.display = c == d ? "inline" : "none"
};
SelectFilterElement.prototype.moveLeft = function () {
	this.filter()
};
SelectFilterElement.prototype.beforeMoveRight = function () {
	this.itemAdded = !0
};
var SELECT_MENU_SELECT = 1, SELECT_MENU_SIDEWAYS = 2;
function SelectMenu(b, d, a, g, h, e, f, k, l, m) {
	this.sourceList = document.getElementById(b);
	this.menuDiv = this.select = null;
	this.displayWord = a;
	this.targetDiv = document.getElementById(d);
	this.divClass = g + " menuButton";
	this.menuClass = h + " menuButtonMenu";
	this.hasSetPosition = this.menuOpen = !1;
	this.scrollbars = k;
	this.hasDefaultAction = l;
	this.isCreateNew = !1;
	this.isRightAligned = m;
	this.style = e ? e : SELECT_MENU_SELECT;
	var c = this;
	this.documentHideMenu = function (a) {
		getEventTarget(a).className != f && c.menuOpen && c.hideMenu()
	};
	this.handleDocumentKeyDown =
	function (a) {
		a = getEvent(a);
		c.menuOpen && a.keyCode == KEY_ESC && c.hideMenu()
	};
	this.handleDivClick = function (a) {
		var b = getEventTarget(a);
		b.className != f && (c.hasDefaultAction && (a.layerX ? a.layerX : a.offsetX) < b.offsetWidth - 17 ? window.location = c.sourceList.childNodes[0].href : c.menuOpen ? c.hideMenu() : (c.showMenu(), c.setPosition()), eventCancelBubble(a))
	};
	this.sourceList && this.targetDiv && this.init()
}
SelectMenu.prototype.showMenu = function () {
	this.isCreateNew || (this.targetDiv.style.position = "relative");
	this.menuDiv.setStyle("display", "block");
	this.menuOpen = !0
};
SelectMenu.prototype.hideMenu = function () {
	this.isCreateNew || (this.targetDiv.style.position = "static");
	this.menuDiv.setStyle("display", "none");
	this.menuOpen = !1
};
SelectMenu.prototype._setPositionSelect = function () {
	if (!this.hasSetPosition) {
		this.hasSetPosition = !0;
		this.isCreateNew || (this.menuDiv.setStyle("top", this.select.offsetHeight + "px"), this.isRightAligned ? this.menuDiv.setStyle("right", "3px") : this.menuDiv.setStyle("left", "0px"));
		for (var b = this.sourceList.childNodes[0].scrollWidth, d = b, a = 1; a < this.sourceList.childNodes.length; a++)
			this.sourceList.childNodes[a].scrollWidth > b && (b = this.sourceList.childNodes[a].scrollWidth);
		for (a = 0; a < this.sourceList.childNodes.length; a++)
			this.sourceList.childNodes[a].style.width =
				"100%", this.sourceList.childNodes[a].offsetWidth > d && (d = this.sourceList.childNodes[a].offsetWidth);
		this.menuDiv.setStyle("width", b + "px");
		this.scrollbars && (b = 20 * this.sourceList.childNodes[0].offsetHeight, a = this.sourceList.offsetHeight, a < b && (b = a), this.menuDiv.setStyle("height", b + "px"), this.menuDiv.setStyle("overflowY", "auto"));
		this.menuDiv.div.offsetWidth < this.select.childNodes[0].offsetWidth && (this.menuDiv.setStyle("width", this.select.childNodes[0].offsetWidth + "px"), this.scrollbars && (this.menuDiv.setStyle("width",
					d + 34 + "px"), this.menuDiv.setStyle("backgroundColor", "#CCC"), this.menuDiv.div.childNodes[0].style.width = this.menuDiv.div.offsetWidth - 34 + "px"))
	}
};
SelectMenu.prototype._setPositionSideways = function () {
	this.menuDiv.setStyle("top", this.select.offsetHeight / 2 + "px");
	this.menuDiv.setStyle("left", this.select.offsetWidth + "px")
};
SelectMenu.prototype.init = function () {
	this.select = document.createElement("div");
	this.select.className = this.divClass;
	this.targetDiv.insertBefore(this.select, this.targetDiv.firstChild);
	var b = document.createElement("div");
	b.className = this.hasDefaultAction ? "selectMenuButton menuButtonButton hasDefault" : "selectMenuButton menuButtonButton";
	this.select.appendChild(b);
	b.appendChild(document.createTextNode(this.displayWord));
	this.menuDiv = document.createElement("div");
	this.menuDiv.className = this.menuClass;
	this.select.appendChild(this.menuDiv);
	this.menuDiv.appendChild(this.sourceList);
	switch (this.style) {
	case SELECT_MENU_SIDEWAYS:
		this.setPosition = this._setPositionSideways;
		break;
	default:
		this.setPosition = this._setPositionSelect
	}
	this.menuDiv = new iframeShim(this.menuDiv);
	this.menuDiv.setStyle("display", "none");
	this.menuDiv.setStyle("position", "absolute");
	addEvent(document, "click", this.documentHideMenu, !1);
	addEvent(document, "keydown", this.handleDocumentKeyDown, !0);
	addEvent(this.targetDiv, "click", this.handleDivClick, !1)
};
var ShareRuleSelectFilterElement = function () {};
ShareRuleSelectFilterElement.prototype.filterDropdown = function (f, a) {
	for (var d = a.selectedIndex, g = a.options[d].value, b = 0; b < a.options.length; b++) {
		var e = a.options[b].value,
		c = document.getElementById(f + "_" + e);
		c && (e == g ? b == d && (c.style.display = "inline") : c.style.display = "none")
	}
};
function SimpleDialog(b, a) {
	this.id = b;
	this.isModal = !0;
	this.isMovable = a;
	this.extraClass = "";
	this.width = 450;
	this.title = "";
	this.displayX = !1;
	this.addEvents()
}
SimpleDialog.prototype = new OverlayDialog;
SimpleDialog.prototype.createContent = function () {
	var b = document.getElementById(this.getContentId()),
	a = [];
	a.push("\x3ch2 id\x3d'");
	a.push(this.id);
	a.push("Header'\x3e");
	a.push(this.header);
	a.push("\x3c/h2\x3e");
	a.push("\x3cdiv id\x3d'");
	a.push(this.id);
	a.push("Inner'\x3e\x3c/div\x3e");
	b.innerHTML = a.join("")
};
SimpleDialog.prototype.setContentInnerHTML = function (b) {
	this.getContentElement().innerHTML = b
};
SimpleDialog.prototype.importContentNode = function (b) {
	this.setContentInnerHTML("");
	this.getContentElement().appendChild(b)
};
SimpleDialog.prototype.getContentElement = function () {
	return document.getElementById(this.id + "Inner")
};
function SimpleTimePicker() {
	this.now = DateUtil.getDateTimeFromUserLocale(UserContext.today);
	this.created = !1;
	this.fields = [];
	this.hoursDiv;
	this.hoursShim;
	this.currentField = null;
	this.currentHour = 0;
	this.isVisible = !1;
	this.timeDivs = [];
	this.selectedDiv = null
}
function TimeDivData(a, b) {
	this.divId = a;
	this.timeValue = b
}
SimpleTimePicker.prototype.create = function (a) {
	this.created = !0;
	this.hoursDiv = document.createElement("div");
	this.hoursDiv.className = "hourPicker";
	this.hoursDiv.id = "simpleTimePicker";
	var b = new Date;
	b.setMinutes(0);
	var c = [];
	this.timeDivs = Array(48);
	for (var d = 0; 48 > d; d++) {
		b.setHours(Math.floor(d / 2));
		0 == d % 2 ? b.setMinutes(0) : b.setMinutes(30);
		var e = DateUtil.getTimeStringFromUserLocale(b),
		f = "timePickerItem_" + d;
		this.timeDivs[d] = new TimeDivData(f, e);
		c.push("\x3cdiv class\x3d'simpleHour' id\x3d'" + f + "' onmouseover\x3d'SimpleTimePicker.timePicker.highLightTimeItem(");
		c.push(d);
		c.push(")' onclick\x3d\"SimpleTimePicker.timePicker.selectTime('");
		c.push(e);
		c.push("', true)\"\x3e");
		c.push(e);
		c.push("\x3c/div\x3e")
	}
	a ? a.appendChild(this.hoursDiv) : document.body.appendChild(this.hoursDiv);
	this.hoursDiv.innerHTML = c.join("");
	var g = this;
	addEvent(document, "click", function (a) {
		g.hide(a)
	}, !1);
	addEvent(this.hoursDiv, "click", function (a) {
		eventCancelBubble(getEvent(a));
		return !1
	}, !1);
	this.hoursShim = new iframeShim(this.hoursDiv)
};
SimpleTimePicker.prototype.highLightTimeItem = function (a) {
	null != this.selectedDiv && (document.getElementById(this.timeDivs[this.selectedDiv].divId).className = "simpleHour");
	this.selectedDiv = a;
	document.getElementById(this.timeDivs[this.selectedDiv].divId).className = "simpleHour hover";
	this.adjustScrollbar(a)
};
SimpleTimePicker.prototype.selectTimeItem = function (a) {
	this.highLightTimeItem(a);
	this.selectTime(this.timeDivs[this.selectedDiv].timeValue, !1)
};
SimpleTimePicker.prototype.positionTime = function (a) {
	var b = getObjX(this.currentField),
	c = getObjY(this.currentField) + this.currentField.offsetHeight;
	if (a)
		var d = getObjX(a), e = getObjY(a), b = b - d, c = c - e + a.offsetTop;
	this.hoursShim.setStyle("left", b + "px");
	this.hoursShim.setStyle("top", c + "px");
	b = a = 0;
	this.currentField.value ? (c = DateUtil.getTimeFromUserLocale(this.currentField.value), c.getTime() && (a = c.getHours(), b = c.getMinutes())) : (a = this.now.getHours(), b = this.now.getMinutes());
	b = parseFloat(b / 60);
	a = Math.round(2 * (a +
				b));
	SimpleTimePicker.timePicker.highLightTimeItem(a)
};
SimpleTimePicker.prototype.adjustScrollbar = function (a) {
	a *= this.hoursDiv.firstChild.offsetHeight;
	a < this.hoursDiv.scrollTop || a > this.hoursDiv.scrollTop + this.hoursDiv.clientHeight ? this.hoursDiv.scrollTop = a : a > this.hoursDiv.scrollTop + this.hoursDiv.clientHeight - this.hoursDiv.firstChild.offsetHeight && (this.hoursDiv.scrollTop += this.hoursDiv.firstChild.offsetHeight)
};
SimpleTimePicker.prototype.show = function (a, b) {
	this.created || this.create(b);
	this.currentField = getElementByIdCS(a);
	this.fields[a] !== this.currentField && (this.fields[a] = null);
	if (!this.fields[a]) {
		var c = this;
		this.currentField.onkeydown = function (a) {
			return c.trapEnterKey(a)
		};
		addEvent(this.currentField, "keydown", function (a) {
			return c.handleKeyPress(a)
		}, !1);
		this.fields[a] = this.currentField
	}
	this.hoursDiv.style.width = this.currentField.clientWidth + 2 + "px";
	this.hoursShim.setStyle("display", "block");
	this.positionTime(b);
	this.isVisible = !0
};
SimpleTimePicker.prototype.hide = function (a) {
	a && getEventTarget(a) === this.currentField || (this.hoursShim.setStyle("display", "none"), this.isVisible = !1)
};
SimpleTimePicker.prototype.trapEnterKey = function (a) {
	return getEvent(a).keyCode == KEY_ENTER && this.isVisible ? (eventCancelBubble(getEvent(a)), !1) : !0
};
SimpleTimePicker.prototype.handleKeyPress = function (a) {
	var b = getEvent(a).keyCode;
	if (this.isVisible)
		if (b == KEY_ESC || b == KEY_TAB)
			this.hide();
		else {
			if (b == KEY_ENTER)
				return this.hide(), eventCancelBubble(getEvent(a)), !1;
			b == KEY_ARROW_U ? 0 < this.selectedDiv && this.selectTimeItem(this.selectedDiv - 1) : b == KEY_ARROW_D && this.selectedDiv < this.timeDivs.length - 1 && this.selectTimeItem(this.selectedDiv + 1)
		}
	else (b == KEY_ARROW_U || b == KEY_ARROW_D) && this.show(this.currentField.id);
	return !0
};
SimpleTimePicker.prototype.selectTime = function (a, b) {
	b && this.hide();
	if (!this.currentField.disabled && this.currentField.value != a && (this.currentField.value = a, this.currentField.onchange))
		this.currentField.onchange()
};
SimpleTimePicker.timePicker = null;
SimpleTimePicker.pickTime = function (a, b) {
	SimpleTimePicker.timePicker || (SimpleTimePicker.timePicker = new SimpleTimePicker);
	SimpleTimePicker.timePicker.show(a, b)
};
SimpleTimePicker.hideTimePicker = function () {
	SimpleTimePicker.timePicker && SimpleTimePicker.timePicker.hide()
};
SimpleTimePicker.quickTime = function (a, b) {
	var c = getElementByIdCS(b);
	if (!c.disabled && c.value != a && (c.value = a, c.onchange))
		c.onchange()
};
function TimePicker() {
	this.now = DateUtil.getDateTimeFromUserLocale(UserContext.today);
	this.created = !1;
	this.fields = [];
	this.hoursDiv;
	this.hoursShim;
	this.minutesDiv;
	this.minutesShim;
	this.currentField = null;
	this.currentHour = 0;
	this.hidingMinutes = null
}
TimePicker.prototype.create = function () {
	this.created = !0;
	this.hoursDiv = document.createElement("div");
	this.hoursDiv.className = "hourPicker";
	var a = new Date;
	a.setMinutes(0);
	for (var b = [], c = 0; 24 > c; c++)
		a.setHours(c), b.push("\x3cdiv class\x3d'hour' onmouseover\x3d'TimePicker.timePicker.selectHour("), b.push(c), b.push(")' onclick\x3d'TimePicker.timePicker.selectTime("), b.push(c), b.push(", 0)'\x3e"), b.push(DateUtil.getTimeStringFromUserLocale(a)), b.push("\x3c/div\x3e");
	document.body.appendChild(this.hoursDiv);
	this.hoursDiv.style.width = DateUtil.hasAMPM(UserContext.timeFormat) ? "7em" : "5.5em";
	this.hoursDiv.innerHTML = b.join("");
	this.minutesDiv = document.createElement("div");
	this.minutesDiv.className = "minutePicker";
	b = [];
	for (c = 15; 60 > c; c += 15)
		b.push("\x3cdiv class\x3d'minutes' onclick\x3d'TimePicker.timePicker.selectMinutes("), b.push(c), b.push(")' onmouseover\x3d'this.className \x3d \"minutes hover\";' onmouseout\x3d'this.className \x3d \"minutes\";'\x3e:"), b.push(c), b.push("\x3c/div\x3e");
	document.body.appendChild(this.minutesDiv);
	this.minutesDiv.innerHTML = b.join("");
	var d = this;
	addEvent(document, "click", function (a) {
		d.hide(a)
	}, !1);
	addEvent(this.hoursDiv, "click", function (a) {
		eventCancelBubble(a);
		return !1
	}, !1);
	addEvent(this.minutesDiv, "click", function (a) {
		eventCancelBubble(a);
		return !1
	}, !1);
	addEvent(this.minutesDiv, "mouseout", function () {
		d.delayHideMinutes()
	}, !1);
	addEvent(this.hoursDiv, "mouseout", function () {
		d.delayHideMinutes()
	}, !1);
	addEvent(this.minutesDiv, "mouseover", function () {
		d.cancelHideMinutes()
	}, !1);
	this.hoursShim = new iframeShim(this.hoursDiv);
	this.minutesShim = new iframeShim(this.minutesDiv)
};
TimePicker.prototype.positionHours = function () {
	var a = getObjX(this.currentField),
	b = getObjY(this.currentField) + this.currentField.offsetHeight;
	this.hoursShim.setStyle("left", a + "px");
	this.hoursShim.setStyle("top", b + "px");
	a = 0;
	this.currentField.value ? (b = DateUtil.getTimeFromUserLocale(this.currentField.value), b.getTime() && (a = b.getHours())) : a = this.now.getHours();
	this.hoursDiv.scrollTop = a * this.hoursDiv.firstChild.offsetHeight
};
TimePicker.prototype.positionMinutes = function () {
	var a = getObjY(this.hoursDiv) + this.currentHour * this.hoursDiv.firstChild.offsetHeight - this.hoursDiv.scrollTop + 1,
	b = getObjX(this.hoursDiv) + this.hoursDiv.firstChild.offsetWidth;
	this.minutesShim.setStyle("left", b + "px");
	this.minutesShim.setStyle("top", a + "px")
};
TimePicker.prototype.show = function (a) {
	this.created || this.create();
	this.currentField = getElementByIdCS(a);
	this.fields[a] !== this.currentField && (this.fields[a] = null);
	if (!this.fields[a]) {
		var b = this;
		addEvent(this.currentField, "keydown", function (a) {
			b.handleKeyPress(a)
		}, !1);
		this.fields[a] = this.currentField
	}
	this.hoursShim.setStyle("display", "block");
	this.positionHours()
};
TimePicker.prototype.showMinutes = function () {
	this.cancelHideMinutes();
	this.positionMinutes();
	this.minutesShim.setStyle("display", "block")
};
TimePicker.prototype.cancelHideMinutes = function () {
	this.hidingMinutes && (clearTimeout(this.hidingMinutes), this.hidingMinutes = null)
};
TimePicker.prototype.delayHideMinutes = function () {
	var a = this;
	this.hidingMinutes = setTimeout(function () {
			a.hideMinutes()
		}, 50)
};
TimePicker.prototype.hideMinutes = function () {
	this.minutesShim.setStyle("display", "none");
	this.hoursDiv.childNodes[this.currentHour].className = "hour"
};
TimePicker.prototype.hide = function (a) {
	a && getEventTarget(a) === this.currentField || (this.hideMinutes(), this.hoursShim.setStyle("display", "none"))
};
TimePicker.prototype.handleKeyPress = function (a) {
	a = getEvent(a).keyCode;
	(a == KEY_ESC || a == KEY_TAB) && this.hide()
};
TimePicker.prototype.selectHour = function (a) {
	this.hoursDiv.childNodes[this.currentHour].className = "hour";
	this.currentHour = a;
	this.hoursDiv.childNodes[this.currentHour].className = "hour hover";
	this.showMinutes()
};
TimePicker.prototype.selectMinutes = function (a) {
	this.selectTime(this.currentHour, a)
};
TimePicker.prototype.selectTime = function (a, b) {
	this.hide();
	var c = new Date;
	c.setHours(a);
	c.setMinutes(b);
	c = DateUtil.getTimeStringFromUserLocale(c);
	if (!this.currentField.disabled && this.currentField.value != c && (this.currentField.value = c, this.currentField.onchange))
		this.currentField.onchange()
};
TimePicker.timePicker = null;
TimePicker.pickTime = function (a) {
	TimePicker.timePicker || (TimePicker.timePicker = new TimePicker);
	TimePicker.timePicker.show(a)
};
TimePicker.quickTime = function (a, b) {
	var c = getElementByIdCS(b);
	if (!c.disabled && c.value != a && (c.value = a, c.onchange))
		c.onchange()
};
var TreeNodeElement = function () {};
TreeNodeElement.prototype.collapsedWidget = new Image(20, 16);
TreeNodeElement.prototype.collapsedWidget.className = "plus";
TreeNodeElement.prototype.collapsedWidgetStart = new Image(20, 16);
TreeNodeElement.prototype.collapsedWidgetStart.className = "plusStart";
TreeNodeElement.prototype.collapsedWidgetEnd = new Image(20, 16);
TreeNodeElement.prototype.collapsedWidgetEnd.className = "plusEnd";
TreeNodeElement.prototype.expandedWidget = new Image(20, 16);
TreeNodeElement.prototype.expandedWidget.className = "minus";
TreeNodeElement.prototype.expandedWidgetStart = new Image(20, 16);
TreeNodeElement.prototype.expandedWidgetStart.className = "minusStart";
TreeNodeElement.prototype.expandedWidgetEnd = new Image(20, 16);
TreeNodeElement.prototype.expandedWidgetEnd.className = "minusEnd";
TreeNodeElement.prototype.getExpandedWidgetState = function (a) {
	return -1 != a.indexOf("Start") ? TreeNodeElement.prototype.expandedWidgetStart.className : -1 != a.indexOf("End") ? TreeNodeElement.prototype.expandedWidgetEnd.className : TreeNodeElement.prototype.expandedWidget.className
};
TreeNodeElement.prototype.getCollapsedWidgetState = function (a) {
	return -1 != a.indexOf("Start") ? TreeNodeElement.prototype.collapsedWidgetStart.className : -1 != a.indexOf("End") ? TreeNodeElement.prototype.collapsedWidgetEnd.className : TreeNodeElement.prototype.collapsedWidget.className
};
TreeNodeElement.prototype.toggle = function (a, c) {
	var b = document.getElementById(c);
	null != b && ((visible = "none" != b.style.display) ? (b.style.display = "none", a.className = TreeNodeElement.prototype.getCollapsedWidgetState(a.className)) : (b.style.display = "block", a.className = TreeNodeElement.prototype.getExpandedWidgetState(a.className)))
};
function TwistyElement(a, b, d, e, c) {
	this.twisty = document.getElementById(a);
	this.dep = document.getElementById(b);
	this.showLabel = d;
	this.hideLabel = e;
	if (this.twisty && this.dep) {
		c && (this.dep.style.display = "none");
		this.hidden = c;
		var f = this;
		addEvent(this.twisty.parentNode, "click", function (a) {
			f.twistElement(a)
		})
	}
}
TwistyElement.prototype.twistElement = function (a) {
	var b = Sfdc.get(".twistyText", this.twisty.parentNode);
	a = getEventTarget(getEvent(a));
	if (a === b || a === this.twisty)
		this.hidden ? (this.dep.style.display = "block", this.hidden = !1, this.twisty.className = "hideListButton", b.innerHTML = this.hideLabel) : (this.dep.style.display = "none", this.hidden = !0, this.twisty.className = "showListButton", b.innerHTML = this.showLabel)
};
function VerticallyArrangableSelectElement(a) {
	this.id = a;
	var c = this;
	sfdcPage.appendToOnloadQueue(function () {
		c.init()
	})
}
VerticallyArrangableSelectElement.prototype.init = function () {
	for (var a = document.getElementById(this.id).parentNode.parentNode.getElementsByTagName("img"), c = this.id, b = 0; a && b < a.length; b++)
		hasStyleClass(a[b], vaSelectElementConst.UP_CLASS) ? addEvent(a[b], "click", function () {
			moveUp(document.getElementById(c))
		}, !1) : hasStyleClass(a[b], vaSelectElementConst.DOWN_CLASS) && addEvent(a[b], "click", function () {
			moveDown(document.getElementById(c))
		}, !1)
};
var Captcha = {
	formName : "",
	submitButtonName : "",
	publicKey : "",
	recaptchaLang : "",
	dialog : null,
	verified : !1,
	click : function (a, c, e, d, b) {
		Captcha.formName = a;
		Captcha.submitButtonName = c;
		Captcha.publicKey = e;
		Captcha.recaptchaLang = b;
		Captcha.verified ? Captcha.proceed() : "undefined" == typeof Recaptcha ? Captcha.submitClientError() : (Captcha.dialog || (Captcha.dialog = new SimpleDialog("captcha_dialog", !0), Captcha.dialog.enter = Captcha.submit, Captcha.dialog.setupDefaultButtons(), Captcha.dialog.overrideButton(0, LC.getLabel("Buttons",
						"submit"), "Captcha.submit()"), Captcha.dialog.setWidth("350px"), Captcha.dialog.register(), a = [], a.push('\x3cdiv id\x3d"recaptcha_widget"\x3e'), a.push(LC.getLabel("CaptchaElement", "dialog")), a.push('\x3cdiv id\x3d"recaptcha_image"\x3e\x3c/div\x3e'), a.push('\x3cdiv id\x3d"incorrect" style\x3d"display:none;color:red"\x3e'), a.push(LC.getLabel("CaptchaElement", "incorrect")), a.push("\x3c/div\x3e"), a.push('\x3ctable class\x3d"captchaContent" border\x3d"0" cellpadding\x3d"0" cellspacing\x3d"0"\x3e'), a.push('  \x3ctr\x3e\x3ctd\x3e\x3cspan class\x3d"recaptcha_only_if_image"\x3e'),
				a.push(LC.getLabel("CaptchaElement", "imagePrompt")), a.push("\x3c/span\x3e"), a.push('          \x3cspan class\x3d"recaptcha_only_if_audio"\x3e'), a.push(LC.getLabel("CaptchaElement", "audioPrompt")), a.push("\x3c/span\x3e"), a.push('          \x3cinput id\x3d"recaptcha_response_field" name\x3d"recaptcha_response_field" type\x3d"text"\x3e'), a.push("      \x3c/td\x3e"), a.push('      \x3ctd style\x3d"width:25px;border-left:none;cursor:pointer"\x3e'), a.push('          \x3cimg src\x3d"' + UserContext.getUrl("/img/recaptcha_refresh.gif") +
					'" alt\x3d"' + LC.getLabel("CaptchaElement", "refresh") + '" title\x3d"' + LC.getLabel("CaptchaElement", "refresh") + '" onclick\x3d"Recaptcha.reload()"\x3e'), a.push('          \x3cimg class\x3d"recaptcha_only_if_image" src\x3d"' + UserContext.getUrl("/img/recaptcha_audio.gif") + '" alt\x3d"' + LC.getLabel("CaptchaElement", "audio") + '" title\x3d"' + LC.getLabel("CaptchaElement", "audio") + '" onclick\x3d"Recaptcha.switch_type(\'audio\')"\x3e'), a.push('          \x3cimg class\x3d"recaptcha_only_if_audio" src\x3d"' + UserContext.getUrl("/img/recaptcha_text.gif") +
					'" alt\x3d"' + LC.getLabel("CaptchaElement", "image") + '" title\x3d"' + LC.getLabel("CaptchaElement", "image") + '" onclick\x3d"Recaptcha.switch_type(\'image\')"\x3e'), null != d && 0 < d.length && a.push('          \x3cimg src\x3d"' + UserContext.getUrl("/img/recaptcha_help.gif") + '" alt\x3d"' + LC.getLabel("Buttons", "help") + '" title\x3d"' + LC.getLabel("Buttons", "help") + '" onclick\x3d"' + d + '"\x3e'), a.push("      \x3c/td\x3e"), a.push("  \x3c/tr\x3e"), a.push('  \x3ctr\x3e\x3ctd colspan\x3d"2" style\x3d"border:0px"\x3e'), Captcha.dialog.createButtons(a),
				a.push('\x3ca id\x3d"moreinfo" style\x3d"float:right" href\x3d"#" onclick\x3d"Captcha.toggleMoreinfo(true)"\x3e'), a.push(LC.getLabel("CaptchaElement", "moreinfo")), a.push("\x3c/a\x3e"), a.push("  \x3c/td\x3e\x3c/tr\x3e"), a.push('  \x3ctr\x3e\x3ctd colspan\x3d"2" style\x3d"border:0px"\x3e'), a.push('    \x3cdiv id\x3d"about" style\x3d"display:none"\x3e\x3cimg src\x3d"img/reCAPTCHAlogo.png" style\x3d"float:left;padding-right:5px"\x3e'), a.push('      \x3cdiv style\x3d"font-size:85%"\x3eSecurity test provided by \x3ca href\x3d"http://www.recaptcha.net" target\x3d"_blank"\x3ereCAPTCHA\x26trade;\x3c/a\x3e'),
				a.push("      \x3cbr\x3eThe words above come from scanned books.  By typing them, you help to digitize old texts.\x3c/div\x3e"), a.push('      \x3ca style\x3d"float:right" href\x3d"#" onclick\x3d"Captcha.toggleMoreinfo(false)"\x3e'), a.push(LC.getLabel("CaptchaElement", "lessinfo")), a.push("\x3c/a\x3e"), a.push("    \x3c/div\x3e"), a.push("  \x3c/td\x3e\x3c/tr\x3e"), a.push("\x3c/table\x3e"), a.push("\x3c/div\x3e"), Captcha.dialog.setContentInnerHTML(a.join(""))), Captcha.dialog.show(), Captcha.displayOnly())
	},
	toggleMoreinfo : function (a) {
		a ? (document.getElementById("about").style.display = "block", document.getElementById("moreinfo").style.display = "none") : (document.getElementById("about").style.display = "none", document.getElementById("moreinfo").style.display = "inline")
	},
	displayOnly : function () {
		Recaptcha.create(Captcha.publicKey, null, {
			callback : Recaptcha.focus_response_field,
			theme : "custom",
			lang : Captcha.recaptchaLang
		})
	},
	hide : function () {
		Captcha.dialog.hide()
	},
	submit : function () {
		Captcha.checkRecaptchaConnected() ? Captcha.verify() :
		Captcha.submitClientError();
		return !1
	},
	verify : function () {
		var a = Recaptcha.get_challenge(),
		c = Recaptcha.get_response();
		Recaptcha.destroy();
		Captcha.callVerifier(a, c, "false", Captcha.verifyResultCallback)
	},
	verifyResultCallback : function (a) {
		!0 == Util.evalAjaxServletOutput(a)[CaptchaVerifierServlet.VALID_KEY] ? (Captcha.verified = !0, Captcha.hide(), Captcha.proceed()) : (document.getElementById("incorrect").style.display = "block", Captcha.displayOnly())
	},
	proceed : function () {
		Captcha.formName ? document.forms[Captcha.formName][Captcha.submitButtonName].click() :
		window.location = document.getElementById(Captcha.submitButtonName).href
	},
	submitClientError : function () {
		Captcha.callVerifier("", "", "true", Captcha.proceed)
	},
	callVerifier : function (a, c, e, d) {
		var b = {};
		b[CaptchaVerifierServlet.CHALLENGE_PARAM] = a;
		b[CaptchaVerifierServlet.RESPONSE_PARAM] = c;
		b[CaptchaVerifierServlet.CLIENT_ERROR_PARAM] = e;
		a = UrlMap.convertClassNameToUrl(CaptchaVerifierServlet.SERVLET_NAME, null);
		Sfdc.Ajax.post(a, d, {
			data : b
		})
	},
	checkRecaptchaConnected : function () {
		return !!document.getElementById("recaptcha_image").innerHTML
	}
};
function MotifElement(a, b, c, d) {
	0 < arguments.length && this.init(a, b, c, d)
}
MotifElement.prototype.init = function (a, b, c, d) {
	this.motifElement = document.getElementById(a);
	this.motifDescCell = document.getElementById(b);
	this.motifIcon = document.getElementById(c);
	this.motifKey = d;
	this.motifElement.motifElement = this
};
MotifElement.prototype.getDescription = function () {
	return this.motifDescCell.firstChild.nodeValue
};
function MotifInputElement(a) {
	this.paramName = a;
	this.motifKeyInput = document.getElementById(a + MotifInputElementConst.FIELD_NAME_MOTIF);
	this.motifElement = document.getElementById(a + MotifInputElementConst.MOTIF_ELEMENT_SUFFIX);
	this.motifElementObj = this.motifElement.motifElement;
	this.motifDescInput = document.getElementById(a + MotifInputElementConst.FIELD_NAME_DESCRIPTION);
	this.motifDescCell = this.motifElementObj.motifDescCell;
	this.motifIconInput = document.getElementById(a + MotifInputElementConst.FIELD_NAME_ICON);
	this.motifIcon = this.motifElementObj.motifIcon;
	this.motifElement.motifInputElement = this;
	document.getElementById(a).motifInputElement = this
}
MotifInputElement.prototype.setIconSrc = function (a) {
	this.motifIcon.src = a
};
MotifInputElement.prototype.setIconValue = function (a) {
	this.motifIconInput.value = a
};
MotifInputElement.prototype.setMotifKey = function (a) {
	this.motifKeyInput.value = a
};
MotifInputElement.prototype.setDescription = function (a) {
	this.motifDescCell.firstChild ? this.motifDescCell.firstChild.nodeValue = a : this.motifDescCell.appendChild(document.createTextNode(a))
};
MotifInputElement.prototype.openWindow = function (a, b, c) {
	openPopup(a, this.paramName + "MotifPickerWindow", b, c, "width\x3d" + b + ",height\x3d" + c + ",dependent\x3dyes,resizable\x3dyes,toolbar\x3dno,status\x3dno,directories\x3dno,menubar\x3dno,scrollbars\x3d1", !0)
};
MotifInputElement.prototype.isNull = function () {
	return !(this.motifKeyInput.value && 0 < this.motifKeyInput.value.length)
};
function PickableMotifElement(d, c, b, e, f) {
	this.init(d, c, b, e);
	var a = this;
	window.opener && (this.parentMotifInputElementObj = window.opener.document.getElementById(f).motifInputElement);
	this.motifElement.onclick = function () {
		a.parentMotifInputElementObj.motifElement.className = a.motifElement.className;
		a.parentMotifInputElementObj.setDescription(a.getDescription());
		a.motifIcon && a.motifIcon.src && (a.parentMotifInputElementObj.setIconSrc(a.motifIcon.src), a.parentMotifInputElementObj.setIconValue(""));
		a.parentMotifInputElementObj.setMotifKey(a.motifKey);
		window.blur();
		window.close();
		return !1
	}
}
PickableMotifElement.prototype = new MotifElement;
PickableMotifElement.toggleUsedMotifVisibility = function (d) {
	for (var c = document.getElementsByTagName("a"), b = 0; b < c.length; b++)
		d && "none" == c[b].style.display && -1 < c[b].className.indexOf("motifElement") ? c[b].style.display = "block" : !d && (c[b].className && -1 < c[b].className.indexOf("usedMotif")) && (c[b].style.display = "none")
};
PickableMotifElement.doFontFixForIE7 = function () {
	document.getElementById("fontColorIE7Fix").style.zoom = "1"
};
PickableMotifElement.hideUsedStyle = function () {
	document.getElementById("hideUsedStyle").style.display = "none";
	document.getElementById("showUsedStyle").style.display = "block";
	PickableMotifElement.toggleUsedMotifVisibility(!1);
	Sfdc.userAgent.isIE7 && setTimeout("PickableMotifElement.doFontFixForIE7()", 250);
	return !1
};
PickableMotifElement.showUsedStyle = function () {
	document.getElementById("showUsedStyle").style.display = "none";
	document.getElementById("hideUsedStyle").style.display = "block";
	PickableMotifElement.toggleUsedMotifVisibility(!0);
	Sfdc.userAgent.isIE7 && setTimeout("PickableMotifElement.doFontFixForIE7()", 250);
	return !1
};
function DynamicCss() {
	this.cssLinks = [];
	this.readyToWrite = !1;
	this.delayedDocs = []
}
DynamicCss.prototype.isReadyToWrite = function () {
	return this.readyToWrite
};
DynamicCss.prototype.addCssUrl = function (b, a, c) {
	c ? this.cssLinks.unshift(new DynamicCss.CssLink(b, a)) : this.cssLinks.push(new DynamicCss.CssLink(b, a));
	if (1 === this.cssLinks.length && window.sfdcPage) {
		var e = this;
		window.sfdcPage.appendToOnloadQueue(function () {
			e.loadingComplete()
		})
	}
};
DynamicCss.prototype.loadingComplete = function () {
	this.readyToWrite = !0;
	0 < this.delayedDocs.length && this.writeToDelayedDocs()
};
DynamicCss.prototype.appendCssWhenReady = function (b, a) {
	this.delayedDocs.push({
		apiVersion : b,
		targetDoc : a
	})
};
DynamicCss.prototype.writeCss = function (b, a) {
	for (var c = 0; c < this.cssLinks.length; c++)
		a.write(this.cssLinks[c].getLink(b))
};
DynamicCss.prototype.writeToDelayedDocs = function () {
	for (var b = 0; b < this.delayedDocs.length; b++) {
		var a = this.delayedDocs[b].targetDoc,
		c = a && DynamicCss.getHead(a);
		if (c)
			for (var e = this.delayedDocs[b].apiVersion, d = 0; d < this.cssLinks.length; d++)
				c.appendChild(this.cssLinks[d].getLinkElement(e, a))
	}
	this.delayedDocs = []
};
DynamicCss.addCssUrl = function (b, a, c) {
	DynamicCss.instance.addCssUrl(b, a, c)
};
DynamicCss.doneLoading = function () {
	DynamicCss.instance.loadingComplete()
};
DynamicCss.writeCss = function (b, a, c) {
	DynamicCss.instance.isReadyToWrite() ? (DynamicCss.instance.writeCss(b, a), c || a.close()) : DynamicCss.instance.appendCssWhenReady(b, a)
};
DynamicCss.loadCSS = function (b, a) {
	var c = document.createElement("link");
	c.setAttribute("type", "text/css");
	c.setAttribute("href", a);
	c.setAttribute("rel", "stylesheet");
	b.appendChild(c)
};
DynamicCss.loadSkin = function (b, a) {
	var c = DynamicCss.getHead();
	if (c) {
		var e = "Theme2";
		b && b.userUiSkin && (e = b.userUiSkin);
		var d;
		d = a ? UserContext.getUrl("/sCSS/") + a : UserContext.getUrl("/dCSS");
		d = d + "/" + e + "/default";
		DynamicCss.loadCSS(c, d + "/common.css");
		DynamicCss.loadCSS(c, d + "/custom.css")
	}
};
DynamicCss.getHead = function (b) {
	b || (b = document);
	return (b = b.getElementsByTagName("head")) && 1 == b.length ? b[0] : null
};
DynamicCss.CssLink = function (b, a) {
	this.url = b;
	this.mediaType = a ? a : null
};
DynamicCss.CssLink.prototype.getUrl = function () {
	return this.url
};
DynamicCss.CssLink.prototype.getMediaType = function () {
	return this.mediaType
};
DynamicCss.CssLink.prototype.getFullUrl = function (b) {
	var a = this.getUrl();
	b && (DynamicCss.CssLink.URL_VERSION_REGEX || (DynamicCss.CssLink.URL_VERSION_REGEX = /sCSS\/[^/] *  / ), a = a.replace(DynamicCss.CssLink.URL_VERSION_REGEX, "sCSS/" + b));
	return a
};
DynamicCss.CssLink.prototype.getLink = function (b) {
	var a = [];
	a.push("\x3clink type\x3d'text/css' rel\x3d'stylesheet' href\x3d'");
	a.push(this.getFullUrl(b));
	a.push("'");
	this.getMediaType() && (a.push(" media\x3d'"), a.push(this.getMediaType()), a.push("'"));
	a.push("\x3e");
	return a.join("")
};
DynamicCss.CssLink.prototype.getLinkElement = function (b, a) {
	a || (a = document);
	var c = a.createElement("link");
	c.setAttribute("type", "text/css");
	c.setAttribute("rel", "stylesheet");
	c.setAttribute("href", this.getFullUrl(b));
	this.getMediaType() && c.setAttribute("media", this.getMediaType());
	return c
};
DynamicCss.instance = new DynamicCss;
var FilterEdit = function () {};
FilterEdit.prototype.disableDiv = function (a, c) {
	var b = document.getElementById(a);
	null != b && (b.disabled = c, b.selectedIndex = b.options.length - 1)
};
FilterEdit.prototype.setFocusOnSearch = function () {
	var a = document.getElementsByName(FilterEditPageConstants.pSEARCH_ANCHOR);
	a && 1 == a.length && a[0].focus()
};
function ListFilterColumn(a) {
	if (a && (this.columnName = a[InlineEditConstants.COLUMN_NAME], this.label = a[InlineEditConstants.COLUMN_LABEL], this.state = InlineEditState[a[InlineEditConstants.FIELD_STATE]], this.state == InlineEditState.EDIT))
		if (this.columnType = InlineEditField.resolveSwitchableField(a), this.columnType == ColumnType.PERSONNAME || this.columnType == ColumnType.SWITCHABLE_PERSONNAME)
			this.state = InlineEditState.NONE;
		else {
			this.fieldId = a[InlineEditConstants.FIELD_ID];
			this.columnId = a[InlineEditConstants.COLUMN_ID];
			this.required = a[InlineEditConstants.FIELD_REQUIRED];
			if ("FirstName" == this.columnId || "Salutation" == this.columnId)
				this.required = !1;
			var b = this.columnType.inlineEditExtraData;
			if (b) {
				this.extraData = {};
				for (var c = 0; c < b.length; c++)
					this.extraData[b[c]] = a[b[c]]
			}
			this.fieldObject = null
		}
}
ListFilterColumn.prototype.getFieldId = function () {
	if (this.fieldId) {
		var a = this.fieldId;
		this.columnId && (a += this.columnId);
		return a
	}
	return this.columnName
};
ListFilterColumn.prototype.createEditElements = function (a, b) {
	var c = this.getFieldId();
	null === b && (b = "", this.columnType == ColumnType.BOOLEAN ? b = !1 : this.columnType == ColumnType.DYNAMICENUM ? b = ["", "", null] : this.columnType == ColumnType.MULTIENUM ? b = null : this.columnType == ColumnType.ENTITYID && (b = ["", Udd.EMPTY_KEY]));
	this.fieldObject = new(this.columnType.inlineEditFieldConstructor())(c, this.state, this.required, !0, b, this.extraData);
	this.fieldObject.label = this.label;
	this.fieldObject.tableCell = a.parentNode;
	this.fieldObject.editDiv =
		a;
	this.fieldObject.createEditElements();
	this.fieldObject.created = !0
};
ListFilterColumn.prototype.setError = function (a) {
	this.fieldObject && this.fieldObject.setError(a)
};
ListFilterColumn.prototype.getDisplayValue = function () {
	if (this.fieldObject)
		return this.fieldObject.formatValue()
};
ListFilterColumn.prototype.addSaveData = function (a) {
	this.fieldObject.currentValue = this.fieldObject.getValueFromEdit();
	a.fieldId = this.fieldId;
	a.columnId = this.columnId;
	a.nullable = !this.required;
	this.fieldObject.addSaveData(a)
};
ListFilterColumn.prototype.onDisplay = function () {
	var a = this.fieldObject.editElement;
	a && (a.focus(), this.fieldObject.saveOnEnter && (a.onkeypress = function (a) {
			a = getEvent(a);
			a.keyCode == KEY_ENTER && (eventCancelBubble(a), document.getElementById("saveButton").click())
		}), "text" == a.type && a.select())
};
function ListInlineEditData(a) {
	if (null != a && (this.viewport = a.viewport, this.isEditable = a[InlineEditConstants.EDITABLE], this.columns = {}, this.currentRow = this.currentColumn = null, this.isEditable)) {
		this.isMassEditable = a[InlineEditConstants.MASS_EDITABLE];
		this.csrf_token = a[CSRFConstants.CSRF_TOKEN];
		this.entityType = a[InlineEditConstants.ENTITY_TYPE];
		this.isPersonAccount = a[InlineEditConstants.IS_PERSON];
		this.dynamicDataUrl = a[InlineEditConstants.DYNAMIC_DATA];
		this.nameLabel = a[InlineEditConstants.NAME_LABEL];
		this.editUrl = a[InlineEditConstants.SAVE_URL];
		"undefined" == typeof this.editUrl && (this.editUrl = "/_ui/common/udd/object/InlineEditListSave");
		var d = this;
		this.dynamicDataUrl && Sfdc.Resource.addJavaScript(this.dynamicDataUrl, function () {
			d.dynamicDataLoaded()
		});
		this.layoutInfo = a[InlineEditConstants.LAYOUT_INFO];
		for (var e = 0; e < a.shownColumns.length; e++) {
			var c = a.shownColumns[e],
			b = this.layoutInfo[c.fieldId];
			c.state = b ? b[0] : "READONLY";
			c.required = b ? b[1] : !1;
			if (this.isPersonAccount && c[InlineEditConstants.OVERRIDE_TYPE])
				c[InlineEditConstants.OVERRIDE_TYPE] =
					"PERSONNAME";
			else if (!this.isPersonAccount && "Account" == this.entityType && ("LastName" == c.columnId || "FirstName" == c.columnId || "Salutation" == c.columnId))
				c.state = "NONE";
			this.columns[c.columnName] = d.createNewListFilterColumn(c)
		}
		ListInlineEditData.dialog || (ListInlineEditData.dialog = this.getNewDialog("massEdit"), ListInlineEditData.dialog.useCSS = !0, ListInlineEditData.dialog.focusOnShow = !1, ListInlineEditData.dialog.displayX = !0, ListInlineEditData.dialog.setWidth(520), ListInlineEditData.dialog.extraClass = "inlineEditDialog",
			ListInlineEditData.dialog.register())
	}
}
ListInlineEditData.prototype.getNewDialog = function (a) {
	return new SimpleDialog(a, !1)
};
ListInlineEditData.prototype.createNewListFilterColumn = function (a) {
	return new ListFilterColumn(a)
};
ListInlineEditData.dialog = null;
ListInlineEditData.prototype.dynamicDataLoaded = function () {};
ListInlineEditData.prototype.getColumnById = function (a) {
	return this.columns[a]
};
ListInlineEditData.prototype.openColumn = function (a, d, e) {
	if ((d = this.columns[d]) && d.state == InlineEditState.EDIT) {
		this.currentColumn = d;
		this.currentRow = a;
		var c = this.viewport.grid.getSelectionModel().getCount();
		a = this.isMassEditable && 1 < c;
		var b = [];
		b.push("\x3cdiv class\x3d'fieldTableDiv'\x3e\x3ctable class\x3d'fieldTable' border\x3d'0'\x3e\x3ctr class\x3d'fieldRow'\x3e\x3ctd class\x3d'labelCol'\x3e");
		b.push(this.currentColumn.label);
		b.push("\x3c/td\x3e\x3ctd class\x3d'dataCol'\x3e");
		b.push("\x3cdiv id\x3d'massEditFieldDiv' class\x3d'");
		this.currentColumn.required ? b.push("inlineEditRequiredDiv") : b.push("inlineEditDiv");
		b.push("'\x3e\x3c/div\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e");
		a && (b.push("\x3ctable class\x3d'fieldTable'\x3e\x3ctr class\x3d'selectionRow'\x3e\x3ctd class\x3d'labelCol'\x3e"), b.push(LC.getLabel("MassListEdit", "EditLabel")), b.push("\x3c/td\x3e\x3ctd class\x3d'dataCol'\x3e"), b.push("\x3cdiv class\x3d'radio'\x3e\x3cinput type\x3d'radio' name\x3d'massOrSingleEdit' id\x3d'singleEditRadio' checked\x3d'checked'\x3e\x3clabel for\x3d'singleEditRadio'\x3e"),
			b.push(LC.getLabel("MassListEdit", "SingleEdit")), b.push("\x3c/label\x3e\x3c/div\x3e\x3cdiv class\x3d'radio'\x3e\x3cinput type\x3d'radio' name\x3d'massOrSingleEdit' id\x3d'massEditRadio'\x3e\x3clabel for\x3d'massEditRadio'\x3e"), b.push(LC.getLabel("MassListEdit", "MultiEdit", c)), b.push("\x3c/label\x3e\x3c/div\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e"));
		b.push("\x3cdiv class\x3d'inlineEditButtons'\x3e");
		b.push("\x3cinput class\x3d'btn' type\x3d'button' value\x3d'");
		b.push(LC.getLabel("Buttons", "save"));
		b.push("' id\x3d'saveButton'\x3e\x3cinput class\x3d'btn' type\x3d'button'value\x3d'");
		b.push(LC.getLabel("Buttons", "cancel"));
		b.push("' id\x3d'cancelButton'\x3e");
		b.push("\x3c/div\x3e");
		ListInlineEditData.dialog.setContentInnerHTML(b.join(""));
		ListInlineEditData.dialog.setTitle(LC.getLabel("List", "edit") + " " + this.currentColumn.label);
		c = document.getElementById("massEditFieldDiv");
		this.currentColumn.createEditElements(c, a ? null : e);
		var f = this;
		document.getElementById("saveButton").onclick = function () {
			f.save()
		};
		document.getElementById("cancelButton").onclick = function () {
			f.closeColumn()
		};
		d.columnType.isDate && (e = document.getElementById(DatePickerIds.DOM_ID), document.getElementById(ListInlineEditData.dialog.getContentId()).appendChild(e));
		ListInlineEditData.dialog.show();
		this.currentColumn.onDisplay()
	}
};
ListInlineEditData.prototype.save = function () {
	var a = {},
	d = document.getElementById("massEditRadio");
	a[InlineEditConstants.IDS] = this.isMassEditable && d && d.checked ? this.viewport.grid.getSelectionModel().selections.keys : this.currentRow;
	a[CSRFConstants.CSRF_TOKEN] = this.csrf_token;
	a[InlineEditConstants.ENTITY_TYPE] = this.entityType;
	a[InlineEditConstants.NULLABLE] = !this.currentColumn.required;
	this.currentColumn.addSaveData(a);
	ListInlineEditData.dialog.hide();
	this.viewport.beforeSave();
	var e = this;
	Sfdc.Ajax.post(UserContext.getUrl(this.editUrl),
		function (a) {
		e.handleSaveResponse(a)
	}, {
		data : a,
		escape : encodeURIComponent
	})
};
ListInlineEditData.prototype.closeColumn = function () {
	ListInlineEditData.dialog.hide();
	this.currentColumn = null
};
ListInlineEditData.prototype.handleSaveResponse = function (a) {
	a = Util.evalAjaxServletOutput(a);
	if (a.error) {
		var d = document.createElement("div");
		d.innerHTML = a.error;
		ListInlineEditData.dialog.getContentElement().appendChild(d);
		ListInlineEditData.dialog.show()
	} else
		a.fieldError ? (this.currentColumn.setError(a.fieldError), ListInlineEditData.dialog.show()) : a.errorsByRow && this.createErrorWindow(a.saved.length || 0, a.errorsByRow);
	if (a.error || a.fieldError || a.errorsByRow)
		this.csrf_token = a[CSRFConstants.CSRF_TOKEN];
	this.viewport.afterSave(a.saved, this.currentColumn)
};
ListInlineEditData.prototype.createErrorWindow = function (a, d) {
	var e = Sfdc.getUID(this),
	c = window.open("/_ui/common/list/InlineEditListErrorPopup?uuid\x3d" + e, "errorWin", "width\x3d720,height\x3d400,resizable\x3dyes", !1);
	if (c) {
		var b = [],
		f = 0,
		g;
		for (g in d)
			f++, b.push({
				entityId : g,
				name : d[g].name.replace(/"/g, '\\"'),
				errorDesc : d[g].errorDesc.replace(/"/g, '\\"')
			});
		ListInlineEditData.errors["error" + e] = {
			numSaved : a,
			numFailed : f,
			entityName : this.nameLabel,
			motifClassName : this.viewport.filter.bodyClass,
			errorData : {
				errorsByRow : b
			}
		};
		c.focus()
	}
};
ListInlineEditData.errors = {};
function RelatedList(a, c, d, b, g, k, m, e, n) {
	this.listId = a;
	this.visibleRowCount = c;
	this.title = d;
	this.listHasMore = b;
	this.refreshURL = g;
	this.refreshQS = k;
	this.isOnlySkipLink = m;
	this.shouldLoad = e;
	this.listCommonId = n;
	RelatedList.add(this)
}
(function () {
	var a = {};
	RelatedList.get = function (c) {
		return a[c]
	};
	RelatedList.getAll = function () {
		return a
	};
	RelatedList.add = function (c) {
		a[c.listId] = c
	}
})();
RelatedList.prototype = {
	baseListNode : null,
	getRelatedListNode : function () {
		this.baseListNode || (this.baseListNode = document.getElementById(this.listId));
		return this.baseListNode
	},
	getLinkTarget : function () {
		return this.listId + "_target"
	},
	isHoverEnabled : function () {
		return !this.isOnlySkipLink
	},
	getTitle : function () {
		if (!Sfdc.isDefAndNotNull(this.title)) {
			var a = Sfdc.select("H3", this.getRelatedListNode())[0];
			this.title = Sfdc.Dom.getText(a) || ""
		}
		return this.title
	},
	hasMore : function () {
		Sfdc.isDefAndNotNull(this.listHasMore) ||
		(this.listHasMore = !!Sfdc.get(".pShowMore", this.getRelatedListNode()));
		return this.listHasMore
	},
	getNumberVisibleRows : function () {
		Sfdc.isDefAndNotNull(this.visibleRowCount) || (this.visibleRowCount = Sfdc.select("tr.dataRow:not(.extraRow)", this.getRelatedListNode()).length);
		return this.visibleRowCount
	},
	refresh : function (a, c) {
		if (this.refreshURL && this.refreshQS) {
			qs = this.refreshQS;
			if (a) {
				for (var d = [], b = 0, g = a.length; b < g; b++)
					d.push(a[b] + "\x3d" + c[b]);
				qs = qs + "\x26" + d.join("\x26")
			}
			this.callRelatedListAction(null, this.refreshURL,
				qs)
		}
	},
	showXMore : function (a, c) {
		if (window.sfdcPage && window.sfdcPage.makeRLAjaxRequest) {
			var d = {
				rowsperlist : a,
				keepPref : 1
			};
			if (c) {
				var b = document.getElementById(c);
				b && (d[c] = b.value)
			}
			window.sfdcPage.makeRLAjaxRequest(null, this.listId, d)
		}
	},
	showMoreList : function (a, c) {
		this.callRelatedListAction(null, a, c)
	},
	performActionAndRefreshList : function (a) {
		var c = this.listId,
		d = this;
		Sfdc.Ajax.request(a, {
			success : function () {
				window.sfdcPage.makeRLAjaxRequest(null, c);
				Sfdc.Event.fireEvent(d, "relatedList:onAction", {
					data : [a]
				})
			},
			failure : function () {
				window.location = a
			}
		})
	}
};
RelatedList.prototype.callRelatedListAction = function (a, c, d, b, g, k, m) {
	var e = this;
	this.makeRequest(a, c, d, function (a) {
		if (a) {
			if (window.sfdcPage && window.sfdcPage.hasNoRelatedList && window.sfdcPage.hasNoRelatedList(a, e.listId)) {
				var d = {};
				d[DynamicContent.pCOOKIE_PARAM] = null;
				c = Sfdc.Url.generateUrl(c, d, {
						allowMultipleOfParam : !0
					});
				window.location = c
			}
			if (!window.sfdcPage || !window.sfdcPage.checkActionCanceled || !window.sfdcPage.checkActionCanceled(a, e.listId)) {
				var l = g || e.listId,
				f = Sfdc.get(b || e.listId, document);
				a = Sfdc.get(l,
						a);
				d = sfdcPage.relatedListPanel;
				if (f && a) {
					if (Sfdc.userAgent.isIE || Sfdc.userAgent.isSafari || Sfdc.userAgent.isOpera)
						f.innerHTML = a.innerHTML, window.sfdcPage && window.sfdcPage.evalScripts && window.sfdcPage.evalScripts(f);
					else {
						var h = document.createElement(f.tagName);
						h.style.display = "none";
						var k = document.getElementsByTagName("body")[0];
						k.appendChild(h);
						f.innerHTML = "";
						var p = Util.stripScriptsUnderElement(a);
						h.innerHTML = a.innerHTML;
						for (Util.evalScriptList(p); h.firstChild; )
							f.appendChild(h.removeChild(h.firstChild));
						k.removeChild(h)
					}
					window.sfdcPage && window.sfdcPage.hook_postRelatedListActionUpdate && window.sfdcPage.hook_postRelatedListActionUpdate(c);
					f.id != l && (f.id = l);
					e.visibleRowCount = null;
					e.listHasMore = null;
					d && (l = [], f = d.getIFrameNode().contentWindow.document.getElementById(e.listId), h = document.getElementById(d.getLinkId(e.listId)), f && f.innerHTML && (f.innerHTML = a.innerHTML, d.fixContent(f), h && (h.className && -1 < h.className.indexOf("linkletOn")) && d.showRL(e.listId, !0)), h && (l.push('\x3cspan class\x3d"listTitle"\x3e'),
							l.push(e.getTitle()), l.push(d.getCountIndicator(e)), l.push("\x3c/span\x3e"), h.innerHTML = l.join("")));
					m && m()
				}
			}
		}
	})
};
RelatedList.prototype.makeRequest = function (a, c, d, b) {
	function g(a) {
		return a
	}
	function k(a, c) {
		var b = new Date;
		b.setTime(b.getTime() + 6E5);
		var l = DynamicContent.pCOOKIE_PARAM + b.getTime();
		Sfdc.Cookie.setCookie(l, d, b);
		b = {};
		b[DynamicContent.pCOOKIE_PARAM] = l;
		b[DynamicContent.pTYME] = (new Date).getTime();
		a = Sfdc.Url.generateUrl(a, b, {
				escape : g,
				unescape : g,
				allowMultipleOfParam : !0
			});
		try {
			Sfdc.Ajax.request(a, {
				success : function (a, b) {
					c(m.parseResult(a))
				},
				failure : function (b, c) {
					m.handleRequestError(m.parseResult(b), a)
				},
				escape : g
			})
		} catch (f) {
			Sfdc.error(f)
		}
	}
	var m = this;
	a ? k(a, function () {
		k(c, b)
	}) : k(c, b)
};
RelatedList.prototype.parseResult = function (a) {
	var c = "parserFrame" + (new Date).getTime(),
	d = "div" + c,
	b = document.body,
	g = document.createElement("div");
	Sfdc.userAgent.isSafari || (g.style.display = "none");
	g.id = d;
	b.appendChild(g);
	g.innerHTML = isSafari ? '\x3ciframe src\x3d"javascript:false" style\x3d"height:1px;width:1px" id\x3d"' + c + '" name\x3d"' + c + '"\x3e\x3c/iframe\x3e' : '\x3ciframe src\x3d"javascript:false" style\x3d"display:none;" id\x3d"' + c + '" name\x3d"' + c + '"\x3e\x3c/iframe\x3e';
	c = document.getElementById(c);
	b = null;
	try {
		var k = a.toLowerCase(),
		m = k.indexOf("\x3ctable"),
		e = a.substring(m, k.length),
		b = c.contentWindow || c.contentDocument;
		b.document && (b = b.document);
		b.open();
		b.write("\x3chtml\x3e\x3cbody\x3e\x3c/body\x3e\x3c/html\x3e");
		b.close();
		b.body.innerHTML = e
	} catch (n) {
		Sfdc.error(n)
	}
	finally {
		setTimeout(function () {
			var a = document.body,
			b = document.getElementById(d);
			b && a.removeChild(b)
		}, 5E3)
	}
	return b
};
RelatedList.prototype.handleRequestError = function (a, c) {
	if (window.sfdcPage && window.sfdcPage.desktopAjaxDisplayErrorInline && window.sfdcPage.desktopAjaxDisplayErrorInline()) {
		var d = a.getElementById(DynamicContent.pERROR_TITLE),
		b = a.getElementById(DynamicContent.pERROR_DESC);
		d && (d = d.innerHTML, b && (d = d + "\n\n" + b.innerHTML), alert(d))
	} else
		b = {},
	b[DynamicContent.pCOOKIE_PARAM] = null,
	c = Sfdc.Url.generateUrl(c, b),
	Sfdc.Url.navigateTo(c)
};
window.Ext && (window.Ext.grid && window.Ext.grid.GridView) && (Ext.ns("Sfdc", "Sfdc.grid"), Sfdc.grid.GridView = Ext.extend(Ext.grid.GridView, {
			lastClickedRow : null,
			sortState : {
				field : null,
				dir : null
			},
			onRowSelect : function (a) {
				var b = this.grid.store.getAt(a).id;
				if (b = getElementByIdCS(b))
					b.checked = !0, updateToggleAllBox(b.form, "ids");
				this.addRowClass(a, "x-grid3-row-selected");
				this.grid.viewport.paginator.selectedOnThisPage++
			},
			onRowDeselect : function (a) {
				var b = this.grid.store.getAt(a).id;
				if (b = getElementByIdCS(b))
					b.checked =
						!1, updateToggleAllBox(b.form, "ids");
				this.removeRowClass(a, "x-grid3-row-selected");
				this.grid.viewport.paginator.selectedOnThisPage--
			},
			initTemplates : function () {
				var a = this.templates || {};
				a.master || (a.master = new Ext.Template('\x3cdiv class\x3d"x-grid3" hidefocus\x3d"true"\x3e', '\x3cdiv class\x3d"x-grid3-viewport"\x3e', '\x3cdiv class\x3d"x-grid3-header"\x3e\x3cdiv class\x3d"x-grid3-header-inner"\x3e\x3cdiv class\x3d"x-grid3-header-offset"\x3e{header}\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"x-clear"\x3e\x3c/div\x3e\x3c/div\x3e',
							'\x3cdiv class\x3d"x-grid3-scroller"\x3e\x3cdiv class\x3d"x-grid3-body"\x3e{body}\x3c/div\x3e\x3ca href\x3d"#" class\x3d"x-grid3-focus" tabIndex\x3d"-1"\x3e\x3c/a\x3e\x3c/div\x3e', "\x3c/div\x3e", '\x3cdiv class\x3d"x-grid3-resize-marker"\x3e\x26#160;\x3c/div\x3e', '\x3cdiv class\x3d"x-grid3-resize-proxy"\x3e\x26#160;\x3c/div\x3e', "\x3c/div\x3e"));
				a.header || (a.header = new Ext.Template('\x3ctable border\x3d"0" cellspacing\x3d"0" cellpadding\x3d"0" style\x3d"{tstyle}"\x3e', '\x3cthead\x3e\x3ctr class\x3d"x-grid3-hd-row"\x3e{cells}\x3c/tr\x3e\x3c/thead\x3e',
							"\x3c/table\x3e"));
				a.hcell || (a.hcell = new Ext.Template('\x3ctd class\x3d"x-grid3-hd x-grid3-cell x-grid3-td-{id}" style\x3d"{style}"\x3e\x3cdiv {tooltip} {attr} class\x3d"x-grid3-hd-inner x-grid3-hd-{id}" style\x3d"{istyle}"\x3e', this.grid.enableHdMenu ? '\x3ca class\x3d"x-grid3-hd-btn" href\x3d"#"\x3e\x3c/a\x3e' : "", '{value}\x3cimg class\x3d"x-grid3-sort-icon" src\x3d"', Ext.BLANK_IMAGE_URL, '" /\x3e', "\x3c/div\x3e\x3c/td\x3e"));
				a.body || (a.body = new Ext.Template("{rows}"));
				var b = '\x3ctable class\x3d"x-grid3-row-table" border\x3d"0" cellspacing\x3d"0" cellpadding\x3d"0" style\x3d"{tstyle}"\x3e\x3ctbody\x3e\x3ctr\x3e{cells}\x3c/tr\x3e' +
					(this.enableRowBody ? '\x3ctr class\x3d"x-grid3-row-body-tr" style\x3d"{bodyStyle}"\x3e\x3ctd colspan\x3d"{cols}" class\x3d"x-grid3-body-cell" tabIndex\x3d"0" hidefocus\x3d"on"\x3e\x3cdiv class\x3d"x-grid3-row-body"\x3e{body}\x3c/div\x3e\x3c/td\x3e\x3c/tr\x3e' : "") + "\x3c/tbody\x3e\x3c/table\x3e";
				a.row || (a.row = new Ext.Template('\x3cdiv class\x3d"x-grid3-row {alt}" style\x3d"{tstyle}"\x3e' + b + "\x3c/div\x3e"));
				a.rowInner || (a.rowInner = new Ext.Template(b));
				a.cell || (a.cell = new Ext.Template('\x3ctd class\x3d"x-grid3-col x-grid3-cell x-grid3-td-{id} {css}" style\x3d"{style}" tabIndex\x3d"0" {cellAttr}\x3e',
							'\x3cdiv class\x3d"x-grid3-cell-inner x-grid3-col-{id}" id\x3d"{domId}" {attr}\x3e{value}\x3c/div\x3e', "\x3c/td\x3e"));
				for (var c in a)
					if ((b = a[c]) && "function" == typeof b.compile && !b.compiled)
						b.disableFormats = !0, b.compile();
				this.templates = a;
				this.tdClass = "x-grid3-cell";
				this.cellSelector = "td.x-grid3-cell";
				this.hdCls = "x-grid3-hd";
				this.rowSelector = "div.x-grid3-row";
				this.colRe = /x-grid3-td-([^\s]+)/
			},
			doRender : function (a, b, c, d, e, g) {
				for (var k = this.templates, n = k.cell, k = k.row, l = e - 1, t = [], r, h, f = {}, q = {
						tstyle : "width:" +
						this.getTotalWidth() + ";"
					}, m, s = 0, v = b.length; s < v; s++) {
					m = b[s];
					r = [];
					for (var u = s + d, p = 0; p < e; p++) {
						h = a[p];
						f.domId = m.id + "_" + h.id;
						f.id = h.id;
						f.css = 0 == p ? "x-grid3-cell-first " : p == l ? "x-grid3-cell-last " : "";
						f.attr = f.cellAttr = "";
						f.value = h.renderer(m.data[h.name], f, m, u, p, c);
						f.style = h.style;
						if (void 0 == f.value || "" === f.value)
							f.value = "\x26#160;";
						m.dirty && "undefined" !== typeof m.modified[h.name] && (f.css += " x-grid3-dirty-cell");
						r[r.length] = n.apply(f)
					}
					h = [];
					g && 0 == (u + 1) % 2 && (h[0] = "x-grid3-row-alt");
					m.dirty && (h[1] = " x-grid3-dirty-row");
					q.cols = e;
					this.getRowClass && (h[2] = this.getRowClass(m, u, q, c));
					q.alt = h.join(" ");
					q.cells = r.join("");
					t[t.length] = k.apply(q)
				}
				return t.join("")
			},
			getColumnStyle : function (a, b) {
				return Sfdc.grid.GridView.superclass.getColumnStyle.call(this, a, !1)
			},
			setScrollOffset : function () {
				this.innerHd && this.getOffsetWidth && (this.innerHd.firstChild.style.width = this.getOffsetWidth())
			},
			sizeColumnToContent : function (a) {
				for (var b = 0, c = this.getRows().length, d = this.grid.getColumnModel().getColumnWidth(a) - 2, e = null, g = 0; g < c; g++) {
					var k =
						this.getCell(g, a).firstChild,
					n = k.scrollWidth;
					if (0 == n) {
						if (e)
							continue;
						if (this.grid && this.grid.el.dom && !Sfdc.Dom.isVisible(this.grid.el.dom))
							e = this.grid.el.dom;
						else
							for (var l = k; l && l != k.ownerDocument; ) {
								if (!Sfdc.Dom.isVisible(l)) {
									e = l;
									break
								}
								l = l.parentNode
							}
						e && (Sfdc.Dom.show(e), n = k.scrollWidth)
					}
					n != d && n > b && (b = n)
				}
				e && Sfdc.Dom.hideByDisplay(e);
				0 == b || b == d + 2 || this.grid.getColumnModel().setColumnWidth(a, b + 8)
			},
			handleHdMenuClick : function (a) {
				var b = a.getItemId();
				if ("asc" == b || "desc" == b) {
					a = this.cm.getDataIndex(this.hdCtxIndex);
					var b = b.toUpperCase(),
					c = this.sortState;
					if (a && (Ext.isEmpty(c) || c.field != a || c.dir != b))
						this.fireEvent("sfdc.updateSort", this, a, b), this.updateSortIcon(this.hdCtxIndex, b), this.sortState = {
							field : a,
							dir : b
						}
				} else
					Sfdc.grid.GridView.superclass.handleHdMenuClick.call(this, a)
			},
			beforeColMenuShow : function () {
				var a = this.colMenu,
				b = this.cm,
				c = function (a) {
					return (a = b.getColumnById(a)) && !a.hidden
				};
				0 < a.items.getCount() ? a.items.each(function (a) {
					var b = a.getItemId(),
					b = c(this._availableColumnsLookup[b].id);
					a.setChecked(b);
					a.enable()
				},
					this) : Ext.each(this._availableColumns, function (b) {
					var e = c(b.id);
					b = new Ext.menu.CheckItem({
							text : b.header,
							itemId : b.dataIndex,
							hideOnClick : !0,
							checked : e,
							cls : "x-menu-item-" + b.dataIndex
						});
					a.add(b)
				})
			},
			handleHdDown : function (a, b) {
				Sfdc.grid.GridView.superclass.handleHdDown.call(this, a, b);
				if (Ext.fly(b).hasClass("x-grid3-hd-btn")) {
					var c = this.cm,
					d = this.findHeaderCell(b),
					d = this.getCellIndex(d),
					c = c.getColumnAt(d).isSortable,
					d = this.hmenu.items;
					d.get("asc").setDisabled(!c);
					d.get("desc").setDisabled(!c)
				}
			},
			setAvailableColumns : function (a) {
				this._availableColumns =
					a;
				this._availableColumnsLookup = {};
				Ext.each(a, function (a) {
					this._availableColumnsLookup[a.dataIndex] = a
				}, this)
			},
			handleHdMenuClickDefault : function (a) {
				var b = this.cm,
				c = a.getItemId(),
				d = b.findColumnIndex(c),
				e = this.cm.getDataIndex(this.hdCtxIndex),
				g = b.config;
				if (Ext.isDefined(this._availableColumnsLookup[c]))
					if (a.checked) {
						if (-1 != d)
							if (a.checked && 1 >= b.getColumnsBy(this.isHideableColumn, this).length)
								this.onDenyColumnHide();
							else
								this.grid.getStore().recordType.prototype.fields.removeKey(c), g.splice(d, 1), b.setConfig(g),
								this.fireEvent("sfdc.removeColumn", this, c)
					} else
						a = this.hdCtxIndex + 1, -1 != d ? b.moveColumn(d, a) : (d = new Ext.data.Field({
									name : c
								}), this.grid.getStore().recordType.prototype.fields.add(d), b.config = [], g.splice(a, 0, this._availableColumnsLookup[c]), b.setConfig(g)), this.fireEvent("sfdc.addColumn", this, e, c)
			}
		}), Sfdc.grid.CheckboxSelectionModel = Ext.extend(Ext.grid.RowSelectionModel, {
			header : "\x3cinput type\x3d'checkbox' id\x3d'allBox' value\x3d''/\x3e",
			width : 20,
			sortable : !1,
			fixed : !0,
			dataIndex : "",
			id : "checkbox",
			renderer : function (a,
				b, c) {
				a = "";
				if (this.scope && this.scope.titleFieldKey)
					if (b = c.data && c.data[this.scope.titleFieldKey], Sfdc.isDefAndNotNull(b)) {
						Sfdc.isString(b) ? a = b : Sfdc.isArray(b) && (Sfdc.isArray(b[1]) ? a = b[1][1] : b[1] && (a = b[1]));
						Sfdc.isDefAndNotNull(a) && !Sfdc.isString(a) && (a = a.toString());
						if (Sfdc.isEmpty(a) || "\x26nbsp;" == a)
							a = LC.getLabel("listviewMessages", "emptytitle");
						a = Sfdc.String.escapeToHtml(a)
					} else
						a = "";
				return ['\x3cinput id\x3d"', c.id, '" value\x3d"', c.id, '" title\x3d"', a, '" type\x3d"checkbox" class\x3d"checkbox" name\x3d"ids"/\x3e'].join("")
			},
			initEvents : function () {
				Sfdc.grid.CheckboxSelectionModel.superclass.initEvents.call(this);
				this.grid.on("render", function () {
					var a = this.grid.getView();
					a.mainBody.on("mousedown", this.onMouseDown, this);
					a.mainBody.on("mouseup", this.onMouseUp, this);
					a.mainBody.on("keypress", this.onKeyPress, this);
					Ext.fly(a.innerHd).on("mousedown", this.onHdMouseDown, this);
					Ext.fly(a.innerHd).on("mouseup", this.onHdMouseUp, this);
					Ext.fly(a.innerHd).on("keypress", this.onKeyPress, this);
					Sfdc.userAgent.isIE9 && (a.mainBody.on("dblclick",
							this.handleDoubleClick, this), Ext.fly(a.innerHd).on("dblclick", this.handleDoubleClick, this))
				}, this);
				this.on("beforerowselect", this.onBeforeRowSelect, this)
			},
			maxSelections : 200,
			selectRow : function (a, b, c) {
				if (this.locked || 0 > a || a >= this.grid.store.getCount())
					return !1;
				if (this.isSelected(a))
					return !0;
				var d = this.grid.store.getAt(a);
				if (d && !1 !== this.fireEvent("beforerowselect", this, a, b, d)) {
					(!b || this.singleSelect) && this.clearSelections();
					this.selections.add(d);
					this.last = this.lastActive = a;
					if (!c)
						this.grid.getView().onRowSelect(a);
					this.fireEvent("rowselect", this, a, d);
					this.fireEvent("selectionchange", this);
					this.grid.viewport.paginator.setSelectCount(this.selections.length)
				} else
					return !1;
				return !0
			},
			deselectRow : function (a, b) {
				if (!this.locked && this.isSelected(a)) {
					this.last = a;
					var c = this.grid.store.getAt(a);
					if (c) {
						this.selections.removeKey(c.id);
						if (!b)
							this.grid.getView().onRowDeselect(a);
						this.fireEvent("rowdeselect", this, a, c);
						this.fireEvent("selectionchange", this);
						this.grid.viewport.paginator.setSelectCount(this.selections.length)
					}
				}
			},
			selectRows : function (a, b) {
				b || this.clearSelections();
				for (var c = 0, d = a.length; c < d && this.selectRow(a[c], !0); c++);
			},
			selectRange : function (a, b, c) {
				if (!this.locked)
					if (c || this.clearSelections(), a <= b)
						for (; a <= b && this.selectRow(a, !0); a++);
					else
						for (; a >= b && this.selectRow(a, !0); a--);
			},
			deselectRange : function (a, b, c) {
				if (!this.locked)
					if (a <= b)
						for (; a <= b; a++)
							this.deselectRow(a, c);
					else
						for (; a >= b; a--)
							this.deselectRow(a, c)
			},
			clearAllSelections : function () {
				this.clearSelections();
				this.selections.clear();
				this.grid.viewport.paginator.setSelectCount(0);
				this.grid.viewport.paginator.selectedOnThisPage = 0
			},
			clearSelections : function () {
				for (var a = 0, b = this.grid.store.getCount(); a < b; a++)
					this.deselectRow(a);
				this.last = !1
			},
			selectAll : function () {
				if (!this.locked)
					for (var a = 0, b = this.grid.store.getCount(); a < b && this.selectRow(a, !0); a++);
			},
			onBeforeRowSelect : function (a, b, c, d) {
				if (this.selections.length >= this.maxSelections)
					return alert(LC.getLabel("List", "selectionLimit", this.maxSelections)), !1
			},
			handleMouseDown : function (a, b, c) {},
			onEditorKey : function (a, b) {},
			onMouseDown : function (a,
				b) {
				if (0 === a.button && "checkbox" == b.className) {
					a.stopEvent();
					var c = a.getTarget(".x-grid3-row");
					if (c) {
						c = c.rowIndex;
						if (a.shiftKey && !1 !== this.last) {
							var d = this.last;
							this.isSelected(d) ? this.selectRange(d, c, !0) : this.deselectRange(d, c);
							this.last = d
						} else
							this.isSelected(c) ? this.deselectRow(c) : this.selectRow(c, !0);
						this.lastClickedRow = b
					}
				} else
					this.lastClickedRow = null
			},
			onMouseUp : function (a, b) {
				if (0 === a.button && "checkbox" == b.className) {
					a.stopEvent();
					var c = a.getTarget(".x-grid3-row");
					if (c && b == this.lastClickedRow &&
						(c = this.grid.store.getAt(c.rowIndex).id, c = getElementByIdCS(c)))
						c.checked = !c.checked
				}
				this.lastClickedRow = null
			},
			onHdMouseDown : function (a, b) {
				0 === a.button ? "allBox" == b.id && (a.stopEvent(), b.checked ? this.clearSelections() : this.selectAll(), this.lastClickedRow = b) : this.lastClickedRow = null
			},
			onHdMouseUp : function (a, b) {
				0 === a.button && ("allBox" == b.id && this.lastClickedRow == b) && (b.checked = !b.checked);
				this.lastClickedRow = null
			},
			handleDoubleClick : function (a, b) {
				if (("checkbox" == b.className || "allBox" == b.id) && Sfdc.userAgent.isIE9)
					b.checked =
						!b.checked
			},
			onKeyPress : function (a, b) {
				if ((31 === a.button || 32 === a.keyCode) && "checkbox" == b.type)
					a.button = 0, "allBox" == b.id ? (this.onHdMouseDown(a, b), this.onHdMouseUp(a, b)) : (this.onMouseDown(a, b), this.onMouseUp(a, b))
			},
			onRefresh : function () {
				var a = getElementByIdCS("allBox");
				a && (a.checked = !1);
				var a = this.grid.store,
				b,
				c = this.getSelections();
				this.grid.viewport.paginator && (this.grid.viewport.paginator.selectedOnThisPage = 0);
				for (var d = [], e = 0, g = c.length; e < g; e++)
					if (-1 != (b = a.indexOfId(c[e].id)))
						this.grid.getView().onRowSelect(b);
					else
						d.push("\x3cinput type\x3d'hidden' name\x3d'ids' value\x3d'"), d.push(c[e].id), d.push("'/\x3e");
				Sfdc.Dom.updateHTML(this.grid.viewport.offPageIds, d.join(""));
				c.length != this.selections.getCount() && this.fireEvent("selectionchange", this);
				this.last = !1;
				this.grid.viewport.paginator && this.grid.viewport.paginator.draw(0 === this.grid.viewport.paginator.totalRecords)
			}
		}));
var ActivityReminder = {
	_REMINDER_COOKIE : "reminderCookie",
	_REMINDER_INTERVAL : 5E3,
	_LOCK_COOKIE : "reminderLockCookie",
	_MAX_COOKIE_LENGTH : 4096,
	initialize : function (a, b, c) {
		ActivityReminder._isPopup = b;
		ActivityReminder._launched = (new Date).getTime();
		ActivityReminder._currentSchedule = a;
		ActivityReminder._checkScheduleUpdates();
		ActivityReminder._isPopup && (c || (ActivityReminder._isBlur = !1, setTimeout("ActivityReminder._pseudoFlash()", 500), ActivityReminder._subscribeEvents()), ActivityReminder._popupCountdown(), ActivityReminder._setupMeetingSummary(),
			ActivityReminder._setupSnoozeDismiss(), ActivityReminder._updateSchedule(), ActivityReminder._closeIfEmpty(), updateToggleAllBox(document.forms.reminder, "ids"), window.onresize = ActivityReminder._resizeToFitHorizontalChange, ActivityReminder._resizeToFitHorizontal())
	},
	_subscribeEvents : function () {
		addEvent(window, "focus", ActivityReminder._wasFocused, !1);
		addEvent(window, "blur", ActivityReminder._wasBlured, !1);
		var a = document.getElementById(ActivityReminderConstants.REMINDER_ID);
		addEvent(a, "keydown", ActivityReminder._cancelReturnSubmit);
		a = document.getElementById(ActivityReminderConstants.DISMISS_ALL_ID);
		addEvent(a, "click", ActivityReminder._handleDismissAll)
	},
	_cancelReturnSubmit : function (a) {
		if ((window.event.keyCode || a.keyCode || a.which) == Sfdc.Event.keyCode.ENTER)
			event.cancelBubble = !0, event.returnValue = !1
	},
	_checkScheduleUpdates : function () {
		var a = getCookie(ActivityReminder._REMINDER_COOKIE);
		a && (ActivityReminder._currentSchedule = a.split(","), setTimeout("deleteCookie(ActivityReminder._REMINDER_COOKIE)", ActivityReminder._REMINDER_INTERVAL));
		for (var a = (new Date).getTime(), b = !1, c = [], d = 0; d < ActivityReminder._currentSchedule.length; d++)
			Number(ActivityReminder._currentSchedule[d]) <= a + 2 * ActivityReminder._REMINDER_INTERVAL ? b || (ActivityReminder._schedule(ActivityReminder._currentSchedule[d]), b = !0) : c.push(ActivityReminder._currentSchedule[d]);
		ActivityReminder._currentSchedule = c;
		setTimeout("ActivityReminder._checkScheduleUpdates()", ActivityReminder._REMINDER_INTERVAL)
	},
	_schedule : function (a) {
		var b = Number(a) - (new Date).getTime();
		2E3 > b && (b = 2E3);
		ActivityReminder._isPopup &&
		(b += 1E4);
		a = Number(a) - ActivityReminder._launched;
		!ActivityReminder._isPopup && -72E5 >= a ? setTimeout("ActivityReminder._showPopup(false)", b) : setTimeout("ActivityReminder._showPopupIfRequired()", b)
	},
	_updateSchedule : function () {
		var a = ActivityReminder._currentSchedule.join(","),
		b = new Date((new Date).getTime() + 2 * ActivityReminder._REMINDER_INTERVAL);
		a.length <= ActivityReminder._MAX_COOKIE_LENGTH && setCookie(ActivityReminder._REMINDER_COOKIE, a, b)
	},
	_showPopupIfRequired : function () {
		var a = (new Date).getTime();
		Sfdc.Ajax.get(UrlMap.convertClassNameToUrl(ActivityReminderRefreshPage.pCLASS_NAME) +
			"?at\x3d" + a, function (a) {
			var c = a.indexOf(ActivityReminderConstants.REMINDERS_OK);
			0 > c ? (c = a.indexOf(ActivityReminderConstants.REMINDERS_NONE), 0 > c && ActivityReminder._showPopup()) : ActivityReminder._showPopup()
		})
	},
	_showPopup : function (a) {
		if (!getCookie(ActivityReminder._LOCK_COOKIE)) {
			var b = new Date((new Date).getTime() + 5E3);
			setCookie(ActivityReminder._LOCK_COOKIE, "shown", b);
			var b = isFirefox ? "yes" : "no",
			c = (new Date).getTime(),
			d = 320;
			isNetscape && isIE && (d += 40);
			c = (b = window.parent.open(UrlMap.convertClassNameToUrl(ActivityReminderPage.pCLASS_NAME) +
						"?at\x3d" + c + (!0 == a ? "\x26test\x3d1" : ""), "Reminder", "width\x3d450,height\x3d" + d + ",status\x3dno,location\x3d" + b + ",dependent\x3dno,resizable\x3dyes,toolbar\x3dno,directories\x3dno,menubar\x3dno,scrollbars\x3dyes", !1)) && !b.closed;
			a && !c ? alert(LC.getLabel("Page_ActivityReminder", "popup_blocked")) : c && b.focus()
		}
	},
	_popupCountdown : function () {
		for (var a = (new Date).getTime(), b = 0; ; b++) {
			var c = document.getElementById(ActivityReminderConstants.DUE_MINUTES_ID + b);
			if (!c)
				break;
			var d = c.getAttribute(ActivityReminderConstants.DUE_TIME_ATTR);
			0 != d && ActivityReminder._updateTime(c, d - a)
		}
		ActivityReminder._enableSnoozeOptions();
		setTimeout("ActivityReminder._popupCountdown()", 3E4)
	},
	_updateTime : function (a, b) {
		var c = Math.round(b / 6E4),
		d = a.firstChild,
		e;
		0 > c ? (e = !0, c = -c) : e = !1;
		c = ActivityReminder._formatDuration(c, e);
		e && (c = LC.getLabel("Page_ReminderSettings", "overdue", c));
		d.nodeValue = c
	},
	_formatDuration : function (a, b) {
		if (60 <= a) {
			var c = b ? Math.floor(a / 60) : Math.ceil(a / 60);
			return 24 <= c ? (c = Math.floor(c / 24), 1 == c ? LC.getLabel("Page_ReminderSettings", "day", c) : LC.getLabel("Page_ReminderSettings",
					"days", c)) : 1 == c ? LC.getLabel("Page_ReminderSettings", "hour", c) : LC.getLabel("Page_ReminderSettings", "hours", c)
		}
		return 1 == a ? LC.getLabel("Page_ReminderSettings", "minute", a) : LC.getLabel("Page_ReminderSettings", "minutes", a)
	},
	showLink : function (a) {
		var b = ActivityReminder._stopFlash = !0;
		try {
			if (b = !window.opener || window.opener.closed || window.opener == window, !b)
				try {
					b = !window.opener.document
				} catch (c) {
					b = !0
				}
		} catch (d) {}

		b ? window.open(a, null, "", !1) : (b = window.opener.document.getElementById("mainFrame")) && "IFRAME" == b.tagName ?
		b.src = a + "?" + Desktop.IS_DESKTOP + "\x3dmn" : window.opener.isServiceDeskPage ? window.opener.openLinkFromTaskReminder(a) : window.opener.location = a
	},
	_closeIfEmpty : function () {
		for (var a = 0, b = 0; ; b++)
			if (document.getElementById("ids" + b))
				a++;
			else
				break;
		a || setTimeout("window.close()", 10)
	},
	_setupMeetingSummary : function () {
		var a = Sfdc.select(".dataRow");
		if (a)
			for (var b = 0; b < a.length; b++)
				addEvent(a[b], "mouseover", function (a) {
					return function (b) {
						eventCancelBubble(b);
						ActivityReminder._displayMeeting(a)
					}
				}
					(b));
		a = document.getElementById(ActivityReminderConstants.REMINDER_ID);
		addEvent(a, "mouseover", function (a) {
			ActivityReminder._displayMeeting()
		});
		ActivityReminder._displayMeeting()
	},
	_displayMeeting : function (a) {
		if ("undefined" == typeof a)
			for (var b = 0; ; b++) {
				var c = document.getElementById("ids" + b);
				if (!c) {
					a = 0;
					break
				}
				if (c.checked) {
					a = b;
					break
				}
			}
		for (b = 0; ; b++) {
			c = document.getElementById(ActivityReminderConstants.SUMMARY_ID + b);
			if (!c)
				break;
			c.style.display = b == a ? "block" : "none"
		}
	},
	_setupSnoozeDismiss : function () {
		for (var a = 0; ; a++) {
			var b = document.getElementById("ids" + a);
			if (!b)
				break;
			addEvent(b,
				"click", ActivityReminder._reenableSnoozeDismiss)
		}
		(a = document.getElementById("allBox")) && addEvent(a, "click", ActivityReminder._reenableSnoozeDismiss);
		ActivityReminder._reenableSnoozeDismiss()
	},
	updateBrowserTime : function () {
		document.getElementById(ActivityReminderConstants.pSNOOZED_AT).value = (new Date).getTime()
	},
	_reenableSnoozeDismiss : function () {
		for (var a = !1, b = 0; ; b++) {
			var c = document.getElementById("ids" + b);
			if (!c)
				break;
			if (c.checked) {
				a = !0;
				break
			}
		}
		b = a ? "btn" : "btnDisabled";
		document.getElementById(ActivityReminderConstants.SNOOZE_ID).disabled =
			!a;
		document.getElementById(ActivityReminderConstants.SNOOZE_ID).className = b;
		document.getElementById(ActivityReminderConstants.SNOOZE_TIME_ID).disabled = !a;
		document.getElementById(ActivityReminderConstants.DISMISS_ID).disabled = !a;
		document.getElementById(ActivityReminderConstants.DISMISS_ID).className = b;
		ActivityReminder._enableSnoozeOptions()
	},
	_enableSnoozeOptions : function () {
		for (var a = (new Date).getTime(), b, c = 0; ; c++) {
			var d = document.getElementById(ActivityReminderConstants.DUE_MINUTES_ID + c);
			if (!d)
				break;
			if (document.getElementById("ids" + c).checked) {
				var e = d.getAttribute(ActivityReminderConstants.DUE_TIME_ATTR),
				d = d.getAttribute(ActivityReminderConstants.ALL_DAY_ATTR),
				e = e - a;
				if (!b || b > e)
					b = e;
				"true" == d && (b = 0)
			}
		}
		for (var a = document.getElementById(ActivityReminderConstants.SNOOZE_TIME_ID), f = a.childNodes, k = !1, e = [0, 5, 10, 15], c = 0; c < e.length; c++) {
			for (var d = e[c], f = a.childNodes, h = null, l = f.length - 1; 0 <= l; l--) {
				var g = f[l];
				if (g.text && g.value == -d) {
					h = g;
					break
				}
			}
			6E4 * (d + 1.5) <= b ? h || (g = document.createElement("option"), f = 0 == d ? LC.getLabel("Page_ReminderSettings",
						"hours_before", d) : LC.getLabel("Page_ReminderSettings", "minutes_before", d), f = document.createTextNode(f), g.appendChild(f), g.value = -d, a.insertBefore(g, a.firstChild), k = !0) : h && (!0 == h.selected && (k = !0), a.removeChild(h))
		}
		if (!0 == k) {
			f = a.childNodes;
			for (c = 0; c < f.length; c++)
				if (g = f[c], g.text) {
					g.selected = "true";
					break
				}
		}
	},
	_handleDismissAll : function () {
		ActivityReminder.selectAll()
	},
	selectAll : function () {
		for (var a = 0; ; a++) {
			var b = document.getElementById("ids" + a);
			if (!b)
				break;
			b.checked = !0
		}
	},
	_wasFocused : function () {
		ActivityReminder._isBlur =
			!1
	},
	_wasBlured : function () {
		ActivityReminder._isBlur = !0
	},
	_pseudoFlash : function () {
		ActivityReminder._originalTitle || (ActivityReminder._originalTitle = document.title);
		var a = ActivityReminder._flashCount;
		a ? a++ : a = 1;
		ActivityReminder._flashCount = a;
		var b = isNetscape ? 6 : 12;
		(!0 != ActivityReminder._isBlur || !0 == ActivityReminder._stopFlash || isNetscape) && ActivityReminder._flashCount > b ? document.title = ActivityReminder._originalTitle : (document.title = 1 == a % 2 ? LC.getLabel("Page_ActivityReminder", "new_flash") : ActivityReminder._originalTitle,
				setTimeout("ActivityReminder._pseudoFlash()", 500))
	},
	testPopup : function () {
		setTimeout("ActivityReminder._showPopup(true)", 1500)
	},
	_resizeToFitHorizontalChange : function () {
		if (isIE && document.documentElement.clientWidth != ActivityReminder._oldWidth) {
			ActivityReminder._oldWidth = document.documentElement.clientWidth;
			var a = Sfdc.select(".maxHorizontal"),
			b = !1,
			c;
			for (c in a) {
				var d = a[c];
				d.style.width && null != d.style.width && (d.style.width = null, b = !0)
			}
			b && window.setTimeout("ActivityReminder._resizeToFitHorizontal()", 100)
		}
	},
	_resizeToFitHorizontal : function () {
		if (isNetscape && !isIE) {
			var a = Sfdc.select(".maxHorizontal"),
			b = 0,
			c;
			for (c in a) {
				var d = a[c],
				e = d.offsetWidth;
				d.style.width = "200px";
				d.style.overflow = "hidden"
			}
			a[0] && (a[0].parentNode.parentNode.parentNode.style.height = "auto")
		} else if (isIE) {
			var a = Sfdc.get(".bRelatedList"),
			d = Sfdc.get(".list").offsetWidth + 4,
			f = document.documentElement.clientWidth - (a.offsetWidth < d ? d : a.offsetWidth);
			if (0 != f) {
				a = Sfdc.select(".maxHorizontal");
				b = 0;
				for (c in a)
					d = a[c], e = d.offsetWidth, b = Math.max(b, e);
				b =
					Math.max(100, b + f);
				for (c in a)
					d = a[c], d.style.width = b + "px"
			}
		}
	}
};
function DetailPage(a) {
	this.relatedListPanel = null;
	this.editMode = !1;
	this.inlineEditData = null;
	this.detailButtons = [];
	this.editButtons = [];
	this.permanentErrorDivHtml = this.errorDiv = null;
	this.saving = !1;
	this.entityId = a;
	this.scriptsToNotCopy = "/ext.js /Chatter.js /ChatterDefer.js /GuidedTour.js /HighlightsPanel.js /SideTabs.js EntitlementTimeline.js /datacloud/datacloud.listview.Jigsaw/datacloud.listview.Jigsaw.nocache.js".split(" ");
	this.domIdToEditPageMap = [];
	this.editPageDelegates = []
}
DetailPage.prototype = new GenericSfdcPage;
DetailPage.REFRESH_EVENT = "refresh";
DetailPage.prototype.registerRelatedListPanel = function (a, b) {
	this.relatedListPanel = new RelatedListPanel(a, b)
};
DetailPage.prototype.getRelatedListPanel = function () {
	return this.relatedListPanel
};
DetailPage.prototype.getEntityId = function (a) {
	if (this.domIdToEditPageMap[a])
		return this.editPageDelegates[this.domIdToEditPageMap[a]].getEntityId(a);
	if (this.entityId)
		return this.entityId;
	a = window.location.href.split("?")[0].split("/");
	return this.entityId = a[a.length - 1]
};
DetailPage.prototype.evalScripts = function (a) {
	a = a.getElementsByTagName("script");
	for (var b = 0; b < a.length; b++)
		eval(a[b].innerHTML)
};
DetailPage.prototype.hasNoRelatedList = function (a, b) {
	return getElementByIdCSWithDoc(a, b) ? !1 : !0
};
DetailPage.prototype.desktopAjaxDisplayErrorInline = function () {
	return !1
};
DetailPage.prototype.hook_postRelatedListActionUpdate = function (a) {};
DetailPage.prototype.getReferredDomIds = function (a) {
	return this.domIdToEditPageMap[a] ? this.editPageDelegates[this.domIdToEditPageMap[a]].getReferredDomIds(a) : this.getFieldById(a).lookupControllerIds
};
DetailPage.prototype.getFieldValueById = function (a) {
	if (this.domIdToEditPageMap[a])
		return this.editPageDelegates[this.domIdToEditPageMap[a]].getFieldValueById(a);
	if (a = this.getFieldById(a))
		return a = a.currentValue, a.constructor === Array ? a[1] : a
};
DetailPage.prototype.initInlineEdit = function (a) {
	this.inlineEditData = a;
	if (a.isEditable) {
		var b = this;
		this.appendToOnloadQueue(function () {
			b.inlineEditData.init()
		}, "Initialize inline edit");
		this.appendToOnloadQueue(function () {
			b.initializeButtons()
		}, "Setup detail buttons")
	}
};
DetailPage.prototype.getInlineEditData = function (a) {
	return this.inlineEditData
};
DetailPage.prototype.getFieldById = function (a) {
	var b = this.getInlineEditData(a);
	if (b)
		return -1 != a.search(InlineEditConstants.CELL_ID + "$") ? b.getField(a.substring(0, a.length - InlineEditConstants.CELL_ID.length)) : b.getField(a)
};
DetailPage.prototype.initializeButtons = function () {
	function a(a) {
		var c = document.getElementById(a),
		f = c.getElementsByTagName("input");
		for (a = 0; a < f.length; a++) {
			var e = f[a];
			"button" == e.type && (e.name == InlineEditConstants.SAVE_BUTTON || e.name == InlineEditConstants.CANCEL_BUTTON ? b.editButtons.push(e) : b.detailButtons.push(e))
		}
		c = c.getElementsByTagName("div");
		for (a = 0; a < c.length; a++)
			f = c[a], "menuButton" == f.className && b.detailButtons.push(f)
	}
	var b = this;
	a(DetailElement.TOP_BUTTON_ROW);
	a(DetailElement.BOTTOM_BUTTON_ROW)
};
DetailPage.prototype.focusOnSave = function () {
	this.editButtons[0].focus()
};
DetailPage.prototype.activateInlineEditMode = function () {
	this.errorDiv || (this.errorDiv = document.getElementById(DetailElement.DEFAULT_ERROR_DIV_ID + (this.visualforce ? "_" + this.visualforce : "")));
	this.editMode = !0;
	for (var a = 0; a < this.detailButtons.length; a++)
		this.detailButtons[a].style.display = "none";
	for (a = 0; a < this.editButtons.length; a++)
		this.editButtons[a].style.display = "inline";
	this.toggleCleanStatus(!1);
	this.updateDirtyState(GenericSfdcPage.STATE_DIRTY)
};
DetailPage.prototype.deactivateInlineEditMode = function () {
	this.editMode = !1;
	for (var a = 0; a < this.detailButtons.length; a++)
		this.detailButtons[a].style.display = "inline";
	for (a = 0; a < this.editButtons.length; a++)
		this.editButtons[a].style.display = "none";
	this.toggleCleanStatus(!0);
	this.clearError();
	this.updateDirtyState(GenericSfdcPage.STATE_CLEAN)
};
DetailPage.prototype.toggleCleanStatus = function (a) {
	var b = Sfdc.get(DetailElement.DEFAULT_DETAIL_ELEMENT_ID);
	if (b)
		for (var b = Sfdc.select(".dataDotComCleanStatusIcon", b), d = 0; d < b.length; d++)
			a ? delStyleClass(b[d], "dataDotComCleanStatusIconDisabled") : addStyleClass(b[d], "dataDotComCleanStatusIconDisabled")
};
DetailPage.prototype.setError = function (a) {
	if (this.saving) {
		this.saving = !1;
		for (var b = 0; b < this.editButtons.length; b++)
			this.editButtons[b].className = "btn", this.editButtons[b].name == InlineEditConstants.SAVE_BUTTON ? this.editButtons[b].value = LC.getLabel("Buttons", "save") : this.editButtons[b].name == InlineEditConstants.CANCEL_BUTTON && (this.editButtons[b].value = LC.getLabel("Buttons", "cancel"))
	}
	a ? (this.errorDiv.innerHTML && (this.permanentErrorDivHtml = this.errorDiv.innerHTML), this.errorDiv.innerHTML = a) : this.clearError();
	this.errorDiv.style.display = "block";
	this.notifyAriaErrorMsg();
	this.updateDirtyState(GenericSfdcPage.STATE_ERROR)
};
DetailPage.prototype.clearError = function (a) {
	this.errorDiv.style.display = "none";
	this.permanentErrorDivHtml && (this.errorDiv.innerHTML = this.permanentErrorDivHtml)
};
DetailPage.prototype.refreshDetail = function () {
	var a = window.location.href,
	b = a.indexOf("#");
	-1 != b && (a = a.substring(0, b));
	navigateToUrl(a, "DETAIL");
	this.callListeners(DetailPage.REFRESH_EVENT)
};
DetailPage.prototype.save = function () {
	if (!this.saving && this.editMode) {
		this.saving = !0;
		for (var a = 0; a < this.editButtons.length; a++)
			this.editButtons[a].className = "btnDisabled", this.editButtons[a].value = LC.getLabel("Buttons", "saving");
		this.inlineEditData.save()
	}
};
DetailPage.prototype.revert = function () {
	!this.saving && this.editMode && (this.inlineEditData.revert(), this.deactivateInlineEditMode())
};
DetailPage.prototype.dblClickField = function (a, b) {
	Jiffy.mark(OverlayDialog.LOAD_MARK);
	var d = getEventTarget(getEvent(a));
	if ("a" != d.nodeName.toLowerCase()) {
		var c = this.getFieldById(b.id);
		c && c.state == InlineEditState.EDIT && (this.editMode || this.activateInlineEditMode(d.id), this.getInlineEditData(d.id).isCurrentField(c) || (c && (null !== c.id && null !== InlineEditField.overlay) && (InlineEditField.overlay.focusPointId = c.id), this.getInlineEditData(d.id).openField(c)), eventCancelBubble(a))
	}
};
DetailPage.prototype.clickField = function (a, b) {
	var d = this.getFieldById(b.id);
	d && this.getInlineEditData(b.id).isCurrentField(d) && eventCancelBubble(a)
};
DetailPage.prototype.mouseOverField = function (a, b) {
	var d = this.getFieldById(b.id);
	d && (delStyleClass(b, d.getCSSClass()), addStyleClass(b, d.getCSSHoverClass()))
};
DetailPage.prototype.mouseOutField = function (a, b) {
	var d = this.getFieldById(b.id);
	d && (delStyleClass(b, d.getCSSHoverClass()), addStyleClass(b, d.getCSSClass()))
};
DetailPage.prototype.doRelatedListAjax = function () {
	var a = this;
	this.appendToOnloadQueue(function () {
		if (a.relatedListsById) {
			var b = [],
			d;
			for (d in a.relatedListsById)
				b.push(d);
			a.makeRLAjaxRequest(a.getEntityId(), b)
		}
	}, "rlAjax: Making Ajax request for related list data")
};
DetailPage.prototype.makeRLAjaxRequest = function (a, b, d) {
	Jiffy.mark("RL");
	var c = UserContext.getUrl("/_ui/common/list/RelatedListServlet");
	a = a || this.getEntityId();
	b = b || "";
	d = d || {};
	var f = this.visualforce || "",
	e = new QueryString,
	g = window.location.pathname;
	Sfdc.resolve("Sfdc.servicedeskview") && (g = Sfdc.Url.generateUrl(g, e.params));
	d = Sfdc.apply(d, {
			parentId : a,
			rlId : b,
			visualforce : f,
			retURL : g
		});
	d = Sfdc.apply(d, e.params);
	Sfdc.Ajax.post(c, function (a) {
		window.sfdcPage.handleRLAjaxResponse(a)
	}, {
		data : d,
		escape : encodeURIComponent
	})
};
DetailPage.prototype.handleRLAjaxResponse = function (a) {
	Jiffy.measure("rlResponse", "RL");
	var b;
	try {
		b = Util.evalAjaxServletOutput(a)
	} catch (d) {
		window.location.reload()
	}
	if (b.exElem)
		this.handleRLAjaxException(b.exElem);
	else {
		if (b.rls) {
			a = [];
			for (var c in b.rls) {
				var f = getElementByIdCS(c + "_title"),
				e = Sfdc.select("td.pbButton", getElementByIdCS(c))[0],
				g = getElementByIdCS(c + "_body");
				f && (e && g) && (b.rls[c].title && Sfdc.Dom.updateHTML(f, b.rls[c].title), b.rls[c].buttons && (e.currentStyle && (b.rls[c].buttons = '\x3cspan style\x3d"display:none" id\x3d"__REMOVE"\x3e.\x3c/span\x3e' +
								b.rls[c].buttons), Sfdc.Dom.updateHTML(e, b.rls[c].buttons), e.currentStyle && Sfdc.Dom.removeChild(document.getElementById("__REMOVE"), !0), this.relatedListPanel && this.relatedListPanel.getIFrameNode() && DomUtil.copyScripts(e, this.relatedListPanel.getIFrameNode().contentWindow.document, this.scriptsToNotCopy), Util.evalScriptsUnderElement(e)), f = document.createElement("div"), Sfdc.Dom.updateHTML(f, b.rls[c].content), g.parentNode.replaceChild(f.firstChild, g), this.relatedListsById[c].visibleRowCount = null, this.relatedListsById[c].listHasMore =
						null, this.relatedListsById[c].shouldLoad = !1, a.push(this.relatedListsById[c]))
			}
			this.relatedListPanel && this.relatedListPanel.refresh(a)
		}
		if (b.devFooterHTML && (c = document.getElementById("ajaxPlSql")))
			c.innerHTML = b.devFooterHTML;
		Jiffy.measure("rlDisplay", "RL")
	}
};
DetailPage.prototype.handleRLAjaxException = function (a) {
	var b = document.createElement("div");
	b.innerHTML = a;
	a = Sfdc.select("div.bRelatedList", Sfdc.get("bodyCell"));
	a[0].parentNode.replaceChild(b, a[0]);
	for (b = 1; b < a.length; b++)
		Sfdc.Dom.removeChild(a[b], !0);
	this.relatedListPanel && (b = this.relatedListPanel.getHoverableLinksNode(), Sfdc.Dom.removeChild(b, !0))
};
DetailPage.prototype.extractActionId = function (a) {
	var b = a.indexOf("__09D");
	return -1 == b ? "" : a.substring(b + 2)
};
DetailPage.prototype.registerDependentLookup = function (a, b, d) {
	var c;
	c = d ? d : this.extractActionId(a);
	if ("" !== c) {
		this.editPageDelegates[c] || (this.editPageDelegates[c] = new EditPage(d));
		this.editPageDelegates[c].registerDependentLookup(a, b, d);
		this.domIdToEditPageMap[a] = c;
		for (a = 0; a < b.length; a++)
			this.domIdToEditPageMap[b[a]] = c
	}
};
function EditPage(a) {
	this.saved = !1;
	this.submitButtons = [];
	this.originalButtonClasses = [];
	this.originalButtonValues = [];
	this.pressedButton = null;
	this.entityId = a;
	this.dependentLks = {};
	this.controllerToControlledLookups = {};
	var b = this;
	void 0 !== a && this.appendToOnloadQueue(function () {
		b.initLookups()
	}, "Initialize dependent lookups");
	this.updateDirtyState(GenericSfdcPage.STATE_DIRTY)
}
EditPage.prototype = new GenericSfdcPage;
EditPage.prototype.initButtons = function (a) {
	for (var b = this, c = 0; c < a.length; c++)
		for (var e = document.getElementsByName(a[c]), d = 0; d < e.length; d++)
			this.submitButtons.push(e[d]), this.originalButtonClasses.push(e[d].className), this.originalButtonValues.push(e[d].value), addEvent(e[d], "click", function (a) {
				b.pressedButton = getEventTarget(a)
			}, !1)
};
EditPage.prototype.getEntityId = function () {
	return this.entityId
};
EditPage.prototype.getSubmitButtons = function () {
	return this.submitButtons
};
EditPage.prototype.registerDependentLookup = function (a, b) {
	this.dependentLks[a] = b;
	for (var c = b.length - 1; 0 <= c; c--)
		this.controllerToControlledLookups[b[c]] ? this.controllerToControlledLookups[b[c]].push(a) : this.controllerToControlledLookups[b[c]] = [a]
};
EditPage.prototype.getReferredDomIds = function (a) {
	return this.dependentLks[a]
};
EditPage.prototype.getLookupFieldsControlledBy = function (a) {
	return this.controllerToControlledLookups[a]
};
EditPage.prototype.disableSaveButtons = function () {
	if (this.saved)
		return !1;
	(!this.pressedButton || this.pressedButton.name != EditPageConstants.pCANCEL) && this.disableButtons();
	return this.saved = !0
};
EditPage.prototype.disableButtons = function () {
	for (var a = 0; a < this.submitButtons.length; a++)
		this.submitButtons[a].className = "btnDisabled", this.submitButtons[a].value = LC.getLabel("Buttons", "saving")
};
EditPage.prototype.enableSaveButtons = function () {
	if (this.saved) {
		for (var a = 0; a < this.submitButtons.length; a++)
			this.submitButtons[a].className = this.originalButtonClasses[a], this.submitButtons[a].value = this.originalButtonValues[a];
		this.saved = !1;
		return !0
	}
	return !1
};
EditPage.prototype.focusAutosubmittedLookupField = function () {
	var a = Sfdc.get(EditElement.pAUTO_SUBMITTED_FROM);
	a && (a = Sfdc.get(a.value), a.focus(), a.select())
};
EditableListPage = function () {
	EditPage.call(this, "000000000000000")
};
Util.extend(EditableListPage, EditPage);
function FormulaEditor() {}

FormulaEditor.init = function (a, b, c, d) {
	FormulaEditor.editorElementId = a;
	FormulaEditor.functionSelectionElementId = b;
	FormulaEditor.formId = c;
	FormulaEditor.validationStatusNotValidated = d;
	FormulaEditor.setFunctionInfo(FormulaEditor.getSelectedFunction())
};
FormulaEditor.setFunctionInfo = function (a) {
	a && (document.getElementById("funcFormat").innerHTML = functionNameToPrototypeMap[a], document.getElementById("funcExplain").innerHTML = functionNameToDescriptionMap[a])
};
FormulaEditor.getSelectedFunction = function () {
	functionSelectElement = document.getElementById(FormulaEditor.functionSelectionElementId);
	return !functionSelectElement || -1 == functionSelectElement.selectedIndex ? null : functionSelectElement.options[functionSelectElement.selectedIndex].value
};
FormulaEditor.setListToCategory = function (a, b, c, d, e) {
	c = document.getElementById(c);
	a = b["" != a ? a : d];
	e = e ? 1 : 0;
	c.options.length = e;
	if (a)
		for (b = 0; b < a.length; b++)
			c.options[b + e] = a[b]
};
FormulaEditor.switchMode = function (a) {
	document.getElementById("editorMode").value != a && (document.getElementById("editorMode").value = a, document.getElementById("changeEditorMode").value = "1", document.getElementById(FormulaEditor.formId).submit())
};
FormulaEditor.formulaKeypressEventListener = function () {
	var a = document.getElementById("validationStatus");
	a && (a.innerHTML = FormulaEditor.validationStatusNotValidated)
};
FormulaEditor.registerFormulaEventListeners = function (a) {
	setCurrentParamName(a);
	a = getDoc();
	a.addEventListener ? a.addEventListener("keypress", FormulaEditor.formulaKeypressEventListener, !1) : a.onkeypress = FormulaEditor.formulaKeypressEventListener
};
FormulaEditor.insertFieldReference = function (a, b, c) {
	var d = b.options[b.selectedIndex].value;
	d && (FormulaEditor.insertCode(a, d, c), b.selectedIndex = 0)
};
FormulaEditor.insertCode = function (a, b, c) {
	restoreSelection(document.getElementById(a));
	b = c && !findDelimiters(a, "{!", "}") ? "{!" + b + "}" : " " + b + " ";
	insertTextAtSelectionInEditor(a, b)
};
FormulaEditor.submit = function (a) {
	var b = a.form;
	if (b) {
		var c = b.selectedFormulaText,
		d = b.CalculatedFormula;
		c && d && (d = this.getSelectedText(d), c.value = d ? d : "");
		try {
			a.type = "hidden"
		} catch (e) {
			var c = a.parentNode,
			d = a.name,
			f = a.value;
			c.removeChild(a);
			a = document.createElement("input");
			a.type = "hidden";
			a.name = d;
			a.value = f;
			c.appendChild(a)
		}
		b.submit()
	}
};
FormulaEditor.initDebugTool = function () {
	var a = document.getElementById("editPage");
	if (a) {
		var b = a.selectedFormulaText,
		c = a.CalculatedFormula;
		if (b && c && b.value && 0 < b.value.length) {
			var d = c.value.indexOf(b.value);
			-1 != d && (c.setSelectionRange ? (c.focus(), c.setSelectionRange(d, d + b.value.length)) : c.createTextRange && (c.focus(), c = c.createTextRange(), c.collapse(!0), c.moveEnd("character", d + b.value.length), c.moveStart("character", d), c.select()))
		}
		b && Sfdc.Event.add(a, "keypress", function (a) {
			if (Sfdc.Event.isKeyAction(a,
					Sfdc.Event.keyCode.ENTER) && !Sfdc.Event.getEventTarget(a, "TEXTAREA")) {
				var b = Sfdc.Event.getEventTarget(a, "INPUT");
				(!b || "button" != b.type && "submit" != b.type) && Sfdc.Event.stop(a)
			}
		})
	}
};
FormulaEditor.getSelectedText = function (a) {
	if (document.selection) {
		if (document.selection.createRange().parentElement().name == a.name)
			return document.selection.createRange().text
	} else
		return a.value.substring(a.selectionStart, a.selectionEnd)
};
function GoogleTalk(b, e, f) {
	this.gadget = b;
	this.gadgetUrl = f;
	this.resizeBar = e;
	this.resizeBarOrigHeight = e.style.height;
	this.mouseStatus = "up";
	this.popupWindow = function () {};
	this.showOnExitOverlay = !0;
	b = getCookie(GoogleTalkConstants.HEIGHT_COOKIE);
	this.expandedHeight = null == b || 0 == b ? GoogleTalkConstants.EXPANDED_HEIGHT : b;
	this.gadget.height != GoogleTalkConstants.COLLAPSED_HEIGHT && (this.gadget.src = this.gadgetUrl);
	GoogleTalk.prototype.toggle = function (a, b) {
		var c = this.gadget.height == GoogleTalkConstants.COLLAPSED_HEIGHT;
		this.gadget.height = c ? this.expandedHeight : GoogleTalkConstants.COLLAPSED_HEIGHT;
		this.gadget.src = c ? this.gadgetUrl : UrlMap.getURL("BlankPage");
		var d = new Date;
		d.setTime(d.getTime() + 31536E7);
		setCookie(GoogleTalkConstants.COLLAPSED_COOKIE, c ? "0" : "1", d);
		c ? (b.style.display = "inline", a.style.display = "none") : (b.style.display = "none", a.style.display = "inline");
		this.resizeBar.style.display = c ? "block" : "none";
		"undefined" != typeof resizeFramesToFit && resizeFramesToFit()
	};
	GoogleTalk.prototype.resize = function (a) {
		"down" == this.mouseStatus &&
		(a = parseInt(this.curHeight + parseInt(("undefined" == typeof event ? a : event).clientY - this.curPos)), a = a < GoogleTalkConstants.MIN_EXPANDED_HEIGHT ? GoogleTalkConstants.MIN_EXPANDED_HEIGHT : a, this.gadget.height = a)
	};
	GoogleTalk.prototype.setStartDrag = function (a) {
		a = "undefined" == typeof event ? a : event;
		this.resizeBar.style.height = "39px";
		var b = this.gadget.height - 35;
		this.gadget.height = b > GoogleTalkConstants.MIN_EXPANDED_HEIGHT ? b : GoogleTalkConstants.MIN_EXPANDED_HEIGHT;
		this.mouseStatus = "down";
		this.curPos = a.clientY;
		this.curHeight =
			parseInt(this.gadget.height);
		document.body.onmousemove = function (a) {
			GoogleTalk.prototype.theGadget.resize(a)
		};
		document.body.onmouseup = function (a) {
			GoogleTalk.prototype.theGadget.setEndDrag(a)
		}
	};
	GoogleTalk.prototype.setEndDrag = function (a) {
		"down" == this.mouseStatus && (this.mouseStatus = "up", this.resizeBar.style.height = this.resizeBarOrigHeight, a = new Date, a.setTime(a.getTime() + 31536E7), setCookie(GoogleTalkConstants.HEIGHT_COOKIE, this.gadget.height, a), this.expandedHeight = this.gadget.height)
	};
	GoogleTalk.prototype.popout =
	function (a) {
		this.popupWindow = window.open(this.gadgetUrl, "gTalkPopup", "toolbar\x3dno,width\x3d300,height\x3d600,resizable\x3dyes,toolbars\x3dno,status\x3dno,scrollbars\x3dyes,menubar\x3dno,directories\x3dyes,location\x3dyes,dependant\x3dno", !1, !1)
	};
	GoogleTalk.prototype.hide = function () {
		this.gadget.height = 0
	};
	GoogleTalk.prototype.show = function () {
		this.gadget.height = this.expandedHeight
	};
	GoogleTalk.prototype.isShown = function () {
		return this.gadget.height != GoogleTalkConstants.COLLAPSED_HEIGHT
	}
};
function ListPage() {}

ListPage.prototype = new GenericSfdcPage;
function MultiLineEditPage() {
	EditPage.call(this);
	this.elementToEntityIdMap = {}

}
MultiLineEditPage.prototype = new EditPage;
MultiLineEditPage.prototype.registerDependentLookup = function (a, c, b) {
	EditPage.prototype.registerDependentLookup.call(this, a, c, b);
	this.elementToEntityIdMap[a] = b
};
MultiLineEditPage.prototype.getEntityId = function (a) {
	return this.elementToEntityIdMap[a]
};
function FieldTree(a, b, c) {
	this.rootList = a;
	this.currentNode = FieldTree.ROOT_NODE;
	this.currentDepth = 0;
	this.formulaType = b;
	this.servletUrl = c
}
FieldTree.LOADING_MARKER = "__";
FieldTree.ROOT_NODE = {};
FieldTree.prototype.getCurrentList = function () {
	return this.currentNode === FieldTree.ROOT_NODE ? this.rootList : this.getChildren(this.currentNode)
};
FieldTree.prototype.ascend = function (a) {
	var b = a ? a : this.currentDepth - 1;
	0 === a && (b = 0);
	b > this.currentDepth && (b = this.currentDepth);
	for (; this.currentDepth > b; )
		if (a = this.currentNode)
			a.parent ? (this.currentNode = a.parent, this.currentDepth--) : (this.currentNode = FieldTree.ROOT_NODE, this.currentDepth = 0);
		else
			break
};
FieldTree.prototype.handleChildrenResponse = function (a, b, c) {
	a = eval(Util.evalAjaxServletOutput(a)[AjaxGetFieldTreeChildren.NODE_LIST]);
	b.setChildren(a);
	c && c(b)
};
FieldTree.prototype.handleChildrenError = function (a, b, c) {
	b.setChildren([new FieldTreeNode(FieldTree.LOADING_MARKER, !0, null, LC.getLabel("Global", "error"), !0)]);
	c && c(b)
};
FieldTree.prototype.descend = function (a) {
	a = this.getNodeFromCurrentList(a);
	if (!a || a.isLeaf)
		return !1;
	this.currentNode = a;
	this.currentDepth++;
	return !0
};
FieldTree.prototype.getChildren = function (a, b) {
	if (!a.isLeaf && !a.children) {
		message = {};
		message[AjaxGetFieldTreeChildren.NODE_KEY] = a.getLabelToInsert(!0);
		message[AjaxGetFieldTreeChildren.FORMULA_TYPE] = this.formulaType;
		var c = this;
		Sfdc.Ajax.post(this.servletUrl, function (d) {
			c.handleChildrenResponse(d, a, b)
		}, {
			data : message,
			failure : function (d) {
				c.handleChildrenError(d, a, b)
			}
		});
		a.setChildren([new FieldTreeNode(FieldTree.LOADING_MARKER, !0, null, LC.getLabel("Global", "loading"), !0)])
	}
	return a.children
};
FieldTree.prototype.getNodeFromCurrentList = function (a) {
	for (var b, c = this.getCurrentList(), d = 0; d < c.length; d++)
		if (c[d].key == a) {
			b = c[d];
			break
		}
	return b
};
FieldTree.prototype.getNodeFromListByAttr = function (a, b, c, d) {
	for (var f, e = 0; e < a.length; e++)
		if (a[e].attributes[b] == c && d == a[e].isLeaf) {
			f = a[e];
			break
		}
	return f
};
function FieldTreeController(a, c, b, e, f, g, d, l) {
	if (a) {
		this.tree = new FieldTree(c, d, l);
		this.selectId = e;
		this.selects = [document.getElementById(this.selectId + "0")];
		this.elementName = b;
		this.insertCurlyBangDelims = f;
		this.container = a;
		this.afterInsertCallback = g;
		this.focusDepth = 0;
		this.idPrefix = "";
		var h = /(\d+)$/,
		k = this;
		this.handleSelectClick = function (a) {
			a = getEventTarget(getEvent(a));
			var b = h.exec(a.name);
			b && (b = parseInt(b[1]), k.moveSelectionTo(b, a.options[a.selectedIndex].value))
		};
		this.handleOnFocus = function (a) {
			a =
				getEventTarget(getEvent(a));
			if (a = h.exec(a.name))
				k.focusDepth = parseInt(a[1])
		};
		addEvent(this.container.firstChild.firstChild, "change", this.handleSelectClick, !1);
		addEvent(this.selects[0], "focus", this.handleOnFocus, !1);
		this.hideSelects()
	}
}
FieldTreeController.prototype.setScrollDiv = function (a) {
	this.scrollDiv = a
};
FieldTreeController.prototype.ajaxRefreshNode = function (a) {
	a === this.tree.currentNode && (this.eraseSelects(this.tree.currentDepth), this.buildSelect(a.children, this.tree.currentDepth), this.scrollRight())
};
FieldTreeController.prototype.moveSelectionTo = function (a, c) {
	if (c) {
		a < this.tree.currentDepth && this.tree.ascend(a);
		var b = this.tree.getNodeFromCurrentList(c);
		if (b.isLeaf)
			this.buildInsert(a + 1, b);
		else {
			var e = this;
			this.buildSelect(this.tree.getChildren(b, function (a) {
					e.ajaxRefreshNode(a)
				}), a + 1);
			this.tree.descend(b.key)
		}
		this.scrollRight()
	}
};
FieldTreeController.prototype.focusTop = function () {
	var a = this.selects[0];
	a && a.focus()
};
FieldTreeController.prototype.reset = function () {
	this.tree.ascend(0);
	this.selects = [document.getElementById(this.selectId + "0")];
	var a = this.selects[0];
	0 < a.options.length && (a.selectedIndex = 0, this.moveSelectionTo(0, a.options[0].value))
};
FieldTreeController.prototype.filterBuildSelectMap = function (a) {
	for (var c = [], b = 0; b < a.length; b++) {
		var e = a[b].isLeaf ? escapeHTML(a[b].labelName) : escapeHTML(a[b].labelName) + " \x26gt;";
		c[b] = [e, a[b].key]
	}
	return c
};
FieldTreeController.prototype.buildSelect = function (a, c) {
	var b = this.filterBuildSelectMap(a);
	this.eraseSelects(c);
	if (0 == b.length) {
		var e = LC.getLabel("NewFormulaEditor", "NoFieldsMatch"),
		f = document.createElement("TD");
		this.container.appendChild(f);
		f.id = this.idPrefix + "insertBox";
		f.className = "insertBox";
		b = document.createElement("SPAN");
		b.id = this.idPrefix + "insertWrapperInfo" + this.selects.length;
		f.appendChild(b);
		b.innerHTML = e;
		b.isDynamicSelect = !1;
		b.className = "insertWrapperInfo";
		this.selects.push(b.firstChild)
	} else
		e =
			Util.createDynamicSelect({
				size : "9",
				name : this.selectId + this.selects.length,
				"class" : "fieldTreeSelect"
			}, b, !1), b = document.createElement("TD"), b.id = this.idPrefix + "selectWrapper" + this.selects.length, b.className = "selectWrapper", this.container.appendChild(b), b.innerHTML = e, b.isDynamicSelect = !0, this.selects.push(b.firstChild), addEvent(this.selects[c], "change", this.handleSelectClick, !1), addEvent(this.selects[c], "focus", this.handleOnFocus, !1)
};
FieldTreeController.prototype.getInsertDisplayHTML = function (a) {
	return escapeHTML(a.getLabelToInsert())
};
FieldTreeController.prototype.getAttributesDisplayHTML = function (a) {
	return a.getAttributesForInsert()
};
FieldTreeController.prototype.buildInsert = function (a, c) {
	var b = LC.getLabel("NewFormulaEditor", "SelectedInfo"),
	e = LC.getLabel("Buttons", "ins"),
	e = "\x3cinput type\x3d'button' id\x3d'" + this.idPrefix + "fieldInsertButton' name\x3d'insertButton' class\x3d'btn' value\x3d'" + e + "' /\x3e",
	f = this;
	this.selects[a] && this.eraseSelects(a);
	var g = document.createElement("TD");
	this.container.appendChild(g);
	g.id = this.idPrefix + "insertBox";
	g.className = "insertBox";
	var d = document.createElement("SPAN");
	d.id = this.idPrefix + "insertWrapperInfo" +
		this.selects.length;
	g.appendChild(d);
	d.innerHTML = b;
	d.isDynamicSelect = !1;
	d.className = "insertWrapperInfo";
	d = document.createElement("SPAN");
	d.id = this.idPrefix + "insertWrapperString" + this.selects.length;
	g.appendChild(d);
	d.innerHTML = this.getInsertDisplayHTML(c);
	d.isDynamicSelect = !0;
	d.className = "insertWrapperString";
	this.selects.push(d.firstChild);
	if (b = this.getAttributesDisplayHTML(c))
		d = document.createElement("SPAN"), d.id = this.idPrefix + "insertWrapperAttributes" + this.selects.length, g.appendChild(d), d.innerHTML =
			b, d.isDynamicSelect = !1, d.className = "insertWrapperAttributes";
	d = document.createElement("SPAN");
	d.id = this.idPrefix + "insertWrapperButton" + this.selects.length;
	g.appendChild(d);
	d.innerHTML = e;
	d.isDynamicSelect = !1;
	d.className = "insertWrapperButton";
	addEvent(document.getElementById(this.idPrefix + "fieldInsertButton"), "click", function () {
		f.insertCode(f.elementName, c, f.insertCurlyBangDelims)
	}, !1)
};
FieldTreeController.prototype.eraseSelects = function (a) {
	for (var c = this.selects.length; c > a; ) {
		c--;
		for (var b = this.selects[c].parentNode; "TD" != b.nodeName; )
			b = b.parentNode;
		this.container.removeChild(b);
		this.selects.pop()
	}
};
FieldTreeController.prototype.insertCode = function (a, c, b) {
	FormulaEditor.insertCode(a, c.getLabelToInsert(), b);
	this.afterInsertCallback && this.afterInsertCallback()
};
FieldTreeController.prototype.scrollRight = function () {
	var a = this.scrollDiv || this.container;
	0 == a.clientWidth && (a = a.parentNode);
	a.scrollLeft = a.scrollWidth - a.clientWidth
};
FieldTreeController.prototype.showSelects = function () {
	for (var a = 0; a < this.selects.length; a++) {
		var c = this.selects[a];
		null != c && "SELECT" == c.nodeName && (c.style.display = "inline")
	}
};
FieldTreeController.prototype.hideSelects = function () {
	for (var a = 0; a < this.selects.length; a++) {
		var c = this.selects[a];
		null != c && "SELECT" == c.nodeName && (c.style.display = "none")
	}
};
FieldTreeController.prototype.switchFocus = function (a) {
	this.focusDepth = a ? this.focusDepth - 1 : this.focusDepth + 1;
	0 > this.focusDepth && (this.focusDepth = this.selects.length);
	this.focusDepth > this.selects.length && (this.focusDepth = 0);
	this.focusDepth < this.selects.length ? (a = this.selects[this.focusDepth], "SELECT" == a.nodeName ? a.focus() : this.focusDepth === this.selects.length - 1 && document.getElementById(this.idPrefix + "fieldInsertButton").focus()) : document.getElementById(this.idPrefix + "fieldSelectClose").focus()
};
function FieldTreeNode(a, b, c, d, e, f) {
	this.key = a;
	this.isLeaf = b;
	this.labelName = d;
	this.showLabel = e;
	this.attributes = f;
	c && this.setChildren(c)
}
FieldTreeNode.prototype.setChildren = function (a) {
	this.isLeaf = !1;
	this.children = a;
	for (var b = 0; b < a.length; b++)
		a[b].parent = this
};
FieldTreeNode.prototype.getLabelToInsert = function (a) {
	return !this.parent || !this.parent.showLabel && !a ? this.key : this.parent.getLabelToInsert(a) + "." + this.key
};
FieldTreeNode.prototype.getLabelNameToInsert = function (a) {
	return !this.parent || !this.parent.showLabel && !a ? this.labelName : LC.getLabel("Global", "labelWithColon", this.parent.getLabelNameToInsert(a)) + " " + this.labelName
};
FieldTreeNode.prototype.getAttributeToInsert = function (a, b) {
	return !this.parent || !this.parent.showLabel && !b ? this.attributes[a] : this.parent.getAttributeToInsert(a, b) + "." + this.attributes[a]
};
FieldTreeNode.prototype.getAttributesForInsert = function () {
	var a = ["\x3ctable class\x3d'fieldPickerAttributeTable'\x3e"];
	this.addAttributeRowToTable(a, LC.getLabel("NewFormulaEditor", "AttributeFieldType"), this.attributes.type);
	this.addAttributeRowToTable(a, LC.getLabel("NewFormulaEditor", "ApiName"), this.getLabelToInsert());
	a.push("\x3c/table\x3e");
	return a.join("")
};
FieldTreeNode.prototype.addAttributeRowToTable = function (a, b, c) {
	a.push("\x3ctr\x3e\x3ctd class\x3d'fieldPickerAttributeCategory'\x3e");
	a.push(LC.getLabel("Global", "labelWithColonNSpace", b));
	a.push(c);
	a.push("\x3c/td\x3e\x3c/tr\x3e")
};
function OverviewPage() {}

OverviewPage.prototype = new GenericSfdcPage;
function OwnerChangePage(a) {
	this.entityId = a;
	this.updateDirtyState(GenericSfdcPage.STATE_DIRTY);
	var b = this;
	void 0 !== a && this.appendToOnloadQueue(function () {
		b.initAutoComplete()
	}, "Add AutoComplete")
}
OwnerChangePage.prototype = new GenericSfdcPage;
OwnerChangePage.prototype.getEntityId = function () {
	return this.entityId
};
OwnerChangePage.prototype.getReferredDomIds = function (a) {
	return []
};
OwnerChangePage.prototype.initAutoComplete = function () {
	for (var a in ForeignKeyInputElement.allElements)
		if (ForeignKeyInputElement.allElements.hasOwnProperty(a)) {
			var b = ForeignKeyInputElement.allElements[a];
			b.referredDomIds = [];
			b.initAutoComplete()
		}
};

/*  图标伸缩*/
function Sidebar(b, c, f, g) {
	if (c) {
		if (this.div = b, this.sidebarContainer = document.getElementById(BodyLayout.SIDEBAR_CELL) || document.getElementById("noTableSidebar"), this.handlebarContainer = document.getElementById(SidebarConstants.HANDLEBAR_CONTAINER), this.sidebarContainer && this.handlebarContainer) {
			this.pinned = !!f;
			this.disableHotkey = !!g;
			var d = this;
			this.handleDocumentKeyDown = function (a) {
				a = getEvent(a);
				if (a.altKey && "S" === String.fromCharCode(a.keyCode) && (d.pin(), d.pinned && (a = document.getElementById(SidebarConstants.pSEARCH_SIDEBAR_STR))))
					a.focus(),
					a.select()
			};
			this.disableHotkey || addEvent(document, "keydown", this.handleDocumentKeyDown, !1);
			if (Sfdc.userAgent.isIE6) {
				var e = document.getElementById("bodyTable") || document.getElementById("noTableContainer");
				e && (d.handlebarContainer.style.height = e.offsetHeight, addEvent(this.sidebarContainer, "resize", function () {
						d.handlebarContainer.style.height = e.offsetHeight
					}))
			}
			addEvent(this.handlebarContainer, "click", function (a) {
				d.pin()
			});
			0 < Sfdc.select("." + EditElement.ERROR_CLASS, this.div).length && (this.pinned || this.pin())
		}
	} else
		deleteCookie(SidebarConstants.SIDEBAR_PINNED_COOKIE)
}

Sidebar.prototype.setSidebarCookie = function (b) {
	var c = new Date;
	c.setTime(c.getTime() + 31536E7);
	setCookie(SidebarConstants.SIDEBAR_PINNED_COOKIE, b, c)
};
Sidebar.prototype.getSidebarCookie = function () {
	return getCookie(SidebarConstants.SIDEBAR_PINNED_COOKIE)
};
Sidebar.prototype.pin = function (b) {
	this.assistiveText = this.assistiveText || Sfdc.get("." + ZenCss.assistiveText, this.handlebarContainer);
	this.pinned ? (this.pinned = !1, b || this.setSidebarCookie("0"),
		this.handlebarContainer.title = this.disableHotkey ? LC.getLabel("Sidebar", "expandNoHotkey") : LC.getLabel("Sidebar", "expand"),
		Sfdc.Dom.setText(this.assistiveText, LC.getLabel("Sidebar", "expandNoHotkey")),
		addStyleClass(this.sidebarContainer, SidebarConstants.SIDEBAR_COLLAPSED_CLASS)) : (
		this.pinned = !0, b || this.setSidebarCookie("1"),
		this.handlebarContainer.title = this.disableHotkey ? LC.getLabel("Sidebar", "collapseNoHotkey") : LC.getLabel("Sidebar", "collapse"),
		Sfdc.Dom.setText(this.assistiveText, LC.getLabel("Sidebar", "collapseNoHotkey")),
		delStyleClass(this.sidebarContainer, SidebarConstants.SIDEBAR_COLLAPSED_CLASS))
};

var __vf_RTAEditor;
function VFRTAEditor() {
	function c() {
		Sfdc.assert(null != a && d, "You are performing action when richtext area is not ready. Please call isReady() before using.")
	}
	var d = !1,
	e,
	a;
	"undefined" === typeof CKEDITOR && Sfdc.Resource.addJavaScript(VisualforceConstants.RTA_LIBRARY, function () {});
	this.show = function (b) {
		(a = CKEDITOR.instances[b.editEl.id]) && a.destroy(!0);
		b.name = VisualforceConstants.EDITOR_NAME;
		b.toolbar = "Visualforce";
		a = CKEDITOR.SFDC.createEditor(b);
		d = null !== a;
		e = b.editEl
	};
	this.isReady = function () {
		return d
	};
	this.setData =
	function (b) {
		c();
		a.setData(b)
	};
	this.getData = function () {
		c();
		return a.getData()
	};
	this.hide = function (b) {
		c();
		e.style.display = "none";
		a.setData("")
	}
}
VFRTAEditor.getOrCreateRTAEditor = function () {
	return !__vf_RTAEditor ? __vf_RTAEditor = new VFRTAEditor : __vf_RTAEditor
};
GhostTextInputWrapperElement = function (a, c, e, f, g, d, h) {
	this.element = getElementByIdCS(a);
	this.ghostText = (!c || "" == c) && d ? d() : c;
	this.inputElementCssClass = e;
	this.ghostTextCssClass = f;
	this.form = getElementByIdCS(g);
	this.getGhostTextFunction = d;
	h && this.setGhostTextIfEmpty();
	var b = this;
	addEvent(this.element, "focus", function () {
		b.clearGhostText()
	});
	addEvent(this.element, "blur", function () {
		b.setGhostTextIfEmpty()
	});
	this.form && addEvent(this.form, "submit", function () {
		b.clearGhostText()
	});
	this.element.getGhostText = function () {
		return b.getGhostText()
	};
	this.element.setGhostText = function () {
		b.setGhostText()
	};
	this.element.setGhostTextIfEmpty = function () {
		b.setGhostTextIfEmpty()
	};
	this.element.setGhostTextFunction = function (a) {
		b.getGhostTextFunction = a
	};
	this.element.clearGhostText = function () {
		return b.clearGhostText()
	}
};
GhostTextInputWrapperElement.prototype.focusOnMe = function () {
	Sfdc.isDefAndNotNull(window.parent.getOpenDialog()) && this.element.focus()
};
GhostTextInputWrapperElement.prototype.clearGhostText = function () {
	this.element.isGhost && (this.element.isGhost = !1, this.element.value = "", this.element.className = this.inputElementCssClass)
};
GhostTextInputWrapperElement.prototype.setGhostTextIfEmpty = function () {
	(!this.element.value || "" == this.element.value) && this.setGhostText()
};
GhostTextInputWrapperElement.prototype.setGhostText = function () {
	this.element.isGhost = !0;
	this.element.className = this.ghostTextCssClass;
	this.element.value = this.getGhostText()
};
GhostTextInputWrapperElement.prototype.getGhostText = function () {
	return this.getGhostTextFunction ? this.getGhostTextFunction() : this.ghostText
};
GhostTextInputWrapperElement.getSearchString = function (a) {
	var c = "";
	a = document.getElementById(a);
	a.isGhost || (c = a.value);
	return c
};

SearchClickLoggingUtil = {
	addSearchResultClickLoggingParams : function (a, b) {
		a && (b = b || {}, a.add(SearchClickLogging.CLK_LOG_FLAG_PARAM_NAME, 1), a.add(SearchClickLogging.CLK_RECORDID_PARAM_NAME, b.recordId), a.add(SearchClickLogging.CLK_QUERY_GUID_PARAM_NAME, b.queryGuid), a.add(SearchClickLogging.CLK_TOTAL_RESULTS_FOR_ENTITY_PARAM_NAME, b.totalResultsForEntity), a.add(SearchClickLogging.CLK_RANK_PARAM_NAME, b.rank), a.add(SearchClickLogging.CLK_ENTITY_BUCKET_RANK_PARAM_NAME, b.bucketRank), a.add(SearchClickLogging.CLK_ID_HASH_PARAM_NAME,
				b.idHash), a.add(SearchClickLogging.CLK_NUM_RESULTS_FOR_ENTITY_BEFORE_DB_PARAM_NAME, b.numResultsForEntityBeforeDb), a.add(SearchClickLogging.CLK_PAGE_NUM_PARAM_NAME, b.pageNum), a.add(SearchClickLogging.CLK_NUM_RESULTS_PER_PAGE_PARAM_NAME, b.numResultsPerPage), a.add(SearchClickLogging.CLK_FILTER_PARAM_NAME, b.filter), a.add(SearchClickLogging.CLK_RESULT_ORDERING_PARAM_NAME, b.sort), a.add(SearchClickLogging.CLK_IS_TAGGING_PARAM_NAME, b.isTagging), a.add(SearchClickLogging.CLK_ENTITY_NAME_PARAM_NAME, b.entityName));
		return a
	},
	addSearchMacLogParams : function (a, b) {
		1 == b.suggestion.mruIds.length && (b = b || {}, a.add(SearchClickLogging.MAC_LOG_FLAG_PARAM_NAME, 1), a.add(SearchClickLogging.MAC_RECORD_ID_PARAM_NAME, b.suggestion.mruIds[0]), a.add(SearchClickLogging.MAC_RECORD_NAME_PARAM_NAME, b.suggestion.name), a.add(SearchClickLogging.MAC_SEARCH_STRING_PARAM_NAME, b.searchString), a.add(SearchClickLogging.MAC_POSITION_PARAM_NAME, b.position), a.add(SearchClickLogging.MAC_SEARCH_AREA_PARAM_NAME, b.searchArea));
		return a
	},
	getClickLoggingServletUrl : function (a,
		b) {
		if (SearchClickLoggingUtil.SEARCH_CLICK_LOGGING_SERVLET_PATH && a) {
			var c = b ? Sfdc.String.ltrim(b).toLowerCase() : null;
			if (c && (0 === c.indexOf("javascript") || 0 === c.indexOf("mailto:") || 0 === c.indexOf("http") || 0 === c.indexOf("ftp")))
				return b;
			a.add(BaseIntermediateRedirectServlet.DESTINATION_URL_PARAM_NAME, b);
			return a.concatenateWithUrl(SearchClickLoggingUtil.SEARCH_CLICK_LOGGING_SERVLET_PATH, !1)
		}
		return b
	},
	setClickLoggingServletPath : function (a) {
		SearchClickLoggingUtil.SEARCH_CLICK_LOGGING_SERVLET_PATH = a
	}

};
UnifiedSearchButton = function (b, c, d, e) {
	if (b) {
		this.parentDiv = getElementByIdCS(b);
		this.searchButton = getElementByIdCS(c);
		this.mouseOverCssClass = d;
		var a = this;
		addEvent(this.parentDiv, "click", function () {
			UnifiedSearchButton.submit(e)
		}, !1);
		addEvent(this.parentDiv, "mouseover", function () {
			addStyleClass(a.parentDiv, a.mouseOverCssClass)
		});
		addEvent(this.parentDiv, "mouseout", function () {
			delStyleClass(a.parentDiv, a.mouseOverCssClass)
		});
		addEvent(this.searchButton, "focus", function () {
			addStyleClass(a.parentDiv, a.mouseOverCssClass)
		});
		addEvent(this.searchButton, "blur", function () {
			delStyleClass(a.parentDiv, a.mouseOverCssClass)
		})
	}
};
UnifiedSearchButton.submit = function (b) {
	b = getElementByIdCS(b);
	Sfdc.Event.fireEvent(b, "submit") && b.submit()
};
var HTMLTreeNode = function () {};
HTMLTreeNode.prototype.toggleHTMLTree = function (a) {
	var b = HTMLTreeNode.prototype.getNodeChild(a);
	null != b && (HTMLTreeNode.prototype.isVisible(b) ? (HTMLTreeNode.prototype.close(b, a), SetupTreeNode.prototype.removeFromOpenSetup(a)) : (HTMLTreeNode.prototype.open(b, a), SetupTreeNode.prototype.addToOpenSetup(a)))
};
HTMLTreeNode.prototype.isVisible = function (a) {
	return "none" != a.style.display
};
HTMLTreeNode.prototype.setVisible = function (a, b) {
	a && (a.style.display = b ? "" : "none")
};
HTMLTreeNode.prototype.getNode = function (a) {
	if (null != document.getElementById("treeInformation"))
		return document.getElementById(a)
};
HTMLTreeNode.prototype.getNodeChild = function (a) {
	var b = document.getElementById("treeInformation");
	if (null != b)
		return a += b.getAttribute("child"), document.getElementById(a)
};
HTMLTreeNode.prototype.open = function (a, b) {
	var e = document.getElementById("treeInformation");
	if (null != e) {
		Sfdc.Dom.addClass(a.parentNode, "active");
		a.style.display = "block";
		var c = document.getElementById(b + e.getAttribute("icon"));
		if (null != c) {
			var d = c.getElementsByTagName("img")[0].title,
			c = c.getElementsByTagName("img")[0];
			c.src = e.getAttribute("minusSrc");
			c.title = HTMLTreeNode.prototype.changePreTitle(d, e.getAttribute("collapse"));
			c.alt = HTMLTreeNode.prototype.changePreTitle(d, e.getAttribute("collapse"))
		}
	}
};
HTMLTreeNode.prototype.close = function (a, b) {
	var e = document.getElementById("treeInformation");
	if (null != e) {
		Sfdc.Dom.removeClass(a.parentNode, "active");
		a.style.display = "none";
		var c = document.getElementById(b + e.getAttribute("icon"));
		if (null != c) {
			var d = c.getElementsByTagName("img")[0].title,
			c = c.getElementsByTagName("img")[0];
			c.src = e.getAttribute("plusSrc");
			c.title = HTMLTreeNode.prototype.changePreTitle(d, e.getAttribute("expand"));
			c.alt = HTMLTreeNode.prototype.changePreTitle(d, e.getAttribute("expand"))
		}
	}
};
HTMLTreeNode.prototype.changePreTitle = function (a, b) {
	return b + " " + a.substr(a.indexOf("-"))
};
HTMLTreeNode.prototype.openHTMLTree = function (a, b) {
	var e = a ? unescapeJsInHtml(a) : null,
	c = b ? unescapeJsInHtml(b) : null,
	d = document.getElementById("treeInformation");
	if (null != d) {
		if (null != c) {
			HTMLTreeNode.prototype.unHighlightAll();
			var g = document.getElementById(c + d.getAttribute("leaf"));
			g && g.className && (g.className = "setupHighlightLeaf", d.setAttribute("lastHighlight", c + d.getAttribute("leaf")))
		}
		var k = document.getElementById(e + d.getAttribute("child"));
		if (null == k && null != c && (g = document.getElementById(c + d.getAttribute("leaf")),
				null != g)) {
			var f = g.parentNode;
			null != f && 0 < f.id.indexOf(d.getAttribute("child")) && (e = f.id.substr(0, f.id.indexOf(d.getAttribute("child"))), k = f)
		}
		null != k ? (g = document.getElementById(e + d.getAttribute("icon")), e = g.getElementsByTagName("img")[0].title, k.style.display = "block", f = g.getElementsByTagName("img")[0], f.src = d.getAttribute("minusSrc"), f.title = HTMLTreeNode.prototype.changePreTitle(e, d.getAttribute("collapse")), f.alt = HTMLTreeNode.prototype.changePreTitle(e, d.getAttribute("collapse")), f = k.parentNode, null !=
			f && (f = f.parentNode, null != f && 0 < f.id.indexOf(d.getAttribute("child")) && (e = f.id.substr(0, f.id.indexOf(d.getAttribute("child"))), HTMLTreeNode.prototype.openHTMLTree(e, null))), null != c && window.scrollTo(0, g.offsetTop)) : null != c && (g = document.getElementById(c + d.getAttribute("leaf")), null != g && window.scrollTo(0, g.offsetTop))
	}
};
HTMLTreeNode.prototype.unHighlightAll = function () {
	var a = document.getElementById("treeInformation");
	if (null != a) {
		var b = a.getAttribute("lastHighlight");
		null != b && (b = document.getElementById(b), null != b && b.className == a.getAttribute("highlightClass") && (b.className = a.getAttribute("leafClass")))
	}
};
HTMLTreeNode.prototype.populateTheTreeInformation = function (a, b, e, c, d, g, k, f, l, m) {
	var h = document.getElementById("treeInformation");
	null != h && (h.setAttribute("font", a), h.setAttribute("child", b), h.setAttribute("icon", e), h.setAttribute("leaf", c), h.setAttribute("expand", d), h.setAttribute("collapse", g), h.setAttribute("plusSrc", k), h.setAttribute("minusSrc", f), h.setAttribute("highlightClass", l), h.setAttribute("leafClass", m), h.setAttribute("lastHighlight", "none"))
};
var SetupTreeNode = function (a, b) {
	this.treeRoot = document.getElementById(a);
	this.findInput = document.getElementById(b);
	var c = this;
	addEvent(this.findInput, "keyup", function () {
		c.handleKeyUp.apply(c, arguments)
	}, !0);
	if (Sfdc.get("setupNavExpandAll"))
		Sfdc.on(Sfdc.get("setupNavExpandAll"), "click", function (a) {
			c.expandAll();
			Sfdc.Event.preventDefault(a)
		});
	if (Sfdc.get("setupNavCollapseAll"))
		Sfdc.on(Sfdc.get("setupNavCollapseAll"), "click", function (a) {
			c.collapseAll();
			Sfdc.Event.preventDefault(a)
		});
	"" !== this.findInput.value &&
	(this.findInput.value = "")
};
SetupTreeNode.excludeNodes = ["Customize", "DevTools", "DevToolsIntegrate", "Deploy"];
SetupTreeNode.openListSetup = [];
SetupTreeNode.TYPING_THRESHOLD_MILLIS = 120;
SetupTreeNode.prototype = {
	handleKeyUp : function (a) {
		this.bufferSearch()
	},
	bufferSearch : function () {
		this.TIMEOUT_ID && clearTimeout(this.TIMEOUT_ID);
		this.TIMEOUT_ID = setTimeout(function () {
				var a = this;
				return function () {
					a.doSearch()
				}
			}
				.apply(this), SetupTreeNode.TYPING_THRESHOLD_MILLIS)
	},
	doSearch : function () {
		this.filterTree(trim(this.findInput.value))
	},
	filterTree : function (a) {
		var b = this.treeRoot.childNodes;
		this.foundCount = this.childCount = 0;
		var c = this.lastCategory = null;
		0 < a.length && (c = this.escapeForRegexp(a), c = a.charAt(0).match(/^\w/) ?
				RegExp("\\b" + c, "i") : RegExp(c, "i"));
		for (var d = 0; d < b.length; d++)
			"img" != b[d].nodeName.toLowerCase() && this.filterNode(b[d], c);
		document.getElementById("setupSearchError").style.display = 0 === this.foundCount && 0 < a.length ? "block" : "none";
		this.personalSetupV2 && (document.getElementById("AutoNumber5").style.display = 0 === this.foundCount && 0 < a.length ? "none" : "block");
		if (null != this.lastCategory && 0 < a.length && (0 === this.foundCount || 0 === this.childCount))
			this.lastCategory.style.display = "none"
	},
	filterNode : function (a, b, c) {
		this.clearHighlight(a);
		var d = !1;
		if (hasStyleClass(a, "setupNavtree"))
			d = !0, b && (null != this.lastCategory && 0 === this.childCount) && (this.lastCategory.style.display = "none"), this.lastCategory = a, this.childCount = 0;
		else {
			var e = a.id,
			f = 0 <= this.getNodeLabel(a).search(b);
			if ((!b || f || c) && !this.arrayContains(SetupTreeNode.excludeNodes, e))
				d = !0, this.childCount++;
			b && f && this.highlight(a, b);
			if (hasStyleClass(a, "parent")) {
				var f = HTMLTreeNode.prototype.getNodeChild(e),
				h = !1,
				k = f.childNodes;
				c = d;
				for (var g = 0; g < k.length; g++)
					this.filterNode(k[g], b, c) && (h =
							!0);
				(d = d || h) && b ? (HTMLTreeNode.prototype.open(f, e), SetupTreeNode.prototype.addToOpenSetup(e)) : (HTMLTreeNode.prototype.close(f, e), SetupTreeNode.prototype.removeFromOpenSetup(e))
			}
			d && b && this.foundCount++
		}
		a.style.display = d ? "block" : "none";
		return d
	},
	getNodeLabel : function (a) {
		var b = a.childNodes;
		if (this.personalSetupV2) {
			if (0 <= a.className.search("parent")) {
				var c = Sfdc.get(".folderText", a);
				if (c)
					return c.innerHTML
			}
			if (0 <= a.className.search("setupLeaf") || 0 <= a.className.search("setupHighlightLeaf"))
				return b[0].title +
				" " + b[0].childNodes[0].innerHTML
		}
		if ("A" == a.nodeName && 0 != a.innerHTML.indexOf("\x3c"))
			return a.innerHTML;
		for (a = 0; a < b.length; a++) {
			if ("A" == b[a].nodeName && 0 != b[a].innerHTML.indexOf("\x3c"))
				return b[a].innerHTML;
			if ("SPAN" == b[a].nodeName)
				for (var c = b[a].childNodes, d = 0; d < c.length; d++)
					if ("A" == c[d].nodeName && 0 != c[d].innerHTML.indexOf("\x3c"))
						return c[d].innerHTML
		}
		return ""
	},
	expandAll : function () {
		for (var a = Sfdc.select(".parent", this.treeRoot), b = 0, c = a.length; b < c; b++) {
			var d = a[b].id,
			e = HTMLTreeNode.prototype.getNodeChild(d);
			HTMLTreeNode.prototype.open(e, d);
			SetupTreeNode.prototype.addToOpenSetup(d)
		}
	},
	collapseAll : function () {
		for (var a = Sfdc.select(".parent", this.treeRoot), b = 0; b < a.length; b++) {
			var c = a[b].id,
			d = HTMLTreeNode.prototype.getNodeChild(c);
			HTMLTreeNode.prototype.close(d, c);
			SetupTreeNode.prototype.removeFromOpenSetup(c)
		}
	},
	getHighlightElem : function (a) {
		return Sfdc.Dom.hasClass(a, "setupLeaf") ? a.childNodes[0] : a
	},
	highlight : function (a, b) {
		Sfdc.Dom.addClass(this.getHighlightElem(a), "se_highlight")
	},
	clearHighlight : function (a) {
		Sfdc.Dom.removeClass(this.getHighlightElem(a),
			"se_highlight")
	},
	arrayContains : function (a, b) {
		for (var c = 0; c < a.length; c++)
			if (a[c] == b)
				return !0;
		return !1
	},
	escapeForRegexp : function (a) {
		return a.replace(/([\/.*+?|()[\]{}\\^$])/g, "\\$1")
	},
	removeFromOpenSetup : function (a) {
		for (var b = 0; b < SetupTreeNode.prototype.openListSetup.length; b++)
			SetupTreeNode.prototype.openListSetup[b] == a && (SetupTreeNode.prototype.openListSetup[b] = null);
		SetupTreeNode.prototype.updateCookiesSetup()
	},
	getNodes : function () {
		var a = [],
		b = Sfdc.select(".parent"),
		a = a.concat(b),
		b = Sfdc.select(".setupLeaf");
		return a = a.concat(b)
	},
	openListSetup : [],
	addToOpenSetup : function (a) {
		for (var b = 0; b < SetupTreeNode.prototype.openListSetup.length; b++)
			if (null == SetupTreeNode.prototype.openListSetup[b]) {
				SetupTreeNode.prototype.openListSetup[b] = a;
				SetupTreeNode.prototype.updateCookiesSetup();
				return
			}
		SetupTreeNode.prototype.openListSetup[SetupTreeNode.prototype.openListSetup.length] = a;
		SetupTreeNode.prototype.updateCookiesSetup()
	},
	updateCookiesSetup : function () {
		for (var a = "", b = 0; b < SetupTreeNode.prototype.openListSetup.length; b++)
			null !=
			SetupTreeNode.prototype.openListSetup[b] && (a = a + SetupTreeNode.prototype.openListSetup[b] + ":");
		Sfdc.Cookie.setCookie(SetupTreeNodeConstants.COOKIE_KEY, a, null, "/")
	}
};
function InlineEditData(a) {
	a && (this.isEditable = a[InlineEditConstants.EDITABLE], this.sysMod = a[InlineEditConstants.LAST_MOD], this.id = a[InlineEditConstants.ENTITY_ID], this.csrf_token = a[CSRFConstants.CSRF_TOKEN], this.fields = {}, this.dependencyGroups = [], this.hasCompoundFields = !1, this.allFieldData = a[InlineEditConstants.FIELD_DATA], this.dynamicDataUrl = a[InlineEditConstants.DYNAMIC_DATA], this.initHook = a[InlineEditConstants.INIT_HOOK], this.sentRequest = this.loadedDynamicData = !1, this.currentField = null, this.visualforce =
			a[InlineEditConstants.VF_ENABLED], sfdcPage.initInlineEdit(this))
}
InlineEditData.prototype.init = function () {
	this.createFields();
	this.hasCompoundFields && !InlineEditField.overlay && (InlineEditField.overlay = new InlineEditDialog, InlineEditField.overlay.register());
	var a = this;
	addEvent(document, "click", function (c) {
		if (Sfdc.userAgent.isFirefox && 2 == c.button)
			return !1;
		a.closeCurrentField(null, null, c)
	}, !1)
};
InlineEditData.prototype.createFields = function () {
	if (this.allFieldData) {
		for (var a = 0; a < this.allFieldData.length; a++) {
			var c = this.allFieldData[a],
			b = InlineEditField.createField(c);
			if ((this.fields[c.fieldId] = b) && b.compound)
				this.hasCompoundFields = !0
		}
		for (a in this.fields)
			if ((c = this.fields[a]) && c.afterLoad && c.afterLoad(), c && c.controllerId && (this.createDependency(c), this.hasCompoundFields = !0), c && c.lookupControllerIds)
				for (b = 0; b < c.lookupControllerIds.length; b++) {
					var d = this.getField(c.lookupControllerIds[b]);
					d && (d.dependentIds || (d.dependentIds = []), d.dependentIds.push(c.id))
				}
		this.initHook && (a = window[this.initHook]) && "function" === typeof a.initInlineEditData && a.initInlineEditData(this)
	}
};
InlineEditData.prototype.createDependency = function (a) {
	if (!a.group) {
		for (var c = this.getField(a.controllerId), b = null; null != c && !(b = c.group); )
			c = this.getField(c.controllerId);
		if (b)
			for (var d = b.length; a != c; )
				b.splice(d, 0, a.id), a.group = b, a instanceof BooleanField && (a.waitForLoad = !0), a = this.getField(a.controllerId);
		else {
			for (c = []; null != a; )
				c.unshift(a.id), a.group = c, a instanceof BooleanField && (a.waitForLoad = !0), a = this.getField(a.controllerId);
			this.dependencyGroups.push(c)
		}
	}
};
InlineEditData.prototype.openField = function (a) {
	a.group ? a = this.fields[a.group[0]] : this.isCurrentField(a) || this.closeCurrentField();
	this.currentField = a;
	if (this.visualforce && !a.waitForLoad) {
		var c = sfdcPage.getRegisteredPickList(this.visualforce);
		c && window.pl && (window.pl = c)
	}
	a.waitForLoad && !this.loadedDynamicData ? this.loadDynamicData() : (a.group ? this.openGroup(a.group) : a.openField(), this.visualforce && (sfdcPage.currentFieldForInlineEditDialog = this.visualforce, a instanceof ForeignKeyField && "" == a.editElement.value &&
			(a.editElement.value = LC.getLabel("Global", "click_lookup_icon"), a.isEmpty = !0)))
};
InlineEditData.prototype.openGroup = function (a) {
	var c = this.fields[a[0]],
	b = !0;
	if (this.visualforce_inlineEditRerender)
		for (var d = a.length - 1; 0 <= d && b; d--)
			b = b && !0 === this.fields[a[d]].created;
	else
		b = c.created;
	if (!b) {
		b = document.createElement("div");
		b.className = "inlineEditDiv dependentFields";
		Sfdc.userAgent.isIE6 && a && (b.style.height = 100 + 20 * a.length + "px", b.style.width = "440px");
		document.body.appendChild(b);
		var e = [];
		e.push("\x3ctable border\x3d0\x3e");
		for (d = 0; d < a.length; d++) {
			var f = this.fields[a[d]];
			e.push("\x3ctr\x3e\x3ctd class\x3d'labelCol'\x3e");
			e.push(f.getFieldLabel());
			e.push("\x3c/td\x3e\x3ctd\x3e\x3c/td\x3e\x3c/tr\x3e");
			f.state == InlineEditState.EDIT ? f.createEditDiv() : f.createDummy()
		}
		e.push("\x3c/table\x3e");
		b.innerHTML = e.join("");
		e = !1;
		for (d = 0; d < a.length; d++)
			f = this.fields[a[d]], f.state == InlineEditState.EDIT ? (this.visualforce && !e && (sfdcPage.loadDetailJS(this.visualforce), e = !0), f.load(), b.firstChild.rows[d].lastChild.appendChild(f.editDiv)) : b.firstChild.rows[d].lastChild.innerHTML = f.initialHTML;
		InlineEditField.overlay.addField(c.id, b, LC.getLabel("DependentElement",
				"dependentFields"))
	}
	InlineEditField.overlay.focusPointId = c.id;
	InlineEditField.overlay.setActiveField(c.id);
	InlineEditField.overlay.setMaxWidth(500);
	Sfdc.userAgent.isIE6 && InlineEditField.overlay.dialog && (InlineEditField.overlay.dialog.style.width = "500px");
	InlineEditField.overlay.show()
};
InlineEditData.prototype.isCurrentField = function (a) {
	return this.currentField && this.currentField == a && !this.currentField.group
};
InlineEditData.prototype.closeCurrentField = function (a, c, b) {
	"undefined" === typeof c && (c = !0);
	this.currentField && (this.currentField.group ? (this.closeGroup(this.currentField.group, c), this.currentField = null) : !1 !== this.currentField.closeField(c, b) && (this.currentField = null))
};
InlineEditData.prototype.closeGroup = function (a) {
	for (var c = 0; c < a.length; c++) {
		var b = this.fields[a[c]];
		if (b.state == InlineEditState.EDIT) {
			var d = b.getValueFromEdit();
			b.isDifferentValue(d) ? (b.changed || (b.changed = !0, addStyleClass(b.readDiv, "inlineEditModified")), b.currentValue = d, b.updateReadElement(), b.updateDependents(), b.changed && (b.readDiv.appendChild(b.undoButton), b.attachUndoButtonImage(), b.undoButton.style.display = "inline")) : b.changed && (b.changed = !1, b.currentValue = d, delStyleClass(b.readDiv, "inlineEditModified"),
				b.updateReadElement(), b.undoButton.style.display = "none")
		}
	}
	InlineEditField.overlay.hide()
};
InlineEditData.prototype.resetCurrentField = function () {
	this.resetField(this.currentField);
	this.currentField = null
};
InlineEditData.prototype.resetFieldById = function (a) {
	this.resetField(this.fields[a])
};
InlineEditData.prototype.resetField = function (a) {
	a && (a.group ? this.resetGroup(a.group) : a.reset(!0))
};
InlineEditData.prototype.resetGroup = function (a) {
	for (var c = 0; c < a.length; c++) {
		var b = this.fields[a[c]];
		b.state == InlineEditState.EDIT && b.reset(!0)
	}
	InlineEditField.overlay.hide()
};
InlineEditData.prototype.getField = function (a) {
	return a ? this.visualforce ? a.toString().match(this.visualforce) ? this.fields[a] : this.fields[a.toString() + this.visualforce] : this.fields[a] : null
};
InlineEditData.prototype.save = function () {
	if (this.isEditable) {
		this.closeCurrentField();
		var a = {};
		a[InlineEditConstants.ENTITY_ID] = this.id;
		a[InlineEditConstants.LAST_MOD] = this.sysMod;
		a[CSRFConstants.CSRF_TOKEN] = this.csrf_token;
		a[EditPageConstants.pSAVE] = "1";
		DesktopContext.setCurrentDesktopParam(a);
		for (var c in this.fields) {
			var b = this.fields[c];
			b && b.doPost() && (b.clearError(), b.addSaveData(a))
		}
		this.visualforce && (a = sfdcPage.postProcessSaveData(a, this.visualforce));
		var d = this;
		Sfdc.Ajax.post(UserContext.getUrl("/ui/common/InlineEditEntitySave"),
			function (a) {
			d.handleResponse(a)
		}, {
			data : a,
			escape : encodeURIComponent,
			failure : function (a) {
				a = escape(window.location.pathname + window.location.search);
				window.location.replace(UserContext.getUrl("/ex/errorduringprocessing.jsp?retURL\x3d") + a)
			}
		})
	}
};
InlineEditData.prototype.handleResponse = function (a) {
	a = Util.evalAjaxServletOutput(a);
	a[InlineEditConstants.SUCCESS] ? (a = a[InlineEditConstants.AFTER_SAVE_REDIRECT_URL], this.visualforce && sfdcPage.renderDetail ? sfdcPage.renderDetail(this.visualforce) : a ? (sfdcPage.callListeners(DetailPage.REFRESH_EVENT), navigateToUrl(a, "DETAIL")) : sfdcPage.refreshDetail()) : (this.csrf_token = a[CSRFConstants.CSRF_TOKEN], this.handleErrors(a))
};
InlineEditData.prototype.handleErrors = function (a) {
	sfdcPage.setError(a[InlineEditConstants.NON_SPECIFIC_ERRORS], this.visualforce);
	a = a[InlineEditConstants.VALIDATION_ERRORS];
	var c,
	b;
	for (b in a) {
		var d = this.getField(b);
		if (d) {
			if (!d.compound && !d.group && (!c || c.tableCell.offsetTop > d.tableCell.offsetTop))
				c = d;
			d.setError(a[b])
		}
	}
	c && c.state == InlineEditState.EDIT && this.openField(c)
};
InlineEditData.prototype.revert = function () {
	if (this.isEditable) {
		this.closeCurrentField(!0);
		var a = {},
		c;
		for (c in this.fields) {
			var b = this.fields[c];
			b && (b.changed ? b.group ? a[b.group[0]] = !0 : b.reset() : b.clearError())
		}
		for (c in a)
			this.resetGroup(this.fields[c].group)
	}
};
InlineEditData.prototype.loadDynamicData = function () {
	if (!this.sentRequest) {
		this.sentRequest = !0;
		var a = this;
		Sfdc.Resource.addJavaScript(this.dynamicDataUrl, function () {
			a.dynamicDataLoaded()
		})
	}
};
InlineEditData.prototype.dynamicDataLoaded = function () {
	this.loadedDynamicData || (this.loadedDynamicData = !0, this.currentField.waitForLoad && (this.openField(this.currentField), this.visualforce && sfdcPage.registerPickList(this.visualforce, pl)))
};
function InlineEditField() {
	this.readDiv = this.tableCell = this.id = null;
	this.created = !1;
	this.editDiv = null;
	this.state = InlineEditState.NONE;
	this.required = !1;
	this.currentValue = this.initialHTML = this.initialValue = this.label = null;
	this.changed = !1;
	this.errorDiv = this.error = this.undoButton = null;
	this.waitForLoad = this.compound = !1;
	this.controllerId = null;
	this.saveOnEnter = !1
}
InlineEditField.overlay = null;
InlineEditField.prototype.init = function (a, b, c, e, d) {
	this.id = a;
	this.state = b;
	this.required = c;
	this.isColumn = e;
	this.currentValue = this.initialValue = void 0 === d || null === d ? "" : d;
	this.isColumn || (this.tableCell = getElementByIdCS(a + InlineEditConstants.CELL_ID), this.readDiv = getElementByIdCS(a + InlineEditConstants.INNER_ID), !this.tableCell || !this.readDiv ? this.state = InlineEditState.NONE : this.initialHTML = this.readDiv.innerHTML)
};
InlineEditField.prototype.isDifferentValue = function (a) {};
InlineEditField.prototype.openField = function () {};
InlineEditField.prototype.showEdit = function () {};
InlineEditField.prototype.hideEdit = function () {};
InlineEditField.prototype.closeField = function () {};
InlineEditField.prototype.createEditElements = function () {};
InlineEditField.prototype.getValueFromEdit = function () {
	return null
};
InlineEditField.prototype.updateReadElement = function () {};
InlineEditField.prototype.updateEditElementImpl = function () {};
InlineEditField.prototype.formatValue = function () {};
InlineEditField.prototype.addSaveData = function (a) {};
InlineEditField.prototype.createDummy = function () {};
InlineEditField.prototype.load = function () {};
InlineEditField.prototype.mayUndo = function () {
	return !0
};
InlineEditField.prototype.updateEditElement = function () {
	this.created && this.updateEditElementImpl()
};
InlineEditField.prototype.doPost = function () {
	return this.state == InlineEditState.EDIT || this.state == InlineEditState.POSTONLY
};
InlineEditField.prototype.reset = function () {};
InlineEditField.prototype.cleanValue = function (a) {
	return a && a.replace ? this.cleanValueNoBR(a).replace(/'/g, "\x26#39;").replace(/"/g, "\x26quot;").replace(/\n/g, "\x3cbr\x3e") : a
};
InlineEditField.prototype.getDeletedValue = function () {
	return this.isColumn ? "" : "\x3cem\x3e" + LC.getLabel("Global", "deleted") + "\x3c/em\x3e"
};
InlineEditField.prototype.cleanValueNoBR = function (a) {
	return a && a.replace ? a.replace(/&/g, "\x26amp;").replace(/</g, "\x26lt;").replace(/>/g, "\x26gt;") : a
};
InlineEditField.prototype.createUndoButton = function () {
	this.undoButton = document.createElement("a");
	this.undoButton.className = "inlineEditUndoLink";
	this.undoButton.title = LC.getLabel("Icons", "inlineEditUndo");
	this.undoButton.href = "javascript:sfdcPage.getInlineEditData('" + this.id + "').resetFieldById('" + this.id + "');";
	this.attachUndoButtonImage()
};
InlineEditField.prototype.attachUndoButtonImage = function () {
	null === this.undoButton || "" != this.undoButton.innerHTML || (this.undoButton.innerHTML = "\x3cimg width\x3d'16px' height\x3d'16px' src\x3d'/s.gif' alt\x3d'" + LC.getLabel("Icons", "inlineEditUndo") + "' class\x3d'inlineEditUndo'\x3e")
};
InlineEditField.prototype.getFieldLabel = function () {
	if (this[VisualforceConstants.LABEL])
		return this[VisualforceConstants.LABEL];
	for (var a = this.tableCell.previousSibling; a && a.nodeType != Node.TEXT_NODE; )
		a = a.firstChild;
	return a ? a.nodeValue : ""
};
InlineEditField.prototype.setError = function (a) {
	this.error = a;
	this.errorDiv ? (this.errorDiv.innerHTML = this.error, this.errorDiv.style.display = "block") : (this.errorDiv = document.createElement("div"), this.errorDiv.className = "errorMsg", this.errorDiv.innerHTML = this.error, this.tableCell.appendChild(this.errorDiv))
};
InlineEditField.prototype.updateDependents = function () {
	if (this.dependentIds)
		for (var a = 0; a < this.dependentIds.length; a++) {
			var b = sfdcPage.getFieldById(this.dependentIds[a]);
			b.lookupAutoCompleter && b.lookupAutoCompleter.clearCache();
			b.performValidation && "" != b.currentValue[0] && b.performValidation()
		}
};
InlineEditField.prototype.clearError = function () {
	this.errorDiv && (this.errorDiv.style.display = "none");
	this.error = null
};
InlineEditField.prototype.getCSSClass = function () {
	return this.state.cssClass
};
InlineEditField.prototype.getCSSHoverClass = function () {
	return this.state.cssClass + "On"
};
InlineEditField.createField = function (a) {
	var b = InlineEditField.resolveSwitchableField(a),
	c = a[InlineEditConstants.FIELD_ID],
	e = InlineEditState[a[InlineEditConstants.FIELD_STATE]],
	d = a[InlineEditConstants.FIELD_REQUIRED],
	m = a[InlineEditConstants.FIELD_VALUE],
	g = {};
	if (b && b.inlineEditExtraData)
		for (var f = 0; f < b.inlineEditExtraData.length; f++)
			g[b.inlineEditExtraData[f]] = a[b.inlineEditExtraData[f]];
	try {
		if (b && b.inlineEditFieldObject && c && e) {
			var h = sfdcPage.getInlineEditData(c),
			n = h.visualforce ? c.replace(h.visualforce,
					"") : c,
			k = InlineEditField.specialFieldMappings[n];
			if (k)
				var l = k(a);
			return new(l ? l : b.inlineEditFieldConstructor())(c, e, d, !1, m, g)
		}
	} catch (p) {}

	return null
};
InlineEditField.resolveSwitchableField = function (a) {
	var b = ColumnType[a[InlineEditConstants.FIELD_TYPE]];
	return b == ColumnType.SWITCHABLE_PERSONNAME ? ColumnType[a[InlineEditConstants.OVERRIDE_TYPE]] : b
};
InlineEditField.specialFieldMappings = {
	opp11 : function (a) {
		if (window.OpportunityInlineEditing.OpportunityStageField)
			return OpportunityInlineEditing.OpportunityStageField
	},
	ForecastCategoryName : function (a) {
		if (window.OpportunityInlineEditing.OpportunityForecastingField)
			return OpportunityInlineEditing.OpportunityForecastingField
	},
	opp2 : function (a) {
		if (window.OpportunityInlineEditing.OpportunityPrivateCheckboxField)
			return OpportunityInlineEditing.OpportunityPrivateCheckboxField
	}
};

function PreferenceBits(c, d) {
	this.bitsByName = {};
	this.preferenceType = c;
	for (var a = 0; a < d.length; a++) {
		var b = d[a];
		this.bitsByName[b.name] = {
			index : b.index,
			val : b.value
		}
	}
}
PreferenceBits.prototype.csrfToken = null;

PreferenceBits.prototype.getBoolean = function (c) {
	return this.bitsByName[c].val
};
PreferenceBits.prototype.getIndexByName = function (c) {
	return this.bitsByName[c].index
};
PreferenceBits.prototype.setBoolean = function (c, d, a) {
	if ("boolean" == typeof d) {
		var b = this.bitsByName[c];
		b && b.val != d && (this.bitsByName[c].val = d, this.save(c, a))
	}
};
PreferenceBits.prototype.save = function (c, d) {
	var a = this.bitsByName[c];
	if (a) {
		var b = {};
		b.csrf = PreferenceBits.prototype.csrfToken;
		var e = {};
		e.val = a.val;
		e.bit = a.index;
		a = {};
		a.headers = b;
		a.data = e;
		b = "";
		!this.preferenceType || "userPreferences" == this.preferenceType ? b = "/_ui/common/request/servlet/UserPreferencesServlet" : "orgPreferences" == preferenceType && (b = "/_ui/common/request/servlet/OrgPreferencesServlet");
		Sfdc.Ajax.post(UserContext.getUrl(b), d || function () {}, a)
	}
};
function DateUtil() {}

DateUtil.MONTH_NAMES = "January February March April May June July August September October November December Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
DateUtil.DAY_NAMES = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday Sun Mon Tue Wed Thu Fri Sat".split(" ");
DateUtil.LZ = function (a) {
	return (0 > a || 9 < a ? "" : "0") + a
};
DateUtil.isDate = function (a, c) {
	return 0 === DateUtil.getDateFromFormat(a, c) ? !1 : !0
};
DateUtil.compareDates = function (a, c, b, h) {
	a = DateUtil.getDateFromFormat(a, c);
	b = DateUtil.getDateFromFormat(b, h);
	return 0 === a || 0 === b ? -1 : a > b ? 1 : 0
};
DateUtil.formatDate = function (a, c) {
	c += "";
	var b = "",
	h = 0,
	f = "",
	d = "",
	f = a.getFullYear() + "",
	d = a.getMonth() + 1,
	p = a.getDate(),
	q = a.getDay(),
	k = a.getHours(),
	m = a.getMinutes(),
	l = a.getSeconds(),
	e = {};
	LC.isThaiTHLocale() && (f = f - 0 + LC.BUDDHIST_CAL_OFFSET + "");
	e.y = "" + f;
	e.yyyy = f;
	e.yy = f.substring(2, 4);
	e.M = d;
	e.MM = DateUtil.LZ(d);
	e.MMM = DateUtil.MONTH_NAMES[d - 1];
	e.NNN = DateUtil.MONTH_NAMES[d + 11];
	e.d = p;
	e.dd = DateUtil.LZ(p);
	e.E = DateUtil.DAY_NAMES[q + 7];
	e.EE = DateUtil.DAY_NAMES[q];
	e.H = k;
	e.HH = DateUtil.LZ(k);
	e.h = 0 === k ? 12 : 12 < k ? k - 12 : k;
	e.hh =
		DateUtil.LZ(e.h);
	e.K = 11 < k ? k - 12 : k;
	e.k = k + 1;
	e.KK = DateUtil.LZ(e.K);
	e.kk = DateUtil.LZ(e.k);
	e.a = 11 < k ? DateUtil.getPMSymbol() : DateUtil.getAMSymbol();
	e.m = m;
	e.mm = DateUtil.LZ(m);
	e.s = l;
	for (e.ss = DateUtil.LZ(l); h < c.length; ) {
		f = c.charAt(h);
		for (d = ""; c.charAt(h) == f && h < c.length; )
			d += c.charAt(h++);
		b = Sfdc.isDefAndNotNull(e[d]) ? b + e[d] : b + d
	}
	return b
};
DateUtil._isInteger = function (a) {
	for (var c = 0; c < a.length; c++)
		if (-1 == "1234567890".indexOf(a.charAt(c)))
			return !1;
	return !0
};
DateUtil._getInt = function (a, c, b, h) {
	for (; h >= b; h--) {
		var f = a.substring(c, c + h);
		if (f.length < b)
			break;
		if (DateUtil._isInteger(f))
			return f
	}
	return null
};
DateUtil.getDateFromFormat = function (a, c) {
	a += "";
	c += "";
	for (var b = 0, h = 0, f = "", d = "", p, q, k = new Date, m = k.getFullYear(), l = k.getMonth() + 1, e = 1, g = k.getHours(), r = k.getMinutes(), k = k.getSeconds(), n = ""; h < c.length; ) {
		f = c.charAt(h);
		for (d = ""; c.charAt(h) == f && h < c.length; )
			d += c.charAt(h++);
		if ("yyyy" == d || "yy" == d || "y" == d) {
			"yyyy" == d && (p = 2, q = 4);
			"yy" == d && (q = p = 2);
			"y" == d && (p = 2, q = 4);
			m = DateUtil._getInt(a, b, p, q);
			if (null === m)
				return 0;
			b += m.length;
			2 == m.length && (m = 70 < m ? 1900 + (m - 0) : 2E3 + (m - 0))
		} else if ("MMM" == d || "NNN" == d) {
			for (f = l = 0; f < DateUtil.MONTH_NAMES.length; f++) {
				var s =
					DateUtil.MONTH_NAMES[f];
				if (a.substring(b, b + s.length).toLowerCase() == s.toLowerCase() && ("MMM" == d || "NNN" == d && 11 < f)) {
					l = f + 1;
					12 < l && (l -= 12);
					b += s.length;
					break
				}
			}
			if (1 > l || 12 < l)
				return 0
		} else if ("EE" == d || "E" == d)
			for (f = 0; f < DateUtil.DAY_NAMES.length; f++) {
				if (d = DateUtil.DAY_NAMES[f], a.substring(b, b + d.length).toLowerCase() == d.toLowerCase()) {
					b += d.length;
					break
				}
			}
		else if ("MM" == d || "M" == d) {
			l = DateUtil._getInt(a, b, 1, 2);
			if (null === l || 1 > l || 12 < l)
				return 0;
			b += l.length
		} else if ("dd" == d || "d" == d) {
			e = DateUtil._getInt(a, b, 1, 2);
			if (null ===
				e || 1 > e || 31 < e)
				return 0;
			b += e.length
		} else if ("hh" == d || "h" == d) {
			g = DateUtil._getInt(a, b, d.length, 2);
			if (null === g || 1 > g || 12 < g)
				return 0;
			b += g.length
		} else if ("HH" == d || "H" == d) {
			g = DateUtil._getInt(a, b, d.length, 2);
			if (null === g || 0 > g || 23 < g)
				return 0;
			b += g.length
		} else if ("KK" == d || "K" == d) {
			g = DateUtil._getInt(a, b, d.length, 2);
			if (null === g || 0 > g || 11 < g)
				return 0;
			b += g.length
		} else if ("kk" == d || "k" == d) {
			g = DateUtil._getInt(a, b, d.length, 2);
			if (null === g || 1 > g || 24 < g)
				return 0;
			b += g.length;
			g--
		} else if ("mm" == d || "m" == d) {
			r = DateUtil._getInt(a, b,
					d.length, 2);
			if (null === r || 0 > r || 59 < r)
				return 0;
			b += r.length
		} else if ("ss" == d || "s" == d) {
			k = DateUtil._getInt(a, b, d.length, 2);
			if (null === k || 0 > k || 59 < k)
				return 0;
			b += k.length
		} else if ("a" == d) {
			n = DateUtil.getAMSymbol();
			d = DateUtil.getPMSymbol();
			f = a.substring(b, b + n.length);
			s = a.substring(b, b + d.length);
			if (!(f == n || f.toUpperCase() == n))
				if (s == d || s.toUpperCase() == d)
					n = d;
				else
					return 0;
			b += n.length
		} else {
			if (a.substring(b, b + d.length) != d)
				return 0;
			b += d.length
		}
	}
	if (b != a.length)
		return 0;
	LC.isThaiTHLocale() && (m -= LC.BUDDHIST_CAL_OFFSET);
	if (2 == l)
		if (0 === m % 4 && 0 !== m % 100 || 0 === m % 400) {
			if (29 < e)
				return 0
		} else if (28 < e)
			return 0;
	if ((4 == l || 6 == l || 9 == l || 11 == l) && 30 < e)
		return 0;
	12 > g && n == DateUtil.getPMSymbol() ? g = g - 0 + 12 : 11 < g && n == DateUtil.getAMSymbol() && (g -= 12);
	return (new Date(m, l - 1, e, g, r, k)).getTime()
};
DateUtil.parseDate = function (a) {
	var c = 2 == arguments.length ? arguments[1] : !1;
	generalFormats = "y-M-d;MMM d, y;MMM d,y;y-MMM-d;d-MMM-y;MMM d".split(";");
	monthFirst = "M/d/y M-d-y M.d.y MMM-d M/d M-d M.d".split(" ");
	dateFirst = "d/M/y d-M-y d.M.y d-MMM d/M d-M d.M".split(" ");
	for (var c = ["generalFormats", c ? "dateFirst" : "monthFirst", c ? "monthFirst" : "dateFirst"], b = null, h = 0; h < c.length; h++)
		for (var f = window[c[h]], d = 0; d < f.length; d++)
			if (b = DateUtil.getDateFromFormat(a, f[d]), 0 !== b)
				return new Date(b);
	return null
};
DateUtil.TIMEZONES = null;
DateUtil.getTimezoneOffset = function () {
	var a = new Date,
	c = 6E4 * a.getTimezoneOffset(),
	b = DateUtil.getTimezoneIndex(a);
	DateUtil.TIMEZONES || (DateUtil.TIMEZONES = DateUtil.getTimezones(a));
	return DateUtil.TIMEZONES[b] + c
};
DateUtil.isBrowserAndSystemTimezoneSame = function () {
	return 0 === DateUtil.getTimezoneOffset()
};
DateUtil.getTimezoneIndex = function (a) {
	return DateUtil.formatDate(a, "yyyyMMdd")
};
DateUtil.getTimezones = function (a) {
	a = Sfdc.Url.generateUrl(UserContext.getUrl("/home/timezones.jsp"), {
			ts : a.getTime()
		});
	return (a = Sfdc.Ajax.request(a, {
				async : !1
			})) ? Sfdc.JSON.parse(a) : null
};
DateUtil.rollDate = function (a, c) {
	var b = new Date(a.getTime());
	b.setDate(b.getDate() + c);
	return b
};
DateUtil.roundDate = function (a) {
	a = new Date(a.getTime());
	a.setHours(0);
	a.setMinutes(0);
	a.setSeconds(0);
	return a
};
DateUtil.getDateStringFromUserLocale = function (a) {
	return DateUtil.formatDate(a, UserContext.dateFormat)
};
DateUtil.getDateFromUserLocale = function (a) {
	return new Date(DateUtil.getDateFromFormat(a, UserContext.dateFormat))
};
DateUtil.getDateTimeStringFromUserLocale = function (a) {
	return DateUtil.formatDate(a, UserContext.dateTimeFormat)
};
DateUtil.getDateTimeFromUserLocale = function (a) {
	return new Date(DateUtil.getDateFromFormat(a, UserContext.dateTimeFormat))
};
DateUtil.getTimeStringFromUserLocale = function (a) {
	return DateUtil.formatDate(a, UserContext.timeFormat)
};
DateUtil.getTimeFromUserLocale = function (a) {
	return new Date(DateUtil.getDateFromFormat(a, UserContext.timeFormat))
};
DateUtil.getAMSymbol = function () {
	return UserContext.initialized ? UserContext.ampm[0] : "AM"
};
DateUtil.getPMSymbol = function () {
	return UserContext.initialized ? UserContext.ampm[1] : "PM"
};
DateUtil.is24Hour = function (a) {
	return -1 < a.indexOf("k")
};
DateUtil.hasAMPM = function (a) {
	return -1 < a.indexOf("a")
};
DateUtil.equals = function (a, c) {
	return a && c && 0 === DateUtil.compare(a, c)
};
DateUtil.lessThan = function (a, c) {
	return 0 > DateUtil.compare(a, c)
};
DateUtil.greaterThan = function (a, c) {
	return 0 < DateUtil.compare(a, c)
};
DateUtil.compare = function (a, c) {
	return a.getFullYear() != c.getFullYear() ? a.getFullYear() - c.getFullYear() : a.getMonth() != c.getMonth() ? a.getMonth() - c.getMonth() : a.getDate() - c.getDate()
};
DateUtil.separators = ["/", "-", "."];
DateUtil.checkYear = function (a, c) {
	var b = a.value.toLowerCase();
	if (b = DateUtil.getCheckYearValue(b))
		if (a.value = b, c && a.onchange)
			a.onchange()
};
DateUtil.getCheckYearValue = function (a) {
	if (!(a && 0 < a.length))
		return null;
	for (var c = null, b = 0; b < DateUtil.separators.length; b++)
		if (-1 != a.indexOf(DateUtil.separators[b])) {
			c = DateUtil.separators[b];
			break
		}
	b = DateUtil.getDateTimeFromUserLocale(UserContext.today);
	if (c)
		if (b.setDate(1), a = a.split(c), 2 == a.length) {
			if (!isNaN(parseInt(a[0], 10)) && !isNaN(parseInt(a[1], 10)))
				return b.setMonth(parseInt(a[0], 10) - 1), b.setDate(parseInt(a[1], 10)), DateUtil.getDateStringFromUserLocale(b)
		} else {
			if (3 == a.length && !isNaN(parseInt(a[2],
						10)) && !isNaN(parseInt(a[0], 10)) && !isNaN(parseInt(a[1], 10))) {
				var h = parseInt(a[2], 10);
				if (1 > h / 1E3)
					return b.setMonth(parseInt(a[0], 10) - 1), b.setDate(parseInt(a[1], 10)), 60 <= h && 100 > h ? b.setFullYear(h + 1900) : b.setFullYear(h + 2E3), DateUtil.getDateStringFromUserLocale(b);
				if ("/" != c)
					return a[0] + "/" + a[1] + "/" + a[2]
			}
		}
	else
		return DateUtil.getEvaluateShortcutValue(a)
};
DateUtil.DAY_SHORTCUTS = "Sun Mon Tue Wed Thu Fri Sat".split(" ");
DateUtil.evaluateShortcut = function (a, c) {
	var b = a.value.toLowerCase();
	if (b = DateUtil.getEvaluateShortcutValue(b))
		if (a.value = b, c && a.onchange)
			a.onchange()
};
DateUtil.getEvaluateShortcutValue = function (a) {
	if (!(a && 0 < a.length))
		return null;
	var c = DateUtil.getDateTimeFromUserLocale(UserContext.today);
	if (0 === a.indexOf("tod"))
		return DateUtil.getDateStringFromUserLocale(c);
	if (0 === a.indexOf("yes"))
		return c.setDate(c.getDate() - 1), DateUtil.getDateStringFromUserLocale(c);
	if (0 === a.indexOf("tom"))
		return c.setDate(c.getDate() + 1), DateUtil.getDateStringFromUserLocale(c);
	if (3 <= a.length)
		for (var b = 0; b < DateUtil.DAY_SHORTCUTS.length; b++)
			if (0 === a.indexOf(DateUtil.DAY_SHORTCUTS[b].toLowerCase()))
				return a =
					b - c.getDay(), 0 > a && (a += 7), c.setDate(c.getDate() + a), DateUtil.getDateStringFromUserLocale(c);
	return null
};
DateUtil.differenceInMinutes = function (a, c) {
	var b = c.getTime() - a.getTime();
	return Math.round(b / 6E4)
};
DateUtil.getDateFromValue = function (a, c) {
	var b = c ? DateUtil.getDateFromFormat(a, UserContext.dateTimeFormat) : DateUtil.getDateFromFormat(a, UserContext.dateFormat);
	return 0 !== b ? new Date(b) : null
};
function DomUtil() {}

DomUtil.importNode = function (a, b) {
	if (a) {
		if (b.importNode)
			return b.importNode(a, !1);
		for (var e = b.createElement(a.tagName), c = 0; c < a.attributes.length; c++)
			a.attributes[c].specified && e.setAttribute(a.attributes[c].name, a.attributes[c].value);
		return e
	}
	Sfdc.error("invalid Node")
};
DomUtil.copyScripts = function (a, b, e, c) {
	b = b.body.parentNode.firstChild;
	a = a.getElementsByTagName("SCRIPT");
	for (var f = b.getElementsByTagName("SCRIPT"), d = a.length, l = {}, m = function () {
		"function" === typeof c && 0 === --d && c()
	}, g = 0; g < f.length; g++)
		l[f[g].src] = !0;
	for (var h = 0; h < a.length; h++) {
		g = a[h];
		f = !1;
		if (g.src && e)
			for (var k = 0; k < e.length; k++) {
				if (-1 !== g.src.indexOf(e[k])) {
					f = !0;
					d--;
					break
				}
			}
		else
			d--;
		!f && g.src && (l[g.src] ? c && 0 === --d && c() : Sfdc.Resource.addJavaScript(g.src, m, b))
	}
};
DomUtil.copyCSS = function (a, b, e) {
	for (var c = b.body.parentNode.firstChild, f = 0, d; f < a.styleSheets.length; f++)
		d = a.styleSheets[f], d = d.ownerNode ? DomUtil.importNode(d.ownerNode, b) : DomUtil.importNode(d.owningElement, b), e && (d.href && d.href.replace) && (d.href = d.href.replace("/sCSS/", "/sCSS" + e + "/")), c.appendChild(d)
};
DomUtil.copyScriptsCssBodyClass = function (a, b, e, c) {
	DomUtil.copyCSS(a, b);
	DomUtil.copyScripts(a, b, e, c);
	b.body.className = a.body.className
};
DomUtil.setHelpLink = function (a, b, e, c) {
	e && c && (b = UserContext.getUrl("/help/doc/user_ed.jsp?loc\x3dhelp\x26target\x3d") + e + "\x26section\x3d" + c);
	if (a = Sfdc.get(".helpLink", a))
		if ((a = a.parentNode) && a.href && 0 < a.href.indexOf("openPopupFocusEscapePounds"))
			a.href = a.href.replace(/'.*?'/, "'" + b + "'")
};
function Map() {
	this.size = 0;
	this.map = {}

}
Map.prototype.put = function (a, b) {
	a && "undefined" != typeof b && (a in this.map || this.size++, this.map[a] = b)
};
Map.prototype.remove = function (a) {
	a in this.map && (delete this.map[a], this.size--)
};
Map.prototype.get = function (a) {
	return this.map[a]
};
Map.prototype.getSize = function () {
	return this.size
};
Map.prototype.containsKey = function (a) {
	return null != this.get(a)
};
Map.prototype.each = function (a) {
	for (var b in this.map)
		a(b)
};
var UrlMap = new function () {
	this.urlMap = [];
	this.urlMap.EventTeamView = UserContext.getUrl("/appex/calendar/cal.jsp");
	this.urlMap.Login = UserContext.getUrl("/secur/login_page.jsp");
	this.urlMap.Home = UserContext.getUrl("/home/home.jsp");
	this.urlMap.Inviter = UserContext.getUrl("/email/inviter.jsp");
	this.urlMap.ComboBox = UserContext.getUrl("/widg/combobox.jsp");
	this.urlMap.EmailAuthorPopupCloser = UserContext.getUrl("/email/author/popupcloser.jsp");
	this.urlMap.BlankPage = UserContext.getUrl("/blank.html");
	this.getURL =
	function (b) {
		return this.urlMap[b]
	};
	this.convertClassNameToUrl = function (b, c) {
		var a = new String(UserContext.getUrl("/")),
		d = new String(b);
		0 != d.indexOf(JSPDispatcher.STANDARD_PACKAGE + ".") && (a = a.concat(JSPDispatcher.NONSTANDARD_PACKAGE_PREFIX));
		a = a.concat(d.replace(/\./g, "/"));
		null != c && (a = a.concat(c.toString()));
		return a.valueOf()
	}
};
var dpdLkUtil = {
	scrapePage : function (a, c) {
		for (var d = [sfdcPage.getEntityId(c)], b = 0; b < a.length; b++)
			if (a[b] && 0 < a[b].length) {
				var e = sfdcPage.getFieldValueById(a[b]);
				d.push("string" == typeof e ? e.replace("\u00a0", " ") : e)
			} else
				d.push(void 0);
		return d
	},
	serialize : function (a, c) {
		return Sfdc.JSON.stringify(dpdLkUtil.scrapePage(a, c))
	}
};
var isIE = -1 != navigator.appVersion.indexOf("MSIE") ? !0 : !1, isWin = -1 != navigator.appVersion.toLowerCase().indexOf("win") ? !0 : !1, isOpera = -1 != navigator.userAgent.indexOf("Opera") ? !0 : !1, isIPad = -1 != navigator.userAgent.indexOf("iPad") ? !0 : !1, isIPhone = -1 != navigator.userAgent.indexOf("iPhone") ? !0 : !1;
function controlVersion() {
	var a,
	c;
	try {
		c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),
		a = c.GetVariable("$version")
	} catch (g) {}

	if (!a)
		try {
			c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),
			a = "WIN 6,0,21,0",
			c.AllowScriptAccess = "always",
			a = c.GetVariable("$version")
		} catch (d) {}

	if (!a)
		try {
			c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3"),
			a = c.GetVariable("$version")
		} catch (b) {}

	if (!a)
		try {
			new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3"),
			a = "WIN 3,0,18,0"
		} catch (e) {}

	if (!a)
		try {
			new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
			a = "WIN 2,0,0,11"
		} catch (f) {
			a = -1
		}
	return a
}
function getSwfVer() {
	var a = -1;
	if (null !== navigator.plugins && 0 < navigator.plugins.length) {
		if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
			var a = navigator.plugins["Shockwave Flash" + (navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "")].description.split(" "),
			c = a[2].split("."),
			g = c[0],
			c = c[1],
			d = a[3];
			"" === d && (d = a[4]);
			"d" == d[0] ? d = d.substring(1) : "r" == d[0] && (d = d.substring(1), 0 < d.indexOf("d") && (d = d.substring(0, d.indexOf("d"))));
			a = g + "." + c + "." + d
		}
	} else  - 1 != navigator.userAgent.toLowerCase().indexOf("webtv/2.6") ?
		a = 4 : -1 != navigator.userAgent.toLowerCase().indexOf("webtv/2.5") ? a = 3 : -1 != navigator.userAgent.toLowerCase().indexOf("webtv") ? a = 2 : isIE && (isWin && !isOpera) && (a = controlVersion());
	return a
}
function detectFlashVer(a, c, g) {
	versionStr = getSwfVer();
	if (-1 == versionStr)
		return !1;
	if (0 !== versionStr) {
		isIE && isWin && !isOpera ? (tempArray = versionStr.split(" "), tempString = tempArray[1], versionArray = tempString.split(",")) : versionArray = versionStr.split(".");
		var d = versionArray[0],
		b = versionArray[1],
		e = versionArray[2];
		return d > parseFloat(a) || d == parseFloat(a) && (b > parseFloat(c) || b == parseFloat(c) && e >= parseFloat(g)) ? !0 : !1
	}
}
function ac_AddExtension(a, c) {
	return -1 != a.indexOf("?") ? a.replace(/\?/, c + "?") : a + c
}
function ac_Generateobj(a, c, g, d) {
	var b = "",
	e;
	if (isIE && isWin && !isOpera) {
		b += "\x3cobject ";
		for (e in c)
			"parent" != e && (b += e + '\x3d"' + c[e] + '" ');
		b += "\x3e";
		for (e in g)
			g.hasOwnProperty(e) && (b += '\x3cparam name\x3d"' + e + '" value\x3d"' + g[e] + '" /\x3e ');
		b += "\x3cp\x3e" + LC.getLabel("ContentFlashPlayer", "flashFilePreview") + "\x3c/p\x3e\x3c/object\x3e"
	} else {
		b += "\x3cembed ";
		for (e in d)
			d.hasOwnProperty(e) && "function" != typeof d[e] && (b += e + '\x3d"' + d[e] + '" ');
		b += "\x3e\x3cnoembed\x3e\x3cp\x3e" + LC.getLabel("ContentFlashPlayer",
			"flashFilePreview") + "\x3c/p\x3e\x3c/noembed\x3e\x3c/embed\x3e"
	}
	a.innerHTML = b
}
function ac_GetArgs(a, c, g, d, b) {
	for (var e = {
			embedAttrs : {},
			params : {},
			objAttrs : {}

		}, f = 0; f < a.length; f += 2)
		switch (a[f].toLowerCase()) {
		case "parent":
			e.parent = a[f + 1];
			break;
		case "classid":
			break;
		case "pluginspage":
			e.embedAttrs[a[f]] = a[f + 1];
			break;
		case "src":
		case "movie":
			a[f + 1] = ac_AddExtension(a[f + 1], c);
			e.embedAttrs.src = a[f + 1];
			e.params[g] = a[f + 1];
			break;
		case "onafterupdate":
		case "onbeforeupdate":
		case "onblur":
		case "oncellchange":
		case "onclick":
		case "ondblClick":
		case "ondrag":
		case "ondragend":
		case "ondragenter":
		case "ondragleave":
		case "ondragover":
		case "ondrop":
		case "onfinish":
		case "onfocus":
		case "onhelp":
		case "onmousedown":
		case "onmouseup":
		case "onmouseover":
		case "onmousemove":
		case "onmouseout":
		case "onkeypress":
		case "onkeydown":
		case "onkeyup":
		case "onload":
		case "onlosecapture":
		case "onpropertychange":
		case "onreadystatechange":
		case "onrowsdelete":
		case "onrowenter":
		case "onrowexit":
		case "onrowsinserted":
		case "onstart":
		case "onscroll":
		case "onbeforeeditfocus":
		case "onactivate":
		case "onbeforedeactivate":
		case "ondeactivate":
		case "type":
		case "codebase":
			e.objAttrs[a[f]] = a[f +
					1];
			break;
		case "id":
		case "width":
		case "height":
		case "align":
		case "vspace":
		case "hspace":
		case "class":
		case "title":
		case "accesskey":
		case "name":
		case "tabindex":
			e.embedAttrs[a[f]] = e.objAttrs[a[f]] = a[f + 1];
			break;
		default:
			e.embedAttrs[a[f]] = e.params[a[f]] = a[f + 1]
		}
	e.objAttrs.classid = d;
	b && (e.embedAttrs.type = b);
	return e
}
function ac_FL_RunContent() {
	var a = ac_GetArgs(arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000", "application/x-shockwave-flash");
	ac_Generateobj(a.parent, a.objAttrs, a.params, a.embedAttrs)
}
function getFlexRoot(a) {
	return -1 != navigator.appName.indexOf("Microsoft") ? window[a] : document[a]
}
function sizeImagePreview(a, c, g, d) {
	var b = document.getElementById(a),
	e = b.height / b.width,
	f = "0px";
	b.width >= c && e <= g / c ? (b.width = c, b.height = b.width * e) : b.height >= g && (b.height = g, b.width = b.height / e);
	b.height < g && (f = 0.45 * (g - b.height) + "px");
	b.style.marginTop = f;
	d ? Ext.fly(a).removeClass(d) : Ext.fly(a).dom.style.display = "block"
}
function onPreviewSuccess(a, c, g, d) {
	sizeImagePreview(a, c, g, d);
	if (a = Ext.fly("fullPreviewNotSupported"))
		a.dom.style.display = "block"
}
function showPreviewError(a) {
	a = Ext.fly(a).parent("div");
	if ("chatterFileViewerPanel" == a.dom.id)
		a.dom.innerHTML = previewErrorHtml, a.child("div").dom.style.display = "block";
	else {
		var c = LC.getLabel("ChatterFileListPage", "noPreviewOnDevice");
		a.dom.innerHTML = '\x3ctable style\x3d"font-size:1.2em;font-weight:bold;width:100%;height:100%"\x3e\x3ctr\x3e\x3ctd style\x3d"text-align:center;vertical-align:middle;"\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e';
		a.child("td").dom.innerHTML = c
	}
	if (a = Ext.fly("fullPreviewNotSupported"))
		a.dom.style.display =
			"none"
}
function doIPadIPhonePreview(a, c, g, d, b, e, f, l, m, n, h) {
	var k;
	d = g.split("\x26");
	for (b = 0; b < d.length; b++)
		0 === d[b].indexOf("v\x3d") && (k = d[b].substring(2));
	c = UserContext.getUrl("/sfc/servlet.shepherd/version/download/" + k + "?asPdf\x3dtrue");
	k = UserContext.getUrl("/sfc/servlet.shepherd/version/renditionDownload?rendition\x3dTHUMB720BY480\x26versionId\x3d" + k);
	d = a.clientWidth;
	b = a.clientHeight - 30;
	previewErrorHtml = a.innerHTML;
	k = '\x3cdiv style\x3d"' + ("width:" + d + "px; height:" + b + "px;") + '"\x3e\x3ca href\x3d"' + c + '"\x3e\x3cimg onerror\x3d"showPreviewError(this)" onload\x3d"onPreviewSuccess(\'imageRendition\', \'' +
		d + "', '" + b + '\')" id\x3d"imageRendition" style\x3d"display:none;margin:auto;" src\x3d"' + k + '"/\x3e\x3c/a\x3e\x3c/div\x3e';
	d = null;
	b = !1;
	h && h.fileType && (d = h.fileType, b = h.isImage);
	h = "";
	b || (b = null, null !== d && (b = escapeHTML(LC.getLabel("ContentDownloadLinkElement", "downloadFeedPost", " " + d))), h = '\x3cdiv id\x3d"fullPreviewNotSupported" style\x3d"display:none"\x3e\x3ctable cellpadding\x3d"0" cellspacing\x3d"0" class\x3d"fullPreviewNotSupported"\x3e\x3ctr\x3e\x3ctd class\x3d"iconCell"\x3e\x3cimg class\x3d"warningIcon" width\x3d"1" height\x3d"1" alt\x3d"" src\x3d"/img/s.gif"/\x3e\x3c/td\x3e\x3ctd class\x3d"textCell"\x3e' +
			escapeHTML(LC.getLabel("ChatterFileListPage", "fullPreviewNotSupported")) + "\x3c/td\x3e", null !== b && (h += ' \x3ctd\x3e\x3cdiv class\x3d"download"\x3e\x3ca class\x3d"actionLink" href\x3d"' + c + '"\x3e\x3cimg width\x3d"1" height\x3d"1" title\x3d"' + b + '" class\x3d"downloadIcon" alt\x3d"" src\x3d"/img/s.gif"/\x3e\x3cspan class\x3d"actionLabel"\x3e' + b + "\x3c/span\x3e\x3c/a\x3e\x3c/div\x3e\x3c/td\x3e"), h += "\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e");
	a.innerHTML = k + h
}
function showDownloadLink(a, c) {
	if ("undefined" != typeof Ext && "undefined" != typeof Shepherd) {
		var g = new Ext.Element(Ext.getDom("container_bubble"));
		g.setSize(500, 100);
		g.center();
		Shepherd.getHelper("bubble").getBubble().wrapper.style.top = Position.realOffset($("body_content"))[1] + 50;
		new Ext.Panel({
			id : "noFlashPanel",
			border : !1,
			buttonAlign : "center",
			renderTo : a,
			frame : !1,
			bodyStyle : "text-align:center;margin-bottom:20px;",
			html : c.adobeFlashVersionLbl,
			buttons : [new Ext.Button({
					text : c.downloadAdobeLbl,
					handler : function () {
						window.open("http://www.adobe.com/go/getflashplayer")
					}
				}),
				new Ext.Button({
					text : c.closeDialogLbl,
					hidden : !Ext.fly(a).up("div#container_bubble"),
					handler : function () {
						Shepherd.run("bubble", "hide")
					}
				})]
		})
	} else
		a.innerHTML = "\x3cfont style\x3d'text-align:center' color\x3d'#000'\x3e" + c.adobeFlashVersionLbl + " " + c.downloadAdobeLinkLbl + "\x3cbr/\x3e\x3ca href\x3d'http://www.adobe.com/go/getflashplayer' target\x3d'_blank'\x3ehttp://www.adobe.com/go/getflashplayer\x3c/a\x3e\x3c/font\x3e"
}
function insertFlexComponent(a, c, g, d, b, e, f, l, m, n) {
	var h = "string" == typeof e ? document.getElementById(e) : e;
	isIPad || isIPhone ? doIPadIPhonePreview(h, a, c, g, d, b, e, f, l, m, n) : (e = detectFlashVer(6, 0, 65), l = detectFlashVer(9, 0, 115), e && !l ? showDownloadLink(h, m) : l ? ac_FL_RunContent("src", a, "FlashVars", c, "width", g, "height", d, "align", "middle", "id", f, "quality", "high", "bgcolor", b, "name", f, "allowScriptAccess", "sameDomain", "allowFullScreen", "true", "type", "application/x-shockwave-flash", "pluginspage", "http://www.adobe.com/go/getflashplayer",
			"wmode", "opaque", "parent", h) : showDownloadLink(h, m))
}
function closeContentPreviewDialog() {
	if (window.dialog && "docViewerOverlay" === window.dialog.id)
		window.dialog.hide();
	else if (sfdcPage) {
		var a = sfdcPage.getDialogById("docViewerOverlay");
		a && a.hide()
	}
};
function Attachments() {}

var hasPendingAttachments = !1;
function addPendingAttachment(a) {
	document.getElementById(Activity.pNEW_ATTACHMENTS).value = document.getElementById(Activity.pNEW_ATTACHMENTS).value + a + ",";
	hasPendingAttachments = !0;
	displayAttachmentWarning(!0)
}
function removePendingAttachment(a, d) {
	var b = document.getElementById(Activity.pNEW_ATTACHMENTS);
	if (b) {
		var c = new String(b.value);
		b.value = c.replace(a + ",", "");
		(hasPendingAttachments = 15 <= b.value.length) || displayAttachmentWarning(!1);
		b = null;
		(c = document.getElementById(Activity.pNEW_ATTACHMENTS)) && (b = Array(c.id));
		var e = sfdcPage.getRelatedListById(d);
		e && e.refresh(b, c ? Array(c.value) : null)
	}
}
function displayAttachmentWarning(a) {
	var d = document.getElementById(Activity.pATT_WARNING);
	d && (d.style.display = a ? "block" : "none")
}
function activityBodyOnLoad(a, d) {
	window.opener.addPendingAttachment(a);
	var b = null,
	c = window.opener.document.getElementById(Activity.pNEW_ATTACHMENTS);
	c && (b = Array(c.id));
	var e = window.opener.sfdcPage.getRelatedListById(d);
	e && e.refresh(b, c ? Array(c.value) : null)
}
Attachments.prototype.promoteAttachments = function (a, d, b, c) {
	var e = null;
	if (a && d && (b || c)) {
		var f = new QueryString("");
		f.add("sid", a);
		f.add("pid", d);
		f.add("att", b);
		c && f.add("check", "1");
		a = UserContext.getUrl("/servlet/promoteAtt") + f.toString();
		(a = Sfdc.Ajax.request(a, {
					async : !1
				})) && (e = eval("(" + a + ")"))
	}
	return e
};
function EmailAddrEdit() {}

EmailAddrEdit.prototype.changeToCancelRetURL = function () {
	var a = new QueryString("");
	a.add(EmailAddrEditConstants.pSAVE_CANCEL, "true");
	document.editPage.elements.retURL.value = UrlMap.getURL("EmailAuthorPopupCloser") + a.toString()
};
function EmailCCBccLookup() {}

EmailCCBccLookup.prototype.storeAddrs = function (a, b, c, g) {
	b.value = "";
	c.value = "";
	if (Sfdc.isDefAndNotNull(a))
		for (var f = !0, d = 0, e; d < a.length; d++)
			if ((e = a.options[d]) && "" !== e.value && e.value !== g)
				f ? f = !1 : (b.value += EmailAuthorConstants.EMAIL_ADDR_DELIM, c.value += EmailAuthorConstants.EMAIL_ADDR_DELIM), b.value += a.options[d].text, c.value += a.options[d].value
};
EmailCCBccLookup.prototype.storeAllAddresses = function (a) {
	EmailCCBccLookup.prototype.storeAddrs(document.getElementById(EmailCCBccLookupConstants.ADDITIONAL_TO_ID), document.getElementById(EmailCCBccLookupConstants.ADDITIONAL_TO_NAME_ID), document.getElementById(EmailCCBccLookupConstants.ADDITIONAL_TO_ADDR_ID), a);
	EmailCCBccLookup.prototype.storeAddrs(document.getElementById(EmailCCBccLookupConstants.CC_ID), document.getElementById(EmailCCBccLookupConstants.CC_NAME_ID), document.getElementById(EmailCCBccLookupConstants.CC_ADDR_ID),
		a);
	EmailCCBccLookup.prototype.storeAddrs(document.getElementById(EmailCCBccLookupConstants.BCC_ID), document.getElementById(EmailCCBccLookupConstants.BCC_NAME_ID), document.getElementById(EmailCCBccLookupConstants.BCC_ADDR_ID), a)
};
EmailCCBccLookup.prototype.changeContactType = function (a) {
	EmailCCBccLookup.prototype.storeAllAddresses(a);
	document.forms[EditPageConstants.pEDIT_PAGE].submit();
	return !0
};
EmailCCBccLookup.prototype.sizeToContent = function () {
	for (var a, b, c = 0; 5 > c; c++) {
		if (document.height)
			a = document.height;
		else if (document.body.offsetHeight)
			a = document.body.offsetHeight;
		else
			break;
		b = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight && 0 < document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
		if (a > b && window.resizeBy)
			window.resizeBy(0, a - b);
		else
			break
	}
};
function MailmergeTemplateSelectElement(b, a, c) {
	this.id = b;
	this.items = a;
	this.fileDownloadUrl = c;
	var d = this;
	sfdcPage.appendToOnloadQueue(function () {
		d.init()
	})
}
MailmergeTemplateSelectElement.prototype.init = function () {
	var b = document.getElementById(this.id),
	a = this,
	c = document.getElementById(MailmergeTemplateSelectElementConst.TEMPLATE_VIEW_BUTTON + "_" + this.id);
	c && addEvent(c, "mouseup", function () {
		MailmergeTemplateSelectElement.showPreview(a.fileDownloadUrl, b)
	}, !1);
	addEvent(b, "mousemove", function () {
		MailmergeTemplateSelectElement.showDetails(a.id, b, a.items)
	}, !1);
	addEvent(b, "change", function () {
		MailmergeTemplateSelectElement.showDetails(a.id, b, a.items)
	}, !1);
	MailmergeTemplateSelectElement.showDetails(a.id,
		b, a.items)
};
MailmergeTemplateSelectElement.showDetails = function (b, a, c) {
	0 > a.selectedIndex || (a = (a = a.options[a.selectedIndex]) ? c[a.value] : null, null != a && (c = a[MailmergeTemplateSelectElementConst.TEMPLATE_TITLE], a = a[MailmergeTemplateSelectElementConst.TEMPLATE_DESCRIPTION], document.getElementById(MailmergeTemplateSelectElementConst.TEMPLATE_TITLE + "_" + b).innerHTML = c, document.getElementById(MailmergeTemplateSelectElementConst.TEMPLATE_DESCRIPTION + "_" + b).innerHTML = a))
};
MailmergeTemplateSelectElement.showPreview = function (b, a) {
	0 > a.selectedIndex || window.open(b + "?file\x3d" + a.options[a.selectedIndex].value, "_blank")
};
var CustomObjectTeamMemberPage = {
	getMemberRow : function (a) {
		return document.getElementById(CustomObjectTeamMemberUiConstants.MEMBERS_TABLE_ROW_PREFIX + a)
	},
	initializeRoles : function () {
		for (var a = parseInt(document.getElementById(CustomObjectTeamMemberUiConstants.pMEMBERS_COUNT).value), b = 0; b < a; b++) {
			CustomObjectTeamMemberPage.roleChangeHandler(b);
			var e = document.getElementById(CustomObjectTeamMemberUiConstants.pREMOVED_MEMBERS_PREFIX + b);
			"1" == e.value && (CustomObjectTeamMemberPage.getMemberRow(b).style.display =
					"none")
		}
		a = parseInt(document.getElementById(CustomObjectTeamMemberUiConstants.pTEAM_RECORDS_COUNT).value);
		for (b = 0; b < a; b++)
			e = document.getElementById(CustomObjectTeamMemberUiConstants.pREMOVED_TEAMS_PREFIX + b), "1" == e.value && (CustomObjectTeamMemberPage.getTeamRecordRow(b).style.display = "none")
	},
	roleChangeHandler : function (a) {
		var b = document.getElementById(CustomObjectTeamMemberUiConstants.pROLE_PREFIX + a),
		e = document.getElementById(CustomObjectTeamMemberUiConstants.pSHARE_ACCESS_PREFIX + a);
		a = document.getElementById(CustomObjectTeamMemberUiConstants.pCSP_PORTAL_PREFIX +
				a);
		b = b.options[b.selectedIndex].value;
		"" == b ? (e.innerHTML = "", a.innerHTML = "") : (e.innerHTML = document.getElementById(CustomObjectTeamMemberUiConstants.pSHARE_ACCESS_PREFIX + b).value, a.innerHTML = document.getElementById(CustomObjectTeamMemberUiConstants.pCSP_PORTAL_PREFIX + b).innerHTML)
	},
	addMemberRow : function (a, b, e, g) {
		var c = document.getElementById(CustomObjectTeamMemberUiConstants.pMEMBERS_COUNT),
		d = parseInt(c.value);
		c.value = d + 1;
		c = document.createElement("tr");
		c.id = CustomObjectTeamMemberUiConstants.MEMBERS_TABLE_ROW_PREFIX +
			d;
		var f = document.createElement("a");
		f.className = "actionLink";
		f.innerHTML = e;
		f.href = "javascript:CustomObjectTeamMemberPage.removeMemberRow(" + d + ");";
		f.title = LC.getLabel("Page_CustomObjectTeamMember", "RemoveTeamMember", d + 1);
		e = document.createElement("td");
		e.className = "actionColumn";
		e.appendChild(f);
		c.appendChild(e);
		e = "new_tm_" + d;
		f = document.createElement("td");
		f.id = e;
		c.appendChild(f);
		f = document.createElement("select");
		f.id = CustomObjectTeamMemberUiConstants.pROLE_PREFIX + d;
		f.name = CustomObjectTeamMemberUiConstants.pROLE_PREFIX +
			d;
		f.title = LC.getLabel("Page_CustomObjectTeamMember", "TeamMemberRowRole", d + 1);
		var h;
		for (h = 0; h < a.length; h += 1) {
			var k = document.createElement("option");
			k.innerHTML = a[h][0];
			k.value = a[h][1];
			f.appendChild(k)
		}
		a = document.createElement("td");
		a.appendChild(f);
		c.appendChild(a);
		a = document.createElement("td");
		a.id = CustomObjectTeamMemberUiConstants.pSHARE_ACCESS_PREFIX + d;
		c.appendChild(a);
		a = document.createElement("td");
		a.className = "booleanColumn";
		a.id = CustomObjectTeamMemberUiConstants.pCSP_PORTAL_PREFIX + d;
		c.appendChild(a);
		f.onchange = function () {
			CustomObjectTeamMemberPage.roleChangeHandler(d)
		};
		document.getElementById(CustomObjectTeamMemberUiConstants.MEMBERS_TABLE).firstChild.appendChild(c);
		c = document.createElement("input");
		c.id = CustomObjectTeamMemberUiConstants.pREMOVED_MEMBERS_PREFIX + d;
		c.name = c.id;
		document.getElementById(CustomObjectTeamMemberUiConstants.REMOVED_MEMBERS_CONTAINER).appendChild(c);
		b = new ForeignKeyField(CustomObjectTeamMemberUiConstants.pMEMBER_PREFIX + d, !0, !1, !1, ["", ""], {
				domain : b,
				useNewLookups : !1
			});
		b.tableCell = {
			previousSibling : {
				nodeType : Node.TEXT_NODE,
				nodeValue : g
			}
		};
		b.editDiv = document.getElementById(e);
		b.createEditElements();
		document.getElementById(b.id).title = LC.getLabel("Page_CustomObjectTeamMember", "TeamMemberRowName", d + 1);
		document.getElementById(b.getComponentId(ForeignKeyField.MULTIDOMAIN)).title = LC.getLabel("Page_CustomObjectTeamMember", "TeamMemberRowType", d + 1)
	},
	removeMemberRow : function (a) {
		CustomObjectTeamMemberPage.getMemberRow(a).style.display = "none";
		document.getElementById(CustomObjectTeamMemberUiConstants.pREMOVED_MEMBERS_PREFIX +
			a).value = "1"
	},
	getTeamRecordRow : function (a) {
		return document.getElementById(CustomObjectTeamMemberUiConstants.TEAMS_TABLE_ROW_PREFIX + a)
	},
	addTeamRecordRow : function (a, b, e) {
		var g = document.getElementById(CustomObjectTeamMemberUiConstants.pTEAM_RECORDS_COUNT),
		c = parseInt(g.value);
		g.value = c + 1;
		g = document.createElement("tr");
		g.id = CustomObjectTeamMemberUiConstants.TEAMS_TABLE_ROW_PREFIX + c;
		var d = document.createElement("a");
		d.className = "actionLink";
		d.innerHTML = b;
		d.href = "javascript:CustomObjectTeamMemberPage.removeTeamRecordRow(" +
			c + ");";
		d.title = LC.getLabel("Page_CustomObjectTeamMember", "RemoveCaseTeamRow", c + 1);
		b = document.createElement("td");
		b.className = "actionColumn";
		b.appendChild(d);
		g.appendChild(b);
		b = "new_tt_" + c;
		d = document.createElement("td");
		d.id = b;
		g.appendChild(d);
		document.getElementById(CustomObjectTeamMemberUiConstants.TEAMS_TABLE).firstChild.appendChild(g);
		g = document.createElement("input");
		g.id = CustomObjectTeamMemberUiConstants.pREMOVED_TEAMS_PREFIX + c;
		g.name = g.id;
		document.getElementById(CustomObjectTeamMemberUiConstants.REMOVED_TEAMS_CONTAINER).appendChild(g);
		a = new ForeignKeyField(CustomObjectTeamMemberUiConstants.pTEAM_RECORD_PREFIX + c, !0, !1, !1, ["", ""], {
				domain : a,
				useNewLookups : !1
			});
		a.tableCell = {
			previousSibling : {
				nodeType : Node.TEXT_NODE,
				nodeValue : e
			}
		};
		a.editDiv = document.getElementById(b);
		a.createEditElements();
		document.getElementById(a.id).title = LC.getLabel("Page_CustomObjectTeamMember", "CaseTeamRow", c + 1)
	},
	removeTeamRecordRow : function (a) {
		CustomObjectTeamMemberPage.getTeamRecordRow(a).style.display = "none";
		document.getElementById(CustomObjectTeamMemberUiConstants.pREMOVED_TEAMS_PREFIX +
			a).value = "1"
	}
};
var CustomObjectTeamTemplatePage = {
	getMemberRow : function (b) {
		return document.getElementById(CustomObjectTeamTemplateUiConstants.pSHARE_ACCESS_PREFIX + b).parentNode
	},
	initializeRoles : function () {
		for (var b = parseInt(document.getElementById(CustomObjectTeamTemplateUiConstants.pMEMBERS_COUNT).value), d = 0; d < b; d++)
			CustomObjectTeamTemplatePage.roleChangeHandler(d), "1" == document.getElementById(CustomObjectTeamTemplateUiConstants.pREMOVED_PREFIX + d).value && (CustomObjectTeamTemplatePage.getMemberRow(d).style.display =
					"none")
	},
	roleChangeHandler : function (b) {
		var d = document.getElementById(CustomObjectTeamTemplateUiConstants.pROLE_PREFIX + b),
		c = document.getElementById(CustomObjectTeamTemplateUiConstants.pSHARE_ACCESS_PREFIX + b);
		b = document.getElementById(CustomObjectTeamTemplateUiConstants.pCSP_PORTAL_PREFIX + b);
		d = d.options[d.selectedIndex].value;
		"" == d ? (c.innerHTML = "", b.innerHTML = "") : (c.innerHTML = document.getElementById(CustomObjectTeamTemplateUiConstants.pSHARE_ACCESS_PREFIX + d).value, b.innerHTML = document.getElementById(CustomObjectTeamTemplateUiConstants.pCSP_PORTAL_PREFIX +
					d).innerHTML)
	},
	addMemberRow : function (b, d) {
		var c = CustomObjectTeamTemplatePage.ALL_ROLES,
		a = document.getElementById(CustomObjectTeamTemplateUiConstants.pMEMBERS_COUNT),
		f = parseInt(a.value);
		a.value = f + 1;
		var a = document.createElement("tr"),
		g = document.createElement("a");
		g.className = "actionLink";
		g.innerHTML = d;
		g.href = "javascript:CustomObjectTeamTemplatePage.removeMemberRow(" + f + ");";
		var e = document.createElement("td");
		e.className = "actionColumn";
		e.appendChild(g);
		a.appendChild(e);
		g = "new_tm_" + f;
		e = document.createElement("td");
		e.id = g;
		a.appendChild(e);
		e = document.createElement("select");
		e.id = CustomObjectTeamTemplateUiConstants.pROLE_PREFIX + f;
		e.name = CustomObjectTeamTemplateUiConstants.pROLE_PREFIX + f;
		var h;
		for (h = 0; h < c.length; h += 1) {
			var k = document.createElement("option");
			k.innerHTML = c[h][0];
			k.value = c[h][1];
			e.appendChild(k)
		}
		c = document.createElement("td");
		c.appendChild(e);
		a.appendChild(c);
		c = document.createElement("td");
		c.id = CustomObjectTeamTemplateUiConstants.pSHARE_ACCESS_PREFIX + f;
		a.appendChild(c);
		c = document.createElement("td");
		c.className = "booleanColumn";
		c.id = CustomObjectTeamTemplateUiConstants.pCSP_PORTAL_PREFIX + f;
		a.appendChild(c);
		e.onchange = function () {
			CustomObjectTeamTemplatePage.roleChangeHandler(f)
		};
		document.getElementById("tm_t").firstChild.appendChild(a);
		a = document.createElement("input");
		a.id = CustomObjectTeamTemplateUiConstants.pREMOVED_PREFIX + f;
		a.name = a.id;
		document.getElementById(CustomObjectTeamTemplateUiConstants.REMOVED_CONTAINER).appendChild(a);
		a = new ForeignKeyField(CustomObjectTeamTemplateUiConstants.pMEMBER_PREFIX +
				f, !0, !1, !1, ["", ""], {
				domain : b,
				useNewLookups : !1
			});
		a.tableCell = {
			previousSibling : {
				nodeType : Node.TEXT_NODE,
				nodeValue : "node"
			}
		};
		a.editDiv = document.getElementById(g);
		a.createEditElements()
	},
	removeMemberRow : function (b) {
		document.getElementById(CustomObjectTeamTemplateUiConstants.pMEMBER_PREFIX + b).value = document.getElementById(CustomObjectTeamTemplateUiConstants.pMEMBER_PREFIX + b + EditElement.pOLD_NAME_SUFFIX).value;
		CustomObjectTeamTemplatePage.getMemberRow(b).style.display = "none";
		document.getElementById(CustomObjectTeamTemplateUiConstants.pREMOVED_PREFIX +
			b).value = "1"
	}
};
function leadConvertLookupPick(f, c, d, e) {
	c = document.getElementById(c);
	for (b = 0; b < c.options.length; b++) {
		var a = c.options[b];
		if (a.value == d) {
			a.selected = !0;
			if (c.onchange)
				c.onchange();
			return
		}
	}
	e = LC.getLabel("Page_Lead_Convert", "attach", e);
	b = new Option(e, d, !0, !0);
	c.options[c.options.length] = b;
	var b = 0;
	if (a = document.getElementById("accids"))
		a.id = "accids0", document.getElementById("accnames").id = "accnames0", b = 1;
	else {
		do
			a = document.getElementById("accids" + b++);
		while (a);
		b--
	}
	a = document.createElement("input");
	a.type =
		"hidden";
	a.id = "accids" + b;
	a.name = "accids";
	a.value = d;
	d = document.createElement("input");
	d.type = "hidden";
	d.id = "accnames" + b;
	d.name = "accnames";
	d.value = e;
	document[f].appendChild(a);
	document[f].appendChild(d);
	if (c.onchange)
		c.onchange()
};
Array.isArray || (Array.isArray = function (a) {
	return "[object Array]" === Object.prototype.toString.call(a)
});
Date.now || (Date.now = function () {
	return +new Date
});
Error.prototype.toString = function () {
	var a = this.message || this.description;
	return void 0 === a || null === a ? "Unknown Error." : a + ""
};
Function.prototype.bind || (Function.prototype.bind = function (a) {
	var b = this,
	c = Array.prototype.slice.call(arguments, 1);
	return function () {
		return b.apply(a, c.concat(Array.prototype.slice.call(arguments, 0)))
	}
});
this.Node || (this.Node = {
		ELEMENT_NODE : 1,
		ATTRIBUTE_NODE : 2,
		TEXT_NODE : 3,
		CDATA_SECTION_NODE : 4,
		ENTITY_REFERENCE_NODE : 5,
		ENTITY_NODE : 6,
		PROCESSING_INSTRUCTION_NODE : 7,
		COMMENT_NODE : 8,
		DOCUMENT_NODE : 9,
		DOCUMENT_TYPE_NODE : 10,
		DOCUMENT_FRAGMENT_NODE : 11,
		NOTATION_NODE : 12
	});
Object.keys || (Object.keys = function () {
	var e = Object.prototype.hasOwnProperty,
	f = !{
		toString : null
	}
	.propertyIsEnumerable("toString"),
	c = "toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "),
	g = c.length;
	return function (b) {
		if ("object" !== typeof b && "function" !== typeof b || null === b)
			throw new TypeError("Object.keys called on non-object");
		var d = [],
		a;
		for (a in b)
			e.call(b, a) && d.push(a);
		if (f)
			for (a = 0; a < g; a++)
				e.call(b, c[a]) && d.push(c[a]);
		return d
	}
}
	());
String.prototype.trim || (String.prototype.trim = function (a) {
	return Sfdc.String.trim(this, a)
});
if ("undefined" === typeof Mustache)
	var Mustache;
(function (r) {
	"undefined" !== typeof module && module.exports ? module.exports = r : "function" === typeof define ? define(r) : Mustache = r
})(function () {
	function r(a) {
		return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$\x26")
	}
	function t(a) {
		this.tail = this.string = a;
		this.pos = 0
	}
	function n(a, b) {
		this.view = a;
		this.parent = b;
		this.clearCache()
	}
	function h() {
		this.clearCache()
	}
	function y(a) {
		for (var b = a[3], c = b, d; (d = a[4]) && d.length; )
			a = d[d.length - 1], c = a[3];
		return [b, c]
	}
	function u(a) {
		function b(a, b, g) {
			if (!c[a]) {
				var e = u(b);
				c[a] = function (a,
					b) {
					return e(a, b, g)
				}
			}
			return c[a]
		}
		var c = {};
		return function (c, f, g) {
			for (var e = "", m, l, k = 0, h = a.length; k < h; ++k)
				switch (m = a[k], m[0]) {
				case "#":
					l = g.slice.apply(g, y(m));
					e += c._section(m[1], f, l, b(k, m[4], g));
					break;
				case "^":
					e += c._inverted(m[1], f, b(k, m[4], g));
					break;
				case "\x3e":
					e += c._partial(m[1], f);
					break;
				case "\x26":
					e += c._name(m[1], f);
					break;
				case "name":
					e += c._escaped(m[1], f);
					break;
				case "text":
					e += m[1]
				}
			return e
		}
	}
	function v(a) {
		if (2 !== a.length)
			throw Error("Invalid tags: " + a.join(" "));
		return [RegExp(r(a[0]) + "\\s*"), RegExp("\\s*" +
				r(a[1]))]
	}
	var l = {
		name : "mustache.js",
		version : "0.7.0",
		tags : ["{{", "}}"]
	};
	l.Scanner = t;
	l.Context = n;
	l.Writer = h;
	var z = /\s*/,
	A = /\s+/,
	B = /\S/,
	w = /\s*=/,
	C = /\s*\}/,
	D = /#|\^|\/|>|\{|&|=|!/,
	x = Array.isArray || function (a) {
		return "[object Array]" === Object.prototype.toString.call(a)
	},
	E = {
		"\x26" : "\x26amp;",
		"\x3c" : "\x26lt;",
		"\x3e" : "\x26gt;",
		'"' : "\x26quot;",
		"'" : "\x26#39;",
		"/" : "\x26#x2F;"
	};
	l.escape = function (a) {
		return String(a).replace(/[&<>"'\/]/g, function (a) {
			return E[a]
		})
	};
	t.prototype.eos = function () {
		return "" === this.tail
	};
	t.prototype.scan = function (a) {
		return (a = this.tail.match(a)) && 0 === a.index ? (this.tail = this.tail.substring(a[0].length), this.pos += a[0].length, a[0]) : ""
	};
	t.prototype.scanUntil = function (a) {
		var b = this.tail.search(a);
		switch (b) {
		case  - 1:
			a = this.tail;
			this.pos += this.tail.length;
			this.tail = "";
			break;
		case 0:
			a = "";
			break;
		default:
			a = this.tail.substring(0, b),
			this.tail = this.tail.substring(b),
			this.pos += b
		}
		return a
	};
	n.make = function (a) {
		return a instanceof n ? a : new n(a)
	};
	n.prototype.clearCache = function () {
		this._cache = {}

	};
	n.prototype.push =
	function (a) {
		return new n(a, this)
	};
	n.prototype.lookup = function (a) {
		var b = this._cache[a];
		if (!b) {
			if ("." === a)
				b = this.view;
			else
				for (var c = this; c; ) {
					if (0 < a.indexOf("."))
						for (var d = a.split("."), f = 0, b = c.view; b && f < d.length; )
							b = b[d[f++]];
					else
						b = c.view[a];
					if (null != b)
						break;
					c = c.parent
				}
			this._cache[a] = b
		}
		"function" === typeof b && (b = b.call(this.view));
		return b
	};
	h.prototype.clearCache = function () {
		this._cache = {};
		this._partialCache = {}

	};
	h.prototype.compile = function (a, b) {
		var c = this._cache[a];
		c || (c = l.parse(a, b), c = this._cache[a] =
				this.compileTokens(c, a));
		return c
	};
	h.prototype.compilePartial = function (a, b, c) {
		b = this.compile(b, c);
		return this._partialCache[a] = b
	};
	h.prototype.compileTokens = function (a, b) {
		var c = u(a),
		d = this;
		return function (a, g) {
			if (g)
				if ("function" === typeof g)
					d._loadPartial = g;
				else
					for (var e in g)
						d.compilePartial(e, g[e]);
			return c(d, n.make(a), b)
		}
	};
	h.prototype.render = function (a, b, c) {
		return this.compile(a)(b, c)
	};
	h.prototype._section = function (a, b, c, d) {
		a = b.lookup(a);
		switch (typeof a) {
		case "object":
			if (x(a)) {
				c = "";
				for (var f = 0,
					g = a.length; f < g; ++f)
					c += d(this, b.push(a[f]));
				return c
			}
			return a ? d(this, b.push(a)) : "";
		case "function":
			var e = this;
			d = a.call(b.view, c, function (a) {
					return e.render(a, b)
				});
			return null != d ? d : "";
		default:
			if (a)
				return d(this, b)
		}
		return ""
	};
	h.prototype._inverted = function (a, b, c) {
		a = b.lookup(a);
		return !a || x(a) && 0 === a.length ? c(this, b) : ""
	};
	h.prototype._partial = function (a, b) {
		!(a in this._partialCache) && this._loadPartial && this.compilePartial(a, this._loadPartial(a));
		var c = this._partialCache[a];
		return c ? c(b) : ""
	};
	h.prototype._name =
	function (a, b) {
		var c = b.lookup(a);
		"function" === typeof c && (c = c.call(b.view));
		return null == c ? "" : String(c)
	};
	h.prototype._escaped = function (a, b) {
		return l.escape(this._name(a, b))
	};
	l.parse = function (a, b) {
		b = b || l.tags;
		for (var c = v(b), d = new t(a), f = [], g = [], e = !1, m = !1, h, k, p; !d.eos(); ) {
			h = d.pos;
			if (p = d.scanUntil(c[0]))
				for (var n = 0, s = p.length; n < s; ++n)
					if (k = p.charAt(n), RegExp.prototype.test.call(B, k) ? m = !0 : g.push(f.length), f.push(["text", k, h, h + 1]), h += 1, "\n" === k) {
						if (e && !m)
							for (; g.length; )
								f.splice(g.pop(), 1);
						else
							g = [];
						m = e = !1
					}
			h =
				d.pos;
			if (!d.scan(c[0]))
				break;
			e = !0;
			k = d.scan(D) || "name";
			d.scan(z);
			"\x3d" === k ? (p = d.scanUntil(w), d.scan(w), d.scanUntil(c[1])) : "{" === k ? (p = RegExp("\\s*" + r("}" + b[1])), p = d.scanUntil(p), d.scan(C), d.scanUntil(c[1]), k = "\x26") : p = d.scanUntil(c[1]);
			if (!d.scan(c[1]))
				throw Error("Unclosed tag at " + d.pos);
			f.push([k, p, h, d.pos]);
			if ("name" === k || "{" === k || "\x26" === k)
				m = !0;
			"\x3d" === k && (b = p.split(A), c = v(b))
		}
		for (var c = f, q, f = [], g = 0; g < c.length; ++g)
			d = c[g], q && "text" === q[0] && "text" === d[0] ? (q[1] += d[1], q[3] = d[3]) : (q = d, f.push(d));
		q = f;
		e = c = [];
		d = [];
		for (g = 0; g < q.length; ++g)
			switch (f = q[g], f[0]) {
			case "#":
			case "^":
				f[4] = [];
				d.push(f);
				e.push(f);
				e = f[4];
				break;
			case "/":
				if (0 === d.length)
					throw Error("Unopened section: " + f[1]);
				e = d.pop();
				if (e[1] !== f[1])
					throw Error("Unclosed section: " + e[1]);
				e = 0 < d.length ? d[d.length - 1][4] : c;
				break;
			default:
				e.push(f)
			}
		if (e = d.pop())
			throw Error("Unclosed section: " + e[1]);
		return c
	};
	var s = new h;
	l.clearCache = function () {
		return s.clearCache()
	};
	l.compile = function (a, b) {
		return s.compile(a, b)
	};
	l.compilePartial = function (a, b, c) {
		return s.compilePartial(a,
			b, c)
	};
	l.compileTokens = function (a, b) {
		return s.compileTokens(a, b)
	};
	l.render = function (a, b, c) {
		return s.render(a, b, c)
	};
	l.to_html = function (a, b, c, d) {
		a = l.render(a, b, c);
		if ("function" === typeof d)
			d(a);
		else
			return a
	};
	return l
}
	());
(function () {
	function C(a, b, c, d, f, e) {
		f = 0;
		for (var h = d.length; f < h; f++) {
			var g = d[f];
			if (g) {
				for (var k = !1, g = g[a]; g; ) {
					if (g.sizcache === c) {
						k = d[g.sizset];
						break
					}
					1 === g.nodeType && !e && (g.sizcache = c, g.sizset = f);
					if (g.nodeName.toLowerCase() === b) {
						k = g;
						break
					}
					g = g[a]
				}
				d[f] = k
			}
		}
	}
	function D(a, b, c, d, f, e) {
		f = 0;
		for (var h = d.length; f < h; f++) {
			var g = d[f];
			if (g) {
				for (var l = !1, g = g[a]; g; ) {
					if (g.sizcache === c) {
						l = d[g.sizset];
						break
					}
					if (1 === g.nodeType)
						if (e || (g.sizcache = c, g.sizset = f), "string" !== typeof b) {
							if (g === b) {
								l = !0;
								break
							}
						} else if (0 < k.filter(b,
								[g]).length) {
							l = g;
							break
						}
					g = g[a]
				}
				d[f] = l
			}
		}
	}
	var A = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
	B = 0,
	E = Object.prototype.toString,
	x = !1,
	F = !0,
	r = /\\/g,
	y = /\W/;
	[0, 0].sort(function () {
		F = !1;
		return 0
	});
	var k = function (a, b, c, d) {
		c = c || [];
		var f = b = b || document;
		if (1 !== b.nodeType && 9 !== b.nodeType)
			return [];
		if (!a || "string" !== typeof a)
			return c;
		var e,
		h,
		g,
		n,
		v,
		s = !0,
		p = k.isXML(b),
		m = [],
		r = a;
		do
			if (A.exec(""), e = A.exec(r))
				if (r = e[3], m.push(e[1]), e[2]) {
					n =
						e[3];
					break
				}
		while (e);
		if (1 < m.length && H.exec(a))
			if (2 === m.length && l.relative[m[0]])
				h = G(m[0] + m[1], b);
			else
				for (h = l.relative[m[0]] ? [b] : k(m.shift(), b); m.length; )
					a = m.shift(), l.relative[a] && (a += m.shift()), h = G(a, h);
		else if (!d && (1 < m.length && 9 === b.nodeType && !p && l.match.ID.test(m[0]) && !l.match.ID.test(m[m.length - 1])) && (e = k.find(m.shift(), b, p), b = e.expr ? k.filter(e.expr, e.set)[0] : e.set[0]), b) {
			e = d ? {
				expr : m.pop(),
				set : q(d)
			}
			 : k.find(m.pop(), 1 === m.length && ("~" === m[0] || "+" === m[0]) && b.parentNode ? b.parentNode : b, p);
			h = e.expr ?
				k.filter(e.expr, e.set) : e.set;
			for (0 < m.length ? g = q(h) : s = !1; m.length; ) {
				e = v = m.pop();
				l.relative[v] ? e = m.pop() : v = "";
				if (null === e || void 0 === e)
					e = b;
				l.relative[v](g, e, p)
			}
		} else
			g = [];
		g || (g = h);
		g || k.error(v || a);
		if ("[object Array]" === E.call(g))
			if (s)
				if (b && 1 === b.nodeType)
					for (a = 0; null !== g[a] && void 0 !== g[a]; a++)
						g[a] && (!0 === g[a] || 1 === g[a].nodeType && k.contains(b, g[a])) && c.push(h[a]);
				else
					for (a = 0; null !== g[a] && void 0 !== g[a]; a++)
						g[a] && 1 === g[a].nodeType && c.push(h[a]);
			else
				c.push.apply(c, g);
		else
			q(g, c);
		n && (k(n, f, c, d), k.uniqueSort(c));
		return c
	};
	k.uniqueSort = function (a) {
		if (z && (x = F, a.sort(z), x))
			for (var b = 1; b < a.length; b++)
				a[b] === a[b - 1] && a.splice(b--, 1);
		return a
	};
	k.matches = function (a, b) {
		return k(a, null, null, b)
	};
	k.matchesSelector = function (a, b) {
		return 0 < k(b, null, null, [a]).length
	};
	k.find = function (a, b, c) {
		var d;
		if (!a)
			return [];
		for (var f = 0, e = l.order.length; f < e; f++) {
			var h,
			g = l.order[f];
			if (h = l.leftMatch[g].exec(a)) {
				var k = h[1];
				h.splice(1, 1);
				if ("\\" !== k.substr(k.length - 1) && (h[1] = (h[1] || "").replace(r, ""), d = l.find[g](h, b, c))) {
					a = a.replace(l.match[g],
							"");
					break
				}
			}
		}
		d || (d = "undefined" !== typeof b.getElementsByTagName ? b.getElementsByTagName("*") : []);
		return {
			set : d,
			expr : a
		}
	};
	k.filter = function (a, b, c, d) {
		for (var f, e, h = a, g = [], n = b, q = b && b[0] && k.isXML(b[0]); a && b.length; ) {
			for (var s in l.filter)
				if (f = l.leftMatch[s].exec(a), null !== f && void 0 !== f && f[2]) {
					var p,
					m,
					r = l.filter[s],
					u = f[1];
					e = !1;
					f.splice(1, 1);
					if ("\\" !== u.substr(u.length - 1)) {
						n === g && (g = []);
						if (l.preFilter[s])
							if (f = l.preFilter[s](f, n, c, g, d, q)) {
								if (!0 === f)
									continue
							} else
								e = p = !0;
						if (f)
							for (u = 0; null !== (m = n[u]) && void 0 !==
								m; u++)
								if (m) {
									p = r(m, f, u, n);
									var t = d^!!p;
									c && null !== p && void 0 !== p ? t ? e = !0 : n[u] = !1 : t && (g.push(m), e = !0)
								}
						if (void 0 !== p) {
							c || (n = g);
							a = a.replace(l.match[s], "");
							if (!e)
								return [];
							break
						}
					}
				}
			if (a === h)
				if (null === e || void 0 === e)
					k.error(a);
				else
					break;
			h = a
		}
		return n
	};
	k.error = function (a) {
		throw "Syntax error, unrecognized expression: " + a;
	};
	var l = k.selectors = {
		order : ["ID", "NAME", "TAG"],
		match : {
			ID : /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
			CLASS : /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
			NAME : /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
			ATTR : /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
			TAG : /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
			CHILD : /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
			POS : /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
			PSEUDO : /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
		},
		leftMatch : {},
		attrMap : {
			"class" : "className",
			"for" : "htmlFor"
		},
		attrHandle : {
			href : function (a) {
				return a.getAttribute("href")
			}
		},
		relative : {
			"+" : function (a, b) {
				var c = "string" === typeof b,
				d = c && !y.test(b),
				c = c && !d;
				d && (b = b.toLowerCase());
				for (var d = 0, f = a.length, e; d < f; d++)
					if (e = a[d]) {
						for (; (e = e.previousSibling) && 1 !== e.nodeType; );
						a[d] = c || e && e.nodeName.toLowerCase() === b ? e || !1 : e === b
					}
				c && k.filter(b, a, !0)
			},
			"\x3e" : function (a, b) {
				var c,
				d = "string" === typeof b,
				f = 0,
				e = a.length;
				if (d && !y.test(b))
					for (b = b.toLowerCase(); f < e; f++) {
						if (c = a[f])
							c = c.parentNode, a[f] = c.nodeName.toLowerCase() === b ? c : !1
					}
				else {
					for (; f < e; f++)
						(c = a[f]) && (a[f] = d ? c.parentNode : c.parentNode === b);
					d && k.filter(b, a, !0)
				}
			},
			"" : function (a, b, c) {
				var d,
				f = B++,
				e = D;
				"string" === typeof b &&
				!y.test(b) && (d = b = b.toLowerCase(), e = C);
				e("parentNode", b, f, a, d, c)
			},
			"~" : function (a, b, c) {
				var d,
				f = B++,
				e = D;
				"string" === typeof b && !y.test(b) && (d = b = b.toLowerCase(), e = C);
				e("previousSibling", b, f, a, d, c)
			}
		},
		find : {
			ID : function (a, b, c) {
				if ("undefined" !== typeof b.getElementById && !c)
					return (a = b.getElementById(a[1])) && a.parentNode ? [a] : []
			},
			NAME : function (a, b) {
				if ("undefined" !== typeof b.getElementsByName) {
					for (var c = [], d = b.getElementsByName(a[1]), f = 0, e = d.length; f < e; f++)
						d[f].getAttribute("name") === a[1] && c.push(d[f]);
					return 0 ===
					c.length ? null : c
				}
			},
			TAG : function (a, b) {
				if ("undefined" !== typeof b.getElementsByTagName)
					return b.getElementsByTagName(a[1])
			}
		},
		preFilter : {
			CLASS : function (a, b, c, d, f, e) {
				a = " " + a[1].replace(r, "") + " ";
				if (e)
					return a;
				e = 0;
				for (var h; null !== (h = b[e]) && void 0 !== h; e++)
					h && (f^(h.className && 0 <= (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a)) ? c || d.push(h) : c && (b[e] = !1));
				return !1
			},
			ID : function (a) {
				return a[1].replace(r, "")
			},
			TAG : function (a, b) {
				return a[1].replace(r, "").toLowerCase()
			},
			CHILD : function (a) {
				if ("nth" === a[1]) {
					a[2] ||
					k.error(a[0]);
					a[2] = a[2].replace(/^\+|\s*/g, "");
					var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === a[2] && "2n" || "odd" === a[2] && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
					a[2] = b[1] + (b[2] || 1) - 0;
					a[3] = b[3] - 0
				} else
					a[2] && k.error(a[0]);
				a[0] = B++;
				return a
			},
			ATTR : function (a, b, c, d, f, e) {
				b = a[1] = a[1].replace(r, "");
				!e && l.attrMap[b] && (a[1] = l.attrMap[b]);
				a[4] = (a[4] || a[5] || "").replace(r, "");
				"~\x3d" === a[2] && (a[4] = " " + a[4] + " ");
				return a
			},
			PSEUDO : function (a, b, c, d, f) {
				if ("not" === a[1])
					if (1 < (A.exec(a[3]) || "").length || /^\w/.test(a[3]))
						a[3] =
							k(a[3], null, null, b);
					else
						return a = k.filter(a[3], b, c, 1^f), c || d.push.apply(d, a), !1;
				else if (l.match.POS.test(a[0]) || l.match.CHILD.test(a[0]))
					return !0;
				return a
			},
			POS : function (a) {
				a.unshift(!0);
				return a
			}
		},
		filters : {
			enabled : function (a) {
				return !1 === a.disabled && "hidden" !== a.type
			},
			disabled : function (a) {
				return !0 === a.disabled
			},
			checked : function (a) {
				return !0 === a.checked
			},
			selected : function (a) {
				a.parentNode.selectedIndex;
				return !0 === a.selected
			},
			parent : function (a) {
				return !!a.firstChild
			},
			empty : function (a) {
				return !a.firstChild
			},
			has : function (a, b, c) {
				return !!k(c[3], a).length
			},
			header : function (a) {
				return /h\d/i.test(a.nodeName)
			},
			text : function (a) {
				return "text" === a.type
			},
			radio : function (a) {
				return "radio" === a.type
			},
			checkbox : function (a) {
				return "checkbox" === a.type
			},
			file : function (a) {
				return "file" === a.type
			},
			password : function (a) {
				return "password" === a.type
			},
			submit : function (a) {
				return "submit" === a.type
			},
			image : function (a) {
				return "image" === a.type
			},
			reset : function (a) {
				return "reset" === a.type
			},
			button : function (a) {
				return "button" === a.type || "button" === a.nodeName.toLowerCase()
			},
			input : function (a) {
				return /input|select|textarea|button/i.test(a.nodeName)
			}
		},
		setFilters : {
			first : function (a, b) {
				return 0 === b
			},
			last : function (a, b, c, d) {
				return b === d.length - 1
			},
			even : function (a, b) {
				return 0 === b % 2
			},
			odd : function (a, b) {
				return 1 === b % 2
			},
			lt : function (a, b, c) {
				return b < c[3] - 0
			},
			gt : function (a, b, c) {
				return b > c[3] - 0
			},
			nth : function (a, b, c) {
				return c[3] - 0 === b
			},
			eq : function (a, b, c) {
				return c[3] - 0 === b
			}
		},
		filter : {
			PSEUDO : function (a, b, c, d) {
				var f = b[1],
				e = l.filters[f];
				if (e)
					return e(a, c, b, d);
				if ("contains" === f)
					return 0 <= (a.textContent ||
						a.innerText || k.getText([a]) || "").indexOf(b[3]);
				if ("not" === f) {
					b = b[3];
					c = 0;
					for (d = b.length; c < d; c++)
						if (b[c] === a)
							return !1;
					return !0
				}
				k.error(f)
			},
			CHILD : function (a, b) {
				var c = b[1],
				d = a;
				switch (c) {
				case "only":
				case "first":
					for (; d = d.previousSibling; )
						if (1 === d.nodeType)
							return !1;
					if ("first" === c)
						return !0;
					d = a;
				case "last":
					for (; d = d.nextSibling; )
						if (1 === d.nodeType)
							return !1;
					return !0;
				case "nth":
					var c = b[2],
					f = b[3];
					if (1 === c && 0 === f)
						return !0;
					var e = b[0],
					h = a.parentNode;
					if (h && (h.sizcache !== e || !a.nodeIndex)) {
						for (var g = 0, d = h.firstChild; d; d =
								d.nextSibling)
							1 === d.nodeType && (d.nodeIndex = ++g);
						h.sizcache = e
					}
					d = a.nodeIndex - f;
					return 0 === c ? 0 === d : 0 === d % c && 0 <= d / c
				}
			},
			ID : function (a, b) {
				return 1 === a.nodeType && a.getAttribute("id") === b
			},
			TAG : function (a, b) {
				return "*" === b && 1 === a.nodeType || a.nodeName.toLowerCase() === b
			},
			CLASS : function (a, b) {
				return -1 < (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b)
			},
			ATTR : function (a, b) {
				var c = b[1],
				c = l.attrHandle[c] ? l.attrHandle[c](a) : null !== a[c] && void 0 !== a[c] ? a[c] : a.getAttribute(c),
				d = c + "",
				f = b[2],
				e = b[4];
				return null ===
				c || void 0 === c ? "!\x3d" === f : "\x3d" === f ? d === e : "*\x3d" === f ? 0 <= d.indexOf(e) : "~\x3d" === f ? 0 <= (" " + d + " ").indexOf(e) : !e ? d && !1 !== c : "!\x3d" === f ? d !== e : "^\x3d" === f ? 0 === d.indexOf(e) : "$\x3d" === f ? d.substr(d.length - e.length) === e : "|\x3d" === f ? d === e || d.substr(0, e.length + 1) === e + "-" : !1
			},
			POS : function (a, b, c, d) {
				var f = l.setFilters[b[2]];
				if (f)
					return f(a, c, b, d)
			}
		}
	},
	H = l.match.POS,
	I = function (a, b) {
		return "\\" + (b - 0 + 1)
	},
	t;
	for (t in l.match)
		l.match[t] = RegExp(l.match[t].source + /(?![^\[]*\])(?![^\(]*\))/.source), l.leftMatch[t] = RegExp(/(^(?:.|\r|\n)*?)/.source +
				l.match[t].source.replace(/\\(\d+)/g, I));
	var q = function (a, b) {
		a = Array.prototype.slice.call(a, 0);
		return b ? (b.push.apply(b, a), b) : a
	};
	try {
		Array.prototype.slice.call(document.documentElement.childNodes, 0)[0].nodeType
	} catch (J) {
		q = function (a, b) {
			var c = 0,
			d = b || [];
			if ("[object Array]" === E.call(a))
				Array.prototype.push.apply(d, a);
			else if ("number" === typeof a.length)
				for (var f = a.length; c < f; c++)
					d.push(a[c]);
			else
				for (; a[c]; c++)
					d.push(a[c]);
			return d
		}
	}
	var z,
	w;
	document.documentElement.compareDocumentPosition ? z = function (a,
		b) {
		return a === b ? (x = !0, 0) : !a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition ? -1 : 1 : a.compareDocumentPosition(b) & 4 ? -1 : 1
	}
	 : (z = function (a, b) {
		var c,
		d,
		f = [],
		e = [];
		c = a.parentNode;
		d = b.parentNode;
		var h = c;
		if (a === b)
			return x = !0, 0;
		if (c === d)
			return w(a, b);
		if (c) {
			if (!d)
				return 1
		} else
			return -1;
		for (; h; )
			f.unshift(h), h = h.parentNode;
		for (h = d; h; )
			e.unshift(h), h = h.parentNode;
		c = f.length;
		d = e.length;
		for (h = 0; h < c && h < d; h++)
			if (f[h] !== e[h])
				return w(f[h], e[h]);
		return h === c ? w(a, e[h], -1) : w(f[h], b, 1)
	}, w = function (a,
			b, c) {
		if (a === b)
			return c;
		for (a = a.nextSibling; a; ) {
			if (a === b)
				return -1;
			a = a.nextSibling
		}
		return 1
	});
	k.getText = function (a) {
		for (var b = "", c, d = 0; a[d]; d++)
			c = a[d], 3 === c.nodeType || 4 === c.nodeType ? b += c.nodeValue : 8 !== c.nodeType && (b += k.getText(c.childNodes));
		return b
	};
	(function () {
		var a = document.createElement("div"),
		b = "script" + (new Date).getTime(),
		c = document.documentElement;
		a.innerHTML = "\x3ca name\x3d'" + b + "'/\x3e";
		c.insertBefore(a, c.firstChild);
		document.getElementById(b) && (l.find.ID = function (a, b, c) {
			if ("undefined" !==
				typeof b.getElementById && !c)
				return (b = b.getElementById(a[1])) ? b.id === a[1] || "undefined" !== typeof b.getAttributeNode && b.getAttributeNode("id").nodeValue === a[1] ? [b] : void 0 : []
		}, l.filter.ID = function (a, b) {
			var c = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id");
			return 1 === a.nodeType && c && c.nodeValue === b
		});
		c.removeChild(a);
		c = a = null
	})();
	(function () {
		var a = document.createElement("div");
		a.appendChild(document.createComment(""));
		0 < a.getElementsByTagName("*").length && (l.find.TAG = function (a, c) {
			var d =
				c.getElementsByTagName(a[1]);
			if ("*" === a[1]) {
				for (var f = [], e = 0; d[e]; e++)
					1 === d[e].nodeType && f.push(d[e]);
				d = f
			}
			return d
		});
		a.innerHTML = "\x3ca href\x3d'#'\x3e\x3c/a\x3e";
		a.firstChild && ("undefined" !== typeof a.firstChild.getAttribute && "#" !== a.firstChild.getAttribute("href")) && (l.attrHandle.href = function (a) {
			return a.getAttribute("href", 2)
		});
		a = null
	})();
	document.querySelectorAll && function () {
		var a = k,
		b = document.createElement("div");
		b.innerHTML = "\x3cp class\x3d'TEST'\x3e\x3c/p\x3e";
		if (!(b.querySelectorAll && 0 ===
				b.querySelectorAll(".TEST").length)) {
			k = function (b, c, e, h) {
				c = c || document;
				if (!h && !k.isXML(c)) {
					var g = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
					if (g && (1 === c.nodeType || 9 === c.nodeType)) {
						if (g[1])
							return q(c.getElementsByTagName(b), e);
						if (g[2] && l.find.CLASS && c.getElementsByClassName)
							return q(c.getElementsByClassName(g[2]), e)
					}
					if (9 === c.nodeType) {
						if ("body" === b && c.body)
							return q([c.body], e);
						if (g && g[3]) {
							var n = c.getElementById(g[3]);
							if (n && n.parentNode) {
								if (n.id === g[3])
									return q([n], e)
							} else
								return q([], e)
						}
						try {
							return q(c.querySelectorAll(b),
								e)
						} catch (r) {}

					} else if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
						var n = (g = c.getAttribute("id")) || "__sizzle__",
						s = c.parentNode,
						p = /^\s*[+~]/.test(b);
						g ? n = n.replace(/'/g, "\\$\x26") : c.setAttribute("id", n);
						p && s && (c = c.parentNode);
						try {
							if (!p || s)
								return q(c.querySelectorAll("[id\x3d'" + n + "'] " + b), e)
						} catch (m) {}

						finally {
							g || c.removeAttribute("id")
						}
					}
				}
				return a(b, c, e, h)
			};
			for (var c in a)
				k[c] = a[c];
			b = null
		}
	}
	();
	(function () {
		var a = document.documentElement,
		b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector ||
			a.msMatchesSelector,
		c = !1;
		try {
			b.call(document.documentElement, "[test!\x3d'']:sizzle")
		} catch (d) {
			c = !0
		}
		b && (k.matchesSelector = function (a, d) {
			d = d.replace(/\=\s*([^'"\]]*)\s*\]/g, "\x3d'$1']");
			if (!k.isXML(a))
				try {
					if (c || !l.match.PSEUDO.test(d) && !/!=/.test(d))
						return b.call(a, d)
				} catch (h) {}

			return 0 < k(d, null, null, [a]).length
		})
	})();
	(function () {
		var a = document.createElement("div");
		a.innerHTML = "\x3cdiv class\x3d'test e'\x3e\x3c/div\x3e\x3cdiv class\x3d'test'\x3e\x3c/div\x3e";
		a.getElementsByClassName && 0 !== a.getElementsByClassName("e").length &&
		(a.lastChild.className = "e", 1 !== a.getElementsByClassName("e").length && (l.order.splice(1, 0, "CLASS"), l.find.CLASS = function (a, c, d) {
				if ("undefined" !== typeof c.getElementsByClassName && !d)
					return c.getElementsByClassName(a[1])
			}, a = null))
	})();
	k.contains = document.documentElement.contains ? function (a, b) {
		return a !== b && (a.contains ? a.contains(b) : !0)
	}
	 : document.documentElement.compareDocumentPosition ? function (a, b) {
		return !!(a.compareDocumentPosition(b) & 16)
	}
	 : function () {
		return !1
	};
	k.isXML = function (a) {
		return (a = (a ? a.ownerDocument ||
				a : 0).documentElement) ? "HTML" !== a.nodeName : !1
	};
	var G = function (a, b) {
		for (var c, d = [], f = "", e = b.nodeType ? [b] : b; c = l.match.PSEUDO.exec(a); )
			f += c[0], a = a.replace(l.match.PSEUDO, "");
		a = l.relative[a] ? a + "*" : a;
		c = 0;
		for (var h = e.length; c < h; c++)
			k(a, e[c], d);
		return k.filter(f, d)
	};
	window.Sizzle = k
})();
var TWEEN = TWEEN || function () {
	var a,
	d,
	c = 60,
	b = !1,
	e = [];
	return {
		setFPS : function (a) {
			c = a || 60
		},
		start : function (a) {
			0 != arguments.length && this.setFPS(a);
			d = setInterval(this.update, 1E3 / c)
		},
		stop : function () {
			clearInterval(d)
		},
		setAutostart : function (a) {
			(b = a) && !d && this.start()
		},
		add : function (a) {
			e.push(a);
			b && !d && this.start()
		},
		getAll : function () {
			return e
		},
		removeAll : function () {
			e = []
		},
		remove : function (b) {
			a = e.indexOf(b);
			-1 !== a && e.splice(a, 1)
		},
		update : function (c) {
			a = 0;
			num_tweens = e.length;
			for (c = c || Date.now(); a < num_tweens; )
				e[a].update(c) ?
				a++ : (e.splice(a, 1), num_tweens--);
			0 == num_tweens && !0 == b && this.stop()
		}
	}
}
();
TWEEN.Tween = function (a) {
	var d = {},
	c = {},
	b = {},
	e = 1E3,
	h = 0,
	k = null,
	p = TWEEN.Easing.Linear.EaseNone,
	l = null,
	m = null,
	n = null;
	this.to = function (c, d) {
		null !== d && (e = d);
		for (var f in c)
			null !== a[f] && (b[f] = c[f]);
		return this
	};
	this.start = function (q) {
		TWEEN.add(this);
		k = q ? q + h : Date.now() + h;
		for (var e in b)
			null !== a[e] && (d[e] = a[e], c[e] = b[e] - a[e]);
		return this
	};
	this.stop = function () {
		TWEEN.remove(this);
		return this
	};
	this.delay = function (a) {
		h = a;
		return this
	};
	this.easing = function (a) {
		p = a;
		return this
	};
	this.chain = function (a) {
		l = a
	};
	this.onUpdate =
	function (a) {
		m = a;
		return this
	};
	this.onComplete = function (a) {
		n = a;
		return this
	};
	this.update = function (b) {
		var g,
		f;
		if (b < k)
			return !0;
		b = (b - k) / e;
		b = 1 < b ? 1 : b;
		f = p(b);
		for (g in c)
			a[g] = d[g] + c[g] * f;
		null !== m && m.call(a, f);
		return 1 == b ? (null !== n && n.call(a), null !== l && l.start(), !1) : !0
	}
};
TWEEN.Easing = {
	Linear : {},
	Quadratic : {},
	Cubic : {},
	Quartic : {},
	Quintic : {},
	Sinusoidal : {},
	Exponential : {},
	Circular : {},
	Elastic : {},
	Back : {},
	Bounce : {}

};
TWEEN.Easing.Linear.EaseNone = function (a) {
	return a
};
TWEEN.Easing.Quadratic.EaseIn = function (a) {
	return a * a
};
TWEEN.Easing.Quadratic.EaseOut = function (a) {
	return -a * (a - 2)
};
TWEEN.Easing.Quadratic.EaseInOut = function (a) {
	return 1 > (a *= 2) ? 0.5 * a * a : -0.5 * (--a * (a - 2) - 1)
};
TWEEN.Easing.Cubic.EaseIn = function (a) {
	return a * a * a
};
TWEEN.Easing.Cubic.EaseOut = function (a) {
	return --a * a * a + 1
};
TWEEN.Easing.Cubic.EaseInOut = function (a) {
	return 1 > (a *= 2) ? 0.5 * a * a * a : 0.5 * ((a -= 2) * a * a + 2)
};
TWEEN.Easing.Quartic.EaseIn = function (a) {
	return a * a * a * a
};
TWEEN.Easing.Quartic.EaseOut = function (a) {
	return  - (--a * a * a * a - 1)
};
TWEEN.Easing.Quartic.EaseInOut = function (a) {
	return 1 > (a *= 2) ? 0.5 * a * a * a * a : -0.5 * ((a -= 2) * a * a * a - 2)
};
TWEEN.Easing.Quintic.EaseIn = function (a) {
	return a * a * a * a * a
};
TWEEN.Easing.Quintic.EaseOut = function (a) {
	return (a -= 1) * a * a * a * a + 1
};
TWEEN.Easing.Quintic.EaseInOut = function (a) {
	return 1 > (a *= 2) ? 0.5 * a * a * a * a * a : 0.5 * ((a -= 2) * a * a * a * a + 2)
};
TWEEN.Easing.Sinusoidal.EaseIn = function (a) {
	return -Math.cos(a * Math.PI / 2) + 1
};
TWEEN.Easing.Sinusoidal.EaseOut = function (a) {
	return Math.sin(a * Math.PI / 2)
};
TWEEN.Easing.Sinusoidal.EaseInOut = function (a) {
	return -0.5 * (Math.cos(Math.PI * a) - 1)
};
TWEEN.Easing.Exponential.EaseIn = function (a) {
	return 0 == a ? 0 : Math.pow(2, 10 * (a - 1))
};
TWEEN.Easing.Exponential.EaseOut = function (a) {
	return 1 == a ? 1 : -Math.pow(2, -10 * a) + 1
};
TWEEN.Easing.Exponential.EaseInOut = function (a) {
	return 0 == a ? 0 : 1 == a ? 1 : 1 > (a *= 2) ? 0.5 * Math.pow(2, 10 * (a - 1)) : 0.5 * (-Math.pow(2, -10 * (a - 1)) + 2)
};
TWEEN.Easing.Circular.EaseIn = function (a) {
	return  - (Math.sqrt(1 - a * a) - 1)
};
TWEEN.Easing.Circular.EaseOut = function (a) {
	return Math.sqrt(1 - --a * a)
};
TWEEN.Easing.Circular.EaseInOut = function (a) {
	return 1 > (a /= 0.5) ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
};
TWEEN.Easing.Elastic.EaseIn = function (a) {
	var d,
	c = 0.1,
	b = 0.4;
	if (0 == a)
		return 0;
	if (1 == a)
		return 1;
	b || (b = 0.3);
	!c || 1 > c ? (c = 1, d = b / 4) : d = b / (2 * Math.PI) * Math.asin(1 / c);
	return  - (c * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a - d) * Math.PI / b))
};
TWEEN.Easing.Elastic.EaseOut = function (a) {
	var d,
	c = 0.1,
	b = 0.4;
	if (0 == a)
		return 0;
	if (1 == a)
		return 1;
	b || (b = 0.3);
	!c || 1 > c ? (c = 1, d = b / 4) : d = b / (2 * Math.PI) * Math.asin(1 / c);
	return c * Math.pow(2, -10 * a) * Math.sin(2 * (a - d) * Math.PI / b) + 1
};
TWEEN.Easing.Elastic.EaseInOut = function (a) {
	var d,
	c = 0.1,
	b = 0.4;
	if (0 == a)
		return 0;
	if (1 == a)
		return 1;
	b || (b = 0.3);
	!c || 1 > c ? (c = 1, d = b / 4) : d = b / (2 * Math.PI) * Math.asin(1 / c);
	return 1 > (a *= 2) ? -0.5 * c * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a - d) * Math.PI / b) : 0.5 * c * Math.pow(2, -10 * (a -= 1)) * Math.sin(2 * (a - d) * Math.PI / b) + 1
};
TWEEN.Easing.Back.EaseIn = function (a) {
	return a * a * (2.70158 * a - 1.70158)
};
TWEEN.Easing.Back.EaseOut = function (a) {
	return (a -= 1) * a * (2.70158 * a + 1.70158) + 1
};
TWEEN.Easing.Back.EaseInOut = function (a) {
	return 1 > (a *= 2) ? 0.5 * a * a * (3.5949095 * a - 2.5949095) : 0.5 * ((a -= 2) * a * (3.5949095 * a + 2.5949095) + 2)
};
TWEEN.Easing.Bounce.EaseIn = function (a) {
	return 1 - TWEEN.Easing.Bounce.EaseOut(1 - a)
};
TWEEN.Easing.Bounce.EaseOut = function (a) {
	return (a /= 1) < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375
};
TWEEN.Easing.Bounce.EaseInOut = function (a) {
	return 0.5 > a ? 0.5 * TWEEN.Easing.Bounce.EaseIn(2 * a) : 0.5 * TWEEN.Easing.Bounce.EaseOut(2 * a - 1) + 0.5
};
window.Ext && (window.Ext.form && window.Ext.form.TriggerField) && (Ext.ns("Sfdc.html"), Sfdc.html.QuickfindInput = Ext.extend(Ext.form.TriggerField, {
			cls : "quickfindInput",
			ctCls : "quickfindContainer",
			enableKeyEvents : !0,
			hideTrigger : !0,
			buffer : !1,
			initComponent : function () {
				var b = this.scope || this;
				this.on("keyup", function (a) {
					a = a.getRawValue();
					0 < a.length ? this.trigger.show() : this.trigger.hide();
					this.searchFunction && this.searchFunction.call(b, a)
				}, this, this.buffer ? {
					buffer : this.buffer
				}
					 : null);
				Sfdc.html.QuickfindInput.superclass.initComponent.call(this)
			},
			onTriggerClick : function () {
				this.trigger.hide();
				this.reset();
				this.focus();
				this.clearFunction && this.clearFunction.call(this.scope || this)
			}
		}));
var QueryString = function (a, c) {
	this.allowMultipleValuesForParam = !!c;
	this.params = {};
	this.refValue = null;
	this.hasRef = !1;
	if (null == a)
		a = location.search.substring(1, location.search.length);
	else {
		var b = a.lastIndexOf("#");
		-1 !== b && (this.refValue = a.substring(b + 1), a = a.substring(0, b), this.hasRef = !0)
	}
	if (0 != a.length) {
		a = a.replace(/\+/g, " ");
		for (var b = a.split("\x26"), d = 0; d < b.length; d++) {
			var e = b[d].indexOf("\x3d");
			if (0 < e) {
				var f = decodeURIComponent(b[d].substr(0, e)),
				e = decodeURIComponent(b[d].substr(e + 1));
				this.add(f, e)
			}
		}
	}
};
QueryString.prototype.getAllParams = function () {
	return this.params
};
QueryString.prototype.getAllowMultipleValuesForParam = function () {
	return this.allowMultipleValuesForParam
};
QueryString.prototype.get = function (a, c) {
	var b = this.params[a];
	return b ? b : c ? c : null
};
QueryString.prototype.doesHaveRef = function () {
	return this.hasRef
};
QueryString.prototype.add = function (a, c) {
	if (this.allowMultipleValuesForParam) {
		var b = this.params[a];
		b ? b[b.length] = c : (b = [], b[0] = c);
		this.params[a] = b
	} else
		this.params[a] = c
};
QueryString.prototype.replace = function (a, c) {
	this.remove(a);
	this.add(a, c)
};
QueryString.prototype.addAll = function (a) {
	if (a && a.hasOwnProperty("params"))
		for (var c in a.params) {
			var b = a.params[c];
			if (this.allowMultipleValuesForParam && Sfdc.isArray(b))
				for (var d = 0; d < b.length; d++)
					"undefined" !== typeof b[d] && this.add(c, b[d]);
			else
				this.add(c, b)
		}
};
QueryString.prototype.append = function (a, c, b) {
	if (this.allowMultipleValuesForParam)
		throw "Append is not supported with multi param mode";
	this.params[a] ? this.add(a, this.params[a] + b + c) : this.add(a, c)
};
QueryString.prototype.remove = function (a) {
	this.params[a] = null
};
QueryString.prototype.toString = function () {
	var a = "?",
	c;
	for (c in this.params) {
		var b = this.params[c];
		if (void 0 != b)
			if (this.allowMultipleValuesForParam)
				for (var d = 0; d < b.length; d++)
					"undefined" !== typeof b[d] && (a = a + c + "\x3d" + encodeURIComponent(b[d]) + "\x26");
			else
				a = a + c + "\x3d" + encodeURIComponent(b) + "\x26"
	}
	this.refValue && (a += "#" + this.refValue);
	return a
};
QueryString.prototype.concatenateWithUrl = function (a, c) {
	if (!a)
		return a;
	var b = QueryString.createQueryString(a, c);
	b.addAll(this);
	return QueryString.getURI(a) + b.toString()
};
QueryString.getQueryStringIndex = function (a, c) {
	var b = a.indexOf("?"),
	d = a.lastIndexOf("#");
	return -1 < d && (0 > b || d < b) ? c ? d - 1 : d : b
};
QueryString.getURI = function (a) {
	var c = QueryString.getQueryStringIndex(a, !1);
	return 0 < c ? a.substring(0, c) : a
};
QueryString.getHashValue = function (a) {
	var c = a.lastIndexOf("#"),
	b = "";
	-1 !== c && (b = "#" + a.substr(c + 1));
	return b
};
QueryString.createQueryString = function (a, c) {
	var b = QueryString.getQueryStringIndex(a, !0),
	b = 0 <= b ? a.substring(b + 1) : "";
	return new QueryString(b, c)
};
QueryString.valueFromHash = function (a, c) {
	if (-1 != window.location.href.indexOf("#")) {
		for (var b = window.location.href.split("#")[1].split(c), d = 0; d < b.length; d++)
			if (b[d] === a)
				return b[d + 1];
		return null
	}
};
QueryString.clearHash = function () {
	window.location.hash = "#"
};
QueryString.prototype.equals = function (a) {
	var c = 0,
	b = 0,
	d;
	for (d in this.params)
		if (this.params.hasOwnProperty(d)) {
			c++;
			var e = this.get(d),
			f = a.get(d);
			if (!e || !f) {
				if (e !== f)
					return !1
			} else {
				e instanceof Array || (e = [e]);
				f instanceof Array || (f = [f]);
				if (e.length !== f.length)
					return !1;
				if (1 === e.length && 1 === f.length) {
					if (e[0] !== f[0])
						return !1
				} else {
					e.sort();
					f.sort();
					for (var g = 0; g <= e.length; g++)
						if (e[g] !== f[g])
							return !1
				}
			}
		}
	for (d in a.getAllParams())
		b++;
	return c != b || a.refValue !== this.refValue ? !1 : !0
};
QueryString.urlsEqual = function (a, c) {
	return a.length == c.length && QueryString.getURI(a) == QueryString.getURI(c) && QueryString.createQueryString(a, !0).equals(QueryString.createQueryString(c, !0))
};
QueryString.addParamToUrl = function (a, c, b) {
	var d = QueryString.createQueryString(a);
	d.add(c, b);
	return QueryString.getURI(a) + d.toString()
};
var HolidayFunction = {
	setNoEndDate : function (b, c) {
		var a = document.getElementById(c);
		if (a.disabled = b)
			a.value = ""
	},
	setIsRecurrent : function (b, c, a, d, e) {
		a = document.getElementById(a);
		d = document.getElementById(d);
		c = document.getElementById(c);
		e = document.getElementById(e).checked;
		c.disabled = b;
		a.disabled = !b;
		b ? ("" == a.value && (a.value = c.value), d.disabled = e, document.getElementById(ActivityUi.RECURRENCE_PATTERN_DIV).style.display = "") : (d.disabled = !0, document.getElementById(ActivityUi.RECURRENCE_PATTERN_DIV).style.display =
				"none")
	},
	setIsAllDay : function (b) {
		document.getElementById(HolidayUi.START_TIME_PARAM).disabled = b;
		document.getElementById(HolidayUi.END_TIME_PARAM).disabled = b
	},
	setActivityDate : function (b, c) {
		var a = document.getElementById(b).value,
		d = DateUtil.getDateFromUserLocale(a);
		0 != d.getTime() && (document.getElementById(c).value = a, document.getElementById(Activity.pYEARLY_MONTHOFYEAR).value = d.getMonth(), document.getElementById(Activity.pYEARLY_DAYOFMONTH).value = d.getDate())
	}
};
function LC() {}

LC.getLabel = function () {
	return LC.getLabelWithArray(this.getLabel.arguments)
};
LC.getLabelWithArray = function (a) {
	var b = "";
	a[0] && a[1] && (b = LC.labels[a[0]][a[1]]);
	for (var c = 2; c < a.length; c++)
		b = b.replace(RegExp("\\{" + (c - 2) + "\\}", "g"), a[c]);
	return b
};
LC.isEnglishLanguage = function () {
	return UserContext.initialized && "en_US" == UserContext.language
};
LC.isUSLocale = function () {
	return UserContext.initialized && "en_US" == UserContext.locale
};
LC.isEnglishUS = function () {
	return LC.isEnglishLanguage() && LC.isUSLocale()
};
LC.isThaiTHLocale = function () {
	return "th_TH" == UserContext.locale
};
LC.isRtlPage = function () {
	return "rtl" == getCurrentStyle(document.body, "direction")
};
LC.BUDDHIST_CAL_OFFSET = 543;
function LookupHoverDetail(a, b) {
	b && (b = window.Shepherd ? window.Shepherd.fixRetUrl(b) : UserContext.getUrl(b));
	this.id = a;
	this.width = LookupHoverDetail.STANDARD_BUBBLE_WIDTH;
	this.bubbleOffset = Sfdc.userAgent.isIE6 ? 5 : 14;
	this.height = LookupHoverDetail.STANDARD_BUBBLE_HEIGHT;
	this.hover = document.createElement("div");
	this.hover.id = a + "Hover";
	this.hover.className = "individualPalette lookupHoverDetail lookupHoverDetailLoading lookupHoverDetailOverridable";
	this.hover.innerHTML = '\x3cdiv class\x3d"topLeft"\x3e\x3cdiv class\x3d"bPageBlock"\x3e\x3cdiv class\x3d"pbBody"\x3e' +
		LC.getLabel("Global", "loading") + '\x3cdiv\x3e\x3cdiv class\x3d"pbFooter"\x3e\x3cdiv class\x3d"bg"\x3e\x3cdiv\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv\x3e';
	document.body.appendChild(this.hover);
	var c = this;
	addEvent(this.hover, "mouseover", function () {
		c.show()
	}, !0);
	addEvent(this.hover, "mouseout", function () {
		c.hide()
	}, !0);
	this.hover = new iframeShim(this.hover);
	this.originalClass = "";
	this.fadingIn = this.fadingOut = null;
	this.loaderURL = b;
	this.loaded = !1
}
LookupHoverDetail.STANDARD_BUBBLE_WIDTH = 302;
LookupHoverDetail.STANDARD_BUBBLE_HEIGHT = 262;
LookupHoverDetail.SHOW_DELAY = 800;
LookupHoverDetail.HIDE_DELAY = 250;
LookupHoverDetail.stopLoading = !1;
LookupHoverDetail.hovers = {};
LookupHoverDetail.getHover = function (a, b) {
	if (LookupHoverDetail.hovers[a])
		return LookupHoverDetail.hovers[a];
	var c = new LookupHoverDetail(a, b);
	return LookupHoverDetail.hovers[a] = c
};
LookupHoverDetail.hideAllHovers = function () {
	var a = LookupHoverDetail.hovers,
	b;
	for (b in a)
		a.hasOwnProperty(b) && a[b].hide()
};
LookupHoverDetail.prototype.show = function () {
	if (this.fadingOut)
		clearTimeout(this.fadingOut), this.fadingOut = null;
	else {
		var a = this;
		this.fadingIn || (this.fadingIn = setTimeout(function () {
					a.showNow()
				}, LookupHoverDetail.SHOW_DELAY))
	}
};
LookupHoverDetail.prototype.showNow = function () {
	if (!this.loaded)
		if (null != this.loaderURL) {
			var a = this;
			Sfdc.Ajax.get(this.loaderURL, function (b) {
				a.load(b)
			}, {
				failure : function (b) {
					a.load(b)
				}
			})
		} else
			return;
	this.position();
	this.hover.setStyle("visibility", "visible");
	this.fadingIn = null
};
LookupHoverDetail.prototype.hide = function () {
	if (this.fadingIn)
		clearTimeout(this.fadingIn), this.fadingIn = null;
	else {
		var a = this;
		this.fadingOut = setTimeout(function () {
				a.hideNow()
			}, LookupHoverDetail.HIDE_DELAY)
	}
};
LookupHoverDetail.prototype.hideNow = function () {
	this.hover.setStyle("visibility", "hidden");
	this.fadingOut = null
};
LookupHoverDetail.prototype.load = function (a) {
	this.hover.div.innerHTML = a;
	Util.evalScriptsUnderElement(this.hover.div);
	this.originalClass = this.hover.div.firstChild.className;
	this.height = this.hover.div.offsetHeight;
	delStyleClass(this.hover.div, "lookupHoverDetailLoading");
	this.position();
	this.loaded = !0
};
LookupHoverDetail.prototype.position = function () {
	var a = getElementByIdCS(this.id),
	b = getObjX(a),
	c = getObjY(a),
	d = a.offsetWidth,
	e = a.offsetHeight,
	f = getScrollX(),
	g = getScrollY(),
	h = getWindowWidth(),
	k = getWindowHeight(),
	a = this.originalClass + " ";
	c + e + this.height < g + k ? (a += "top", c += e) : (a += "bottom", c -= this.height);
	b + d - this.bubbleOffset + this.width < f + h ? (a += "Left", b = b + d / 2 - this.bubbleOffset) : (a += "Right", b = b + d / 2 - this.width);
	this.hover.setStyle("left", b + "px");
	this.hover.setStyle("top", c + "px");
	this.hover.div.firstChild.className =
		a;
	if (this.hover.div.firstChild && (b = Util.hasStyleEndsWith(this.hover.div.firstChild, "Override")))
		delStyleClass(this.hover.div, "lookupHoverDetailOverridable"), delStyleClass(this.hover.div.firstChild, b), addStyleClass(this.hover.div, b)
};
function MRUHoverDetail(a) {
	this.id = a;
	this.mruItem = getElementByIdCS("mru" + a);
	this.hover = document.createElement("div");
	this.hover.id = a + "Hover";
	this.hover.className = "mruHoverDetail mruHoverLoading";
	this.hover.innerHTML = '\x3cdiv class\x3d"bPageBlock secondaryPalette"\x3e\x3cdiv class\x3d"pbBody"\x3e' + LC.getLabel("Global", "loading") + '\x3c/div\x3e\x3cdiv class\x3d"pbFooter"\x3e\x3c/div\x3e\x3c/div\x3e';
	this.mruItem.appendChild(this.hover);
	this.originalClass = this.mruItem.className;
	a = this.mruItem.offsetWidth;
	this.mruItem.currentStyle && Sfdc.userAgent.isIE6 && (a -= 30);
	var b = LC.isRtlPage() ? "right" : "left";
	this.hover.style[b] = a + "px";
	this.hover = new iframeShim(this.hover);
	this.fadingIn = this.fadingOut = null;
	this.loaded = !1
}
MRUHoverDetail.SHOW_DELAY = 800;
MRUHoverDetail.HIDE_DELAY = 400;
MRUHoverDetail.loaderURL = null;
MRUHoverDetail.sentRequest = !1;
MRUHoverDetail.response = null;
MRUHoverDetail.hovers = {};
MRUHoverDetail.openHover = null;
MRUHoverDetail.getHover = function (a) {
	if (MRUHoverDetail.hovers[a])
		return MRUHoverDetail.hovers[a];
	var b = new MRUHoverDetail(a);
	return MRUHoverDetail.hovers[a] = b
};
MRUHoverDetail.bulkLoad = function () {
	!MRUHoverDetail.sentRequest && null != MRUHoverDetail.loaderURL && (MRUHoverDetail.sentRequest = !0, Sfdc.Ajax.get(MRUHoverDetail.loaderURL, function (a) {
			MRUHoverDetail.response = a;
			null != MRUHoverDetail.openHover && MRUHoverDetail.hovers[MRUHoverDetail.openHover].load()
		}, {
			failure : function (a) {
				MRUHoverDetail.response = a;
				null != MRUHoverDetail.openHover && MRUHoverDetail.hovers[MRUHoverDetail.openHover].load()
			}
		}))
};
MRUHoverDetail.prototype.show = function () {
	if (this.fadingOut)
		clearTimeout(this.fadingOut), this.fadingOut = null;
	else {
		var a = this;
		this.fadingIn = setTimeout(function () {
				a.showNow()
			}, MRUHoverDetail.SHOW_DELAY)
	}
};
MRUHoverDetail.prototype.showNow = function () {
	if (!MRUHoverDetail.sentRequest)
		if (null != MRUHoverDetail.loaderURL)
			MRUHoverDetail.bulkLoad();
		else
			return;
	MRUHoverDetail.openHover = this.id;
	!this.loaded && null != MRUHoverDetail.response && this.load();
	this.hover.setStyle("display", "block");
	if (this.mruItem.currentStyle && Sfdc.userAgent.isIE6) {
		var a = LC.isRtlPage() ? "right" : "left";
		this.hover.iframe.style[a] = this.hover.div.style[a]
	}
	this.mruItem.className = this.originalClass + " secondaryPalette";
	this.fadingIn = null
};
MRUHoverDetail.prototype.hide = function (a) {
	if (this.fadingIn)
		clearTimeout(this.fadingIn), this.fadingIn = null;
	else {
		var b = this;
		this.fadingOut = setTimeout(function () {
				b.hideNow()
			}, MRUHoverDetail.HIDE_DELAY)
	}
};
MRUHoverDetail.prototype.hideNow = function () {
	MRUHoverDetail.openHover = null;
	this.hover.setStyle("display", "none");
	this.mruItem.className = this.originalClass;
	this.fadingOut = null
};
MRUHoverDetail.prototype.load = function () {
	var a = "\x3c" + this.id + "\x3e",
	b = "\x3c/" + this.id + "\x3e",
	c = MRUHoverDetail.response.indexOf(a),
	b = MRUHoverDetail.response.indexOf(b);
	-1 != c && -1 != b && (this.hover.div.innerHTML = MRUHoverDetail.response.slice(c + a.length, b), Util.evalScriptsUnderElement(this.hover.div), delStyleClass(this.hover.div, "mruHoverLoading"), this.loaded = !0)
};
function getSTimeout() {
	Sfdc.Cookie.getCookie && null == Sfdc.Cookie.getCookie(RequestInfo.pSID, function (b) {
		return b
	}) ? doAlertTimeout() : Sfdc.Ajax.request(UserContext.getUrl("/_nc_external/system/security/session/SessionTimeServlet"), {
		complete : function (b, d, e) {
			try {
				var a = Sfdc.JSON.parseWithCSRF(b);
				null != a[SessionTimeServlet.TIMEOUTP] && 10 < a[SessionTimeServlet.TIMEOUTP] ? updateSessionTimeouts(a[SessionTimeServlet.TIMEOUT], a[SessionTimeServlet.TIMEOUTP]) : doAlertTimeout()
			} catch (c) {
				Sfdc.warn(c),
				doAlertTimeout()
			}
		}
	})
};
var TimePickerInputElement = {
	FocusInput : function (a) {
		a = document.getElementById(a);
		a.className = "timeInputActive";
		a.value == TimePickerInputElementConstants.EMPTY_TIME_STANDIN ? (a.value = "", a.select()) : "" != a.value && a.select()
	},
	BlurInput : function (a) {
		a = document.getElementById(a);
		"" == a.value && (a.className = "timeInputInactive", a.value = TimePickerInputElementConstants.EMPTY_TIME_STANDIN)
	}
};
function AppPickerHelper(a, b) {
	this.picker = a;
	this.urlMap = b;
	this.originalIndex = a.selectedIndex
}
AppPickerHelper.prototype.handleChange = function () {
	if ("EMPTY" == this.picker.options[picker.selectedIndex].value)
		this.picker.selectedIndex = this.originalIndex;
	else {
		var a = this.urlMap[this.picker.options[this.picker.selectedIndex].value],
		b = a.replace(UserContext.getUrl("/"), "/");
		4 <= b.length && "/sfc" == b.substring(0, 4) ? this.handleSFCTabSwitch(a) : (0 <= a.indexOf("?") && this.parseUrlParamsIntoHiddens(a), this.picker.form.action = this.urlMap[this.picker.options[this.picker.selectedIndex].value], this.picker.form.submit())
	}
};
AppPickerHelper.prototype.parseUrlParamsIntoHiddens = function (a) {
	var b = a.split("?")[0];
	a = a.split("?")[1].split("\x26");
	for (var d = 0; d < a.length; d++) {
		var c = document.createElement("INPUT");
		c.type = "hidden";
		c.name = a[d].split("\x3d")[0];
		c.id = a[d].split("\x3d")[0];
		c.value = a[d].split("\x3d")[1];
		this.picker.form.appendChild(c)
	}
	return b
};
AppPickerHelper.prototype.handleSFCTabSwitch = function (a) {
	var b = this.picker.name + "\x3d" + this.picker.options[this.picker.selectedIndex].value;
	a = -1 < a.indexOf("?") ? a + "\x26" : a + "?";
	document.location.href = a + b
};
AppPickerHelper.prototype.setPickerToOriginalIndex = function () {
	this.picker.selectedIndex = this.originalIndex
};
AppPickerHelper.prototype.getSelectedValue = function () {
	return this.picker.options[picker.selectedIndex].value
};
function AppPicker(a, b, d, c, f, e) {
	this.appExchangeUrl = a;
	this.appStoreUrl = b;
	this.developerUrl = d;
	this.helper = new AppPickerHelper(c, f);
	var g = this;
	e ? addEvent(e, "click", function () {
		g.handleChange()
	}, !1) : addEvent(c, "change", function () {
		g.handleChange()
	}, !1)
}
AppPicker.prototype.handleChange = function () {
	picker = this.helper.getElement();
	if ("AppExchange" == picker.options[picker.selectedIndex].value) {
		var a = window.open(this.appExchangeUrl, "AppExchangePopup");
		picker.selectedIndex = this.helper.getOriginalIndex();
		a.focus()
	} else
		"AppStore" == picker.options[picker.selectedIndex].value ? (a = window.open(this.appStoreUrl, "AppStorePopup"), picker.selectedIndex = this.helper.getOriginalIndex(), a.focus()) : "DeveloperForce" == picker.options[picker.selectedIndex].value ? (a = window.open(this.developerUrl,
					"DeveloperForcePopup"), picker.selectedIndex = this.helper.getOriginalIndex(), a.focus()) : this.helper.handleChange()
};
function AppPickerAlohaAccesability(a) {
	this.goButton = document.getElementById(a + MenuButtonElement.GO_BUTTON);
	this.picker = document.getElementById(a + MenuButtonElement.SELECT);
	this.originalIndex = this.picker.selectedIndex;
	var b = this;
	addEvent(this.goButton, "click", function () {
		b.handleChange()
	}, !1);
	addEvent(this.picker, "change", function () {
		b.handleChange()
	}, !1)
}
AppPickerAlohaAccesability.prototype.handleChange = function () {
	"EMPTY" == this.picker.options[this.picker.selectedIndex].value ? this.picker.selectedIndex = this.originalIndex : this.originalIndex = this.picker.selectedIndex
};
function AppSwitcher(a, b, d, c, f) {
	picker = document.getElementById(a);
	this.newWindowUrlMap = d;
	this.newWindowNameMap = c;
	this.helper = new AppPickerHelper(picker, b);
	var e = this;
	f ? (a = document.getElementById(f), addEvent(a, "click", function () {
			e.handleChange()
		}, !1)) : addEvent(picker, "change", function () {
		e.handleChange()
	}, !1)
}
AppSwitcher.prototype.handleChange = function () {
	var a = this.helper.getSelectedValue(),
	b = this.newWindowUrlMap[a];
	b ? (a = window.open(b, this.newWindowNameMap[a]), this.helper.setPickerToOriginalIndex(), a.focus()) : this.helper.handleChange()
};
"undefined" !== typeof Range && !Range.prototype.createContextualFragment && (Range.prototype.createContextualFragment = function (c) {
	var a = document.createDocumentFragment(),
	b = document.createElement("div");
	a.appendChild(b);
	b.outerHTML = c;
	return a
});
function Fader(a, c, d, e, f, g, h, k, l, m) {
	function n() {
		b.fadeInHelp()
	}
	function p() {
		b.fadeOutHelp()
	}
	var b = this;
	if (!a || !c || !d || !e || !f || !g)
		return null;
	this.object = a;
	this.testMin = c;
	this.testMax = d;
	this.timestep = e;
	this.nextStep = f;
	this.increment = g;
	this.currVal = h;
	this.finalMin = k;
	this.finalMax = l;
	this.startIn = m;
	this.outId = this.inId = -1;
	this.position = "out";
	this.fadeIn = function () {
		b.startIn && b.startIn(this.object);
		0 <= b.outId && (clearInterval(b.outId), b.outId = -1);
		0 > this.inId && (b.inId = setInterval(n, b.timestep), b.position =
				"moving_in")
	};
	this.fadeOut = function () {
		0 <= b.inId && (clearInterval(b.inId), b.inId = -1);
		0 > b.outId && (b.outId = setInterval(p, b.timestep), b.position = "moving_out")
	};
	this.isMoving = function () {
		return 0 <= this.inId || 0 <= this.outId
	};
	this.getPosition = function () {
		return b.position
	}
}
Fader.prototype.fadeInHelp = function () {
	var a = this.nextStep(this.currVal, 1);
	this.testMax(this.object, a) ? (a = this.finalMax && this.finalMax(this.object), "number" == typeof a && (this.currVal = a), clearInterval(this.inId), this.inId = -1, this.position = "in") : (this.increment(this.object, a), this.currVal = a)
};
Fader.prototype.fadeOutHelp = function () {
	var a = this.nextStep(this.currVal, -1);
	this.testMin(this.object, a) ? (a = this.finalMin && this.finalMin(this.object), "number" == typeof a && (this.currVal = a), clearInterval(this.outId), this.outId = -1, this.position = "out") : (this.increment(this.object, a), this.currVal = a)
};
Fader.prototype.stopFade = function () {
	0 <= this.inId && (clearInterval(this.inId), this.inId = -1);
	0 <= this.outId && (clearInterval(this.outId), this.outId = -1);
	this.position = "stopped"
};
Fader.prototype.jumpIn = function () {
	this.startIn && this.startIn(this.object);
	var a = null;
	this.finalMax && (a = this.finalMax(this.object));
	null !== a && (this.currVal = a);
	this.position = "in"
};
Fader.prototype.jumpOut = function () {
	var a = null;
	this.finalMin && (a = this.finalMin(this.object));
	null !== a && (this.currVal = a);
	this.position = "out"
};
function iframeShim(a) {
	this.div = a;
	if (Sfdc.userAgent.isIE6) {
		a = document.createElement("iframe");
		a.src = IFrameElement.BLANK_SRC;
		a.frameBorder = "0";
		a.scrolling = "no";
		a.className = "iframeShim";
		a.style.zIndex = this.div.currentStyle.zIndex - 1;
		var b = Sfdc.Dom.getLocalOffsetXY(this.div),
		c = b.x,
		d = this.div.currentStyle.left;
		a.style.left = 0 == c && d ? d : c;
		b = b.y;
		c = this.div.currentStyle.top;
		d = this.div.currentStyle.bottom;
		0 == b && (c || d) ? (a.style.top = c, a.style.bottom = d) : a.style.top = b;
		a.style.height = this.div.offsetHeight;
		a.style.position =
			"absolute";
		a.style.display = this.div.currentStyle.display;
		this.iframe = a;
		this.div.parentNode.insertBefore(this.iframe, this.div);
		this.setStyle = this.setStyleIE;
		this.refresh = this.refreshIE
	}
}
iframeShim.prototype = {
	getStyle : function (a) {
		return Sfdc.Dom.getStyle(this.div, a)
	},
	setStyle : function (a, b) {
		Sfdc.Dom.setStyle(this.div, a, b)
	},
	setStyleIE : function (a, b) {
		Sfdc.Dom.setStyle(this.div, a, b);
		"position" != a && Sfdc.Dom.setStyle(this.iframe, a, b);
		this.refresh()
	},
	refresh : function () {},
	refreshIE : function () {
		this.iframe.style.width = this.div.offsetWidth + "px";
		this.iframe.style.height = this.div.offsetHeight + "px";
		var a = Sfdc.Dom.getLocalOffsetXY(this.div);
		this.iframe.style.left = a.x + "px";
		this.iframe.style.top = a.y +
			"px"
	},
	getOpacity : function () {
		return Sfdc.Dom.getStyle(this.div, "opacity")
	},
	setOpacity : function (a) {
		Sfdc.Dom.setStyle(this.div, "opacity", a)
	}
};
var IframeShim = iframeShim;
function LoadingScreen(c, b, a) {
	this.div = c;
	this.text = b;
	this.id = a
}
LoadingScreen.prototype = {
	show : function () {
		this.transparantElement || this.createElements();
		if (Sfdc.userAgent.isIE6 || Sfdc.userAgent.isIE7) {
			var c = this.div.clientHeight + "px";
			this.transparantElement.style.height = c;
			this.opaqueElement.style.height = c
		}
		this.transparantElement.style.display = "block";
		this.opaqueElement.style.display = "block";
		this.positionLoadingElement(this.loadingDescrElement, this.opaqueElement)
	},
	getOpaqueElement : function () {
		return this.opaqueElement
	},
	getTransparentElement : function () {
		return this.transparantElement
	},
	hide : function () {
		this.transparantElement && (this.transparantElement.style.display = "none");
		this.opaqueElement && (this.opaqueElement.style.display = "none")
	},
	createElements : function () {
		"static" == Sfdc.Dom.getStyle(this.div, "position") && (this.div.style.position = "relative");
		this.transparantElement = this.createLoadingElement(this.div);
		this.transparantElement.className = "waitingSearchDiv waitingSearchDivOpacity";
		this.opaqueElement = this.createLoadingElement(this.div);
		this.opaqueElement.className = "waitingSearchDiv";
		this.id && (this.opaqueElement.id = this.id);
		this.loadingDescrElement = this.addLoadingDescription(this.text, this.opaqueElement)
	},
	createLoadingElement : function (c) {
		var b = document.createElement("div");
		b.style.width = "100%";
		b.style.height = "100%";
		if (Sfdc.userAgent.isIE6 || Sfdc.userAgent.isIE7)
			b.style.left = 0, b.style.height = this.div.clientHeight + "px";
		c.appendChild(b);
		return b
	},
	positionLoadingElement : function (c, b) {
		var a = b.offsetHeight / 5;
		100 < a && (a = 100);
		c.style.top = a + "px"
	},
	addLoadingDescription : function (c, b) {
		var a =
			document.createElement("div");
		b.appendChild(a);
		a.className = "waitingHolder";
		var e = document.createElement("img");
		a.appendChild(e);
		e.src = UserContext.getUrl("/img/loading.gif");
		e.className = "waitingImage";
		var d = LC.getLabel("SquidCacheManager", "pleaseWait");
		e.title = d;
		d = document.createElement("span");
		a.appendChild(d);
		d.innerHTML = c;
		d.className = "waitingDescription";
		Sfdc.userAgent.isIE7 ? (a.style.position = "absolute", a.style.width = "auto") : a.style.width = e.offsetWidth + d.offsetWidth + 20 + "px";
		return a
	}
};
function alertBlockSubmit(a) {
	window.ffInAlert = !0;
	alert(a);
	window.ffInAlert = !1
}
function Modal() {}

Modal.getAccessibleWindow = function () {
	var a,
	b = top;
	try {
		a = b.location.href
	} catch (c) {}

	"string" !== typeof a && (b = window);
	return b
};
Modal.confirm = function (a) {
	var b = Modal.getAccessibleWindow();
	b.ffInAlert = !0;
	a = window.confirm(a);
	b.ffInAlert = !1;
	return a
};
Modal.isBlocked = function () {
	return Modal.getAccessibleWindow().ffInAlert
};
var MOUSE_OVER_FADE_MAP = [];
function addMouseOver(c, a, f) {
	for (var e = 0; e < MOUSE_OVER_FADE_MAP.length; e++)
		if (MOUSE_OVER_FADE_MAP[e] === c)
			return;
	for (var g, e = 0; e < c.childNodes.length; e++)
		if (c.childNodes[e].className == MouseOverElement.DEFAULT_CLASS_INNER) {
			g = c.childNodes[e];
			break
		}
	g && ((a ? new MouseOverFade(a, g, f) : new MouseOverFade(c, g, f)).handleMouseOver(), MOUSE_OVER_FADE_MAP.push(c))
}
function MouseOverFade(c, a, f) {
	this.mover = new MouseOverFadeHandler(c, a, !0, f);
	var e = this;
	this.handleMouseOver = function (a) {
		e.mover.fadeIn()
	};
	this.handleMouseOut = function (a) {
		e.mover.fadeOut()
	};
	this.init()
}
MouseOverFade.prototype.init = function () {
	addEvent(this.mover.controller, "mouseover", this.handleMouseOver, !1);
	addEvent(this.mover.controller, "mouseout", this.handleMouseOut, !1);
	addEvent(this.mover.div, "mouseover", this.handleMouseOver, !1);
	addEvent(this.mover.div, "mouseout", this.handleMouseOut, !1);
	addEvent(this.mover.controller, "focus", this.handleMouseOver, !1);
	addEvent(this.mover.controller, "blur", this.handleMouseOut, !1);
	addEvent(this.mover.div, "focus", this.handleMouseOver, !1);
	addEvent(this.mover.div,
		"blur", this.handleMouseOut, !1)
};
MouseOverFade.createMouseOverHtml = function (c) {
	var a = [];
	a.push('\x3cdiv onmouseover\x3d"addMouseOver(this, null, \'left\')" onfocus\x3d"addMouseOver(this, null, \'left\')" class\x3d"mouseOverInfoOuter"\x3e');
	a.push('\x3cimg title\x3d"" class\x3d"infoIcon" alt\x3d"" src\x3d"/s.gif"/\x3e');
	a.push('\x3cdiv style\x3d"display: none; opacity: 0;" class\x3d"mouseOverInfo"\x3e');
	c && a.push(c);
	a.push("\x3c/div\x3e");
	a.push("\x3c/div\x3e");
	return a.join("")
};
function MouseOverFadeHandler(c, a, f, e) {
	if (null != c)
		this.controller = c;
	else
		try {
			this.controller = Sfdc.Event.getEventTarget(event)
		} catch (g) {}

	this.div = a;
	this.shim = new iframeShim(a);
	this.saveOrigPos = f;
	this.positioning = !1;
	var b = this;
	this.setPosition = function (d) {
		if (!b.positioning) {
			b.positioning = !0;
			d || (d = b.shim);
			d.setStyle("display", "block");
			b.saveOrigPos && (b.origL ? d.setStyle("left", b.origL) : b.origL = b.div.style.left);
			if ("left" === e) {
				var a = 0;
				null != this.controller && (a = getOffsetLeft(this.controller));
				if (0 != a) {
					var c =
						a - b.div.offsetWidth;
					0 > c ? (d.setStyle("left", "0"), d.setStyle("right", "")) : d.setStyle("left", "")
				}
			} else {
				d.setStyle("left", "");
				var c = getOffsetLeft(b.div),
				a = c + b.div.offsetWidth,
				f = getScrollX() + getWindowWidth() - 15;
				0 > c ? d.setStyle("left", "0") : a >= f - 7 ? (d.setStyle("left", "-" + (a - (f - 7)) + "px"), Sfdc.userAgent.isWebkit && (d.setStyle("display", "none"), d.setStyle("display", "block"))) : d.setStyle("left", b.div.parentNode.offsetWidth + "px")
			}
			b.saveOrigPos && (b.origTop ? d.setStyle("top", b.origTop) : b.origTop = b.div.style.top);
			a =
				getObjY(b.div);
			c = a + b.div.offsetHeight;
			f = getScrollY() + getWindowHeight() - 15;
			0 > a ? d.setStyle("top", "0") : c > f && d.setStyle("top", b.div.offsetTop - (c - f) - 15 + "px");
			b.positioning = !1
		}
	};
	this.mover = new Fader(this.shim, function (d, a) {
			return 0 >= d.getOpacity()
		}, function (d, a) {
			return 0.99 <= d.getOpacity()
		}, 30, function (d, a) {
			return d + 0.2 * a
		}, function (a, b) {
			a.setOpacity(b)
		}, 0, function (a) {
			a.setOpacity(0);
			a.setStyle("display", "none")
		}, function (a) {
			a.setOpacity(0.99);
			a.setStyle("display", "block")
		}, this.setPosition);
	this.fadeIn =
	function () {
		b.mover.fadeIn()
	};
	this.fadeOut = function () {
		b.mover.fadeOut()
	}
};
var FilterLookupPage = function () {};
FilterLookupPage.prototype.checked = [];
FilterLookupPage.prototype.checkAll = function (c) {
	for (var b = 0; ; b++) {
		var a = document.getElementById("chkbox" + b);
		if (!a)
			break;
		a.checked = c;
		FilterLookupPage.prototype.checked[b] = c ? a.value : null
	}
};
FilterLookupPage.prototype.transfer = function (c) {
	var b = opener.document.getElementById(opener.filterLookupValueElem),
	a = b.value;
	void 0 !== b.isEmptyText && !0 === b.isEmptyText && (a = "");
	if (c)
		document.getElementById("chkbox0").checked ? a = document.getElementById("chkbox0").value : document.getElementById("chkbox1").checked && (a = document.getElementById("chkbox1").value);
	else {
		for (c = 0; c < FilterLookupPage.prototype.checked.length; c++) {
			var d = FilterLookupPage.prototype.checked[c];
			null != d && (0 < a.length && (a += ", "), 0 <= d.indexOf(",") &&
				(d = '"' + d + '"'), a += d)
		}
		a.length > b.maxLength && (a = a.substring(0, b.maxLength))
	}
	b.value = a;
	0 === a.length && void 0 !== b.isEmptyText ? b.isEmptyText = !0 : 0 < a.length && void 0 !== b.isEmptyText && (b.isEmptyText = !1);
	self.close();
	return !1
};
FilterLookupPage.prototype.doCheckbox = function (c) {
	var b = document.getElementById("chkbox" + c);
	FilterLookupPage.prototype.checked[c] = b.checked ? b.value : null
};
FilterLookupPage.prototype.initBoolean = function () {
	for (i = 0; 2 > i; i++) {
		var c = document.getElementById("chkbox" + i);
		c.checked = c.value == opener.document.getElementById(opener.filterLookupValueElem).value
	}
};
function MenuButtonRounded(a, b, c) {
	MenuButton.call(this, a, b);
	this.minExtensionWidth = c
}
MenuButtonRounded.prototype = new MenuButton;
MenuButtonRounded.prototype.constructor = MenuButtonRounded;
MenuButtonRounded.prototype.getMenuWidth = function () {
	var a = this.parentDiv.offsetWidth,
	b = parseInt(Sfdc.Dom.getStyle(this.menuDiv, "borderLeftWidth"), 10),
	b = isNaN(b) ? 0 : b,
	c = parseInt(Sfdc.Dom.getStyle(this.menuDiv, "borderRightWidth"), 10),
	c = isNaN(c) ? 0 : c;
	return a - b - c
};
MenuButtonRounded.prototype.position = function () {
	this.menuDiv.style.width = "";
	for (var a = this.getMenuWidth(), b = a, c = this.menuDiv.childNodes, e = 0, f = c.length; e < f; e++) {
		var d = c[e];
		d.nodeType == Node.ELEMENT_NODE && (d = d.offsetWidth, d > a && (this.minExtensionWidth ? d - b >= this.minExtensionWidth && (a = d) : a = d))
	}
	a !== b ? addStyleClass(this.menuDiv, "menuWidthExtended") : delStyleClass(this.menuDiv, "menuWidthExtended");
	this.shim.setStyle("width", a + "px");
	a = Sfdc.Dom.getStyle(this.parentDiv, "display");
	if ("inline" == a || "inline-block" ==
		a)
		this.parentDiv.style.position = "relative", this.shim.setStyle("top", this.buttonDiv.offsetHeight + "px")
};
function TagMenuButton(a, b) {
	MenuButton.call(this, a, !1);
	TagMenuButton.fetched = !1;
	TagMenuButton.requesting = !1;
	this.loaderURL = b;
	this.buttonWidth = TagMenuButton.BUTTON_WIDTH
}
TagMenuButton.prototype = new MenuButton;
TagMenuButton.BUTTON_WIDTH = 33;
TagMenuButton.prototype.show = function () {
	TagMenuButton.fetched || this.getMRUTags(this.muttonId, this.isCached, this.loaderURL);
	MenuButton.prototype.show.apply(this)
};
TagMenuButton.prototype.getMRUTags = function () {
	if (!TagMenuButton.requesting) {
		TagMenuButton.requesting = !0;
		this.menuDiv.innerHTML = "";
		this.addOption(LC.getLabel("Page_SearchResult", "dhtmlLoading"), "");
		var a = this;
		Sfdc.Ajax.post(this.loaderURL, function (b) {
			a.processMRUdata(b)
		}, "")
	}
};
TagMenuButton.prototype.processMRUdata = function (a) {
	a = Util.evalAjaxServletOutput(a).mruList;
	TagMenuButton.fetched = !0;
	TagMenuButton.requesting = !1;
	this.menuDiv.innerHTML = "";
	if (1 === a.length && a[0].noDataInList)
		this.menuDiv.innerHTML = "\x3cspan\x3e" + a[0].name + "\x3c/span\x3e";
	else
		for (var b = 0; b < a.length; b++)
			this.addOption(a[b].value, a[b].href);
	this.position()
};
TagMenuButton.flushCache = function () {
	TagMenuButton.fetched = !1
};
function TagLinkEditElement(a, b, c) {
	MenuButton.call(this, a, b);
	this.tagLinkUrl = c
}
TagLinkEditElement.prototype = new MenuButton;
TagLinkEditElement.prototype.defaultAction = function () {
	navigateToUrl(this.tagLinkUrl)
};
TagLinkEditElement.prototype.show_hook = function () {
	window.sfdcPage.setMenuButtonOpen && window.sfdcPage.setMenuButtonOpen(this.parentDiv)
};
TagLinkEditElement.prototype.hide_hook = function () {
	window.sfdcPage.setMenuButtonClosed && window.sfdcPage.setMenuButtonClosed()
};
TagLinkEditElement.prototype.getMenuWidth = function () {
	var a = this.buttonDiv.offsetWidth;
	Sfdc.userAgent.isIE && (a -= 8);
	return a
};
TagLinkEditElement.prototype.initAccessibilityMode = function () {};
function BouncedEmailAddressDialog(c, a, b) {
	this.id = c;
	this.isModal = !0;
	this.formId = "bouncedEmailAddressOverlayInputForm";
	this.errorElementId = "errorMsg";
	this.windowName = "";
	this.width = 400;
	this.linkId = b;
	this.emailAddress = document.getElementById(BounceEmailConstants.HIDDEN_EMAIL_ADDRESS).value;
	this.emailBounceReason = document.getElementById(BounceEmailConstants.HIDDEN_BOUNCE_REASON).value;
	this.emailBounceDate = document.getElementById(BounceEmailConstants.HIDDEN_BOUNCE_DATE).value;
	this.saveLocation = a;
	this.addEvents()
}
BouncedEmailAddressDialog.HEIGHT = 80;
BouncedEmailAddressDialog.prototype = new OverlayDialog;
BouncedEmailAddressDialog.prototype.showBouncedEmail = function () {
	this.setTitle(LC.getLabel("Page_BouncedEmailOverlay", "page_title"));
	this.createContent();
	this.show();
	this.focusInOverlay()
};
BouncedEmailAddressDialog.prototype.createContent = function () {
	var c = document.getElementById(this.getContentId()),
	a = [],
	b = LC.getLabel("Page_BouncedEmailOverlay", "emailAddress");
	a.push('\x3ctable border\x3d"0"\x3e');
	a.push("\x3ctr\x3e\x3ctd\x3e");
	a.push(b);
	a.push("\x3c/td\x3e\x3ctd\x3e");
	a.push('\x3cinput id\x3d"overlayEmailAddress" type\x3d"text" size\x3d"30" name\x3d"emailAddress" title\x3d"' + b + '" value\x3d"' + this.emailAddress + '"/\x3e');
	a.push("\x3c/td\x3e\x3c/tr\x3e");
	a.push("\x3ctr\x3e\x3ctd\x3e");
	a.push(LC.getLabel("Page_BouncedEmailOverlay", "bounceReason"));
	a.push("\x3c/td\x3e\x3ctd\x3e");
	a.push(this.emailBounceReason);
	a.push("\x3c/td\x3e\x3c/tr\x3e");
	a.push("\x3ctr\x3e\x3ctd\x3e");
	a.push(LC.getLabel("Page_BouncedEmailOverlay", "bounceDate"));
	a.push("\x3c/td\x3e\x3ctd\x3e");
	a.push(this.emailBounceDate);
	a.push("\x3c/td\x3e\x3c/tr\x3e");
	a.push("\x3c/table\x3e");
	a.push("\x3cdiv class\x3d'buttons'\x3e");
	b = LC.getLabel("Page_BouncedEmailOverlay", "makeValidButton");
	a.push("\x3cinput class\x3d'btn' type\x3d'button' value\x3d'");
	a.push(b);
	a.push("' title\x3d'");
	a.push(b);
	a.push("' onclick\x3d\"");
	a.push("if(sfdcPage.getDialogById('");
	a.push(this.id);
	a.push("').savePage()) { sfdcPage.getDialogById('");
	a.push(this.id);
	a.push("').hide(); }\"\x3e");
	b = LC.getLabel("Buttons", "cancel");
	a.push("\x3cinput class\x3d'btn' type\x3d'button' value\x3d'");
	a.push(b);
	a.push("' title\x3d'");
	a.push(b);
	a.push("' onclick\x3d\"");
	a.push("sfdcPage.getDialogById('");
	a.push(this.id);
	a.push("').cancel(); document.getElementById('");
	a.push(this.linkId);
	a.push("').focus();\"\x3e");
	a.push("\x3c/div\x3e");
	c.innerHTML = a.join("")
};
BouncedEmailAddressDialog.prototype.focusInOverlay = function () {
	document.getElementById("overlayEmailAddress").focus()
};
BouncedEmailAddressDialog.prototype.savePage = function () {
	var c = document.getElementById("overlayEmailAddress"),
	c = this.saveLocation + "\x26" + EmailAddrEditConstants.pPASS_IN_EMAIL_ADDRESS + "\x3d" + escape(c.value);
	window.location = c;
	return !0
};
BouncedEmailAddressDialog.getDialog = function (c, a, b) {
	var d = sfdcPage.getDialogById(c);
	if (d)
		return d;
	d = new BouncedEmailAddressDialog(c, a, b);
	d.register();
	return d
};
var Dialogs = {
	num : 0,
	getNextId : function () {
		return "simpleDialog" + Dialogs.num++
	},
	doctype : '\x3c!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"\x3e',
	types : {
		WARN : {
			backgroundClass : "backgroundWarn",
			contentClass : "contentWarn",
			iconClass : "warningLarge",
			getIconAlt : function () {
				return LC.getLabel("Icon", "WARNING")
			}
		},
		INFO : {
			backgroundClass : "backgroundInfo",
			contentClass : "contentInfo",
			iconClass : "infoLarge",
			getIconAlt : function () {
				return LC.getLabel("Icon", "INFO")
			}
		},
		ERROR : {
			backgroundClass : "backgroundError",
			contentClass : "contentError",
			iconClass : "errorLarge",
			getIconAlt : function () {
				LC.getLabel("Icon", "ERROR")
			}
		},
		CONFIRM : {
			backgroundClass : "backgroundConfirm",
			contentClass : "contentConfirm",
			iconClass : "confirmLarge",
			getIconAlt : function () {
				LC.getLabel("Icon", "CONFIRM")
			}
		}
	},
	showSimpleWarning : function (a, b, c) {
		Dialogs.createSimpleWarning(a, b, c).show()
	},
	createSimpleWarning : function (a, b, c) {
		return Dialogs.createSimpleDialog(a, b, Dialogs.types.WARN, c)
	},
	showSimpleError : function (a, b, c) {
		Dialogs.createSimpleError(a, b, c).show()
	},
	createSimpleError : function (a, b, c) {
		return Dialogs.createSimpleDialog(a, b, Dialogs.types.ERROR, c)
	},
	createSimpleErrorWithAction : function (a, b, c) {
		return Dialogs.createSimpleDialog(a, b, Dialogs.types.ERROR, null, c)
	},
	showSimpleInfo : function (a, b, c) {
		Dialogs.createSimpleInfo(a, b, c).show()
	},
	createSimpleInfo : function (a, b, c) {
		return Dialogs.createSimpleDialog(a, b, Dialogs.types.INFO, c)
	},
	showSimpleConfirmation : function (a, b, c) {
		Dialogs.createSimpleConfirmation(a, b, c).show()
	},
	createSimpleConfirmation : function (a, b, c) {
		return Dialogs.createSimpleDialog(a,
			b, Dialogs.types.CONFIRM, c)
	},
	createSimpleDialog : function (a, b, c, e, f) {
		var d = [];
		f ? (d = [f], actionLabels = [LC.getLabel("Buttons", "ok")]) : e ? (d = [e, null], actionLabels = [LC.getLabel("Buttons", "ok"), LC.getLabel("Buttons", "cancel")]) : actionLabels = [LC.getLabel("Buttons", "ok")];
		return Dialogs.createDialog({
			id : Dialogs.getNextId(),
			title : a,
			message : b,
			backgroundClass : c.backgroundClass,
			contentClass : c.contentClass,
			iconClass : c.iconClass,
			iconAlt : c.getIconAlt(),
			actions : d,
			actionLabels : actionLabels,
			useCSS : !0
		}, !0)
	},
	createCheckboxConfirmationDialog : function (a,
		b, c, e, f, d, g) {
		return Dialogs.createDialog({
			id : Dialogs.getNextId(),
			title : a,
			message : b,
			backgroundClass : Dialogs.types.CONFIRM.backgroundClass,
			contentClass : Dialogs.types.CONFIRM.contentClass,
			iconClass : Dialogs.types.CONFIRM.iconClass,
			iconAlt : Dialogs.types.CONFIRM.getIconAlt(),
			actions : [d, g],
			actionLabels : [e, f],
			checkboxLabel : c,
			useCSS : !0
		}, !0)
	},
	createCheckboxWarningDialog : function (a, b, c, e, f, d, g) {
		return Dialogs.createDialog({
			id : Dialogs.getNextId(),
			title : a,
			message : b,
			backgroundClass : Dialogs.types.WARN.backgroundClass,
			contentClass : Dialogs.types.WARN.contentClass,
			iconClass : Dialogs.types.WARN.iconClass,
			iconAlt : Dialogs.types.WARN.getIconAlt(),
			actions : [d, g],
			actionLabels : [e, f],
			checkboxLabel : c,
			useCSS : !0
		}, !0)
	},
	createWarningDialog : function (a, b, c, e, f, d, g) {
		return Dialogs.createDialog({
			id : Dialogs.getNextId(),
			title : a,
			message : b,
			backgroundClass : Dialogs.types.WARN.backgroundClass,
			contentClass : Dialogs.types.WARN.contentClass,
			iconClass : Dialogs.types.WARN.iconClass,
			iconAlt : Dialogs.types.WARN.getIconAlt(),
			actions : [d, g],
			actionLabels : [e,
				f],
			checkboxLabel : c,
			displayX : !1
		}, !0)
	},
	createDialog : function (a, b) {
		var c = new AccessibleDialog(a);
		b && c.register();
		return c
	},
	reloadDialog : function () {
		for (dialogId in sfdcPage.dialogs) {
			var a = sfdcPage.dialogs[dialogId];
			a.isOpen && a.reloadDialog && a.reloadDialog()
		}
	},
	setOpenDialogHeight : function (a) {
		if (window.curPopupWindow)
			curPopupWindow.innerHeight && (curPopupWindow.innerHeight = a);
		else
			for (dialogId in sfdcPage.dialogs) {
				var b = sfdcPage.dialogs[dialogId];
				b.isOpen && b.setHeight && b.setHeight(a)
			}
	},
	setOpenDialogTitle : function (a) {
		if (window.curPopupWindow)
			curPopupWindow.title =
				a;
		else
			for (dialogId in sfdcPage.dialogs) {
				var b = sfdcPage.dialogs[dialogId];
				b.isOpen && b.setTitle && b.setTitle(a)
			}
	},
	hasOpenDialog : function () {
		var a = sfdcPage.dialogs,
		b;
		for (b in a)
			if (a.hasOwnProperty(b) && a[b].isOpen)
				return !0;
		return !1
	}
};
function AccessibleDialog(a) {
	this.id = a.id;
	this.isModal = !0;
	this.width = 400;
	this.title = a.title;
	this.displayX = !0;
	this.extraClass = a.extraClass;
	this.message = a.message;
	this.backgroundClass = a.backgroundClass;
	this.contentClass = a.contentClass;
	this.iconClass = a.iconClass;
	this.iconAlt = a.iconAlt;
	this.actions = a.actions;
	this.actionLabels = a.actionLabels;
	this.checkboxLabel = a.checkboxLabel;
	"displayX" in a && (this.displayX = a.displayX);
	UserContext.isAccessibleMode ? this.popupWindow = null : this.addEvents();
	this.useCSS = a.useCSS
}
AccessibleDialog.prototype = new OverlayDialog;
AccessibleDialog.prototype.doAction = function (a) {
	this.hide();
	if (this.actions[a] && "function" == typeof this.actions[a])
		this.actions[a]()
};
AccessibleDialog.prototype.toggle = function (a) {
	var b = document.getElementById(this.id + "button0");
	b && (b.disabled = !a, b.className = a ? "btn" : "btnDisabled")
};
AccessibleDialog.prototype.createDialog = function () {
	UserContext.isAccessibleMode || OverlayDialog.prototype.createDialog.call(this)
};
AccessibleDialog.prototype.createContent = function () {
	document.getElementById(this.getContentId()).innerHTML = this.getContent()
};
AccessibleDialog.prototype.getContent = function () {
	var a = [];
	a.push("\x3ctable border\x3d'0'\x3e\x3ctr\x3e\x3ctd style\x3d'vertical-align: top'\x3e\x3cimg src\x3d'/s.gif' class\x3d'");
	a.push(this.iconClass);
	a.push("' alt\x3d'");
	a.push(this.iconAlt);
	a.push("'\x3e\x3c/td\x3e\x3ctd style\x3d'padding-left: 8px; vertical-align: top; line-height: 16px'\x3e");
	a.push(this.message);
	this.checkboxLabel && (a.push("\x3cdiv style\x3d'line-height:12px; margin-top: 12px'\x3e"), a.push("\x3cinput type\x3d'checkbox' id\x3d'"),
		a.push(this.id), a.push("checkbox' onclick\x3d'"), UserContext.isAccessibleMode || (a.push('sfdcPage.getDialogById("'), a.push(this.id), a.push('").')), a.push("toggle(this.checked);'/\x3e\x3clabel for\x3d'"), a.push(this.id), a.push("checkbox'\x3e"), a.push(this.checkboxLabel), a.push("\x3c/label\x3e\x3c/div\x3e"), UserContext.isAccessibleMode && (a.push("\x3cscript\x3efunction toggle(checked) { "), a.push("window.confirmOnClose \x3d checked;"), a.push("var btn \x3d document.getElementById('"), a.push(this.id), a.push("button0');"),
			a.push("if (btn) {"), a.push("btn.disabled \x3d !checked;"), a.push("btn.className \x3d checked ? 'btn' : 'btnDisabled';}"), a.push("}\x3c/script\x3e")));
	a.push("\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e");
	a.push("\x3cdiv class\x3d'buttons'\x3e");
	for (var b = 0; b < this.actionLabels.length; b++) {
		var c = this.checkboxLabel && 0 === b;
		a.push("\x3cinput type\x3d'button' id\x3d'");
		a.push(this.id);
		a.push("button");
		a.push(b);
		a.push("' onclick\x3d'");
		UserContext.isAccessibleMode && a.push("window.opener.");
		a.push('sfdcPage.getDialogById("');
		a.push(this.id);
		a.push('").doAction(');
		a.push(b);
		a.push(")' class\x3d'");
		"ZEN" === UserContext.renderMode ? (a.push("zen-btn"), c && a.push(" zen-disabledBtn")) : (a.push("btn"), c && a.push("Disabled"));
		a.push("' value\x3d'");
		a.push(this.actionLabels[b]);
		a.push("'");
		this.checkboxLabel && 0 === b && a.push(" disabled\x3d'disabled'");
		a.push("/\x3e")
	}
	a.push("\x3c/div\x3e");
	return a.join("")
};
AccessibleDialog.prototype.hide = function () {
	if (UserContext.isAccessibleMode) {
		if (this.popupWindow) {
			try {
				this.popupWindow.confirmOnClose = !1,
				this.popupWindow.close()
			} catch (a) {}

			this.popupWindow = null
		}
	} else
		OverlayDialog.prototype.hide.call(this)
};
AccessibleDialog.prototype.show = function () {
	UserContext.isAccessibleMode ? (this.height || (this.height = 300), this.createAccessiblePopupWindow(), this.popupWindow && (this.popupWindow.focus(), this.popupWindow.confirmOnCloseLabel = LC.getLabel("Global", "dialogCloseConfirm"), curPopupWindow = this.popupWindow)) : OverlayDialog.prototype.show.call(this)
};
AccessibleDialog.prototype.writeAccessiblePopupHeaderIncludes = function (a) {};
AccessibleDialog.prototype.createAccessiblePopupWindow = function () {
	if (this.popupWindow = window.open("", "modalDialog", "width\x3d" + this.width + ",height\x3d" + this.height + ",dialog\x3dyes,scrollbars\x3dyes,resizable\x3dyes")) {
		var a = this.popupWindow.document,
		b = this.backgroundClass || "";
		"ZEN" === UserContext.renderMode && (b += " zen zen-popup");
		a.writeln(Dialogs.doctype);
		a.writeln("\x3chtml class\x3d'" + b + "'\x3e\x3chead\x3e\x3ctitle\x3e");
		a.writeln(this.title);
		a.writeln("\x3c/title\x3e");
		DynamicCss.writeCss(null,
			a, !0);
		a.writeln("");
		a.writeln("");
		a.writeln("\x3cscript type\x3d'text/javascript'\x3e");
		a.writeln("window.Jiffy \x3d {measure:function(){}, mark:function(){}, stat: function() {}};");
		a.writeln("\x3c/script\x3e");
		this.writeAccessiblePopupHeaderIncludes(a);
		a.writeln("\x3c/head\x3e\x3cbody class\x3d'accessibleDialogPopup " + this.contentClass + "'\x3e");
		a.writeln(this.getContent());
		a.writeln("\x3c/body\x3e\x3c/html\x3e");
		a.close()
	}
};
function IFrameDialog(a, b, c, e, f, d) {
	d = d || {};
	d.id = a;
	d.title = b;
	AccessibleDialog.call(this, d);
	this.url = c;
	this.height = e;
	this.width = f;
	this.contentId = this.id + "ContentId"
}
Util.extend(IFrameDialog, AccessibleDialog);
IFrameDialog.prototype.getContent = function () {
	return '\x3ciframe frameborder\x3d"no" id\x3d"' + this.contentId + '" style\x3d"border:0;height:' + this.height + 'px;width: 100%;" src\x3d"' + this.url + '"\x3e\x3c/iframe\x3e'
};
IFrameDialog.prototype.display = function () {
	UserContext.isAccessibleMode || this.createContent();
	this.show()
};
IFrameDialog.prototype.createAccessiblePopupWindow = function () {
	this.popupWindow = window.open(this.url, "modalDialog", "width\x3d" + this.width + ",height\x3d" + this.height + ",dialog\x3dyes")
};
IFrameDialog.prototype.hide = function () {
	var a = document.getElementById(this.contentId);
	a && (a.parentNode.style.visibility = "");
	AccessibleDialog.prototype.hide.apply(this, arguments)
};
function PersonalSettingsDialog(a, b, c, e, f, d) {
	IFrameDialog.apply(this, arguments)
}
Util.extend(PersonalSettingsDialog, IFrameDialog);
PersonalSettingsDialog.prototype.setHeight = function (a) {
	if (!UserContext.isAccessibleMode)
		if (window.Ext) {
			var b = Ext.get(this.contentId),
			c = b.parent();
			c.syncFx();
			c.scale(void 0, a + c.getPadding("tb"), {
				duration : 0.35,
				stopFx : !0,
				easing : "easeOutStrong",
				callback : function (c) {
					b.setHeight(a)
				}
			})
		} else
			this.dialog.style.height = a + "px", document.getElementById(this.contentId).style.height = a + "px", this.height = a
};
PersonalSettingsDialog.prototype.hide = function () {
	IFrameDialog.prototype.hide.apply(this, arguments);
	Sfdc.userAgent.isIE && Sfdc.un(document.body, "mousewheel", Sfdc.Event.preventDefault);
	this.refreshOnClose && (window.location = window.location)
};
PersonalSettingsDialog.prototype.show = function () {
	IFrameDialog.prototype.show.apply(this, arguments);
	if (Sfdc.userAgent.isIE)
		Sfdc.on(document.body, "mousewheel", Sfdc.Event.preventDefault)
};
PersonalSettingsDialog.prototype.reloadDialog = function () {
	var a = document.getElementById(this.contentId).contentWindow;
	a || (a = iframe.contentDocument ? iframe.contentDocument.defaultView : null);
	a.location.reload(!0)
};
PersonalSettingsDialog.prototype.position = function () {
	IFrameDialog.prototype.position.apply(this, arguments);
	this.dialog.style.top = "60px"
};
PersonalSettingsDialog.prototype.getContentWindow = function () {
	if (UserContext.isAccessibleMode)
		return this.popupWindow;
	var a = document.getElementById(this.contentId).contentWindow;
	a || (a = iframe.contentDocument ? iframe.contentDocument.defaultView : null);
	return a
};
PersonalSettingsDialog.prototype.setRefreshOnClose = function () {
	this.refreshOnClose = !0
};
LoadingOverlay = function (a, b, c, e, f) {
	OverlayDialog.call(this, f || {});
	this.id = a;
	this.message = b;
	this.completeMessage = c;
	this.width = e || 200;
	this.displayX = !1;
	this.useCSS = !0;
	this.extraClass = "loadingOverlay"
};
LoadingOverlay.prototype = new OverlayDialog({});
LoadingOverlay.prototype.createContent = function () {
	var a = document.getElementById(this.getContentId()),
	b = [];
	b.push("\x3cdiv class\x3d'loadingContent'\x3e");
	b.push("\x3cimg class\x3d'loadingIcon' src\x3d'/img/s.gif'\x3e");
	b.push("\x3cspan class\x3d'loadingText'\x3e");
	b.push(this.message);
	b.push("\x3c/span\x3e\x3c/div\x3e");
	a.innerHTML = b.join("")
};
LoadingOverlay.prototype.show = function () {
	OverlayDialog.prototype.show.call(this);
	Sfdc.Aria.notify(this.message)
};
LoadingOverlay.prototype.hide = function () {
	OverlayDialog.prototype.hide.call(this);
	Sfdc.Aria.notify(this.completeMessage)
};
function FunctionalDialog(b, a, c, d) {
	this.id = b;
	this.isModal = a;
	this.isMovable = d;
	this.extraClass = "functionalDialog";
	this.width = OverlayDialog.MAX_WIDTH;
	this.maxHeight = OverlayDialog.MAX_HEIGHT;
	this.setupDefaultButtons();
	this.title = c;
	this.hasSummaryElement = !0;
	this.addEvents()
}
FunctionalDialog.prototype = new OverlayDialog;
FunctionalDialog.MAX_HEIGHT = 600;
FunctionalDialog.MIN_HEIGHT = 120;
FunctionalDialog.prototype.setMaxHeight = function (b) {
	this.maxHeight = b > FunctionalDialog.MAX_HEIGHT ? FunctionalDialog.MAX_HEIGHT : b
};
FunctionalDialog.prototype.setInnerHeight = function () {
	var b = this.getContentElement(),
	a = b.offsetHeight + (Math.min(this.maxHeight, Sfdc.Window.getWindowHeight() - 40) - this.dialog.offsetHeight);
	b.style.height = Math.max(FunctionalDialog.MIN_HEIGHT, a) + "px"
};
FunctionalDialog.prototype.createContent = function () {
	var b = document.getElementById(this.id + "Content"),
	a = [];
	a.push("\x3ch2 id\x3d'");
	a.push(this.id);
	a.push("Header'\x3e");
	a.push(this.header);
	a.push("\x3c/h2\x3e");
	this.info && (a.push("\x3cp id\x3d'"), a.push(this.id), a.push("Info'\x3e"), a.push(this.info), a.push("\x3c/p\x3e"));
	a.push("\x3cdiv class\x3d'");
	this.hasSummaryElement ? a.push("scrollableArea") : a.push("scrollableAreaBottomBorder");
	a.push("' id\x3d'");
	a.push(this.id);
	a.push("Inner'\x3e\x3c/div\x3e");
	this.hasSummaryElement && (a.push("\x3cdiv id\x3d'"), a.push(this.id), a.push("Split' class\x3d'split'\x3e\x3cimg src\x3d'" + UserContext.getUrl("/img/overlaypointer.gif") + "' class\x3d'pointer'\x3e\x3c/div\x3e\x3cdiv class\x3d'summaryArea' id\x3d'"), a.push(this.id), a.push("Summary'\x3e\x3c/div\x3e"));
	this.createButtons(a);
	b.innerHTML = a.join("")
};
FunctionalDialog.prototype.setContentInnerHTML = function (b) {
	this.getContentElement().innerHTML = b
};
FunctionalDialog.prototype.importContentNode = function (b) {
	this.setContentInnerHTML("");
	this.getContentElement().appendChild(b)
};
FunctionalDialog.prototype.getContentElement = function () {
	return document.getElementById(this.id + "Inner")
};
FunctionalDialog.prototype.setSummaryInnerHTML = function (b) {
	this.getSummaryElement().innerHTML = b
};
FunctionalDialog.prototype.importSummaryNode = function (b) {
	this.setSummaryInnerHTML("");
	this.getSummaryElement().appendChild(b)
};
FunctionalDialog.prototype.getSummaryElement = function () {
	return document.getElementById(this.id + "Summary")
};
FunctionalDialog.prototype.hideSummaryElement = function () {
	if (this.hasSummaryElement) {
		this.hasSummaryElement = !1;
		var b = this.getSummaryElement(),
		a = document.getElementById(this.id + "Split"),
		c = this.getContentElement();
		b && (a && c) && (b.style.display = "none", a.style.display = "none", c.className = "scrollableAreaBottomBorder")
	}
};
function GoogleDocNameInputDialog(b, c, d, a) {
	this.id = b;
	this.url = c;
	this.escapeParams = d;
	this.parentId = a;
	this.isModal = !0;
	this.formId = "nameInputForm";
	this.errorElementId = "errorMsg";
	this.windowName = "createDoc";
	this.width = 600;
	this.addEvents();
	LC.getLabel("GoogleDocs", "DOCUMENT");
	LC.getLabel("GoogleDocs", "SPREADSHEET");
	LC.getLabel("GoogleDocs", "PRESENTATION");
	LC.getLabel("GoogleDocs", "LOWER_DOCUMENT");
	LC.getLabel("GoogleDocs", "LOWER_SPREADSHEET");
	LC.getLabel("GoogleDocs", "LOWER_PRESENTATION")
}
GoogleDocNameInputDialog.HEIGHT = 80;
GoogleDocNameInputDialog.prototype = new OverlayDialog;
GoogleDocNameInputDialog.prototype.hide = function () {
	OverlayDialog.prototype.hide.apply(this, []);
	this.createContent()
};
GoogleDocNameInputDialog.prototype.enter = function () {
	this.dependent = 1;
	var b = this.validate();
	b ? (this.win = b, this.processStep()) : this.dependent = 0
};
GoogleDocNameInputDialog.prototype.cancel = function () {
	if (this.dependent)
		try {
			this.win.close()
		} catch (b) {}

	this.hide()
};
GoogleDocNameInputDialog.prototype.setDocTypeAndShow = function (b, c) {
	this.docType = b;
	this.docTypeStr = c;
	this.setTitle(LC.getLabel("GoogleDocCreatorPage", "nameText", c));
	this.createContent();
	this.show();
	this.focusInOverlay()
};
GoogleDocNameInputDialog.prototype.createContent = function () {
	if (this.docType) {
		var b = document.getElementById(this.getContentId()),
		c = LC.getLabel("GoogleDocs", this.docType),
		d = LC.getLabel("GoogleDocs", "LOWER_" + this.docType),
		a = [];
		a.push('\x3cform enctype\x3d"multipart/form-data" method\x3d"POST" id\x3d"' + GoogleDocCreator.FORM_NAME + '"\x3e');
		a.push("\x3ctable align\x3dcenter\x3e");
		a.push("\x3ctbody\x3e");
		a.push('\x3ctr\x3e\x3ctd colspan\x3d"2"\x3e');
		a.push('\x3cinput type\x3d"radio" id\x3d"create_method" name\x3d"' +
			GoogleDocCreator.METHOD + '" value\x3d"0" checked\x3e');
		a.push('\x3clabel for\x3d"create_method" onclick\x3d"document.getElementById(\'create_method\').checked\x3dtrue"\x3e' + LC.getLabel("GoogleDocCreator", "CreateByNew", d) + "\x3c/label\x3e");
		a.push("\x3c/td\x3e\x3c/tr\x3e");
		a.push('\x3ctr\x3e\x3ctd align\x3dright\x3e\x3clabel for\x3d"' + GoogleDocCreator.DOC_NAME + '"\x3e');
		a.push(LC.getLabel("GoogleDocCreator", "EntityName", c));
		a.push('\x3c/label\x3e: \x3c/td\x3e\x3ctd class\x3d"inlineEditCompoundDiv"\x3e\x3cspan class\x3d"inlineEditRequiredMark"\x3e*\x3c/span\x3e\x3cinput id\x3d"' +
			GoogleDocCreator.DOC_NAME + '" type\x3d"text" width\x3d"64" name\x3d"' + GoogleDocCreator.DOC_NAME + '" onchange\x3d"document.getElementById(\'create_method\').checked\x3dtrue" onclick\x3d"document.getElementById(\'create_method\').checked\x3dtrue"/\x3e\x3c/td\x3e\x3c/tr\x3e');
		a.push('\x3ctr\x3e\x3ctd\x3e\x26nbsp;\x3c/td\x3e\x3ctd\x3e\x3cdiv class\x3d"errorMsg" id\x3d"' + this.errorElementId + '" style\x3d "display:none"\x3e\x3c/div\x3e');
		a.push("\x3c/td\x3e\x3c/tr\x3e");
		a.push("\x3c/tbody\x3e");
		a.push("\x3ctbody\x3e");
		a.push('\x3ctr\x3e\x3ctd colspan\x3d"2"\x3e');
		a.push('\x3cinput type\x3d"radio" id\x3d"upload_method" name\x3d"' + GoogleDocCreator.METHOD + '" value\x3d"1"\x3e');
		a.push('\x3clabel for\x3d"upload_method" onclick\x3d"document.getElementById(\'upload_method\').checked\x3dtrue"\x3e' + LC.getLabel("GoogleDocCreator", "CreateByUpload") + "\x3c/label\x3e");
		a.push("\x3c/td\x3e\x3c/tr\x3e");
		a.push('\x3ctr\x3e\x3ctd align\x3dright\x3e\x3clabel for\x3d"' + GoogleDocCreator.DOC_UPLOAD + '"\x3e');
		a.push(LC.getLabel("GoogleDocCreator",
				"FileLocation"));
		a.push('\x3c/label\x3e: \x3c/td\x3e\x3ctd class\x3d"inlineEditCompoundDiv"\x3e\x3cspan class\x3d"inlineEditRequiredMark"\x3e*\x3c/span\x3e\x3cinput id\x3d"' + GoogleDocCreator.DOC_UPLOAD + '" type\x3d"file" width\x3d"64" name\x3d"' + GoogleDocCreator.DOC_UPLOAD + '" onchange\x3d"document.getElementById(\'upload_method\').checked\x3dtrue" onclick\x3d"document.getElementById(\'upload_method\').checked\x3dtrue"/\x3e ');
		this.help[this.docType] && a.push(decodeURIComponent(this.help[this.docType]));
		a.push("\x3c/td\x3e\x3c/tr\x3e");
		a.push('\x3ctr\x3e\x3ctd align\x3dright\x3e\x3clabel for\x3d"' + GoogleDocCreator.DOC_UPLOAD_NAME + '"\x3e');
		a.push(LC.getLabel("GoogleDocCreator", "NewName", c));
		a.push('\x3c/label\x3e: \x3c/td\x3e\x3ctd class\x3d"inlineEditCompoundDiv"\x3e\x3cinput id\x3d"' + GoogleDocCreator.DOC_UPLOAD_NAME + '" type\x3d"text" width\x3d"64" name\x3d"' + GoogleDocCreator.DOC_UPLOAD_NAME + '" onchange\x3d"document.getElementById(\'upload_method\').checked\x3dtrue" onclick\x3d"document.getElementById(\'upload_method\').checked\x3dtrue"/\x3e');
		a.push(LC.getLabel("GoogleDocCreator", "Different"));
		a.push("\x3c/td\x3e\x3c/tr\x3e");
		a.push("\x3ctr\x3e\x3ctd\x3e\x26nbsp;\x3c/td\x3e\x3ctd\x3e");
		a.push('\x3cdiv class\x3d"errorMsg" id\x3d"' + GoogleDocCreator.DOC_UPLOAD + '_error" style\x3d "display:none"\x3e\x3c/div\x3e');
		a.push("\x3c/td\x3e\x3c/tr\x3e");
		a.push("\x3c/tbody\x3e");
		a.push("\x3c/table\x3e");
		a.push('\x3cinput type\x3d"hidden" id\x3d"' + GoogleDocCreator.PARENT_ID + '" name\x3d"' + GoogleDocCreator.PARENT_ID + '" value\x3d"' + this.parentId + '"/\x3e');
		a.push('\x3cinput type\x3d"hidden" id\x3d"' + GoogleDocCreator.DOC_TYPE + '" name\x3d"' + GoogleDocCreator.DOC_TYPE + '" value\x3d"' + this.docType + '"/\x3e');
		a.push("\x3c/form\x3e");
		b.innerHTML = a.join("");
		this.setupDefaultButtons();
		this.overrideButton(0, LC.getLabel("GoogleDocCreatorPage", "pageTitle"), function (a) {
			sfdcPage.getDialogById(a).enter();
			return !1
		});
		this.overrideButton(1, LC.getLabel("Buttons", "cancel"), function (a) {
			sfdcPage.getDialogById(a).cancel();
			return !0
		});
		b.appendChild(this.createDomButtons())
	}
};
GoogleDocNameInputDialog.prototype.processStep = function () {
	for (var b = document.getElementById(this.getContentId()).getElementsByTagName("input"), c = 0; c < b.length; c++)
		b[c].value != LC.getLabel("Buttons", "cancel") && (b[c].value == LC.getLabel("GoogleDocCreatorPage", "pageTitle") && (b[c].className = "btnDisabled"), b[c].disabled = !0);
	var d = this;
	this.checkId = window.setInterval(function () {
			d.checkStatus()
		}, 250)
};
GoogleDocNameInputDialog.prototype.checkStatus = function () {
	if (this.win.closed || !this.dependent)
		window.clearTimeout(this.checkId), this.checkId = this.win = 0, this.hide()
};
GoogleDocNameInputDialog.prototype.createDomButtons = function () {
	var b = document.createElement("div");
	b.className = "buttons";
	var c = document.createElement("input");
	c.className = "btn";
	c.type = "button";
	for (var d = 0; d < this.buttons.length; d++) {
		var a = c.cloneNode(!0),
		e = this.buttons[d].display,
		f = this.buttons[d].action;
		a.dialogId = this.id;
		a.value = e;
		a.action = this.buttons[d].action;
		a.onclick = "string" == typeof f ? function () {
			eval(this.action) && sfdcPage.getDialogById(this.dialogId).hide()
		}
		 : "function" == typeof f ? function () {
			this.action(this.dialogId) &&
			sfdcPage.getDialogById(this.dialogId).hide()
		}
		 : function () {
			sfdcPage.getDialogById(this.dialogId).hide()
		};
		b.appendChild(a)
	}
	return b
};
GoogleDocNameInputDialog.prototype.focusInOverlay = function () {
	Sfdc.userAgent.isIE6 ? setTimeout('document.getElementById(GoogleDocCreator["DOC_NAME"]).focus()', 100) : document.getElementById(GoogleDocCreator.DOC_NAME).focus()
};
GoogleDocNameInputDialog.prototype.checkExtension = function (b) {
	if (!this.MIME)
		return !0;
	var c = b.lastIndexOf(".") + 1;
	return -1 < c ? (b = b.substr(c).toUpperCase(), void 0 != this.MIME[b]) : !1
};
GoogleDocNameInputDialog.prototype.validate = function () {
	for (var b = document.getElementById(GoogleDocCreator.FORM_NAME), c = 0, d = 0; d < b[GoogleDocCreator.METHOD].length; d++)
		if (b[GoogleDocCreator.METHOD][d].checked) {
			c = b[GoogleDocCreator.METHOD][d].value;
			break
		}
	b = document.getElementById(GoogleDocCreator.DOC_NAME).value;
	d = document.getElementById(GoogleDocCreator.DOC_UPLOAD).value;
	document.getElementById(this.errorElementId).style.display = "none";
	document.getElementById(GoogleDocCreator.DOC_UPLOAD + "_error").style.display =
		"none";
	if ((null == b || "" == trim(b)) && c == GoogleDocCreator.CREATE)
		return document.getElementById(this.errorElementId).innerHTML = LC.getLabel("GoogleDocCreatorPage", "errorMsgNoValue"), document.getElementById(this.errorElementId).style.display = "", this.focusInOverlay(), !1;
	if (c == GoogleDocCreator.UPLOAD && (null == d || "" == d))
		return document.getElementById(GoogleDocCreator.DOC_UPLOAD + "_error").innerHTML = LC.getLabel("GoogleDocCreatorPage", "errorMsgNoValue"), document.getElementById(GoogleDocCreator.DOC_UPLOAD + "_error").style.display =
			"", !1;
	if (c == GoogleDocCreator.UPLOAD && !this.checkExtension(d))
		return document.getElementById(GoogleDocCreator.DOC_UPLOAD + "_error").innerHTML = LC.getLabel("GoogleDocCreatorPage", "errorMsgType"), document.getElementById(GoogleDocCreator.DOC_UPLOAD + "_error").style.display = "", !1;
	d = {};
	d[GoogleDocCreator.METHOD] = c;
	d[GoogleDocCreator.DOC_NAME] = b;
	d[GoogleDocCreator.PARENT_ID] = document.getElementById(GoogleDocCreator.PARENT_ID).value;
	d[GoogleDocCreator.DOC_TYPE] = document.getElementById(GoogleDocCreator.DOC_TYPE).value;
	this.secret = Math.floor(42E6 * Math.random());
	d.secret = this.secret;
	b = Sfdc.Url.generateQueryString("", d, {
			includeMark : !0
		});
	b = encodeURIComponent(b);
	this.escapeParams && (b = encodeURIComponent(b));
	win = window.open(this.url + b, this.windowName + this.secret, "width\x3d900, height\x3d600, location\x3dyes, menubar\x3dyes, status\x3dyes, toolbar\x3dyes, scrollbars\x3dyes, resizable\x3dyes");
	c == GoogleDocCreator.CREATE && (this.dependent = 0);
	return win
};
GoogleDocNameInputDialog.getDialog = function (b, c, d, a) {
	var e = sfdcPage.getDialogById(b);
	if (e)
		return e;
	e = new GoogleDocNameInputDialog(b, c, d, a);
	e.register();
	return e
};
function InlineEditDialog() {
	this.id = "InlineEditDialog";
	this.isModal = !0;
	this.extraClass = "inlineEditDialog";
	this.width = null;
	this.title = "";
	this.setupButtons();
	this.currentField = this.editDivPool = this.errorDiv = this.activeDiv = null;
	this.displayX = !0;
	this.fields = {};
	this.addEvents();
	Sfdc.userAgent.isIE6 || (this.useCSS = !0)
}
InlineEditDialog.prototype = new OverlayDialog;
InlineEditDialog.prototype.setInnerHeight = function () {};
InlineEditDialog.prototype.enter = function () {
	sfdcPage.getInlineEditData().closeCurrentField()
};
InlineEditDialog.prototype.setupButtons = function () {
	this.buttons = [];
	this.buttons[0] = {
		display : LC.getLabel("Buttons", "ok"),
		action : "sfdcPage.getInlineEditData().closeCurrentField()"
	};
	this.buttons[1] = {
		display : LC.getLabel("Buttons", "cancel"),
		action : "sfdcPage.getInlineEditData().resetCurrentField()"
	}
};
InlineEditDialog.prototype.createContent = function () {
	addEvent(this.dialog, "click", function (a) {
		eventCancelBubble(getEvent(a))
	}, !1);
	var a = document.getElementById(this.getContentId()),
	b = [];
	this.createButtons(b);
	a.innerHTML = b.join("");
	this.activeDiv = document.createElement("div");
	this.activeDiv.className = "activeField";
	this.errorDiv = document.createElement("div");
	this.editDivPool = document.createElement("div");
	this.editDivPool.style.display = "none";
	a.insertBefore(this.activeDiv, a.lastChild);
	a.insertBefore(this.errorDiv,
		a.lastChild);
	a.insertBefore(this.editDivPool, a.lastChild)
};
InlineEditDialog.prototype.addField = function (a, b, c) {
	this.fields[a] = {
		title : c,
		div : b
	};
	this.editDivPool.appendChild(b)
};
InlineEditDialog.prototype.setActiveField = function (a) {
	if (this.currentField) {
		if (this.currentField == a)
			return;
		this.editDivPool.appendChild(this.fields[this.currentField].div)
	}
	var b = this.fields[a];
	this.setTitle(b.title);
	this.currentField = a;
	this.activeDiv.appendChild(b.div)
};
InlineEditDialog.prototype.setMaxWidth = function (a) {
	a > OverlayDialog.MAX_WIDTH && (a = OverlayDialog.MAX_WIDTH);
	this.dialog.currentStyle ? this.dialog.style.width = a + "px" : this.dialog.style.maxWidth = a + "px"
};
InlineEditDialog.prototype.cancel = function () {
	sfdcPage.getInlineEditData().resetCurrentField();
	this.hide()
};
function OverlayDialogElement(a) {
	this.windowName = this.id = a;
	this.setupDefaultButtons();
	this.addEvents();
	this.buttonContents = this.contents = "";
	this.hasButtonsBar = !0
}
OverlayDialogElement.prototype = new OverlayDialog;
OverlayDialogElement.prototype.createContent = function () {
	var a = document.getElementById(this.getContentId()),
	b = [];
	b.push(this.contents);
	this.hasButtonsBar && (0 == this.buttonContents.length ? this.createButtons(b) : (b.push("\x3cdiv id\x3d'" + this.id + "_buttons' class\x3d'buttons " + ZenCss.zen + "'\x3e"), b.push(this.buttonContents), b.push("\x3c/div\x3e")));
	a.innerHTML = b.join("")
};
OverlayDialogElement.getDialog = function (a, b) {
	var c = sfdcPage.getDialogById(a);
	if (c)
		return c;
	c = new OverlayDialogElement(a);
	b && b(c);
	c.register();
	return c
};
function FilePreviewOverlayDialogElement(a) {
	OverlayDialogElement.call(this, a);
	this.oldOverflowY = this.oldOverflowX = null;
	this.iPadPhoneScrollReg = !1
}
FilePreviewOverlayDialogElement.prototype = new OverlayDialog;
FilePreviewOverlayDialogElement.prototype.createContent = OverlayDialogElement.prototype.createContent;
FilePreviewOverlayDialogElement.prototype.show = function () {
	this.dialog.style.display = "block";
	this.isModal && (this.background || this.createBackground(), this.background.style.display = "block", this.processSelectElems());
	this.dialog.style.visibility = "visible";
	this.position();
	if (isIPad || isIPhone) {
		this.resizeBackground();
		this.reposition();
		var a = this;
		!1 === this.iPadPhoneScrollReg && (addEvent(window, "scroll", function (b) {
				a.position();
				a.reposition()
			}, !1), this.iPadPhoneScrollReg = !0)
	}
	var b = Ext.getBody();
	this.oldOverflowX =
		b.getStyle("overflow-x");
	this.oldOverflowY = b.getStyle("overflow-y");
	b.addClass("bodyForDocViewerPanel");
	b.setStyle("overflow-x", "hidden");
	b.setStyle("overflow-y", "hidden");
	this.isOpen = !0
};
FilePreviewOverlayDialogElement.prototype.reposition = function () {
	this.dialog.style.top = parseInt(this.dialog.style.top) + document.body.scrollTop + "px"
};
FilePreviewOverlayDialogElement.prototype.createBackground = function () {
	this.background = document.createElement("div");
	this.background.className = "docViewerPanel";
	document.body.appendChild(this.background);
	var a = this;
	!Ext.isChrome && (!Ext.isSafari && !Sfdc.userAgent.isIE9) && (addEvent(this.background, "mousedown", function (b) {
			a.smash(b)
		}, !1), addEvent(this.background, "click", function (b) {
			getEventTarget(b) === a.background ? a.background.focus() : a.smash(b)
		}, !1));
	document.getElementById("docViewerOverlay").style.visibility =
		"visible";
	document.getElementById("docViewerOverlay").style.display = "block";
	Sfdc.userAgent.isIE10 || (this.dialog = document.body.removeChild(this.dialog), this.background.appendChild(this.dialog))
};
FilePreviewOverlayDialogElement.prototype.resizeEvent = function () {
	this.created && this.position()
};
FilePreviewOverlayDialogElement.prototype.hide = function () {
	var a = Ext.getBody();
	a.removeClass("bodyForDocViewerPanel");
	this.oldOverflowX && a.setStyle("overflow-x", this.oldOverflowX);
	this.oldOverflowY && a.setStyle("overflow-y", this.oldOverflowY);
	OverlayDialog.prototype.hide.call(this)
};
FilePreviewOverlayDialogElement.getDialog = function (a, b) {
	var c = sfdcPage.getDialogById(a);
	if (c)
		return c;
	c = new FilePreviewOverlayDialogElement(a);
	b && b(c);
	c.register();
	return c
};
OverlayDialogElement.showFilePreview = function (a, b, c, f, g, h, e, d, k, l, m) {
	if (Sfdc.userAgent.isChrome && window.top != window.self)
		"undefined" !== typeof parent.OverlayDialogElement && parent.OverlayDialogElement.showFilePreview(a, b, c, f, g, h, e, d, k, l, m);
	else {
		if (d)
			FilePreviewOverlayDialogElement.getDialog(a, OverlayDialogElement.initFilePreviewDialog).setTitle(""), document.getElementById("docViewerOverlayX") ? (b = new AccessiblePreviewContentDialog(a + "_accessibilityMode", document.getElementById(b).innerHTML), b.content =
					document.getElementById("docViewerOverlay").innerHTML, b.created = !0, b.register(), b.show(), e = b.popupWindow.document.getElementById(e), b.popupWindow.document.getElementById("docViewerOverlayX").style.visibility = "hidden") : (window.resizeTo(730, 630), window.opener.OverlayDialogElement.showFilePreview(a, b, c, f, g, h, e, d, k, l, m));
		else {
			a = FilePreviewOverlayDialogElement.getDialog(a, OverlayDialogElement.initFilePreviewDialog);
			if (d = Sfdc.select("div.overlayBackground", document.body))
				for (var n = 0; n < d.length; n++)
					if ("none" !=
						d[n].style.display) {
						a.isModal = !1;
						break
					}
			document.getElementById("docViewerContainerParent").style.height = "484px";
			document.getElementById("docViewerOverlay").style.width = "730px";
			a.show();
			b && document.getElementById(b) ? a.setTitle("\x3cdiv\x3e" + document.getElementById(b).innerHTML + "\x3c/div\x3e") : a.setTitle("\x3cdiv\x3e\x3c/div\x3e")
		}
		"undefined" != typeof insertFlexComponent && insertFlexComponent(c + "/flex/DocViewer", "shepherd_prefix\x3d" + m + "/sfc/servlet.shepherd\x26v\x3d" + f + "\x26mode\x3d" + g + "\x26in_tests\x3d" +
			h, "100%", "100%", "#f3f3f3", e, "renditionLarge", !1, {
			adobeFlashVersionLbl : LC.getLabel("ContentFlashPlayer", "adobeFlashVersion"),
			downloadAdobeLbl : LC.getLabel("ContentFlashPlayer", "downloadAdobe"),
			downloadAdobeLinkLbl : LC.getLabel("ContentFlashPlayer", "downloadAdobeLink"),
			closeDialogLbl : LC.getLabel("ContentFlashPlayer", "closeDialog")
		}, {
			fileType : k,
			isImage : l
		})
	}
};
OverlayDialogElement.onFlexInit = function () {
	var a = Ext.get("docViewerOverlayContent");
	a && (a = a.child("*[id\x3drenditionLarge]")) && a.dom.focus()
};
OverlayDialogElement.initFilePreviewDialog = function (a) {
	a && (a.isModal = !0, a.width = 730, a.hasButtonsBar = !1, a.displayX = !0, a.allowKeyboardEsc = !0, a.extraClass = "docViewerOverlay", a.setTitle("Document Preview"), a.contents = '\x3cdiv class\x3d"docViewerContainerParent" id\x3d"docViewerContainerParent"\x3e\x3cdiv class\x3d"docViewerContainer" id\x3d"docViewerContainer"\x3e\x3c/div\x3e\x3c/div\x3e')
};
function FieldSelectDialog(a, b, d, e, f, g, c) {
	this.id = a;
	this.isModal = b;
	this.isMovable = !0;
	this.buttons = [];
	this.selectId = e;
	this.info = f;
	this.width = OverlayDialog.MAX_WIDTH;
	null == c && (c = "");
	this.buttons[0] = {
		id : c + "fieldSelectClose",
		display : LC.getLabel("Buttons", "close"),
		action : null
	};
	this.title = d;
	this.addEvents();
	this.manualTab = !1;
	this.innerHeight = g
}
FieldSelectDialog.prototype = new OverlayDialog;
FieldSelectDialog.prototype.setController = function (a) {
	this.controller = a;
	this.controller.setScrollDiv(document.getElementById(this.selectId))
};
FieldSelectDialog.prototype.setInnerHeight = function () {
	this.getContentElement().style.height = this.innerHeight + "px"
};
FieldSelectDialog.prototype.setManualTabControl = function (a) {
	this.manualTab = a
};
FieldSelectDialog.prototype.handleKeyPress = function (a) {
	if (this.manualTab && this.isOpen && (a = getEvent(a), a.keyCode == KEY_TAB))
		return a.preventDefault ? a.preventDefault() : a.returnValue = !1, this.tab(a.shiftKey);
	OverlayDialog.prototype.handleKeyPress.call(this, a)
};
FieldSelectDialog.prototype.tab = function (a) {
	this.controller.switchFocus(a)
};
FieldSelectDialog.prototype.createContent = function () {
	var a = document.getElementById(this.getContentId()),
	b = [];
	this.info && (b.push("\x3cp id\x3d'"), b.push(this.id), b.push("Info'\x3e"), b.push(this.info), b.push("\x3c/p\x3e"));
	b.push("\x3cdiv class\x3d'fieldSelectorScrollableArea'  id\x3d'");
	b.push(this.getInnerId());
	b.push("'\x3e\x3c/div\x3e");
	this.createButtons(b);
	a.innerHTML = b.join("");
	this.getContentElement().appendChild(document.getElementById(this.selectId))
};
FieldSelectDialog.prototype.getContentElement = function () {
	return document.getElementById(this.getInnerId())
};
FieldSelectDialog.prototype.getInnerId = function () {
	return this.id + "Inner"
};
FieldSelectDialog.prototype.show = function () {
	for (var a = this.getContentElement().firstChild; "TD" != a.firstChild.nodeName; )
		a = a.firstChild;
	for (; a.lastChild != a.firstChild; )
		a.removeChild(a.lastChild);
	this.controller.reset();
	this.controller.showSelects();
	OverlayDialog.prototype.show.call(this);
	this.controller.focusTop();
	this.controller.scrollRight()
};
FieldSelectDialog.prototype.hide = function () {
	OverlayDialog.prototype.hide.call(this);
	this.controller.hideSelects();
	this.controller.reFocusToFieldPickerIcon && this.controller.reFocusToFieldPickerIcon()
};

function ListPaginator(a) {
	this.init(a)
}
ListPaginator.prototype = new Paginator;
ListPaginator.opts = [10, 25, 50, 100, 200];
ListPaginator.rppId = "_rpp";
ListPaginator.selectionId = "_selection";
ListPaginator.target = "_target";
ListPaginator.prototype.init = function (a) {
	this.listDomId = a.listDomId;
	this.id = this.listDomId + "_paginator";
	Paginator.addPaginator(this);
	this.containerIds = a.containerIds;
	this.handler = a.handler;
	this.ref = "Paginator.instances['" + this.id + "']";
	this.listRef = "ListViewport.instances['" + this.listDomId + "']";
	var b = this;
	addEvent(document.body, "mousedown", function (a) {
		a = getEventTarget(a);
		a.id != b.id + ListPaginator.rppId + ListPaginator.target && a.parentNode.id != b.id + ListPaginator.rppId + ListPaginator.target && ListPaginator.hideSelector(b.id + ListPaginator.rppId + ListPaginator.target);
		a.id != b.id + ListPaginator.selectionId + ListPaginator.target && a.parentNode.id != b.id + ListPaginator.selectionId + ListPaginator.target && ListPaginator.hideSelector(b.id + ListPaginator.selectionId + ListPaginator.target)
	}, !0);
	this.selectCount = this.selectedOnThisPage = 0;
	this.setState(a)
};
ListPaginator.prototype.setSelectCount = function (a) {
	this.selectCount = a;
	this.draw()
};
ListPaginator.prototype.setState = function (a) {
	this.currentPage = parseInt(a.currentPage) || this.currentPage || 1;
	this.recordsPerPage = parseInt(a.recordsPerPage) || this.recordsPerPage || 50;
	this.totalRecords = parseInt(a.totalRecords);
	this.capped = a.capped;
	this.hasCheckbox = a.hasCheckbox;
	var b;
	this.capped ? this.totalPages = null : (b = Math.ceil(this.totalRecords / this.recordsPerPage), this.totalPages = this.currentPage > b ? this.currentPage : b);
	this.startingRecord = (this.currentPage - 1) * this.recordsPerPage + 1;
	if (!a.nodraw) {
		var c =
			this;
		0 === this.totalRecords ? window.sfdcPage.appendToOnloadQueue(function () {
			c.draw(!0)
		}) : (this.shorterThenOriginal = this.currentPage > b ? !0 : !1, window.sfdcPage.appendToOnloadQueue(function () {
				c.draw()
			}))
	}
};
ListPaginator.prototype.draw = function (a) {
	var b = [];
	b.push("\x3cdiv class\x3d'paginator'\x3e");
	b.push("\x3cspan class\x3d'left'\x3e");
	a ? b.push("\x26nbsp;") : (b.push(this.getRecordCounts()), this.hasCheckbox && b.push(this.getSelectedCount()));
	b.push("\x3c/span\x3e");
	a ? b.push("\x26nbsp;") : b.push(this.getPrevNextLinks());
	b.push("\x3cspan class\x3d'right'\x3e");
	a ? b.push("\x26nbsp;") : b.push(this.getPageXofY());
	b.push("\x3c/span\x3e");
	b.push("\x3c/div\x3e");
	b.push("\x3cdiv class\x3d'clearingBox'/\x3e");
	for (a =
			0; a < this.containerIds.length; a++) {
		var c = document.getElementById(this.containerIds[a]);
		c && Sfdc.Dom.updateHTML(c, b.join(""))
	}
};
ListPaginator.keyHandle = function (a) {
	if (window.ActiveXObject && a.keyCode == KEY_ENTER)
		getEventTarget(a).onchange()
};
ListPaginator.prototype.getPageXofY = function () {
	var a = [];
	a.push(LC.getLabel("Paginator", "page"));
	this.totalPages ? (a.push("\x3cinput class\x3d'pageInput' maxlength\x3d'4' onchange\x3d\""), a.push(this.ref), a.push('.goToPage(this.value)"'), a.push(' onkeydown\x3d"'), a.push('"'), a.push(" value\x3d'"), a.push(this.currentPage), a.push("'\x3e"), a.push(LC.getLabel("Paginator", "of", this.totalPages))) : (a.push("\x26nbsp;"), a.push(this.currentPage));
	return a.join("")
};
ListPaginator.prototype.getRecordCounts = function () {
	if (0 === this.totalRecords)
		return "0";
	var a = this.getRppSelector(),
	b = /selectArrow/,
	c = !0,
	c = a && a.match(b) ? !0 : !1,
	b = [];
	c ? b.push("\x3cspan class\x3d'selectorTarget'") : b.push("\x3cspan ");
	b.push(" id\x3d'");
	b.push(this.id + ListPaginator.rppId + ListPaginator.target);
	b.push("'");
	c && (b.push(' onmousedown\x3d"'), b.push("ListPaginator.showSelector('"), b.push(this.id + ListPaginator.rppId + ListPaginator.target), b.push("')\""), b.push(' onmouseover\x3d"'), b.push("ListPaginator.hoverSelector(this)"),
		b.push('"'), b.push(' onmouseout\x3d"'), b.push("ListPaginator.unhoverSelector(this)"), b.push('"'));
	b.push("\x3e");
	this.shorterThenOriginal || (b.push(this.startingRecord), b.push("-"), this.lastRecord = 0, this.lastRecord = this.capped ? this.startingRecord + this.recordsPerPage - 1 : Math.min(this.startingRecord + this.recordsPerPage - 1, this.totalRecords), b.push(this.lastRecord), this.capped ? (b.push(" "), b.push(LC.getLabel("Paginator", "of", this.totalRecords + "+"))) : (b.push(" "), b.push(LC.getLabel("Paginator", "of", this.totalRecords))));
	b.push(a);
	b.push("\x3c/span\x3e");
	return b.join("")
};
ListPaginator.prototype.getPrevNextLinks = function () {
	var a = [],
	b = "";
	a.push("\x3cspan class\x3d'prevNextLinks'\x3e");
	a.push("\x3cspan class\x3d'prevNext'\x3e");
	1 != this.currentPage ? (b = this.ref + ".goToPage(1)", a.push('\x3ca href\x3d"javascript:'), a.push(b), a.push('"\x3e'), a.push("\x3cimg src\x3d'" + UserContext.getUrl("/s.gif") + "' title\x3d'" + LC.getLabel("Paginator", "first_page") + "' alt\x3d'" + LC.getLabel("Paginator", "first_page") + "' class\x3d'first'\x3e"), a.push("\x3c/a\x3e")) : a.push("\x3cimg src\x3d'" + UserContext.getUrl("/s.gif") +
		"' class\x3d'firstoff' alt\x3d '" + LC.getLabel("Paginator", "first_page") + "' \x3e");
	a.push("\x3c/span\x3e");
	a.push("\x3cspan class\x3d'prevNext'\x3e");
	1 != this.currentPage ? (b = this.ref + ".goToPage(" + (this.currentPage - 1) + ")", a.push('\x3ca href\x3d"javascript:'), a.push(b), a.push('"\x3e'), a.push("\x3cimg src\x3d'" + UserContext.getUrl("/s.gif") + "' title\x3d'" + LC.getLabel("Paginator", "previous") + "' alt\x3d'" + LC.getLabel("Paginator", "previous") + "' class\x3d'prev'\x3e"), a.push(LC.getLabel("Paginator", "previous")),
		a.push("\x3c/a\x3e")) : (a.push("\x3cimg src\x3d'" + UserContext.getUrl("/s.gif") + "' class\x3d'prevoff' alt\x3d'" + LC.getLabel("Paginator", "previous") + "' \x3e"), a.push(LC.getLabel("Paginator", "previous")));
	a.push("\x3c/span\x3e");
	a.push("\x3cspan class\x3d'prevNext'\x3e");
	this.capped || this.totalPages && this.currentPage != this.totalPages ? (b = this.ref + ".goToPage(" + (this.currentPage + 1) + ")", a.push('\x3ca href\x3d"javascript:'), a.push(b), a.push('"\x3e'), a.push(LC.getLabel("Paginator", "next")), a.push("\x3cimg src\x3d'" +
			UserContext.getUrl("/s.gif") + "' title\x3d'" + LC.getLabel("Paginator", "next") + "' alt\x3d'" + LC.getLabel("Paginator", "next") + "' class\x3d'next'\x3e"), a.push("\x3c/a\x3e")) : (a.push(LC.getLabel("Paginator", "next")), a.push("\x3cimg src\x3d'" + UserContext.getUrl("/s.gif") + "' class\x3d'nextoff' alt\x3d'" + LC.getLabel("Paginator", "next") + "' \x3e"));
	a.push("\x3c/span\x3e");
	a.push("\x3cspan class\x3d'prevNext'\x3e");
	this.totalPages && this.currentPage != this.totalPages ? (b = this.ref + ".goToPage(" + this.totalPages + ")",
		a.push('\x3ca href\x3d"javascript:'), a.push(b), a.push('"\x3e'), a.push("\x3cimg src\x3d'" + UserContext.getUrl("/s.gif") + "' title\x3d'" + LC.getLabel("Paginator", "last_page") + "' alt\x3d'" + LC.getLabel("Paginator", "last_page") + "' class\x3d'last'\x3e"), a.push("\x3c/a\x3e")) : a.push("\x3cimg src\x3d'" + UserContext.getUrl("/s.gif") + "' class\x3d'lastoff' alt\x3d'" + LC.getLabel("Paginator", "last_page") + "' \x3e");
	a.push("\x3c/span\x3e");
	a.push("\x3c/span\x3e");
	return a.join("")
};
ListPaginator.prototype.getSelectedCount = function () {
	var a = [];
	a.push("\x3cspan class\x3d'selectorTarget selectCount");
	0 < this.selectCount && a.push(" selectCountHi");
	a.push("' id\x3d'");
	a.push(this.id + ListPaginator.selectionId + ListPaginator.target);
	a.push("'");
	a.push(' onmousedown\x3d"');
	a.push("ListPaginator.showSelector('");
	a.push(this.id + ListPaginator.selectionId + ListPaginator.target);
	a.push("')\"");
	a.push(' onmouseover\x3d"');
	a.push("ListPaginator.hoverSelector(this)");
	a.push('"');
	a.push(' onmouseout\x3d"');
	a.push("ListPaginator.unhoverSelector(this)");
	a.push('"');
	a.push("\x3e");
	a.push(this.selectCount);
	a.push(" ");
	a.push(LC.getLabel("Paginator", "selected"));
	a.push(this.getSelectionSelector());
	a.push("\x3cimg class\x3d'selectArrow' src\x3d'" + UserContext.getUrl("/s.gif") + "' /\x3e");
	a.push("\x3c/span\x3e");
	return a.join("")
};
ListPaginator.prototype.goToPage = function (a) {
	isNaN(a) || 1 > a ? a = 1 : this.totalPages && a > this.totalPages && (a = this.totalPages);
	this.handler && this.handler(a)
};
ListPaginator.prototype.getRppSelector = function () {
	var a = [];
	a.push("\x3ctable cellpadding\x3d'0' cellspacing\x3d'0' class\x3d'selector rpp' id\x3d'");
	a.push(this.id + ListPaginator.rppId + "'\x3e");
	for (var b = {
			mouseover : "Sfdc.Dom.addClass(this, 'optHover')",
			mouseout : "Sfdc.Dom.removeClass(this, 'optHover')",
			display_label : LC.getLabel("Paginator", "display"),
			rowsperpage_label : LC.getLabel("Paginator", "rpp")
		}, c = ListPaginator.opts, e = 0; e < c.length; e++)
		b.clazz = c[e] == this.recordsPerPage ? "optSelected" : "optUnselected",
		b.mousedown = [this.listRef, ".getListData({ rowsPerPage: ", c[e], ", rolodexIndex: ", this.listRef, ".rolodexIndex})"].join(""), b.count = c[e], a.push(Sfdc.String.format('\x3ctr class\x3d"opt {clazz}" onmouseover\x3d"{mouseover}" onmouseout\x3d"{mouseout}" onmousedown\x3d"{mousedown}"\x3e\t\x3ctd\x3e{display_label}\x3c/td\x3e\t\x3ctd class\x3d"rppOpt"\x3e{count}\x3c/td\x3e\t\x3ctd\x3e{rowsperpage_label}\x3c/td\x3e\x3c/tr\x3e', b));
	a.push("\x3c/table\x3e");
	a.push("\x3cimg class\x3d'selectArrow' src\x3d'" + UserContext.getUrl("/s.gif") +
		"' /\x3e");
	return a.join("")
};
ListPaginator.prototype.getSelectionSelector = function () {
	var a = [],
	b = this.listRef + ".grid.getSelectionModel()",
	c = this.lastRecord - this.startingRecord + 1 - this.selectedOnThisPage;
	if (this.disabledRecords) {
		for (var e = 0, d = 0; d < this.disabledRecords.length; d++)
			this.disabledRecords[d] >= this.startingRecord - 1 && this.disabledRecords[d] < this.lastRecord && e++;
		c -= e
	}
	b = [{
			label : LC.getLabel("Paginator", "select_page", "+" + c),
			handler : b + ".selectAll()"
		}, {
			label : LC.getLabel("Paginator", "deselect_page", "-" + this.selectedOnThisPage),
			handler : b + ".clearSelections()"
		}, {
			label : LC.getLabel("Paginator", "clear_all_selections", "-" + this.selectCount),
			handler : b + ".clearAllSelections()"
		}
	];
	a.push("\x3cdiv class\x3d'selector selection' id\x3d'");
	a.push(this.id + ListPaginator.selectionId + "'\x3e");
	for (d = 0; d < b.length; d++)
		a.push("\x3cdiv"), a.push(" class\x3d'opt'"), a.push(' onmouseover\x3d"'), a.push("if (this.className.indexOf('optHover') \x3c 0) { this.className +\x3d ' optHover' }"), a.push('"'), a.push(' onmouseout\x3d"'), a.push("this.className \x3d this.className.replace('optHover', '')"),
		a.push('"'), a.push(' onmousedown\x3d"'), a.push(b[d].handler), a.push('"\x3e'), a.push(b[d].label), a.push("\x3c/div\x3e");
	a.push("\x3c/div\x3e");
	return a.join("")
};

ListPaginator.showSelector = function (a) {
	//alert("showSelector");
	if ((a = document.getElementById(a)) && 0 > a.className.indexOf(" selectorOpen"))
		a.className += " selectorOpen"
};

ListPaginator.hideSelector = function (a) {
	//alert("hideSelector");
	if (a = document.getElementById(a))
		a.className = a.className.replace(" selectorOpen", "")
};

ListPaginator.hoverSelector = function (a) {
	//alert("hoverSelector");
	0 > a.className.indexOf(" selectorHover") && (a.className += " selectorHover")
};

ListPaginator.unhoverSelector = function (a) {
	//alert("unhoverSelector");
	a.className = a.className.replace(" selectorHover", "")
};

function VideoDialog(a, b) {
	SimpleDialog.apply(this, [a, b])
}
VideoDialog.prototype = new SimpleDialog;
VideoDialog.prototype.parent = SimpleDialog.prototype;
VideoDialog.prototype.hide = function () {
	this.parent.hide.call(this);
	this.parent.setContentInnerHTML.call(this, "")
};
SearchOverlayDialogs = function () {};
SearchOverlayDialogs.showDialog = function (a, b, c, e, d, g) {
	var f = document.getElementById(a);
	if (f) {
		if ("visible" == f.style.visibility)
			return;
		document.body.removeChild(f)
	}
	(g ? new SearchAccessibleDialog(a, b, c, e, d) : new SearchNonaccessibleDialog(a, b, c, e, d)).display()
};
SearchOverlayDialogs.showDialogAddSearchString = function (a, b, c, e, d, g, f) {
	var h = QueryString.getURI(c);
	c = QueryString.createQueryString(c, !0);
	f = AutoCompleteInputElement.getInstance(f).getSearchString(f);
	c.add(SearchRelatedList.pSEARCH_STR, f);
	SearchOverlayDialogs.showDialog(a, b, h + c.toString(), e, d, g)
};
function SearchAccessibleDialog(a, b, c, e, d) {
	this.id = a;
	this.contentId = a + "ContentId";
	this.height = e;
	this.url = c;
	"" != d && (this.width = parseInt(d));
	this.register();
	addEvent(window, "focus", function () {
		closeDialog()
	})
}
SearchAccessibleDialog.prototype = new SimpleDialog;
SearchAccessibleDialog.prototype.display = function () {
	for (dialogId in sfdcPage.dialogs) {
		var a = sfdcPage.dialogs[dialogId];
		a.isOpen && a.popupWindow.close()
	}
	this.popupWindow = window.open(this.url, this.id, "height\x3d" + this.height + ",width\x3d" + this.width + ",location\x3d0,status\x3d0");
	this.popupWindow.focus();
	this.isOpen = !0
};
SearchAccessibleDialog.prototype.isDialogOpen = function () {
	return this.isOpen
};
SearchAccessibleDialog.prototype.resize = function (a, b) {
	this.popupWindow.resizeTo(b, a + 100)
};
SearchAccessibleDialog.prototype.close = function () {
	this.popupWindow.close()
};
function SearchNonaccessibleDialog(a, b, c, e, d) {
	this.id = a;
	this.contentId = a + "ContentId";
	this.displayX = this.isMovable = !0;
	this.height = e;
	this.url = c;
	"" != d && (this.width = parseInt(d));
	this.setTitle(b);
	this.register()
}
SearchNonaccessibleDialog.prototype = new SimpleDialog;
SearchNonaccessibleDialog.prototype.display = function () {
	var a = [];
	a.push('\x3ciframe frameborder\x3d"no" id\x3d"' + this.contentId + '" style\x3d"border:0;height:' + this.height + "px;width:" + (Sfdc.userAgent.isIE6 ? "93%" : "100%") + ';" src\x3d"' + this.url + '"\x3e\x3c/iframe\x3e');
	this.setContentInnerHTML(a.join(""));
	this.show();
	this.setWidth(this.width)
};
SearchNonaccessibleDialog.prototype.resize = function (a, b) {
	document.getElementById(this.contentId).style.height = a + "px";
	this.setWidth(b)
};
SearchNonaccessibleDialog.superclass = SimpleDialog.prototype;
SearchNonaccessibleDialog.prototype.hide = function () {
	var a = this.getContentElement().firstChild.contentWindow;
	a.closePopup && a.closePopup();
	SearchNonaccessibleDialog.superclass.hide.call(this)
};
SearchNonaccessibleDialog.prototype.close = function () {
	this.hide()
};
function closeDialog(a) {
	for (dialogId in sfdcPage.dialogs) {
		var b = sfdcPage.dialogs[dialogId];
		b.isOpen && b.close()
	}
	a && (Sfdc.userAgent.isSafari3 ? window.location.href = window.location.href : window.location.reload())
}
function resizeDialog(a, b) {
	for (dialogId in sfdcPage.dialogs) {
		var c = sfdcPage.dialogs[dialogId];
		c.isOpen && c.resize(a, b)
	}
};
function PrintableViewPage() {}

PrintableViewPage.prototype = new DetailPage;
PrintableViewPage.prototype.getEntityId = function () {
	var a = window.location.href.split("?")[0].split("/");
	return a[a.length - 2]
};
function PrintableListPage() {}

PrintableListPage.prototype = new ListPage;
function VFInlineEditData(a) {
	sfdcPage.registerInlineEditData(a);
	this.showButtons = a[VisualforceConstants.SHOW_BUTTONS];
	this.hideButtons = a[VisualforceConstants.HIDE_BUTTONS];
	this.picklistInfo = a[VisualforceConstants.PICKLIST_INFO];
	this.checkError = !0;
	InlineEditData.call(this, a)
}
VFInlineEditData.registerField = function (a) {
	var b = a[InlineEditConstants.VF_ENABLED],
	c = sfdcPage.getInlineEditData(b);
	if (c) {
		var d = sfdcPage.getDetailPage(c[InlineEditConstants.VF_ENABLED]);
		d && (d.editMode = !1, c.updateShowHideButtons(d));
		InlineEditField.overlay || (InlineEditField.overlay = new InlineEditDialog, InlineEditField.overlay.register());
		d = a[InlineEditConstants.FIELD_DATA][0];
		a = a[VisualforceConstants.PICKLIST_INFO];
		c.createField(d);
		a && c.updatePicklist(b, d[InlineEditConstants.FIELD_ID], a, d.picklistId);
		c.openErrorField()
	} else
		new VFInlineEditData(a)
};
VFInlineEditData.prototype = new InlineEditData;
VFInlineEditData.prototype.evalPicklist = function (a) {
	0 == a.indexOf("var") && (a = a.substr(3, a.length));
	eval(a)
};
VFInlineEditData.prototype.init = function () {
	InlineEditData.prototype.init.call(this);
	var a = sfdcPage.getDetailPage(this[InlineEditConstants.VF_ENABLED]),
	b = this,
	c = this.showButtons,
	d = this.hideButtons;
	sfdcPage.appendToOnloadQueue(function () {
		b.initializeButtons(a, c, !0)
	}, "Setup show edit buttons");
	sfdcPage.appendToOnloadQueue(function () {
		b.initializeButtons(a, d, !1)
	}, "Setup hide edit buttons")
};
VFInlineEditData.prototype.createFields = function () {
	InlineEditData.prototype.createFields.call(this);
	var a,
	b,
	c;
	for (c = 0; c < this.allFieldData.length; c++)
		if (b = this.allFieldData[c], a = this.fields[b.fieldId])
			a.visualforce_label = b[VisualforceConstants.LABEL], a.visualforce_resetFunction = b[VisualforceConstants.RESET_FUNCTION], a.visualforce_changedStyleClass = b[VisualforceConstants.CHANGED_STYLE_CLASS], a.visualforce_entityId = b[InlineEditConstants.ENTITY_ID], a.visualforce_inlineEdit = !0;
	this.checkError && this.openErrorField()
};
VFInlineEditData.prototype.createField = function (a) {
	for (var b = a[InlineEditConstants.FIELD_ID], c = !1, d = [], e = {}, f = 0; f < this.allFieldData.length; f++) {
		var g = this.allFieldData[f][InlineEditConstants.FIELD_ID];
		g == b && (this.allFieldData[f] = a, c = !0);
		d[f] = this.allFieldData[f];
		e[g] = this.fields[g]
	}
	this.checkError = !1;
	this.fields = {};
	this.allFieldData = [];
	this.allFieldData.push(a);
	this.createFields();
	var f = this.fields[b],
	g = e[b] ? e[b].group : void 0,
	h = e[b] ? e[b].undoButton : void 0;
	this.fields = e;
	this.fields[b] = f;
	this.allFieldData =
		d;
	c ? (this.fields[b].group = g, this.fields[b].undoButton = h) : this.allFieldData.push(a);
	this.visualforce_inlineEditRerender = this.checkError = !0
};
VFInlineEditData.prototype.openErrorField = function () {
	var a,
	b,
	c,
	d;
	for (index = 0; index < this.allFieldData.length; index++)
		b = this.allFieldData[index][VisualforceConstants.ERROR] || b;
	if (b) {
		var e = sfdcPage.currentFieldForInlineEditDialog,
		f = this.currentField;
		this.currentField = null;
		for (index = 0; index < this.allFieldData.length; index++)
			if (b = this.allFieldData[index], c = this.fields[b.fieldId], (d = b[VisualforceConstants.CURRENT_VALUE]) && !c.changed && this.updateFieldForError(c, d, b.RTA_LIBRARY), b[VisualforceConstants.ERROR] &&
				!c.error && c.setError(b[VisualforceConstants.ERROR]), c && (c.error && !c.compound && !c.group) && (!a || a.tableCell.offsetTop > c.tableCell.offsetTop))
				a = c;
		this.currentField = f;
		sfdcPage.currentFieldForInlineEditDialog = e;
		a && a.state == InlineEditState.EDIT && ((b = sfdcPage.getInlineEditData(sfdcPage.currentFieldForInlineEditDialog)) && b.closeCurrentField(), this.openField(a))
	}
};
VFInlineEditData.prototype.updateFieldForError = function (a, b, c) {
	c && (a.currentValue = b);
	this.openField(a);
	c || (a.editElement.value = b);
	a.closeField()
};
VFInlineEditData.prototype.updatePicklist = function (a, b, c, d) {
	var e = "undefined" == typeof pl ? null : pl,
	f;
	this.picklistInfo && !sfdcPage.getRegisteredPickList(a) && (this.evalPicklist(this.picklistInfo), sfdcPage.registerPickList(a, pl), this.fields[b].waitForLoad = !1);
	sfdcPage.getRegisteredPickList(a) ? (f = sfdcPage.getRegisteredPickList(a), this.evalPicklist(c), f["vals_" + d] = pl["vals_" + d], sfdcPage.registerPickList(a, f), this.fields[b].waitForLoad = !1) : this.picklistInfo = c;
	e && (pl = e)
};
VFInlineEditData.prototype.resetField = function (a) {
	InlineEditData.prototype.resetField.call(this, a);
	this.removeInputElement(a);
	if (a.visualforce_resetFunction) {
		var b = a.visualforce_resetFunction;
		"function" !== typeof b && (b = new Function(b), a.visualforce_resetFunction = b);
		b()
	}
};
VFInlineEditData.prototype.revert = function () {
	InlineEditData.prototype.revert.apply(this)
};
VFInlineEditData.prototype.getField = function (a) {
	return a ? this.fields[a] : null
};
VFInlineEditData.prototype.closeCurrentField = function (a, b, c) {
	if (this.currentField && (!this.currentField.shouldClose || this.currentField.shouldClose(c))) {
		var d = this.currentField.group;
		if (d) {
			var e = [];
			e.push(d);
			InlineEditData.prototype.closeGroup.apply(this, e);
			for (var e = 0, f = d.length; e < f; e++)
				this.createInputElementForGroup(this.fields[d[e]])
		} else
			d = this.currentField.getValueFromEdit(), d = this.currentField.isDifferentValue(d), e = this.currentField, InlineEditData.prototype.closeCurrentField.apply(this, arguments),
			e instanceof ForeignKeyField && e.isEmpty && (e.editElement.value = ""), this.createInputElement(e, d);
		this.currentField = null
	}
};
VFInlineEditData.prototype.loadDynamicData = function () {
	this.sentRequest || (this.sentRequest = !0, this.evalPicklist(this.picklistInfo), InlineEditData.prototype.dynamicDataLoaded.apply(this))
};
VFInlineEditData.prototype.createInputElementForGroup = function (a) {
	var b = a.getValueFromEdit(),
	b = a.isDifferentValue(b);
	this.createInputElement(a, b)
};
VFInlineEditData.prototype.createInputElement = function (a, b) {
	if (b || a.error) {
		var c = a.inputElement;
		c || (c = document.createElement("input"), c.id = a.id + "_value", c.style.display = "none", c.type = "hidden", a.tableCell.appendChild(c), a.inputElement = c);
		c.name = a.id;
		var d = {};
		a.addSaveData(d);
		d = d[a.caseSafe18Id ? a.caseSafe18Id : a.id];
		if ("[object Array]" === Object.prototype.toString.apply(d)) {
			var e = "",
			f;
			for (f in d)
				d.hasOwnProperty(f) && (e += d[f] + ";");
			d = e
		}
		c.value = d;
		a.visualforce_changedStyleClass && addStyleClass(a.readDiv,
			a.visualforce_changedStyleClass)
	} else
		this.removeInputElement(a)
};
VFInlineEditData.prototype.removeInputElement = function (a) {
	a.inputElement && (a.inputElement.name = null);
	a.visualforce_changedStyleClass && delStyleClass(a.readDiv, a.visualforce_changedStyleClass)
};
VFInlineEditData.prototype.initializeButtons = function (a, b, c) {
	function d(a, b, c, d) {
		for (var e = 0; e < b.length; e++)
			for (var f = b[e].getElementsByTagName("input"), g = 0; g < f.length; g++)
				if (button = f[g], "button" == button.type || "submit" == button.type)
					button.id === a && c[d ? "editButtons" : "detailButtons"].push(button)
	}
	function e(a, b, c, e, f) {
		d(a, b, e, f);
		d(a, c, e, f);
		(a = document.getElementById(a)) && e[f ? "editButtons" : "detailButtons"].push(a)
	}
	for (var f = Sfdc.select(".pbButton"), g = Sfdc.select(".pbButtonb"), h = 0; h < b.length; h++)
		e(b[h],
			f, g, a, c)
};
VFInlineEditData.prototype.updateShowHideButtons = function (a) {
	a.editButtons = [];
	a.detailButtons = [];
	this.initializeButtons(a, this.showButtons, !0);
	this.initializeButtons(a, this.hideButtons, !1)
};
InlineEditField.CompoundField = function () {
	this.compound = !0;
	this.overlay = null;
	this.width = 0;
	this.editElements = []
};
InlineEditField.CompoundField.prototype = new InlineEditField;
InlineEditField.CompoundField.prototype.openField = function () {
	this.created || this.createEditDiv();
	this.showEdit()
};
InlineEditField.CompoundField.prototype.createEditDiv = function () {
	var a = this.getFieldLabel();
	this.overlay = InlineEditField.overlay;
	this.editDiv = document.createElement("div");
	this.editDiv.className = "inlineEditCompoundDiv";
	this.editDiv.id = this.id + InlineEditConstants.INNER_ID + "edit";
	this.overlay.addField(this.id, this.editDiv, a);
	this.createEditElements();
	this.createUndoButton();
	this.created = !0
};
InlineEditField.CompoundField.prototype.reset = function () {
	this.currentValue = this.initialValue;
	delStyleClass(this.readDiv, "inlineEditModified");
	this.changed = !1;
	this.undoButton.style.display = "none";
	this.editDiv.appendChild(this.undoButton);
	this.readDiv.innerHTML = this.initialHTML;
	sfdcPage.getInlineEditData(this.id).isCurrentField(this) && (this.hideEdit(), sfdcPage.getInlineEditData(this.id).currentField = null);
	this.clearError();
	this.updateEditElement()
};
InlineEditField.CompoundField.prototype.showEdit = function () {
	this.overlay.setActiveField(this.id);
	this.overlay.setMaxWidth(this.width);
	this.updateEditElement();
	this.overlay.show()
};
InlineEditField.CompoundField.prototype.hideEdit = function () {
	this.overlay.hide();
	this.changed ? (this.undoButton.parentNode != this.readDiv && (this.readDiv.appendChild(this.undoButton), this.attachUndoButtonImage()), this.undoButton.style.display = "inline") : this.undoButton.style.display = "none";
	var a = this.readDiv.parentNode;
	a && 0 <= a.tabIndex && setTimeout(function () {
		a.focus()
	}, 50)
};
InlineEditField.CompoundField.prototype.closeField = function () {
	var a = this.getValueFromEdit();
	this.isDifferentValue(a) ? (this.changed || (this.changed = !0, addStyleClass(this.readDiv, "inlineEditModified")), this.currentValue = a, this.updateReadElement()) : this.reset();
	this.hideEdit();
	return !0
};
InlineEditField.CompoundField.prototype.updateReadElement = function () {
	this.readDiv.innerHTML = this.formatValue()
};
InlineEditField.CompoundField.prototype.formatValue = function () {};
InlineEditField.CompoundField.prototype.normalizeNewlines = function (a) {
	return a.replace(/\r\n|\n/g, "\r\n")
};
function PersonNameField(a, b, c, d, f, e) {
	this.init(a, b, c, d, f);
	this.hasSalutation = e.hasSalutation;
	this.salutationPid = e.picklistId;
	this.reverse = e.reverse;
	this.labels = e.labels;
	this.waitForLoad = !0;
	this.currentIndex = this.initialIndex = 0;
	this.width = 360
}
PersonNameField.S = ColumnTypeConstants.PERSONNAME_SALUTATION_OFFSET;
PersonNameField.F = ColumnTypeConstants.PERSONNAME_FIRSTNAME_OFFSET;
PersonNameField.L = ColumnTypeConstants.PERSONNAME_LASTNAME_OFFSET;
PersonNameField.prototype = new InlineEditField.CompoundField;
PersonNameField.prototype.getComponentId = function (a) {
	var b;
	switch (a) {
	case PersonNameField.S:
		b = EditElement.FIELD_NAME_SALUTATION;
		break;
	case PersonNameField.F:
		b = EditElement.FIELD_NAME_FIRST;
		break;
	case PersonNameField.L:
		b = EditElement.FIELD_NAME_LAST
	}
	return b + this.id
};
PersonNameField.prototype.createEditElements = function () {
	var a = [];
	a.push("\x3ctable border\x3d0\x3e");
	this.reverse ? (this.createLastNameElement(a), this.createFirstNameElement(a)) : (this.createFirstNameElement(a), this.createLastNameElement(a));
	a.push("\x3c/table\x3e");
	this.editDiv.innerHTML = a.join("");
	this.editElements[PersonNameField.F] = getElementByIdCS(this.getComponentId(PersonNameField.F));
	this.editElements[PersonNameField.L] = getElementByIdCS(this.getComponentId(PersonNameField.L));
	this.hasSalutation &&
	(a = this.getComponentId(PersonNameField.S), (new picklist(a, this.salutationPid, null, this.initialValue[PersonNameField.S], ' id\x3d"' + a + '" title\x3d"' + this.labels[PersonNameField.S] + '"', !0, !0)).onLoad(), this.editElements[PersonNameField.S] = getElementByIdCS(a), this.currentIndex = this.initialIndex = this.editElements[PersonNameField.S].selectedIndex)
};
PersonNameField.prototype.createFirstNameElement = function (a) {
	a.push("\x3ctr\x3e\x3ctd class\x3d'labelCol'\x3e\x3clabel for\x3d'");
	a.push(this.getComponentId(PersonNameField.F));
	a.push("'\x3e");
	a.push(this.labels[PersonNameField.F]);
	a.push("\x3c/label\x3e\x3c/td\x3e\x3ctd\x3e");
	this.hasSalutation && !this.reverse && this.createSalutationElement(a);
	a.push("\x3cinput type\x3d'text' id\x3d'");
	a.push(this.getComponentId(PersonNameField.F));
	a.push("' value\x3d\"");
	a.push(this.cleanValue(this.currentValue[PersonNameField.F]));
	a.push("\" size\x3d'12' maxLength\x3d'");
	a.push(ColumnTypeConstants.DEFAULT_FIRSTNAME_LENGTH);
	a.push("'\x3e");
	this.hasSalutation && this.reverse && this.createSalutationElement(a);
	a.push("\x3c/td\x3e\x3c/tr\x3e")
};
PersonNameField.prototype.createSalutationElement = function (a) {
	a.push("\x3cspan\x3e\x3cselect id\x3d'");
	a.push(this.getComponentId(PersonNameField.S));
	a.push("' title\x3d'");
	a.push(this.labels[PersonNameField.S]);
	a.push("'\x3e\x3coption selected value\x3d\"");
	a.push(this.cleanValue(this.currentValue[PersonNameField.S][1]));
	a.push('"\x3e');
	a.push(this.cleanValue(this.currentValue[PersonNameField.S][0]));
	a.push("\x3c/select\x3e\x3c/span\x3e")
};
PersonNameField.prototype.createLastNameElement = function (a) {
	a.push("\x3ctr\x3e\x3ctd class\x3d'labelCol'\x3e\x3clabel for\x3d'");
	a.push(this.getComponentId(PersonNameField.L));
	a.push("'\x3e");
	a.push(this.labels[PersonNameField.L]);
	a.push("\x3c/label\x3e\x3c/td\x3e\x3ctd\x3e");
	a.push("\x3cspan class\x3d'inlineEditRequiredMark'\x3e*\x3c/span\x3e\x3cinput type\x3d'text' id\x3d'");
	a.push(this.getComponentId(PersonNameField.L));
	a.push("' value\x3d\"");
	a.push(this.cleanValue(this.currentValue[PersonNameField.L]));
	a.push("\" size\x3d'20' maxLength\x3d'");
	a.push(ColumnTypeConstants.DEFAULT_LASTNAME_LENGTH);
	a.push("'\x3e");
	a.push("\x3c/td\x3e\x3c/tr\x3e")
};
PersonNameField.prototype.formatValue = function () {
	var a = this.currentValue,
	b;
	this.reverse ? b = a[PersonNameField.L] + " " + a[PersonNameField.F] : (b = this.hasSalutation && a[PersonNameField.S][0] != LC.getLabel("SelectElement", "Required") ? a[PersonNameField.S][0] + " " : "", b += a[PersonNameField.F] + " " + a[PersonNameField.L]);
	return this.cleanValue(b)
};
PersonNameField.prototype.isDifferentValue = function (a) {
	return this.initialValue[PersonNameField.L] != a[PersonNameField.L] || this.initialValue[PersonNameField.F] != a[PersonNameField.F] || this.hasSalutation && this.initialValue[PersonNameField.S][1] != a[PersonNameField.S][1]
};
PersonNameField.prototype.getValueFromEdit = function () {
	if (this.hasSalutation) {
		this.currentIndex = this.editElements[PersonNameField.S].selectedIndex;
		var a = this.editElements[PersonNameField.S].options[this.currentIndex];
		return [[a.text, a.value], this.editElements[PersonNameField.F].value, this.editElements[PersonNameField.L].value]
	}
	return [null, this.editElements[PersonNameField.F].value, this.editElements[PersonNameField.L].value]
};
PersonNameField.prototype.updateEditElementImpl = function () {
	this.currentIndex = this.initialIndex;
	this.hasSalutation && (this.editElements[PersonNameField.S].selectedIndex = this.currentIndex);
	this.editElements[PersonNameField.F].value = this.currentValue[PersonNameField.F];
	this.editElements[PersonNameField.L].value = this.currentValue[PersonNameField.L]
};
PersonNameField.prototype.addSaveData = function (a) {
	this.hasSalutation && (a[this.getComponentId(PersonNameField.S)] = this.currentValue[PersonNameField.S][1]);
	a[this.getComponentId(PersonNameField.F)] = this.currentValue[PersonNameField.F];
	a[this.getComponentId(PersonNameField.L)] = this.currentValue[PersonNameField.L]
};
function AddressField(a, b, c, d, f, e) {
	this.init(a, b, c, d, f);
	this.hasAddressPicklists = e.hasAddressPicklists;
	this.addressFormat = e.addressFormat;
	this.waitForLoad = this.hasAddressPicklists;
	this.countryPicklist = this.statePicklist = null;
	this.labels = e.labels;
	this.width = 600
}
AddressField.STREET = ColumnTypeConstants.ADDRESS_STREET_OFFSET;
AddressField.CITY = ColumnTypeConstants.ADDRESS_CITY_OFFSET;
AddressField.STATE = ColumnTypeConstants.ADDRESS_STATE_OFFSET;
AddressField.ZIP = ColumnTypeConstants.ADDRESS_POSTAL_CODE_OFFSET;
AddressField.COUNTRY = ColumnTypeConstants.ADDRESS_COUNTRY_OFFSET;
AddressField.STATE_CODE = ColumnTypeConstants.ADDRESS_STATE_CODE_OFFSET;
AddressField.COUNTRY_CODE = ColumnTypeConstants.ADDRESS_COUNTRY_CODE_OFFSET;
AddressField.prototype = new InlineEditField.CompoundField;
AddressField.prototype.getComponentId = function (a) {
	var b;
	switch (a) {
	case AddressField.STREET:
		b = EditElement.FIELD_NAME_STREET;
		break;
	case AddressField.CITY:
		b = EditElement.FIELD_NAME_CITY;
		break;
	case AddressField.STATE:
	case AddressField.STATE_CODE:
		b = EditElement.FIELD_NAME_STATE;
		break;
	case AddressField.ZIP:
		b = EditElement.FIELD_NAME_ZIP;
		break;
	case AddressField.COUNTRY:
	case AddressField.COUNTRY_CODE:
		b = EditElement.FIELD_NAME_COUNTRY
	}
	return this.id + b
};
AddressField.prototype.getMaxLengthOfComponent = function (a) {
	switch (a) {
	case AddressField.STREET:
		return ColumnTypeConstants.DEFAULT_STREET_LENGTH;
	case AddressField.CITY:
		return ColumnTypeConstants.DEFAULT_CITY_LENGTH;
	case AddressField.STATE:
		return ColumnTypeConstants.DEFAULT_STATE_LENGTH;
	case AddressField.ZIP:
		return ColumnTypeConstants.DEFAULT_ZIP_LENGTH;
	case AddressField.COUNTRY:
		return ColumnTypeConstants.DEFAULT_COUNTRY_LENGTH;
	case AddressField.STATE_CODE:
		return ColumnTypeConstants.DEFAULT_STATE_CODE_LENGTH;
	case AddressField.COUNTRY_CODE:
		return ColumnTypeConstants.DEFAULT_COUNTRY_CODE_LENGTH
	}
	return 255
};
AddressField.prototype.createEditElements = function () {
	var a = [];
	a.push("\x3ctable border\x3d0\x3e");
	for (var b in this.addressFormat)
		this.createEditElementForComponent(this.addressFormat[b], a);
	a.push("\x3c/table\x3e");
	this.editDiv.innerHTML = a.join("");
	this.hasAddressPicklists && (this.countryPicklist.initializePicklist(), this.countryPicklist.load(), this.statePicklist.initializePicklist(), this.statePicklist.load());
	a = null;
	a = this.getComponentId(AddressField.STATE);
	this.editElements[a] = getElementByIdCS(a);
	a = this.getComponentId(AddressField.CITY);
	this.editElements[a] = getElementByIdCS(a);
	a = this.getComponentId(AddressField.ZIP);
	this.editElements[a] = getElementByIdCS(a);
	a = this.getComponentId(AddressField.COUNTRY);
	this.editElements[a] = getElementByIdCS(a);
	a = this.getComponentId(AddressField.STREET);
	this.editElements[a] = getElementByIdCS(a)
};
AddressField.prototype.createEditElementForComponent = function (a, b) {
	switch (a) {
	case AddressField.CITY:
	case AddressField.STATE:
	case AddressField.ZIP:
	case AddressField.COUNTRY:
		this.createInputElement(b, a);
		break;
	case AddressField.STREET:
		this.createStreetElement(b);
		break;
	case AddressField.STATE_CODE:
		this.createStateSelectElement(b, a);
		break;
	case AddressField.COUNTRY_CODE:
		this.createCountrySelectElement(b, a)
	}
};
AddressField.prototype.createStreetElement = function (a) {
	a.push("\x3ctr\x3e\x3ctd class\x3d'labelCol'\x3e\x3clabel for\x3d'");
	a.push(this.getComponentId(AddressField.STREET));
	a.push("'\x3e");
	a.push(this.labels[AddressField.STREET]);
	a.push("\x3c/label\x3e\x3c/td\x3e\x3ctd\x3e");
	a.push("\x3ctextarea wrap\x3d'soft' type\x3d'text' id\x3d'");
	a.push(this.getComponentId(AddressField.STREET));
	a.push("' rows\x3d'");
	a.push(EditElement.STREET_NUM_ROWS);
	a.push("' cols\x3d'");
	a.push(EditElement.STREET_NUM_COLS);
	a.push("' maxlength\x3d'");
	a.push(this.getMaxLengthOfComponent(AddressField.STREET));
	a.push("'\x3e");
	a.push(this.cleanValueNoBR(this.currentValue[AddressField.STREET]));
	a.push("\x3c/textarea\x3e");
	a.push("\x3c/td\x3e\x3c/tr\x3e")
};
AddressField.prototype.createInputElement = function (a, b) {
	a.push("\x3ctr\x3e\x3ctd class\x3d'labelCol'\x3e\x3clabel for\x3d'");
	a.push(this.getComponentId(b));
	a.push("'\x3e");
	a.push(this.labels[b]);
	a.push("\x3c/label\x3e\x3c/td\x3e\x3ctd\x3e");
	a.push("\x3cinput type\x3d'text' id\x3d'");
	a.push(this.getComponentId(b));
	a.push("' value\x3d\"");
	a.push(this.cleanValue(this.currentValue[b]));
	a.push("\" size\x3d'20' maxLength\x3d'");
	a.push(this.getMaxLengthOfComponent(b));
	a.push("'\x3e");
	a.push("\x3c/td\x3e\x3c/tr\x3e")
};
AddressField.prototype.createStateSelectElement = function (a, b) {
	var c = this.getComponentId(b),
	d = {
		picklistId : 63,
		controller : this.getComponentId(AddressField.COUNTRY_CODE),
		controllerLabel : this.labels[AddressField.COUNTRY_CODE]
	};
	null == this.statePicklist && (this.statePicklist = new DynamicEnumField(c, null, !1, !1, this.initialValue[AddressField.STATE_CODE], d));
	this.createSelectElement(a, b, c, this.statePicklist)
};
AddressField.prototype.createCountrySelectElement = function (a, b, c, d) {
	c = this.getComponentId(b);
	d = {
		picklistId : 64
	};
	var f = this.initialValue[AddressField.COUNTRY_CODE];
	f[0] || (f = [this.initialValue[AddressField.COUNTRY], this.initialValue[AddressField.COUNTRY]]);
	null == this.countryPicklist && (this.countryPicklist = new DynamicEnumField(c, null, !1, !1, f, d));
	this.createSelectElement(a, b, c, this.countryPicklist)
};
AddressField.prototype.createSelectElement = function (a, b, c, d) {
	a.push("\x3ctr\x3e\x3ctd class\x3d'labelCol'\x3e\x3clabel for\x3d'");
	a.push(c);
	a.push("'\x3e");
	a.push(this.labels[b]);
	a.push("\x3c/label\x3e\x3c/td\x3e\x3ctd\x3e");
	b = d.getHtml();
	c = b.length;
	for (d = 0; d < c; d += 1)
		a.push(b[d]);
	a.push("\x3c/td\x3e\x3c/tr\x3e")
};
AddressField.prototype.formatValue = function () {
	var a = [],
	b = "",
	c = "";
	this.hasAddressPicklists ? (b = this.statePicklist.formatValue(), c = this.countryPicklist.formatValue()) : (b = this.cleanValue(this.currentValue[AddressField.STATE]), c = this.cleanValue(this.currentValue[AddressField.COUNTRY]));
	if (0 == UserContext.locale.indexOf("ja") || 0 == UserContext.locale.indexOf("zh") || 0 == UserContext.locale.indexOf("ko"))
		"" != c && (a.push(c), a.push("\x3cbr\x3e")), "" != this.cleanValue(this.currentValue[AddressField.ZIP]) && (a.push(this.cleanValue(this.currentValue[AddressField.ZIP])),
			a.push("\x26nbsp;")), "" != b && (a.push(b), a.push("\x26nbsp;")), a.push(this.cleanValue(this.currentValue[AddressField.CITY])), a.push("\x3cbr\x3e"), a.push(this.cleanValue(this.currentValue[AddressField.STREET]));
	else if ("" == b && (0 == UserContext.locale.indexOf("sv") || 0 == UserContext.locale.indexOf("da") || 0 == UserContext.locale.indexOf("fi") || 0 == UserContext.locale.indexOf("no")))
		a.push(this.cleanValueNoBR(this.currentValue[AddressField.STREET])), a.push("\x3cbr\x3e"), a.push(this.cleanValue(this.currentValue[AddressField.ZIP])),
		"" != this.cleanValue(this.currentValue[AddressField.ZIP]) && "" != this.cleanValue(this.currentValue[AddressField.CITY]) && a.push("\x26nbsp;"), a.push(this.cleanValue(this.currentValue[AddressField.CITY])), "" != c && (a.push("\x3cbr\x3e"), a.push(c));
	else if (0 == UserContext.locale.indexOf("de")) {
		if (a.push(this.cleanValue(this.currentValue[AddressField.STREET])), a.push("\x3cbr\x3e"), a.push(this.cleanValue(this.currentValue[AddressField.ZIP])), "" != this.cleanValue(this.currentValue[AddressField.ZIP]) && "" != this.cleanValue(this.currentValue[AddressField.CITY]) &&
			a.push("\x26nbsp;"), a.push(this.cleanValue(this.currentValue[AddressField.CITY])), "" != c || "" != b)
			a.push("\x3cbr\x3e"), "" != b && (a.push(b), a.push("\x26nbsp;")), a.push(c)
	} else if (-1 != UserContext.locale.indexOf("CH")) {
		if (a.push(this.cleanValue(this.currentValue[AddressField.STREET])), "" != this.cleanValue(this.currentValue[AddressField.STREET]) && "" != this.cleanValue(this.currentValue[AddressField.CITY]) && a.push("\x3cbr\x3e"), a.push(this.cleanValue(this.currentValue[AddressField.CITY])), "" != c || "" != b || "" != this.cleanValue(this.currentValue[AddressField.ZIP]))
			a.push("\x3cbr\x3e"),
			"" != c && (a.push(c), a.push("\x26nbsp;-\x26nbsp;")), "" != b && (a.push(b), a.push("\x26nbsp;")), a.push(this.cleanValue(this.currentValue[AddressField.ZIP]))
	} else
		a.push(this.cleanValue(this.currentValue[AddressField.STREET])), a.push("\x3cbr\x3e"), a.push(this.cleanValue(this.currentValue[AddressField.CITY])), "" != this.cleanValue(this.currentValue[AddressField.CITY]) && ("" != b || "" != this.cleanValue(this.currentValue[AddressField.ZIP]) || "" != c) && a.push(",\x26nbsp;"), "" != b && (a.push(b), a.push("\x26nbsp;")), a.push(this.cleanValue(this.currentValue[AddressField.ZIP])),
		"" != c && (a.push("\x3cbr\x3e"), a.push(c));
	return a.join("")
};
AddressField.prototype.isDifferentValue = function (a) {
	var b = this.initialValue[AddressField.STREET] != a[AddressField.STREET] || this.initialValue[AddressField.CITY] != a[AddressField.CITY] || this.initialValue[AddressField.ZIP] != a[AddressField.ZIP];
	if (this.hasAddressPicklists) {
		var c = this.initialValue[AddressField.STATE_CODE],
		d = this.initialValue[AddressField.COUNTRY_CODE];
		if ("object" == typeof c || "object" == d)
			c = this.statePicklist.initialIndex, d = this.countryPicklist.initialIndex;
		return b || c != a[AddressField.STATE_CODE] ||
		d != a[AddressField.COUNTRY_CODE]
	}
	return b || this.initialValue[AddressField.COUNTRY] != a[AddressField.COUNTRY] || this.initialValue[AddressField.STATE] != a[AddressField.STATE]
};
AddressField.prototype.getValueFromEdit = function () {
	var a = [];
	this.hasAddressPicklists ? (this.statePicklist.getValueFromEdit(), a[AddressField.STATE_CODE] = this.statePicklist.currentIndex, this.countryPicklist.getValueFromEdit(), a[AddressField.COUNTRY_CODE] = this.countryPicklist.currentIndex) : (a[AddressField.STATE] = this.editElements[this.getComponentId(AddressField.STATE)].value, a[AddressField.COUNTRY] = this.editElements[this.getComponentId(AddressField.COUNTRY)].value);
	a[AddressField.STREET] = this.editElements[this.getComponentId(AddressField.STREET)].value;
	a[AddressField.CITY] = this.editElements[this.getComponentId(AddressField.CITY)].value;
	a[AddressField.ZIP] = this.editElements[this.getComponentId(AddressField.ZIP)].value;
	return a
};
AddressField.prototype.updateEditElementImpl = function () {
	this.editElements[this.getComponentId(AddressField.STREET)].value = this.currentValue[AddressField.STREET];
	this.editElements[this.getComponentId(AddressField.CITY)].value = this.currentValue[AddressField.CITY];
	this.editElements[this.getComponentId(AddressField.ZIP)].value = this.currentValue[AddressField.ZIP];
	if (this.hasAddressPicklists) {
		var a = this.currentValue[AddressField.STATE_CODE],
		b = this.currentValue[AddressField.COUNTRY_CODE];
		"object" == typeof a ||
		"object" == b ? (this.statePicklist.updateEditElementImpl(), this.countryPicklist.updateEditElementImpl()) : (this.editElements[this.getComponentId(AddressField.STATE_CODE)].selectedIndex = a, this.editElements[this.getComponentId(AddressField.COUNTRY_CODE)].selectedIndex = b)
	} else
		this.editElements[this.getComponentId(AddressField.STATE)].value = this.currentValue[AddressField.STATE], this.editElements[this.getComponentId(AddressField.COUNTRY)].value = this.currentValue[AddressField.COUNTRY]
};
AddressField.prototype.addSaveData = function (a) {
	a[this.getComponentId(AddressField.STREET)] = this.normalizeNewlines(this.currentValue[AddressField.STREET]);
	a[this.getComponentId(AddressField.CITY)] = this.currentValue[AddressField.CITY];
	a[this.getComponentId(AddressField.ZIP)] = this.currentValue[AddressField.ZIP];
	if (this.hasAddressPicklists) {
		var b = this.currentValue[AddressField.STATE_CODE],
		c = this.currentValue[AddressField.COUNTRY_CODE];
		"object" == typeof c ? (a[this.getComponentId(AddressField.STATE_CODE)] =
				b[1], a[this.getComponentId(AddressField.COUNTRY_CODE)] = c[1]) : (a[this.getComponentId(AddressField.STATE_CODE)] = this.statePicklist.editElement.options[b].value, a[this.getComponentId(AddressField.COUNTRY_CODE)] = this.countryPicklist.editElement.options[c].value)
	} else
		a[this.getComponentId(AddressField.STATE)] = this.currentValue[AddressField.STATE], a[this.getComponentId(AddressField.COUNTRY)] = this.currentValue[AddressField.COUNTRY]
};
function MultiEnumField(a, b, c, d, f, e) {
	this.init(a, b, c, d, f);
	this.width = 400;
	this.picklistId = e.picklistId;
	this.controllerId = e.controller;
	this.controllerLabel = e.controllerLabel;
	this.height = e.height;
	this.waitForLoad = !0;
	this.initialSelections = []
}
MultiEnumField.H = 0;
MultiEnumField.U = 1;
MultiEnumField.S = 2;
MultiEnumField.prototype = new InlineEditField.CompoundField;
MultiEnumField.prototype.getComponentId = function (a) {
	var b;
	switch (a) {
	case MultiEnumField.H:
		b = "";
		break;
	case MultiEnumField.U:
		b = EditElement.UNSELECTED_ID_SUFFIX;
		break;
	case MultiEnumField.S:
		b = EditElement.SELECTED_ID_SUFFIX
	}
	return this.id + b
};
MultiEnumField.prototype.createEditElements = function () {
	var a = {
		selectSize : this.height,
		componentID_H : this.getComponentId(MultiEnumField.H),
		componentID_U : this.getComponentId(MultiEnumField.U),
		componentID_S : this.getComponentId(MultiEnumField.S),
		emptyImg : UserContext.getUrl("/s.gif"),
		picklistArrowSelect : "picklistArrow" + (LC.isRtlPage() ? "Left" : "Right"),
		picklistArrowUnSelect : "picklistArrow" + (LC.isRtlPage() ? "Right" : "Left"),
		dependents : ""
	};
	this.controllerId && (a.containerClass = Sfdc.userAgent.isIE6 || Sfdc.userAgent.isIE7 ?
			"mouseOverInfoDependentFields" : "mouseOverInfoOuter", a.dependsOnlabel = LC.getLabel("DependentElement", "dependsOn", this.controllerLabel), a.dependents = Sfdc.String.format('\x3ctd\x3e\t\x3cdiv class\x3d"{containerClass}"\x3e\t\t\x3cimg title\x3d\'{dependsOnlabel}\' alt\x3d"{dependsOnlabel}" class\x3d"infoIcon" src\x3d"{emptyImg}"/\x3e\t\t\x3cdiv style\x3d"display: none" class\x3d"mouseOverInfo"\x3e\x3c/div\x3e\t\x3c/div\x3e\x3c/td\x3e', a));
	this.editDiv.innerHTML = Sfdc.String.format('\x3cspan\x3e\t\x3cselect style\x3d"display:none;" size\x3d"{selectSize}" multiple\x3d"multiple" id\x3d"{componentID_H}"\x3e\x3c/select\x3e\x3c/span\x3e\x3ctable border\x3d"0" cellspacing\x3d"0" cellpadding\x3d"0" class\x3d"multiSelectPicklistTable"\x3e\t\x3ctr class\x3d"multiSelectPicklistRow"\x3e\t\t\x3ctd\x3e\t\t\t\x3cspan\x3e\t\t\t\t\x3cselect multiple\x3d"multiple" id\x3d"{componentID_U}" size\x3d"{selectSize}"\x3e\x3c/select\x3e\t\t\t\x3c/span\x3e\t\t\x3c/td\x3e\t\t\x3ctd class\x3d"multiSelectPicklistCell"\x3e\t\t\t\x3ca href\x3d"javascript:MultiSelectPicklist.handleMSPSelect(\'{componentID_H}\');"\x3e\t\t\t\t\x3cimg class\x3d"{picklistArrowSelect}" src\x3d"{emptyImg}"/\x3e\t\t\t\x3c/a\x3e\t\t\t\x3cbr/\x3e\x3cbr/\x3e\t\t\t\x3ca href\x3d"javascript:MultiSelectPicklist.handleMSPUnSelect(\'{componentID_H}\');"\x3e\t\t\t\t\x3cimg class\x3d"{picklistArrowUnSelect}" src\x3d"{emptyImg}"/\x3e\t\t\t\x3c/a\x3e\t\t\x3c/td\x3e\t\t\x3ctd\x3e\t\t\t\x3cspan\x3e\t\t\t\t\x3cselect multiple\x3d"multiple" id\x3d"{componentID_S}" size\x3d"{selectSize}"\x3e\x3c/select\x3e\t\t\t\x3c/span\x3e\t\t\x3c/td\x3e\t\t\t{dependents}\t\x3c/td\x3e\x3c/table\x3e',
			a);
	var b = this.currentValue && this.visualforce_inlineEdit ? this.currentValue : this.initialValue,
	a = Sfdc.String.format(' style\x3d"display:none" size\x3d"{selectSize}" multiple\x3d"multiple" id\x3d"{componentID_H}"', a);
	new multiPicklist(this.getComponentId(MultiEnumField.H), this.picklistId, this.controllerId, Util.convertOptionsForPicklistData(b), a, this.getFieldLabel(), this.height, !this.required, !1, -1);
	MultiSelectPicklist.loadMSP(this.id);
	this.group || this.load()
};
MultiEnumField.prototype.retrieveFields = function () {
	this.editElements[MultiEnumField.H] = getElementByIdCS(this.getComponentId(MultiEnumField.H));
	this.editElements[MultiEnumField.U] = getElementByIdCS(this.getComponentId(MultiEnumField.U));
	this.editElements[MultiEnumField.S] = getElementByIdCS(this.getComponentId(MultiEnumField.S))
};
MultiEnumField.prototype.load = function () {
	picklist.picklists[this.getComponentId(MultiEnumField.H)].onLoad();
	this.retrieveFields();
	for (var a = this.editElements[MultiEnumField.H].options, b = 0; b < a.length; b++)
		this.initialSelections[b] = a[b].selected
};
MultiEnumField.prototype.showEdit = function () {
	this.retrieveFields();
	this.overlay.setActiveField(this.id);
	this.overlay.show();
	MultiSelectPicklist.resizeMSP(this.editElements[MultiEnumField.S], this.editElements[MultiEnumField.U]);
	this.width = this.editDiv.childNodes[1].offsetWidth + 50;
	this.overlay.setMaxWidth(this.width);
	this.overlay.position()
};
MultiEnumField.prototype.formatValue = function () {
	for (var a = [], b = 0; b < this.currentValue.length; b++)
		a.push(this.cleanValue(this.currentValue[b][0])), b + 1 != this.currentValue.length && a.push("; ");
	return 0 == a.length ? this.getDeletedValue() : a.join("")
};
MultiEnumField.prototype.isDifferentValue = function (a) {
	if (a.length != this.initialValue.length)
		return !0;
	for (var b = 0; b < this.initialValue.length; b++)
		if (a[b][0] != this.initialValue[b][0] || a[b][1] != this.initialValue[b][1])
			return !0;
	return !1
};
MultiEnumField.prototype.getValueFromEdit = function () {
	this.retrieveFields();
	for (var a = [], b = this.editElements[MultiEnumField.H].options, c = 0; c < b.length; c++)
		b[c].selected && a.push([b[c].text, b[c].value]);
	return a
};
MultiEnumField.prototype.updateEditElementImpl = function () {
	this.retrieveFields();
	for (var a = this.editElements[MultiEnumField.H].options, b = 0; b < a.length; b++)
		a[b].selected = this.initialSelections[b];
	if (this.editElements[MultiEnumField.H].onchange)
		this.editElements[MultiEnumField.H].onchange();
	MultiSelectPicklist.setState(this.editElements[MultiEnumField.H], this.currentValue)
};
MultiEnumField.prototype.addSaveData = function (a) {
	var b = [];
	if (!this.created && this.required && this.controllerId && !this.initialValue)
		b.push(picklistNAMarker);
	else
		for (var c = this.created ? this.getValueFromEdit() : this.currentValue, d = 0; d < c.length; d++)
			b.push(c[d][1]);
	a[this.id] = b
};
function MultiLineTextField(a, b, c, d, f, e) {
	this.init(a, b, c, d, f);
	this.maxLength = e.maxLength;
	this.width = window.ActiveXObject ? 380 : 500
}
MultiLineTextField.prototype = new InlineEditField.CompoundField;
MultiLineTextField.prototype.createEditElements = function () {
	var a = [];
	a.push("\x3ctextarea type\x3d'text' wrap\x3d'soft' maxlength\x3d'");
	a.push(this.maxLength);
	a.push("'");
	a.push(" rows\x3d'6'");
	a.push(" cols\x3d'52'");
	a.push(" id\x3d'");
	a.push(this.id);
	a.push("'\x3e");
	a.push(this.cleanValueNoBR(this.currentValue));
	a.push("\x3c/textarea\x3e");
	a.push("\x3cdiv class\x3d'textCounterMiddle'\x3e");
	a.push("\x3cdiv class\x3d'textCounter'");
	a.push(" id\x3d'");
	a.push(this.id);
	a.push("_counter'\x3e");
	a.push("\x3c/div\x3e");
	a.push("\x3c/div\x3e");
	this.editDiv.innerHTML = a.join("");
	this.editElement = getElementByIdCS(this.id);
	this.attachCountHandler()
};
MultiLineTextField.prototype.attachCountHandler = function () {
	var a = this.id,
	b = this.maxLength,
	c = LC.getLabel("Edit", "CharactersRemaining"),
	d = LC.getLabel("Edit", "CharactersOver"),
	f = function () {
		handleTextAreaElementChange(a, b, c, d)
	},
	e = window.ActiveXObject ? ["propertychange", "focus"] : "keydown keyup change click mousedown focus".split(" "),
	g;
	for (g in e)
		addEvent(this.editElement, e[g], f, !0)
};
MultiLineTextField.prototype.addSaveData = function (a) {
	this.currentValue = this.normalizeNewlines(this.currentValue);
	a[this.id] = this.currentValue
};
MultiLineTextField.prototype.isDifferentValue = function (a) {
	return this.initialValue != a
};
MultiLineTextField.prototype.getValueFromEdit = function () {
	return this.editElement.value
};
MultiLineTextField.prototype.formatValue = function () {
	return "" === this.currentValue && "" !== this.initialValue ? this.getDeletedValue() : this.cleanValue(this.currentValue)
};
MultiLineTextField.prototype.updateEditElementImpl = function () {
	this.editElement.value = this.currentValue
};
InlineEditField.SimpleField = function () {
	this.group = this.editElement = null;
	this.saveOnEnter = !0
};
InlineEditField.SimpleField.prototype = new InlineEditField;
InlineEditField.SimpleField.prototype.addSaveData = function (a) {
	a[this.id] = this.currentValue
};
InlineEditField.SimpleField.prototype.openField = function () {
	this.created || this.createEditDiv();
	this.showEdit()
};
InlineEditField.SimpleField.prototype.createEditDiv = function () {
	this.editDiv = document.createElement("div");
	this.editDiv.className = this.required ? "inlineEditRequiredDiv" : "inlineEditDiv";
	this.group && (this.editDiv.className += " inlineEditGroup");
	this.editDiv.id = this.id + InlineEditConstants.INNER_ID + "edit";
	this.errorDiv ? this.tableCell.insertBefore(this.editDiv, this.errorDiv) : this.tableCell.appendChild(this.editDiv);
	this.createEditElements();
	this.error && !this.group && (this.editElement.className = EditElement.ERROR_CLASS);
	this.mayUndo() && this.createUndoButton();
	if (!this.group) {
		var a = this;
		addEvent(this.editElement, "keydown", function (b) {
			a.handleKeyPress(b)
		}, !0)
	}
	this.created = !0
};
InlineEditField.SimpleField.prototype.handleKeyPress = function (a) {
	a = getEvent(a);
	var b = a.keyCode;
	if (b == KEY_ESC)
		this.reset(), eventCancelBubble(a);
	else if (b == KEY_ENTER && this.saveOnEnter) {
		var c = sfdcPage.getInlineEditData(this.id);
		c.closeCurrentField(null, !1);
		eventCancelBubble(a);
		c[InlineEditConstants.VF_ENABLED] && a.preventDefault();
		setTimeout(function () {
			sfdcPage.focusOnSave(c[InlineEditConstants.VF_ENABLED])
		}, 10)
	}
};
InlineEditField.SimpleField.prototype.showEdit = function () {
	this.editElement.disabled && (document.selection && document.selection.empty) && document.selection.empty();
	this.readDiv.style.display = "none";
	this.undoButton && (this.undoButton.parentNode != this.editDiv && this.editDiv.appendChild(this.undoButton), this.undoButton.style.display = "inline");
	this.editDiv.style.display = "block";
	var a = this.editElement;
	!a.disabled && !(a.readOnly || "none" === a.style.display) && setTimeout(function () {
		a.focus();
		"text" == a.type && a.select()
	},
		10)
};
InlineEditField.SimpleField.prototype.hideEdit = function () {
	this.editElement.blur();
	this.editDiv.style.display = "none";
	this.changed && this.undoButton && this.readDiv.appendChild(this.undoButton);
	this.readDiv.style.display = "block"
};
InlineEditField.SimpleField.prototype.closeField = function (a, b) {
	if (this.useCKEditor ? this.shouldClose(b) : 1) {
		var c = this.getValueFromEdit();
		this.updateFieldValue(c);
		this.group || this.hideEdit();
		return !0
	}
	return !1
};
InlineEditField.SimpleField.prototype.updateFieldValue = function (a, b) {
	this.isDifferentValue(a) ? (this.changed || (this.changed = !0, addStyleClass(this.readDiv, "inlineEditModified")), this.currentValue = a, b || this.updateDependents(), this.updateReadElement()) : this.changed && this.reset(!0)
};
InlineEditField.SimpleField.prototype.isDifferentValue = function (a) {
	return this.initialValue != a
};
InlineEditField.SimpleField.prototype.reset = function (a) {
	this.currentValue = this.initialValue;
	a && this.updateDependents();
	delStyleClass(this.readDiv, "inlineEditModified");
	this.changed = !1;
	this.undoButton && (this.undoButton.style.display = "none", this.editDiv.appendChild(this.undoButton));
	this.readDiv.innerHTML = this.initialHTML;
	sfdcPage.getInlineEditData(this.id).isCurrentField(this) && (this.hideEdit(), sfdcPage.getInlineEditData(this.id).currentField = null);
	this.clearError();
	this.updateEditElement();
	(a = this.readDiv.parentNode) &&
	0 <= a.tabIndex && a.focus()
};
InlineEditField.SimpleField.prototype.getValueFromEdit = function () {
	return this.editElement.value
};
InlineEditField.SimpleField.prototype.updateReadElement = function () {
	this.readDiv.innerHTML = this.formatValue()
};
InlineEditField.SimpleField.prototype.formatValue = function () {
	return "" === this.currentValue && "" !== this.initialValue ? this.getDeletedValue() : this.cleanValue(this.currentValue)
};
InlineEditField.SimpleField.prototype.updateEditElementImpl = function () {
	this.editElement.value = this.currentValue
};
InlineEditField.SimpleField.prototype.setError = function (a) {
	InlineEditField.prototype.setError.call(this, a);
	this.editElement && addStyleClass(this.editElement, EditElement.ERROR_CLASS)
};
InlineEditField.SimpleField.prototype.clearError = function () {
	InlineEditField.prototype.clearError.call(this);
	this.editElement && delStyleClass(this.editElement, EditElement.ERROR_CLASS)
};
function BooleanField(a, b, c, e, f, d) {
	a && (this.init(a, b, c, e, f), this.checkboxImage = getElementByIdCS(this.id + EditElement.CHECKBOX_SUFFIX), this.checkLabel = LC.getLabel("Images", "checkbox_checked"), this.uncheckLabel = LC.getLabel("Images", "checkbox_unchecked"))
}
BooleanField.prototype = new InlineEditField.SimpleField;
BooleanField.prototype.createEditElements = function () {
	var a = [];
	a.push("\x3cinput type\x3d'checkbox' id\x3d'");
	a.push(this.id);
	a.push("'");
	this.currentValue && a.push(" checked\x3d'checked'");
	a.push("\x3e");
	this.editDiv.innerHTML = a.join("");
	this.editElement = getElementByIdCS(this.id)
};
BooleanField.prototype.createDummy = function () {
	var a = document.createElement("input");
	a.type = "hidden";
	a.id = this.id;
	a.value = this.currentValue ? "1" : "0";
	this.tableCell.appendChild(a);
	this.created = !0
};
BooleanField.prototype.getValueFromEdit = function () {
	return this.editElement.checked
};
BooleanField.prototype.updateReadElement = function () {
	this.currentValue ? (this.checkboxImage.src = UserContext.getUrl("/img/checkbox_checked.gif"), this.checkboxImage.title = this.checkLabel, this.checkboxImage.alt = this.checkLabel) : (this.checkboxImage.src = UserContext.getUrl("/img/checkbox_unchecked.gif"), this.checkboxImage.title = this.uncheckLabel, this.checkboxImage.alt = this.uncheckLabel)
};
BooleanField.prototype.formatValue = function () {
	var a = [];
	a.push('\x3cimg src\x3d"');
	a.push(this.currentValue ? UserContext.getUrl("/img/checkbox_checked.gif") : UserContext.getUrl("/img/checkbox_unchecked.gif"));
	a.push('" width\x3d"21" height\x3d"16" alt\x3d"');
	a.push(this.currentValue ? this.checkLabel : this.uncheckLabel);
	a.push('" class\x3d"checkImg"\x3e');
	return a.join("")
};
BooleanField.prototype.updateEditElementImpl = function () {
	this.editElement.checked = this.currentValue;
	if (this.editElement.onclick)
		this.editElement.onclick()
};
BooleanField.prototype.addSaveData = function (a) {
	a[this.id] = this.currentValue ? "1" : "0"
};
BooleanField.prototype.reset = function () {
	this.currentValue = this.initialValue;
	delStyleClass(this.readDiv, "inlineEditModified");
	this.changed = !1;
	this.updateReadElement();
	!this.group && sfdcPage.getInlineEditData(this.id).isCurrentField(this) && (this.hideEdit(), sfdcPage.getInlineEditData(this.id).currentField = null);
	this.undoButton && (this.undoButton.style.display = "none");
	this.clearError();
	this.updateEditElement();
	var a = this.readDiv.parentNode;
	a && 0 <= a.tabIndex && a.focus()
};
function TextField(a, b, c, e, f, d) {
	this.init(a, b, c, e, f);
	this.maxLength = d.maxLength ? d.maxLength : 255
}
TextField.prototype = new InlineEditField.SimpleField;
TextField.prototype.createEditElements = function () {
	var a = [];
	a.push("\x3cinput type\x3d'text' id\x3d'");
	a.push(this.id);
	a.push("' value\x3d\"");
	a.push(this.cleanValue(this.currentValue));
	a.push("\" size\x3d'20' maxLength\x3d'");
	a.push(this.maxLength);
	a.push("'\x3e");
	this.editDiv.innerHTML = a.join("");
	this.editElement = getElementByIdCS(this.id)
};
function NumberField(a, b, c, e, f, d) {
	this.init(a, b, c, e, f)
}
NumberField.prototype = new InlineEditField.SimpleField;
NumberField.prototype.createEditElements = function () {
	var a = [];
	a.push("\x3cinput type\x3d'text' id\x3d'");
	a.push(this.id);
	a.push("' value\x3d\"");
	a.push(this.cleanValue(this.currentValue));
	a.push('"\x3e');
	this.editDiv.innerHTML = a.join("");
	this.editElement = getElementByIdCS(this.id)
};
function DateField(a, b, c, e, f, d) {
	this.init(a, b, c, e, f);
	this.hasTime = d.hasTime
}
DateField.prototype = new InlineEditField.SimpleField;
DateField.prototype.createEditElements = function () {
	var a = [];
	a.push("\x3cinput type\x3d'text' id\x3d'");
	a.push(this.id);
	a.push("' value\x3d\"");
	a.push(this.cleanValue(this.currentValue));
	a.push('" onFocus\x3d"DatePicker.pickDate(true, \'');
	a.push(this.id);
	a.push("', ");
	a.push(this.hasTime);
	a.push(');"\x3e');
	this.editDiv.innerHTML = a.join("");
	this.editElement = getElementByIdCS(this.id)
};
DateField.prototype.hideEdit = function () {
	InlineEditField.SimpleField.prototype.hideEdit.apply(this);
	DatePicker.datePicker.hide()
};
function PhoneField(a, b, c, e, f, d) {
	this.init(a, b, c, e, f);
	this.formatPhone = d.formatPhone;
	this.addDir = d.addDir
}
PhoneField.prototype = new InlineEditField.SimpleField;
PhoneField.prototype.createEditElements = function () {
	var a = [];
	a.push("\x3cinput type\x3d'text' id\x3d'");
	a.push(this.id);
	a.push("' value\x3d\"");
	a.push(this.cleanValue(this.currentValue));
	a.push('"');
	this.addDir && a.push(" dir\x3d'ltr'");
	this.formatPhone && (a.push(" onblur\x3d'formatPhone(this);'"), a.push(" onkeydown\x3d'formatPhoneOnEnter(this, event);'"));
	a.push("\x3e");
	this.editDiv.innerHTML = a.join("");
	this.editElement = getElementByIdCS(this.id)
};
function ForeignKeyField(a, b, c, e, f, d) {
	this.init(a, b, c, e, f);
	this.domains = d.domain;
	this.useNewLookups = d.useNewLookups;
	this.lookupEntityPrefix = d.lookupEntityPrefix;
	this.lookupFieldEnumOrId = d.lookupFieldEnumOrId;
	this.mruServletUri = d.mruServletUri;
	this.mruAutoComplete = [];
	"undefined" !== typeof d.mruAutoComplete && (this.mruAutoComplete = d.mruAutoComplete);
	this.lookupControllerIds = d.controllerIds;
	this.validationServletURI = d.validationServletURI;
	this.domainElement = this.oldElement = this.idElement = null;
	this.initialDomain =
		0;
	this.lookupAutoCompleter = null;
	this.matchBlanks = d.matchBlanks
}
ForeignKeyField.prototype = new InlineEditField.SimpleField;
ForeignKeyField.ID = 0;
ForeignKeyField.OLD = 1;
ForeignKeyField.DOMAIN = 2;
ForeignKeyField.MULTIDOMAIN = 3;
ForeignKeyField.prototype.getComponentId = function (a) {
	var b;
	switch (a) {
	case ForeignKeyField.ID:
		b = EditElement.pID_SUFFIX;
		break;
	case ForeignKeyField.OLD:
		b = EditElement.pOLD_NAME_SUFFIX;
		break;
	case ForeignKeyField.DOMAIN:
		b = EditElement.pTYPE_SUFFIX;
		break;
	case ForeignKeyField.MULTIDOMAIN:
		b = MultiLookupInputElement.MULTI_LOOKUP_SELECT_SUFFIX
	}
	return this.id + b
};
ForeignKeyField.prototype.createEditElements = function () {
	var a = this.cleanValue(this.getFieldLabel() + " " + LC.getLabel("Icons", "lookup")),
	b = [];
	b.push("\x3cspan class\x3d'lookupInput bEditBlock'\x3e");
	if (1 < this.domains.length) {
		var c = 'getElementByIdCS("' + this.getComponentId(ForeignKeyField.DOMAIN) + '").value\x3dgetElementByIdCS("' + this.getComponentId(ForeignKeyField.MULTIDOMAIN) + '").options[getElementByIdCS("' + this.getComponentId(ForeignKeyField.MULTIDOMAIN) + '").selectedIndex].value;getElementByIdCS("' +
			this.getComponentId(ForeignKeyField.ID) + '").value \x3d "";getElementByIdCS("' + this.id + '").value \x3d "";';
		b.push(Util.createDynamicSelect({
				id : this.getComponentId(ForeignKeyField.MULTIDOMAIN),
				name : this.getComponentId(ForeignKeyField.MULTIDOMAIN),
				onchange : c
			}, this.domains, !1))
	}
	b.push("\x3cinput type\x3d'hidden' id\x3d'");
	b.push(this.getComponentId(ForeignKeyField.ID));
	b.push("' name\x3d'");
	b.push(this.getComponentId(ForeignKeyField.ID));
	b.push("' value\x3d'");
	b.push(this.currentValue[1]);
	b.push("'\x3e\x3cinput type\x3d'hidden' id\x3d'");
	b.push(this.getComponentId(ForeignKeyField.OLD));
	b.push("' name\x3d'");
	b.push(this.getComponentId(ForeignKeyField.OLD));
	b.push("' value\x3d\"");
	b.push(this.cleanValue(this.currentValue[0]));
	b.push("\"\x3e\x3cinput type\x3d'hidden' id\x3d'");
	b.push(this.getComponentId(ForeignKeyField.DOMAIN));
	b.push("' name\x3d'");
	b.push(this.getComponentId(ForeignKeyField.DOMAIN));
	b.push("' value\x3d'");
	b.push(this.domains[0][1]);
	b.push("'\x3e\x3cinput type\x3d'text' size\x3d'20' maxlength\x3d'255' id\x3d'");
	b.push(this.id);
	b.push("' name\x3d'");
	b.push(this.id);
	b.push("' value\x3d\"");
	b.push(this.cleanValue(this.currentValue[0]));
	0 < this.mruAutoComplete.length && b.push('"\' autocomplete\x3d"off"\'');
	b.push('"\x3e');
	this.dependentIds && 0 < this.dependentIds.length && b.push("\x3cimg class\x3d'closeIcon' alt\x3d'" + LC.getLabel("Global", "clear") + "' title\x3d'" + LC.getLabel("Global", "clear") + "' src\x3d'/s.gif'\x3e");
	b.push("\x3ca href\x3d'' id\x3d'");
	b.push(this.id);
	b.push("Icon' title\x3d'");
	b.push(a);
	b.push("'\x3e\x3cimg onmouseover\x3d\"this.className\x3d'lookupIconOn';\" alt\x3d'");
	b.push(a);
	b.push("' onmouseout\x3d\"this.className\x3d'lookupIcon';\" class\x3d'lookupIcon' src\x3d'" + UserContext.getUrl("/s.gif") + "'\x3e\x3c/a\x3e");
	(a = this.getMouseOverInfoText()) && b.push(MouseOverFade.createMouseOverHtml(a));
	b.push("\x3c/span\x3e");
	this.editDiv.innerHTML = b.join("");
	var e = this;
	if ((b = Sfdc.select("img.closeIcon", this.editDiv)) && 1 == b.length)
		e.clearButton = b[0], addEvent(e.clearButton, "mouseover", function () {
			this.className = "closeIconOn"
		}, !0), addEvent(e.clearButton, "mouseout", function () {
			this.className =
				"closeIcon"
		}, !0), addEvent(e.clearButton, "focus", function () {
			this.className = "closeIconOn"
		}, !0), addEvent(e.clearButton, "blur", function () {
			this.className = "closeIcon"
		}, !0), addEvent(e.clearButton, "click", function () {
			e.updateFieldValue(["", ""], !0);
			e.updateEditElement();
			e.editElement.value = LC.getLabel("Global", "click_lookup_icon");
			e.isEmpty = !0;
			e.updateClearButtonStatus()
		}, !0);
	addEvent(getElementByIdCS(this.id + "Icon"), "click", function (a) {
		setLastMousePosition(a);
		e.openLookup();
		a.preventDefault ? a.preventDefault() :
		a.returnValue = !1
	}, !1);
	this.editElement = getElementByIdCS(this.id);
	this.idElement = getElementByIdCS(this.getComponentId(ForeignKeyField.ID));
	this.oldElement = getElementByIdCS(this.getComponentId(ForeignKeyField.OLD));
	this.dependentIds && 0 < this.dependentIds.length && (this.editElement.readOnly = !0, addStyleClass(this.editElement, "readonly"), "" == e.editElement.value && (this.updateClearButtonStatus(), e.editElement.value = LC.getLabel("Global", "click_lookup_icon"), e.isEmpty = !0));
	if (1 < this.domains.length) {
		this.domainElement =
			getElementByIdCS(this.getComponentId(ForeignKeyField.MULTIDOMAIN));
		for (b = 0; b < this.domains.length; b++)
			if (0 == this.initialValue[1].indexOf(this.domains[b][1])) {
				this.initialDomain = b;
				break
			}
		this.domainElement.selectedIndex = this.initialDomain
	}
	0 < this.mruAutoComplete.length && this.addAutoCompleter()
};
ForeignKeyField.prototype.afterLoad = function () {
	if (sfdcPage.getReferredDomIds) {
		var a = sfdcPage.getReferredDomIds(this.id);
		if (a)
			for (var b = 0; b < a.length; b++) {
				var c = sfdcPage.getFieldById(a[b]);
				c && c.domains && (c.validationServletURI = this.validationServletURI)
			}
	}
};
ForeignKeyField.prototype.getMouseOverInfoText = function () {
	var a = this.idsToLabels(this.dependentIds),
	b = this.idsToLabels(this.lookupControllerIds),
	c = [];
	a && (c.push(LC.getLabel("Global", "click_lookup_icon_info")), c.push("\x3cbr/\x3e"), c.push(escapeHTML(LC.getLabel("DependentElement", "controls", a.join(", ")))), b && c.push("\x3cbr/\x3e"));
	b && c.push(escapeHTML(LC.getLabel("DependentElement", "dependsOnMultiple", b.join(", "))));
	return c.join("")
};
ForeignKeyField.prototype.idsToLabels = function (a) {
	var b;
	if (a) {
		b = [];
		for (var c = 0; c < a.length; c++) {
			var e = sfdcPage.getFieldById(a[c]);
			e && b.push(e.getFieldLabel())
		}
	}
	return b && 0 < b.length ? b : null
};
ForeignKeyField.prototype.addAutoCompleter = function () {
	var a = this.mruAutoComplete;
	if (!(1 < a.length)) {
		a = a[0][0];
		a = {
			lknm : this.id,
			acEntity : a
		};
		this.lookupEntityPrefix && this.lookupFieldEnumOrId && (a.aclkent = this.lookupEntityPrefix, a.aclkfield = this.lookupFieldEnumOrId);
		this.lookupAutoCompleter = new LookupAutoCompleteInputElement(this.id, this.mruServletUri, 1, a, this.matchBlanks, this.lookupControllerIds ? this.id : null, !1);
		var b = this;
		this.lookupAutoCompleter.addOnAfterTabDownListener(function (a) {
			b.closeOnTab(a)
		})
	}
};
InlineEditField.SimpleField.prototype.closeOnTab = function (a) {
	this.closeField();
	sfdcPage.getInlineEditData(this.id).currentField = null;
	InlineEditField.SimpleField.captureEvent(a)
};
InlineEditField.SimpleField.captureEvent = function (a) {
	Sfdc.userAgent.isIE ? (a.returnValue = !1, a.cancelBubble = !1) : (a.preventDefault(), a.stopPropagation())
};
ForeignKeyField.prototype.closeField = function (a) {
	this.lookupAutoCompleter && this.lookupAutoCompleter.clearSuggestions();
	InlineEditField.SimpleField.prototype.closeField.call(this, a);
	this.clearError();
	this.validationServletURI && (this.currentValue[0] && !a) && this.performValidation()
};
ForeignKeyField.prototype.performValidation = function () {
	var a = new QueryString;
	a.add(LookupValidationServlet.pLKENTITY_NAME, this.lookupEntityPrefix);
	a.add(LookupValidationServlet.pLKFIELD_NAME, this.lookupFieldEnumOrId);
	a.add(LookupValidationServlet.pENTITY_NAME, 1 < this.domains.length ? this.domainElement.options[this.domainElement.selectedIndex].value : this.domains[0][1]);
	a.add(LookupUi.pSEARCH_VALUE, this.currentValue[0]);
	if (sfdcPage.getReferredDomIds) {
		var b = sfdcPage.getReferredDomIds(this.id);
		b && a.add(LookupValidationServlet.pDEPDATA_NAME,
			dpdLkUtil.serialize(b, this.id))
	}
	a.add(EditElement.pBASE_NAME, this.id);
	var c = this;
	Sfdc.Ajax.get(this.validationServletURI + a.toString(), function (a) {
		a && (a = Util.evalAjaxServletOutput(a)) && a[LookupValidationServlet.pFILTER_RESULTS] && c.applyValidationChanges(a[LookupValidationServlet.pFILTER_RESULTS])
	});
	return !0
};
ForeignKeyField.prototype.reset = function (a) {
	InlineEditField.SimpleField.prototype.reset.apply(this, arguments);
	"" == this.initialValue[0] ? (this.editElement.value = LC.getLabel("Global", "click_lookup_icon"), this.isEmpty = !0, this.updateClearButtonStatus()) : "" != this.initialValue[0] && this.isEmpty && (this.isEmpty = !1, this.updateClearButtonStatus())
};
ForeignKeyField.prototype.lookupPickCalled = function (a, b) {
	this.isEmpty = !1;
	this.updateClearButtonStatus()
};
ForeignKeyField.prototype.updateClearButtonStatus = function () {
	this.clearButton && ("" != this.editElement.value && !this.isEmpty ? (this.clearButton.style.display = "inline-block", delStyleClass(this.editElement, "emptyDependentLookup")) : (this.clearButton.style.display = "none", addStyleClass(this.editElement, "emptyDependentLookup")))
};
ForeignKeyField.prototype.updateFieldValue = function (a, b) {
	var c = a;
	"" != a[0] && a[0] != LC.getLabel("Global", "click_lookup_icon") && (this.isEmpty = !1);
	if ("" === a[0] || this.isEmpty)
		c = ["", Udd.EMPTY_KEY];
	InlineEditField.SimpleField.prototype.updateFieldValue.call(this, c, b)
};
ForeignKeyField.prototype.applyValidationChanges = function (a) {
	a.error ? this.setError(a.error) : this.clearError()
};
ForeignKeyField.prototype.openLookup = function () {
	var a;
	a = 1 < this.domains.length ? this.domainElement.options[this.domainElement.selectedIndex].value : this.domains[0][1];
	var b = "";
	this.lookupEntityPrefix && (b = "\x26lkent\x3d" + this.lookupEntityPrefix + "\x26lkfield\x3d" + this.lookupFieldEnumOrId);
	if (sfdcPage.getReferredDomIds) {
		var c = sfdcPage.getReferredDomIds(this.id);
		c && (b += "\x26dplp\x3d" + encodeURIComponent(dpdLkUtil.serialize(c, this.id)))
	}
	sfdcPage.getEnhancedLookupParams && (b += sfdcPage.getEnhancedLookupParams(this.id));
	c = this.isEmpty ? "" : encodeURIComponent(this.editElement.value);
	this.useNewLookups ? (window.lookupElement || (window.lookupElement = new LookupElement), window.lookupElement.openLookup(UserContext.getUrl("/_ui/common/data/LookupPage?lknm\x3d") + this.id + "\x26lktp\x3d" + a + b, 670, "1", "\x26lksrch\x3d" + c)) : openLookup(UserContext.getUrl("/_ui/common/data/LookupPage?lknm\x3d") + this.id + "\x26lktp\x3d" + a + b, 670, "1", "\x26lksrch\x3d" + c)
};
ForeignKeyField.prototype.getValueFromEdit = function () {
	return [this.editElement.value, this.idElement.value]
};
ForeignKeyField.prototype.isDifferentValue = function (a) {
	return this.initialValue[0] != a[0] || this.initialValue[1] != a[1]
};
ForeignKeyField.prototype.formatValue = function () {
	return "" === this.currentValue[0] && this.initialValue[1] !== Udd.EMPTY_KEY ? this.getDeletedValue() : this.cleanValue(this.currentValue[0])
};
ForeignKeyField.prototype.updateEditElementImpl = function () {
	1 < this.domains.length && (this.domainElement.selectedIndex = this.initialDomain);
	this.editElement.value = this.currentValue[0];
	this.oldElement.value = this.currentValue[0];
	this.idElement.value = this.currentValue[1]
};
ForeignKeyField.prototype.addSaveData = function (a) {
	a[this.id] = this.currentValue[0];
	a[this.getComponentId(ForeignKeyField.ID)] = this.currentValue[1];
	this.created ? (a[this.getComponentId(ForeignKeyField.OLD)] = this.oldElement.value, this.isDifferentValue(this.getValueFromEdit()) && (a[this.id + EditElement.pMOD_SUFFIX] = 1)) : a[this.getComponentId(ForeignKeyField.OLD)] = this.currentValue[0]
};
function StaticEnumField(a, b, c, e, f, d) {
	this.init(a, b, c, e, f);
	this.picklistData = d.picklistData.slice();
	this.currentIndex = this.initialIndex = -1;
	this.showNone = !c;
	for (a = 0; a < this.picklistData.length; a++)
		if (this.picklistData[a][0] == this.initialValue) {
			this.currentIndex = this.initialIndex = a;
			break
		}
	-1 == this.initialIndex && (this.showNone = !0);
	this.showNone && (this.picklistData.unshift([LC.getLabel("SelectElement", "Required"), ""]), this.initialIndex++, this.currentIndex++)
}
StaticEnumField.prototype = new InlineEditField.SimpleField;
StaticEnumField.prototype.createEditElements = function () {
	this.editDiv.innerHTML = Util.createDynamicSelect({
			id : this.id
		}, this.picklistData, !1);
	this.editElement = getElementByIdCS(this.id);
	this.editElement.selectedIndex = this.initialIndex
};
StaticEnumField.prototype.getValueFromEdit = function () {
	return this.currentIndex = this.editElement.selectedIndex
};
StaticEnumField.prototype.formatValue = function () {
	var a = this.editElement.options[this.currentIndex].text;
	return a == LC.getLabel("SelectElement", "Required") ? this.getDeletedValue() : this.cleanValue(a)
};
StaticEnumField.prototype.isDifferentValue = function (a) {
	return this.initialIndex != a
};
StaticEnumField.prototype.updateEditElementImpl = function () {
	this.currentIndex = this.initialIndex;
	this.editElement.selectedIndex = this.currentIndex
};
StaticEnumField.prototype.addSaveData = function (a) {
	a[this.id] = this.created ? this.editElement.options[this.currentIndex].value : this.picklistData[this.currentIndex][1]
};
function DynamicEnumField(a, b, c, e, f, d) {
	a && (this.init(a, b, c, e, f), this.currentValue = this.initialValue = [f[0], f[1]], this.filterValue = f[2], this.picklistId = d.picklistId, this.controllerId = d.controller, this.controllerLabel = d.controllerLabel, this.waitForLoad = !0, this.currentIndex = this.initialIndex = 0, this.canceled = !0)
}
DynamicEnumField.prototype = new InlineEditField.SimpleField;
DynamicEnumField.prototype.isDifferentValue = function (a) {
	return this.initialValue[1] != a
};
DynamicEnumField.prototype.createEditElements = function () {
	var a = this.getHtml();
	this.editDiv.innerHTML = a.join("");
	this.initializePicklist();
	this.group || this.load()
};
DynamicEnumField.prototype.getHtml = function () {
	var a = [];
	this.controllerId && a.push("\x3cspan style\x3d'white-space: nowrap;'\x3e");
	a.push("\x3cspan\x3e\x3cselect id\x3d'");
	a.push(this.id);
	a.push("'\x3e\x3coption selected value\x3d\"");
	a.push(this.cleanValue(this.currentValue[1]));
	a.push('"\x3e');
	a.push(this.cleanValue(this.currentValue[0]));
	a.push("\x3c/select\x3e\x3c/span\x3e");
	if (this.controllerId) {
		var b = LC.getLabel("DependentElement", "dependsOn", this.controllerLabel);
		a.push("\x3cdiv class\x3d'" +
			(Sfdc.userAgent.isIE6 || Sfdc.userAgent.isIE7 ? "mouseOverInfoDependentFields" : "mouseOverInfoOuter") + "'\x3e\x3cimg title\x3d'" + b + "' alt\x3d'" + b + "' class\x3d'infoIcon' src\x3d'" + UserContext.getUrl("/s.gif") + "'\x3e\x3cdiv style\x3d'display: none;' class\x3d'mouseOverInfo'\x3e");
		a.push("\x3c/div\x3e\x3c/div\x3e")
	}
	return a
};
DynamicEnumField.prototype.initializePicklist = function () {
	var a = ' id\x3d"' + this.id + '"';
	picklist.picklists || (picklist.picklists = {});
	var b = null;
	if (this.required && this.controllerId)
		var c = this, b = function (a) {
			if (a && (a = a.container.firstChild) && c.editDiv && c.editDiv.className)
				a.disabled ? 0 > c.editDiv.className.indexOf("disabledPickList") && (c.editDiv.className += " disabledPickList") : c.editDiv.className = c.editDiv.className.replace("disabledPickList", "")
		};
	new picklistForInlineEditing(this.id, this.picklistId, this.controllerId,
		Util.convertOptionsForPicklistData([this.initialValue]), a, !this.required, !0, this.filterValue, b)
};
DynamicEnumField.prototype.createDummy = function () {
	var a = document.createElement("input");
	a.type = "hidden";
	a.id = this.id;
	a.value = this.currentValue[1];
	this.tableCell.appendChild(a);
	this.created = !0
};
DynamicEnumField.prototype.load = function () {
	picklist.picklists[this.id].onLoad();
	this.editElement = getElementByIdCS(this.id);
	this.currentIndex = this.initialIndex = this.editElement.selectedIndex;
	this.canceled = !1
};
DynamicEnumField.prototype.getValueFromEdit = function () {
	this.editElement = getElementByIdCS(this.id);
	this.currentIndex = this.editElement.selectedIndex;
	return this.editElement.options[this.currentIndex].value
};
DynamicEnumField.prototype.formatValue = function () {
	this.editElement = getElementByIdCS(this.id);
	var a = this.editElement.options[this.currentIndex].text;
	return a == LC.getLabel("SelectElement", "Required") ? "" === this.initialValue[1] ? "" : this.getDeletedValue() : this.cleanValue(a)
};
DynamicEnumField.prototype.reset = function () {
	this.group ? (this.currentValue = this.initialValue, delStyleClass(this.readDiv, "inlineEditModified"), this.changed = !1, this.canceled = !0, this.readDiv.innerHTML = this.initialHTML, this.undoButton && (this.undoButton.style.display = "none"), this.clearError(), this.updateEditElement()) : InlineEditField.SimpleField.prototype.reset.apply(this, arguments)
};
DynamicEnumField.prototype.updateEditElementImpl = function () {
	this.editElement = getElementByIdCS(this.id);
	this.currentIndex = this.initialIndex;
	this.editElement.selectedIndex = this.currentIndex;
	if (this.editElement.onchange)
		this.editElement.onchange()
};
DynamicEnumField.prototype.addSaveData = function (a) {
	var b = this.canceled && !this.changed;
	a[this.id] = (!this.created || b) && this.required && this.controllerId && !this.initialValue[1] ? picklistNAMarker : "string" == typeof this.currentValue ? this.currentValue : this.currentValue[1]
};
function EncryptedTextField(a, b, c, e, f, d) {
	this.init(a, b, c, e, f);
	this.maxLength = d.maxLength;
	this.masked = d.masked;
	this.encryptedElement = null
}
EncryptedTextField.prototype = new InlineEditField.SimpleField;
EncryptedTextField.prototype.createEditElements = function () {
	var a = [];
	a.push("\x3cinput type\x3d'text' id\x3d'");
	a.push(this.id);
	a.push("' value\x3d\"");
	a.push(this.cleanValue(this.currentValue));
	a.push("\" size\x3d'20' maxLength\x3d'");
	this.masked ? a.push("255") : a.push(this.maxLength);
	a.push("'\x3e");
	this.editDiv.innerHTML = a.join("");
	this.editElement = getElementByIdCS(this.id);
	this.masked && (this.encryptedElement = new EncryptedTextInputElement(this.editElement.id, this.maxLength, this.masked))
};
EncryptedTextField.prototype.reset = function () {
	InlineEditField.SimpleField.prototype.reset.apply(this, arguments);
	this.masked && this.encryptedElement && (this.encryptedElement.wasCleared = !1)
};
function HtmlStringPlusClobField(a, b, c, e, f, d) {
	this.init(a, b, c, e, f);
	this.saveOnEnter = !1;
	this.maxLength = d.maxLength;
	this.numCols = d.numCols;
	this.numRows = d.numRows;
	this.isHtml = d.isHtml;
	this.basePath = d.basePath;
	this.caseSafe18Id = d.caseSafe18Id;
	this.useCKEditor = d.useCKEditor;
	this.instanceName = (this.visualforce = d[InlineEditConstants.VF_ENABLED]) ? this.visualforce + "_" + this.caseSafe18Id : this.caseSafe18Id;
	this.visualforce && ("" === VisualforceConstants.RTA_LIBRARY && (VisualforceConstants.RTA_LIBRARY = d.RTA_LIBRARY),
		VFRTAEditor.getOrCreateRTAEditor())
}
HtmlStringPlusClobField.prototype = new InlineEditField.SimpleField;
HtmlStringPlusClobField.RICH_TEXT_EDITOR_ROW_MULTIPLIER = 17;
HtmlStringPlusClobField.prototype.createEditElements = function () {
	this.visualforce ? this.createEditElementsForVF() : this.createEditElementsForUI();
	if (Sfdc.userAgent.isChrome || Sfdc.userAgent.isSafari)
		this.editDiv.style.width = "100%"
};
HtmlStringPlusClobField.prototype.createEditElementsForUI = function () {
	var a = [];
	a.push("\x3ctextarea  id\x3d'");
	a.push(this.instanceName);
	a.push("' ");
	a.push("maxlength\x3d'");
	a.push(this.maxLength);
	a.push("' ");
	a.push("name\x3d'");
	a.push(this.instanceName);
	a.push("' ");
	a.push("cols\x3d'");
	a.push(this.numCols);
	a.push("' ");
	a.push("rows\x3d'");
	a.push(this.numRows);
	a.push("' ");
	a.push("type\x3d'text' wrap\x3d'soft'\x3e");
	a.push(this.cleanValueNoBR(this.currentValue));
	a.push("\x3c/textarea\x3e");
	this.editDiv.innerHTML =
		a.join("");
	this.editElement = getElementByIdCS(this.instanceName);
	this.createRTAEditor();
	this.elementToFocus = this.editElement
};
HtmlStringPlusClobField.prototype.createRTAEditor = function () {
	if (!this.visualforce && !this.useCKEditor) {
		var a = 0 < this.numRows ? this.numRows * HtmlStringPlusClobField.RICH_TEXT_EDITOR_ROW_MULTIPLIER : 0,
		a = new FCKeditor(this.instanceName, null, a);
		a.BasePath = this.basePath;
		a.Config.CustomConfigurationsPath = "/apexpages/richtext.config.js";
		a.ToolbarSet = "SalesforceBasic";
		a.Config.SkinPath = a.BasePath + "editor/skins/sfdc/";
		a.Config.DefaultLanguage = UserContext.language;
		a.Config.ImageUpload = !0;
		a.ReplaceTextarea();
		return a
	}
	(a =
			CKEDITOR.instances[this.editElement.id]) && a.destroy(!0);
	a = 0 < this.numRows ? this.numRows * HtmlStringPlusClobField.RICH_TEXT_EDITOR_ROW_MULTIPLIER : 200;
	return CKEDITOR.SFDC.createEditor({
		editEl : this.editElement,
		name : this.instanceName,
		height : a,
		toolbar : "SalesforceBasic",
		imageUploadUrl : "/_ui/common/request/servlet/RtaImageUploadServlet"
	})
};
HtmlStringPlusClobField.prototype.showEdit = function () {
	InlineEditField.SimpleField.prototype.showEdit.apply(this);
	this.visualforce && this.showEditForVF()
};
HtmlStringPlusClobField.prototype.hideEdit = function () {
	InlineEditField.SimpleField.prototype.hideEdit.apply(this);
	this.visualforce && this.hideEditForVF()
};
HtmlStringPlusClobField.prototype.getValueFromEdit = function () {
	var a = this.getRTAEditor();
	if (this.visualforce && !a.isReady())
		return this.currentValue;
	a = this.visualforce || this.useCKEditor ? a.getData() : a.GetHTML(!0);
	return this.sanatizeRawValue(a)
};
HtmlStringPlusClobField.prototype.sanatizeRawValue = function (a) {
	return a.replace(/\<br \/\>/g, "\x3cbr\x3e")
};
HtmlStringPlusClobField.prototype.formatValue = function () {
	return "" === this.currentValue && "" !== this.initialValue || "\x3cbr\x3e" == this.currentValue && "" !== this.initialValue ? this.getDeletedValue() : this.currentValue
};
HtmlStringPlusClobField.prototype.isDifferentValue = function (a) {
	var b = this.removeWhiteSpace(this.initialValue),
	c = this.removeWhiteSpace(a);
	return this.initialValue != a && b != c
};
HtmlStringPlusClobField.prototype.removeWhiteSpace = function (a) {
	return a.replace(/\s|&nbsp;/g, "")
};
HtmlStringPlusClobField.prototype.reset = function (a) {
	InlineEditField.SimpleField.prototype.reset.apply(this, arguments);
	var b = this.getRTAEditor();
	b && (this.visualforce || this.useCKEditor ? b.setData(this.initialValue) : b.GetHTML(!0))
};
HtmlStringPlusClobField.prototype.addSaveData = function (a) {
	a[this.caseSafe18Id] = this.currentValue
};
HtmlStringPlusClobField.prototype.getRTAEditor = function () {
	return this.visualforce ? VFRTAEditor.getOrCreateRTAEditor() : this.useCKEditor ? CKEDITOR.instances[this.instanceName] : FCKeditorAPI.GetInstance(this.instanceName)
};
HtmlStringPlusClobField.prototype.createEditElementsForVF = function () {
	this.editElement = document.createElement("textarea");
	this.editElement.id = this.instanceName;
	this.editElement.name = this.instanceName;
	this.editElement.resize = "none";
	this.elementToFocus = this.editElement;
	this.editDiv.appendChild(this.editElement)
};
HtmlStringPlusClobField.prototype.showEditForVF = function () {
	var a = 0 < this.numRows ? this.numRows * HtmlStringPlusClobField.RICH_TEXT_EDITOR_ROW_MULTIPLIER : 200;
	this.getRTAEditor().show({
		editEl : this.editElement,
		height : a,
		data : this.currentValue,
		imageUploadUrl : "/_ui/common/request/servlet/RtaImageUploadServlet"
	})
};
HtmlStringPlusClobField.prototype.shouldClose = function (a) {
	return !(a && a.target && (a.target && a.target.className && -1 < a.target.className.indexOf("cke_dialog") || a.target.parentNode && a.target.parentNode.className && -1 < a.target.parentNode.className.indexOf("cke_dialog")))
};
HtmlStringPlusClobField.prototype.hideEditForVF = function () {
	this.getRTAEditor().hide()
};
this.Sfdc || (Sfdc = {});
if ("undefined" === typeof SfdcFramework) {
	var SfdcFramework = function (l, b) {
		function w(a, c, d) {
			var e = !1;
			b.isArray(d) && (e = !q(d));
			h[a] = {
				pending : e,
				name : a,
				ctr : c,
				dependencies : d
			};
			e ? b.require(d, function () {
				var b = h[a];
				b && (b.pending = !1);
				t(a)
			}) : t(a)
		}
		function t(a) {
			if (a in m) {
				for (var c = m[a], d = [], e, f = 0; f < c.length; f++)
					e = r[c[f]], q(e) && d.push(c[f]);
				delete m[a];
				a = d
			} else
				a = [];
			if (b.isArray(a) && 0 < a.length)
				for (c = 0; c < a.length; c++)
					s(a[c], r[a[c]])
		}
		function s(a, c) {
			var d = [];
			b.isArray(c) || (c = []);
			for (var e, f, g = 0; g < c.length; g++)
				(e =
						h[c[g]]) && !e.pending && (f = s(e.ctr, e.dependencies)), d.push(f);
			return a.apply(this, d)
		}
		function q(a) {
			b.assert(b.isArray(a), "Required ModulesList is an Array");
			for (var c, d = 0; d < a.length; d++)
				if (c = a[d], b.isEmpty(c) && b.error("A specified ModuleName must be a non empty string"), c = h[c], !c || c.pending)
					return !1;
			return !0
		}
		b || (b = {});
		var u = l.Sizzle,
		n = l.document,
		v = [],
		x = 0,
		p = Object.prototype.toString,
		h = {},
		r = {},
		m = {};
		b.isDebug = function () {
			var a = n && (n.head || n.getElementsByTagName("head")[0]);
			return a && "true" === a.getAttribute("debug")
		}
		();
		b.userAgent = new function () {
			var a = l.navigator && l.navigator.userAgent || "",
			b = -1 != a.indexOf("Chromium"),
			d = -1 != a.indexOf("AppleWebKit"),
			e = d && -1 != a.indexOf("Chrome/"),
			f = d && !e,
			g = -1 != a.indexOf("Firefox/"),
			k = -1 != a.indexOf("MSIE "),
			h = k && parseInt(a.split("MSIE ")[1], 10) || -1;
			return {
				isIE : k,
				isIE10 : k && 10 == h,
				isIE9 : k && 9 == h,
				isIE8 : k && 8 == h,
				isIE7 : k && 7 == h,
				isIE6 : k && 6 == h,
				isWebkit : d,
				isChrome : e,
				isChromeFrame : e && "undefined" != typeof l.externalHost,
				isChromium : b,
				isSafari : f,
				isSafari3 : f && -1 != a.indexOf("Version/3"),
				isSafariIpad : d &&
				-1 != a.indexOf("iPad"),
				isSafariIOS : f && (-1 != a.indexOf("iPad") || -1 != a.indexOf("iPhone")),
				isFirefox : g,
				isFirefox3 : g && -1 != a.indexOf("Firefox/3"),
				isOpera : -1 != a.indexOf("Opera"),
				isNetscape : -1 != a.indexOf("Netscape/")
			}
		};
		b.ns = function () {
			for (var a = Array.prototype.slice.call(arguments), b = null; a.length; )
				for (var d = (a.shift() || "").toString().split("."), b = l; d.length; ) {
					var e = d.shift();
					if (!e.length)
						break;
					b[e] || (b[e] = {});
					b = b[e]
				}
			return b
		};
		b.provide = function (a, c) {
			if (a && c) {
				var d = b.resolve(a);
				if (!d) {
					var e = a.split("."),
					d =
						e.pop(),
					e = b.ns(e.join("."));
					c.$constructor && (b.assert(b.Class, "Sfdc.provide(): Sfdc.Class is required when providing $constructor 'classOrFunction' notation."), c = new b.Class(c));
					b.define(a, function () {
						return c
					});
					return e[d] = c
				}
				return d
			}
		};
		b.resolve = function (a, b) {
			var d = b || l;
			if (void 0 != a && a.length)
				for (var e = a.split("."); d && e.length; )
					d = d[e.shift()];
			return void 0 != d ? d : null
		};
		b.apply = function (a, b, d) {
			if (d)
				for (var e in b)
					b.hasOwnProperty(e) && (a[e] = b[e]);
			else
				for (var f in b)
					a.hasOwnProperty(f) || (a[f] = b[f]);
			return a
		};
		b.clone = function (a, c) {
			c = !!c;
			if (!a)
				return a;
			var d = b.isArray(a),
			e = b.isObject(a);
			if (!d && !e)
				return a;
			if (c) {
				if (d)
					for (var d = [], f = 0, e = a.length; f < e; f++)
						d.push(b.clone(a[f], !0));
				else
					for (f in d = {}, a)
						a.hasOwnProperty(f) && (d[f] = b.clone(a[f], !0));
				return d
			}
			return d ? a.slice() : b.apply({}, a)
		};
		b.each = function (a, c, d) {
			b.assert(b.Array, "Sfdc.each(): Sfdc.Array is required for calls to Sfdc.each().");
			if (b.isArray(a))
				return b.Array.forEach(a, c, d);
			if ("length" in a)
				return b.Array.forEach(b.Array.toArray(a), c, d);
			b.error("You tried to iterate over an object that is not yet supported.");
			return null
		};
		b.onReady = function (a) {
			b.assert(b.Dom, "Sfdc.onReady(): Sfdc.Dom is required for calls to Sfdc.onReady().");
			return b.Dom.onReady(a)
		};
		b.onload = function (a) {
			b.assert(b.Dom, "Sfdc.onload(): Sfdc.Dom is required for calls to Sfdc.onload().");
			return b.Dom.onload(a)
		};
		b.isArray = function (a) {
			return void 0 === a || null === a ? !1 : "[object Array]" === p.call(a)
		};
		b.isObject = function (a) {
			return null != a ? "object" === typeof a && !b.isArray(a) : !1
		};
		b.isString = function (a) {
			return "[object String]" === p.call(a)
		};
		b.isBoolean =
		function (a) {
			return "[object Boolean]" === p.call(a)
		};
		b.isFunction = function (a) {
			return "function" === typeof a
		};
		b.isNumber = function (a) {
			return "[object Number]" === p.call(a)
		};
		b.select = function (a, c) {
			b.assert(u, "Sfdc.select(): There is no selection engine specified.");
			return u(a, c)
		};
		b.get = function (a, c) {
			if (!b.isString(a))
				return a;
			var d = n;
			if (/^[>\.#\\]/.test(a))
				return b.select(a, c)[0] || null;
			c ? d = c.getElementById ? c : c.ownerDocument : c = d;
			d = d.getElementById(a);
			return null === d || d.getAttribute("id") === a ? d : c.all ? c.all[a] :
			null
		};
		b.assert = function (a, c) {
			if (void 0 === a || null === a || !1 === a)
				throw "error" in b && b.error(c), Error(c);
			return a
		};
		b.isDefAndNotNull = function (a) {
			return void 0 !== a && null !== a
		};
		b.on = function (a, c, d, e, f) {
			b.assert(b.Event, "Sfdc.on(): Sfdc.Event is required to use Sfdc.on().");
			b.assert(a, "Sfdc.on(): 'element' must be a valid Object or Node.");
			b.assert(c, "Sfdc.on(): 'eventName' must be a valid String.");
			b.Event.add(a, c, d, e, f);
			return b
		};
		b.un = function (a, c, d, e) {
			b.assert(b.Event, "Sfdc.un(): Sfdc.Event is required to use Sfdc.un().");
			b.assert(a, "Sfdc.un(): 'element' must be a valid Object or Node.");
			b.assert(c, "Sfdc.un(): 'eventName' must be a valid String.");
			b.Event.remove(a, c, d, e);
			return b
		};
		b.getConst = function (a, c) {
			b.assert(void 0 !== l[a], "That Constants group does not exist.");
			return l[a][c]
		};
		b.getUID = function (a) {
			if (a.getAttribute) {
				var c = a.getAttribute("data-uidSfdc");
				if (c)
					return c;
				c = b.newUID();
				a.setAttribute("data-uidSfdc", c);
				return c
			}
			return (c = a["data-uidSfdc"]) ? c : a["data-uidSfdc"] = b.newUID()
		};
		b.hasUID = function (a) {
			return a ?
			a.getAttribute ? null != a.getAttribute("data-uidSfdc") : a.hasOwnProperty ? a.hasOwnProperty("data-uidSfdc") : "data-uidSfdc" in a : !1
		};
		b.newUID = function () {
			return ++x
		};
		b.log = function (a, b, d) {
			void 0 !== a && v.push({
				msg : a,
				level : b,
				args : d
			});
			return v
		};
		b.isEmpty = function (a) {
			if (b.isObject(a)) {
				for (var c in a)
					if (a.hasOwnProperty(c))
						return !1;
				return !0
			}
			return null === a || void 0 === a || "" === a || b.isArray(a) && !a.length
		};
		b.inherits = function (a, c) {
			if (!b.isFunction(a))
				throw Error("Sfdc.inherit(): 'type' must be a valid Function pointer.");
			for (var d = c; d; ) {
				if (a === d || d instanceof a || a === d.constructor)
					return !0;
				d = d.prototype
			}
			return !1
		};
		b.implies = function (a, c, d) {
			if (!b.isObject(a))
				throw Error("Sfdc.implies(): 'contract' must be a valid Object.");
			if (null == c)
				return d && (d.reason = "Instance was undefined."), !1;
			var e = null,
			f = null,
			g;
			for (g in a) {
				if (void 0 === c[g])
					return d && (d.reason = b.String.format("Instance member not implemented. Expected: '{0}{1}'.", [g, b.isFunction(a[g]) ? b.String.format("({0})", [b.Function.getParameters(a[g]).join(", ")]) : ""])),
					!1;
				if (b.isFunction(a[g])) {
					if (b.inherits(a[g], c[g]))
						continue;
					if (b.isFunction(c[g]) && b.isDebug && (e = b.Function.getParameters(a[g]).join(", "), f = b.Function.getParameters(c[g]).join(", "), e != f))
						return d && (d.reason = b.String.format("Instance member signature mismatch on '{0}()'. Expected '{0}({1})', found '{0}({2})'.", [g, e, f])), !1
				}
				if (b.isObject(a[g])) {
					if (null !== c[g] && !b.implies(a[g], c[g], d))
						return d && (d.reason = b.String.format("Instance member type mismatch on '{0}': {1}", [g, d.reason])), !1
				} else if (typeof a[g] !==
					typeof c[g])
					return d && (d.reason = b.String.format("Instance member type mismatch on '{0}'. Expected '{1}', found '{2}'.", [g, typeof a[g], typeof c[g]])), !1
			}
			return !0
		};
		b.isAssignableFrom = function (a, c, d) {
			if (void 0 == a)
				throw Error("Sfdc.isAssignableFrom(): 'type' must be a valid Function or Object.");
			if (void 0 != c)
				switch (typeof a) {
				case "object":
					if (a.constructor != Object && b.inherits(a.constructor, c) || b.implies(a, c, d))
						return !0;
					break;
				case "function":
					if (b.inherits(a, c))
						return !0
				}
			return !1
		};
		b.define = function (a, c, d) {
			b.assert(b.isString(a) &&
				0 < a.length, "ModuleName is required and must be a string of length greater than 0.");
			b.isFunction(c) ? (d = c, c = null) : (b.assert(b.isFunction(d), "ModuleConstructor parameter must be a function that returns an instance of the module."), b.assert(b.isArray(c), "Dependencies for your module must be specified as an Array."));
			var e = h[a];
			e ? (c = (e.dependencies || []).toString() === (c || []).toString(), (e.ctr.toString() !== d.toString() || !c) && b.error("Cannot redefine an existing module (" + a + ").")) : w(a, d, c)
		};
		b.require = function (a,
			c) {
			b.assert(!b.isEmpty(a), "Required Modules are required");
			b.isArray(a) || (a = Array.prototype.slice.call(arguments), c = a.pop());
			b.assert(b.isFunction(c), "Callback must be a function");
			if (q(a))
				s(c, a);
			else {
				var d = c,
				e = a;
				r[d] = e;
				for (var f, g, k = 0; k < e.length; k++)
					if (f = e[k], g = h[f], !g || g.pending)
						!1 === f in m && (m[f] = []), m[f].push(d)
			}
		};
		b.error = function (a) {
			throw Error(a);
		};
		return b
	};
	new SfdcFramework(this, Sfdc)
};
function ListViewport(a, b, c, d, e, f, h, g, m, l) {
	a && (this.domId = a, this.listId = d || a, this.type = b, this.payload = c, this.inlineEditData = this.filter = null, this.customizable = "undefined" == typeof e ? !0 : e, this.rowsPerPage = f || null, this.height = h || null, this.width = g || null, this.bottomBuffer = 10, this.draggable = m, this.vf = l, this.offPageIds = this.printLink = this.listButtons = this.exception = this.rolodexState = this.pageState = this.listSelect = this.bottomNav = this.listBody = this.rolodex = this.filterLinks = this.subNav = this.topNav = this.listViewport =
			this.wrapper = null, this.allowColumnResize = this.allowColumnMove = !0, this.divisionLabel = null, this.inOverlay = !1, this.shouldSizeToViewport = !Sfdc.userAgent.isSafariIpad || this.vf || this.inOverlay, this.constrainHeightToViewport = !0, this.defaultScrollBarWidth = 0, this.showFeedListView = !1, this.feedLoading = this.loading = this.initialEntityButtons = null, this.initialRenderDone = !1, this.searchContainer = this.searchBox = this.printURL = this.retURL = this.linkTemplates = this.grid = this.paginator = this.saving = null, this.lastSearchTerm =
			"", this.resizeTimer = 0, this.winHeight = Sfdc.Window.getWindowHeight(), this.winWidth = Sfdc.Window.getWindowWidth(), this.url = UserContext.getUrl("/_ui/common/list/ListServlet"), this.userPrefUrl = UserContext.getUrl("/_ui/common/request/servlet/PerEntityUserPreferenceServlet"), this.xhr = null, this.waitingForXhr = !1, this.rolodexIndex = null, this.trace = (new QueryString).get("trace"), ListViewport.addListViewport(this), window.sfdcPage.prependToOnloadQueue(this.init.bind(this)), window.sfdcPage.appendToOnloadQueue(this.redefineSidebarPin.bind(this)),
		window.sfdcPage.appendToOnResizeQueue(this.queueResize.bind(this)))
}
ListViewport.prototype.getShowRefreshLink = function () {
	return !0
};
ListViewport.DEFAULT_COLUMN_WIDTH = 125;
ListViewport.INIT_MARK = "ListViewportInit";
ListViewport.UPDATE_PAGE_MARK = "UpdatePageStart";
ListViewport.prototype.shrinkStore = function () {
	if (this.grid)
		try {
			this.grid.getStore().filterBy(function (a, c) {
				return 0 == this.indexOf(a)
			})
		} catch (a) {}

};
ListViewport.prototype.getDelayedMethod = function (a, b, c) {
	return function () {
		setTimeout(function () {
			a.apply(b || this, arguments)
		}, c || 50)
	}
};
ListViewport.prototype.unshrinkStore = function () {
	this.grid && this.grid.getStore().clearFilter()
};
ListViewport.prototype.sizeIfNoData = function () {
	this.grid && 0 == this.grid.getStore().getTotalCount() && (this.grid.getGridEl().query(".x-grid-empty")[0].style.width = this.grid.getColumnModel().getTotalWidth() + "px")
};
ListViewport.prototype.init = function () {
	Jiffy.mark(ListViewport.INIT_MARK);
	this.defaultScrollBarWidth = Sfdc.Dom.getScrollBarWidth();
	Scontrol.prototype.getSelectedRecordIdsFromForm = function () {
		return this.grid.getSelectionModel().selections.keys
	}
	.bind(this);
	this.vf && (this.reRender = window[this.domId.replace(":", "_") + "_reRender"], this.onComplete = window[this.domId.replace(":", "_") + "_onComplete"]);
	this.shouldSizeToViewport && (!Ext.isIE6 && !Ext.isIE7) && (document.body.style.overflowY = "scroll", document.body.style.overflowX =
			"auto");
	this.getReferences();
	this.initializeLinkTemplates();
	this.wireSearchBox();
	var a = Ext.get(this.toggleButton);
	a && (this.showFeedListView = a.child(".chatterToggle").hasClass("selected") ? !0 : !1);
	this.payload && (this.initialEntityButtons = this.payload.entityButtons);
	this.showFeedListView ? (this.feedContainer.style.display = "", this.payload.filter && this.payload.inlineEditData && this.loadFilter(this.payload.filter, this.payload.inlineEditData), this.retURL = this.payload.retURL, this.payload.csrfToken && (this.csrfToken =
				this.payload.csrfToken), this.updateFilterLinks(), this.updateButtons(this.listButtons, this.initialEntityButtons, [], !0), this.rolodex.style.display = "none", this.listBody.style.display = "none", this.bottomNav.style.display = "none", this.printLink && (this.printLink.style.display = "none"), this.printLinkDisabled && (this.printLinkDisabled.style.display = ""), this.getFeedListView(this.listSelect ? this.listSelect.value : this.listId)) : (this.feedContainer.style.display = "none", a = new QueryString, "" == this.pageState.value &&
		"" == this.rolodexState.value && !a.get("page") && !a.get("rolodexIndex") ? (Sfdc.Dom.cleanListeners(this.listBody), this.loading.show(), this.updatePage(this.payload)) : this.getListData({
			listid : this.listSelect ? this.listSelect.value : this.listId,
			action : "newfilter",
			page : this.pageState.value || a.get("page"),
			rolodexIndex : this.rolodexState.value || a.get("rolodexIndex"),
			rowsPerPage : this.rowsPerPage
		}));
	Jiffy.measure("listInitFinished", ListViewport.INIT_MARK)
};
ListViewport.prototype.getActionsListFromCellHTML = function (a) {
	var b = this.grid.getColumnModel().getIndexById(ListView.ACTION_COLUMN);
	a = this.grid.getView().getCell(a, b);
	var c = [];
	(new Ext.Element(Ext.DomHelper.createDom({
				tag : "div",
				html : a.innerHTML
			}))).first().select("\x3e *:any(a|span|div)").each(function (a) {
		if (a.dom) {
			var b = new Ext.Element(Ext.DomHelper.createDom({
						tag : "div"
					}));
			b.appendChild(a.dom);
			b.select("[id^\x3dext-gen]").each(function (a) {
				a.dom && a.dom.removeAttribute && a.dom.removeAttribute("id")
			});
			c.push(b.dom.innerHTML)
		}
	});
	return c
};
ListViewport.prototype.updateActionColumnInStore = function (a) {
	var b = this.getActionsListFromCellHTML(a);
	b && b.length && this.grid.getStore().getAt(a).set(ListView.ACTION_COLUMN, b)
};
ListViewport.prototype.getReferences = function () {
	this.wrapper = document.getElementById(this.domId + "_wrapper");
	this.listViewport = document.getElementById(this.domId + "_listViewport");
	this.topNav = document.getElementById(this.domId + "_topNav");
	this.subNav = document.getElementById(this.domId + "_subNav");
	this.filterLinks = document.getElementById(this.domId + "_filterLinks");
	this.rolodex = document.getElementById(this.domId + "_rolodex");
	this.listBody = document.getElementById(this.domId + "_listBody");
	this.bottomNav = document.getElementById(this.domId +
			"_bottomNav");
	this.listSelect = document.getElementById(this.domId + "_listSelect");
	this.pageState = document.getElementById(this.domId + "_pageState");
	this.rolodexState = document.getElementById(this.domId + "_rolodexState");
	this.exception = document.getElementById(this.domId + "_exception");
	this.listButtons = document.getElementById(this.domId + "_listButtons");
	this.printLink = document.getElementById(this.domId + "_printLink");
	this.printLinkDisabled = document.getElementById(this.domId + "_printLinkDisabled");
	this.offPageIds =
		document.getElementById(this.domId + "_offPageIds");
	this.divisionLabel = document.getElementById(this.domId + "_divisionLabel");
	this.searchContainer = document.getElementById(this.domId + "_search");
	this.toggleButton = document.getElementById(this.domId + "_toggleButton");
	this.feedBody = document.getElementById(this.domId + "_feedBody");
	this.feedContainer = document.getElementById(this.domId + "_feedContainer");
	this.loading = new LoadingScreen(this.listBody, LC.getLabel("Global", "loading"), this.domId + "_loading");
	this.loading.hide =
		this.getDelayedMethod(this.loading.hide, this.loading, 50);
	this.saving = new LoadingScreen(this.listBody, LC.getLabel("Buttons", "saving"), this.domId + "_saving");
	this.feedLoading = new LoadingScreen(this.feedContainer, LC.getLabel("Global", "loading"), this.domId + "_feedLoading")
};
ListViewport.prototype.initializeLinkTemplates = function () {
	this.linkTemplates = {
		newLink : (new Ext.Template('\x3ca id\x3d"create-new-view" href\x3d"', this.getNewLink(), '"\x3e', LC.getLabel("Filter", "new"), "\x3c/a\x3e")).compile(),
		editLink : (new Ext.Template('\x3ca href\x3d"', this.getEditLink(), '"\x3e', LC.getLabel("Filter", "edit"), "\x3c/a\x3e")).compile(),
		cloneLink : (new Ext.Template('\x3ca href\x3d"', this.getEditLink(), '"\x3e', LC.getLabel("Filter", "clone"), "\x3c/a\x3e")).compile(),
		deleteLink : (new Ext.Template("\x3ca onclick\x3d\"return confirm('",
				LC.getLabel("Filter", "DeleteConfirm"), "')\" ", 'href\x3d"', UserContext.getUrl("/setup/own/deleteredirect.jsp?id\x3d{filterId}\x26delID\x3d{filterId}\x26retURL\x3d{delRetURL}\x26_CONFIRMATIONTOKEN\x3d{csrfToken}{dtpParam}"), '"\x3e', LC.getLabel("Buttons", "del"), "\x3c/a\x3e")).compile(),
		refreshLink : (new Ext.Template('\x3cinput type\x3d"button" id\x3d"{domId}_refresh" src\x3d"s.gif" href\x3d"javascript:void(0)"', 'onclick\x3d"javascript:{jsref}.refreshList()"', 'class\x3d"btn refreshListButton"', "title\x3d'",
				LC.getLabel("Filter", "refresh"), "'", "/\x3e")).compile()
	}
};
ListViewport.prototype.getNewLink = function () {
	return UserContext.getUrl("/ui/list/FilterEditPage?ftype\x3d{filterType}\x26retURL\x3d{retURL}{dtpParam}")
};
ListViewport.prototype.getEditLink = function () {
	return UserContext.getUrl("/ui/list/FilterEditPage?id\x3d{filterId}\x26retURL\x3d{retURL}{dtpParam}")
};
ListViewport.prototype.refreshList = function () {
	this.showFeedListView ? this.getFeedListView(this.listSelect ? this.listSelect.value : this.listId) : (this.grid.getSelectionModel().clearAllSelections(), this.refreshLink && (Ext.fly(this.refreshLink).addClass("refreshListButtonNeeded"), this.refreshLink.title = LC.getLabel("Filter", "refresh")), this.getListData({
			page : this.paginator.currentPage,
			rolodexIndex : this.rolodexIndex
		}))
};
ListViewport.prototype.search = function (a) {
	a != this.lastSearchTerm && (this.lastSearchTerm = a, this.getListData({
			fromSearch : !0,
			search : a,
			rolodexIndex : this.rolodexIndex
		}))
};
ListViewport.prototype.toggleFeedListView = function (a) {
	a != this.showFeedListView && (this.showFeedListView = !this.showFeedListView, Sfdc.Ajax.post(this.userPrefUrl, function (a) {}, {
			data : {
				val : this.showFeedListView ? "1" : "0",
				which : "DISPLAY_FEED_LIST_VIEW",
				entity : this.filter.entityType
			}
		}), a = Ext.get(this.toggleButton), this.showFeedListView ? (a.child(".chatterToggle").replaceClass("clickable", "selected"), a.child(".chatterToggle").child(".toggleLink").set({
				title : LC.getLabel("Filter", "feedViewToggleToolTip") + " - " +
				LC.getLabel("MultiSelectElement", "Selected")
			}), a.child(".listToggle").replaceClass("selected", "clickable"), a.child(".listToggle").child(".toggleLink").set({
				title : LC.getLabel("Filter", "listViewToggleToolTip")
			})) : (a.child(".listToggle").replaceClass("clickable", "selected"), a.child(".listToggle").child(".toggleLink").set({
				title : LC.getLabel("Filter", "listViewToggleToolTip") + " - " + LC.getLabel("MultiSelectElement", "Selected")
			}), a.child(".chatterToggle").replaceClass("selected", "clickable"), a.child(".chatterToggle").child(".toggleLink").set({
				title : LC.getLabel("Filter",
					"feedViewToggleToolTip")
			})), this.showFeedOrListView(this.listSelect ? this.listSelect.value : this.listId))
};
ListViewport.prototype.showFeedOrListView = function (a) {
	this.showFeedListView ? (this.feedContainer.style.display = "", this.printLinkDisabled && (this.printLinkDisabled.style.display = ""), this.printLink && (this.printLink.style.display = "none"), this.rolodex && (this.rolodex.style.display = "none"), this.listBody.style.display = "none", this.bottomNav.style.display = "none", this.updateButtons(this.listButtons, this.initialEntityButtons, [], !0), this.getFeedListView(a, this.filter.entityType)) : (this.feedContainer.style.display =
			"none", this.printLinkDisabled && (this.printLinkDisabled.style.display = "none"), this.printLink && (this.printLink.style.display = ""), this.rolodex && (this.rolodex.style.display = ""), this.listBody.style.display = "", this.bottomNav.style.display = "", this.getListData({
			listid : a,
			action : "newfilter"
		}))
};
ListViewport.prototype.getListDataPost = function (a) {
	var b = new QueryString,
	b = {
		action : a.action || "filter",
		filterId : a.listid || (this.filter ? this.filter.id : this.listId),
		filterType : this.filter ? this.filter.type : this.type,
		page : a.page || 1,
		rowsPerPage : null != a.rowsPerPage ? a.rowsPerPage : this.rowsPerPage || "",
		search : null != a.search ? a.search : "",
		sort : null != a.sort ? a.sort : "",
		rolodexIndex : null != a.rolodexIndex ? a.rolodexIndex : -1,
		vf : this.vf,
		retURL : null !== this.retURL ? this.retURL : window.location.pathname,
		isdtp : b.get("isdtp")
	};
	"setColumns" == b.action && (b.rerunFilter = a.rerunFilter, b.cols = a.cols, b.widths = a.widths);
	return b
};
ListViewport.prototype.getListData = function (a) {
	this.loading.show();
	this.xhr && (this.xhr.onreadystatechange = function () {}, this.xhr.abort());
	a = a || {};
	a = this.getListDataPost(a);
	"newfilter" == a.action && (this.filterLinks && Sfdc.Dom.updateHTML(this.filterLinks, "\x26nbsp;"), this.rolodex && (this.rolodex.style.visibility = "hidden"), this.listButtons && Sfdc.Dom.updateHTML(this.listButtons, ""), document.body.focus());
	this.trace && (a.trace = this.trace);
	this.waitingForXhr = !0;
	this.xhr = Sfdc.Ajax.request(this.url, {
			method : "POST",
			context : this,
			data : a,
			escape : encodeURIComponent,
			success : function (a) {
				this.xhrHandler(a)
			},
			failure : function (a) {
				this.xhrErrorHandler(a)
			}
		})
};
ListViewport.prototype.xhrHandler = function (a) {
	this.waitingForXhr = !1;
	var b;
	try {
		b = Util.evalAjaxServletOutput(a)
	} catch (c) {
		window.location.reload()
	}
	this.updatePage(b)
};
ListViewport.prototype.xhrErrorHandler = function (a) {
	this.waitingForXhr = !1;
	var b;
	try {
		b = Util.evalAjaxServletOutput(a)
	} catch (c) {
		window.location.reload()
	}
	this.updatePage(b)
};
ListViewport.prototype.updatePage = function (a) {
	Jiffy.mark(ListViewport.UPDATE_PAGE_MARK, !1);
	if (a)
		if (a.exTitle && a.exDesc)
			this.handleException(a);
		else {
			if (this.trace && a.trace) {
				var b = Ext.get("sqltrace");
				Ext.DomHelper.overwrite(b, a.trace)
			}
			a.filter && a.inlineEditData && (this.loadFilter(a.filter, a.inlineEditData), Jiffy.measure("inlineEditDataLoaded", ListViewport.UPDATE_PAGE_MARK));
			this.retURL = a.retURL;
			this.rowsPerPage = a.rowsPerPage;
			a.csrfToken && (this.csrfToken = a.csrfToken);
			a.dtpParam && (this.dtpParam = a.dtpParam);
			this.drawListData(a.listData, a.columnWidths, a, !0);
			Jiffy.measure("drawListDataFinished", ListViewport.UPDATE_PAGE_MARK);
			this.updateFilterLinks(a.extraFilterLinks);
			this.updateButtons(this.listButtons, a.entityButtons, a.listButtons, !0);
			this.updatePrintLink(a.printURL);
			this.updateSortState(a.sortState);
			this.updateRolodex(a.rolodexIndex, a.sortState);
			this.updatePaginator(a);
			this.updateStateFields();
			this.updateDivisionLabel(a.divisionLabel);
			Jiffy.measure("updatesFinished", ListViewport.UPDATE_PAGE_MARK);
			this.resize();
			Jiffy.measure("resizeFinished", ListViewport.UPDATE_PAGE_MARK);
			this.exception.style.display = "";
			this.reRender && this.xhr && this.reRender();
			this.onComplete && this.onComplete();
			this.xhr && (this.xhr.onreadystatechange = function () {}, this.xhr = null);
			Jiffy.measure("updatePageFinished", ListViewport.UPDATE_PAGE_MARK)
		}
};
ListViewport.prototype.handleException = function (a) {
	var b = [];
	b.push("\x3cdiv class\x3d'title'\x3e");
	b.push(a.exTitle);
	b.push("\x3c/div\x3e");
	b.push("\x3cbr/\x3e");
	b.push(a.exDesc);
	Sfdc.Dom.updateHTML(this.exception, b.join(""));
	this.exception.style.display = "block";
	a.filter ? (this.filter = a.filter, this.updateFilterLinks(a.extraFilterLinks)) : this.filterLinks && (this.filterLinks.style.display = "none");
	this.listButtons && (this.listButtons.style.display = "none");
	this.printLink && (this.printLink.style.visibility =
			"hidden");
	this.rolodex && "hidden" != this.rolodex.style.visibility && (this.rolodex.style.visibility = "hidden");
	this.paginator || this.updatePaginator(a);
	this.paginator.draw(!0);
	this.loading.hide()
};
ListViewport.prototype.updateDivisionLabel = function (a) {
	a && this.divisionLabel && Sfdc.Dom.updateHTML(this.divisionLabel, a)
};
ListViewport.prototype.getDefaultText = function () {
	return LC.getLabel("ReportBuilder", "quickFindDefaultText")
};
ListViewport.prototype.wireSearchBox = function () {
	this.searchContainer && (this.searchBox = new Sfdc.html.QuickfindInput({
				renderTo : Ext.get(this.searchContainer),
				searchFunction : this.search,
				clearFunction : this.search.createDelegate(this, [""]),
				scope : this,
				emptyText : this.getDefaultText(),
				buffer : 300
			}), this.searchBox.on("keydown", function (a, b) {
			b.getCharCode() == b.ENTER && b.stopEvent()
		}), this.searchBox.el.dom.setAttribute("title", LC.getLabel("Filter", "quickfindInputLabel")))
};
ListViewport.prototype.updateButtons = function (a, b, c, d) {
	if (a) {
		var e = !!b.length,
		f = !!c.length,
		h = [];
		document.all && h.push('\x3cspan style\x3d"display:none" id\x3d"', this.domId, '_REMOVE"\x3e.\x3c/span\x3e');
		var g = [];
		e && g.push(b.join(""));
		f && g.push(c.join(""));
		(d = d && this.getShowRefreshLink()) && g.push(this.linkTemplates.refreshLink.apply(this.getLinkTemplateData()));
		h.push(this.pipeButtonSets(g).join(""));
		Sfdc.Dom.updateHTML(a, h.join(""));
		document.all && document.getElementById(this.domId + "_REMOVE").removeNode(!0);
		Util.evalScriptsUnderElement(a);
		a.style.display = "";
		this.refreshLink = d ? document.getElementById(this.domId + "_refresh") : null
	}
};
ListViewport.prototype.pipeButtonSets = function (a) {
	var b = [];
	b.push('\x3cul class\x3d"piped"\x3e');
	for (i = 0; i < a.length; i++)
		i == a.length - 1 ? b.push('\x3cli class\x3d"lastItem"\x3e' + a[i] + "\x3c/li\x3e") : b.push("\x3cli\x3e" + a[i] + "\x3c/li\x3e");
	b.push("\x3c/ul\x3e");
	return b
};
ListViewport.prototype.updatePrintLink = function (a) {
	if (this.printLink) {
		a = a.split("?");
		var b = [];
		b.push("javascript:printWin('");
		b.push(a[0]);
		b.push("/x?");
		b.push(a[1]);
		b.push("')");
		this.printLink.href = b.join("");
		this.printLink.style.visibility = ""
	}
};
ListViewport.prototype.updateStateFields = function () {
	this.pageState.value = this.paginator.currentPage;
	this.rolodexState.value = this.rolodexIndex
};
ListViewport.prototype.getLinkTemplateData = function () {
	return {
		filterType : this.filter.type,
		filterId : this.filter.id,
		domId : this.domId,
		jsref : "ListViewport.instances['" + this.domId + "']",
		retURL : encodeURIComponent(this.retURL),
		delRetURL : this.vf ? this.retURL : "%2F" + this.filter.entityType,
		csrfToken : this.csrfToken,
		dtpParam : this.dtpParam ? "\x26isdtp\x3d" + this.dtpParam : ""
	}
};
ListViewport.prototype.updateFilterLinks = function () {
	if (this.filterLinks) {
		var a = this.getLinkTemplateData(),
		b = [];
		this.customizable && (this.filter.editable ? (b.push(this.linkTemplates.editLink.apply(a)), b.push(this.linkTemplates.deleteLink.apply(a))) : this.filter.isCloneable && b.push(this.linkTemplates.cloneLink.apply(a)), this.filter.isCreateNewDisplayed && b.push(this.linkTemplates.newLink.apply(a)));
		Sfdc.Dom.updateHTML(this.filterLinks, b.join(" | "));
		this.filterLinks.style.display = ""
	}
};
ListViewport.prototype.updateSortState = function (a) {
	var b = this.grid.getView(),
	c = b.sortState;
	(b.sortState = a) ? (c = this.grid.getColumnModel().findColumnIndex(a.field), -1 != c && b.updateSortIcon(c, a.dir)) : c && c.field && b.mainHd.select("td").removeClass(b.sortClasses)
};
ListViewport.prototype.updateRolodex = function (a, b) {
	this.rolodexIndex = a;
	if (this.rolodex) {
		var c = this.rolodex.childNodes,
		d = this.grid.getColumnModel(),
		e = -1;
		b && (e = d.findColumnIndex(b.field));
		-1 != e && d.getColumnById(d.getColumnId(e)).useRolodex ? "hidden" == this.rolodex.style.visibility && (this.rolodex.style.visibility = "") : "hidden" != this.rolodex.style.visibility && (this.rolodex.style.visibility = "hidden");
		for (d = 0; d < c.length; d++)
			c[d].firstChild.className = d == a || -1 == a && d == c.length - 1 ? "listItemSelected" : "listItemPad"
	}
};
ListViewport.prototype.updatePaginator = function (a) {
	this.paginator ? this.paginator.setState({
		currentPage : a.page,
		recordsPerPage : a.rowsPerPage,
		totalRecords : a.totalRowCount,
		capped : a.capped,
		hasCheckbox : this.hasCheckbox
	}) : this.paginator = this.createPaginator(a)
};
ListViewport.prototype.createPaginator = function (a) {
	return new ListPaginator({
		listDomId : this.domId,
		containerIds : [this.domId + "_bottomNav"],
		recordsPerPage : a.rowsPerPage,
		totalRecords : a.totalRowCount,
		capped : a.capped,
		currentPage : a.page,
		hasCheckbox : this.hasCheckbox,
		handler : function (a) {
			this.getListData({
				page : a,
				fromPaginator : !0,
				rolodexIndex : this.rolodexIndex
			})
		}
		.bind(this)
	})
};
ListViewport.prototype.loadFilter = function (a, b) {
	this.filter = a;
	b.viewport = this;
	b.shownColumns = a.shownColumns;
	this.inlineEditData = this.createNewListInlineEditData(b)
};
ListViewport.prototype.createNewListInlineEditData = function (a) {
	return new ListInlineEditData(a)
};
ListViewport.prototype.buildDataStore = function (a) {
	for (var b = a[ListView.ID_COLUMN], c = a[ListView.ACTION_COLUMN], d = Array(b.length), e = this.filter.shownColumns, f = 0; f < d.length; f++) {
		d[f] = [];
		d[f].push(b[f]);
		null != c[f] && (this.hasActions = !0);
		d[f].push(c[f]);
		for (var h, g = 0; g < e.length; g++)
			h = e[g].columnName, d[f].push(this.formatColumnValue(a, h, f))
	}
	return d
};
ListViewport.prototype.formatColumnValue = function (a, b, c) {
	return a[b][c]
};
ListViewport.prototype.getSelectionModel = function () {
	return new Sfdc.grid.CheckboxSelectionModel({
		menuDisabled : !0,
		width : 21
	})
};
ListViewport.prototype.drawListData = function (a, b, c, d) {
	this.drawListDataWithActionWidth(a, b, c, 1, !1);
	d || this.resize()
};
ListViewport.prototype.drawListDataWithActionWidth = function (a, b, c, d, e, f) {
	this.hasActions = !1;
	var h = this.buildDataStore(a),
	g = this.filter.shownColumns;
	f = f || !1;
	this.hasCheckbox = this.filter.showCheckBox || this.inlineEditData.isMassEditable;
	var m = this.getSelectionModel();
	c.sortState && (m.titleFieldKey = c.sortState.field);
	var l = [],
	k = [];
	this.hasCheckbox && k.push(m);
	l.push({
		name : ListView.ID_COLUMN
	});
	k.push({
		header : "ID",
		hidden : !0,
		dataIndex : ListView.ID_COLUMN,
		id : ListView.ID_COLUMN
	});
	l.push({
		name : ListView.ACTION_COLUMN
	});
	k.push(this.buildActionColumn(d, e));
	d = b || [];
	for (e = 0; e < g.length; e++)
		d[e] || (d[e] = this.getDefaultColumnWidth(g[e])), l.push({
			name : g[e].columnName
		}), k.push(this.buildColumnConfig(g[e], d[e]));
	for (e = this.hasCheckbox ? 1 : 0; e < k.length; ++e)
		k[e].header && (k[e].tooltip = k[e].tooltip || k[e].header);
	if (this.grid)
		if (f || this.filter.id + "_grid" != this.grid.id)
			this.grid.getSelectionModel().clearAllSelections(), l = new Ext.data.SimpleStore({
					id : 0,
					fields : l
				}), k = new Ext.grid.ColumnModel(k), this.grid.reconfigure(l, k), this.grid.id =
				this.filter.id + "_grid";
		else {
			m = this.grid.colModel.getColumnById(ListView.ACTION_COLUMN);
			if ((f = this.grid.colModel.getColumnById(ListView.CHECKBOX_COLUMN)) && c.sortState)
				f.titleFieldKey = c.sortState.field;
			m && m.hidden === this.hasActions && (l = new Ext.data.SimpleStore({
						id : 0,
						fields : l
					}), k = new Ext.grid.ColumnModel(k), this.grid.reconfigure(l, k))
		}
	else
		c = {
			emptyText : this.getNoResultsText(),
			sortClasses : ["ASC", "DESC"],
			deferEmptyText : !1,
			sortAscText : LC.getLabel("Admin_Home", "sortAscArrow"),
			sortDescText : LC.getLabel("Admin_Home",
				"sortDescArrow"),
			columnsText : LC.getLabel("Filter", "columns")
		},
	void 0 !== this.spaceToAllocateForVertScrollBar() && (c.scrollOffset = this.spaceToAllocateForVertScrollBar()),
	f = this.getGridListeners(),
	(g = this.allowColumnMove) && (Sfdc.Labels && Sfdc.Labels.isRtlPage()) && (g = !1),
	this.grid = new Ext.grid.GridPanel({
			viewport : this,
			id : this.filter.id + "_grid",
			cm : new Ext.grid.ColumnModel(k),
			sm : m,
			autoHeight : !this.shouldSizeToViewport,
			store : new Ext.data.SimpleStore({
				id : 0,
				fields : l
			}),
			view : new Sfdc.grid.GridView(c),
			listeners : f,
			width : this.shouldSizeToViewport ? this.listBody.offsetWidth - this.getBorderOffsetWidth() : "auto",
			enableColumnMove : g,
			enableColumnResize : this.allowColumnResize
		}),
	this.grid.addEvents("cellMouseOver", "cellMouseOut", "headerMouseOver", "headerMouseOut"),
	this.showRPPWarning(),
	this.overrideHeaderMenuClick();
	this.grid.render(this.listBody.id);
	var l = this.grid.getColumnModel(),
	m = l.getIndexById(ListView.ACTION_COLUMN),
	k = this.grid.getColumnModel().getColumnById(ListView.ACTION_COLUMN),
	n = k.renderer;
	this.hasActions &&
	(a && k.renderer && "undefined" !== typeof chatter) && (k.renderer = function (b) {
		var c = [],
		d = a[ListView.ACTION_COLUMN],
		f = a[ListView.ACTION_COLUMN_LABELS];
		if (d && d.length && f && f.length && f.length === d.length) {
			b = {};
			for (var e = 0; e < f.length; e++) {
				var g = f[e];
				b[g] || (b[g] = d[e])
			}
			for (var h in b)
				if (b.hasOwnProperty(h) && (d = b[h]) && n)
					if (c.push(n(d)), 3 <= c.length)
						break
		} else
			c.push(n(b));
		return "\x3cdiv style\x3d'height:1px;visibility:hidden'\x3e" + c.join("\x3cbr /\x3e") + "\x3c/div\x3e"
	});
	!this.resizeAllActionColumns() && 0 < h.length ?
	this.grid.getStore().loadData([h[0]]) : this.grid.getStore().loadData(h);
	this.hasActions || this.grid.view.setScrollOffset();
	this.grid.view.sizeColumnToContent(m);
	l = l.getTotalWidth();
	m = this.grid.getInnerWidth();
	l < m && !b && this.grid.view.fitColumns();
	k.renderer = n;
	this.resizeAllActionColumns() || (this.grid.getStore().suspendEvents(), this.grid.getStore().loadData(h), this.grid.getStore().resumeEvents());
	this.grid.body.on("mouseover", function (a) {
		this.grid.processEvent("mouseover", a)
	}, this);
	this.grid.body.on("mouseout",
		function (a) {
		this.grid.processEvent("mouseout", a)
	}, this);
	this.draggable && this.initdd()
};
ListViewport.prototype.getDefaultColumnWidth = function (a) {
	return ListViewport.DEFAULT_COLUMN_WIDTH
};
ListViewport.prototype.buildActionColumn = function (a, b) {
	return {
		header : LC.getLabel("Global", "action"),
		dataIndex : ListView.ACTION_COLUMN,
		id : ListView.ACTION_COLUMN,
		width : a,
		hidden : !this.hasActions && !b,
		menuDisabled : !0,
		fixed : !0,
		css : "font-weight: bold;",
		renderer : function (a) {
			return a ? a.join(" | ") : ""
		}
	}
};
ListViewport.prototype.buildColumnConfig = function (a, b) {
	var c = {
		header : a.label,
		width : b,
		dataIndex : a.columnName,
		id : this.buildColumnId(a.columnName),
		menuDisabled : !this.showColumnMenus(),
		isSortable : a.isSortable,
		useRolodex : a.useRolodex,
		renderer : function (a) {
			return "object" == typeof a ? a[0] : a
		}
	};
	"ENTITY_SUBSCRIPTION_ID" == a.columnName && (c.header = '\x3cimg src\x3d"/s.gif" class\x3d"chatterFollowUnfollowAction" ' + ((Ext.QuickTips.isEnabled ? "ext:qtip" : "title") + '\x3d"' + a.label + '"') + "/\x3e", c.tooltip = a.label);
	return c
};
ListViewport.prototype.buildColumnId = function (a) {
	var b = this.inlineEditData.getColumnById(a);
	return (b ? b.getFieldId() : a).replace(/\./g, "_")
};
ListViewport.prototype.showColumnMenus = function () {
	return !Ext.isEmpty(this.filter.availableColumns)
};
ListViewport.prototype.getGridListeners = function () {
	var a = {};
	a.columnmove = {
		fn : this.extHandler.columnMove,
		scope : this
	};
	a.columnresize = {
		fn : this.extHandler.columnResize,
		scope : this
	};
	a.headerclick = {
		fn : this.extHandler.headerClick,
		scope : this
	};
	a.headermouseover = {
		fn : this.extHandler.headerMouseOver,
		scope : this
	};
	a.headermouseout = {
		fn : this.extHandler.headerMouseOut,
		scope : this
	};
	a.click = {
		fn : this.extHandler.click,
		scope : this
	};
	a.celldblclick = {
		fn : this.extHandler.cellDblClick,
		scope : this
	};
	a.cellmouseover = {
		fn : this.extHandler.cellMouseOver,
		scope : this
	};
	a.cellmouseout = {
		fn : this.extHandler.cellMouseOut,
		scope : this
	};
	return a
};
ListViewport.prototype.initdd = function () {
	this.drag = new Ext.dd.DragZone(this.grid.getEl(), {
			containerScroll : !0,
			scroll : !1,
			rowId : "",
			getDragData : function (a) {
				var b = a.getTarget("div.x-grid3-row");
				if (b) {
					a = this.getFilterColumns()[0];
					var c = ".x-grid3-col-" + a.id,
					b = Ext.get(b).select(c, !0).elements[0],
					c = document.createElement("div");
					c.className = "dragElement";
					a = this.drag.row.data[a.dataIndex];
					Sfdc.Dom.updateHTML(c, "object" == typeof a ? a[0] : a);
					return {
						ddel : c,
						rowId : this.drag.row.id,
						repairXY : b.getXY()
					}
				}
			}
			.bind(this),
			getRepairXY : function () {
				return this.dragData.repairXY
			}
		});
	this.grid.on("rowmousedown", function (a, b, c) {
		this.drag.row = a.getStore().getAt(b)
	}
		.bind(this))
};
ListViewport.prototype.getHOffset = function () {
	var a;
	a = 0 + Ext.fly(this.topNav).getHeight();
	a += Ext.fly(this.subNav).getHeight();
	a += Ext.fly(this.bottomNav).getHeight();
	a += Ext.fly(this.listViewport).getBorderWidth("tb");
	a += Ext.fly(this.listBody).getBorderWidth("tb");
	var b = parseInt(Sfdc.Dom.getStyle(this.listBody, "marginTop"), 10);
	isNaN(b) || (a += b);
	return a
};
ListViewport.prototype.getResizeHeight = function () {
	var a = 0;
	if (this.vf)
		a = this.height || b.getHeight(!0);
	else if (this.inOverlay)
		var b = Ext.fly(this.wrapper).parent(), a = Ext.fly(this.subNav).child("div.linkBar").getHeight(), a = b.getHeight() - a;
	else
		a = this.height || document.documentElement.clientHeight - Sfdc.Dom.getElementXY(this.wrapper).y - this.bottomBuffer;
	return a
};
ListViewport.prototype.getBorderOffsetWidth = function () {
	var a = UserContext && UserContext.uiSkin == UiSkin.ALOHA.apiValue ? this.listBody : this.listViewport;
	return a.offsetWidth - (a.clientWidth || a.offsetWidth)
};
ListViewport.prototype.resizeElement = function (a, b, c) {
	a && (void 0 != c && (a.style.width = !c || 0 > c ? 0 : isNaN(c) ? c : Math.round(c) + "px"), void 0 != b && (a.style.height = !b || 0 > b ? 0 : isNaN(b) ? b : Math.round(b) + "px"))
};
ListViewport.prototype.queueResize = function () {
	this.resizeTimer && clearTimeout(this.resizeTimer);
	this.resizeTimer = setTimeout(function () {
			this.resizeTimer && clearTimeout(this.resizeTimer);
			Sfdc.Window.getWindowHeight() === this.winHeight && Sfdc.Window.getWindowWidth() === this.winWidth || (this.loading.show(), this.resizeTimer = setTimeout(this.resize.bind(this), 1))
		}
			.bind(this), 50)
};
ListViewport.prototype.calculateAvailableWidth = function (a) {
	Sfdc.assert(a, "No element specified!");
	var b = document.documentElement.clientWidth,
	c = Sfdc.Dom.getElementXY(a).x;
	return b - c - (b - (c + a.offsetWidth))
};
ListViewport.prototype.resize = function (a) {
	function b(a, b) {
		b || a.loading.hide();
		a.grid && Sfdc.Dom.show(a.grid.el.dom);
		a.sizeIfNoData();
		Sfdc.isFunction(a.afterResize) && a.afterResize();
		a.winHeight = Sfdc.Window.getWindowHeight();
		a.winWidth = Sfdc.Window.getWindowWidth()
	}
	function c(a, b, c) {
		isNaN(b) || (b -= a.getBorderOffsetWidth());
		a.grid.setWidth(b);
		a.grid.setHeight(c);
		a.resizeElement(a.listBody, c);
		a.resizeElement(a.grid.el.dom, c, b);
		a.constrainHeightToViewport ? a.resizeElement(a.loading.transparantElement, c) : a.resizeElement(a.wrapper,
			null, "auto");
		var d = Sfdc.select(".x-grid3", a.grid.el.dom)[0];
		if (d) {
			a.resizeElement(d.parentNode, c, b);
			a.resizeElement(d, c, b);
			a.constrainHeightToViewport && !isNaN(c) && (c -= a.defaultScrollBarWidth, c -= 6);
			var e = b;
			isNaN(e) || (e -= a.defaultScrollBarWidth);
			a.resizeElement(Sfdc.select(".x-grid3-header-inner", d)[0], null, e);
			a.resizeElement(Sfdc.select(".x-grid3-scroller", d)[0], c, b);
			a.resizeElement(Sfdc.select(".x-grid3-resize-marker", d)[0], "0");
			a.resizeElement(Sfdc.select(".x-grid3-resize-proxy", d)[0], "0")
		}
	}
	this.grid &&
	Sfdc.Dom.hideByDisplay(this.grid.el.dom);
	this.resizeElement(this.wrapper, null, "auto");
	if (this.shouldSizeToViewport) {
		var d = this.constrainHeightToViewport ? Math.max(a || 0, this.getResizeHeight()) : "auto",
		e = this.calculateAvailableWidth(this.wrapper);
		this.resizeElement(this.wrapper, null, e);
		isNaN(d) || (d -= this.getHOffset());
		if (!this.initialRenderDone && this.grid && (!this.vf || "2.1" != Ext.version))
			return this.initialRenderDone = !0, c(this, e, d), b(this);
		this.shrinkStore();
		this.resizeElement(this.listBody, d);
		this.resizeElement(this.exception,
			"100%", e);
		this.grid ? (this.grid.suspendEvents(), c(this, e, d), this.resizeTimer && clearTimeout(this.resizeTimer), this.resizeTimer = setTimeout(function () {
					var a = this.grid.el.dom.parentNode;
					a.removeChild(this.grid.el.dom);
					this.unshrinkStore();
					a.appendChild(this.grid.el.dom);
					c(this, e, d);
					this.grid.resumeEvents();
					if ((a = this.grid.getSelectionModel()) && a.onRefresh)
						a.onRefresh();
					b(this, this.waitingForXhr)
				}
					.bind(this), 1)) : b(this)
	} else
		this.shrinkStore(), this.unshrinkStore(), b(this, this.waitingForXhr)
};
ListViewport.prototype.redefineSidebarPin = function () {
	Sidebar.prototype.theSidebar && (Sidebar.prototype.theSidebar.pin = function () {
		Sidebar.prototype.pin.apply(Sidebar.prototype.theSidebar);
		this.resize()
	}
		.bind(this))
};
ListViewport.prototype.beforeSave = function () {
	this.saving.show()
};
ListViewport.prototype.afterSave = function (a, b) {
	if (a && 0 < a.length) {
		this.refreshLink && (Ext.fly(this.refreshLink).addClass("refreshListButtonNeeded"), this.refreshLink.title = LC.getLabel("Filter", "refreshNeeded"));
		var c = b.getDisplayValue();
		"" === c && (c = "\x26nbsp;");
		for (var d = b.getFieldId(), e = new Ext.CompositeElement, f = 0; f < a.length; f++) {
			var h = a[f],
			g = this.grid.getStore().getById(h);
			g && g.data[b.columnName] && (g.data[b.columnName] = c);
			if (h = Ext.get(getElementByIdCS(h + "_" + d)))
				e.add(h.parent()), h.update(c)
		}
		c = 0 < this.grid.getSelectionModel().getCount() ?
			"#dfe8f6" : "#ffffff";
		e.highlight("#ffffcc", {
			endColor : c,
			duration : 2.5,
			concurrent : !0
		})
	}
	this.saving.hide()
};
ListViewport.prototype.getFilterColumns = function () {
	return this.grid.getColumnModel().getColumnsBy(function (a, b) {
		return "checkbox" != a.id && a.id != ListView.ID_COLUMN && a.id != ListView.ACTION_COLUMN
	})
};
ListViewport.prototype.resizeAllActionColumns = function () {
	return !1
};
ListViewport.prototype.spaceToAllocateForVertScrollBar = function () {};
ListViewport.prototype.getColumnWidths = function (a) {
	for (var b = [], c = 0; c < a.length; c++)
		b.push(a[c].width);
	return b
};
ListViewport.prototype.extHandler = {
	columnMove : function (a, b) {
		if (this.filter.id !== Udd.EMPTY_KEY) {
			for (var c = this.getFilterColumns(), d = [], e = 0; e < c.length; e++)
				d.push(c[e].dataIndex);
			c = this.getColumnWidths(c);
			d = {
				action : "reorderColumns",
				filterId : this.filter.id,
				cols : d,
				widths : c
			};
			this.customizable && Sfdc.Ajax.post(this.url, function (a) {}, {
				data : d
			})
		}
		d = this.grid.getView();
		d.sortState && d.updateSortIcon(this.grid.getColumnModel().findColumnIndex(d.sortState.field), d.sortState.dir)
	},
	columnResize : function (a, b) {
		if (this.filter.id !==
			Udd.EMPTY_KEY) {
			var c = this.getFilterColumns(),
			c = this.getColumnWidths(c),
			c = {
				action : "setColumnWidths",
				filterId : this.filter.id,
				widths : c
			};
			Sfdc.Ajax.post(this.url, Sfdc.Function.blank(), {
				data : c
			});
			this.sizeIfNoData()
		}
	},
	cellDblClick : function (a, b, c, d) {
		if (this.inlineEditData.isEditable && (a = a.getColumnModel().getDataIndex(c), (c = this.inlineEditData.getColumnById(a)) && c.state == InlineEditState.EDIT))
			if (d = this.grid.getSelectionModel(), 0 == d.getCount() || d.selectRow(b, this.inlineEditData.isMassEditable))
				d = this.grid.getStore().getAt(b),
				b = d.get(ListView.ID_COLUMN), c = d.get(c.columnName), this.inlineEditData.openColumn(b, a, "object" == typeof c ? c[1] : null)
	},
	cellMouseOver : function (a, b, c, d) {
		if (this.inlineEditData.isEditable && (a = this.inlineEditData.getColumnById(a.getColumnModel().getDataIndex(c))))
			a = a.state.cssClass, Ext.fly(this.grid.getView().getCell(b, c)).replaceClass(a + "Hidden", a + "Visible")
	},
	cellMouseOut : function (a, b, c, d) {
		if (this.inlineEditData.isEditable && (a = this.inlineEditData.getColumnById(a.getColumnModel().getDataIndex(c))))
			a = a.state.cssClass,
			Ext.fly(this.grid.getView().getCell(b, c)).replaceClass(a + "Visible", a + "Hidden")
	},
	headerMouseOver : function (a, b, c) {
		c = a.getColumnModel().getColumnId(b);
		if ((a = a.getColumnModel().getColumnById(c)) && a.isSortable)
			this.grid.getView().getHeaderCell(b), Ext.fly(this.grid.getView().getHeaderCell(b)).addClass("over")
	},
	headerMouseOut : function (a, b, c) {
		c = a.getColumnModel().getColumnId(b);
		if ((a = a.getColumnModel().getColumnById(c)) && a.isSortable)
			this.grid.getView().getHeaderCell(b), Ext.fly(this.grid.getView().getHeaderCell(b)).removeClass("over")
	},
	headerClick : function (a, b) {
		var c = a.getColumnModel(),
		d = c.getColumnById(c.getColumnId(b)),
		c = a.getView();
		if (d.isSortable && !c.headersDisabled && (d = d.dataIndex))
			c.sortState && c.sortState.field == d && "ASC" == c.sortState.dir ? (this.getListData({
					sort : "-" + d,
					page : this.paginator.currentPage,
					rolodexIndex : this.rolodexIndex
				}), c.updateSortIcon(b, "DESC"), c.sortState.dir = "DESC") : (this.getListData({
					sort : d,
					page : this.paginator.currentPage,
					rolodexIndex : c.sortState && c.sortState.field == d ? this.rolodexIndex : -1
				}), c.updateSortIcon(b,
					"ASC"), c.sortState = {
					field : d,
					dir : "ASC"
				})
	},
	click : function (a) {
		if (this.hasActions && "undefined" !== typeof chatter && a && a.target) {
			var b = Ext.get(a.target);
			if (b.hasClass("chatterFollowUnfollowAction") && !Ext.isEmpty(b.dom.getAttribute("entityid"))) {
				var c = this;
				chatter.getFollowUnfollowListAction().toggle(b.dom, function (a, e) {
					var f = c.grid.getView().findRowIndex(b.dom);
					if (!1 !== f) {
						var h = c.grid.getStore().getAt(f);
						h && (h.beginEdit(), c.updateActionColumnInStore(f), h.modified && (h.modified[ListView.ACTION_COLUMN] = void 0),
							h.endEdit())
					}
				})
			}
		}
	}
};
ListViewport.prototype.verify = function (a) {
	if (0 < this.grid.getSelectionModel().selections.length)
		return !0;
	alert(a);
	return !1
};
ListViewport.prototype.showRPPWarning = function () {
	if (!this.vf && !(100 >= this.rowsPerPage || UserContext.userPreferences.getBoolean("HideRPPWarning")) && !ListViewport.dialog)
		ListViewport.dialog = new SimpleDialog("RPPWarning"), ListViewport.dialog.displayX = !0, ListViewport.dialog.setWidth(520), ListViewport.dialog.extraClass = "RPPDialog", ListViewport.dialog.setTitle(LC.getLabel("RPPDialog", "title")), ListViewport.dialog.createContent = function () {
			var a = document.getElementById(ListViewport.dialog.getContentId()),
			b = [];
			b.push("\x3ch2 id\x3d'");
			b.push(ListViewport.dialog.id);
			b.push("Header'\x3e");
			b.push(ListViewport.dialog.header);
			b.push("\x3c/h2\x3e");
			b.push("\x3cdiv id\x3d'");
			b.push(ListViewport.dialog.id);
			b.push("Inner'\x3e");
			b.push("\x3cdiv class\x3d'message warningM4'\x3e\x3ctable cellspacing\x3d'0' cellpadding\x3d'0' border\x3d'0' class\x3d'messageTable'\x3e\x3ctr\x3e\x3ctd\x3e");
			b.push("\x3cimg title\x3d'Warning' class\x3d'msgIcon' src\x3d'/s.gif' alt\x3d'");
			b.push(LC.getLabel("Icon", "WARNING"));
			b.push("'/\x3e\x3c/td\x3e");
			b.push("\x3ctd class\x3d'headerCell'\x3e\x3ch4\x3e");
			b.push(LC.getLabel("RPPDialog", "yourRPP", this.rowsPerPage));
			b.push("\x3c/h4\x3e\x3c/td\x3e\x3c/tr\x3e");
			b.push("\x3ctr\x3e\x3ctd\x3e\x3c/td\x3e\x3ctd\x3e\x3cdiv\x3e");
			b.push(LC.getLabel("RPPDialog", "message"));
			b.push("\x3c/div\x3e");
			b.push("\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e");
			b.push("\x3cdiv class\x3d'radioDiv'\x3e");
			b.push("\x3cdiv class\x3d'radio'\x3e\x3cinput type\x3d'radio' name\x3d'RPPRadio' id\x3d'RPPChange' checked\x3d'checked'\x3e\x3clabel for\x3d'RPPChange'\x3e");
			b.push(LC.getLabel("RPPDialog", "change"));
			b.push("\x3c/label\x3e");
			b.push("\x3cselect class\x3d'RPPSelect' name\x3d'RPPSelect' id\x3d'RPPSelect'\x3e");
			for (var c = [10, 25, 50, 100], d = 0; d < c.length; d++)
				b.push("\x3coption value\x3d'"), b.push(c[d]), b.push("'"), 100 == c[d] && b.push(" selected"), b.push("\x3e"), b.push(c[d]), b.push("\x3c/option\x3e");
			b.push("\x3c/select\x3e\x3c/div\x3e");
			b.push("\x3cdiv class\x3d'radio'\x3e\x3cinput type\x3d'radio' name\x3d'RPPRadio' id\x3d'RPPNoChange'\x3e\x3clabel for\x3d'RPPNoChange'\x3e");
			b.push(LC.getLabel("RPPDialog", "nochange"));
			b.push("\x3c/label\x3e\x3c/div\x3e");
			b.push("\x3c/div\x3e");
			b.push("\x3cdiv class\x3d'buttons'\x3e");
			b.push("\x3cinput class\x3d'btn' type\x3d'button' value\x3d'");
			b.push(LC.getLabel("Buttons", "save"));
			b.push("' id\x3d'RPPSaveButton'\x3e\x3cinput class\x3d'btn' type\x3d'button' value\x3d'");
			b.push(LC.getLabel("Buttons", "cancel"));
			b.push("' id\x3d'RPPCancelButton'\x3e");
			b.push("\x3c/div\x3e");
			b.push("\x3c/div\x3e");
			Sfdc.Dom.updateHTML(a, b.join(""));
			document.getElementById("RPPChange").onclick =
			function () {
				document.getElementById("RPPSelect").disabled = ""
			};
			document.getElementById("RPPNoChange").onclick = function () {
				document.getElementById("RPPSelect").disabled = "true"
			};
			document.getElementById("RPPCancelButton").onclick = function () {
				ListViewport.dialog.hide()
			};
			document.getElementById("RPPSaveButton").onclick = function () {
				document.getElementById("RPPNoChange").checked ? UserContext.userPreferences.setBoolean("HideRPPWarning", !0) : this.getListData({
					rowsPerPage : document.getElementById("RPPSelect").value,
					rolodexIndex : this.rolodexIndex
				});
				ListViewport.dialog.hide()
			}
			.bind(this);
			ListViewport.dialog.show()
		}
	.bind(this),
	ListViewport.dialog.register()
};
ListViewport.prototype.getNoResultsText = function () {
	return LC.getLabel("List", "none")
};
ListViewport.prototype.getFeedListView = function (a, b) {
	var c = this;
	c.feedLoading.show();
	Jiffy.mark("startListViewFeed");
	var d = "/listviewfeed/" + a;
	b && (d = d + "?entity\x3d" + b);
	chatter.getToolbox().get({
		url : d,
		timeout : 18E5,
		success : function (a, b) {
			Jiffy.mark("startFeedListViewRender");
			chatter.getToolbox().updateHTML(Ext.Element.get(c.feedBody), b.html, !0);
			c.feedLoading.hide();
			Jiffy.measure("endListViewFeedRender", "startFeedListViewRender");
			Jiffy.measure("endListViewFeed", "startListViewFeed")
		}
	})
};
ListViewport.prototype.overrideHeaderMenuClick = function () {
	var a = this,
	b = a.grid.getView();
	b.on("sfdc.updateSort", function (b, c, f) {
		b = b.sortState;
		a.getListData({
			sort : ("DESC" == f ? "-" : "") + c,
			page : a.paginator.currentPage,
			rolodexIndex : b && b.field == c ? a.rolodexIndex : -1
		})
	});
	var c = [];
	this.filter._availableColumnsLookup = {};
	this.filter.availableColumns && Ext.each(this.filter.availableColumns, function (a) {
		var b = this.getDefaultColumnWidth(a),
		b = this.buildColumnConfig(a, b);
		b.tooltip = b.tooltip || b.header;
		c.push(b);
		this.filter._availableColumnsLookup[a.columnName] =
			a
	}, this);
	b.setAvailableColumns(c);
	b.on("sfdc.removeColumn", function (b, c) {
		for (var f = a.getFilterColumns(), h = [], g, m = a.filter, l = m.shownColumns, k = l.length, n, p = 0; p < f.length; p++)
			g = f[p].dataIndex, h.push(g);
		for (g = 0; g < k; g++)
			if (l[g].columnName == c) {
				n = g;
				break
			}
		0 <= g && l.splice(n, 1);
		f = a.getColumnWidths(f);
		h = {
			action : "setColumns",
			filterId : m.id,
			cols : h,
			widths : f
		};
		a.customizable && Sfdc.Ajax.post(a.url, function (a) {}, {
			data : h
		})
	});
	b.on("sfdc.addColumn", function (b, c, f) {
		b = a.getFilterColumns();
		c = [];
		for (var h = [], g, m, l = a.filter,
			k = 0; k < b.length; k++)
			g = b[k], m = g.dataIndex, c.push(m), h.push(g.width);
		l.shownColumns.push(l._availableColumnsLookup[f]);
		f = {
			action : "setColumns",
			filterId : a.filter.id,
			cols : c,
			widths : h,
			rerunFilter : !0,
			page : a.paginator.currentPage,
			rolodexIndex : a.rolodexIndex
		};
		a.customizable && a.getListData(f)
	})
};
ListViewport.instances = {};
ListViewport.addListViewport = function (a) {
	ListViewport.instances[a.domId] = a
};
AutoCompleteInputElement = function (a, b, c, d, g, e, h, f) {
	this.id = a;
	this.element = document.getElementById(a);
	this.id && this.element && (this.matchBlanks = g, this.lkId = h, e && (this.id = e), AutoCompleteInputElement.instanceRefs[this.id] = this, this.servletURI = b, this.minSuggestLen = 0 <= c ? c : 0, this.cache = {}, this.triedQueries = {}, this.selected = -1, this.requestParams = d, this.lastInput = null, this.enabled = !0, this.disableOnEsc = !1, this.shouldCaptureKeyStroke = "undefined" === typeof f ? !0 : f, this.displayHeader = !0, this.acBoxFocused = !1, this.hook_registerEventHandlers())
};
AutoCompleteInputElement.prototype.hook_registerEventHandlers = function () {
	var a = this;
	addEvent(this.element, "blur", function () {
		a.focused = !1;
		if (!a.acBoxFocused) {
			var b = a.getOnBlurDelay();
			0 < b ? setTimeout(function () {
				a.clearSuggestions()
			}, b) : a.clearSuggestions()
		}
	});
	addEvent(this.element, "focus", function () {
		a.focused = !0
	});
	addEvent(this.element, "keyup", function (b) {
		a.handleInput(b)
	});
	addEvent(this.element, "keydown", function (b) {
		a.handleNav(b)
	})
};
AutoCompleteInputElement.BOX_ID = "_autoCompleteBoxId";
AutoCompleteInputElement.BOX_CSS_CLASS = "autoCompleteBoxScrolling";
AutoCompleteInputElement.ROW_ID = "_autoCompleteRowId_";
AutoCompleteInputElement.ROW_CSS_CLASS = "autoCompleteRow";
AutoCompleteInputElement.ROW_CSS_CLASS_SELECTED = "autoCompleteSelectedRow";
AutoCompleteInputElement.ROW_CSS_CLASS_MOUSE_OVER = "autoCompleteHoverRow";
AutoCompleteInputElement.TITLE_ROW_CSS_CLASS = "autoCompleteSectionRow";
AutoCompleteInputElement.BOX_TABLE_ID = "_autoCompleteTableId";
AutoCompleteInputElement.MAX_SUGGESTIONS = 10;
AutoCompleteInputElement.ROW_HEIGHT = 1.5;
AutoCompleteInputElement.ROW_HEIGHT_UNITS = "em";
AutoCompleteInputElement.ONBLUR_DELAY_MS = 200;
AutoCompleteInputElement.regexChars = /([\/.*+?|()[\]{}\\^$])/g;
AutoCompleteInputElement.instanceRefs = {};
AutoCompleteInputElement.prototype.getOnBlurDelay = function () {
	return AutoCompleteInputElement.ONBLUR_DELAY_MS
};
AutoCompleteInputElement.prototype.positionACBox = function (a) {
	if (this.element && this.acBox && (!a || this.isACBoxVisible())) {
		a = this.getACXPosition(this.element);
		var b = this.getACYPosition(this.element);
		this.acBox.setStyle("left", a + "px");
		this.acBox.setStyle("top", b + "px");
		a = this.getACWidth();
		this.acBox.setStyle("width", a + "px");
		"object" === typeof Ext && (a = Ext.get("massEdit"), null !== a && this.acBox.setStyle("zIndex", parseFloat(a.getStyle("z-index"), 10) + 10))
	}
};
AutoCompleteInputElement.prototype.getACXPosition = function (a) {
	return getObjX(a)
};
AutoCompleteInputElement.prototype.getACYPosition = function (a) {
	return getObjY(a) + a.offsetHeight
};
AutoCompleteInputElement.prototype.getACWidth = function () {
	return this.element.clientWidth
};
AutoCompleteInputElement.prototype.setACBoxHeight = function (a) {
	var b = this.getMaxSuggestionsToDisplay();
	a > b ? (this.acBox.setStyle("height", b * AutoCompleteInputElement.ROW_HEIGHT + AutoCompleteInputElement.ROW_HEIGHT_UNITS), this.scrolling = !0) : (this.acBox.setStyle("height", "auto"), this.scrolling = !1)
};
AutoCompleteInputElement.prototype.updateWidth = function () {
	var a = this.getMinimumWidth(),
	b = -1;
	this.acBox.div.childNodes && (b = this.acBox.div.childNodes[0].clientWidth);
	a > b ? this.acBox.setStyle("width", a + "px") : this.acBox.setStyle("width", b + "px")
};
AutoCompleteInputElement.prototype.getMinimumWidth = function () {
	return this.element.clientWidth
};
AutoCompleteInputElement.prototype.clearACBox = function () {
	this.isACBoxVisible() && (this.hideACBox(), this.scrolling = !1, this.acBox.setStyle("height", "auto"), this.deselect())
};
AutoCompleteInputElement.prototype.isACBoxInitialized = function () {
	return null != this.acBox
};
AutoCompleteInputElement.prototype.isACBoxVisible = function () {
	return this.isACBoxInitialized() && "none" != this.acBox.getStyle("display")
};
AutoCompleteInputElement.prototype.updateACBox = function (a, b) {
	this.element && (!a || 0 == a.length ? this.acBox && this.clearACBox() : (this.acBox || this.initACBox(), this.displayACBox(a, b), this.scrollDiv(), this.updateWidth()))
};
AutoCompleteInputElement.prototype.hook_onEmptyServletResult = function (a) {};
AutoCompleteInputElement.prototype.hook_onFinishRetrievingServletResult = function () {};
AutoCompleteInputElement.prototype.showACBox = function () {
	this.acBox.setStyle("display", "block");
	this.hook_show()
};
AutoCompleteInputElement.prototype.hideACBox = function () {
	this.acBox.setStyle("display", "none");
	this.hook_hide()
};
AutoCompleteInputElement.prototype.hook_show = function () {};
AutoCompleteInputElement.prototype.hook_hide = function () {};
AutoCompleteInputElement.prototype.displayACBox = function (a, b) {
	var c = this.constructACBox(a, b);
	this.setACBox(c);
	this.positionACBox();
	this.setACBoxHeight(!a ? 0 : a.length);
	this.showACBox()
};
AutoCompleteInputElement.prototype.constructACBox = function (a, b) {
	var c = [];
	c.push("\x3ctable id\x3d'" + this.id + AutoCompleteInputElement.BOX_TABLE_ID + "' width\x3d'100%' cellpadding\x3d'0' cellspacing\x3d'0' border\x3d'0'\x3e");
	a && 0 < a.length && this.addHeader(c);
	this.addSuggestions(c, a, b);
	this.addFooter(c, !a ? 0 : a.length);
	c.push("\x3c/table\x3e");
	return c = this.hook_decorateHtml(c)
};
AutoCompleteInputElement.prototype.hook_decorateHtml = function (a) {
	return a
};
AutoCompleteInputElement.prototype.addSuggestions = function (a, b, c) {
	b && 0 != b.length && this.innerAddSuggestions(a, b, c, 0)
};
AutoCompleteInputElement.prototype.innerAddSuggestions = function (a, b, c, d) {
	for (var g = !0, e = 0; e < b.length; e++) {
		var h = b[e];
		if (h && h.name) {
			var f = e + d;
			a.push("\x3ctr\x3e\x3ctd\x3e");
			a.push("\x3cdiv ");
			a.push('onmouseover\x3d"');
			a.push("AutoCompleteInputElement.mouseOver('" + this.id + "', " + f + ')"');
			a.push('onmouseout\x3d"');
			a.push("AutoCompleteInputElement.mouseOut('" + this.id + "', " + f + ')"');
			a.push('onclick\x3d"');
			a.push("AutoCompleteInputElement.click('" + this.id + "', " + f + ')"');
			this.compareSuggestions(c, h) ? (a.push("class\x3d'" +
					AutoCompleteInputElement.ROW_CSS_CLASS_SELECTED + "' "), this.select(f), g = !1) : a.push("class\x3d'" + AutoCompleteInputElement.ROW_CSS_CLASS + "' ");
			this.getSuggestionWidth() && a.push(" style\x3d'width:" + this.getSuggestionWidth() + "px' ");
			a.push("id\x3d'" + AutoCompleteInputElement.getRowIdStatic(this.id, f) + "'\x3e");
			a.push(this.getSuggestionHtml(h));
			a.push("\x3c/div\x3e");
			a.push("\x3c/td\x3e\x3c/tr\x3e");
			this.addExtraMarkupAfterSuggestion(a, e)
		}
	}
	g && this.deselect()
};
AutoCompleteInputElement.prototype.getSuggestionWidth = function () {};
AutoCompleteInputElement.prototype.addHeader = function (a) {
	this.displayHeader && a.push('\x3ctr\x3e\x3ctd\x3e\x3cdiv class\x3d"' + AutoCompleteInputElement.TITLE_ROW_CSS_CLASS + '"\x3e' + LC.getLabel("Sidebar_Search", "result_source") + "\x3c/div\x3e\x3c/td\x3e\x3c/tr\x3e ")
};
AutoCompleteInputElement.prototype.addFooter = function (a, b) {};
AutoCompleteInputElement.prototype.addExtraMarkupAfterSuggestion = function (a, b) {};
AutoCompleteInputElement.prototype.select = function (a) {
	if (this.selected != a) {
		if (0 <= this.selected) {
			var b = this.getRow(this.selected);
			b && (b.className = AutoCompleteInputElement.ROW_CSS_CLASS)
		}
		this.selected = a;
		if (b = this.getRow(this.selected))
			b.className = AutoCompleteInputElement.ROW_CSS_CLASS_SELECTED
	}
};
AutoCompleteInputElement.prototype.selectPrev = function () {
	if (this.hasValidSelection()) {
		var a = this.selected - 1;
		0 > a ? this.deselect() : (this.select(a), this.scrollDiv())
	}
};
AutoCompleteInputElement.prototype.selectNext = function () {
	this.hasValidSelection() ? this.selected + 1 != this.curSuggestions.length && (this.select((this.selected + 1) % this.curSuggestions.length), this.scrollDiv()) : this.isACBoxVisible() && this.select(0)
};
AutoCompleteInputElement.prototype.scrollDiv = function () {
	this.hasValidSelection() && this.scrolling && (this.acBox.div.scrollTop = this.acBox.div.scrollHeight * ((this.selected + 1) / this.curSuggestions.length) - 0.5 * this.acBox.div.clientHeight)
};
AutoCompleteInputElement.prototype.deselect = function () {
	return this.select(-1)
};
AutoCompleteInputElement.prototype.hasValidSelection = function () {
	return this.element && 0 <= this.selected && this.curSuggestions && this.curSuggestions.length && this.selected < this.curSuggestions.length && this.isACBoxVisible()
};
AutoCompleteInputElement.prototype.initACBox = function () {
	if (this.element) {
		this.acBox = document.createElement("div");
		var a = this;
		addEvent(this.acBox, "mouseover", function () {
			a.acBoxFocused = !0
		});
		addEvent(this.acBox, "mouseout", function () {
			a.acBoxFocused = !1;
			a.onClickFired || (a.element.focus(), a.focused = !0, Sfdc.userAgent.isIE && (a.element.value = a.element.value))
		});
		this.acBox.id = this.id + AutoCompleteInputElement.BOX_ID;
		this.acBox.className = AutoCompleteInputElement.BOX_CSS_CLASS;
		this.addACBoxToPage(this.acBox);
		this.acBox =
			new iframeShim(this.acBox);
		this.acBox.setStyle("width", this.getMinimumWidth() + "px");
		AutoCompleteInputElement.hasResizeHandler || (addEvent(window, "resize", AutoCompleteInputElement.resizeHandler), AutoCompleteInputElement.hasResizeHandler = !0)
	}
};
AutoCompleteInputElement.prototype.addACBoxToPage = function (a) {
	document.body.appendChild(a)
};
AutoCompleteInputElement.prototype.setACBox = function (a) {
	this.acBox || this.initACBox();
	this.acBox.div.innerHTML = a.join("")
};
AutoCompleteInputElement.prototype.complete = function () {
	if (!this.element || !this.hasValidSelection())
		return !1;
	var a = this.curSuggestions[this.selected];
	this.setAppliedFlag(!0);
	this.innerComplete(a);
	this.clearACBox();
	this.resizeTextArea();
	return !0
};
AutoCompleteInputElement.prototype.innerComplete = function (a) {
	this.element && (a && 0 != a.length) && (this.element.value = a.name, a.lookupPickJs && eval(a.lookupPickJs))
};
AutoCompleteInputElement.prototype.setAppliedFlag = function (a) {
	a = a ? "1" : "0";
	if (this.acAppliedField)
		this.acAppliedField.value = a;
	else {
		var b = document.getElementById(EditPageConstants.pEDIT_PAGE);
		if (b) {
			var c = this.id + AbstractAutoCompleteServlet.AUTOCOMPLETE_USED_SUFFIX;
			field = document.createElement("input");
			field.type = "hidden";
			field.id = c;
			field.name = c;
			field.value = a;
			b.appendChild(field);
			this.acAppliedField = field
		}
	}
};
AutoCompleteInputElement.prototype.getRow = function (a) {
	return document.getElementById(AutoCompleteInputElement.getRowIdStatic(this.id, a))
};
AutoCompleteInputElement.prototype.disableAC = function () {
	this.enabled && (this.enabled = !1, this.clearSuggestions())
};
AutoCompleteInputElement.prototype.enableAC = function () {
	this.enabled || (this.enabled = !0, this.displaySuggestions(!0))
};
AutoCompleteInputElement.prototype.retrieveFromServlet = function (a) {
	if (!a || a.length < this.minSuggestLen || this.triedQueries[this.getCacheKey(a)])
		return !1;
	this.triedQueries[this.getCacheKey(a)] = !0;
	var b = new QueryString;
	b.add(AbstractAutoCompleteServlet.pINPUT, a);
	b.add("time", (new Date).getTime());
	if (this.requestParams)
		for (var c in this.requestParams)
			b.add(c, this.requestParams[c]);
	this.lkId && sfdcPage.getReferredDomIds && b.add(MRUAutoCompleteServlet.DEPDATA_PARAM, dpdLkUtil.serialize(sfdcPage.getReferredDomIds(this.lkId),
			this.lkId));
	var d = this;
	Sfdc.Ajax.get(this.servletURI + b.toString(), function (b) {
		if (b && (b = d.parseResponse(b)) && b[AbstractAutoCompleteServlet.SUGGESTIONS])
			d.saveToCache(a, b[AbstractAutoCompleteServlet.SUGGESTIONS]), d.displaySuggestions(!0), 0 === b[AbstractAutoCompleteServlet.SUGGESTIONS].length && d.hook_onEmptyServletResult(a), d.hook_onFinishRetrievingServletResult()
	});
	return !0
};
AutoCompleteInputElement.prototype.parseResponse = function (a) {
	return Util.evalAjaxServletOutput(a)
};
AutoCompleteInputElement.prototype.displaySuggestions = function (a) {
	if (this.element && this.focused && this.enabled && this.additionalDisplayConditionsValid()) {
		var b = this.getInput();
		if (a || b != this.lastInput || !this.isACBoxVisible())
			this.setAppliedFlag(!1), this.lastInput = b, a = null, "" == b ? this.handleEmptyInput() : (this.hasValidSelection() && (a = this.curSuggestions[this.selected]), this.curSuggestions = this.getSuggestions(b), this.updateACBox(this.curSuggestions, a))
	}
};
AutoCompleteInputElement.prototype.getInput = function () {
	return trim(this.element.value)
};
AutoCompleteInputElement.prototype.handleEmptyInput = function () {
	this.clearSuggestions()
};
AutoCompleteInputElement.prototype.clearSuggestions = function () {
	this.element && (this.curSuggestions = null, this.clearACBox())
};
AutoCompleteInputElement.prototype.getSuggestions = function (a) {
	a = this.findInput(a);
	if (!(this.element && a.length >= this.minSuggestLen))
		return [];
	var b = this.checkCacheOrRetrieve(a);
	return !b ? [] : this.getValidSuggestions(a, b)
};
AutoCompleteInputElement.prototype.getValidSuggestions = function (a, b) {
	for (var c = [], d = 0; d < b.length; d++) {
		var g = b[d];
		this.isValidSuggestion(a, g) && c.push(g)
	}
	return c
};
AutoCompleteInputElement.prototype.getMaxSuggestionsToDisplay = function () {
	return AutoCompleteInputElement.MAX_SUGGESTIONS
};
AutoCompleteInputElement.prototype.getCacheKey = function (a) {
	return "dummy"
};
AutoCompleteInputElement.prototype.saveToCache = function (a, b) {
	this.cache[this.getCacheKey(a)] = b
};
AutoCompleteInputElement.prototype.clearCache = function () {
	this.cache = {};
	this.triedQueries = {}

};
AutoCompleteInputElement.prototype.checkCacheOrRetrieve = function (a) {
	var b = this.getCacheKey(a);
	this.cache[b] || this.retrieveFromServlet(a);
	return this.cache[b]
};
AutoCompleteInputElement.prototype.handleInput = function (a) {
	this.focused = !0;
	var b = !1;
	this.inKeyIME && (this.inKeyIME = !1, a.keyCode == KEY_ENTER && (b = !0, this.displaySuggestions()));
	!b && !AutoCompleteInputElement.isNav(a) && this.displaySuggestions()
};
AutoCompleteInputElement.isInServiceDesk = function () {
	return Sfdc && null !== Sfdc.resolve("Sfdc.support.servicedesk") || window.parent.Sfdc && null !== window.parent.Sfdc.resolve("Sfdc.support.servicedesk")
};
AutoCompleteInputElement.prototype.handleNav = function (a) {
	var b = AutoCompleteInputElement.isInServiceDesk(),
	c = a.keyCode == KEY_ESC,
	d = Sfdc && null !== Sfdc.resolve("Sfdc.support.servicedesk") && Sfdc.support.servicedesk.HotkeyEngine.isKeyEventMappedToAHotkeyCommand(a) || Sfdc && null !== Sfdc.resolve("Sfdc.servicedeskview") && Sfdc.servicedeskview.isKeyEventMappedToAHotkeyCommand(a);
	if (b && AutoCompleteInputElement.isNav(a) && c && d)
		b = this.isACBoxVisible(), this.clearSuggestions(), this.disableOnEsc && this.disableAC(), b && AutoCompleteInputElement.captureKeystroke(a);
	else if (AutoCompleteInputElement.isNav(a))
		if (a.keyCode == KEY_ESC)
			this.clearSuggestions(), this.disableOnEsc && this.disableAC(), AutoCompleteInputElement.captureKeystroke(a);
		else if (a.keyCode == KEY_ARROW_U)
			this.selectPrev();
		else if (a.keyCode == KEY_ARROW_D)
			this.selectNext();
		else if (a.keyCode == KEY_TAB) {
			if (this.complete(), "function" === typeof this.onAfterTabDown)
				this.onAfterTabDown(a)
		} else
			a.keyCode == KEY_ENTER && this.handleEnter(a);
	else
		a.keyCode == KEY_PROCESS && (this.inKeyIME = !0);
	this.resizeTextArea()
};
AutoCompleteInputElement.prototype.handleEnter = function (a) {
	this.complete() ? this.shouldCaptureKeyStroke && AutoCompleteInputElement.captureKeystroke(a) : this.handleEnterSubmit(a)
};
AutoCompleteInputElement.prototype.handleEnterSubmit = function (a) {};
AutoCompleteInputElement.getRowIdStatic = function (a, b) {
	return "" + a + AutoCompleteInputElement.ROW_ID + b
};
AutoCompleteInputElement.getInstance = function (a) {
	return AutoCompleteInputElement.instanceRefs[a]
};
AutoCompleteInputElement.mouseOver = function (a, b) {
	var c = AutoCompleteInputElement.getInstance(a);
	c && 0 <= b && b != c.selected && (c = AutoCompleteInputElement.getRowIdStatic(a, b), document.getElementById(c).className = AutoCompleteInputElement.ROW_CSS_CLASS_MOUSE_OVER)
};
AutoCompleteInputElement.mouseOut = function (a, b) {
	var c = AutoCompleteInputElement.getInstance(a);
	c && 0 <= b && b != c.selected && (c = AutoCompleteInputElement.getRowIdStatic(a, b), document.getElementById(c).className = AutoCompleteInputElement.ROW_CSS_CLASS)
};
AutoCompleteInputElement.click = function (a, b) {
	var c = AutoCompleteInputElement.getInstance(a);
	c.select(b);
	c.complete();
	c.onClickFired = !0
};
AutoCompleteInputElement.matches = function (a, b) {
	if (!a || !b)
		return !1;
	a = AutoCompleteInputElement.normalize(a);
	b = AutoCompleteInputElement.normalize(b);
	return a.length > b.length ? !1 : 0 === b.indexOf(a)
};
AutoCompleteInputElement.normalize = function (a) {
	return trim(a.toLowerCase())
};
AutoCompleteInputElement.isNav = function (a) {
	return !a || !a.keyCode ? !1 : a.keyCode == KEY_ARROW_D || a.keyCode == KEY_ARROW_U || a.keyCode == KEY_ESC || a.keyCode == KEY_TAB || a.keyCode == KEY_ENTER
};
AutoCompleteInputElement.blurHandler = function (a) {
	(a = AutoCompleteInputElement.getInstance(a)) && a.isACBoxVisible() && a.clearSuggestions()
};
AutoCompleteInputElement.captureKeystroke = function (a) {
	a && (Sfdc.Event.preventDefault(a), Sfdc.Event.stopPropagation(a))
};
AutoCompleteInputElement.resizeHandler = function () {
	for (var a in AutoCompleteInputElement.instanceRefs)
		AutoCompleteInputElement.instanceRefs[a].positionACBox(!0)
};
AutoCompleteInputElement.prototype.isValidSuggestion = function (a, b) {
	var c = this.getRegexForInput(a);
	return b.name.match(c)
};
AutoCompleteInputElement.escapeRegex = function (a) {
	return !a || 0 == a.length ? a : a.replace(AutoCompleteInputElement.regexChars, "\\$1")
};
AutoCompleteInputElement.prototype.getRegexForInput = function (a) {
	var b = AutoCompleteInputElement.normalize(a);
	AutoCompleteInputElement.regexCache[b] || (AutoCompleteInputElement.regexCache[b] = this.matchBlanks ? RegExp(["(\\b|^|\\W)(", AutoCompleteInputElement.escapeRegex(a), ")"].join(""), "gi") : RegExp(["(^)(", AutoCompleteInputElement.escapeRegex(a), ")"].join(""), "gi"));
	return AutoCompleteInputElement.regexCache[b]
};
AutoCompleteInputElement.regexCache = {};
AutoCompleteInputElement.prototype.getSuggestionHtml = function (a) {
	var b = [],
	c = escapeHTML(this.findInput(this.lastInput));
	a = escapeHTML(a.name);
	c && 0 < Sfdc.String.trim(c).length && (c = this.getRegexForInput(c), a = a.replace(c, '$1\x3cstrong class\x3d"autocompleteMatch"\x3e$2\x3c/strong\x3e'));
	b.push("\x26nbsp;");
	b.push(a);
	return b.join("")
};
AutoCompleteInputElement.prototype.findInput = function (a) {
	return ltrim(a)
};
AutoCompleteInputElement.prototype.setResizer = function (a) {
	this.resizeCallback = a
};
AutoCompleteInputElement.prototype.resizeTextArea = function () {
	this.resizeCallback && this.resizeCallback() && this.positionACBox()
};
AutoCompleteInputElement.prototype.additionalDisplayConditionsValid = function () {
	return !0
};
AutoCompleteInputElement.prototype.compareSuggestions = function (a, b) {
	return a && b && a.lookupPickID && b.lookupPickID && b.lookupPickID == a.lookupPickID
};
function ApexPage() {}

ApexPage.prototype = new GenericSfdcPage;
function ApexDetailPage() {
	this.currentFieldForInlineEditDialog = null;
	this.domSuffixes = {};
	this.picklists = {};
	this.VFContainer = {};
	this.relatedListCount = {};
	this.getDetailPage = function (a) {
		if (a)
			for (var b in this.domSuffixes) {
				var c = RegExp(b + "(.*)").exec(a);
				if (c && (0 === c[1].length || "_" === c[1].charAt(0)))
					return this.domSuffixes[b]
			}
	};
	this.registerPickList = function (a, b) {
		this.picklists[a] = b
	};
	this.getRegisteredPickList = function (a) {
		return this.picklists[a]
	};
	this.postProcessSaveData = function (a, b) {
		var c = {},
		d;
		for (d in a)
			if (a.hasOwnProperty(d)) {
				var e =
					d.replace(b, "");
				c[e] = a[d]
			}
		return c
	};
	this.updateRelatedListPanel = function (a) {
		(a = this.getDetailPage(a)) && a.getRelatedListPanel().addListsToPanel(!0)
	}
}
ApexDetailPage.prototype = new DetailPage;
ApexDetailPage.prototype.registerInlineDetail = function (a, b, c) {
	a = new DetailPage(a);
	a.reRenderFunction = b;
	a.visualforce = c;
	this.domSuffixes[c] = a;
	this.relatedListCount[c] = 0
};
ApexDetailPage.prototype.registerInlineEditData = function (a) {
	var b = new DetailPage;
	a = a[InlineEditConstants.VF_ENABLED];
	b.visualforce = a;
	this.domSuffixes[a] = b;
	this.VFContainer[a] = b
};
ApexDetailPage.prototype.renderDetail = function (a) {
	var b = this.domSuffixes[a];
	if (b) {
		var c = b.reRenderFunction;
		"function" !== typeof c && (c = new Function(c), b.reRenderFunction = c);
		if (a = document.getElementById(a + VisualforceConstants.UPDATE_VALUE)) {
			a.value = "true";
			var d = document.createElement("input");
			d.id = "rls";
			d.style.display = "none";
			d.type = "hidden";
			d.name = "rls";
			d.value = b.getEntityId();
			a.parentNode.appendChild(d)
		}
		this.cleanOverLay(b);
		c()
	}
};
ApexDetailPage.prototype.cleanOverLay = function (a) {
	if (null != a) {
		a = a.inlineEditData.fields;
		var b = InlineEditField.overlay,
		c;
		if (b)
			for (var d in a)
				if ((c = a[d]) && c.editDiv && b.fields[d]) {
					var e = b.fields[d];
					e && (c = b[b.currentField === d ? "activeDiv" : "editDivPool"], e.div.parentNode == c && c.removeChild(e.div));
					b.currentField === d && (b.currentField = null);
					b.fields[d] = null
				}
	}
};
ApexDetailPage.prototype.loadDetailJS = function (a) {
	(a = document.getElementById(a + "JS")) && a.innerHTML && (Sfdc.userAgent.isIE ? window.execScript : window.eval)(a.innerHTML)
};
ApexDetailPage.prototype.focusOnSave = function (a) {
	(a = this.domSuffixes[a]) && a.editButtons[0] ? a.editButtons[0].focus() : this.editButtons[0] && this.editButtons[0].focus()
};
ApexDetailPage.prototype.initInlineEdit = function (a) {
	var b = this.domSuffixes[a[InlineEditConstants.VF_ENABLED]];
	if (b) {
		if (b.inlineEditData = a, a.isEditable) {
			var c = this;
			c.appendToOnloadQueue(function () {
				b.inlineEditData.init()
			}, "Initialize inline edit");
			c.appendToOnloadQueue(function () {
				c.initializeButtons(b)
			}, "Setup detail buttons")
		}
	} else
		DetailPage.prototype.initInlineEdit.call(this, a)
};
ApexDetailPage.prototype.getInlineEditData = function (a) {
	var b = this.getDetailPage(a ? a : this.currentFieldForInlineEditDialog);
	return b ? b.inlineEditData : DetailPage.prototype.getInlineEditData.call(this, a)
};
ApexDetailPage.prototype.save = function (a) {
	(a = this.domSuffixes[a]) ? a.save() : DetailPage.prototype.save.call(this)
};
ApexDetailPage.prototype.revert = function (a) {
	(a = this.domSuffixes[a]) ? a.revert() : DetailPage.prototype.revert.call(this)
};
ApexDetailPage.prototype.activateInlineEditMode = function (a) {
	(a = this.getDetailPage(a)) ? a.activateInlineEditMode() : DetailPage.prototype.activateInlineEditMode.call(this)
};
ApexDetailPage.prototype.getReferredDomIds = function (a) {
	var b = this.getDetailPage(a);
	return b ? b.getReferredDomIds(a) : GenericSfdcPage.prototype.getReferredDomIds.call(this, a)
};
ApexDetailPage.prototype.deactivateInlineEditMode = function (a) {
	(a = this.getDetailPage(a)) ? a.deactivateInlineEditMode() : DetailPage.prototype.deactivateInlineEditMode.call(this)
};
ApexDetailPage.prototype.unRegisterDialog = function (a) {
	var b = this.getDetailPage(a.id);
	b ? b.unRegisterDialog(a) : DetailPage.prototype.unRegisterDialog.call(this, a)
};
ApexDetailPage.prototype.getDialogById = function (a) {
	var b = this.getDetailPage(a);
	return b ? b.getDialogById(a) : DetailPage.prototype.getDialogById.call(this, a)
};
ApexDetailPage.prototype.initializeButtons = function (a) {
	function b(b) {
		var d = document.getElementById(b),
		e = d.getElementsByTagName("input");
		for (b = 0; b < e.length; b++) {
			var f = e[b];
			"button" === f.type && (f.name === InlineEditConstants.SAVE_BUTTON || f.name === InlineEditConstants.CANCEL_BUTTON ? a.editButtons.push(f) : a.detailButtons.push(f))
		}
		d = d.getElementsByTagName("div");
		for (b = 0; b < d.length; b++)
			e = d[b], "menuButton" === e.className && a.detailButtons.push(e)
	}
	this.VFContainer[a[InlineEditConstants.VF_ENABLED]] || (b(DetailElement.TOP_BUTTON_ROW +
			a[InlineEditConstants.VF_ENABLED]), b(DetailElement.BOTTOM_BUTTON_ROW + a[InlineEditConstants.VF_ENABLED]))
};
ApexDetailPage.prototype.setError = function (a, b) {
	var c = this.domSuffixes[b];
	c ? c.setError(a) : DetailPage.prototype.setError.call(this, a)
};
ApexDetailPage.prototype.dblClickField = function (a, b) {
	var c = Sfdc.userAgent.isIE ? event : a;
	if ("a" != getEventTarget(getEvent(c)).nodeName.toLowerCase()) {
		var d = this.getFieldById(b.id);
		this.currentFieldForInlineEditDialog && d !== this.currentFieldForInlineEditDialog && sfdcPage.getInlineEditData(this.currentFieldForInlineEditDialog).closeCurrentField();
		sfdcPage.getDetailPage(b.id).dblClickField(c, b)
	}
};
ApexDetailPage.prototype.clickField = function (a, b) {
	var c = Sfdc.userAgent.isIE ? event : a;
	sfdcPage.getDetailPage(b.id).clickField(c, b)
};
ApexDetailPage.prototype.getRelatedListCount = function (a) {
	return a && a.visualforce && this.relatedListCount.hasOwnProperty(a.visualforce) ? this.relatedListCount[a.visualforce] : DetailPage.prototype.getRelatedListCount.call(this, a)
};
ApexDetailPage.prototype.getRelatedListById = function (a) {
	var b = this.getDetailPage(a);
	return b ? b.getRelatedListById(a) : DetailPage.prototype.getRelatedListById.call(this, a)
};
ApexDetailPage.prototype.registerRelatedListPanel = function (a, b) {
	var c = this.getDetailPage(a);
	c ? c.registerRelatedListPanel(a, b) : DetailPage.prototype.registerRelatedListPanel.call(this, a, b)
};
ApexDetailPage.prototype.getRelatedListPanel = function (a) {
	return (a = this.getDetailPage(a)) ? a.getRelatedListPanel() : DetailPage.prototype.getRelatedListPanel.call(this)
};
ApexDetailPage.prototype.registerRelatedList = function (a, b, c, d, e, f, h, k, l, m) {
	var g = this.getDetailPage(a);
	g ? (DetailPage.prototype.registerRelatedList.apply(g, arguments), this.relatedListCount[g.visualforce] += 1) : DetailPage.prototype.registerRelatedList.call(this, a, b, c, d, e, f, h, k, l, m)
};
ApexDetailPage.prototype.makeRLAjaxRequest = function (a, b, c) {
	var d = this.processRelatedList(b),
	e = d[0];
	b = d[1];
	e ? e.makeRLAjaxRequest(a, b, c) : (a || (a = d[2]), DetailPage.prototype.makeRLAjaxRequest.call(this, a, b, c))
};
ApexDetailPage.prototype.processRelatedList = function (a) {
	var b = null,
	c = null,
	d = null;
	if ("string" === typeof a)
		c = (b = this.getDetailPage(a)) ? a.replace(b.visualforce + "_", "") : a, d = c.substring(0, a.search("_"));
	else if ("[object Array]" === Object.prototype.toString.apply(a)) {
		var d = a[0],
		c = [],
		b = this.getDetailPage(d),
		d = d.substring(0, a.search("_")),
		e;
		for (e in a)
			b ? c.push(e.replace(b.visualforce + "_", "")) : c.push(e)
	}
	return [b, c, d]
};
ApexDetailPage.prototype.getFieldValueById = function (a) {
	var b = this.getDetailPage(a),
	c = null;
	b && (c = DetailPage.prototype.getFieldValueById.call(b, a));
	c || (c = DetailPage.prototype.getFieldValueById.call(this, a));
	c || (c = GenericSfdcPage.prototype.getFieldValueById.call(this, a));
	return c
};
ApexDetailPage.prototype.getEntityId = function (a) {
	var b = this.getDetailPage(a);
	if (b) {
		var c = b.getFieldById(a);
		return "undefined" !== typeof c.visualforce_entityId ? c.visualforce_entityId : b.getEntityId(a)
	}
	return this.entityId ? this.entityId : GenericSfdcPage.prototype.getEntityId.call(this, a)
};
ApexDetailPage.prototype.handleRLAjaxResponse = function (a) {
	var b,
	c;
	try {
		b = Util.evalAjaxServletOutput(a)
	} catch (d) {
		window.location.reload()
	}
	(c = this.getDetailPage(b.visualforce)) ? b.exElem ? c.handleRLAjaxException(b.exElem) : c.handleRLAjaxResponse(a) : DetailPage.prototype.handleRLAjaxResponse.call(this, a)
};
var KEY_BACKSPACE = 8, KEY_TAB = 9, KEY_ENTER = 13, KEY_ESC = 27, KEY_SPACE = 32, KEY_PAGEDOWN = 33, KEY_PAGEUP = 34, KEY_ARROW_L = 37, KEY_ARROW_U = 38, KEY_ARROW_R = 39, KEY_ARROW_D = 40, KEY_SHIFT = 16, KEY_CTRL = 17, KEY_ALT = 18, KEY_CAPSLOCK = 20, KEY_0 = 48, KEY_1 = 49, KEY_2 = 50, KEY_3 = 51, KEY_4 = 52, KEY_5 = 53, KEY_6 = 54, KEY_7 = 55, KEY_8 = 56, KEY_9 = 57, KEY_A = 65, KEY_B = 66, KEY_C = 67, KEY_D = 68, KEY_E = 69, KEY_F = 70, KEY_G = 71, KEY_H = 72, KEY_I = 73, KEY_J = 74, KEY_K = 75, KEY_L = 76, KEY_M = 77, KEY_N = 78, KEY_O = 79, KEY_P = 80, KEY_Q = 81, KEY_R = 82, KEY_S = 83, KEY_T = 84, KEY_U = 85, KEY_V = 86, KEY_W =
	87, KEY_X = 88, KEY_Y = 89, KEY_Z = 90, KEY_WINDOWS_L = 91, KEY_WINDOWS_R = 92, KEY_SELECT = 93, KEY_NUMPAD_0 = 96, KEY_NUMPAD_1 = 97, KEY_NUMPAD_2 = 98, KEY_NUMPAD_3 = 99, KEY_NUMPAD_4 = 100, KEY_NUMPAD_5 = 101, KEY_NUMPAD_6 = 102, KEY_NUMPAD_7 = 103, KEY_NUMPAD_8 = 104, KEY_NUMPAD_9 = 105, KEY_NUMPAD_MULTIPLY = 106, KEY_NUMPAD_PLUS = 107, KEY_NUMPAD_MINUS = 109, KEY_NUMPAD_DECIMAL = 110, KEY_NUMPAD_DIVIDE = 111, KEY_F1 = 112, KEY_F2 = 113, KEY_F3 = 114, KEY_F4 = 115, KEY_F5 = 116, KEY_F6 = 117, KEY_F7 = 118, KEY_F8 = 119, KEY_F9 = 120, KEY_F10 = 121, KEY_F11 = 122, KEY_F12 = 123, KEY_PAUSE = 19,
KEY_END = 35, KEY_HOME = 36, KEY_INSERT = 45, KEY_DELETE = 46, KEY_NUMLOCK = 144, KEY_SCROLLLOCK = 145, KEY_SEMICOLON = Sfdc.userAgent.isFirefox ? 59 : 186, KEY_EQUALS = 61, KEY_COMMA = 188, KEY_DASH = 109, KEY_PERIOD = 190, KEY_FORWARDSLASH = 191, KEY_GRAVE = 192, KEY_OPENBRACKET = 219, KEY_BACKSLASH = 220, KEY_CLOSEBRACKET = 221, KEY_APOSTROPHE = 222, KEY_PROCESS = 229;
Sfdc.provide("Sfdc.Labels", window.LC);
Sfdc.provide("Sfdc.UserContext", window.UserContext);
Sfdc.provide("Sfdc.Perf", window.Jiffy);
Sfdc.provide("Sfdc.Date", window.DateUtil);
Sfdc.provide("Sfdc.Ajax", {
	get : function (d, a, b) {
		b = b || {};
		b.method || (b.method = "GET");
		a && (b.success = a);
		return this.request(d, b)
	},
	crossDomainRequest : function (d, a, b) {
		b = b || {};
		b.isCrossDomain = !0;
		b.onBrowserNotSupportXDR || (b.onBrowserNotSupportXDR = Sfdc.Function.blank());
		return this.get(d, a, b)
	},
	post : function (d, a, b) {
		b = b || {};
		b.method = "POST";
		a && (b.success = a);
		return this.request(d, b)
	},
	jsonp : function (d, a) {
		var b = {
			success : function () {},
			onScriptLoad : function () {},
			data : {},
			cache : !1,
			callback : null
		};
		a ? Sfdc.apply(a, b) : a = b;
		!1 === a.cache && (a.data = a.data || {}, a.data._ = (new Date).getTime());
		var e = a.callback || "jsonp" + Sfdc.newUID();
		window[e] = function (b) {
			Sfdc.isFunction(a.success) && a.success(b);
			if (!a.callback)
				try {
					window[e] = null,
					delete window[e]
				} catch (c) {
					Sfdc.log("Couldn't delete jsonp callback function", Sfdc.Logging.LogLevel.INFO, c)
				}
		};
		a.data.callback = e;
		d = Sfdc.Url.generateUrl(d, a.data);
		Sfdc.Resource.addJavaScript(d, function () {
			if (Sfdc.isFunction(a.onScriptLoad))
				a.onScriptLoad(this);
			Sfdc.Dom.removeChild(this)
		})
	},
	request : function (d,
		a) {
		var b = a.isCrossDomain || !1,
		e = "undefined" != typeof XDomainRequest,
		g = b && e;
		a = Sfdc.apply(a || {}, {
				method : "GET",
				async : !0,
				beforerequest : function () {
					return !0
				},
				success : function () {},
				failure : function () {},
				complete : function () {},
				contentType : null,
				headers : null,
				data : null,
				processData : !0,
				context : window,
				escape : function (a) {
					return a
				}
			});
		a.method = a.method.toUpperCase();
		var c = this._createXmlHttpObject();
		if (b && !e && !("withCredentials" in c))
			a.onBrowserNotSupportXDR();
		else {
			if (g)
				return this._handleXDR(d, a);
			b = function () {
				if (4 ===
					c.readyState) {
					var b = c.status;
					200 <= b && 300 > b || 304 === b || 1223 === b ? a.success && a.success.call(a.context, c.responseText, c, a) : a.failure && a.failure.call(a.context, c.responseText, c, a);
					a.complete && a.complete.call(a.context, c.responseText, c, a);
					a.complete = a.success = a.failure = a.beforerequest = null
				}
			};
			a.data && ("GET" === a.method || "HEAD" === a.method ? d = Sfdc.Url.generateUrl(d, a.data, {
						escape : a.escape
					}) : !Sfdc.isString(a.data) && a.processData && (a.data = Sfdc.Url.generateQueryString("", a.data, {
								includeMark : !1,
								escape : a.escape,
								allowMultipleOfParam : !0
							})));
			a.async && (c.onreadystatechange = b);
			if (!Sfdc.isFunction(a.beforerequest) || a.beforerequest.call(a.context)) {
				c.open(a.method, d, a.async);
				if (a.headers)
					for (var f in a.headers)
						a.headers.hasOwnProperty(f) && c.setRequestHeader(f, a.headers[f]);
				a.contentType ? c.setRequestHeader("Content-Type", a.contentType) : a.data && "POST" === a.method && c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset\x3dISO-8859-13");
				c.send(a.data);
				return !a.async ? (b(), f = c.responseText, c.onreadystatechange = function () {},
					c = null, f) : c
			}
		}
	},
	_createXmlHttpObject : function () {
		if (window.XMLHttpRequest)
			return new window.XMLHttpRequest;
		try {
			return new ActiveXObject("MSXML2.XMLHTTP.3.0")
		} catch (d) {}

		return null
	},
	_handleXDR : function (d, a) {
		var b = new XDomainRequest;
		if (!Sfdc.isFunction(a.beforerequest) || a.beforerequest.call(a.context))
			return b && (b.onerror = function () {
				a.failure.call(a.context, b.responseText, b, a)
			}, b.ontimeout = function () {
				a.failure.call(a.context, b.responseText, b, a)
			}, b.onprogress = function () {}, b.onload = function () {
				a.success.call(a.context,
					b.responseText, b, a)
			}, b.open("get", d), b.send()), b
	}
});
(function (c) {
	function m(a) {
		return c.apply({
			duration : c.Animation.DEFAULT_DURATION,
			delay : c.Animation.DEFAULT_DELAY,
			onComplete : c.Function.blank(),
			tryCSS : c.Animation.DEFAULT_USE_CSS_ANIMATION,
			timing : c.Animation.DEFAULT_TIMING_FUNCTION
		}, a || {}, !0)
	}
	function q(a, b) {
		var e;
		e = c.isEmpty(a) ? c.Animation.Easing[c.Animation.DEFAULT_TIMING_FUNCTION] : c.isString(a) ? c.Animation.Easing[a] : a;
		return !e ? c.Animation.Easing[c.Animation.DEFAULT_TIMING_FUNCTION][b.toUpperCase()] : e[b.toUpperCase()]
	}
	function v(a, b) {
		b = new n(b);
		var e = new l(b.toDashed());
		e.duration = 0;
		var d = new p(a);
		d.set(e);
		return c.Dom.setPrefixedStyle(a, "transition", d.toString())
	}
	function r() {}

	function s() {}

	function k() {}

	function t() {}

	function n(a) {
		if (a instanceof n)
			return a;
		this.rawProperty = a
	}
	function u(a) {}

	function p(a) {
		this.delimiter = ", ";
		this.onParse = l.parse;
		this.getId = function () {
			return this.prop
		};
		this.parse(c.Dom.getPrefixedStyle(a, "transition"))
	}
	function l(a) {
		this.prop = a
	}
	c.provide("Sfdc.Animation", {
		DEFAULT_DURATION : 400,
		DEFAULT_DELAY : 0,
		DEFAULT_USE_CSS_ANIMATION : !1,
		DEFAULT_TIMING_FUNCTION : "Linear",
		Easing : {
			Linear : {
				CSS : "linear",
				JS : TWEEN.Easing.Linear.EaseNone
			},
			Ease : {
				CSS : "ease",
				JS : TWEEN.Easing.Sinusoidal.EaseInOut
			},
			EaseIn : {
				CSS : "ease-in",
				JS : TWEEN.Easing.Cubic.EaseIn
			},
			EaseOut : {
				CSS : "ease-out",
				JS : TWEEN.Easing.Cubic.EaseOut
			},
			EaseInOut : {
				CSS : "ease-in-out",
				JS : TWEEN.Easing.Cubic.EaseInOut
			}
		},
		css : function (a, b, e, d, f) {
			c.assert(a && b, "An element and animation definition must be specified.");
			f = m(f);
			b = new n(b);
			if (e == d)
				c.Dom.setStyle(a, b.toCamelCase(), d);
			else {
				if (f.tryCSS) {
					if (f.tryCSS &&
						this.cssTransform(a, b, e, d, f))
						return null
				} else
					v(a, b);
				f.onUpdate = function (e) {
					c.Dom.setStyle(a, b.toCamelCase(), e)
				};
				return this.animate(e, d, f)
			}
		},
		property : function (a, b, e, d, f) {
			c.assert(a && b, "An element and animation definition must be specified.");
			f = m(f);
			f.onUpdate = function (c) {
				a[b] = c
			};
			return this.animate(e, d, f)
		},
		animate : function (a, b, e) {
			c.assert(c.isFunction(e.onUpdate), "config.onUpdate must be set to a function");
			e = m(e);
			var d = !c.isDefAndNotNull(a) ? null : !isNaN(a) ? new r : c.Units.HexColor.isHexColor(a) ? new k :
				/^[\d\.-]+px$/g.test(a) ? new s : /^rgb/g.test(a) ? new t : null;
			if (d) {
				var f = {},
				g = {};
				d instanceof k ? (c.apply(f, d.toInt(a)), c.apply(g, d.toInt(b))) : (f.prop = d.toInt(a), g.prop = d.toInt(b));
				TWEEN.start();
				a = (new TWEEN.Tween(f)).to(g, e.duration).easing(q(e.timing, "JS")).onUpdate(function () {
					if (d instanceof k)
						e.onUpdate(d.fromInt(f));
					else
						e.onUpdate(d.fromInt(f.prop))
				}).onComplete(function () {
					TWEEN.stop();
					e.onComplete()
				});
				e.delay && a.delay(e.delay);
				return a.start()
			}
		},
		opacity : function (a, b, e, d) {
			function f(b) {
				c.Dom.setStyle(a,
					"opacity", b)
			}
			function g() {
				var b = "" + c.Dom.getStyle(a, "opacity");
				"0" === b && c.Dom.hideByVisibility(a);
				if (!("opacity" in a.style) && ("1" === b || "0" === b)) {
					var b = a,
					e = b.style.filter;
					c.isEmpty(e) ? b.style.opacity = "" : b.style.filter = c.String.trim(e.replace(/alpha\(opacity=(.*)\)/i, ""))
				}
				h && h()
			}
			var h;
			if (a) {
				d = m(d);
				b = Math.min(Math.max(0, b), 1);
				e = Math.min(Math.max(0, e), 1);
				h = d.onComplete;
				if (b || e)
					c.Dom.setStyle(a, "opacity", b), c.Dom.show(a);
				d.onUpdate = f;
				d.onComplete = g;
				if (b == e)
					c.Dom.setStyle(a, "opacity", e), d.onComplete();
				else
					return d.tryCSS && this.cssTransform(a, "opacity", b, e, d) ? null : this.animate(b, e, d)
			}
		},
		cssTransform : function (a, b, e, d, f) {
			function g() {
				c.un(a, "oTransitionEnd", g);
				c.un(a, "transitionend", g);
				c.un(a, "webkitTransitionEnd", g);
				f.onComplete();
				f = null
			}
			if (!a)
				return !1;
			f = m(f);
			b = new n(b);
			var h = new l(b.toDashed());
			h.duration = 0;
			var k = new p(a);
			k.set(h);
			if (!c.Dom.setPrefixedStyle(a, "transition", k.toString()))
				return !1;
			c.Dom.setStyle(a, b.toCamelCase(), e);
			h.duration = f.duration;
			h.delay = f.delay;
			h.timing = q(f.timing, "CSS");
			k.set(h);
			c.on(a, "oTransitionEnd", g);
			c.on(a, "transitionend", g);
			c.on(a, "webkitTransitionEnd", g);
			setTimeout(function () {
				c.Dom.setPrefixedStyle(a, "transition", k.toString());
				setTimeout(function () {
					c.Dom.setStyle(a, b.toCamelCase(), d)
				}, 0)
			}, 0);
			return !0
		}
	}, !0);
	r.prototype = {
		toInt : function (a) {
			return a
		},
		fromInt : function (a) {
			return a
		}
	};
	s.prototype = {
		toInt : function (a) {
			return 1 * a.replace(/\D+$/gi, "")
		},
		fromInt : function (a) {
			return a + "px"
		}
	};
	k.prototype = {
		toInt : function (a) {
			var b,
			c,
			d;
			4 == a.length && (b = a.substr(1, 1), c = a.substr(2,
						1), d = a.substr(3, 1), b = parseInt(b + b, 16), c = parseInt(c + c, 16), d = parseInt(d + d, 16));
			7 == a.length && (b = parseInt(a.substr(1, 2), 16), c = parseInt(a.substr(3, 2), 16), d = parseInt(a.substr(5, 2), 16));
			return {
				r : b,
				g : c,
				b : d
			}
		},
		fromInt : function (a) {
			return "#" + [(16 > Math.round(a.r) ? "0" : "") + Math.round(a.r).toString(16), (16 > Math.round(a.g) ? "0" : "") + Math.round(a.g).toString(16), (16 > Math.round(a.b) ? "0" : "") + Math.round(a.b).toString(16)].join("")
		}
	};
	t.prototype = {
		toInt : function (a) {
			a = a.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
			return {
				r : a[1],
				g : a[2],
				b : a[3]
			}
		},
		fromInt : function (a) {
			return c.String.format("rgb({r}, {g}, {b})", a)
		}
	};
	n.prototype = {
		rawProperty : null,
		toCamelCase : function () {
			var a = c.String.toCamelCase(this.rawProperty);
			this.toCamelCase = function () {
				return a
			};
			return a
		},
		toDashed : function () {
			var a = c.String.dashify(this.rawProperty);
			this.toDashed = function () {
				return a
			};
			return a
		}
	};
	u.prototype = {
		delimiter : ", ",
		onParse : function () {},
		$coll : {},
		get : function (a) {
			return this.$coll[a]
		},
		set : function (a) {
			this.$coll[a.getId()] = a
		},
		toString : function () {
			var a =
				[],
			b;
			for (b in this.$coll)
				this.$coll.hasOwnProperty(b) && a.push(this.$coll[b].toString());
			return a.join(this.delimiter)
		},
		parse : function (a) {
			if (a) {
				a = a.split(this.delimiter);
				for (var b, c = 0, d = a.length; c < d; c++)
					(b = this.onParse(a[c])) && (this.$coll[b.prop] = b)
			}
		}
	};
	p.prototype = new u;
	l.parse = function (a) {
		var b = new l;
		b.parse(a);
		return b
	};
	l.prototype = {
		getId : function () {
			return this.prop
		},
		parse : function (a) {
			if (!a)
				throw "Invalid string to parse.";
			a = a.split(" ");
			this.prop = a[0];
			this.duration = a[1] || 0;
			this.delay = a[2] || 0;
			a[3] &&
			(this.timing = a[3])
		},
		toString : function () {
			var a = [this.prop, this.getDuration(), this.getDelay()];
			this.timing && a.push(this.timing);
			return a.join(" ")
		},
		getDuration : function () {
			return -1 < this.duration.toString().indexOf("s") ? this.duration : this.duration + "ms"
		},
		getDelay : function () {
			return -1 < this.delay.toString().indexOf("s") ? this.delay : this.delay + "ms"
		},
		prop : "",
		duration : 0,
		delay : 0,
		timing : ""
	}
})(Sfdc);
Sfdc.provide("Sfdc.Aria", function (b) {
	var c = function () {
		if (!b.get("sfdc_aria_asstv_marquee")) {
			var a = [];
			a.push('\x3cdiv id\x3d"sfdc_aria_asstv_marquee" class\x3d"assistiveText zen-assistiveText"\x3e');
			a.push('    \x3cdiv id\x3d"sfdc_aria_msg_alert" role\x3d"alert"\x3e\x3c/div\x3e');
			a.push('    \x3cdiv id\x3d"sfdc_aria_msg_assertive" aria-live\x3d"assertive" aria-atomic\x3d"false" aria-relevant\x3d"additions"\x3e\x3c/div\x3e');
			a.push('    \x3cdiv id\x3d"sfdc_aria_msg_polite" aria-live\x3d"polite" aria-atomic\x3d"false" aria-relevant\x3d"additions"\x3e\x3c/div\x3e');
			a.push("\x3c/div\x3e");
			b.Dom.insertHTML(document.body, a.join(""))
		}
		c = function () {}

	};
	return {
		alert : function (a) {
			b.assert(b.isString(a), "msg parameter must be String");
			c();
			b.get("sfdc_aria_msg_alert").innerHTML = a
		},
		assert : function (a) {
			b.assert(b.isString(a), "msg parameter must be String");
			c();
			b.get("sfdc_aria_msg_assertive").innerHTML += a
		},
		notify : function (a) {
			b.assert(b.isString(a), "msg parameter must be String");
			c();
			b.get("sfdc_aria_msg_polite").innerHTML += a
		}
	}
}
	(Sfdc));
Sfdc.provide("Sfdc.Array", {
	indexOf : function (a, c) {
		if (Array.prototype.indexOf)
			return a.indexOf(c);
		for (var b = a.length - 1; 0 <= b; b--)
			if (a[b] === c)
				return b;
		return -1
	},
	toArray : function (a) {
		if (!Sfdc.isDefAndNotNull(a))
			return [];
		for (var c = Array(a.length), b = 0, d = a.length; b < d; b++)
			c[b] = a[b];
		return c
	},
	map : function (a, c, b) {
		Sfdc.assert(Sfdc.isArray(a), "Must provide a valid non null array.");
		Sfdc.assert(Sfdc.isFunction(c), "A valid non null function must be supplied to operate on the array.");
		if (Array.prototype.map)
			return a.map(c,
				b);
		for (var d = a.length, e = [], f = 0; f < d; f++)
			f in a && e.push(c.call(b, a[f]));
		return e
	},
	forEach : function (a, c, b) {
		Sfdc.assert(Sfdc.isArray(a), "Must provide a valid non null array.");
		Sfdc.assert(Sfdc.isFunction(c), "A valid non null function must be supplied to operate on the array.");
		if (Array.prototype.forEach)
			return a.forEach(c, b);
		for (var d = 0, e = a.length; d < e; d++)
			d in a && c.call(b, a[d], d, a)
	}
});
(function (e) {
	function w(b, a, f, c, m) {
		var h = q(a, c),
		d;
		for (d in h)
			if (!s.hasOwnProperty(d)) {
				if (c[d])
					if (e.isFunction(c[d])) {
						if ("toString" != d || !c[d].Documented)
							b[d] = t(c[d], a, f)
					} else
						b[d] = c[d];
				e.isFunction(h[d]) && (f[d] = r(h[d].bind(b), h[d]), m && (a[d] = null, delete a[d]))
			}
	}
	function r(b, a) {
		if (b && void 0 != a) {
			var f = b.toString.bind(b);
			b.toString = function (b) {
				return !b ? a + "" : e.String.format("{0}\n\nOriginal:\n\n{1}", [a + "", f()])
			};
			b.toString.Documented = !0
		}
		return b
	}
	function x(b, a, f, c) {
		c || (c = {});
		for (var m in b)
			if (!s.hasOwnProperty(m)) {
				var h =
					b[m];
				e.isFunction(h) && (h = t(h, a, f));
				c[m] && c[m] != s[m] ? c[m] = h : a[m] = h
			}
	}
	function q(b, a) {
		var f = {},
		c;
		for (c in b)
			if (!a || a[c] !== b[c])
				f[c] = b[c];
		return f
	}
	function y(b, a, f, c) {
		return t(b, a, r(function () {
				var b = q(f),
				e = q(a);
				a.parent && (a.parent._instance = c);
				var d = f.apply(a, arguments);
				a.parent && delete a.parent._instance;
				w(a, f, c, b, !0);
				w(a, a, c, e, !1);
				return d
			}, f))
	}
	function t(b, a, f) {
		return r(function () {
			a || (a = this);
			var c = a.parent;
			a.parent = f;
			var e = b.apply(a, arguments);
			a.parent = c;
			return e
		}, b)
	}
	function z(b, a, f) {
		b = new Function;
		b.prototype = f && f.prototype || a && a.prototype;
		return new b
	}
	function A(b, a) {
		b && (a || (a = this), e.isFunction(b) && (b = b.prototype), e.apply(a, b, !0))
	}
	var s = {
		parent : !0,
		constructor : !0,
		prototype : !0,
		$constructor : !0,
		$decorators : !0,
		$extends : !0,
		$implements : !0
	};
	e.provide("Sfdc.Class", function (b, a) {
		b || (b = {});
		e.isFunction(b) && (b = {
				$constructor : b
			}, void 0 != a && (b.$extends = a));
		if (b.hasOwnProperty("$constructor") && !e.isFunction(b.$constructor))
			throw Error("Sfdc.Class.ctor: '$constructor' must be a valid Function pointer.");
		if (b.hasOwnProperty("$extends") && !e.isFunction(b.$extends))
			throw Error("Sfdc.Class.ctor: '$extends' must be a valid Function pointer.");
		return function (a, c, m, h) {
			function d() {
				var n = q(this),
				k = c ? {}

				 : null;
				x(a.prototype || a, this, k, n);
				var l = h;
				if (l) {
					e.isArray(l) || (l = [l]);
					for (var p = 0; p < l.length; p++)
						A(l[p], this)
				}
				x(b, this, k);
				var l = d,
				p = k,
				u = q(this, n),
				g;
				for (g in u)
					if (!s.hasOwnProperty(g) && u.hasOwnProperty(g) && n.hasOwnProperty(g)) {
						this[g] = n[g];
						var v = r(u[g].bind(this), u[g]);
						this.parent && this.parent._instance && (this.parent._instance[g] =
								v);
						p && (p[g] = v);
						l[g] = v
					}
				k = (c ? y(a, this, c, k) : t(a, this)).apply(this, arguments);
				if ((g = m) && this) {
					e.isArray(g) || (g = [g]);
					n = {};
					for (l = 0; l < g.length; l++)
						e.implies(g[l], this, n) || e.assert(!1, n.reason)
				}
				this.constructor = d;
				if (void 0 !== k) {
					a : switch (typeof k) {
					case "number":
						k = new Number(k);
						break a;
					case "string":
						k = new String(k);
						break a
					}
					return k
				}
			}
			a || (a = new Function);
			if (e.inherits(a, c))
				throw Error(e.String.format("Sfdc.Class.ctor:'$extends' is already in the inheritance chain of '$constructor'. '$constructor': {0}, $'expected': {1}.",
						[a.toString(), c.toString()]));
			d.prototype = z(d, a, c);
			return r(d, a)
		}
		(b.$constructor, b.$extends, b.$implements, b.$decorators)
	})
})(this.Sfdc);
Sfdc.provide("Sfdc.Cookie", {
	setCookie : function (e, d, b, c, a, f, g) {
		g = g || encodeURIComponent;
		document.cookie = e + "\x3d" + g(d) + (b ? "; expires\x3d" + b.toGMTString() : "") + (c ? "; path\x3d" + c : "; path\x3d/") + (a ? "; domain\x3d" + a : "") + (!0 === f ? "; secure" : "")
	},
	getCookie : function (e, d) {
		d = d || decodeURIComponent;
		var b = document.cookie,
		c = e + "\x3d",
		a = b.indexOf("; " + c);
		if (-1 == a) {
			if (a = b.indexOf(c), 0 !== a)
				return null
		} else
			a += 2;
		var f = document.cookie.indexOf(";", a);
		-1 == f && (f = b.length);
		return d(b.substring(a + c.length, f))
	},
	deleteCookie : function (e,
		d, b) {
		if (this.getCookie(e)) {
			var c = new Date((new Date).getTime() + -1E4);
			this.setCookie(e, "", c, d, b)
		}
	}
});
Sfdc.provide("Sfdc.Data", function (b) {
	var e = {};
	return {
		set : function (a, d, c) {
			b.assert(a, "An element must be provided for Sfdc.Data.set(el, name, val);");
			b.assert(d, "A name must be defined for Sfdc.Data.set(el, name, val);");
			a = b.getUID(b.get(a));
			e[a] || (e[a] = {});
			e[a][d] = c
		},
		get : function (a, d) {
			b.assert(a, "An element must be provided for Sfdc.Data.get(el, name);");
			a = b.get(a);
			var c = null;
			b.hasUID(a) && (c = e[b.getUID(a)]);
			c && void 0 !== d && (c = c[d]);
			return c
		},
		clear : function (a, b) {
			this.set(a, b, null)
		}
	}
}
	(Sfdc));
Sfdc.provide("Sfdc.Debug", {
	describe : function (b, a) {
		a = a || Sfdc.log;
		var c = [],
		d;
		for (d in b)
			b.hasOwnProperty(d) && c.push([d, b[d]].join(" \x3d "));
		a(c.join(", "))
	},
	log : function (b, a) {
		window.console && (b.constructor == Array ? window.console.log.apply(this, arguments) : window.console.log(Sfdc.String.format(b, a)))
	},
	warn : function (b, a) {
		window.console && window.console.warn(Sfdc.String.format(b, a))
	},
	error : function (b, a) {
		window.console && window.console.error(Sfdc.String.format(b, a))
	},
	logUsage : function (b, a) {
		if (Sfdc.isDefAndNotNull(a))
			Sfdc.isArray(a) ||
			(a = [a]);
		else {
			a = [];
			for (var c in b)
				b.hasOwnProperty(c) && Sfdc.isFunction(b[c]) && a.push(c)
		}
		c = 0;
		for (var d = a.length; c < d; c++)
			Sfdc.isFunction(b[a[c]]) && Sfdc.Function.wrap(b, a[c], function (a) {
				return function () {
					Sfdc.log("Logging usage: " + a)
				}
			}
				(a[c]))
	}
});
(function (n, r) {
	n.provide("Sfdc.Dom", new function (e, g) {
		function m(a) {
			try {
				return a()
			} catch (b) {
				e.error && e.error(b)
			}
		}
		function n(a) {
			for (var b = 0, c = a.length; b < c; b++)
				m(a[b]);
			a.length = 0
		}
		function s(a, b) {
			if (a) {
				void 0 == b && (b = !0);
				var c = a.attributes;
				if (c && c.length)
					for (var d = null, f = c.length - 1; 0 <= f; f--)
						if (d = c[f].name, !("style" == d || "undefined" == typeof a[d]))
							switch (typeof a[d]) {
							case "object":
							case "function":
								a[d] = null
							}
				e.Event && e.Event.removeAll(a, !1);
				if (b && (c = a.childNodes)) {
					d = 0;
					for (f = c.length; d < f; d++)
						s(c[d], b)
				}
			}
		}
		function l(a,
			b, c, d, e) {
			if (b)
				if (b.addEventListener) {
					if (!e)
						b[a ? "addEventListener" : "removeEventListener"](c, d, !1)
				} else if (b.attachEvent && (e || 5 > arguments.length))
					b[a ? "attachEvent" : "detachEvent"]("on" + c, d)
		}
		var r = {
			A : 1,
			ABBR : 1,
			B : 1,
			CODE : 1,
			EM : 1,
			I : 1,
			IMG : 1,
			INPUT : 1,
			LABEL : 1,
			SELECT : 1,
			SMALL : 1,
			SPAN : 1,
			TEXTAREA : 1
		},
		p = ["", "Moz", "Webkit", "O"],
		q = {},
		k = null;
		this.isNode = function (a) {
			return a && "nodeType" in a
		};
		this.isElement = function (a) {
			return this.isNode(a) && a.nodeType == Node.ELEMENT_NODE
		};
		this.replace = function (a, b) {
			if (!this.isNode(a))
				throw Error("Sfdc.Dom.replace(): 'replacementNode' must be a valid Node.");
			if (!this.isNode(b))
				throw Error("Sfdc.Dom.replace(): 'targetNode' must be a valid Node.");
			if (!this.isNode(b.parentNode))
				throw Error("Sfdc.Dom.replace(): 'targetNode' must be attached to a valid Node.");
			var c = b.parentNode;
			c.insertBefore(a, b);
			c.removeChild(b);
			return a
		};
		this.setText = function (a, b) {
			e.assert(a, "No element specified!");
			a = e.get(a);
			this.updateHTML(a, "");
			a.appendChild(document.createTextNode(b));
			return this
		};
		this.getText = function (a) {
			e.assert(a, "No element specified!");
			a = e.get(a);
			return void 0 !==
			a.innerText ? a.innerText : a.textContent
		};
		this.getTextFromMarkup = function (a) {
			if (!a)
				return "";
			k || (k = document.createElement("div"));
			k.innerHTML = a;
			a = "textContent" in k ? k.textContent : k.innerText;
			k.innerHTML = "";
			return a
		};
		this.hideByDisplay = function (a) {
			e.assert(a, "No Element specified.");
			a = e.get(a);
			e.isArray(a) || (a = [a]);
			for (var b, c; b = a.pop(); )
				c = this.getStyle(b, "display"), "none" !== c && e.Data.set(b, "original-display", c), this.setStyle(b, "display", "none");
			return this
		};
		this.hideByVisibility = function (a) {
			e.assert(a,
				"No Element specified.");
			a = e.get(a);
			e.isArray(a) || (a = [a]);
			this.set(a, {
				style : {
					visibility : "hidden"
				}
			});
			return this
		};
		this.show = function (a) {
			e.assert(a, "No Element specified.");
			a = e.get(a);
			e.isArray(a) || (a = [a]);
			for (var b, c, d; b = a.pop(); )
				c = this.getStyles(b, ["visibility", "display"]), d = {},
			"hidden" === c.visibility && (d.visibility = "visible"),
			"none" === c.display && (d.display = e.Data.get(b, "original-display"), d.display || (d.display = r.hasOwnProperty(b.nodeName) ? "inline" : "block")),
			this.setStyles(b, d);
			return this
		};
		this.isVisible =
		function (a, b) {
			a = e.get(a);
			var c = this.getStyles(a, ["visibility", "display"]),
			c = !("hidden" === c.visibility || "none" === c.display);
			return !c || !b ? c : a.parentNode && "BODY" !== a.parentNode.tagName.toUpperCase() ? this.isVisible(a.parentNode, b) : !0
		};
		this.focus = function (a, b) {
			if (this.isElement(a) && a.focus)
				try {
					return a.focus(),
					b && a.select && a.select(),
					!0
				} catch (c) {}

			return !1
		};
		this.get = function (a, b) {
			a = e.get(a);
			if (e.isArray(b)) {
				for (var c = {}, d = 0, f = b.length; d < f; d++)
					c[b[d]] = a[b[d]];
				return c
			}
			return a[b]
		};
		this.getAttribute = function (a,
			b, c) {
			if (!this.isElement(a) && !e.isFunction(a && a.getAttribute))
				throw Error("Sfdc.Dom.getAttribute(): 'element' must be a valid Element or implement the method getAttribute(name).");
			a = a.getAttribute(b);
			null === a && void 0 !== c && (a = c);
			return a
		};
		this.set = function (a, b, c) {
			if (e.isArray(a)) {
				for (var d = 0, f = a.length; d < f; d++)
					this.set(a[d], b, c);
				return this
			}
			a = e.get(a);
			e.assert(a, "First parameter to Sfdc.Dom.set() was empty. It should either be an element, selector or an array of such values.");
			if (e.isObject(b)) {
				for (d in b)
					if (b.hasOwnProperty(d))
						switch (d) {
						case "attributes":
							for (f in b.attributes)
								b.attributes.hasOwnProperty(f) &&
								a.setAttribute(f, b.attributes[f]);
							break;
						case "style":
							this.setStyles(a, b[d]);
							break;
						case "innerText":
							this.setText(a, b[d]);
							break;
						default:
							c = b[d],
							e.assert("object" !== typeof c, "You cannot set objects or arrays to an element. It has the tendency to create memory leaks."),
							a[d] = c
						}
				return this
			}
			e.assert("object" !== typeof c, "You cannot set objects or arrays to an element. It has the tendency to create memory leaks.");
			a[b] = c;
			return this
		};
		this.setStyle = function (a, b, c) {
			a = e.get(a);
			"opacity" === b && !(b in a.style) &&
			(b = "filter", c = "alpha(opacity\x3d" + 100 * c + ")");
			c != this.getStyle(a, b) && (a.style[b] = c);
			return this
		};
		this.setStyles = function (a, b) {
			a = e.get(a);
			for (var c in b)
				b.hasOwnProperty(c) && this.setStyle(a, c, b[c]);
			return this
		};
		this.getStyle = function (a, b) {
			a = e.get(a);
			if (a.currentStyle) {
				if ("opacity" === b && !(b in a.style)) {
					var c = a.currentStyle.filter;
					return !c || -1 === c.indexOf("alpha") ? 1 : parseInt(c.replace(/[^\d^\.^-]/g, "")) / 100
				}
				return a.currentStyle[b]
			}
			if (document.defaultView && document.defaultView.getComputedStyle)
				return (c =
						document.defaultView.getComputedStyle(a, null)) ? c.getPropertyValue(e.String.dashify(b)) : null
		};
		this.getStyles = function (a, b) {
			a = e.get(a);
			for (var c = {}, d = 0, f = b.length, h; d < f; d++)
				h = b[d], c[h] = this.getStyle(a, h);
			return c
		};
		this.getElementXY = function (a) {
			a = e.get(a);
			var b = 0,
			c = 0;
			if (a.getBoundingClientRect)
				c = a.getBoundingClientRect(), b = Math.round(c.left), c = Math.round(c.top), g.document && document.documentElement && (b -= document.documentElement.clientLeft, c -= document.documentElement.clientTop), "fixed" !== e.Dom.getStyle(a,
					"position") && (b += e.Window.getScrollX(), c += e.Window.getScrollY());
			else
				for (; null !== a; )
					b += a.offsetLeft, c += a.offsetTop, a = a.offsetParent;
			return {
				x : b,
				y : c
			}
		};
		this.setElementXY = function (a, b) {
			a = e.get(a);
			var c = this.getElementXY(a),
			d = parseInt(this.getStyle(a, "left"), 10),
			f = parseInt(this.getStyle(a, "top"), 10),
			h = "relative" == this.getStyle(a, "position"),
			d = !isNaN(d) ? d : h ? 0 : a.offsetLeft,
			f = !isNaN(f) ? f : h ? 0 : a.offsetTop;
			this.setStyles(a, {
				left : b[0] - c.x + d + "px",
				top : b[1] - c.y + f + "px"
			})
		};
		this.getPositionXY = function (a, b, c) {
			e.assert(a,
				"Trying to get positionXY of a non existent element");
			a = e.get(a);
			b = (b || "tl").toLowerCase();
			var d = null,
			d = this.getWidth(a),
			f = this.getHeight(a);
			switch (b) {
			case "c":
				d = [Math.round(0.5 * d), Math.round(0.5 * f)];
				break;
			case "t":
				d = [Math.round(0.5 * d), 0];
				break;
			case "l":
				d = [0, Math.round(0.5 * f)];
				break;
			case "r":
				d = [d, Math.round(0.5 * f)];
				break;
			case "b":
				d = [Math.round(0.5 * d), f];
				break;
			case "tl":
				d = [0, 0];
				break;
			case "tr":
				d = [d, 0];
				break;
			case "lb":
			case "bl":
				d = [0, f];
				break;
			case "rb":
			case "br":
				d = [d, f];
				break;
			default:
				throw "Unsupported position option";
			}
			a = c ? {
				x : 0,
				y : 0
			}
			 : this.getElementXY(a);
			return [a.x + d[0], a.y + d[1]]
		};
		this.alignTo = function (a, b, c, d) {
			e.assert(a, "Trying to align a non existent element");
			e.assert(b, "Trying to align with a non existent element");
			var f = (c || "tl-bl").toLowerCase().split("-");
			c = e.Dom.getPositionXY(a, f[0], !0);
			b = e.Dom.getPositionXY(b, f[1]);
			d = d || [0, 0];
			this.setElementXY(a, [b[0] - c[0] + d[0], b[1] - c[1] + d[1]])
		};
		this.getLocalOffsetXY = function (a) {
			var b = {
				x : a.offsetLeft,
				y : a.offsetTop
			},
			c;
			try {
				c = a.offsetParent
			} catch (d) {
				return b
			}
			for (; c && "static" ==
				this.getStyle(c, "position"); ) {
				b.x += c.offsetLeft;
				b.y += c.offsetTop;
				try {
					c = c.offsetParent
				} catch (e) {
					break
				}
			}
			return b
		};
		this.deepCopy = function (a, b) {
			var c = b.createElement(a.tagName);
			if ("undefined" != typeof a.attributes && null !== a.attributes)
				for (var d = 0; d < a.attributes.length; d++)
					c.setAttribute(a.attributes[d].name, a.attributes[d].value);
			null !== a.nodeValue && c.appendChild(b.createTextNode(a.nodeValue));
			if ("undefined" != typeof a.childNodes && null !== a.childNodes)
				for (d = 0; d < a.childNodes.length; d++)
					c.appendChild(deepCopy(a.childNodes[d],
							b));
			return c
		};
		this.importNode = function (a, b) {
			e.assert(a, "Node to import is a required parameter.");
			if (b.importNode)
				return b.importNode(a, !1);
			for (var c = b.createElement(a.tagName), d = 0; d < a.attributes.length; d++)
				a.attributes[d].specified && c.setAttribute(a.attributes[d].name, a.attributes[d].value);
			return c
		};
		this.cleanListeners = function (a, b) {
			if (a) {
				var c = null;
				!e.isArray(a) && !e.Dom.isNodeList(a) && (a = [a]);
				void 0 == b && (b = !0);
				for (var d = 0, f = a.length; d < f; d++)
					c = a[d], (this.isElement(c) || c === g) && s(a[d], b)
			}
			return this
		};
		this.isNodeList = function (a) {
			return "undefined" != typeof NodeList ? a instanceof NodeList : "object" == typeof a && "number" == typeof a.length && "undefined" != typeof a.item
		};
		this.updateHTML = function (a, b, c, d) {
			a = e.get(a);
			e.isFunction(d) || (d = function () {});
			e.isDefAndNotNull(a) && e.isDefAndNotNull(b) && (this.cleanListeners(a.childNodes), a.innerHTML = b, c && e.Resource.execScripts(e.Resource.getScriptsFromHtml(a), d));
			return this
		};
		this.replaceChildrenWith = function (a, b, c, d) {
			a = e.get(a);
			if (e.isDefAndNotNull(a)) {
				b = e.get(b);
				var f =
					a.childNodes;
				this.cleanListeners(f);
				for (f = f.length; 0 <= --f; )
					a.removeChild(a.firstChild);
				a.appendChild(b);
				c && (e.isFunction(d) || (d = function () {}), e.Resource.execScripts(e.Resource.getScriptsFromHtml(a), d))
			}
			return this
		};
		this.insertHTML = function (a, b) {
			var c = [],
			d = document.createElement("DIV");
			d.innerHTML = b;
			for (var e; e = d.firstChild; )
				c.push(e), a.appendChild(e);
			return c
		};
		this.removeChild = function (a) {
			a && a.parentNode && (this.cleanListeners(a), a.parentNode.removeChild(a));
			return this
		};
		this.hasClass = function (a, b) {
			return this.isElement(a) ||
			!e.isEmpty(a) ? a.classList ? a.classList.contains(b) : 0 <= (" " + a.className + " ").indexOf(" " + b + " ") : !1
		};
		this.addClass = function (a, b) {
			if (this.isElement(a) || !e.isEmpty(a))
				if (e.isArray(b) || (b = e.isString(b) ? e.String.trim(b).split(/\s+/) : [b]), a.classList)
					for (var c = b.length - 1; 0 <= c; c--)
						e.isEmpty(b[c]) || a.classList.add(b[c]);
				else if (e.isEmpty(a.className))
					a.className = b.join(" ");
				else {
					for (var c = [], d = b.length - 1; 0 <= d; d--)
						this.hasClass(a, b[d]) || c.push(b[d]);
					0 < c.length && (a.className += " " + c.join(" "))
				}
			return this
		};
		this.removeClass =
		function (a, b) {
			if (this.isElement(a) || !e.isEmpty(a)) {
				e.isArray(b) || (b = [b]);
				if (a.classList) {
					for (var c = b.length; 0 <= c; c--)
						a.classList.remove(b[c]);
					return this
				}
				for (var c = e.String.trim, d = c(a.className).split(/\s+/), f, h = b.length - 1; 0 <= h; h--)
					f = c(b[h]), f = e.Array.indexOf(d, f), -1 != f && d.splice(f, 1);
				a.className = d.join(" ")
			}
			return this
		};
		this.toggleClass = function (a, b, c) {
			void 0 === c && (c = !this.hasClass(a, b));
			c ? this.addClass(a, b) : this.removeClass(a, b);
			return this
		};
		this.getParent = function (a, b) {
			var c = a.parentNode;
			if (!b)
				return c;
			for (; c; ) {
				if (c.getAttribute && this.isMatch(c, b))
					return c;
				c = c.parentNode
			}
			return null
		};
		this.getFirstChild = function (a, b) {
			e.assert(this.isElement(a), "Sfdc.Dom.getFirstChild: el must be an HTMLElement");
			if (e.isString(b))
				return e.get("\x3e " + b, a);
			var c = a.firstElementChild;
			if (c)
				return c;
			c = a.firstChild;
			return !c ? null : 1 === c.nodeType ? c : this.getNext(c)
		};
		this.getPrevious = function (a, b) {
			var c = a.previousElementSibling;
			if (!c)
				for (c = a.previousSibling; c && 1 !== c.nodeType; )
					c = c.previousSibling;
			if (!b)
				return c;
			for (; c; ) {
				if (this.isMatch(c,
						b))
					return c;
				c = this.getPrevious(c)
			}
			return null
		};
		this.getNext = function (a, b) {
			var c = a.nextElementSibling;
			if (!c)
				for (c = a.nextSibling; c && 1 !== c.nodeType; )
					c = c.nextSibling;
			if (!b)
				return c;
			for (; c; ) {
				if (this.isMatch(c, b))
					return c;
				c = this.getNext(c)
			}
			return null
		};
		this.isMatch = function (a, b) {
			e.isArray(a) || (a = [a]);
			return 1 === Sizzle.matches(b, a).length
		};
		this.getWidth = function (a, b) {
			return !b && !isNaN(a.clientWidth) && 0 < a.clientWidth ? a.clientWidth : a.offsetWidth || 0
		};
		this.getHeight = function (a, b) {
			return !b && !isNaN(a.clientHeight) &&
			0 < a.clientHeight ? a.clientHeight : a.offsetHeight || 0
		};
		this.getScrollBarWidth = function (a) {
			if (a)
				return a.offsetWidth - a.clientWidth;
			void 0 == this.scrollBarWidth && (a = this.create(document.body, {
						style : {
							overflow : "scroll",
							visibility : "hidden",
							width : "100px",
							height : "100px",
							position : "absolute"
						}
					}), this.scrollBarWidth = a.offsetWidth - a.clientWidth, a.parentNode.removeChild(a));
			return this.scrollBarWidth
		};
		this.computeTextWidth = function (a, b) {
			var c = 0,
			d = null;
			try {
				d = this.create(g.document.body || g.document.documentElement, {
						style : {
							position : "absolute",
							top : "-1000px",
							left : "-1000px",
							visibility : "hidden"
						}
					}, "SPAN");
				if (b) {
					var f = this.getStyles(b, "fontSize fontStyle fontWeight fontFamily textTransform letterSpacing".split(" "));
					this.setStyles(d, {
						fontSize : f.fontSize,
						fontStyle : f.fontStyle,
						fontWeight : f.fontWeight,
						fontFamily : f.fontFamily,
						textTransform : f.textTransform,
						letterSpacing : f.letterSpacing
					})
				}
				this.setText(d, a);
				c = this.getWidth(d)
			} catch (h) {
				e.error(h)
			}
			finally {
				d && this.removeChild(d)
			}
			return c
		};
		this.getPrefixedStyle = function (a, b) {
			b = e.String.toCamelCase(b);
			var c = p,
			d = q[b],
			f = a.style;
			if (d)
				return f[d];
			for (var h = 0, g = c.length; h < g; h++)
				if (c[h].length && (b = b.charAt(0).toUpperCase() + b.substr(1)), d = c[h] + b, d in f)
					return c[h] && (p = ["", c[h]]), q[b] = d, f[d];
			return null
		};
		this.setPrefixedStyle = function (a, b, c) {
			b = e.String.toCamelCase(b);
			var d = p,
			f = q[b];
			a = a.style;
			if (f)
				return a[f] = c, !0;
			for (var h = 0, g = d.length; h < g; h++)
				if (d[h].length && (b = b.charAt(0).toUpperCase() + b.substr(1)), f = d[h] + b, f in a)
					return d[h] && (p = ["", d[h]]), q[b] = f, a[f] = c, !0;
			return !1
		};
		this.create = function (a, b, c, d) {
			c =
				(d || a && a.ownerDocument || document).createElement(c || "div");
			b && this.set(c, b);
			a && a.appendChild(c);
			return c
		};
		this.getActualHeight = function (a, b) {
			var c = this.getStyle(a, "position"),
			d = this.getStyle(a, "visibility"),
			e = this.getStyle(a, "display");
			"none" === e && ("relative" !== c && "absolute" != c) && this.setStyles(a, {
				position : "absolute",
				display : "block",
				visibility : "hidden"
			});
			var h = /.*px$/,
			g = b ? a.scrollHeight : a.offsetHeight,
			l = this.getStyle(a, "paddingTop"),
			k = this.getStyle(a, "paddingBottom");
			if (!h.exec(l) || !h.exec(k))
				return g;
			l = l.substring(0, l.length - 2);
			k = k.substring(0, k.length - 2);
			this.setStyles(a, {
				position : c,
				visibility : d,
				display : e
			});
			return g - l - k
		};
		this.onReady = function () {
			function a() {
				try {
					g.document.documentElement.doScroll("left"),
					b()
				} catch (c) {
					g.setTimeout(a, 13)
				}
			}
			function b() {
				c || (g.document.body ? (c = !0, l(!1, g.document, "DOMContentLoaded", b, !1), l(!1, g.document, "readystatechange", b, !0), l(!1, g, "load", b), n(d)) : g.setTimeout(b, 13))
			}
			var c = !1,
			d = [];
			(function () {
				if (g.document && "complete" === g.document.readyState)
					b();
				else {
					l(!0, g.document,
						"DOMContentLoaded", b, !1);
					l(!0, g.document, "readystatechange", b, !0);
					l(!0, g, "load", b);
					var c = e.userAgent.isIE && (e.userAgent.isIE6 || e.userAgent.isIE7 || e.userAgent.isIE8),
					d = m(function () {
							return g === g.top
						}) || !1,
					k = g.document && g.document.documentElement && g.document.documentElement.doScroll;
					c && (d && k) && a()
				}
			})();
			return function (a) {
				if (c)
					return this.onReady = m, m(a);
				d.push(a)
			}
		}
		();
		this.onload = function () {
			function a() {
				b = !0;
				l(!1, g, "load", a);
				n(c)
			}
			var b = !1,
			c = [];
			l(!0, g, "load", a);
			return function (a) {
				if (b)
					return this.onload =
						m, m(a);
				c.push(a)
			}
		}
		();
		this.contains = function (a, b) {
			if (!a || !b)
				return !1;
			e.assert(this.isNode(a), "Sfdc.Dom.contains: 'container' must be a valid node.");
			e.assert(this.isNode(b), "Sfdc.Dom.contains: 'target' must be a valid node.");
			for (var c = b.parentNode; c; ) {
				if (c === a)
					return !0;
				c = c.parentNode
			}
			return !1
		}
	}
		(n, r))
})(Sfdc, this);
(function (a) {
	a.provide("Sfdc.Effects", {
		fadeIn : function (b, c) {
			var d = a.Dom.isVisible(b) ? a.Dom.getStyle(b, "opacity") : 0;
			a.Animation.opacity(b, d, 1, {
				onComplete : c || a.Function.blank(),
				duration : 500,
				tryCSS : !0
			})
		},
		fadeOut : function (b, c) {
			var d = a.Dom.getStyle(b, "opacity");
			a.Animation.opacity(b, d, 0, {
				onComplete : c || a.Function.blank(),
				duration : 500,
				tryCSS : !0
			})
		},
		rollIn : function (b, c) {
			var d = a.Dom.getActualHeight(b) + "px";
			a.Dom.setStyle(b, "height", "1px");
			a.Dom.show(b);
			a.Animation.css(b, "height", "1px", d, {
				onComplete : c || a.Function.blank(),
				duration : 500,
				timing : a.Animation.Easing.Linear
			})
		},
		rollOut : function (b, c) {
			var d = a.Dom.getActualHeight(b) + "px";
			a.Dom.show(b);
			a.Animation.css(b, "height", d, "1px", {
				onComplete : function () {
					a.Dom.hideByVisibility(b);
					a.Dom.hideByDisplay(b);
					a.Dom.setStyle(b, "height", "");
					a.isFunction(c) && c()
				},
				duration : 500,
				timing : a.Animation.Easing.EaseIn
			})
		},
		rollInRollOut : function (b, c, d) {
			a.Effects.rollIn(b, function () {
				setTimeout(function () {
					a.Effects.rollOut(b, d)
				}, c)
			})
		}
	})
})(Sfdc);
(function (d, l) {
	function n() {
		function n(a, c, b, e) {
			var f = d.Data.get(a, c) || {};
			f[d.getUID(b)] = e ? r(b, e) : b;
			d.Data.set(a, c, f)
		}
		function p(a, c, b, e, f) {
			var g = {
				element : a,
				eventName : c,
				handler : e ? r(b, e) : b,
				originalHandler : b,
				useCapture : f || !1
			};
			f = d.getUID(a);
			h[f] || (h[f] = []);
			h[f].push(g);
			a.addEventListener ? g.element.addEventListener(g.eventName, g.handler, g.useCapture) : a.attachEvent ? (b = g.handler, g.handler = function (c) {
				b.call(e || a, d.apply(c || l.event, {
						currentTarget : g.element
					}, !0))
			}, g.element.attachEvent("on" + g.eventName, g.handler)) :
			n(a, c, b, e)
		}
		function s(a, c, b, e, f) {
			var g = d.Data.get(a, c);
			c = {
				eventName : c,
				target : a
			};
			if (g)
				for (var h in g)
					if (g.hasOwnProperty(h) && d.isFunction(g[h]))
						try {
							g[h].apply(b.context || a, [c].concat(b.data || []))
						} catch (k) {
							if (d.isFunction(f) && f(k), e)
								throw k;
						}
			return !0
		}
		function r(a, c) {
			return function () {
				a.apply(c, arguments)
			}
		}
		function t(a) {
			var c = null,
			b;
			for (b in h)
				if (h.hasOwnProperty(b))
					for (c = h[b]; c.length; )
						try {
							q(c.shift())
						} catch (e) {
							d.log(e.message || e.description)
						}
			if (k)
				for (var f in k)
					if (k.hasOwnProperty(f))
						try {
							k[f](a),
							k[f] =
								null
						} catch (g) {
							d.log(g.message || g.description)
						}
			k = null;
			h = {}

		}
		function u(a, c, b) {
			a = d.Data.get(a, c);
			b = d.getUID(b);
			a && a[b] && (a[b] = null, delete a[b])
		}
		function q(a) {
			var c = d.getUID(a.element);
			if (h.hasOwnProperty(c)) {
				for (var b = h[c], e = null, f = 0; f < b.length; f++) {
					e = b[f];
					if (e === a) {
						b.splice(f, 1);
						break
					}
					if (e.element === a.element && e.eventName === a.eventName && e.handler === a.handler && e.useCapture === a.useCapture) {
						e.element = null;
						b.splice(f, 1);
						break
					}
				}
				b.length || (h[c] = null, delete h[c])
			}
			a.element.removeEventListener ? a.element.removeEventListener(a.eventName,
				a.handler, a.useCapture) : a.element.detachEvent ? a.element.detachEvent("on" + a.eventName, a.handler) : u(a.element, a.eventName, a.handler);
			a.element = null
		}
		var m = d.isArray(arguments[0]) ? arguments[0] : Array.prototype.slice.call(arguments, 0),
		h = {},
		k = null;
		this.haltOnError = d.isDebug;
		this.onError = null;
		this.getMouseX = function (a) {
			a = this.getEvent(a);
			return a.pageX ? a.pageX : d.Window.getScrollX() + a.clientX
		};
		this.getMouseY = function (a) {
			a = this.getEvent(a);
			return a.pageY ? a.pageY : d.Window.getScrollY() + a.clientY
		};
		this.getSrcElement =
		function (a) {
			a = this.getEvent(a);
			return !a ? null : a.currentTarget || a.srcElement
		};
		this.addExpectedEvent = function (a) {
			0 > d.Array.indexOf(m, a) && m.push(a)
		};
		this.getExpectedEvents = function () {
			return m.slice(0)
		};
		this.getEvent = function (a) {
			return a || l.event
		};
		this.getEventTarget = function (a, c) {
			a = this.getEvent(a);
			if (!a)
				return null;
			var b = a.target || a.srcElement;
			return !c || Sizzle.filter(c, [b]).length ? b : d.Dom.getParent(b, c)
		};
		this.getEventToElement = function (a) {
			a = this.getEvent(a);
			return a.relatedTarget ? a.relatedTarget : a.toElement
		};
		this.isCustomEvent = function (a) {
			return -1 < d.Array.indexOf(m, a) || -1 !== a.indexOf(":")
		};
		this.isKeyAction = function (a, c) {
			a = this.getEvent(a);
			var b = a.which || a.keyCode;
			if (d.isArray(c)) {
				for (var e = 0, f = c.length; e < f; e++)
					if (b === c[e])
						return !0;
				return !1
			}
			return b === c
		};
		this.stop = function (a) {
			a = this.getEvent(a);
			d.assert(a, "No event object was passed to stop().");
			this.preventDefault(a);
			this.stopPropagation(a)
		};
		this.stopPropagation = function (a) {
			a = this.getEvent(a);
			d.assert(a, "No event object was passed to stopPropagation().");
			a.cancelBubble = !0;
			a.stopPropagation && a.stopPropagation()
		};
		this.preventDefault = function (a) {
			a = this.getEvent(a);
			d.assert(a, "No event object was passed to preventDefault().");
			a.preventDefault ? a.preventDefault() : a.returnValue = !1
		};
		this.fireEvent = function (a, c, b) {
			b || (b = {});
			if (this.isCustomEvent(c))
				return s(a, c, b, this.haltOnError, this.onError);
			try {
				var e;
				if (l.document.createEvent && a.dispatchEvent) {
					var f = l.document.createEvent("HTMLEvents");
					f.initEvent(c, !0, !0);
					e = a.dispatchEvent(f)
				} else
					e = l.document.createEventObject &&
						a.fireEvent ? a.fireEvent("on" + c, l.document.createEventObject()) : s(a, c, b, !0);
				return e
			} catch (g) {
				if (d.isFunction(this.onError))
					this.onError(g);
				if (this.haltOnError)
					throw g;
			}
		};
		this.add = function (a, c, b, e, f) {
			d.assert(a, "Sfdc.Event.add(): 'element' must be a valid Object or Node.");
			d.assert(c, "Sfdc.Event.add(): 'eventName' must be a valid String.");
			if (this.isCustomEvent(c)) {
				if (m.length && 0 > d.Array.indexOf(m, c))
					throw Error(d.String.format("Sfdc.Event.EventManager.add(): unknown 'eventName' '{0}'. The following events are supported: '{1}'",
							[c, m.join("', '")]));
				return n(a, c, b, e)
			}
			k || (p(l, "unload", t), k = {});
			a == l && "unload" == c.toLowerCase() ? (a = d.getUID(b), k.hasOwnProperty(a) || (k[a] = e ? r(b, e) : b)) : p(a, c, b, e, f)
		};
		this.remove = function (a, c, b, e) {
			d.assert(a, "Sfdc.Event.remove(): 'element' must be a valid Object or Node.");
			d.assert(c, "Sfdc.Event.remove(): 'eventName' must be a valid String.");
			if (this.isCustomEvent(c))
				return u(a, c, b);
			if (a == l && "unload" == c.toLowerCase())
				a = d.getUID(b), k && k.hasOwnProperty(a) && (k[a] = null, delete k[a]);
			else {
				var f = d.getUID(a);
				if (h.hasOwnProperty(f))
					for (var f = h[f], g = null, m = 0; m < f.length; m++)
						if (g = f[m], g.element === a && g.eventName === c && g.originalHandler === b && g.useCapture === !!e) {
							q(g);
							return
						}
				q({
					element : a,
					eventName : c,
					handler : b,
					useCapture : e || !1
				})
			}
		};
		this.removeAll = function (a, c) {
			d.assert(a && a.nodeType, "Sfdc.Event.removeAll(): 'element' must be a valid Object or Node.");
			if (1 == a.nodeType) {
				void 0 == c && (c = !0);
				var b = d.getUID(a);
				if (h.hasOwnProperty(b)) {
					for (; h[b] && h[b].length; )
						try {
							q(h[b].shift())
						} catch (e) {
							d.log(e.message || e.description)
						}
					h[b] =
						null;
					delete h[b]
				}
				if (c && (a === l && (a = l.document), a.hasChildNodes()))
					for (var b = a.childNodes, f = 0, g = b.length; f < g; f++)
						1 == b[f].nodeType && this.removeAll(b[f], c)
			}
		};
		this.mouseExited = function (a, c) {
			for (var b = this.getEventToElement(a); b && b != l.document.body; ) {
				if (b == c)
					return !1;
				b = b.parentNode
			}
			return !0
		};
		this.dispose = function () {
			t()
		};
		this.keyCode = {
			BACKSPACE : 8,
			TAB : 9,
			ENTER : 13,
			ESC : 27,
			SPACE : 32,
			PAGEDOWN : 33,
			PAGEUP : 34,
			ARROW_L : 37,
			ARROW_U : 38,
			ARROW_R : 39,
			ARROW_D : 40,
			SHIFT : 16,
			CTRL : 17,
			ALT : 18,
			CAPSLOCK : 20,
			KEY_0 : 48,
			KEY_1 : 49,
			KEY_2 : 50,
			KEY_3 : 51,
			KEY_4 : 52,
			KEY_5 : 53,
			KEY_6 : 54,
			KEY_7 : 55,
			KEY_8 : 56,
			KEY_9 : 57,
			KEY_A : 65,
			KEY_B : 66,
			KEY_C : 67,
			KEY_D : 68,
			KEY_E : 69,
			KEY_F : 70,
			KEY_G : 71,
			KEY_H : 72,
			KEY_I : 73,
			KEY_J : 74,
			KEY_K : 75,
			KEY_L : 76,
			KEY_M : 77,
			KEY_N : 78,
			KEY_O : 79,
			KEY_P : 80,
			KEY_Q : 81,
			KEY_R : 82,
			KEY_S : 83,
			KEY_T : 84,
			KEY_U : 85,
			KEY_V : 86,
			KEY_W : 87,
			KEY_X : 88,
			KEY_Y : 89,
			KEY_Z : 90,
			WINDOWS_L : 91,
			WINDOWS_R : 92,
			SELECT : 93,
			NUMPAD_0 : 96,
			NUMPAD_1 : 97,
			NUMPAD_2 : 98,
			NUMPAD_3 : 99,
			NUMPAD_4 : 100,
			NUMPAD_5 : 101,
			NUMPAD_6 : 102,
			NUMPAD_7 : 103,
			NUMPAD_8 : 104,
			NUMPAD_9 : 105,
			NUMPAD_MULTIPLY : 106,
			NUMPAD_PLUS : 107,
			NUMPAD_MINUS : 109,
			NUMPAD_DECIMAL : 110,
			NUMPAD_DIVIDE : 111,
			F1 : 112,
			F2 : 113,
			F3 : 114,
			F4 : 115,
			F5 : 116,
			F6 : 117,
			F7 : 118,
			F8 : 119,
			F9 : 120,
			F10 : 121,
			F11 : 122,
			F12 : 123,
			PAUSE : 19,
			END : 35,
			HOME : 36,
			INSERT : 45,
			DELETE : 46,
			NUMLOCK : 144,
			SCROLLLOCK : 145,
			SEMICOLON : d.userAgent.isFirefox ? 59 : 186,
			EQUALS : 61,
			COMMA : 188,
			DASH : 109,
			PERIOD : 190,
			FORWARDSLASH : 191,
			GRAVE : 192,
			OPENBRACKET : 219,
			BACKSLASH : 220,
			CLOSEBRACKET : 221,
			APOSTROPHE : 222,
			PROCESS : 229
		};
		d.isDebug && (this.Debug = {
				getAllEvents : function () {
					return h
				}
			})
	}
	if (!d.resolve("Sfdc.Event")) {
		var p = new n;
		p.EventManager = n;
		d.provide("Sfdc.Event",
			p);
		d.define("Sfdc.Event.EventManager", function () {
			return n
		})
	}
})(Sfdc, this);
Sfdc.provide("Sfdc.Forms", {
	submitFormActionURL : function (a, b) {
		a.action = b;
		a.submit()
	},
	setElementsEnabledBasedOnCheckbox : function (a, b) {
		var c = document.getElementById(a);
		if (null !== c && null !== b)
			for (var e = 0; e < b.length; e++) {
				var f = c,
				d = document.getElementById(b[e]);
				d && (d.style.display = f.checked ? "" : "none")
			}
	},
	borrowForm : function (a, b, c) {
		a = document.getElementById(a);
		var e = a.action,
		f = a.target;
		null !== b && (a.action = b);
		null !== c && (a.target = c);
		if (a.onsubmit)
			a.onsubmit();
		a.submit();
		a.action = e;
		a.target = f
	},
	formatPhone : function (a) {
		a.value =
			trim(a.value);
		var b = a.value,
		c = "",
		e = -1;
		if (0 < b.length && "+" != b.charAt(0)) {
			var f = 0;
			"1" == b.charAt(0) && (b = b.substring(1, b.length));
			for (i = 0; i < b.length; i++) {
				var d = b.charAt(i);
				"0" <= d && "9" >= d && (0 === f ? c += "(" : 3 == f ? c += ") " : 6 == f && (c += "-"), c += d, f++);
				if (!("0" <= d && "9" >= d) && " " != d && "-" != d && "." != d && "(" != d && ")" != d) {
					e = i;
					break
				}
			}
			0 <= e && (c += " " + b.substring(e, b.length));
			10 == f && 40 >= c.length && (a.value = c)
		}
		return !0
	}
});
Sfdc.provide("Sfdc.Function", function (c) {
	function f() {}

	return {
		blank : function () {
			return f
		},
		wrap : function (a, b, d, g) {
			c.assert(a, "Specify an object to operate on.");
			c.assert(c.isFunction(d), "Must wrap with another function.");
			var e = a[b];
			e && c.isFunction(e) ? a[b] = function (a, b) {
				return g ? function () {
					var c = a.apply(b, arguments);
					d.apply(b, arguments);
					return c
				}
				 : function () {
					d.apply(b, arguments);
					return a.apply(b, arguments)
				}
			}
			(e, a) : a[b] = d
		},
		delay : function (a, b, d, c) {
			c = c || [];
			d = d || window;
			return {
				timeoutId : setTimeout(function () {
					a.apply(d,
						c)
				}, b),
				cancel : function () {
					clearTimeout(this.timeoutId)
				}
			}
		},
		delayCallback : function (a, b, d) {
			return function () {
				c.Function.delay(a, b, d, arguments)
			}
		},
		bind : function (a, b, d) {
			c.assert(c.isFunction(a) && b, "A function must be provided for it to be bound to a context.");
			d = d || [];
			return Function.prototype.bind ? a.bind.apply(a, [b].concat(d)) : function () {
				return a.apply(b || window, d.concat(c.Array.toArray(arguments)))
			}
		},
		getName : function (a) {
			if (!c.isFunction(a))
				throw Error("Sfdc.Function.getName: 'method' must be a valid Function pointer.");
			var b = null;
			c.String.trim(a.toString()).match(/\bfunction\s?([^(]*)\(/) && (b = c.String.trim(RegExp.$1));
			return b || "[anonymous]"
		},
		getParameters : function (a) {
			if (!c.isFunction(a))
				throw Error("Sfdc.Function.getParameters: 'method' must be a valid Function pointer.");
			a = a.toString();
			var b = a.indexOf("(") + 1;
			return a.substring(b, a.indexOf(")", b)).replace(/\s/g, "").split(",")
		}
	}
}
	(Sfdc));
Sfdc.provide("Sfdc.History", function (q) {
	function m(a, b) {
		var d,
		k;
		if (q.isArray(a)) {
			d = 0;
			for (k = a.length; d < k; )
				b(a[d++])
		} else
			for (d in a)
				a.hasOwnProperty(d) && b(d, a[d])
	}
	function u(a) {
		function b(a, f, h) {
			m(a, function (a) {
				a.cb.call(a.scope, f, h, a.data)
			})
		}
		function d(a) {
			return q.Url.getUrlParameters(a)
		}
		var k = [],
		c = null,
		g = null;
		this.updateState = function (a) {
			var b = [];
			null === g && (g = d(n.getState()));
			1 === arguments.length ? m(q.isObject(a) ? a : d(a), function (a, b) {
				g[a] = b
			}) : g[arguments[0]] = arguments[1];
			m(g, function (a, l) {
				l !== r &&
				b.push(a + "\x3d" + encodeURIComponent(l))
			});
			n.setState(b.join("\x26"))
		};
		this.replaceState = function (a) {
			g = {};
			this.updateState(a)
		};
		this.handleState = function (a, f) {
			a = d(a);
			f = d(f);
			0 !== k.length && b(k, a, f);
			null !== c && m(a, function (a, l) {
				var d = f[a];
				l !== d && c[a] !== r && b(c[a], l, d)
			});
			g = a
		};
		this.addListener = function (a) {
			if ("string" === typeof a[0]) {
				var b = a[0],
				d = a[1],
				l = a[2];
				a = a[3];
				null === c && (c = {});
				c[b] || (c[b] = []);
				c[b].push({
					cb : d,
					data : l || null,
					scope : a || null
				})
			} else
				"function" === typeof a[0] && k.push({
					cb : a[0],
					data : a[1] || null,
					scope : a[2] ||
					null
				})
		};
		m(a, this.addListener)
	}
	var r,
	e,
	b = window,
	s = [],
	n,
	t = !1;
	n = function () {
		var a = null,
		e = null,
		d = !1,
		k = null,
		c,
		g = !0,
		m = function () {
			var f = document.createElement("iframe"),
			c = document.createElement("p"),
			l = function () {
				var a = f.contentWindow.document.getElementById("hidden-state-field");
				return null === a ? null : a.innerText
			},
			g = function (a) {
				var b = f.contentWindow.document;
				c.innerText = a;
				b.open();
				b.write('\x3chtml\x3e\x3cbody\x3e\x3cspan id\x3d"hidden-state-field"\x3e' + c.innerHTML + "\x3c/span\x3e\x3c/body\x3e\x3c/html\x3e");
				b.close()
			},
			m = function () {
				var c,
				e,
				p,
				h,
				n = f.contentWindow;
				!n || !n.document ? setTimeout(m, 20) : (e = l(), c = b.location.hash, d && 0 === c.length ? g("#!/" + b.location.search.slice(1)) : g(c), setInterval(function () {
						p = l();
						h = b.location.hash;
						if (e !== p) {
							if (e && "#" != e || p && "#" != p) {
								b.location.hash = p;
								var d = p.slice(3),
								f = null !== e ? e.slice(3) : e;
								k(d, f);
								a();
								e = c = p
							}
						} else if (h !== c && (c && "#" != c || h && "#" != h))
							c = h, g(h)
					}, 100))
			};
			a = function () {
				return l().slice(3)
			};
			e = function (a) {
				g("#!/" + a);
				window.location.hash = "#!/" + a
			};
			f.style.display = "none";
			document.body.appendChild(f);
			m()
		};
		return {
			setState : function (a) {
				e(a)
			},
			getState : function () {
				return a()
			},
			isBrowserSupported : function () {
				return g
			},
			init : function (f, h) {
				q.userAgent.isIE6 || (k = f, h.useQuery !== r && (d = h.useQuery), !("onhashchange" in window) || 8 > document.documentMode ? m(h) : (Boolean(b.history && b.history.pushState && h.usePushState) ? (a = function () {
							return b.location.search.slice(1)
						}, e = function (a) {
							b.history.pushState({}, "Sfdc.History", "?" + a);
							b.onpopstate()
						}, b.onpopstate = function () {
							var b = a();
							k(b, c);
							a();
							c = a()
						}) : (a = function () {
							var a = b.location.href.split("#")[1];
							return a ? a.slice(2) : ""
						}, e = function (a) {
							b.location.hash = "!/" + a
						}, b.onhashchange !== r || window.hasOwnProperty("onhashchange") ? ("" === a() && d && (b.location.hash = "!/" + b.location.search.slice(1)), b.onhashchange = function () {
								var b = a();
								k(b, c);
								a();
								c = a()
							}) : g = !1), c = a(), k(c, void 0), a()))
			}
		}
	}
	();
	return {
		onChange : function () {
			var a = arguments;
			e ? e.addListener(a) : s.push(a)
		},
		update : function () {
			e.updateState.apply(e, arguments)
		},
		replace : function (a) {
			e.replaceState(a)
		},
		isBrowserSupported : function () {
			return n.isBrowserSupported()
		},
		init : function (a) {
			a =
				a || {};
			a.window && (b = a.window);
			e = new u(s);
			n.init(e.handleState, a);
			this.init = function () {};
			t = !0
		},
		isInit : function () {
			return t
		}
	}
}
	(Sfdc));
Sfdc.provide("Sfdc.JSON", function (f) {
	function g(a, b, d) {
		if ("undefined" !== typeof JSON && JSON.parse)
			return JSON.parse(a);
		if (d)
			a = eval("(" + a + ")");
		else
			return !1;
		return b ? b(a, {}) : a
	}
	function h(a) {
		for (var b = f.getConst("AjaxServlet", "CSRF_PROTECT"), b = [b, b.replace("\n", "")], d = 0, e = b.length; d < e; d++) {
			var c = b[d];
			if (0 === a.indexOf(c))
				return a.slice(c.length)
		}
		f.assert(!1, "CSRF protect string not added to servlet response.")
	}
	return {
		parseSafe : function (a, b) {
			return g(a, b, !1)
		},
		parse : function (a, b) {
			return g(a, b, !0)
		},
		parseWithCSRF : function (a,
			b) {
			if (!f.isString(a))
				return null;
			var d = h(a);
			return !/^\(?("(\\.|[^"\\\n\r])*?"|[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t])+?\)?$/g.test(d) ? null : eval(["false||(", ")"].join(d))
		},
		stringify : function (a, b, d) {
			if ("undefined" !== typeof JSON && JSON.stringify) {
				if (Array.prototype.toJSON) {
					var e = Array.prototype,
					c = e.toJSON;
					delete e.toJSON;
					var f = JSON.stringify(a, b, d);
					e.toJSON = c;
					return f
				}
				return JSON.stringify(a, b, d)
			}
			if (void 0 === a)
				return "";
			if (null === a)
				return "null";
			switch (a.constructor) {
			case String:
				return '"' + a.replace(/\\/g, "\\\\").replace(/\"/g,
					'\\"').replace(/\r|\n|\f/g, "\\n") + '"';
			case Array:
				e = [];
				for (c = 0; c < a.length; c++)
					e.push(arguments.callee(a[c]));
				return "[" + e.join(",") + "]";
			case Object:
				e = [];
				for (c in a)
					a.hasOwnProperty(c) && e.push(arguments.callee(c) + ":" + arguments.callee(a[c]));
				return "{" + e.join(",") + "}";
			default:
				return a.toString()
			}
		}
	}
}
	(Sfdc));
Sfdc.provide("Sfdc.LocalStorage", function (h) {
	function f() {
		h.localStorage ? (k = p, e = new l(h.localStorage)) : h.document && h.document.body.addBehavior ? (k = q, e = new m(r, s, h.document)) : (k = t, e = new u);
		f = function () {}

	}
	function n(a, b) {
		Sfdc.log("Removing all local storage data with prefix: " + b);
		for (var d = a.keys(), c = 0; c < d.length; c++)
			0 === d[c].indexOf(b) && (Sfdc.log("\tRemoving: " + d[c]), a.removeItem(d[c]))
	}
	function l(a) {
		this.ls = a
	}
	function u() {
		var a = {};
		this.clear = function () {
			a = {}

		};
		this.getItem = function (b) {
			return a[b]
		};
		this.keys =
		function (b) {
			return Object.keys(a)
		};
		this.length = function (a) {
			return this.keys().length
		};
		this.removeItem = function (b) {
			delete a[b]
		};
		this.setItem = function (b, d) {
			a[b] = d
		}
	}
	function m(a, b, d) {
		var c = d.createElement("span");
		c.id = a;
		c.addBehavior("#default#userData");
		d.body.appendChild(c);
		c.load(a);
		this.el = c;
		this.userDataPath = a;
		this.userDataName = b;
		try {
			this.data = Sfdc.JSON.parse(c.getAttribute(b)),
			this.data || (this.data = {})
		} catch (e) {
			this.data = {}

		}
	}
	var t = 0,
	p = 1,
	q = 3,
	e = {},
	k = 0,
	r = "sfdc_user_data",
	s = "user_data",
	g = {
		clear : function (a) {
			f();
			try {
				e.clear(a)
			} catch (b) {
				return g.onError(b)
			}
		},
		getItem : function (a) {
			f();
			try {
				return e.getItem(a)
			} catch (b) {
				return g.onError(b)
			}
		},
		keys : function () {
			f();
			try {
				return e.keys()
			} catch (a) {
				return g.onError(a)
			}
		},
		length : function () {
			f();
			return e.length()
		},
		removeItem : function (a) {
			f();
			try {
				e.removeItem(a)
			} catch (b) {
				return g.onError(b)
			}
		},
		setItem : function (a, b) {
			f();
			try {
				e.setItem(a, b)
			} catch (d) {
				return g.onError(d)
			}
		},
		getMode : function () {
			f();
			return k
		},
		onError : function (a) {
			throw {
				name : "StorageError",
				message : a.message
			};
		}
	};
	l.prototype = {
		clear : function (a) {
			a ? n(this, a) : this.ls.clear()
		},
		getItem : function (a) {
			return this.ls.getItem(a)
		},
		keys : function () {
			return Object.keys(this.ls)
		},
		length : function () {
			return this.ls.length
		},
		removeItem : function (a) {
			return this.ls.removeItem(a)
		},
		setItem : function (a, b) {
			return this.ls.setItem(a, b)
		}
	};
	m.prototype = {
		clear : function (a) {
			a ? n(this, a) : this.data = {};
			this.saveData()
		},
		getItem : function (a) {
			return this.data.hasOwnProperty(a) ? this.data[a] : null
		},
		keys : function () {
			return Object.keys(this.data)
		},
		length : function () {
			var a =
				0,
			b;
			for (b in this.data)
				this.data.hasOwnProperty(b) && (a += 1);
			return a
		},
		removeItem : function (a) {
			delete this.data[a];
			this.saveData()
		},
		saveData : function () {
			var a = Sfdc.JSON.stringify(this.data);
			this.el.setAttribute(this.userDataName, a);
			this.el.save(this.userDataPath)
		},
		setItem : function (a, b) {
			this.data[a] = b;
			this.saveData()
		}
	};
	return g
}
	(this));
Sfdc.provide("Sfdc.Logging", function (g) {
	function l(a) {
		if (!k) {
			var b = g.Logging.LogLevel.GACK;
			try {
				var e = g.Logging.formatError(a);
				g.log(e.subject, b, e);
				g.logServer("WINDOWERROR", e, b)
			} catch (d) {}

		}
	}
	function m(a, b) {
		var e = {
			msg : 1,
			url : 1,
			message : 1,
			stack : 1
		},
		d;
		for (d in b)
			if (b.hasOwnProperty(d)) {
				var c = g.isFunction(b[d]),
				f = a.hasOwnProperty(d),
				h = e.hasOwnProperty(d);
				!c && (!f && !h) && (a[d] = b[d])
			}
	}
	var k = !1;
	return {
		startWindowErrorListener : function () {
			if (window.onerror && window.onerror.cache)
				for (var a = window.onerror.cache, b =
						0, e = a.length; b < e; b++)
					l(a[b]);
			g.Function.wrap(window, "onerror", function (a, c, b) {
				l({
					msg : a,
					url : c,
					lines : b
				})
			});
			g.Logging.startWindowErrorListener = function () {
				k = !1
			}
		},
		stopWindowErrorListener : function () {
			k = !0
		},
		formatError : function (a) {
			var b = {},
			e = "(" + window.location.pathname + ") ";
			if (g.isString(a.msg))
				b.subject = e + a.msg, g.isDefAndNotNull(a.url) && (e = a.url.split("/").pop(), b.trace = this._createTraceLine("", "", e, a.lines)), m(b, a);
			else {
				var d = g.userAgent;
				try {
					var c = a.message,
					f = null;
					if (d.isFirefox)
						f = this._parseFFError(a.stack.split("\n"));
					else if (d.isChrome)
						f = this._parseChromeError(a.stack.split("\n"));
					else if (d.isSafari)
						f = this._parseSafariError(a);
					else
						for (var f = [], h = arguments.callee.caller, d = {}; h; ) {
							if (!d[h]) {
								f.push("Unable to trace caller past recursion entry point.");
								break
							}
							var k = h.toString(),
							l = k.substr(k.indexOf("function"), k.indexOf(")") + 1);
							f.push(l);
							d[h] = !0;
							h = h.caller
						}
					b.subject = e + c;
					m(b, a);
					f && (b.trace = f.join("\\n"))
				} catch (n) {
					a.message && (b.subject = e + a.message)
				}
			}
			return b
		},
		_parseFFError : function (a) {
			for (var b = [], e = a.length, d = 0; d < e; d++) {
				var c =
					a[d];
				if (c) {
					var f = c.substring(0, c.indexOf("@")),
					c = c.split("/"),
					c = c[c.length - 1],
					c = c.split(":");
					b.push(this._createTraceLine("", f, c[0], c[1]))
				}
			}
			return b
		},
		_parseChromeError : function (a) {
			for (var b = [], e = a.length, d = 0; d < e; d++) {
				var c = g.String.trim(a[d]);
				if (c && 0 === c.indexOf("at")) {
					var f = ["", ""],
					c = c.split(" ");
					3 === c.length && (f = c[1].split("."));
					c = c[3 === c.length ? 2 : 1].split("/");
					c = c[c.length - 1].split(":");
					b.push(this._createTraceLine(f[0], f[1], c[0], c[1]))
				}
			}
			return b
		},
		_parseSafariError : function (a) {
			var b = a.sourceURL.split("/");
			return this._createTraceLine("", "", b[b.length - 1], a.line)
		},
		_createTraceLine : function (a, b, e, d) {
			return [a, b, e, d].join(":")
		}
	}
}
	(Sfdc));
Sfdc.provide("Sfdc.Logging.LogLevel", {
	INFO : "INFO",
	WARNING : "WARNING",
	ERROR : "ERROR",
	GACK : "GACK"
});
Sfdc.provide("Sfdc.Resource", function (c) {
	function l(a, b) {
		c.Dom.create(null, {
			onload : b,
			onerror : b,
			src : a
		}, "IMG")
	}
	function m(a, b) {
		c.Dom.create(document.body, {
			width : 0,
			height : 0,
			onload : b,
			onerror : b,
			data : a
		}, "OBJECT")
	}
	var e,
	g = {};
	return {
		addCSS : function (a) {
			e || (e = document.head || document.getElementsByTagName("head")[0]);
			return c.Dom.create(e, {
				type : "text/css",
				href : a,
				rel : "stylesheet"
			}, "LINK")
		},
		addJavaScript : function (a, b, d) {
			b = b || c.Function.blank();
			d = d || document.body;
			return c.Dom.create(d, {
				type : "text/javascript",
				onreadystatechange : function () {
					if ("complete" ==
						this.readyState || "loaded" == this.readyState)
						this.onreadystatechange = this.onload = null, b.call(this)
				},
				onload : b,
				onerror : b,
				src : a
			}, "script", d.ownerDocument)
		},
		addJavaScripts : function (a, b) {
			function d() {
				a.length ? c.Resource.addJavaScript(a.shift(), d) : b()
			}
			b = b || c.Function.blank();
			this.cacheScripts(a, d)
		},
		addInlineJavaScript : function (a) {
			c.Dom.create(document.body, {
				type : "text/javascript",
				text : a
			}, "script")
		},
		execScripts : function (a, b) {
			function d() {
				if (0 < a.length) {
					var h = a.shift(),
					f = h.src;
					f ? g[f] || (c.Resource.addJavaScript(f,
							d), g[f] = !0) : (c.Resource.addInlineJavaScript(h.text), d())
				} else
					b()
			}
			a = c.Array.toArray(a);
			b = b || c.Function.blank();
			if (a.length) {
				var k = c.Array.map(a, function (a) {
						return (a = a.src) ? void 0 !== g[a] && a : null
					});
				this.cacheScripts(k, d)
			} else
				b()
		},
		cacheScripts : function (a, b) {
			var d = 0,
			k = a.length,
			h = c.userAgent.isIE ? l : m;
			b = b || c.Function.blank();
			for (var f = function () {
				++d === k && b()
			}, e = 0, g; e < k; e++)
				(g = a[e]) ? h(g, f) : f()
		},
		getScriptsFromHtml : function (a) {
			return c.select("script", c.get(a))
		}
	}
}
	(Sfdc));
Sfdc.provide("Sfdc.String", function (d) {
	function n(a) {
		switch (a) {
		case "'":
			return "\x26#39;";
		case "\x26":
			return "\x26amp;";
		case "\x3c":
			return "\x26lt;";
		case "\x3e":
			return "\x26gt;";
		case '"':
			return "\x26quot;";
		case "\u00a9":
			return "\x26copy;";
		case "\u2028":
			return "\x3cbr\x3e";
		case "\u2029":
			return "\x3cp\x3e";
		default:
			return a
		}
	}
	return {
		capitalizationModes : {
			None : 0,
			CamelCase : 1,
			AfterControlCharacters : 2,
			RemoveControlCharacters : 4,
			ReplaceControlCharacters : 8,
			ReduceWordBody : 16
		},
		capitalize : function (a, b) {
			var c = this.capitalizationModes;
			d.isEmpty(b) && (b = c.None);
			var e = b & c.CamelCase,
			f = b & c.RemoveControlCharacters,
			g = b & c.ReplaceControlCharacters,
			h = b & c.ReduceWordBody;
			return (a || "").replace(b & c.AfterControlCharacters || f || g ? /(\s|(^[-_.]?)|[-_.])(\S)([^\s-_.]*)/g : /(\s|(^))(\S)(\S*)/g, function (a, b, c, d, m) {
				a = "" === b || c === b;
				f && " " !== b ? b = "" : g && "" !== b && (b = " ");
				d = e && a ? d.toLowerCase() : d.toUpperCase();
				h && (m = m.toLowerCase());
				return b + d + m
			})
		},
		ltrim : function (a) {
			return a && a.replace(/^\s*/, "") || ""
		},
		rtrim : function (a) {
			return a && a.replace(/\s*$/, "") || ""
		},
		trim : function (a) {
			return a &&
			a.replace(/^\s*(\S*(?:\s+\S+)*)\s*$/, "$1") || ""
		},
		dashify : function (a) {
			return a.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
		},
		decryptXOR : function (a, b) {
			d.assert(d.isDefAndNotNull(b), "Key cannot be undefined or null");
			b = this.base64Decode(b, !1);
			for (var c = this.base64Decode(a, !1), e = [], f, g = 0, h = c.length; g < h; g++)
				f = decodeURIComponent(String.fromCharCode(c.charCodeAt(g)^(b.charCodeAt(g) || 0))), e.push(f);
			return e.join("")
		},
		toCamelCase : function (a) {
			a = a.replace(/^-/g, "").split("-");
			for (var b = 1, c = a.length, e; b < c; b++)
				e =
					a[b], a[b] = e.charAt(0).toUpperCase() + e.substr(1);
			return a.join("")
		},
		getIntValue : function (a, b) {
			if (0 === b)
				throw Error("Radix not equal to 0 must be supplied");
			var c = parseInt(a, b || 10);
			return isNaN(c) ? 0 : c
		},
		format : function (a, b) {
			return a.replace(/{([^{}]*)}/g, function (a, e) {
				var f = !b.hasOwnProperty(e) && -1 < e.indexOf(".") ? d.resolve(e, b) : b[e];
				return "string" === typeof f || "number" === typeof f ? f : a
			})
		},
		escapeToUTF8 : function (a) {
			for (var b = "", c = 0; c < a.length; ) {
				var e = a.charCodeAt(c++),
				d;
				if (128 > e)
					b += String.fromCharCode(e);
				else if (191 < e && 224 > e)
					d = a.charCodeAt(c++), b += String.fromCharCode((e & 31) << 6 | d & 63);
				else {
					d = a.charCodeAt(c++);
					var g = a.charCodeAt(c++),
					b = b + String.fromCharCode((e & 15) << 12 | (d & 63) << 6 | g & 63)
				}
			}
			return b
		},
		base64Decode : function (a, b) {
			var c = [],
			e,
			f,
			g = "",
			h,
			l = "",
			k = 0;
			a = a.replace(RegExp("[^A-Za-z0-9+/\x3d]", "g"), "");
			do
				e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".indexOf(a.charAt(k++)), f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".indexOf(a.charAt(k++)), h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".indexOf(a.charAt(k++)),
				l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".indexOf(a.charAt(k++)), e = e << 2 | f >> 4, f = (f & 15) << 4 | h >> 2, g = (h & 3) << 6 | l, c.push(String.fromCharCode(e)), 64 != h && c.push(String.fromCharCode(f)), 64 != l && c.push(String.fromCharCode(g));
			while (k < a.length);
			return void 0 === b || b ? d.String.escapeToUTF8(c.join("")) : c.join("")
		},
		escapeToHtml : function (a, b) {
			if (null == a || "" === a)
				return "";
			d.assert(a && d.isString(a), "Expected escapeToHtml(String input, Boolean escapeNewline)");
			d.assert(d.isBoolean(b || !1),
				"Expected escapeToHtml(String input, Boolean escapeNewline)");
			if (d.isEmpty(a))
				return a;
			var c = a.replace(/[&<>"'\u00a9\u2028\u2029]/g, n);
			b && (c = c.replace(/\n/g, "\x3cbr\x3e"));
			return c
		},
		unescapeHtml : function (a, b) {
			if (null === a)
				return "";
			d.assert(a && d.isString(a), "expected unescapeHtml(string input, boolean replaceBRwithNewline)");
			d.assert(d.isBoolean(b || !1), "expected unescapeHtml(string input, boolean replaceBRwithNewline)");
			if (d.isEmpty(a))
				return a;
			var c = a.replace(/&lt;/g, "\x3c").replace(/&gt;/g, "\x3e").replace(/&quot;/g,
					'"').replace(/&apos;/g, "'").replace(/&#39;/g, "'").replace(/&copy;/g, "\ufffd\ufffd").replace(/&amp;/g, "\x26");
			b && (c = c.replace(/<br>/g, "\n").replace(/<br\/>/g, "\n"));
			return c
		}
	}
}
	(Sfdc));
(function (a, e) {
	var d = e.Mustache;
	a.provide("Sfdc.Template", {
		compile : function (b, c) {
			return d.compile(b, c)
		},
		render : function (b, c, a) {
			return d.render(b, c, a)
		}
	})
})(Sfdc, this);
Sfdc.provide("Sfdc.Units.HexColor", {
	$constructor : function (a) {
		Sfdc.assert(Sfdc.isString(a) || Sfdc.isObject(a), "Must specify a color parameter");
		this.val = a
	},
	toString : function () {
		return this.val
	},
	toRGB : function () {
		var a = this.toInt();
		return Sfdc.Units.RGBColor.fromInt(a)
	},
	toInt : function () {
		return Sfdc.Units.HexColor.toInt(this.val)
	}
});
Sfdc.apply(Sfdc.Units.HexColor, {
	fromInt : function (a) {
		if (!Sfdc.isObject(a) || Sfdc.isString(a))
			throw Error("Requires rgb object as input - { r: 0, g: 0, b: 0 }");
		a = "#" + [(16 > Math.round(a.r) ? "0" : "") + Math.round(a.r).toString(16), (16 > Math.round(a.g) ? "0" : "") + Math.round(a.g).toString(16), (16 > Math.round(a.b) ? "0" : "") + Math.round(a.b).toString(16)].join("");
		return new Sfdc.Units.HexColor(a)
	},
	toInt : function (a) {
		if (Sfdc.isObject(a) || -1 < a.indexOf("rgb"))
			throw Error("Requires hex color as input - {String} #fffff");
		var b,
		c,
		d;
		4 == a.length && (b = a.substr(1, 1), c = a.substr(2, 1), d = a.substr(3, 1), b = parseInt(b + b, 16), c = parseInt(c + c, 16), d = parseInt(d + d, 16));
		7 == a.length && (b = parseInt(a.substr(1, 2), 16), c = parseInt(a.substr(3, 2), 16), d = parseInt(a.substr(5, 2), 16));
		return {
			r : b,
			g : c,
			b : d
		}
	},
	isHexColor : function (a) {
		return /^#?(([a-fA-F0-9]){3}){1,2}$/g.test(a)
	}
});
Sfdc.provide("Sfdc.Units.RGBColor", {
	$constructor : function (a) {
		Sfdc.assert(Sfdc.isString(a), "Must specify a color parameter as string.");
		this.val = a
	},
	toString : function () {
		return this.val.replace(/\s+/g, "")
	},
	toHex : function () {
		return Sfdc.Units.HexColor.fromInt(this.toInt())
	},
	toInt : function () {
		return Sfdc.Units.RGBColor.toInt(this.val)
	}
});
Sfdc.apply(Sfdc.Units.RGBColor, {
	fromInt : function (a) {
		if (!Sfdc.isObject || Sfdc.isString(a))
			throw Error("Requires rgb object as input - { r: 0, g: 0, b: 0 }");
		a = Sfdc.String.format("rgb({r}, {g}, {b})", a);
		return new Sfdc.Units.RGBColor(a)
	},
	toInt : function (a) {
		if (-1 < a.indexOf("#"))
			throw Error("Requires RGB color as input - rgb(0, 0, 0)");
		a = a.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
		return {
			r : a[1],
			g : a[2],
			b : a[3]
		}
	}
});
Sfdc.provide("Sfdc.Units.Pixel", {
	$constructor : function (a) {
		this.val = a
	},
	toString : function () {
		if (Sfdc.isNumber(this.val))
			return this.val + "px";
		if (Sfdc.isString(this.val))
			return this.val
	},
	toInt : function () {
		return Sfdc.Units.Pixel.toInt(this.val)
	},
	fromInt : function () {
		return Sfdc.Units.Pixel.fromInt(this.val)
	}
});
Sfdc.apply(Sfdc.Units.Pixel, {
	fromInt : function (a) {
		Sfdc.assert(!(Sfdc.isString(a) && -1 < a.indexOf("px")), "Parameter already formatted to 'px'");
		return new Sfdc.Units.Pixel(a + "px")
	},
	toInt : function (a) {
		Sfdc.assert(!Sfdc.isNumber(a), "Parameter already an int");
		return 1 * a.replace(/\D+$/gi, "")
	}
});
Sfdc.provide("Sfdc.Url", function (f) {
	var g = document.createElement("a");
	return {
		getHash : function (a) {
			a = a || window;
			return a.location.hash.substring(1)
		},
		setHash : function (a, b) {
			if ("undefined" == typeof a || "" === a)
				return !1;
			b = b || window;
			b.location.hash = a;
			return !0
		},
		generateQueryString : function (a, b, c) {
			var l = [],
			d = {},
			k = null;
			c = f.apply(c || {}, {
					includeMark : !0,
					escape : encodeURIComponent,
					fullUrl : !1,
					allowMultipleOfParam : !1
				}, !1);
			var h = a.split("?"),
			d = 1 < h.length ? h[1] : "";
			if (!b)
				return c.fullUrl ? a : d;
			d = this.getUrlParameters(d, c);
			if (c.allowMultipleOfParam)
				for (var e in b)
					d.hasOwnProperty(e) ? f.isArray(d[e]) ? d[e].push(b[e]) : d[e] = [d[e], b[e]] : d[e] = b[e];
			else
				d = f.apply(d, b, !0);
			for (var g in d)
				if (d.hasOwnProperty(g) && (k = d[g], f.isDefAndNotNull(k)))
					if (c.allowMultipleOfParam && f.isArray(k)) {
						a = 0;
						for (b = k.length; a < b; a++)
							l.push(g + "\x3d" + c.escape(k[a]))
					} else
						l.push(g + "\x3d" + c.escape(k));
			return c.fullUrl ? h[0] + "?" + l.join("\x26") : c.includeMark ? "?" + l.join("\x26") : l.join("\x26")
		},
		generateUrl : function (a, b, c) {
			c = f.apply(c || {}, {
					fullUrl : !0
				}, !0);
			return this.generateQueryString(a,
				b, c)
		},
		getHostFromUrl : function (a) {
			if (!f.isString(a))
				return "";
			g.href = a;
			return (a = a.match(/:(\d+)/g)) ? (g.hostname || window.location.hostname) + a[0] : g.hostname || window.location.hostname
		},
		getUrlParameters : function (a, b) {
			if (!a)
				return {};
			-1 < a.indexOf("?") && (a = a.split("?")[1]);
			var c = {};
			b = f.apply(b || {}, {
					unescape : decodeURIComponent,
					allowMultipleOfParam : !1
				});
			for (var g = a.split("\x26"), d = 0, k = g.length, h = null, e; d < k; d++)
				f.isEmpty(g[d]) || (h = g[d].split("\x3d"), e = h[0], h = b.unescape(h[1]), b.allowMultipleOfParam && f.isDefAndNotNull(c[e]) ?
					f.isArray(c[e]) ? c[e].push(h) : c[e] = [c[e], h] : c[e] = h);
			return c
		},
		navigateTo : function (a, b) {
			b = b || window;
			/^#/.test(a) ? this.setHash(a, b) : b.navigateTo ? b.navigateTo(a) : b.location.href = a
		},
		resolveUrl : function (a) {
			return f.UserContext && f.UserContext.getUrl ? f.UserContext.getUrl(a) : a
		},
		stripDomainFromUrl : function (a) {
			if (!f.isString(a) || !a.length)
				return "";
			g.href = a;
			a = g.pathname;
			return !/^\//gi.test(a) ? "/" + a : a
		}
	}
}
	(Sfdc));
Sfdc.provide("Sfdc.Window", {
	getScrollX : function () {
		return window.pageXOffset ? window.pageXOffset : document.documentElement && document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft || 0
	},
	getScrollY : function () {
		return window.pageYOffset ? window.pageYOffset : document.documentElement && document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop || 0
	},
	getWindowHeight : function () {
		if ("number" == typeof window.innerHeight)
			return window.innerHeight;
		if (document.documentElement && document.documentElement.clientHeight)
			return document.documentElement.clientHeight;
		if (document.body && document.body.clientHeight)
			return document.body.clientHeight
	},
	getWindowWidth : function () {
		if ("number" == typeof window.innerWidth)
			return window.innerWidth;
		if (document.documentElement && document.documentElement.clientWidth)
			return document.documentElement.clientWidth;
		if (document.body && document.body.clientWidth)
			return document.body.clientWidth
	}
});
(function (a) {
	a.provide("Sfdc.IDisposable", {
		dispose : function () {}

	})
})(Sfdc);
Sfdc.provide("Sfdc.IEquatable", {
	equals : function (a, b) {},
	getHashCode : function (a) {}

});
Sfdc.provide("Sfdc.IObservable", {
	attach : function (a, b) {},
	detach : function (a, b) {},
	notify : function (a, b) {}

});
Sfdc.onReady(function () {
	function l(a) {
		try {
			var c = Sfdc.get("common.css" === a ? "rcCatcher2" : "rcCatcher");
			if (c) {
				var b = Sfdc.userAgent,
				g = Sfdc.Dom.getStyle(c, "paddingTop"),
				e = Sfdc.Dom.getStyle(c, "marginTop");
				b.isIE6 ? (f("ie6", g, a), d("ie6", e, a)) : b.isIE7 ? (f("ie7", g, a), d("ie7", e, a)) : b.isIE8 ? (f("ie8", g, a), d("ie8", e, a)) : b.isIE9 ? (f("ie9", g, a), d("ie9", e, a)) : b.isIE10 || (b.isIE ? k("UnknownIE") : b.isChrome ? (f("chrome", g, a), d("chrome", e, a)) : b.isFirefox ? (f("firefox", g, a), d("firefox", e, a)) : b.isSafari && 0 > navigator.userAgent.indexOf("Mobile") &&
					(f("safari", g, a), d("safari", e, a)))
			}
		} catch (y) {}

	}
	function f(a, c, b) {
		c !== t[a] && (m(), k("MismatchedBrowser", b, a, v[c] || c))
	}
	function d(a, c, b) {
		c != w[a] && (m(), k("MismatchedType", b, a, x[c] || c))
	}
	function m() {
		Sfdc.Cookie.setCookie("rccTraceMode", "high", null)
	}
	function k(a, c, b, g) {
		try {
			var e = null,
			f = null,
			d = null,
			k = null,
			p = null,
			l = null,
			m = null;
			navigator && (e = navigator.userAgent);
			document && document.documentMode && (f = document.documentMode);
			window && window.location && (d = window.location.href, d = encodeURIComponent(d));
			if (document &&
				document.styleSheets && document.styleSheets.length)
				for (var q = document.styleSheets, n, k = [], h = 0, r = q.length; h < r; h++)
					q[h].href && (n = Sfdc.Url.stripDomainFromUrl(q[h].href), n = encodeURIComponent(n), k.push(n));
			for (var p = [], s = Sfdc.select("meta"), h = 0, r = s.length; h < r; h++)
				s[h].outerHTML && p.push(s[h].outerHTML);
			l = Sfdc.Cookie.getCookie("rccTrace", function (a) {
					return a
				});
			m = Sfdc.Cookie.getCookie("rccTraceMode", function (a) {
					return a
				});
			Sfdc.logServer("RogueCssCatcher", {
				msg : a || "null",
				trace : l || "null",
				mode : m || "null",
				expected : b ||
				"null",
				actual : g || "null",
				file : c || "null",
				page : d || "null",
				docMode : f || "null",
				userAgent : e || "null",
				sheets : k || "null",
				meta : p || "null"
			}, Sfdc.Logging.LogLevel.WARNING);
			u = !0
		} catch (t) {}

	}
	if (window.rccEnabled) {
		var u = !1,
		t = {
			firefox : "1px",
			chrome : "2px",
			ie6 : "3px",
			ie7 : "4px",
			ie8 : "5px",
			ie9 : "6px",
			safari : "7px"
		},
		v = {
			"1px" : "firefox",
			"2px" : "chrome",
			"3px" : "ie6",
			"4px" : "ie7",
			"5px" : "ie8",
			"6px" : "ie9",
			"7px" : "safari"
		},
		w = {
			firefox : "1px",
			chrome : "3px",
			ie6 : "2px",
			ie7 : "2px",
			ie8 : "1px",
			ie9 : "1px",
			safari : "3px"
		},
		x = {
			"1px" : "default",
			"2px" : "ie67",
			"3px" : "wk",
			"4px" : "wkm"
		};
		l("common.css");
		l("list.css");
		Sfdc.Cookie.getCookie("rccTraceMode", function (a) {
			"high" === a && !u && k("ClientTracer", null, null, null)
		})
	}
});
Sfdc.provide("SfdcApp.MruHovers", {
	SECTION_SELECTOR : "*[data-hovdata]",
	SECTION_ATTRIBUTE : "data-hovdata",
	ITEM_SELECTOR : "*[data-hovid]",
	ITEM_ATTRIBUTE : "data-hovid",
	URL_LOADER_ELEMENT_ID : "urlQueryStr",
	URL_LOADER_DATA_ATTRIB_NAME : "data-urlquerystr",
	dbgRegisterSectionCalled : !1,
	global_data : {},
	_url : null,
	isHoverSection : function (a) {
		return !!a.getAttribute(SfdcApp.MruHovers.SECTION_ATTRIBUTE)
	},
	getGlobalUrlPart : function () {
		var a;
		this._url || ((a = Sfdc.get(this.URL_LOADER_ELEMENT_ID)) ? this._url = a.getAttribute(this.URL_LOADER_DATA_ATTRIB_NAME) ||
				null : this.global_data && (this._url = this.global_data.url || null));
		return this._url
	},
	getSectionData : function (a) {
		var d = SfdcApp.MruHovers,
		b,
		c,
		f,
		e;
		b = a.getAttribute(d.SECTION_ATTRIBUTE);
		if (!b)
			return {};
		b = b.split(",");
		e = {};
		for (var g; b.length; )
			if (g = b.shift())
				f = g.indexOf("\x3d"), c = g.substring(0, f), f = g.substring(f + 1), Sfdc.assert(c && f, "both key and value has to be defined"), e[c] = f;
		e.url = d.getGlobalUrlPart();
		Sfdc.assert(Sfdc.isString(e.dir), "section requires a direction sectionId\x3d" + a.id);
		return e
	},
	registerHovers : function () {
		var a =
			SfdcApp.MruHovers,
		d = [],
		b,
		c;
		if (a.getGlobalUrlPart() && (d = Sfdc.select(a.SECTION_SELECTOR), (c = d.length) && !a.isRegistered(d[0])))
			for (; c--; )
				b = d[c], a.setRegistered(b, !0), a.registerSection(null, b, !0)
	},
	setRegistered : function (a, d) {
		Sfdc.Data.set(a, "SfdcApp.MruHovers.registered", d)
	},
	isRegistered : function (a) {
		return Sfdc.Data.get(a, "SfdcApp.MruHovers.registered") || !1
	},
	registerSection : function (a, d) {
		function b(a, b) {
			return function () {
				MRUHoverDetail.getHover(a)[b]()
			}
		}
		var c,
		f,
		e,
		g;
		this.dbgRegisterSectionCalled = !0;
		if (Sfdc.Dom.hasClass(d,
				"mruList")) {
			g = this.getSectionData(d);
			MRUHoverDetail.loaderURL = UserContext.getUrl("/ui/common/MRUHoverLoader?");
			for (f = Sfdc.select(SfdcApp.MruHovers.ITEM_SELECTOR, d); f.length; )
				c = f.shift(), e = c.getAttribute(this.ITEM_ATTRIBUTE), Sfdc.on(c, "mouseover", b(e, "show")), Sfdc.on(c, "mouseout", b(e, "hide")), Sfdc.on(c, "focus", b(e, "show")), Sfdc.on(c, "blur", b(e, "hide")), c.firstChild.id = "mru" + e, MRUHoverDetail.loaderURL += "hoverIds\x3d" + e + "\x26";
			g.url && (MRUHoverDetail.loaderURL += g.url + "\x26");
			MRUHoverDetail.loaderURL +=
			"noChatter\x3dtrue"
		}
	},
	registerOnLoad : function () {
		Sfdc.on(window, "load", function () {
			var a;
			if (Sfdc.isEmpty(this.global_data)) {
				if (a = window.bodyOnLoad)
					window.bodyOnLoad = function () {
						a();
						SfdcApp.MruHovers.registerHovers()
					}
			} else
				this.registerHovers()
		}, this);
		this.registerOnLoad = function () {}

	}
});
SfdcApp.MruHovers.registerOnLoad();
Sfdc.ns("SfdcApp.Controls.TabOrganizer");
SfdcApp.Controls.TabOrganizer = function () {
	if ((this.tabBarContainer = document.getElementById(TabOrganizerConstants.TAB_BAR_ID)) && !("TABLE" === this.tabBarContainer.tagName || !Sfdc.UserContext || !UserContext.orgPreferences.getBoolean("TabOrganizer")))
		this.delayResizeFire = null, this.parentContainer = Sfdc.get("tabContainer"), this.moreTabsTab = Sfdc.get(TabOrganizerConstants.MORE_TABS_TAB_ID), this.moreTabsContainer = Sfdc.get(TabOrganizerConstants.MORE_TABS_LIST_ID), this.referenceElement = this.tabBarContainer, this.maxAllowedWidth =
			this.getMaxAllowedWidth(), this.tabs = [], this.blackTabIndex = this.allTabsTabIndex = this.moreTabsTabIndex = null, this.tabsCombinedWidth = 0, this.firstRun = !0, this.init(), Sfdc.on(this.moreTabsTab, "mouseover", function () {
			Sfdc.Dom.addClass(this.moreTabsTab, SfdcApp.Controls.TabOrganizer.TAB_OVER_CLASS)
		}, this), Sfdc.on(this.moreTabsTab.childNodes[0], "focus", function () {
			Sfdc.Dom.addClass(this.moreTabsTab, SfdcApp.Controls.TabOrganizer.TAB_OVER_CLASS)
		}, this), Sfdc.on(this.moreTabsTab, "mouseout", function () {
			Sfdc.Dom.removeClass(this.moreTabsTab,
				SfdcApp.Controls.TabOrganizer.TAB_OVER_CLASS)
		}, this), Sfdc.on(this.moreTabsTab.childNodes[0], "blur", function () {
			Sfdc.Dom.removeClass(this.moreTabsTab, SfdcApp.Controls.TabOrganizer.TAB_OVER_CLASS)
		}, this), Sfdc.on(document, "click", function (b) {
			this.handleClick(b)
		}, this), window.sfdcPage && sfdcPage.appendToOnResizeQueue(Sfdc.Function.bind(function () {
				var b = this.getMaxAllowedWidth();
				if (!(this.maxAllowedWidth === b || this.tabsCombinedWidth - this.tabs[this.moreTabsTabIndex][1] <= b && Sfdc.Dom.hasClass(this.moreTabsTab,
							SfdcApp.Controls.TabOrganizer.NOT_NEEDED_CLASS))) {
					clearTimeout(this.delayResizeFire);
					var a = this;
					this.delayResizeFire = setTimeout(function () {
							a.organize()
						}, 150)
				}
			}, this))
};
SfdcApp.Controls.TabOrganizer.MINIMUM_BODY_WIDTH = 800;
SfdcApp.Controls.TabOrganizer.ACTIVE_CLASSES = ["zen-active", "primaryPalette", "brandPrimaryBgr"];
SfdcApp.Controls.TabOrganizer.TAB_OVER_CLASS = "zen-moreTabsOver";
SfdcApp.Controls.TabOrganizer.TAB_ACTIVE_CLASS = "zen-moreTabsActive";
SfdcApp.Controls.TabOrganizer.NOT_NEEDED_CLASS = "zen-notNeeded";
SfdcApp.Controls.TabOrganizer.prototype = {
	init : function () {
		for (var b = this.tabBarContainer.childNodes, a, c = 0, d = b.length; c < d; c++)
			a = b[c], a.nodeType === Node.ELEMENT_NODE && (this.tabs.push([a, a.offsetWidth]), this.tabsCombinedWidth += a.offsetWidth, a = a.id.toLowerCase(), -1 < a.indexOf("alltab") && (this.allTabsTabIndex = c), -1 < a.indexOf("moretabs") && (this.moreTabsTabIndex = c), -1 < a.indexOf("sysadmin") && (this.blackTabIndex = c));
		this.organize()
	},
	getMaxAllowedWidth : function () {
		return Math.max(this.referenceElement.offsetWidth,
			SfdcApp.Controls.TabOrganizer.MINIMUM_BODY_WIDTH)
	},
	organize : function () {
		for (var b = this.firstRun ? this.maxAllowedWidth : this.getMaxAllowedWidth(), a = this.getReservedWidth(b), c, d, h, f, g, e = 0, k = this.tabs.length; e < k; e++)
			g = this.tabs[e][0], c = e == this.allTabsTabIndex, d = e == this.moreTabsTabIndex, h = e == this.blackTabIndex, f = Sfdc.Dom.hasClass(g, SfdcApp.Controls.TabOrganizer.ACTIVE_CLASSES[0]) && !d, !c && (!d && !h) && (a += this.tabs[e][1], f && (a += 6)), (c = a <= b || c || d || h) ? (this.tabBarContainer.appendChild(g), f && Sfdc.Dom.removeClass(this.moreTabsTab,
					SfdcApp.Controls.TabOrganizer.ACTIVE_CLASSES)) : (this.moreTabsContainer.appendChild(g), f && Sfdc.Dom.addClass(this.moreTabsTab, SfdcApp.Controls.TabOrganizer.ACTIVE_CLASSES));
		a <= b ? Sfdc.Dom.addClass(this.moreTabsTab, SfdcApp.Controls.TabOrganizer.NOT_NEEDED_CLASS) : Sfdc.Dom.removeClass(this.moreTabsTab, SfdcApp.Controls.TabOrganizer.NOT_NEEDED_CLASS);
		this.maxAllowedWidth = b;
		this.firstRun = !1
	},
	getReservedWidth : function (b) {
		var a = null != this.allTabsTabIndex ? this.getCachedTabWidth(this.allTabsTabIndex) : 0,
		c = null !=
			this.blackTabIndex ? this.getCachedTabWidth(this.blackTabIndex) : 0,
		d = this.getCachedTabWidth(this.moreTabsTabIndex);
		return this.tabsCombinedWidth - d < b ? 0 : a + c + d
	},
	getCachedTabWidth : function (b) {
		return this.tabs[b][1]
	},
	handleClick : function (b) {
		var a = Sfdc.Event.getEventTarget(b),
		c = null != Sfdc.Dom.getParent(a, "#" + TabOrganizerConstants.MORE_TABS_TAB_ID),
		d = !1;
		a == this.moreTabsTab || c ? Sfdc.Dom.hasClass(this.moreTabsTab, SfdcApp.Controls.TabOrganizer.TAB_ACTIVE_CLASS) && (d = !0) : d = !0;
		this.moreTabsTab.childNodes && 0 < this.moreTabsTab.childNodes.length &&
		(d ? (Sfdc.Dom.removeClass(this.moreTabsTab, SfdcApp.Controls.TabOrganizer.TAB_ACTIVE_CLASS), this.moreTabsTab.childNodes[0].title = LC.getLabel("Tab", "MoreTabsMenuClosedAssistiveText"), this.parentContainer.style.zIndex = "") : (Sfdc.Dom.addClass(this.moreTabsTab, SfdcApp.Controls.TabOrganizer.TAB_ACTIVE_CLASS), this.moreTabsTab.childNodes[0].title = LC.getLabel("Tab", "MoreTabsMenuOpenAssistiveText"), this.parentContainer.style.zIndex = "1000"));
		c && Sfdc.Event.stopPropagation(b)
	}
};
NonUddListViewport.prototype = new ListViewport;
NonUddListViewport.constructor = ListViewport;
NonUddListViewport.superclass = ListViewport.prototype;
function NonUddListViewport(a, b, c) {
	ListViewport.apply(this, [a, void 0, b, void 0, !1]);
	this.allowColumnMove = !1;
	this.url = c
}
NonUddListViewport.prototype.updateFilterLinks = function () {};
AccessibleAutoCompleteInputElement = function (a, b, c, d, e, g, f) {
	AutoCompleteInputElement.apply(this, [a, b, c, d, !0, e, g, f]);
	this.groupedSuggestions = null;
	null !== this.element && (this.element.setAttribute("role", "combobox"), this.element.setAttribute("aria-autocomplete", "list"), this.element.setAttribute("aria-haspopup", "true"), this.element.setAttribute("aria-expanded", "false"))
};
AccessibleAutoCompleteInputElement.prototype = new AutoCompleteInputElement;
AccessibleAutoCompleteInputElement.prototype.initACBox = function () {
	AutoCompleteInputElement.prototype.initACBox.call(this);
	this.acBox.div.setAttribute("role", "listbox")
};
AccessibleAutoCompleteInputElement.prototype.hideACBox = function () {
	AutoCompleteInputElement.prototype.hideACBox.call(this);
	this.element.setAttribute("aria-expanded", "false")
};
AccessibleAutoCompleteInputElement.prototype.showACBox = function () {
	AutoCompleteInputElement.prototype.showACBox.call(this);
	this.element.setAttribute("aria-expanded", "true")
};
AccessibleAutoCompleteInputElement.prototype.handleNav = function (a) {
	KEY_TAB == a.keyCode ? this.clearSuggestions() : AutoCompleteInputElement.prototype.handleNav.call(this, a)
};
AccessibleAutoCompleteInputElement.prototype.selectPrev = function () {
	if (this.isACBoxVisible()) {
		var a = this.hasValidSelection() ? this.selected - 1 : this.curSuggestions.length - 1;
		0 > a ? this.deselect() : (this.select(a), this.scrollDiv())
	}
};
AccessibleAutoCompleteInputElement.prototype.selectNext = function () {
	this.hasValidSelection() ? this.selected + 1 == this.curSuggestions.length ? this.deselect() : (this.select((this.selected + 1) % this.curSuggestions.length), this.scrollDiv()) : this.isACBoxVisible() && this.select(0)
};
AccessibleAutoCompleteInputElement.prototype.select = function (a) {
	AutoCompleteInputElement.prototype.select.call(this, a);
	a = 0 <= this.selected ? Sfdc.get("." + AutoCompleteInputElement.ROW_CSS_CLASS_SELECTED + " .autoCompleteRowLink", this.acBox.div) : null;
	this.element.setAttribute("aria-activedesendant", a && a.id ? a.id : "")
};
AccessibleAutoCompleteInputElement.prototype.innerGetSuggestions = function (a) {
	a = AutoCompleteInputElement.prototype.getSuggestions.call(this, a);
	return [{
			title : this.displayHeader ? LC.getLabel("Sidebar_Search", "result_source") : null,
			suggestions : a
		}
	]
};
AccessibleAutoCompleteInputElement.prototype.getSuggestions = function (a) {
	var b = [];
	if (this.groupedSuggestions = this.innerGetSuggestions(a))
		for (a = 0; a < this.groupedSuggestions.length; a++)
			for (var c = this.groupedSuggestions[a], d = 0; d < c.suggestions.length; d++)
				b.push(c.suggestions[d]);
	return b
};
AccessibleAutoCompleteInputElement.prototype.constructACBox = function (a, b) {
	var c = [];
	this.addSuggestions(c, a, b);
	this.addFooter(c, !a ? 0 : a.length);
	return c = this.hook_decorateHtml(c)
};
AccessibleAutoCompleteInputElement.prototype.addSuggestions = function (a, b, c) {
	if (null !== this.groupedSuggestions)
		for (var d = b = 0; d < this.groupedSuggestions.length; d++) {
			var e = this.groupedSuggestions[d];
			this.innerAddSuggestions(a, e.suggestions, c, b, d, e.title);
			b += e.suggestions.length
		}
};
AccessibleAutoCompleteInputElement.prototype.innerAddSuggestions = function (a, b, c, d, e, g) {
	Sfdc.assert(e, "GroupIndex must be specified");
	this.addMarkupBeforeGroup(a, e);
	e = this.id + ":group" + e;
	if (g) {
		var f = e + ":title";
		a.push("\x3cdiv role\x3d'group' aria-labelledby\x3d'" + f + "'\x3e");
		a.push("\x3ch5 class\x3d'autoCompleteSectionRow' id\x3d'" + f + "'\x3e" + g + "\x3c/h5\x3e");
		a.push("\x3cul role\x3d'presentation' class\x3d'autoCompleteGroup'\x3e")
	} else
		a.push("\x3cul role\x3d'group' class\x3d'autoCompleteGroup'\x3e");
	for (var f = !0, h = 0; h < b.length; h++) {
		var l = b[h];
		if (l && l.name) {
			var k = h + d;
			a.push("\x3cli role\x3d'presentation' ");
			a.push('onmouseover\x3d"');
			a.push("AutoCompleteInputElement.mouseOver('" + this.id + "', " + k + ')"');
			a.push('onmouseout\x3d"');
			a.push("AutoCompleteInputElement.mouseOut('" + this.id + "', " + k + ')"');
			a.push('onclick\x3d"');
			a.push("AutoCompleteInputElement.click('" + this.id + "', " + k + ')"');
			this.compareSuggestions(c, l) ? (a.push("class\x3d'" + AutoCompleteInputElement.ROW_CSS_CLASS_SELECTED + "' "), this.select(k),
				f = !1) : a.push("class\x3d'" + AutoCompleteInputElement.ROW_CSS_CLASS + "' ");
			this.getSuggestionWidth() && a.push(" style\x3d'width:" + this.getSuggestionWidth() + "px' ");
			a.push("id\x3d'" + AutoCompleteInputElement.getRowIdStatic(this.id, k) + "'\x3e");
			a.push("\x3ca class\x3d'autoCompleteRowLink' role\x3d'option' tabindex\x3d'-1' id\x3d'" + e + ":option" + h + "'\x3e");
			a.push(this.getSuggestionHtml(l));
			a.push("\x3c/a\x3e\x3c/li\x3e")
		}
	}
	f && this.deselect();
	a.push("\x3c/ul\x3e");
	g && a.push("\x3c/div\x3e")
};
AccessibleAutoCompleteInputElement.prototype.addMarkupBeforeGroup = function (a, b) {};
LookupAutoCompleteInputElement = function (a, c, b, d, f, g, l) {
	var e = getElementByIdCS(a + MultiLookupInputElement.MULTI_LOOKUP_SELECT_SUFFIX);
	if (e && LookupAutoCompleteInputElement.isMultiLookup(a)) {
		var m = LookupAutoCompleteInputElement.supportedLookups[a];
		this.inputElement = getElementByIdCS(a);
		this.lookupTypes = {};
		this.activeLookup = null;
		var e = e.options[e.selectedIndex].value,
		k;
		for (k in m) {
			var h = LookupAutoCompleteInputElement.cloneRequestParams(d),
			n = 0,
			p;
			for (p in {
				acEntity : !0,
				aclkent : !0,
				aclkfield : !0
			}) {
				var q = m[k][n];
				q && (h[p] = q);
				n++
			}
			h = this.createAutoCompleteInputElement(a, c, b, h, f, a + k, g, l);
			null === this.activeLookup && e && e == k ? this.activeLookup = h : h.disableAC();
			this.lookupTypes[k] = h
		}
		this.inputElement.autocomplete = this.activeLookup ? "off" : "on"
	} else
		this.activeLookup = this.createAutoCompleteInputElement(a, c, b, d, f, null, g, l);
	LookupAutoCompleteInputElement.instances[a] = this
};
LookupAutoCompleteInputElement.prototype.createAutoCompleteInputElement = function (a, c, b, d, f, g, l, e) {
	return new AutoCompleteInputElement(a, c, b, d, f, g, l, e)
};
LookupAutoCompleteInputElement.prototype.addOnAfterTabDownListener = function (a) {
	if (this.lookupTypes)
		for (type in this.lookupTypes)
			LookupAutoCompleteInputElement.addOnAfterTabDown(LookupTypes[type], a);
	else
		LookupAutoCompleteInputElement.addOnAfterTabDown(this.activeLookup, a)
};
LookupAutoCompleteInputElement.addOnAfterTabDown = function (a, c) {
	var b = a.onAfterTabDown;
	a.onAfterTabDown = "function" !== typeof a.onAfterTabDown ? c : function () {
		b();
		c()
	}
};
LookupAutoCompleteInputElement.prototype.clearSuggestions = function () {
	this.activeLookup.isACBoxVisible() && this.activeLookup.clearSuggestions()
};
LookupAutoCompleteInputElement.prototype.clearCache = function () {
	this.activeLookup.clearCache && this.activeLookup.clearCache()
};
LookupAutoCompleteInputElement.prototype.setLookupType = function (a) {
	a = this.lookupTypes[a];
	this.activeLookup !== a && (this.activeLookup && (a || (this.inputElement.autocomplete = "on"), this.activeLookup.disableAC()), a && (this.activeLookup || (this.inputElement.autocomplete = "off"), a.enableAC()), this.activeLookup = a)
};
LookupAutoCompleteInputElement.supportedLookups = {};
LookupAutoCompleteInputElement.instances = {};
LookupAutoCompleteInputElement.registerSupportedEntities = function (a, c) {
	var b = {},
	d;
	for (d in c)
		b[d] = c[d];
	LookupAutoCompleteInputElement.supportedLookups[a] = b
};
LookupAutoCompleteInputElement.isMultiLookup = function (a) {
	return null != LookupAutoCompleteInputElement.supportedLookups[a]
};
LookupAutoCompleteInputElement.cloneRequestParams = function (a) {
	var c = {},
	b;
	for (b in a)
		c[b] = a[b];
	return c
};
LookupAutoCompleteInputElement.handleLookupTypeChange = function (a, c) {
	var b = getElementByIdCS(a + EditElement.pTYPE_SUFFIX),
	d = getElementByIdCS(a + MultiLookupInputElement.MULTI_LOOKUP_SELECT_SUFFIX),
	f = getElementByIdCS(a + EditElement.pID_SUFFIX),
	g = getElementByIdCS(a + EditElement.pMOD_SUFFIX),
	d = d.options[d.selectedIndex].value;
	b.value = d;
	c ? f.options.length = 0 : f.value = "";
	g.value = "1";
	LookupAutoCompleteInputElement.isMultiLookup(a) && (b = LookupAutoCompleteInputElement.instances[a]) && b.setLookupType(d)
};
function TagAutoComplete(a, b, c) {
	var d = new QueryString("");
	d.add(TagConstants.pTAG_SCOPE_MODE, b);
	b = UserContext.getUrl(TagConstants.LOOKUP_TAGS_PAGE) + d.toString();
	AutoCompleteInputElement.apply(this, [a.id, b, 1, {}, !0]);
	this.recordHeight = 18;
	this.keyPressCallback = c;
	this.disableOnEsc = !0;
	this.displayHeader = !1
}
TagAutoComplete.prototype = new AutoCompleteInputElement;
TagAutoComplete.prototype.parseResponse = function (a) {
	var b = a.split(", ");
	b.sort(function (a, b) {
		var c = a.toLowerCase(),
		e = b.toLowerCase();
		return c == e ? 0 : c > e ? 1 : -1
	});
	a = [];
	for (var c = 0; c < b.length; c++)
		a.push(new Suggestion(b[c]));
	b = [];
	b[AbstractAutoCompleteServlet.SUGGESTIONS] = a;
	return b
};
TagAutoComplete.prototype.findInput = function (a) {
	if (!a)
		return a;
	a = a.split(",");
	return ltrim(a[a.length - 1])
};
TagAutoComplete.prototype.innerComplete = function (a) {
	var b = this.element.value.split(",");
	1 >= b.length ? b = [a.name] : b[b.length - 1] = " " + a.name;
	this.element.value = b.join(",") + ", "
};
AutoCompleteInputElement.prototype.additionalDisplayConditionsValid = function () {
	return !0
};
TagAutoComplete.prototype.checkCursorAtEnd = function () {
	if (!this.element)
		return !1;
	var a;
	if (Sfdc.userAgent.isIE) {
		var b = document.selection.createRange().duplicate();
		if (b.text && 0 < b.text.length)
			return !1;
		var c = b.duplicate();
		c.moveToElementText(this.element);
		try {
			b.setEndPoint("EndToEnd", c),
			a = b.text
		} catch (d) {
			return !0
		}
	} else {
		if (this.element.selectionStart != this.element.selectionEnd)
			return !1;
		a = this.element.value.substring(this.element.selectionStart)
	}
	return TagAutoComplete.EMPTY.exec(a)
};
function Suggestion(a) {
	this.name = a
}
TagAutoComplete.BOX_ID = "_autoCompleteBoxId";
TagAutoComplete.ROW_ID = "_autoCompleteRowId";
TagAutoComplete.BOX_CSS_CLASS = "autoCompleteBox";
TagAutoComplete.MAX_SUGGESTIONS = 15;
TagAutoComplete.FRAME_ID = "_autoCompleteFrameId";
TagAutoComplete.EMPTY = /^\s*$/;
TagAutoComplete.normalize = function (a) {
	return a.replace(/\s|-|_/g, "").toLowerCase()
};
TagAutoComplete.prototype.compareSuggestions = function (a, b) {
	return a && b && a.name && b.name && a.name == b.name
};
TagAutoComplete.prototype.handleEnter = function (a) {
	this.complete() ? AutoCompleteInputElement.captureKeystroke(a) : this.keyPressCallback && (this.clearSuggestions(), this.keyPressCallback(a))
};
SidebarSearchAutoCompleteElement = function (a, b, c, d, f, e, g) {
	AccessibleAutoCompleteInputElement.apply(this, [a, b, c, d, null, null, f]);
	this.autoSelectFirstSuggestion = !1;
	if (this.picklistId = e)
		this.picklist = document.getElementById(e);
	this.searchForm = document.getElementById(g)
};
SidebarSearchAutoCompleteElement.prototype = new AccessibleAutoCompleteInputElement;
SidebarSearchAutoCompleteElement.prototype.getRegexForInput = function (a) {
	var b = AutoCompleteInputElement.normalize(a);
	AutoCompleteInputElement.regexCache[b] || (AutoCompleteInputElement.regexCache[b] = RegExp(["(\\b|^|\\W)(", AutoCompleteInputElement.escapeRegex(a), ")"].join(""), "gi"));
	return AutoCompleteInputElement.regexCache[b]
};
SidebarSearchAutoCompleteElement.prototype.handleNav = function (a) {
	AutoCompleteInputElement.prototype.handleNav.call(this, a)
};
SidebarSearchAutoCompleteElement.prototype.isValidSuggestion = function (a, b) {
	var c = this.getRegexForInput(a),
	c = b.name.match(c);
	if (!this.picklist)
		return c;
	var d = this.getPicklistKeyprefix();
	return d == SearchRelatedList.pENTITY_ALL ? c : c && b.mruIds && SidebarSearchAutoCompleteElement.startsWith(b.mruIds[0], d)
};
SidebarSearchAutoCompleteElement.prototype.getPicklistKeyprefix = function () {
	return !this.picklist ? null : this.picklist.options[this.picklist.selectedIndex].value
};
SidebarSearchAutoCompleteElement.prototype.innerComplete = function (a) {
	if (this.element && a && a.name && a.mruIds && 0 != a.mruIds.length) {
		var b = this.element.value;
		this.element.value = a.name;
		1 < a.mruIds.length ? (this.picklist && (a = a.mruIds[0].substring(0, 3), this.picklist.value = a), this.searchForm && this.searchForm.submit()) : this.navigateToRecord(a, b)
	}
};
SidebarSearchAutoCompleteElement.prototype.navigateToRecord = function (a, b) {
	if (a.detailURL) {
		QueryString.getURI(a.detailURL);
		var c = new QueryString,
		d = this.getPicklistKeyprefix();
		d && c.add(this.picklistId, d);
		c = SearchClickLoggingUtil.addSearchMacLogParams(c, {
				suggestion : a,
				searchString : b,
				position : this.selected,
				searchArea : "sidebar"
			});
		navigateToUrl(SearchClickLoggingUtil.getClickLoggingServletUrl(c, a.detailURL))
	}
};
SidebarSearchAutoCompleteElement.prototype.getSuggestionHtml = function (a) {
	var b = [],
	c = escapeHTML(this.lastInput),
	d = escapeHTML(a.name),
	c = this.getRegexForInput(c),
	d = d.replace(c, '$1\x3cstrong class\x3d"autocompleteMatch"\x3e$2\x3c/strong\x3e');
	b.push(a.mruIcon);
	b.push("\x26nbsp;");
	b.push(d);
	return b.join("")
};
SidebarSearchAutoCompleteElement.startsWith = function (a, b) {
	return !b || !a ? !1 : b.length <= a.length && 0 === a.indexOf(b)
};
SidebarSearchAutoCompleteElement.prototype.selectPrev = function () {
	AutoCompleteInputElement.prototype.selectPrev.apply(this)
};
SidebarSearchAutoCompleteElement.prototype.selectNext = function () {
	AutoCompleteInputElement.prototype.selectNext.apply(this)
};
SidebarSearchAutoCompleteElement.prototype.updateWidth = function () {
	var a = this.getMinimumWidth(),
	b = -1,
	c = Sfdc.select(".autoCompleteRow .autoCompleteRowLink", this.acBox.div);
	if (c && 0 < c.length)
		for (var d = 0; d < c.length; d++)
			b = Math.max(Sfdc.Dom.getWidth(c[d]) + 16, b);
	a > b ? this.acBox.setStyle("width", a + "px") : this.acBox.setStyle("width", b + "px")
};
AutoCompleteInputElement.prototype.compareSuggestions = function (a, b) {
	return a && b && a.detailURL && b.detailURL && a.detailURL == b.detailURL
};
(function (c) {
	c.provide("Sfdc.Class.Config", {
		setConfig : function (d) {
			var b = this.config = c.apply(this.config || {}, d || {}, !0);
			if (this.addEvent) {
				var e = /^on[A-Z]/,
				a;
				for (a in b)
					d.hasOwnProperty(a) && (c.isFunction(b[a]) && e.test(a)) && (this.addEvent(a, b[a]), delete b[a])
			}
		}
	})
})(Sfdc);
(function (c) {
	c.provide("Sfdc.Class.Eventing", {
		addEvent : function (a, b, d) {
			return c.Event.add(this, ":" + a, b, d)
		},
		removeEvent : function (a, b) {
			return c.Event.remove(this, ":" + a, b)
		},
		fireEvent : function (a, b) {
			return c.Event.fireEvent(this, ":" + a, {
				data : [b]
			})
		}
	})
})(window.Sfdc);
var networksHeader = function () {
	Sfdc.onReady(function () {
		var a = Sfdc.get("globalHeaderBar");
		a && SfdcCmp.init(a)
	});
	return {
		loadParentUrl : function (a) {
			parent.window.location = a
		},
		changeUserOption : function (a) {
			optionElement = document.getElementById(a);
			len = optionElement.length;
			chosen = "none";
			for (i = 0; i < len; i++)
				if (optionElement[i].selected && (chosen = optionElement[i].value, -1 == chosen.search("internalSkip"))) {
					window.location.href = chosen;
					break
				}
		}
	}
}
();
(function (c, p) {
	function x(q, k, l, p) {
		var s = {};
		l && (s.limit = 1);
		return SfdcCmp.find(q, function (q, l) {
			for (var n = 0; n < k.length; n++)
				if (c.isAssignableFrom(k[n], q))
					return !0;
			return !1
		}, s, p)
	}
	function A(q) {
		var k = {
			attributes : {}

		};
		k.attributes[B] = !0;
		k = c.Dom.create(null, k, "span");
		k.innerHTML = q;
		return k.childNodes
	}
	function C(c) {
		if (!c)
			return null;
		var k = null,
		l = null,
		l = null;
		-1 < c.nodeName.indexOf(":") ? (l = c.nodeName.split(":"), k = l[0], l = l[1]) : c.getAttribute(SfdcCmp.SFDC_NODE_ATTRIBUTE) ? (l = c.getAttribute(SfdcCmp.SFDC_NODE_ATTRIBUTE).split(":"),
			k = l[0], l = l[1]) : (k = c.scopeName, l = c.tagName);
		"HTML" === k && (k = null);
		return {
			prefix : k,
			localName : l,
			qualifiedName : k + ":" + l
		}
	}
	function D(c) {
		if (!c)
			return !1;
		var k = c.indexOf(":");
		return -1 !== k && 0 !== k && k !== c.length - 1
	}
	function E() {
		function q(a, d) {
			a && (D(a) && (a = a.toLowerCase()), c.isArray(h[a]) || (h[a] = []), h[a].push(d))
		}
		function k(a, d, b) {
			m[a] ? m[a].push(d) : m[a] = [d];
			c.Data.set(b, F, d)
		}
		function l(a, d) {
			if (!a || !c.Dom.isNode(d))
				return null;
			for (var b = null, e = 0, f = u.length; e < f; e++)
				(b = d.getAttribute(u[e])) && c.isFunction(b = c.resolve(b)) &&
				r.add(a, u[e], b)
		}
		function y(a, d) {
			r.fireEvent(a, G, {
				data : [d]
			});
			k(a.constructor.SFDC_TYPE, a, d)
		}
		function s(a, d, b) {
			l(a, b);
			k(a.constructor.SFDC_TYPE, a, d);
			r.fireEvent(a, v, {
				data : [d, b]
			});
			r.fireEvent(d, v, {
				context : a
			})
		}
		var z = !1,
		m = {},
		n = {},
		h = {},
		t = {},
		r = new c.Event.EventManager(u),
		w = null,
		H = null,
		I = null,
		w = function () {
			return p.document.documentElement
		},
		H = function (a, d) {
			d = d || w();
			var b = d.getAttributeNode("xmlns:" + a);
			return b ? b.nodeValue : null
		},
		I = function (a, d, b) {
			b = b || w();
			b.setAttribute("xmlns:" + a, d);
			if (p.document && "namespaces" in
				p.document)
				try {
					p.document.namespaces.add(a, d)
				} catch (e) {
					c.onload(function () {
						p.document.namespaces[a] || p.document.namespaces.add(a, d)
					})
				}
		};
		return c.apply(function () {
			return E()
		}, {
			FRAMEWORK_URI : "http://www.salesforce.com/ui/accent/",
			SFDC_TYPE_ATTRIBUTE : "data-sfdc-widget",
			SFDC_TYPE_PARAMS_ATTRIBUTE : "data-sfdc-widget-param",
			SFDC_NODE_ATTRIBUTE : "data-sfdc-type",
			declarativeModeEnabled : !0,
			bind : function (a) {
				var d = a.getAttribute(this.SFDC_TYPE_ATTRIBUTE);
				if (!d || this.getInstance(a))
					return null;
				var b = n[d];
				if (b)
					try {
						var e;
						var f = a.getAttribute(SfdcCmp.SFDC_TYPE_PARAMS_ATTRIBUTE);
						e = f ? c.JSON.parse(f) : null;
						var g = new b;
						c.isArray(e) ? g.bind.apply(g, [a].concat(e)) : g.bind(a);
						s(g, a);
						return g
					} catch (k) {
						if (c.error(["Failed to create instance of zen component ", d, " with error ", k]), c.isDebug)
							throw k;
					}
				else
					q(d, a);
				return null
			},
			dispose : function () {
				if (m)
					for (var a in m)
						if (m.hasOwnProperty(a))
							for (var d = m[a], b = 0; b < d.length; b++) {
								var e = d[b];
								if (c.implies(c.IDisposable, e))
									try {
										e.dispose()
									} catch (f) {
										if (c.error("SfdcCmp: Component failed during dispose. (" +
												f + ")"), c.isDebug)
											throw f;
									}
							}
				n = m = h = null
			},
			find : function (a, d, b, e) {
				if (!c.Dom.isElement(a))
					throw Error("SfdcCmp.find(): 'container' must be a valid Node.");
				var f = [];
				if (a.hasChildNodes()) {
					b || (b = {});
					c.apply(b, {
						cancel : !1,
						current : null,
						index : -1
					}, !0);
					for (var g = 0, k = a.childNodes.length; g < k; g++) {
						var l = a.childNodes[g];
						if (c.Dom.isElement(l)) {
							var h = SfdcCmp.getInstance(l);
							if (h) {
								b.current = l;
								b.index = g;
								d(h, b) && f.push(h);
								if (b.cancel)
									break;
								if (f.length === b.limit)
									break
							}
							e && (f = f.concat(SfdcCmp.find(a.childNodes[g], d, b, e)))
						}
					}
				}
				return f
			},
			findInstances : function (a, d, b, e, f) {
				if (!c.Dom.isElement(a))
					throw Error("SfdcCmp.findInstances(): 'container' must be a valid Element.");
				var g = Array.prototype.slice.call(arguments, 1);
				f = c.isBoolean(g[g.length - 1]) ? g.pop() : !1;
				return x(a, g, !1, f)
			},
			findInstance : function (a, d, b, e, f) {
				if (!c.Dom.isElement(a))
					throw Error("SfdcCmp.find(): 'container' must be a valid Element.");
				var g = Array.prototype.slice.call(arguments, 1);
				f = c.isBoolean(g[g.length - 1]) ? g.pop() : !1;
				return x(a, Array.prototype.slice.call(arguments, 1),
					!0, f)[0]
			},
			findSingle : function (a, d, b, c) {
				b || (b = {});
				b.limit = 1;
				return SfdcCmp.find(a, function (a, b) {
					return d(a, b)
				}, b, c)[0] || null
			},
			generate : function (a) {
				c.isString(a) ? a = A(a) : !c.isArray(a) && !c.Dom.isNodeList(a) && (a = [a]);
				for (var d = [], b = null, e = null, f = null, g = 0, k = a.length; g < k; g++)
					if (b = null, e = a[g], c.Dom.isElement(e)) {
						var f = C(e).qualifiedName,
						h = this.resolve(f, e);
						h && (b = new h, c.Data.set(b, J, e));
						b ? (f = b, h = e, l(f, h), r.fireEvent(f, K, {
								data : [h]
							}), c.isFunction(b.generate) && (b = b.generate(e) || b, y(b, e)), d.push(b)) : q(f, e)
					}
				return d
			},
			getInstance : function (a) {
				return c.Data.get(a, F)
			},
			getTypeInstances : function (a) {
				return c.isString(a) ? m[a] || [] : m
			},
			init : function (a) {
				a = c.select(this.declarativeModeEnabled ? "*" : "*[" + SfdcCmp.SFDC_TYPE_ATTRIBUTE + "]", a);
				a = this.render(a);
				this.isInitialized() || (c.on(p, "unload", this.dispose), z = !0);
				return a
			},
			isInitialized : function () {
				return z
			},
			onBind : function (a, c) {
				var b = this.getInstance(a);
				b ? c.call(b) : r.add(a, v, c)
			},
			provide : function (a, d) {
				var b = new c.Class(d || {});
				b.SFDC_TYPE = a;
				this.register(a, b);
				this.render(h[a]);
				delete h[a]
			},
			register : function (a, d) {
				var b = n[a];
				b !== d && !(b && b.SFDC_TYPE === d.SFDC_TYPE) && (n[a] && c.error("Type already registered."), n[a] = d, c.provide(a, d))
			},
			registerComponent : function (a, d, b) {
				c.assert(D(d), "The tag parameter was missing the prefix or localName. Please specify your tag with the format prefix:localName.");
				d = d.toLowerCase();
				b = b ? this.NamespaceManager.generateUri(b, !0) : this.NamespaceManager.generateUri(a);
				var e = t[b],
				f = d.split(":"),
				g = f[1];
				this.NamespaceManager.register(f[0], b);
				e || (e = t[b]);
				e[g] && e[g] != a && c.error(c.String.format("The nodeName ({0}) has already been defined in the URI ({1}) to Type ({2})", [g, b, a]));
				e[g] = a;
				c.isArray(h[d]) && (c.isArray(h[a]) ? h[a] = h[a].concat(h[d]) : (h[a] = h[d], delete h[d]))
			},
			render : function (a) {
				if (c.isEmpty(a))
					return [];
				c.isString(a) ? a = A(a) : !c.isArray(a) && !c.Dom.isNodeList(a) && (a = [a]);
				for (var d = [], b = [], e = [], f = null, g = null, h = 0, l = null, m = null, f = null, h = 0, l = a.length; h < l; h++)
					g = a[h], c.isObject(g) && g.constructor && "SFDC_TYPE" in g.constructor ? (f = g, f = {
							templateNode : c.Data.get(f,
								J),
							component : f
						}, b.push(f), y(f.component, f.templateNode)) : c.Dom.isElement(g) && C(g).prefix ? (f = this.generate(g)[0]) && b.push({
						templateNode : g,
						component : f
					}) : c.Dom.isElement(g) && !c.isEmpty(g.getAttribute(SfdcCmp.SFDC_TYPE_ATTRIBUTE)) && d.push(g);
				h = 0;
				for (l = b.length; h < l; h++)
					if (f = b[h].component, g = b[h].templateNode, c.Dom.isNode(g.parentNode) && c.isFunction(f.render)) {
						m = f.render(document.createDocumentFragment());
						a = f;
						var n = m;
						r.fireEvent(a, L, {
							data : [n, g]
						});
						k(a.constructor.SFDC_TYPE, a, n);
						m && (m = c.Dom.replace(m, g),
							e.push(m), e = e.concat(this.render(c.select("*", m))), c.isFunction(f.bind) && f.bind(m));
						s(f, m, g)
					}
				h = 0;
				for (l = d.length; h < l; h++)
					this.bind(d[h]), e.push(d[h]);
				return e
			},
			resolve : function (a, d) {
				var b = a.split(":");
				if (2 != b.length)
					return null;
				var e = b[0].toLowerCase(),
				b = b[1].toLowerCase(),
				e = this.NamespaceManager.getUriByPrefix(e, d);
				if (!e)
					return null;
				e = t[e];
				if (c.isEmpty(e))
					return null;
				b = e[b];
				return c.isEmpty(b) ? null : n[b]
			},
			updateHTML : function (a, d, b, e) {
				e ? c.Dom.updateHTML(a, d, b, function () {
					this.init(a);
					e()
				}
					.bind(this)) :
				(c.Dom.updateHTML(a, d, b), this.init(a))
			},
			NamespaceManager : {
				generateUri : function (a, d) {
					if (c.isEmpty(a))
						return SfdcCmp.FRAMEWORK_URI;
					var b = a.split(".");
					d || b.pop();
					return SfdcCmp.FRAMEWORK_URI + b.join("/").toLowerCase()
				},
				getUriByPrefix : function (a, d) {
					for (var b = null, e = d; !b && c.Dom.isElement(e) && !0 !== c.Dom.getAttribute(e, B); )
						b = this.getPrefixOnElement(a, e), e = e.parentNode;
					b || (b = this.getPrefixOnElement(a, w()));
					return b
				},
				getPrefixOnElement : H,
				register : function (a, d, b) {
					var e = this.getPrefixOnElement(a, b);
					e && e !== d &&
					c.error(["Prefix '", a, ":' already defined at this scope to URI '", e, "'"].join(""));
					t[d] || (t[d] = {});
					this.setUriByPrefix(a, d, b)
				},
				setUriByPrefix : function (a, d, b) {
					var e = this.getPrefixOnElement(a, b);
					if (e && e != d)
						c.error("Attempt to redefine prefix - " + a);
					else if (e)
						return;
					this.setPrefixOnElement(a, d, b)
				},
				setPrefixOnElement : I
			}
		})
	}
	var K = "oncreate",
	v = "onbind",
	G = "ongenerate",
	L = "onrender",
	u = [K, G, L, v],
	F = "SfdcCmp:Instance",
	B = "data-sfdccmp-fragment",
	J = "SfdcCmp:Template";
	c.resolve("SfdcCmp") || c.provide("SfdcCmp", E())
})(Sfdc,
	this);
Sfdc.provide("Sfdc.ClientLogging", function (a) {
	var d = a.log(),
	b = [];
	a.log = function () {
		a.ClientLogging.log.apply(a.ClientLogging, arguments)
	};
	a.warn = function (e, c) {
		return a.log(e, a.Logging.LogLevel.WARNING, c)
	};
	a.error = function (e, c) {
		return a.log(e, a.Logging.LogLevel.ERROR, c)
	};
	a.Function.wrap(a, "sendGack", function (e, c, b) {
		return a.log(c, a.Logging.LogLevel.GACK, b)
	});
	return {
		log : function (a, c, h) {
			for (var f = 0, g = b.length, k; f < g; f++)
				null !== (k = b[f]) && k.log(a, c, h);
			d.push({
				msg : a,
				level : c,
				args : h
			})
		},
		addRelay : function (e, c) {
			a.assert(e &&
				e.name, "A relay with a name property must be provided. ");
			for (var d = 0, f = b.length, g; d < f; d++)
				if ((g = b[d]) && g.name === e.name)
					return !1;
			b.push(e);
			c && this.flush(e);
			return !0
		},
		removeRelay : function (a) {
			for (var c = 0, d = b.length; c < d; c++)
				b[c]instanceof a && (b[c] = null)
		},
		flush : function (a) {
			for (var c = 0, b = d.length, f; c < b; c++)
				f = d[c], a.log(f.msg, f.level, f.args)
		}
	}
}
	(Sfdc));
Sfdc.provide("Sfdc.ClientLogging.ConsoleLogger", {
	$constructor : function () {},
	name : "ConsoleLogger",
	log : function (a, d, b) {
		if (!window.console || !Sfdc.isDefAndNotNull(a))
			return !1;
		switch (d) {
		case Sfdc.Logging.LogLevel.INFO:
			window.console.log(a);
			break;
		case Sfdc.Logging.LogLevel.WARNING:
			window.console.warn(a);
			break;
		case Sfdc.Logging.LogLevel.ERROR:
			if (Sfdc.isDebug)
				throw a;
			Sfdc.isString(a) ? window.console.error(a) : (d = Sfdc.Logging.formatError(a), d = Sfdc.String.format("Subject: {subject}\nTrace: {trace}\n", d), window.console.error(d,
					a));
			break;
		case Sfdc.Logging.LogLevel.GACK:
			window.console.error(a);
			break;
		default:
			window.console.log(a)
		}
	}
});
Sfdc.provide("Sfdc.ClientLogging.SeleniumLogger", {
	$constructor : function () {
		try {
			var a = top;
			this.enabled = a.LOG && Sfdc.isFunction(a.LOG.log)
		} catch (d) {
			this.enabled = !1
		}
	},
	enabled : !0,
	name : "SeleniumLogger",
	log : function (a, d, b) {
		if (!this.enabled || !Sfdc.isDefAndNotNull(a))
			return !1;
		b = top;
		switch (d) {
		case Sfdc.Logging.LogLevel.INFO:
			b.LOG.log("info", a);
			break;
		case Sfdc.Logging.LogLevel.WARNING:
			b.LOG.log("warning", a);
			break;
		case Sfdc.Logging.LogLevel.ERROR:
			b.LOG.log("error", a);
			break;
		case Sfdc.Logging.LogLevel.GACK:
			b.LOG.log("error",
				a);
			break;
		default:
			b.LOG.log("info", a)
		}
	}
});
Sfdc.provide("Sfdc.ServerLogging", function (a) {
	var e = null,
	f = [],
	h = {},
	c = {
		URL : "/_ui/common/request/servlet/JsLoggingServlet",
		LOG_NAME : "logName",
		LOG_LEVEL : "logLevel",
		LOG_ATTRS : "logAttrs",
		LOG_LINES : "logLines",
		MAX_BUFFER_SIZE : 100,
		FLUSH_SIZE : 100,
		FLUSH_INTERVAL : 1500,
		AUTO_FLUSH : !0
	};
	a.Function.wrap(a, "sendGack", function (b, c, f) {
		var d = Array.prototype.slice.call(arguments, 0);
		!1 == a.isDefAndNotNull(d[1]) ? a.warn("No error information was passed to Sfdc.sendGack()") : (d[1] = a.Logging.formatError(d[1]), d[2] = a.Logging.LogLevel.GACK,
			a.ServerLogging.log.apply(a.ServerLogging, d))
	});
	a.logServer = function (b, c, f) {
		a.ServerLogging.log.apply(a.ServerLogging, arguments)
	};
	return {
		log : function (b, g, e) {
			a.assert(b && g, "You must provide a relay key and a data object to log.");
			e = e || a.Logging.LogLevel.INFO;
			var d = this.getRelay(b);
			if (!d || !d.log(b, g, e))
				d = {},
			d[c.LOG_NAME] = b,
			d[c.LOG_LEVEL] = e,
			d[c.LOG_ATTRS] = g,
			f.push(d),
			f.length > c.MAX_BUFFER_SIZE && f.shift(),
			this.startFlushTimer()
		},
		getRelay : function (b) {
			return h[b]
		},
		addRelay : function (b, a) {
			h[b] = a
		},
		removeRelay : function (a) {
			delete h[a]
		},
		flush : function () {
			e && (clearTimeout(e), e = null);
			if (0 === f.length)
				return 0;
			var b = f.splice(0, c.FLUSH_SIZE),
			g = {};
			g[c.LOG_LINES] = a.JSON.stringify(b);
			a.Ajax.post(a.Url.resolveUrl(c.URL), null, {
				data : g,
				escape : encodeURI
			});
			0 < f.length && this.startFlushTimer();
			return b.length
		},
		setConfig : function (b) {
			a.apply(c, b, !0)
		},
		startFlushTimer : function () {
			if (!e && c.AUTO_FLUSH)
				if (0 < c.FLUSH_INTERVAL) {
					var a = this;
					e = setTimeout(function () {
							a.flush()
						}, c.FLUSH_INTERVAL)
				} else
					this.flush()
		},
		getLogQueue : function () {
			return f
		}
	}
}
	(Sfdc));
var TagHeader = function () {};
TagHeader.MAX_TAG_LIST_CHARS = 80;
TagHeader.LINE_HEIGHT = 1.3;
TagHeader.LINE_HEIGHT_UNITS = "em";
TagHeader.RESIZE_THRESHOLD = 3;
TagHeader.init = function (a, b, d) {
	this.id = a;
	this.desktopParam = b;
	this.csrfToken = d;
	this.editTagsText = document.getElementById(TagConstants.TAG_EDIT_TEXT_ID);
	if (null == this.editTagsText)
		Sfdc.error("Tag header dom elements did not get properly set up by the server.");
	else {
		this.dropDown = document.getElementById(TagConstants.TAG_DROP_DOWN_ID);
		this.dropDownContents = document.getElementById(TagConstants.TAG_DROP_DOWN_CONTENTS_ID);
		this.tagEditArea = document.getElementById(TagMode.PERSONAL + TagConstants.EDIT_AREA_ID);
		this.pubTagEditArea = document.getElementById(TagMode.PUBLIC + TagConstants.EDIT_AREA_ID);
		this.tagDisplayList = document.getElementById(TagMode.PERSONAL + TagConstants.TAG_DISPLAY_LIST);
		this.pubTagDisplayList = document.getElementById(TagMode.PUBLIC + TagConstants.TAG_DISPLAY_LIST);
		this.tagEditList = document.getElementById(TagMode.PERSONAL + TagConstants.TAG_EDIT_LIST);
		this.pubTagEditList = document.getElementById(TagMode.PUBLIC + TagConstants.TAG_EDIT_LIST);
		this.hiddenTagList = document.getElementById(TagMode.PERSONAL +
				TagConstants.HIDDEN_TAG_LIST);
		this.hiddenTagIdList = document.getElementById(TagMode.PERSONAL + TagConstants.HIDDEN_TAG_ID_LIST);
		this.hiddenPubTagList = document.getElementById(TagMode.PUBLIC + TagConstants.HIDDEN_TAG_LIST);
		this.hiddenPubTagIdList = document.getElementById(TagMode.PUBLIC + TagConstants.HIDDEN_TAG_ID_LIST);
		this.tags = this.getTags(this.hiddenTagList);
		this.tagIds = this.getTags(this.hiddenTagIdList);
		this.pubTags = this.getTags(this.hiddenPubTagList);
		this.pubTagIds = this.getTags(this.hiddenPubTagIdList);
		this.display();
		this.tagHeader = document.getElementById(TagConstants.TAG_HEADER);
		this.tagHeader.style.display = "block";
		this.loading = new LoadingScreen(this.dropDown, LC.getLabel("TagHeader", "saving"));
		this.tagEditArea && (this.tagEditArea.textLines = 1);
		this.pubTagEditArea && (this.pubTagEditArea.textLines = 1);
		this.editTags = document.getElementById(TagConstants.TAG_EDIT_ID);
		this.tagSaveBtn = document.getElementById(TagConstants.TAG_SAVE_ID);
		this.tagCancelBtn = document.getElementById(TagConstants.TAG_CANCEL_ID);
		var c =
			this;
		addEvent(this.editTags, "click", function () {
			c.openDropDown()
		}, !1);
		addEvent(this.tagSaveBtn, "click", function () {
			c.save()
		}, !1);
		addEvent(this.tagCancelBtn, "click", function () {
			c.cancel()
		}, !1);
		null != this.tagEditArea && !UserContext.isAccessibleMode && (this.autoCompleter = new TagAutoComplete(this.tagEditArea, TagMode.PERSONAL, function (a) {
					c.keyPress(a)
				}), this.autoCompleter.setResizer(function () {
				return c.checkAndResize(c.tagEditArea)
			}));
		null != this.pubTagEditArea && !UserContext.isAccessibleMode && (this.pubAutoCompleter =
				new TagAutoComplete(this.pubTagEditArea, TagMode.PUBLIC, function (a) {
					c.keyPress(a)
				}), this.pubAutoCompleter.setResizer(function () {
				return c.checkAndResize(c.pubTagEditArea)
			}))
	}
};
TagHeader.display = function () {
	var a;
	a = this.setupDisplayList(this.tagDisplayList, this.tags, this.tagIds, TagMode.PERSONAL, 0);
	this.setupDisplayList(this.pubTagDisplayList, this.pubTags, this.pubTagIds, TagMode.PUBLIC, a);
	0 == this.tags.length && 0 == this.pubTags.length ? (this.editTagsText.innerHTML = LC.getLabel("TagHeader", "add_tags"), this.editTagsText.setAttribute("title", LC.getLabel("TagHeader", "add_tags"))) : (this.editTagsText.innerHTML = LC.getLabel("TagHeader", "edit_tags"), this.editTagsText.setAttribute("title",
			LC.getLabel("TagHeader", "edit_tags")))
};
TagHeader.setupDisplayList = function (a, b, d, c, f) {
	if (null == a)
		return f;
	a.innerHTML = "";
	if (0 == b.length)
		document.getElementById(c + TagConstants.TAG_DISPLAY_CONTAINER).style.display = "none";
	else {
		document.getElementById(c + TagConstants.TAG_DISPLAY_CONTAINER).style.display = "inline";
		for (var g = b.length, h = 0; h < b.length; h++)
			f + b[h].length > TagHeader.MAX_TAG_LIST_CHARS || (g < b.length && a.appendChild(document.createTextNode(", ")), TagHeader.addTagLink(a, b[h], d[h], c), f += b[h].length, g--);
		g == b.length && (TagHeader.addTagLink(a,
				b[0], d[0], c), g--);
		0 < g && (d = document.createElement("span"), d.innerHTML = " " + LC.getLabel("TagHeader", "tag_list_more", g), d.title = b.slice(b.length - g, b.length).join(", "), a.appendChild(d))
	}
	return f
};
TagHeader.addTagLink = function (a, b, d, c) {
	c = document.createElement("a");
	var f = new QueryString("");
	f.add(TagConstants.TAG_ID_LIST, d);
	b && 1 < b.length && (f.add(TagConstants.TAG_SEARCH_FIELD, b), f.add("lsc", TagConstants.ROLODEX_SEARCH_VALUE));
	d = UserContext.getUrl(TagConstants.TAG_SEARCH_RESULTS_URL) + f.toString();
	this.desktopParam && (d = "javascript:srcUp('" + d + this.desktopParam + "');");
	c.href = d;
	c.setAttribute("title", LC.getLabel("TagHeader", "tag_list_tag_tip", b));
	c.innerHTML = b;
	a.appendChild(c);
	return c
};
TagHeader.openDropDown = function () {
	var a = this;
	this.newTags = [].concat(this.tags);
	this.newPublicTags = [].concat(this.pubTags);
	this.updateEditArea();
	this.dropDownStartHeight = Sfdc.Dom.getActualHeight(a.tagHeader);
	a.tagHeader.style.display = "none";
	a.dropDown.style.display = "block";
	a.resetAndResize();
	Sfdc.Animation.css(a.dropDown, "height", a.dropDownStartHeight, Sfdc.Dom.getActualHeight(a.dropDown), {
		onComplete : function () {
			a.dropDownContents.style.visibility = "visible";
			a.autoCompleter && a.autoCompleter.positionACBox();
			a.pubAutoCompleter && a.pubAutoCompleter.positionACBox();
			var b = a.tagEditArea ? a.tagEditArea : a.pubTagEditArea;
			b.focus();
			TagHeader.moveCursorToEndIE(b)
		}
	})
};
TagHeader.hideDropDown = function () {
	var a = this;
	a.dropDownContents.style.visibility = "hidden";
	Sfdc.Animation.css(a.dropDown, "height", Sfdc.Dom.getActualHeight(a.dropDown), a.dropDownStartHeight, {
		onComplete : function () {
			a.tagHeader.style.display = "block";
			Sfdc.Dom.setStyles(a.dropDown, {
				display : "none",
				height : ""
			});
			a.removeError()
		}
	})
};
TagHeader.cancel = function () {
	this.hideDropDown();
	this.setTags()
};
TagHeader.save = function () {
	if (this.tagEditArea)
		var a = this.newTags.concat(this.getTags(this.tagEditArea));
	if (this.pubTagEditArea)
		var b = this.newPublicTags.concat(this.getTags(this.pubTagEditArea));
	var d = UserContext.getUrl(TagConstants.SAVE_TAGS_PAGE),
	c = this;
	this.removeError();
	this.loading.show();
	var f = {
		id : this.id
	};
	a && (f.tags = a.join(", "));
	b && (f.pTags = b.join(", "));
	this.csrfToken && (f[CSRFConstants.CSRF_TOKEN] = this.csrfToken);
	Sfdc.Ajax.post(d, function (a, b) {
		var e = b.responseXML;
		if (!e || Sfdc.userAgent.isIE &&
			!e.xml)
			if (200 == b.status)
				window.location = window.location;
			else {
				c.loading.hide();
				c.displayError(c.generateError(LC.getLabel("TagHeader", "unknown_error")));
				return
			}
		var d = e.getElementsByTagName("ok")[0];
		if (d)
			Sfdc.userAgent.isFirefox && e.normalize(), e = d.getElementsByTagName(TagConstants.TAG_NAMES_ELEM)[0], e = e.firstChild && e.firstChild.nodeValue ? e.firstChild.nodeValue : "", c.tags = eval("new Array(" + e + ")"), e = d.getElementsByTagName(TagConstants.TAG_IDS_ELEM)[0], e = e.firstChild && e.firstChild.nodeValue ? e.firstChild.nodeValue :
				"", c.tagIds = eval("new Array(" + e + ")"), e = d.getElementsByTagName(TagConstants.PUBLIC_TAG_NAMES_ELEM)[0], e = e.firstChild && e.firstChild.nodeValue ? e.firstChild.nodeValue : "", c.pubTags = eval("new Array(" + e + ")"), e = d.getElementsByTagName(TagConstants.PUBLIC_TAG_IDS_ELEM)[0], e = e.firstChild && e.firstChild.nodeValue ? e.firstChild.nodeValue : "", c.pubTagIds = eval("new Array(" + e + ")"), c.setTags(), c.display(), c.hideDropDown(), c.loading.hide(), TagMenuButton.flushCache();
		else {
			if (d = e.getElementsByTagName("saveerror"))
				for (e =
						0; e < d.length; e++) {
					var f = d[e],
					k = f.getElementsByTagName("tagmode"),
					k = k && k[0] ? k[0].firstChild.nodeValue : "",
					f = (f = f.getElementsByTagName("errormessage")[0]) ? f.firstChild.nodeValue : c.generateError(LC.getLabel("TagHeader", "unknown_error"));
					c.displayError(f, k)
				}
			else
				c.displayError(c.generateError(LC.getLabel("TagHeader", "unknown_error")));
			c.loading.hide()
		}
	}, {
		data : f,
		failure : function (a) {
			c.loading.hide();
			c.displayError(c.generateError(LC.getLabel("TagHeader", "server_error")))
		}
	})
};
TagHeader.displayError = function (a, b) {
	this.tagEditArea && b == TagMode.PERSONAL ? this.tagEditArea.className = EditElement.ERROR_CLASS : this.pubTagEditArea && b == TagMode.PUBLIC && (this.pubTagEditArea.className = EditElement.ERROR_CLASS);
	var d = document.getElementById(b + TagConstants.TAG_EDIT_ERROR_ID);
	d.innerHTML = a;
	d.style.display = b ? "inline" : "block";
	b || this.resetAndResize()
};
TagHeader.removeError = function () {
	this.tagEditArea && (this.tagEditArea.className = "");
	this.pubTagEditArea && (this.pubTagEditArea.className = "");
	this.removeErrorMessage("");
	this.removeErrorMessage(TagMode.PERSONAL);
	this.removeErrorMessage(TagMode.PUBLIC)
};
TagHeader.removeErrorMessage = function (a) {
	if (a = document.getElementById(a + TagConstants.TAG_EDIT_ERROR_ID))
		a.innerHTML = "", a.style.display = "none"
};
TagHeader.generateError = function (a) {
	return LC.getLabel("Global", "colonSeparatedWords", LC.getLabel("Global", "error"), a)
};
TagHeader.keyPress = function (a) {
	if (a = a ? a : event ? event : null)
		a.keyCode == KEY_ENTER ? (this.save(), AutoCompleteInputElement.captureKeystroke(a)) : a.keyCode == KEY_ESC && (this.cancel(), AutoCompleteInputElement.captureKeystroke(a))
};
TagHeader.resetAndResize = function () {
	null != this.tagEditArea && (this.tagEditArea.style.height = TagHeader.LINE_HEIGHT + TagHeader.LINE_HEIGHT_UNITS, this.tagEditArea.textLines = 1, this.checkAndResize(this.tagEditArea));
	null != this.pubTagEditArea && (this.pubTagEditArea.style.height = TagHeader.LINE_HEIGHT + TagHeader.LINE_HEIGHT_UNITS, this.pubTagEditArea.textLines = 1, this.checkAndResize(this.pubTagEditArea))
};
TagHeader.checkAndResize = function (a) {
	for (var b = !1; a.scrollHeight - a.clientHeight > TagHeader.RESIZE_THRESHOLD; )
		a.textLines++, a.style.height = a.textLines * TagHeader.LINE_HEIGHT + TagHeader.LINE_HEIGHT_UNITS, a.rows = a.textLines, b = !0;
	return b
};
TagHeader.setTags = function () {
	this.updateHiddenTags(this.tags, this.hiddenTagList);
	this.updateHiddenTags(this.tagIds, this.hiddenTagIdList);
	this.updateHiddenTags(this.pubTags, this.hiddenPubTagList);
	this.updateHiddenTags(this.pubTagIds, this.hiddenPubTagIdList)
};
TagHeader.remove = function (a, b) {
	a == TagMode.PERSONAL ? this.newTags.splice(b, 1) : a == TagMode.PUBLIC && this.newPublicTags.splice(b, 1);
	this.updateEditArea(!0)
};
TagHeader.updateEditArea = function (a) {
	null != this.tagEditArea && (this.updateEditAreaItems(this.newTags, TagMode.PERSONAL, this.tagEditList), a || (this.tagEditArea.value = ""));
	null != this.pubTagEditArea && (this.updateEditAreaItems(this.newPublicTags, TagMode.PUBLIC, this.pubTagEditList), a || (this.pubTagEditArea.value = ""))
};
TagHeader.updateEditAreaItems = function (a, b, d) {
	if (0 == a.length)
		d.innerHTML = LC.getLabel("TagHeader", "no_tags");
	else {
		for (var c = "", f = 0; f < a.length; f++)
			a[f] && (0 < c.length && (c += ", "), c += "\x3cspan class\x3d'tag'\x3e" + a[f] + " [ \x3cspan class\x3d'tagRemove' onclick\x3d'javascript:TagHeader.remove(\"" + b + '", ' + f + ")' title\x3d'" + LC.getLabel("TagHeader", "remove_tag", a[f]) + "'\x3eX\x3c/span\x3e ]\x3c/span\x3e");
		d.innerHTML = c
	}
};
TagHeader.updateHiddenTags = function (a, b) {
	if (null != b) {
		var d = a.join(", ");
		b.value = d
	}
};
TagHeader.getTags = function (a) {
	if (null != a) {
		a = a.value.split(",");
		for (var b = [], d = 0; d < a.length; d++) {
			var c = trim(a[d]);
			0 < c.length && b.push(c)
		}
		return b
	}
	return []
};
TagHeader.moveCursorToEndIE = function (a) {
	if (Sfdc.userAgent.isIE) {
		var b = document.selection.createRange().duplicate();
		b.moveToElementText(a);
		b.setEndPoint("StartToEnd", b);
		b.select()
	}
};
UnifiedSearchAutoCompleteElement = function (a, b, c, d, e, g, h, p, k, t, m, n, l, q, r) {
	SidebarSearchAutoCompleteElement.apply(this, [a, b, c, d, e, g, h]);
	k = k ? k : [];
	var s = k[UnifiedSearchUI.GLOBAL_SEARCH_SUGGESTED_SCOPES];
	m && n && l ? (this.searchScopeDialogJS = "SearchOverlayDialogs.showDialogAddSearchString('" + m + "', '" + n + "', '" + l + "'," + q + ", " + UnifiedSearchUI.SEARCH_SCOPE_DIALOG_WIDTH + ", " + r + ", '" + a + "');", this.searchOptionsLabel = LC.getLabel("Page_UnifiedSearch", "changeScope") + LC.getLabel("Sidebar", "ellipses"), b = l.indexOf("?"),
		-1 != b && (this.searchNoScopeDialogJS = "SearchOverlayDialogs.showDialogAddSearchString('" + m + "', '" + n + "', '" + l.substring(0, b) + "'," + q + ", " + UnifiedSearchUI.SEARCH_SCOPE_DIALOG_WIDTH + ", " + r + ", '" + a + "');")) : this.disableSearchScopeDialog = !0;
	var f = this;
	this.enableAriaLiveMessage = !1;
	this.includeTopics = t;
	addEvent(this.element, "focus", function (a) {
		f.handleEvent(a)
	});
	addEvent(this.element, "click", function (a) {
		f.handleEvent(a)
	});
	Sfdc.userAgent.isFirefox && addEvent(this.element, "input", function (a) {
		f.handleInput(a)
	});
	if (this.clearButton = getElementByIdCS(UnifiedSearchUI.GLOBAL_SEARCH_CLEAR_BUTTON_ID))
		addEvent(this.clearButton, "mouseover", function (a) {
			addStyleClass(f.clearButton, UnifiedSearchAutoCompleteElement.CLEAR_BUTTON_HOVER_CLASS)
		}), addEvent(this.clearButton, "mouseout", function (a) {
			delStyleClass(f.clearButton, UnifiedSearchAutoCompleteElement.CLEAR_BUTTON_HOVER_CLASS)
		}), addEvent(this.clearButton, "mousedown", function (a) {
			addStyleClass(f.clearButton, UnifiedSearchAutoCompleteElement.CLEAR_BUTTON_PRESS_CLASS)
		}), addEvent(this.clearButton,
			"click", function (a) {
			f.clearScope(a);
			setVis(f.clearButton, !1);
			delStyleClass(f.clearButton, UnifiedSearchAutoCompleteElement.CLEAR_BUTTON_PRESS_CLASS)
		});
	this.scopeHiddenInputNames = p ? p : [];
	this.headerSearchLeftCorner = this.element.parentNode.parentNode;
	var u = this.searchScopeDialogJS;
	this.suggestedScopeDone = !1;
	s && !this.disableSearchScopeDialog && addEvent(this.searchForm, "submit", function (b) {
		var c = f.getSearchString(a);
		!f.suggestedScopeDone && (s && -1 === c.indexOf("#")) && (eval(u), AutoCompleteInputElement.captureKeystroke(b))
	})
};
UnifiedSearchAutoCompleteElement.prototype = new SidebarSearchAutoCompleteElement;
UnifiedSearchAutoCompleteElement.prototype.getSearchString = function (a) {
	return document.getElementById(a).value
};
UnifiedSearchAutoCompleteElement.DROPDOWN_ACTIVATED_CLASS = "dropdownActivated";
UnifiedSearchAutoCompleteElement.DEFAULT_CLEAR_BUTTON_CLASS = UnifiedSearchUI.GLOBAL_SEARCH_CLEAR_BUTTON_DEFAULT_CLASS;
UnifiedSearchAutoCompleteElement.CLEAR_BUTTON_HOVER_CLASS = UnifiedSearchAutoCompleteElement.DEFAULT_CLEAR_BUTTON_CLASS + "Hover";
UnifiedSearchAutoCompleteElement.CLEAR_BUTTON_PRESS_CLASS = UnifiedSearchAutoCompleteElement.DEFAULT_CLEAR_BUTTON_CLASS + "Press";
UnifiedSearchAutoCompleteElement.WILDCARD = "*";
UnifiedSearchAutoCompleteElement.MAX_SUGGESTIONS_TO_DISPLAY = 13;
UnifiedSearchAutoCompleteElement.MAX_TOPICS_TO_DISPLAY = 3;
UnifiedSearchAutoCompleteElement.MIN_TOPICS_TO_DISPLAY = 3;
UnifiedSearchAutoCompleteElement.ONBLUR_DELAY_MS = 0;
UnifiedSearchAutoCompleteElement.MRU_CACHE_KEY = "MRU";
UnifiedSearchAutoCompleteElement.TOPIC_CACHE_PREFIX = "TOPIC,";
UnifiedSearchAutoCompleteElement.MAX_TOPICS_RETURNED = 100;
UnifiedSearchAutoCompleteElement.prototype.parent = SidebarSearchAutoCompleteElement.prototype;
UnifiedSearchAutoCompleteElement.prototype.getOnBlurDelay = function () {
	return UnifiedSearchAutoCompleteElement.ONBLUR_DELAY_MS
};
UnifiedSearchAutoCompleteElement.prototype.setClearButtonVisibility = function () {
	var a = this.showClearButton();
	a && "hidden" == this.clearButton.style.visibility ? setVis(this.clearButton, !0) : !a && "visible" == this.clearButton.style.visibility && setVis(this.clearButton, !1)
};
UnifiedSearchAutoCompleteElement.prototype.handleInput = function (a) {
	this.setClearButtonVisibility();
	this.parent.handleInput.call(this, a)
};
UnifiedSearchAutoCompleteElement.prototype.handleEvent = function (a) {
	if (!this.isACBoxVisible() && (this.enableAriaLiveMessage = !0, !this.disableSearchScopeDialog || this.isSearchStringValid()))
		this.isSearchStringEmpty() ? (this.displayACBox([]), this.updateWidth()) : this.displaySuggestions(!1)
};
UnifiedSearchAutoCompleteElement.prototype.innerComplete = function (a) {
	if (this.element && a && (a.topicId && (this.element.value = a.name, navigateToUrl(a.detailURL)), a.name && a.mruIds && 0 != a.mruIds.length)) {
		var b = this.element.value,
		c = this.selected;
		this.element.value = a.name;
		a.detailURL ? this.navigateToRecord(a, b, c) : this.parent.innerComplete.call(this, a)
	}
};
UnifiedSearchAutoCompleteElement.prototype.navigateToRecord = function (a, b, c) {
	if (a.detailURL) {
		b = SearchClickLoggingUtil.addSearchMacLogParams(new QueryString, {
				suggestion : a,
				searchString : b,
				position : this.selected,
				searchArea : "header"
			});
		if (this.requestParams)
			for (var d in this.requestParams)
				b.add(d, this.requestParams[d]);
		this.requestParams.isdtp ? (Sfdc.Ajax.get(SearchClickLoggingUtil.getClickLoggingServletUrl(b, null)), a = a.detailURL, navigateToUnifiedSearchDetailUrl(a)) : (a = SearchClickLoggingUtil.getClickLoggingServletUrl(b,
					a.detailURL), navigateToUrl(a))
	}
};
UnifiedSearchAutoCompleteElement.prototype.getMaxSuggestionsToDisplay = function () {
	return !this.wildCardSuggestionAdded ? UnifiedSearchAutoCompleteElement.MAX_SUGGESTIONS_TO_DISPLAY : UnifiedSearchAutoCompleteElement.MAX_SUGGESTIONS_TO_DISPLAY + 1
};
UnifiedSearchAutoCompleteElement.prototype.handleEmptyInput = function () {
	this.setClearButtonVisibility();
	this.clearSuggestions();
	this.disableSearchScopeDialog ? this.hook_hide() : (this.displayACBox([]), this.updateWidth())
};
UnifiedSearchAutoCompleteElement.prototype.getValidSuggestions = function (a, b) {
	for (var c = Math.min(UnifiedSearchUI.MAX_VALID_MRU_SUGGESTIONS, b.length), d = [], e = 0; e < b.length && d.length < c; e++) {
		var g = b[e];
		this.isValidSuggestion(a, g) && d.push(g)
	}
	return d.sort(UnifiedSearchAutoCompleteElement.sortOrderComparator)
};
UnifiedSearchAutoCompleteElement.prototype.updateACBox = function (a, b) {
	!a || 0 == a.length ? !this.disableSearchScopeDialog || this.isSearchStringValid() ? (this.displayACBox(a, b), this.scrollDiv(), this.updateWidth()) : this.isACBoxVisible() && this.hideACBox() : this.parent.updateACBox.call(this, a, b);
	this.isACBoxVisible() && this.enableAriaLiveMessage && (this.enableAriaLiveMessage = !1, Sfdc.Aria.notify(LC.getLabel("Page_UnifiedSearch", "globalSearchAutocomplete")))
};
UnifiedSearchAutoCompleteElement.prototype.handleEnter = function (a) {
	var b = this.getRow(this.selected);
	if (b && b.onclick)
		b.onclick(), AutoCompleteInputElement.captureKeystroke(a);
	else
		return this.parent.handleEnter.call(this, a)
};
UnifiedSearchAutoCompleteElement.prototype.hook_show = function () {
	addStyleClass(this.headerSearchLeftCorner, UnifiedSearchAutoCompleteElement.DROPDOWN_ACTIVATED_CLASS);
	UnifiedSearchAutoCompleteElement.toggleDisplay(UnifiedSearchUI.HEADER_SEARCH_OPTIONS_CONTAINER_ID, !1);
	Sfdc.userAgent.isSafari && this.updateWidthAfterDisplay()
};
UnifiedSearchAutoCompleteElement.prototype.hook_hide = function () {
	delStyleClass(this.headerSearchLeftCorner, UnifiedSearchAutoCompleteElement.DROPDOWN_ACTIVATED_CLASS);
	UnifiedSearchAutoCompleteElement.toggleDisplay(UnifiedSearchUI.HEADER_SEARCH_OPTIONS_CONTAINER_ID, !0)
};
UnifiedSearchAutoCompleteElement.prototype.selectPrev = function () {
	if (!this.curSuggestions || this.selected > this.curSuggestions.length - 1) {
		var a = this.selected - 1;
		0 > a ? this.deselect() : this.select(a)
	} else
		this.parent.selectPrev.call(this)
};
UnifiedSearchAutoCompleteElement.prototype.selectNext = function () {
	if (!this.curSuggestions || this.selected + 1 > this.curSuggestions.length - 1) {
		var a = this.selected + 1;
		this.getRow(a) || (a = 0);
		this.select(a)
	} else
		this.parent.selectNext.call(this)
};
UnifiedSearchAutoCompleteElement.prototype.hook_decorateHtml = function (a) {
	a.push('\x3cdiv class\x3d"usid-roundedCornerDropdown usid-brDropdown" id\x3d"usid-brDropdown"\x3e\x3c/div\x3e');
	a.push('\x3cdiv class\x3d"usid-bottomSpacer" id\x3d"usid-spacerDropdown"\x3e\x3c/div\x3e');
	a.push('\x3cdiv class\x3d"usid-roundedCornerDropdown usid-blDropdown" id\x3d"usid-blDropdown"\x3e\x3c/div\x3e');
	return a
};
UnifiedSearchAutoCompleteElement.prototype.shouldRenderWildcardSearchSuggestion = function () {
	return this.isSearchStringValid() && this.element.value.length < UnifiedSearchUI.GLOBAL_NAV_HEADER_SEARCH_BOX_LENGTH
};
UnifiedSearchAutoCompleteElement.prototype.renderWildcardSearchSuggestion = function (a, b) {
	0 < b && this.disableSearchScopeDialog && (a.push('\x3cdiv class\x3d"hr"\x3e\x3c/div\x3e'), separatorAdded = !0);
	a.push("\x3cdiv ");
	a.push('onmouseover\x3d"');
	a.push("AutoCompleteInputElement.mouseOver('" + this.id + "', " + b + ')"');
	a.push('onmouseout\x3d"');
	a.push("AutoCompleteInputElement.mouseOut('" + this.id + "', " + b + ')"');
	a.push('onclick\x3d"');
	a.push("UnifiedSearchAutoCompleteElement.performWildcardedSearch('" + this.id + "');\"");
	a.push('class\x3d"' + AutoCompleteInputElement.ROW_CSS_CLASS + '" id\x3d"' + AutoCompleteInputElement.getRowIdStatic(this.id, b) + '"\x3e');
	a.push('\x3cspan class\x3d"footerRow"\x3e' + LC.getLabel("Page_UnifiedSearch", "searchFor") + "\x26nbsp;");
	/\w$/.test(this.element.value) ? (a.push('\x3cspan class\x3d"queryText"\x3e' + escapeHTML(this.element.value) + UnifiedSearchAutoCompleteElement.WILDCARD + "\x3c/span\x3e"), a.push('\x3cspan class\x3d"greyedText"\x3e\x26nbsp;' + LC.getLabel("Page_UnifiedSearch", "searchForWildcardPost") +
			"\x3c/span\x3e")) : a.push('\x3cspan class\x3d"queryText"\x3e' + escapeHTML(this.element.value) + "\x3c/span\x3e");
	a.push("\x3c/span\x3e\x3c/div\x3e")
};
UnifiedSearchAutoCompleteElement.prototype.innerAddSuggestions = function (a, b, c, d, e, g) {
	this.parent.innerAddSuggestions.call(this, a, b, c, d, e, g);
	this.wildCardSuggestionAdded = this.shouldRenderWildcardSearchSuggestion()
};
UnifiedSearchAutoCompleteElement.prototype.addFooter = function (a, b) {
	var c = b;
	this.disableSearchScopeDialog || (0 < c && (a.push('\x3cdiv class\x3d"hr"\x3e\x3c/div\x3e'), separatorAdded = !0), a.push("\x3cdiv "), a.push('onmouseover\x3d"'), a.push("AutoCompleteInputElement.mouseOver('" + this.id + "', " + b + ')"'), a.push('onmouseout\x3d"'), a.push("AutoCompleteInputElement.mouseOut('" + this.id + "', " + b + ')"'), a.push('onclick\x3d"'), a.push(this.searchScopeDialogJS + '"'), a.push('class\x3d"' + AutoCompleteInputElement.ROW_CSS_CLASS +
			'" id\x3d"' + AutoCompleteInputElement.getRowIdStatic(this.id, b) + '"\x3e'), a.push('\x3cspan class\x3d"footerRow"\x3e' + this.searchOptionsLabel + "\x3c/span\x3e"), a.push("\x3c/div\x3e"), b++);
	this.shouldRenderWildcardSearchSuggestion() && this.renderWildcardSearchSuggestion(a, b)
};
UnifiedSearchAutoCompleteElement.prototype.clearScope = function (a) {
	this.element.value = "";
	this.clearSuggestions()
};
UnifiedSearchAutoCompleteElement.prototype.showClearButton = function () {
	return !this.isSearchStringEmpty() && 0 < this.element.value.length
};
UnifiedSearchAutoCompleteElement.prototype.isSearchStringValid = function () {
	return !this.isSearchStringEmpty() && 1 < this.element.value.length
};
UnifiedSearchAutoCompleteElement.prototype.isSearchStringEmpty = function () {
	return !this.element || "" == trim(this.element.value)
};
UnifiedSearchAutoCompleteElement.prototype.updateWidthAfterDisplay = function () {
	var a = this.getMinimumWidth(),
	b = 0,
	c = getElementByIdCS(this.id + AutoCompleteInputElement.BOX_TABLE_ID);
	c && (b = c.clientWidth);
	a = Math.max(a, b);
	this.acBox.setStyle("width", a + "px")
};
UnifiedSearchAutoCompleteElement.prototype.getMinimumWidth = function () {
	return this.element.clientWidth + 23
};
UnifiedSearchAutoCompleteElement.prototype.addACBoxToPage = function (a) {
	getElementByIdCS(UnifiedSearchUI.GLOBAL_SEARCH_CONTAINER_ID).appendChild(this.acBox)
};
UnifiedSearchAutoCompleteElement.prototype.positionACBox = function (a) {
	if (this.element && this.acBox && (!a || !this.isACBoxVisible()))
		a = this.getMinimumWidth(), this.acBox.setStyle("width", a + "px"), "object" === typeof Ext && (a = Ext.get("massEdit"), null !== a && this.acBox.setStyle("zIndex", parseFloat(a.getStyle("z-index"), 10) + 10))
};
UnifiedSearchAutoCompleteElement.performWildcardedSearch = function (a) {
	a = AutoCompleteInputElement.getInstance(a);
	/\w$/.test(a.element.value) && (a.element.value += UnifiedSearchAutoCompleteElement.WILDCARD);
	UnifiedSearchButton.submit(a.searchForm.id)
};
UnifiedSearchAutoCompleteElement.toggleDisplay = function (a, b) {
	var c = getElementByIdCS(a);
	c && (b ? c.style.display = "block" : c.style.display = "none")
};
UnifiedSearchAutoCompleteElement.sortOrderComparator = function (a, b) {
	return a.sortOrder - b.sortOrder
};
UnifiedSearchAutoCompleteElement.prototype.saveToCache = function (a, b) {
	for (var c = [], d = [], e = 0; e < b.length; e++)
		b[e].topicId ? d.push(b[e]) : c.push(b[e]);
	this.requestParams.mruDone || (this.cache[UnifiedSearchAutoCompleteElement.MRU_CACHE_KEY] = c, this.requestParams.mruDone = !0);
	3 <= a.length && (this.cache[this.getCacheKey(a)] = d)
};
UnifiedSearchAutoCompleteElement.prototype.innerGetSuggestions = function (a) {
	var b = [],
	c = [],
	d = [],
	e = 0,
	g = 0,
	h = this.cache[UnifiedSearchAutoCompleteElement.MRU_CACHE_KEY];
	h ? (c = this.getValidSuggestions(a, h), e = c.length) : this.includeTopics || AccessibleAutoCompleteInputElement.prototype.innerGetSuggestions.call(this, a);
	this.includeTopics && (d = AccessibleAutoCompleteInputElement.prototype.innerGetSuggestions.call(this, a), g = d[0].suggestions.length);
	0 < e && (a = Math.max(UnifiedSearchAutoCompleteElement.MAX_SUGGESTIONS_TO_DISPLAY -
				UnifiedSearchAutoCompleteElement.MIN_TOPICS_TO_DISPLAY, UnifiedSearchAutoCompleteElement.MAX_SUGGESTIONS_TO_DISPLAY - g), c = c.splice(0, a), b.push({
			title : LC.getLabel("Sidebar_Search", "result_source"),
			suggestions : c
		}));
	0 < g && (c = Math.min(UnifiedSearchAutoCompleteElement.MAX_TOPICS_TO_DISPLAY, UnifiedSearchAutoCompleteElement.MAX_SUGGESTIONS_TO_DISPLAY - c.length), d[0].suggestions = d[0].suggestions.splice(0, c), d[0].title = LC.getLabel("TopicsFeed", "title"), b.push(d[0]));
	return b
};
UnifiedSearchAutoCompleteElement.prototype.checkCacheOrRetrieve = function (a) {
	if (this.requestParams.mruDone && 3 > a.length)
		return [];
	var b = this.getCacheKey(a);
	if (this.cache[b])
		return this.cache[b];
	for (var c = a.length - 1; 1 < c; c--) {
		var d = this.getCacheKey(a.substr(0, c));
		if (this.cache[d] && this.cache[d].length < UnifiedSearchAutoCompleteElement.MAX_TOPICS_RETURNED)
			return this.cache[d]
	}
	this.retrieveFromServlet(a);
	return this.cache[b]
};
UnifiedSearchAutoCompleteElement.prototype.getCacheKey = function (a) {
	return UnifiedSearchAutoCompleteElement.TOPIC_CACHE_PREFIX + a.toLowerCase()
};
UnifiedSearchAutoCompleteElement.prototype.addMarkupBeforeGroup = function (a, b) {
	0 < b && a.push('\x3cdiv class\x3d"hr"\x3e\x26nbsp;\x3c/div\x3e')
};
Sfdc.onReady(function () {
	Sfdc.isDebug && Sfdc.ClientLogging.addRelay(new Sfdc.ClientLogging.ConsoleLogger, !0)
});
Sfdc.on(window, "unload", function () {
	window.Node = window.Sizzle = window.Modernizr = window.SfdcApp = window.SfdcCmp = window.Ninja = window.sfdcPage = window.Recommend = null
});
