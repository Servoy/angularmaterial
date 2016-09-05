{
	"name": "angularmaterial-mdbutton",
	"displayName": "Button",
	"definition": "angularmaterial/mdbutton/mdbutton.js",
	"icon": "angularmaterial/mdbutton/button16.png",
	"version": 1,
	"libraries": 
	[
		{
			"name": "mdButton-css",
			"version": "v1.0.0",
			"url": "angularmaterial/mdbutton/mdbutton.css",
			"mimetype": "text/css"
		}
	],

	"model": 
	{
		"iconName":  { "type": "tagstring" },
		"iconHorizontalAlignment": {"type" :"int", "tags": { "scope" :"design" }, "values" :[{"LEFT":2},{"RIGHT":4}],"default" : 2},
		"text": { "type": "tagstring", "tags": { "scope": "design"}},

		"dataProviderID": "dataprovider",
		"styleClass": { "type": "styleclass", "tags": { "scope": "design"}, "default": "md-raised",
			"values": [
				"md-primary",
				"md-warn",
				"md-raised",
				"md-fab",
				"md-accent",
				"md-hue-1",
				"md-hue-2",
				"md-hue-3",
				"md-icon-button"
		]},
		"theme": { "type": "string", "default": "", "tags": {"scope": "private"},
			"values": [
				"red",
				"pink",
				"purple",
				"deep-purple",
				"indigo",
				"blue",
				"light-blue",
				"cyan",
				"teal",
				"green",
				"light-green",
				"lime",
				"yellow",
				"amber",
				"orange",
				"deep-orange",
				"brown",
				"grey",
				"blue-grey"
			]},
		"tabSeq": { "type": "tabseq", "tags": { "scope": "design"}},

		"toolTipText": "tagstring",
		"enabled"		: {"type":"protected", "default": true, "blockingOn": false, "for": ["dataprovider","onActionMethodID","onDoubleClickMethodID","onFocusGainedMethodID","onFocusLostMethodID","onRightClickMethodID"] },

		"visible": { "type": "visible", "default": true },

		"location": "point",
		"size": { "type": "dimension", "default": {"width": 150, "height": 30 }}
	},

	"handlers": 
	{
		"onActionMethodID": "function",
		"onDoubleClickMethodID": "function",
		"onRightClickMethodID": "function"
	},

	"api": 
	{
		
	}
}