/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9B2E5F49-C247-4DDB-A905-0E5D118B1BF6"}
 */
var action = 'CLOSE';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"876FB39C-C12B-4031-88CB-FBCE7F8925F4"}
 */
var msg = 'A NOTIFICATION TOAST.';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A444FAC4-8882-4A44-B1EA-236ED58D9A22",variableType:8}
 */
var delay = 1000;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B3FC3FF3-8A5E-4C89-A6A7-7DAD22202A66",variableType:8}
 */
var right = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0A48B58F-416D-4B71-93D1-21556316EE49",variableType:8}
 */
var left = 1;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"639EB114-824E-48E2-B1D2-A316D52B1E9F",variableType:8}
 */
var top = 1;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"05ED0638-DFE0-4829-9F25-49B983AE3877",variableType:8}
 */
var bottom = 0;

/**
 * @properties={typeid:35,uuid:"79F61EE6-02EA-4377-B75D-324233154EA3",variableType:-4}
 */
var position = {
	bottom: bottom,
	top: top,
	left: left,
	right: right
};

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"47EEA102-5BF1-4584-8197-25694F4CA4F6"}
 */
var positionString = 'top left';

/**
 * Show a simple toast notification
 *
 * @param {JSEvent} event the event that triggered the action
 * @private
 *
 * @properties={typeid:24,uuid:"7669A929-61EC-47D4-805F-1F9B548DEC27"}
 */
function onAction$showToast(event) {
	plugins.mdToast.show(msg, action, positionString, delay);
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
 * @properties={typeid:24,uuid:"20E04B5D-2F48-43DD-956A-EC0CDAF3DD57"}
 */
function onDataChange$position(oldValue, newValue, event) {
	var elm = event.getElementName();
	positionString = '';

	//position logic
	switch (elm) {
	case 'top':
		if (newValue) {
			bottom = 0;
		}
		break;
	case 'bottom':
		if (newValue) {
			top = 0;
		}
		break;
	case 'left':
		if (newValue) {
			right = 0;
		}
		break;
	case 'right':
		if (newValue) {
			left = 0;
		}
		break;
	}
	
	//update position
	position = {
		bottom: bottom,
		top: top,
		left: left,
		right: right
	}

	//create position string
	for (var pos in position) {
		if (position[pos]) {
			positionString = positionString + ' ' + pos;
		}
	}
	
	return true;
}
