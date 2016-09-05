/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"4E0E6918-175C-4C9B-ACC6-1EE6F2D6473D"}
 */
function onShow(firstShow, event) {
	var tabs = [{
			containedForm: "dummy1Bts",
			text: "one"
		}, {
			containedForm: "dummy2Bts",
			text : "two"
		}]
		
	elements.tabpanel_1.tabs = tabs;

	return _super.onShow(firstShow, event);
}
