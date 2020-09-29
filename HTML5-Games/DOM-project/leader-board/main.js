$(document).ready(function () {
    $('.top__item, .list__item').click(function (e) { 
        e.preventDefault();
        $('.lb--wrapper').addClass('lb--wrapper--active')
        $('.card__student').addClass('card__student--active')
    });
});