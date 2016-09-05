/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EC525837-3E77-4AC0-98C2-B7EBA3B33C5D"}
 */
function onLoad(event) {	
	testElement = 'mdswitch_test';
	_super.onLoad(event);
}


/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"A1A864F1-26C7-4135-A58A-CB949D117CBC"}
 */
function onDataChange(oldValue, newValue, event) {
	elements.mdswitch_test.label = (varString == "true" ? 'ON' : 'OFF');
	return _super.onDataChange(oldValue, newValue, event)
}
