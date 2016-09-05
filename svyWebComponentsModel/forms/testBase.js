/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"79AE33D9-E709-44F9-958E-1867D8B93A86"}
 */
var logText;

/**
 * The element to be used to get ID and toggle visibility
 * 
 * @type {String}
 *
 * @properties={typeid:35,uuid:"47098D90-5CE6-44D5-A0C2-7DA52E92AACC"}
 */
var testElement;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"95046F0E-5374-4C48-A2DF-7074C13B0D6D"}
 */
var varString

/**
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"B7C2779C-06DA-471E-8196-26532EECA97A",variableType:-4}
 */
var varBoolean = true

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"48992E96-E187-474C-8D22-6FCF346A92CB",variableType:4}
 */
var varNumber

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"3AA1DAD9-B048-433C-89AC-1DF125CCCC34",variableType:93}
 */
var varDate

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"E1717A15-A6ED-4C76-8D17-6D1262F99746",variableType:93}
 */
var varToday = new Date();

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"DF75E9AE-DCDB-4CBA-B041-25D7D739C2AD"}
 */
function shutDown(event) {
	application.closeSolution();
}

/**
 * @protected 
 * @param {JSEvent} event
 * 
 * @properties={typeid:24,uuid:"FE26EE33-A845-4545-90F0-FF4FF589B8DF"}
 */
function updateUI(event) {
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"C81CC9FD-16A4-4A89-AF30-699BD6392987"}
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
 * @properties={typeid:24,uuid:"6F3CF05C-6E47-4100-934A-307C8BB9149A"}
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
 * @properties={typeid:24,uuid:"8D5FBDAF-B78D-43C9-9C9E-E3B024B25B03"}
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
 * @properties={typeid:24,uuid:"C411A2DA-94BA-489E-AC36-F248F1C9C879"}
 */
function onRecordSelection(event) {
	updateUI(event)
}

/**
 * @param {String} msg
 *
 * @properties={typeid:24,uuid:"08FCB70E-3090-42F1-9730-EE58166C39F0"}
 */
function log(msg) {
	logText += msg + "\n"
	application.output(msg)
}

/**
 * @public 
 * @properties={typeid:24,uuid:"512AB797-047B-4AD4-B462-47E1015132E8"}
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
 * @properties={typeid:24,uuid:"227BA0B2-FC31-4846-9578-7A7A9F818491"}
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
 * @properties={typeid:24,uuid:"85E26F4B-02E5-499D-9D9A-B8868C9AB66B"}
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
 * @properties={typeid:24,uuid:"8E703DC5-AB20-421A-837A-6D7E773AE965"}
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
 * @properties={typeid:24,uuid:"F1D5CA69-7A6A-4665-B3DA-97E92DB14E16"}
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
 * @properties={typeid:24,uuid:"997D7717-680C-474C-9B68-62F5693D059A"}
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
 * @properties={typeid:24,uuid:"C3D6E65D-213E-4A33-B174-EC52BFAE85E0"}
 */
function onFocusGained(event) {
	log('Focus Gained: element ' + event.getElementName())
}

/**
 * @protected 
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"2002ACB1-976E-4489-B4D0-8BAD81EF938E"}
 */
function prevRecord(event) {
	foundset.setSelectedIndex(foundset.getSelectedIndex() - 1)
}

/**
 * @protected 
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"14911CB3-3FA3-4825-9AD6-EACE9EA5DCCB"}
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
 * @properties={typeid:24,uuid:"E81967F3-9906-4278-9A35-5AB8677EFD72"}
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
 * @properties={typeid:24,uuid:"F04E693B-4B65-408F-889D-0077FEADFDB3"}
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
 * @properties={typeid:24,uuid:"CABE3A02-389D-436C-9989-510E6AA1001E"}
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
 * @properties={typeid:24,uuid:"C0039C4D-E686-4C71-81B7-47090E4B2A93"}
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
 * @properties={typeid:24,uuid:"776DBB83-F711-47F9-8B82-2203191BCCBF"}
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
 * @properties={typeid:24,uuid:"B7F6806C-D29D-407D-89EE-A17C3AC406E6"}
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
 * @properties={typeid:24,uuid:"E118BD05-4CC8-4FC2-8134-E91505AAEAFB"}
 */
function onClearLog(event) {
	logText = null;
}