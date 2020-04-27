CKEDITOR.plugins.add('imagebrowser', {
	"init": function (editor) {
		if (typeof(editor.config.imageBrowser_listUrl) === 'undefined' || editor.config.imageBrowser_listUrl === null) {
			console.log("failed to load")
			console.log("editor", editor)
			console.log("imageBrowser_listUrl", editor.config.imageBrowser_listUrl)
			return;
		}

		console.log("loadding successfully")
			console.log("editor", editor)
			console.log("imageBrowser_listUrl", editor.config.imageBrowser_listUrl)

		var url = editor.plugins.imagebrowser.path + "browser/browser.html?listUrl=" + encodeURIComponent(editor.config.imageBrowser_listUrl);
		if (editor.config.baseHref) {
			url += "&baseHref=" + encodeURIComponent(editor.config.baseHref);
		}

		editor.config.filebrowserImageBrowseUrl = url;
	}
});
