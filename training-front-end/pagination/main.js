$(document).ready(function () {
    var listCard = []
    let currentPage = 1
    let NUM_CARD = 6
    let totalPage = 0

    $.ajax({
        url: './data.json',
        method: "get",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            listCard = [...data]
            totalPage = Math.round(data.length / NUM_CARD)
            let cardsFirst = data.slice(0, NUM_CARD)

            renderUI(cardsFirst)
            renderPagination()
            activeCurrentPage(currentPage)

        },
        error: function (err) {
            console.log(err)
        }
    })

    $('body').on('click', '.pagination__btn-number', function () {
        let numPage = $(this).attr('pagination-number')
        currentPage = numPage
        activeCurrentPage(currentPage)
        let cards = listCard.slice((currentPage - 1) * NUM_CARD, currentPage * NUM_CARD)
        renderUI(cards)
    })

    $('body').on('click', '.pagination__btn-next', function () {
        if(currentPage === totalPage) {
            $(this).attr("disable", true)
            return false
        } else {
            currentPage += 1
            activeCurrentPage(currentPage)
            let cards = listCard.slice((currentPage - 1) * NUM_CARD, currentPage * NUM_CARD)
            renderUI(cards)
        }
    })

    $('body').on('click', '.pagination__btn-prev', function () {
        if(currentPage === 1) {
            $(this).attr("disable", true)
            return false
        } else {
            currentPage -= 1
            activeCurrentPage(currentPage)
            let cards = listCard.slice((currentPage - 1) * NUM_CARD, currentPage * NUM_CARD)
            renderUI(cards)
        }
    })


    $('.category__btn').click(function () {
        $('.category__btn').removeClass('active')
        $(this).addClass('active')

        let category = $(this).attr('category')
        let cards = filterCard(category)

        if (category === 'all') {
            renderUI(listCard)
        } else {
            renderUI(cards)
        }
    })

    function filterCard(category) {
        let cardsFilter = listCard.filter((card, index) => {
            return card.category === category
        })
        return cardsFilter
    }

    function renderUI(cards) {
        let content = ''

        for (let i = 0; i < cards.length; i++) {
            const card = cards[i]
            content += `
                    <li class="cards__item">
                        <div class="card">
                            <div class="card__image card__image--fence">
                                <img src="${card.link}" alt="${card.title}">
                            </div>
                            <div class="card__content">
                                <div class="card__title">${card.title}</div>
                                <p class="card__text">${card.content}</p>
                                <div class="social-btns">
                                    <a class="btn facebook" href="#"><i class="fa fa-facebook"></i></a>
                                    <a class="btn twitter" href="#"><i class="fa fa-twitter"></i></a>
                                    <a class="btn google" href="#"><i class="fa fa-google"></i></a>
                                    <a class="btn dribbble" href="#"><i class="fa fa-dribbble"></i></a>
                                    <a class="btn skype" href="#"><i class="fa fa-skype"></i></a>
                                </div>
                            </div>
                        </div>
                    </li>
            `
        }
        $('.cards').html(content)
    }

    function renderPagination() {
        let contentPagination = '<button class="pagination__btn pagination__btn-prev">Trước</button>'
        for (let i = 0; i < totalPage; i++) {
            contentPagination += `
                    <button class="pagination__btn pagination__btn-number" pagination-number='${i + 1}'>${i + 1}</button>
            `
        }
        contentPagination += '<button class="pagination__btn pagination__btn-next">Sau</button>'
        $('.pagination').append(contentPagination)
    }

    function activeCurrentPage(currentPage) {
        $('.pagination__btn').removeClass('active')
        $(`.pagination__btn[pagination-number=${currentPage}]`).addClass('active')
    }



    function backToTop() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    }

    $('.back-to-top').click(function () {
        backToTop()
    })

    $(window).scroll(function () {
        let top = 200
        if ($(this).scrollTop() > top) {
            $('.back-to-top').addClass('show')
        } else {
            $('.back-to-top').removeClass('show')
        }
    })


})