/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5D718952-4FEE-4AA5-8B3B-BC0B0F9F02C8"}
 */
var falseValueOnly = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"79718D52-111B-4BC7-9193-4BD5B434AB6E"}
 */
var trueValueOnly = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BBB17A5A-A88C-4805-AE9C-373CD760F573"}
 */
var varStringRealValue = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"3D4A4609-AD7C-48BD-9C88-0A38D21D1759"}
 */
function onLoad(event) {
	
	testElement = 'mdswitch_test';
	_super.onLoad(event);
}


/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"97292F75-FA02-443F-871E-7F88C1000801",variableType:4}
 */
var val = 0;
/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"C7A2F886-2A67-4880-95FC-A49DD9453BED"}
 */
function onDataChange(oldValue, newValue, event) {
	elements.mdswitch_test.label = (val ? 'ON' : 'OFF');
	return _super.onDataChange(oldValue, newValue, event)
}
