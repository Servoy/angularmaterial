/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"10F067C2-132B-494A-8AF4-564E35AB3DDC"}
 */
var logText;

/**
 * The element to be used to get ID and toggle visibility
 * 
 * @type {String}
 *
 * @properties={typeid:35,uuid:"650A37DF-647C-48D4-90BF-3E66A6CC37ED"}
 */
var testElement;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"904C2355-DF95-4B16-A5D9-F8B0AADBED36"}
 */
var varString

/**
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"D3B9B293-7585-4ACD-8E5B-2251663DB783",variableType:-4}
 */
var varBoolean = true

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F1115C5F-3686-4429-BFEC-9E46C14F6DB7",variableType:4}
 */
var varNumber

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"783E493D-2780-47D2-9236-1BF3FD4A3D3F",variableType:93}
 */
var varDate

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"D8100800-9691-4806-85DB-A12BDD373615",variableType:93}
 */
var varToday = new Date();

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"E6C90459-DF39-4661-B57C-DEC67E897320"}
 */
function shutDown(event) {
	application.closeSolution();
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"1222E8E7-0EC3-478E-8CB3-9F4DE3C88F8F"}
 */
function onLoad(event) {
	updateUI(event)
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"3F1D1368-398F-415E-8CC3-5CF5053BDA54"}
 */
function onShow(firstShow, event) {
	updateUI(event)
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"41F2DA23-7337-4D60-979B-780466CAB1DA"}
 */
function onHide(event) {
	// TODO Auto-generated method stub
	return true
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"FF236D14-B41C-4376-8471-DECA98070E99"}
 */
function onRecordSelection(event) {
	updateUI(event)
}

/**
 * @param {String} msg
 *
 * @properties={typeid:24,uuid:"1C0D4786-30C9-4663-B739-8CFFD9374304"}
 */
function log(msg) {
	logText += msg + "\n"
	application.output(msg)
}

/**
 * @public 
 * @properties={typeid:24,uuid:"7A243C9A-5DF7-46AA-98C7-E4EBD71BE036"}
 */
function clearLog() {
	logText = null
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"9AE86906-DA3E-493D-96A8-1370BAD0922B"}
 */
function onDataChange(oldValue, newValue, event) {
	log('Data change: element ' + event.getElementName() + ' | ' + newValue + ' - ' + oldValue)
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"E135C55D-7C00-4FDD-BD20-915AF705E62C"}
 */
function onAction(event) {
	log('Action: element ' + event.getElementName() +  " " + event.getType() + " " + event.getX() + " " + event.getY() + " " + event.getModifiers())
}

/**
 * Perform the element right-click action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"B3897537-C691-48B6-96E4-68C6A69D2B6B"}
 */
function onRightClick(event) {
	log('Right Click: element ' + event.getElementName())
}

/**
 * Perform the element right-click action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"9DDBD7D8-5261-421D-9343-32315C553CF4"}
 */
function onDoubleClick(event) {
	log('Double Click: element ' + event.getElementName())
}

/**
 * Perform the element right-click action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"D6200EBD-3B65-48AA-B6CB-174830BA3433"}
 */
function onFocusLost(event) {
	log('Focus Lost: element ' + event.getElementName())
}

/**
 * Perform the element right-click action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"06FD56F0-950E-441C-A802-35506FFBAF4F"}
 */
function onFocusGained(event) {
	log('Focus Gained: element ' + event.getElementName())
}

/**
 * @protected 
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"1AB8F8A7-F084-40E4-BC00-66E29FBEC58E"}
 */
function prevRecord(event) {
	foundset.setSelectedIndex(foundset.getSelectedIndex() - 1)
}

/**
 * @protected 
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"D1254367-F231-480C-A278-2326FA7D17B0"}
 */
function nextRecord(event) {
	foundset.setSelectedIndex(foundset.getSelectedIndex() + 1)
}

/**
 * Handle focus gained event of an element on the form. Return false when the focus gained event of the element itself shouldn't be triggered.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"DAC4C999-6144-4B3B-ABF9-5B7A50C4F5C3"}
 */
function onElementFocusGained(event) {
	if (testElement && event.getElementName() == testElement) {
		log('FORM ' + event.getFormName() + ' Element focus GAINED ' + event.getElementName())
	}
	return true
}

/**
 * Handle focus lost event of an element on the form. Return false when the focus lost event of the element itself shouldn't be triggered.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"5A805CA8-5A62-46AC-871E-3E1E242155B0"}
 */
function onElementFocusLost(event) {
	if (testElement && event.getElementName() == testElement) {
		log('FORM ' + event.getFormName() + ' Element focus LOST ' + event.getElementName())
	}
	return true
}

/**
 * @param {JSEvent} event
 * @protected
 *
 * @properties={typeid:24,uuid:"DC7FC87E-FA28-480E-A3A6-864CA56E6357"}
 */
function toggleFormReadOnly(event) {
	controller.readOnly = !controller.readOnly
    log("Form  is now " + (controller.readOnly ? 'readOnly' : 'non-readOnly'))
	updateUI(event)
}

/**
 * @param {JSEvent} event
 * @protected
 *
 * @properties={typeid:24,uuid:"E7B88B8F-3DA7-4B70-AE3E-D4E1321AA006"}
 */
function toggleFormEnabled(event) {
	controller.enabled = !controller.enabled
    log("Form  is now " + (controller.enabled ? 'enabled' : 'non-enabled'))
	updateUI(event)
}

/**
 * Returns true if the test element has property testElement
 * @param {String} prop
 * @protected 
 *
 * @properties={typeid:24,uuid:"F656851C-7563-4E69-A2BA-EF1AD376C1BE"}
 */
function testElementHasProperty(prop) {
    if (!testElement || !elements[testElement]) { 
    	return false 
	}
	return prop in elements[testElement]
} 

/**
 * Toggle a Boolean property of the testElement
 * 
 * @param {JSEvent} event
 * @param {String} prop
 * @protected 
 *
 * @properties={typeid:24,uuid:"B3A2544C-33F7-4E31-AB43-BEB6EE3C88FC"}
 */
function toggleElementPropertyBoolean(event , prop) {
    if (testElementHasProperty(prop)) {
    	elements[testElement][prop] = elements[testElement][prop] ? false : true;
    	log("Element " + testElement + ' is now ' + (elements[testElement][prop] ? prop : 'non-' + prop));
    }
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"9F4A18CE-E612-4961-BC86-5797004AC133"}
 */
function onClearLog(event) {
	logText = null;
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"D91FC963-4C17-4885-8115-F2FFD8A01D41"}
 */
function updateUI(event) {
	if (!testElementHasProperty("enabled")) elements.btnEnabled.visible = false;
	if (!testElementHasProperty("readOnly")) elements.btnReadOnly.visible = false;	
}