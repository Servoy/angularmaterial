/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"173B9B8C-1F91-460F-AE93-7E91B9AE6A2C",variableType:4}
 */
var tabIndexEdit = 1;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4D5B6A0E-1F65-4CB2-8780-227AC1D00BF7",variableType:8}
 */
var tabIndex = 1;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"2BE5D099-CD29-45E1-9703-49F8D7BBF58C"}
 */
function onLoad(event) {
	testElement = 'tabpanel';
	_super.onLoad(event);
}

/**
 *
 * @param {Number} previousIndex
 * @param {JSEvent} event
 * @param {Number} newIndex
 * @param {object} newTabItem
 *
 * @properties={typeid:24,uuid:"EDAD6B03-982F-4B9C-AD2B-78DB646BBA66"}
 */
function onTabChange(previousIndex, event, newIndex, newTabItem) {
	tabIndex = newIndex
	if (!event) return;
	log('Tab change: element ' + event.getElementName() + ' | ' + previousIndex + ' - ' + elements.tabpanel.tabIndex )
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B3F46508-3388-420A-ABF6-7F08CD6F1C2E"}
 */
function getMaxTabIndex(event) {
	log('Max tab index: element ' + event.getElementName() + ' | ' + elements.tabpanel.getMaxTabIndex())
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"CB20601E-AFF2-4A3D-8FF4-864535F0CE94"}
 */
function getSelectedTabFOrmName(event) {
	log('Selected Tab form: element ' + event.getElementName() + ' | ' + elements.tabpanel.getSelectedTabFormName())
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C493C01A-7DB3-4B81-914C-BF77C92B8579"}
 */
function getTabFormNameAt(event) {
	log('Tab form name at 1: element ' + event.getElementName() + ' | ' + elements.tabpanel.getTabFormNameAt(1))
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"9667D40E-6DBB-4260-8545-1F4FD902F66E"}
 */
function getTabNameAt(event) {
	log('Tab1 name: element ' + event.getElementName() + ' | ' + elements.tabpanel.getTabNameAt(1))
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4F7DCCCE-32A4-4EA0-84CC-DA0B70464BB6"}
 */
function tabRelationName(event) {
	log('Tab1 relation name: element ' + event.getElementName() + ' | ' + elements.tabpanel.getTabRelationNameAt(1))
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1288B715-2674-4F27-A645-FE516685E127"}
 */
function tab1Text(event) {
	log('Tab1 text: element ' + event.getElementName() + ' | ' + elements.tabpanel.getTabTextAt(1))
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8FDB63E3-84D6-4135-8E9C-F8A5695D6F75"}
 */
function isTabEnabledAt(event) {
	log('Tab1 enabled ? : element ' + event.getElementName() + ' | ' + elements.tabpanel.isTabEnabledAt(1))
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7639DF43-1B77-4894-96A4-39BC43E53793"}
 */
function removeAllTabs(event) {
	elements.tabpanel.removeAllTabs();
	log('All tab removed. Available tabs : element ' + event.getElementName() + ' | ' + elements.tabpanel.getMaxTabIndex())
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"508C6273-E919-4FD0-8040-CACAE1E4109C"}
 */
function removeTab1(event) {
	elements.tabpanel.removeTabAt(tabIndexEdit)
	log('Tab1 removed. Available tabs : element ' + event.getElementName() + ' | ' + elements.tabpanel.getMaxTabIndex())
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3987681D-B36A-41B1-B269-75C4ACF0FEDF"}
 */
function toggleTab1Enable(event) {
	elements.tabpanel.setTabEnabledAt(1, elements.tabpanel.isTabEnabledAt(tabIndexEdit) ? false : true)
	log('Tab1 enabled : element ' + event.getElementName() + ' | ' + elements.tabpanel.isTabEnabledAt(tabIndexEdit))
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A5595252-3E4E-4187-9F75-30886C7999B5"}
 */
function setTab1Text(event) {
	if (!tabIndexEdit) {
		return;
	}
	elements.tabpanel.setTabTextAt(tabIndexEdit,'Hello')
	log('Tab1 text : element ' + event.getElementName() + ' | ' + elements.tabpanel.getTabTextAt(tabIndexEdit))
}

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EBB4CF6F-1AD0-4F63-A02D-AAAE376574A3",variableType:4}
 */
var tabNo = 1;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5ED435FC-5799-4A99-87BA-73CDDFAD3CD3"}
 */
function AddTab(event) {
	var frm = solutionModel.newForm(application.getUUID().toString(), solutionModel.getForm("dummyBase"));
	frm.newLabel('This is form ' + tabNo, 10, 10, 200,20);
	frm.width = frm.getBodyPart().height = 200;
	frm.width = 200;
	elements.tabpanel.addTab(frm.name, 'frm'+tabNo, 'Tab ' + tabNo, 'Tooltip ' + tabNo, null, tabIndexEdit);
	tabNo++;
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"0D0E0CEE-D4DE-418D-B39F-DEB19CC9F213"}
 */
function onDataChangeTabIndex(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	if (tabIndex && tabIndex > 0 && tabIndex <= elements.tabpanel.getMaxTabIndex()) {
		elements.tabpanel.tabIndex = tabIndex
		return true
	}
	return false
}

/**
 * Callback method when the user changes tab in a tab panel or divider position in split pane.
 *
 * @param {Number} previousIndex index of tab shown before the change
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"BDCEDD02-C13B-4344-BC7B-B390644DD85E"}
 */
function onTabChange1(previousIndex, event) {
	// TODO Auto-generated method stub
}
