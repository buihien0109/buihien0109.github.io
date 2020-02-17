//slick slide exam
$(document).ready(function () {
    $('.carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        focusOnSelect: true,
        variableWidth: true,
        touchThreshold: 6,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });
});