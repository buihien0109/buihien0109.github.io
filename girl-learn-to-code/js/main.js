$(window).on("scroll", function () {
	var scroll = $(window).scrollTop();
	if (scroll < 400) {
		$("#sticky-header").removeClass("sticky");
		$("#back-top").fadeIn(500);
	} else {
		$("#sticky-header").addClass("sticky");
		$("#back-top").fadeIn(500);
	}
});

var setEqualHeightElement = function (className) {
	let maxHeight = 0;
	$(className).each(function () {
		if ($(this).height() > maxHeight) {
			maxHeight = $(this).height();
		}
	});

	$(className).height(maxHeight);
}

$(document).ready(function () {
	
	$('.popup-video').magnificPopup({
		items: {
			src: 'https://www.youtube.com/watch?v=QteA3-oGmno'
		},
		type: 'iframe'
	});

	// mobile_menu
	var menu = $("ul#navigation");
	if (menu.length) {
		menu.slicknav({
			prependTo: ".mobile_menu",
			closedSymbol: "+",
			openedSymbol: "-",
		});
	}

	setEqualHeightElement('.gift_content')
	setEqualHeightElement('.blog_details')

	$(window).resize(function () {
		setEqualHeightElement('.gift_content')
		setEqualHeightElement('.blog_details')
	})

	// wow js
	if ($(".wow").length && $(window).outerWidth() >= 567) {
		let wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: false,
			live: true
		});
		wow.init();
	}

	/* magnificPopup img view */
	$(".popup-image").magnificPopup({
		type: "image",
		gallery: {
			enabled: true,
		},
	});

	/* magnificPopup img view */
	$(".img-pop-up").magnificPopup({
		type: "image",
		gallery: {
			enabled: true,
		},
	});

	if (document.getElementById("default-select")) {
		$("select").niceSelect();
	}
});