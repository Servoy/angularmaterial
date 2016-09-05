/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5D940338-DBEB-4F9B-BF5A-8CC1A85508DC"}
 */
var htmlresult = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EED9E579-4D64-436A-9786-9610C81B3CED"}
 */
var result = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FC4C0984-0ABD-4697-BD1E-03815E0A4218",variableType:-4}
 */
var actionsArray = ['Red','Blue'];

/**
 * @type {Array<String>}
 *
 * @properties={typeid:35,uuid:"5A94B04F-C25E-427C-9C14-816A4274BFD1",variableType:-4}
 */
var actions = ['Red','Blue'];

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B8DFB5C9-184E-4885-8E49-BF7062C94362"}
 */
var html = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"41310072-1FAF-45BA-98C1-731E5B6C34B1"}
 */
var title = 'Title';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F26407AB-6866-4EC9-AD17-038AAA300968"}
 */
var msg = 'Do you prefer red or blue?';

/**
 * Perform the element default action.
 * @private
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"55B13670-B59E-4F18-A811-3716B3E90D40"}
 */
function onAction$showDialog(event) {
	var ans = plugins.mdDialog.show(title, msg, actionsArray, true);		
	result = 'You selected - ' + ans + '!';
	htmlresult = '';
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"0081CC17-C457-493D-A8CF-77C0E9408A16"}
 */
function onDataChange$action(oldValue, newValue, event) {
	actionsArray = [];
	newValue.split(',').forEach(function(v){
		actionsArray.push(v);
	})
	return true;
}

/**
 * Show a dialog using html tags
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"F4FEC5A7-86BE-4F92-BA80-829B6E36E2FF"}
 */
function onAction$useHTML(event) {
	title = 'Titles can be <b> BOLD </b>';
	msg = 'Content can be <i>italic</i>.'
	actions='OK';
	actionsArray=['OK'];
	plugins.mdDialog.show(title, msg, actionsArray, true);
	result ='';
	htmlresult ='';
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"EC3C4B1A-3306-4A5B-940B-08D3DE97D19F"}
 */
function onAction$useCustomContent(event) {
	actions="'I need more info!','Not so useful','I like it'"
	actionsArray=['I need more info!','Not so useful','I like it'];
	title = ''
	msg = '<md-dialog aria-label="Servoy"> <form>' +
  '<md-toolbar class="md-warn">'+
    '<div class="md-toolbar-tools">'+
      '<h2>Customized Dialog</h2>'+
      '<span flex></span> </div>'+  
  '</md-toolbar><md-dialog-content style="max-width:800px;max-height:810px; ">'+
    '<div><br>'+
'<img style="margin: auto; max-width: 100%;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Servoy_logo.png/225px-Servoy_logo.png">'+
      '<p> Servoy is a development and deployment platform for enterprise applications, written in Java. It can adopt the native look and feel of a platform, or for the web, generate JavaScript, HTML and CSS code.</p> '+     
      '<p>Servoy was inspired by 4GLs in terms of how applications are developed but unlike many 4GLs, it does not have proprietary languages and/or databases, being based instead on open standards. Servoy consists of a GUI designer, is event-driven and runs scripts through JavaScript. Servoy allows applications to be deployed to both a native Smart client / Rich client and to a pure html Web client from the same codebase and user interface definitions.</p>'+
      
     "<p> Servoy 4.0 and beyond has a free community edition for non-commercial use. This version can be downloaded from Servoy's website. As of Servoy 5 it is also Open Source under the AGPL license.</p>"

	var ans = plugins.mdDialog.show(null, msg, actionsArray, true);
	switch (ans) {
	case 'I need more info!':
		htmlresult = 'Go browse the servoy wiki for more info!';
		break;
	case 'I like it':
		htmlresult = "You like this.";
		break;
	case 'Not so useful':
		htmlresult = "You didn't find this useful.";
		break;
	}
	result = '';
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"BBDF9E1F-1394-4F70-9E80-FF5CCD3E18B4"}
 */
function onAction$getDefaults(event) {
actionsArray = ['Red','Blue'];
actions = ['Red','Blue'];
html = '';
title = 'Title';
msg = 'Do you prefer red or blue?';
}
