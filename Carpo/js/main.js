jQuery("#jtv-brand-logo-slider .slider-items").owlCarousel({
	autoPlay: true,
	items: 5, //10 items above 1000px browser width
	itemsDesktop: [1024, 4], //5 items between 1024px and 901px
	itemsDesktopSmall: [900, 3], // 3 items betweem 900px and 601px
	itemsTablet: [640, 2], //2 items between 600 and 0;
	itemsMobile: [360, 1],
	navigation: false,
	navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
	slideSpeed: 500,
	pagination: false
});

jQuery("#trending-slider .slider-items").owlCarousel({
	items: 5, //10 items above 1000px browser width
	itemsDesktop: [1024, 4], //5 items between 1024px and 901px
	itemsDesktopSmall: [900, 3], // 3 items betweem 900px and 601px
	itemsTablet: [640, 2], //2 items between 600 and 0;
	itemsMobile: [360, 2],
	navigation: true,
	navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
	slideSpeed: 500,
	pagination: false
});

jQuery("#latest-slider .slider-items").owlCarousel({
	autoPlay: true,
	items: 4, //10 items above 1000px browser width
	itemsDesktop: [1024, 4], //5 items between 1024px and 901px
	itemsDesktopSmall: [900, 3], // 3 items betweem 900px and 601px
	itemsTablet: [640, 2], //2 items between 600 and 0;
	itemsMobile: [360, 1],
	navigation: false,
	navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
	slideSpeed: 500,
	pagination: false
});

jQuery("#category-desc-slider .slider-items").owlCarousel({
	autoplay: true,
	items: 1, //10 items above 1000px browser width
	itemsDesktop: [1024, 1], //5 items between 1024px and 901px
	itemsDesktopSmall: [900, 1], // 3 items betweem 900px and 601px
	itemsTablet: [600, 1], //2 items between 600 and 0;
	itemsMobile: [360, 1],
	navigation: true,
	navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
	slideSpeed: 500,
	pagination: false
});
