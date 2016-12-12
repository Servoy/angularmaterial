/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"D5EDC2FF-CAAF-466C-8E61-20D6231F9CE9"}
 */
function onLoad(event) {
	testElement = "mdtabpanel_test"
	_super.onLoad(event)
	
	elements.mdtabpanel_test.tabs = [{
		containedForm : "ButtonBts",
		text: "First Form"
	}, { 
		containedForm : "dummy2Bts",
		text: "(Disabled)",
		disabled: true
	},{ 
		containedForm : "dummy5Bts",
		text: "Fifth form",
		height: 300
	}]
	
	elements.mdtabpanel_readonly.tabs = [{
		containedForm : "dummy3Bts",
		text: "Third Form",
		height : 300
	}, { 
		containedForm : "dummy4Bts",
		text: "Fourth form (Disabled)",
		disabled: true
	}]
	
}