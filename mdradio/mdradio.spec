{
	"name": "angularmaterial-mdradio",
	"displayName": "Radio",
	"version": 1,
	"definition": "angularmaterial/mdradio/mdradio.js",
	"icon": "angularmaterial/mdradio/radio.png",
	
	"libraries": [
			{"name":"mdradio_custom.css", "version":"1", "url":"angularmaterial/mdradio/mdradio_custom.css", "mimetype":"text/css"}
		],
	"model":
	{
		"styleClass"	: {"type":"styleclass", "tags": { "scope" :"design" },
							"values": ["md-primary","md-warn","md-raised","md-fab","md-accent","md-hue-1","md-hue-2","md-hue-3"]},
        "dataProviderID": { "type":"dataprovider",  "pushToServer": "allow", "tags": { }, "ondatachange": { "onchange":"onDataChangeMethodID"}}, 
        "valuelistID" 	: { "type": "valuelist", "tags": { "scope" :"design" } },
        "tabSeq" 		: {"type" :"tabseq", "tags": { "scope" :"design" }}, 
        
		"enabled"		: {"type":"protected", "default": true, "blockingOn": false, "for": ["dataProviderID","onActionMethodID","onDataChangeMethodID","onFocusGainedMethodID","onFocusLostMethodID","onRightClickMethodID"] },
        "readOnly"		: {"type":"protected", "default": false, "blockingOn": true, "tags" : { "scope" :"runtime" }, "for": ["dataProviderID","onActionMethodID","onDataChangeMethodID","onFocusGainedMethodID","onFocusLostMethodID","onRightClickMethodID"] },

        "visible" 		: {"type":"visible", "default":true},
        "location" 		: "point", 
		"size"			: {"type": "dimension","default":{"width": 300,"height": 58}}
	},
	"handlers": {
        "onDataChangeMethodID" 	: "function",
        "onActionMethodID" 		: "function",
   	 	"onRightClickMethodID" 	: "function",
   	 	"onFocusGainedMethodID" : "function",
   	 	"onFocusLostMethodID" : "function"
	}
}