/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'forms' },
		{ name: 'tools' },
		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'others' },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'blocks', 'align', 'bidi', 'paragraph' ] },
		{ name: 'styles' },
		{ name: 'colors' },
		{ name: 'about' }
	];

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'Underline,Subscript,Superscript';

	// Set the most common block elements.
	config.format_tags = 'p;h2;h3;pre';

	config.entities = false;
	config.entities_latin = false;
	config.entities_greek = true;
	config.entities_processNumerical = true;
	config.entities_additional = '#39';
	config.contentsCss = ["body {font-size: 18px; margin:20px; font-family: Open Sans, sans-serif; overflow-x:auto; text-align:left; line-height:32px; color: #464646; font-weight: 400;}  blockquote {font-style: italic; font-family: Georgia, Times, Times New Roman, serif; border-style: solid; border-color: #ccc; border-width: 0; padding-left: 20px; padding-right: 8px; border-left-width: 5px;}"],
	// config.extraPlugins = 'imagebrowser'

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';

};
