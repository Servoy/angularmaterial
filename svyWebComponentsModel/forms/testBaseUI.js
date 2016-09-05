/**
 * @param event
 *
 * @properties={typeid:24,uuid:"37406FBE-A597-49F3-B085-968A08BFD696"}
 */
function updateUI(event) {
	if (!testElementHasProperty("enabled")) elements.btnEnabled.enabled = false;
	if (!testElementHasProperty("readOnly")) elements.btnReadOnly.enabled = false;
	
	elements.btnFormEnabled.enabled = true;
}