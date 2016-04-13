{
	"name": "angularmaterial-mdautocomplete",
	"displayName": "Auto complete",
	"version": 1,
	"icon": "angularmaterial/mdautocomplete/text.png",
	"definition": "angularmaterial/mdautocomplete/mdautocomplete.js",
	"libraries": [
			{"name":"mdautocomplete.css", "version":"1.0.0", "url":"angularmaterial/mdautocomplete/mdautocomplete.css", "mimetype":"text/css"}
		],
"model":
	{
		"styleClass"	: {"type":"styleclass", "tags": { "scope" :"design" },
							"values": ["md-primary","md-warn","md-raised","md-fab","md-accent","md-hue-1","md-hue-2","md-hue-3"]},
        "dataProviderID": { "type":"dataprovider",  "pushToServer": "allow", "tags": { }, "ondatachange": { "onchange":"onDataChangeMethodID"}}, 
        "valuelistID" : { "type": "valuelist", "tags": { "scope" :"design" } },
		"label" 		: { "type": "tagstring", "tags": { "scope" :"design" }},
		"floatingLabel" : { "type": "boolean", "tags": { "scope" :"private" }, "default" : true},
		
		
		"tabSeq" 		: {"type" :"tabseq", "tags": { "scope" :"design" }}, 
        "toolTipText" 	: {"type" :"tagstring"}, 
		"enabled"		: {"type":"protected", "default": true, "blockingOn": false, "for": ["dataProviderID","onActionMethodID","onDataChangeMethodID","onFocusGainedMethodID","onFocusLostMethodID","onRightClickMethodID"] },
        "readOnly"		: {"type":"protected", "default": false, "tags" : { "scope" :"runtime" }, "blockingOn": true, "for": ["dataProviderID","onActionMethodID","onDataChangeMethodID","onFocusGainedMethodID","onFocusLostMethodID","onRightClickMethodID"] },

        "visible" 		: {"type":"visible", "default":true},
        "location" 		: "point", 
		"size"			: {"type": "dimension","default":{"width": 150,"height": 58}}
	},
	"handlers": {
        "onDataChangeMethodID" 	: "function",
        "onActionMethodID" 		: "function",
   	 	"onRightClickMethodID" 	: "function",
   	 	"onFocusGainedMethodID" : "function",
   	 	"onFocusLostMethodID" : "function"
	}
}