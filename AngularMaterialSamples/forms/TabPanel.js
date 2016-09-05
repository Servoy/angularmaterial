/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F3082F93-B042-462C-B966-10681208CD38",variableType:4}
 */
var tabIndexEdit = 1;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E5289C1A-4044-4B4C-AA63-55F1C95E1CF1",variableType:8}
 */
var tabIndex = 1;


/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"AF7066AD-C346-46B7-A4CC-69297FFC9F0C"}
 */
function onLoad(event) {
	testElement = 'tabpanel';
	_super.onLoad(event);
}

/**
 *
 * @param {Number} previousIndex
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"642EC982-81E9-4EF6-9824-8B8A7986117E"}
 */
function onTabChange(previousIndex, event) {
	if (!event) {
		log('EXCEPTION: no event at onTabChange' )
		tabIndex = elements.tabpanel.tabIndex;
		return;
	};

	/** @type {RuntimeComponent} */
	var tabElement = elements[event.getElementName()];
	tabIndex = tabElement.tabIndex;
	log('Tab change: element ' + event.getElementName() + ' | ' + previousIndex + ' - ' + tabIndex )
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E334E859-2100-44A6-B7BA-887ECF15B6AF"}
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
 * @properties={typeid:24,uuid:"E048CBDF-96C0-4F6D-BFBD-14AB14AB298E"}
 */
function getSelectedTabFOrmName(event) {
	log('Selected Tab form: element ' + event.getElementName() + ' | ' + elements.tabpanel.getSelectedTabFormName())
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"74CF486E-5185-4082-913A-C77AA6AA958D"}
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
 * @properties={typeid:24,uuid:"E94FECEC-8E7F-4507-B6A2-B4AFF7D3E968"}
 */
function getTabNameAt(event) {
	log('Tab1 name: element ' + event.getElementName() + ' | ' + elements.tabpanel.getTabNameAt(1))
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CA88E719-8CD2-46D3-A47B-FED435CB8BCB"}
 */
function tabRelationName(event) {
	log('Tab1 relation name: element ' + event.getElementName() + ' | ' + elements.tabpanel.getTabRelationNameAt(1))
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"50897136-3406-4661-947C-48BCADE76ABF"}
 */
function tab1Text(event) {
	log('Tab1 text: element ' + event.getElementName() + ' | ' + elements.tabpanel.getTabTextAt(1))
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2E165EFB-DFF1-4052-9B57-FD1B05707CB5"}
 */
function isTabEnabledAt(event) {
	log('Tab1 enabled ? : element ' + event.getElementName() + ' | ' + elements.tabpanel.isTabEnabledAt(1))
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3E68B247-48ED-4045-8E84-A5702FF6F58B"}
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
 * @properties={typeid:24,uuid:"66BC495C-6806-472C-9F5D-E3862ED4431C"}
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
 * @properties={typeid:24,uuid:"0B292AFD-91A0-475A-8D04-5F124A7E4ACE"}
 */
function toggleTab1Enable(event) {
	elements.tabpanel.setTabEnabledAt(tabIndexEdit, elements.tabpanel.isTabEnabledAt(tabIndexEdit) ? false : true)
	log('Tab1 enabled : element ' + event.getElementName() + ' | ' + elements.tabpanel.isTabEnabledAt(tabIndexEdit))
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"724A5BE5-89C5-496A-807C-BE39B3BDE7C8"}
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
 * @properties={typeid:35,uuid:"8B95E970-E343-45F9-A372-F5F9F41A5DF1",variableType:4}
 */
var tabNo = 1;
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"586E39A0-672B-43CB-9287-B303B4D3D030"}
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
 * @properties={typeid:24,uuid:"6F60CF34-BDB8-4D14-B9AF-DB8897C0FA7D"}
 */
function onDataChangeTabIndex(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	if (tabIndex && tabIndex > 0 && tabIndex <= elements.tabpanel.getMaxTabIndex()) {
		elements.tabpanel.tabIndex = tabIndex
		return true
	}
	return false
}
