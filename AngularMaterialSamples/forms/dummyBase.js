/**
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"2E19282A-413B-4C33-9D78-E684C46AB856",variableType:-4}
 */
var allowHide = true;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"887A8830-FF20-4909-B48F-706F394D0E47"}
 */
function onShow(firstShow, event) {
	var msg = "Show " + controller.getName()
	log(msg)
	updateUI();
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
 * @properties={typeid:24,uuid:"ABF045CE-BB3D-4EF2-9F53-01F81E39CA80"}
 */
function onHide(event) {
	var msg = "Hide " + controller.getName()
	log(msg)
	return allowHide;
}


/**
 * @param msg
 *
 * @properties={typeid:24,uuid:"5C126099-9436-4094-8E5C-B9193C2F4361"}
 */
function log(msg) {
	forms.TabPanel.log(msg)
}

/**
 * @properties={typeid:24,uuid:"CB0DABF8-5066-4328-B32F-2E6027481FD3"}
 */
function updateUI() {
	elements.allow.enabled = !allowHide;
	elements.block.enabled = allowHide;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"EE9E73C2-98C5-4B3F-AC5E-47CE4FDB05E1"}
 */
function btnAllowHide(event) {
	allowHide = true;
	updateUI();
}

/**
 * @param event
 * @protected 
 *
 * @properties={typeid:24,uuid:"E96CE9A4-7C95-4A8E-971F-EF4006BD4386"}
 */
function btnBlockHide(event) {
	allowHide = false;
	updateUI();
}
