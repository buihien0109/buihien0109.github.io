$(document).ready(function(){
    var listCard = []
    $.ajax({
        url : './data.json',
        method: "get",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success : function(data) {

            listCard = [...data]
            let content = ''

            for(let i=0; i< data.length; i++) {
                const card = data[i]
                content += `
                        <li class="cards__item">
                            <div class="card">
                                <div class="card__image card__image--fence">
                                    <img src="${card.link}" alt="${card.title}">
                                </div>
                                <div class="card__content">
                                    <div class="card__title">${card.title}</div>
                                    <p class="card__text">${card.content}</p>
                                    <button class="btn btn--block card__btn">Button</button>
                                </div>
                            </div>
                        </li>
                `
            }
            $('.cards').append(content)
        },
        error : function(err) {
            console.log(err)
        }
    })

    $('.category__btn').click(function() {
        $('.category__btn').removeClass('active')
        $(this).addClass('active')

        let category = $(this).attr('category')
        let cards = filterCard(category)

        if(category === 'all') {
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

        for(let i=0; i< cards.length; i++) {
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
                                <button class="btn btn--block card__btn">Button</button>
                            </div>
                        </div>
                    </li>
            `
        }
        $('.cards').html(content)
    }


    function backToTop() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    }

    $('.back-to-top').click(function (){
        backToTop()
    })

    $(window).scroll(function() {
        let top = 200
        if($(this).scrollTop() > top) {
            $('.back-to-top').addClass('show')
        } else {
            $('.back-to-top').removeClass('show')
        }
    })


})