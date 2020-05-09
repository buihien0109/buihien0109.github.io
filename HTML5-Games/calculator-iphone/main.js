$(document).ready(function(){
    let exp = ""
    let result = ""
    let resultInput = $('.screen-calculator')

    $('.num__input').click(function(){
        let char = $(this).attr('char')
        exp += char
        console.log(exp)
    })

    $('.enter').click(function(){
        result = eval(exp)
        equalValue()
        updateExpResult()
    })

    $('.clear').click(function(){
        resetExpInput()
        resetExpResult()
    })

    $('.switch').click(function(){
        resetExpInput()
        if(result == 0) {
            result = exp * -1
        } else {
            result *= -1
        }
        equalValue()
        updateExpResult()
    })
    $('.percent').click(function(){
        result /= 100
        equalValue()
        updateExpResult()
    })

    //Function effect
    function updateExpResult() {
        resultInput.text(result)
    }
    function resetExpInput() {
        exp = ""
    }
    function resetExpResult() {
        resultInput.text("")
    }
    function equalValue() {
        exp = result
    }
})

$('.show-iphone').click(function(){
    $('.calculator').addClass('show')
    $('.iphone__ui').addClass('hide')
})

$('.btn_back-home').click(function(){
    $('.calculator').removeClass('show')
    $('.iphone__ui').removeClass('hide')
})
