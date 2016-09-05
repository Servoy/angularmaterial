{
	"name": "angularmaterial-mdtabpanel",
	"displayName": "Tab panel",
	"version": 1,
	"definition": "angularmaterial/mdtabpanel/mdtabpanel.js",
	"serverscript": "angularmaterial/mdtabpanel/mdtabpanel_server.js",
	
	"libraries": [
			{"name":"mdcheck_custom.css", "version":"1.0.0", "url":"angularmaterial/mdtabpanel/mdtabpanel.css", "mimetype":"text/css"}
	],
	"model":
	{
        "styleClass" 	: {"type":"styleclass", "tags": { "scope" :"design" },
							"values": ["md-primary","md-warn","md-raised","md-fab","md-accent","md-hue-1","md-hue-2","md-hue-3"]}, 
        "tabIndex" 		: {"type":"int", "pushToServer": "shallow", "tags": { "scope" :"runtime" },"default": 1},
        "tabSeq" 		: {"type" :"tabseq", "tags": { "scope" :"design" }}, 
        "tabs" 			: {"type":"tab[]", "pushToServer": "shallow", "droppable": true}, 
        
        "readOnly" 		: { "type": "protected", "tags" : { "scope" :"runtime" }, "blockingOn": true, "for": ["onChangeMethodID","onTabChangeMethodID"], "default":false },
        "enabled" 		: { "type": "enabled", "blockingOn": false, "default": true, "for": ["onChangeMethodID","onTabChangeMethodID"] }, 
         
        "visible" 		: {"type":"visible", "default":true},
        "location" 		: "point", 
		"size"			: {"type": "dimension","default":{"width": 500,"height": 400}}
	},
	"handlers":
	{
        "onTabChange" 	: {
		        "parameters" : [
						            { "name" : "previousIndex", "type" : "int" },
						            { "name" : "event", "type" : "JSEvent" }
						        ]
		  }
	},
	"api":
	{
	        "addTab": {
	            "returns": "boolean",
				"parameters":[
								{                                                                 
	 								"name":"form/formname",
									"type":"form"
			                	},
             					{                                                                 
	 								"name":"name",
									"type":"string",
				            		"optional":true
			            		},
             					{                                                                 
	 								"name":"tabText",
									"type":"string",
				            		"optional":true
			            		},
             					{                                                                 
	 								"name":"tooltip",
									"type":"string",
				            		"optional":true
			            		},
             					{                                                                 
	 								"name":"relatedfoundset/relationname",
									"type":"relation",
				            		"optional":true
			            		},
             					{                                                                 
	 								"name":"index",
									"type":"int",
				            		"optional":true
			            		}             
							 ]
	        },
	        "getMaxTabIndex": {
	            "returns": "int"
	        },
	        "getSelectedTabFormName": {
	            "returns": "string"
	        },
	        "getTabFormNameAt": {
	            "returns": "string",
				"parameters":[
								{                                                                 
 								"name":"index",
								"type":"int"
			                	}             
							 ]
	        },
	        "getTabNameAt": {
	            "returns": "string",
				"parameters":[
								{                                                                 
 								"name":"index",
								"type":"int"
			                	}             
							 ]
	        },
	        "getTabRelationNameAt": {
	            "returns": "string",
				"parameters":[
								{                                                                 
 								"name":"index",
								"type":"int"
			                	}             
							 ]
	        },
	        "getTabTextAt": {
	            "returns": "string",
				"parameters":[
								{                                                                 
 								"name":"index",
								"type":"int"
			                	}             
							 ]
	        },
	        "isTabEnabledAt": {
	            "returns": "boolean",
				"parameters":[
								{                                                                 
 								"name":"index",
								"type":"int"
			                	}             
							 ]
	        },
	        "removeAllTabs": {
	            "returns": "boolean"
	        },
	        "removeTabAt": {
	            "returns": "boolean",
				"parameters":[
								{                                                                 
 								"name":"index",
								"type":"int"
			                	}             
							 ]
	        },
	        "setTabEnabledAt": {
				"parameters":[
								{                                                                 
 								"name":"index",
								"type":"int"
			                	},
             					{                                                                 
 								"name":"enabled",
								"type":"boolean"
			                	}             
							 ]
	        },
	        "setTabTextAt": {
				"parameters":[
								{                                                                 
 								"name":"index",
								"type":"int"
			                	},
             					{                                                                 
 								"name":"text",
								"type":"string"
			                	}             
							 ]
	        }
	},
	"types":
	{
		"tab": {
	  		"name": "string",
	  		"containedForm": "form",
	  		"text": "tagstring",
	  		"relationName": "relation",
	  		"active": {"type" : "boolean", "tags":{"scope": "private"}},
	  		"disabled": {"type" : "boolean", "default": false}
	  	}
	}
}