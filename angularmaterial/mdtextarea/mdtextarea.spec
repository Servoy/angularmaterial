{
	"name": "angularmaterial-mdtextarea",
	"displayName": "Text area",
	"version": 1,
	"definition": "angularmaterial/mdtextarea/mdtextarea.js",
	"icon": "angularmaterial/mdtextarea/textarea.png",
	
	"libraries": [{
		"name" : "mdtextarea.css",
		"url" : "angularmaterial/mdtextarea/mdtextarea.css",
		"version" : "1.0.0",
		"mimetype": "text/css"
	}],
	"model":
	{
		"styleClass"	: {"type":"styleclass", "tags": { "scope" :"design" },
							"values": ["md-primary","md-warn","md-raised","md-fab","md-accent","md-hue-1","md-hue-2","md-hue-3"]},
        "dataProviderID": { "type":"dataprovider",  "pushToServer": "allow", "tags": { }, "ondatachange": { "onchange":"onDataChangeMethodID"}}, 
        "label" 		: { "type": "tagstring", "tags": { "scope" :"design" } },
        "rows" 			: {"type" : "int", "tags": { "scope" :"design" }},
        "maxLength"		: {"type" : "int", "tags": { "scope" :"design" }},
        "autogrow"		: {"type":"boolean", "default":true, "tags": {"scope": "private"}},
        
        "tabSeq" 		: {"type" :"tabseq", "tags": { "scope" :"design" }}, 
        "toolTipText" 	: {"type" : "tagstring"}, 
       	"readOnly" 		: {"type":"protected", "default": false,  "tags" : { "scope" :"runtime" }, "blockingOn": true, "for": ["dataProviderID","onActionMethodID","onDataChangeMethodID","onFocusGainedMethodID","onFocusLostMethodID","onRightClickMethodID"] }, 
   	    "enabled"		: {"type":"enabled", "default": true, "blockingOn": false, "for": ["dataProviderID","onActionMethodID","onDataChangeMethodID","onFocusGainedMethodID","onFocusLostMethodID","onRightClickMethodID"] },
   
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