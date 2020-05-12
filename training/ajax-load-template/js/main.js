$(document).ready(function () {
    $('header').load("../template/header.txt", function (response, status, request) {
        console.log(response)
    });
    $('footer').load("../template/footer.txt", function (response, status, request) {
        console.log(response)
    });
});