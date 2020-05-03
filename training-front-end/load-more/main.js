$(document).ready(function(){
    $.ajax({
        url : './data.json',
        method: "get",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success : function(data) {
            //Load card ban đầu
            let content = ''
            let num = 3
            let cards = data.slice(0, num)
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
            $('.cards').append(content)


            //Load More card Element
            function getItems() {
                let cardWeb = $('.cards__item').length
                let cardEnable = data.length - cardWeb
                return cardEnable
            }
            $('.number').text(`(${getItems()})`)

            const NUM_INC = 3
            let count = 0
            

            $('.btn__load-more').click(function(e){
                e.preventDefault()

                let cardRender = data.slice(NUM_INC * (count + 1), NUM_INC * (count + 2))
                count += 1

                let contentHtml = ""
                for(let i=0; i< cardRender.length; i++) {
                    const c = cardRender[i]
                    contentHtml += `
                            <li class="cards__item">
                                <div class="card">
                                    <div class="card__image card__image--fence">
                                        <img src="${c.link}" alt="${c.title}">
                                    </div>
                                    <div class="card__content">
                                        <div class="card__title">${c.title}</div>
                                        <p class="card__text">${c.content}</p>
                                        <button class="btn btn--block card__btn">Button</button>
                                    </div>
                                </div>
                            </li>
                    `
                }
                $('.cards').append(contentHtml)
                scrollToBtn()

                let numberEnable = getItems()
                if(numberEnable <= 0) {
                    $('.btn__load-more').remove()
                } else {
                    $('.number').text(`(${numberEnable})`)
                }
            })
            

        },
        error : function(err) {
            console.log(err)
        }
    })

    function scrollToBtn() {
        let btn = $('.btn__load-more').offset().top
        $("html, body").animate({
            scrollTop: btn
        }, 1000);
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