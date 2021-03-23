(function () {
	'use strict';
	
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

    let isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (
                isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows()
            );
        },
    };

    let fullHeight = function () {
        if (!isMobile.any()) {
            $('.js-fullheight').css('height', $(window).height());
            $(window).resize(function () {
                $('.js-fullheight').css('height', $(window).height());
            });
        }
    };

    let burgerMenu = function () {
        $('.js-cv-nav-toggle').on('click', function (event) {
            event.preventDefault();
            let $this = $(this);

            if ($('body').hasClass('offcanvas')) {
                $this.removeClass('active');
                $('body').removeClass('offcanvas');
            } else {
                $this.addClass('active');
                $('body').addClass('offcanvas');
            }
        });
    };

    // Click outside of offcanvass
    let mobileMenuOutsideClick = function () {
        $(document).click(function (e) {
            let container = $('#cv-aside, .js-cv-nav-toggle');
            if (
                !container.is(e.target) &&
                container.has(e.target).length === 0
            ) {
                if ($('body').hasClass('offcanvas')) {
                    $('body').removeClass('offcanvas');
                    $('.js-cv-nav-toggle').removeClass('active');
                }
            }
        });

        $(window).scroll(function () {
            if ($('body').hasClass('offcanvas')) {
                $('body').removeClass('offcanvas');
                $('.js-cv-nav-toggle').removeClass('active');
            }
        });
    };

    let clickMenu = function () {
        $('#navbar a:not([class="external"])').click(function (event) {
            let section = $(this).data('nav-section'),
                navbar = $('#navbar');

            if ($('[data-section="' + section + '"]').length) {
                $('html, body').animate(
                    {
                        scrollTop:
                            $('[data-section="' + section + '"]').offset().top -
                            55,
                    },
                    500
                );
            }

            if (navbar.is(':visible')) {
                navbar.removeClass('in');
                navbar.attr('aria-expanded', 'false');
                $('.js-cv-nav-toggle').removeClass('active');
            }

            event.preventDefault();
            return false;
        });
    };

    // Reflect scrolling in navigation
    let navActive = function (section) {
        let $el = $('#navbar > ul');
        $el.find('li').removeClass('active');
        $el.each(function () {
            $(this)
                .find('a[data-nav-section="' + section + '"]')
                .closest('li')
                .addClass('active');
        });
    };

    let navigationSection = function () {
        let $section = $('section[data-section]');
    };

    let stickyFunction = function () {
        let h = $('.image-content').outerHeight();

        if ($(window).width() <= 992) {
            $('#sticky_item').trigger('sticky_kit:detach');
        } else {
            $('.sticky-parent').removeClass('stick-detach');
            $('#sticky_item').trigger('sticky_kit:detach');
            $('#sticky_item').trigger('sticky_kit:unstick');
        }

        $(window).resize(function () {
            let h = $('.image-content').outerHeight();
            $('.sticky-parent').css('height', h);

            if ($(window).width() <= 992) {
                $('#sticky_item').trigger('sticky_kit:detach');
            } else {
                $('.sticky-parent').removeClass('stick-detach');
                $('#sticky_item').trigger('sticky_kit:detach');
                $('#sticky_item').trigger('sticky_kit:unstick');
            }
        });

        $('.sticky-parent').css('height', h);
    };

    // Document on load.
    $(function () {
        fullHeight();
        burgerMenu();

        clickMenu();
        navigationSection();

        mobileMenuOutsideClick();
        stickyFunction();
    });
})();
