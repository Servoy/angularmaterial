{
	"name": "angularmaterial-mdswitch",
	"displayName": "Switch",
	"version": 1,
	"definition": "angularmaterial/mdswitch/mdswitch.js",
	"icon": "angularmaterial/mdswitch/switch.png",
	
	"libraries": [{"name":"mdswitch.css", 
		"version":"1.0.0", 
		"url":"angularmaterial/mdswitch/mdswitch.css", 
		"mimetype":"text/css"}],
	"model":
	{
		"styleClass"		: {"type":"styleclass", "tags": { "scope" :"design" },
								"values": ["md-primary","md-warn","md-raised","md-fab","md-accent","md-hue-1","md-hue-2","md-hue-3"]},
        "dataProviderID"	: { "type":"dataprovider",  "pushToServer": "allow", "tags": { }, "ondatachange": { "onchange":"onDataChangeMethodID"}},
        "label" 			: {"type": "tagstring"},
        "format" 			: {"type": "format", "for": "dataProviderID", "tags" : {"scope":"private"}},
        
        
        "tabSeq" 			: {"type" :"tabseq", "tags": { "scope" :"design" }}, 
        "toolTipText" 		: {"type" :"tagstring"},
        "trueValue"			: {"type" : "string", "tags": { "scope" :"design" }},
        "falseValue"		: {"type" : "string", "tags": { "scope" :"design" }},
		
		"enabled"		: {"type":"protected", "default": true, "blockingOn": false, "for": ["dataProviderID","onActionMethodID","onDataChangeMethodID","onFocusGainedMethodID","onFocusLostMethodID","onRightClickMethodID"] },
        "readOnly"		: {"type":"protected", "default": false, "tags" : { "scope" :"runtime" }, "blockingOn": true, "for": ["dataProviderID","onActionMethodID","onDataChangeMethodID","onFocusGainedMethodID","onFocusLostMethodID","onRightClickMethodID"] },
        "visible" 			: {"type":"visible", "default":true},
        "location" 			: "point", 
		"size"				: {"type": "dimension","default":{"width": 100,"height": 20}}
	},
	"handlers": {
        "onDataChangeMethodID" 	: "function",
        "onActionMethodID" 		: "function",
   	 	"onRightClickMethodID" 	: "function",
   	 	"onFocusGainedMethodID" : "function",
   	 	"onFocusLostMethodID" : "function"
	}
}