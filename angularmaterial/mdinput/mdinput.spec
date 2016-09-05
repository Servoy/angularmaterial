{
	"name": "angularmaterial-mdinput",
	"displayName": "Input",
	"version": 1,
	"definition": "angularmaterial/mdinput/mdinput.js",
	"icon": "angularmaterial/mdinput/text.png",
	
	"libraries": [{
		"name" : "mdinput.css",
		"url" : "angularmaterial/mdinput/mdinput.css",
		"version" : "1.0.0",
		"mimetype": "text/css"
	}],
	"model":
	{
		"styleClass"	: {"type":"styleclass", "tags": { "scope" :"design" },
						    "values": ["md-primary","md-warn","md-raised","md-fab","md-accent","md-hue-1","md-hue-2","md-hue-3"]},
        "dataProviderID": { "type":"dataprovider",  "pushToServer": "allow", "tags": { }, "ondatachange": { "onchange":"onDataChangeMethodID"}}, 
		"label" 		: { "type": "tagstring", "tags": { "scope" :"design" }},
	    "format" 		: {"for":"dataProviderID" , "type" :"format", "tags": { "scope" :"design" }},
	    "tabSeq" 		: {"type" :"tabseq", "tags": { "scope" :"design" }}, 
        "toolTipText" 	: {"type" : "tagstring"}, 
        "inputType" 	: {"type":"string" , "tags": { "scope" :"design" }, "default" : "text",  "values" :["text", "password"]},
	    "readOnly" 		: {"type":"protected", "default": false, "blockingOn": true, "tags" : { "scope" :"runtime" }, "for": ["dataProviderID","onActionMethodID","onDataChangeMethodID","onFocusGainedMethodID","onFocusLostMethodID","onRightClickMethodID"] }, 
	    "enabled"		: {"type":"protected", "default": true, "blockingOn": false, "for": ["dataProviderID","onActionMethodID","onDataChangeMethodID","onFocusGainedMethodID","onFocusLostMethodID","onRightClickMethodID"] },
        "visible" 		: {"type":"visible", "default":true},
        "location" 		: "point", 
		"size"			: {"type": "dimension","default":{"width": 150,"height": 58}}
	},
	"handlers": {
        "onDataChangeMethodID" 	: "function",
        "onActionMethodID" 		: "function",
   	 	"onRightClickMethodID" 	: "function",
		"onFocusGainedMethodID" : "function",
   	 	"onFocusLostMethodID" 	: "function"
	}
}