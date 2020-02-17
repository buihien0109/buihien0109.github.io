//modal sign-in sign-up
function openForgotPassword() {
    $('#modal-signin').modal('hide')
    $('#forgot-password').modal()
}

//responsive header
$('body').on('click', '.btn-responsive--inner', function () {
    $('#overlay').show()
    $('.menu-mobile').css("left", "0")
})

$('body').on('click', '#overlay', function (e) {
    $(".menu-mobile").css("left", "-250px")
    $('#sign-up').hide()
    $('#sign-in').hide()
    $('#forgot-password').hide()
    $('#overlay').hide()
})

//highlight searchbar focus
$('body').on('focus','.input-group .form-control', function() {
    $(this).css("background-color", "#fff");
    $(this).next().find('.btn.btn-link').addClass('active')
})

$(document).ready(function() {
    $('#header').load('./template/header.txt')
    $('#footer').load('./template/footer.txt')
})

$('body').on('click', '#btn-sign-in', function() {
    let userLoginTemplate = `
                            <a class="dropdown-trigger" data-target='dropdown' onclick="ShowUserMenu()">
                                <div style="display: flex; align-items: center;">
                                    <img src="https://techmaster.vn/media/static/crop/bnlsots51coerket1uu0" alt="Avatar"
                                        class="dropdown-user-avatar-img">
                                    &nbsp;
                                </div>
                            </a>
                            <ul id="dropdown" class="dropdown-content">
                                <li><a href="./index.html">Trang chủ</a></li>
                                <li><a href="./active-code.html">Kích hoạt đơn hàng</a></li>
                                <li><a href="./my-exam.html">Bài thi của tôi</a></li>
                                <li><a href="./profile.html">Hồ sơ cá nhân</a></li>
                                <li id="logout"><a>Đăng xuất</a></li>
                            </ul>
                            `
    let btn =   `
                <div class="btn__exam--wrapper">
                    <button class="btn__exam--white">
                        Bài thi của tôi
                    </button>
                </div>
                `
    $(this).modal('hide')
    $('.user-nav').before(btn)
    $('.user-nav').find('i').remove()
    $('.user-nav').append(userLoginTemplate)
    $('#overlay').click()

})

$('body').on('click', '.btn__exam--white', function() {
    window.location.replace('my-exam.html')
})

if ($('#back-to-top').length) {
    var scrollTrigger = 200, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

function ShowUserMenu() {
    $('.dropdown-content').toggle()
}