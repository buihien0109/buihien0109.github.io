$(document).ready(function(){
    $.ajax({
        url : './data.json',
        method: "get",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success : function(data) {
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


    console.log($('.cards').offset())
    
    window.addEventListener('scroll', function(){
        console.log($(window).scrollTop())
    })
})