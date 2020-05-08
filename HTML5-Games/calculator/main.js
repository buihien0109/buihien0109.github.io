$(document).ready(function(){
    let exp = ""
    let result = ""

    let arrayNumber = ["0","1","2","3","4","5","6","7","8","9","."]
    let arrayExp = ["(",")","%","+","-","*","/"]

    let expInput = $('.c_ex')
    let resultInput = $('.c_result')

    var reset = true

    $('.num__input').click(function(){
        let char = $(this).attr('char')
        if(result !== "") {
            if(arrayNumber.includes(char) && exp.includes('Ans') || arrayExp.includes(char) && exp.includes('Ans') ) {
                exp += char
            } else if (arrayNumber.includes(char) && !exp.includes('Ans')) {
                if(!reset) {
                    resetExpInput()
                    exp += char
                    reset = true
                } else {
                    exp += char
                }
            }
            else if(arrayExp.includes(char) && reset) {
                exp += char
            }
            else if(arrayExp.includes(char) && !reset) {
                exp = "Ans" + char
            }
            else {
                exp += char
            } 
        } else {
            exp += char
        }
        updateExpInput()
    })

    $('.enter').click(function(){
        if(exp.includes('AnsAns')) {
            exp = exp.replace(/Ans/img, "Ans*")
            exp = exp.replace(/Ans/img, result)
            exp = exp.substring(0, exp.length - 1)
            result = eval(exp)
        }else if(exp.includes('Ans')) {
            exp = exp.replace(/Ans/img, result)
            result = eval(exp)
        } else {
            result = eval(exp)
        }
        reset = false
        updateExpResult()
    })

    $('.clear').click(function(){
        resetExpInput()
        resetExpResult()
    })

    $('.del').click(function(){
        if(exp[exp.length-1] === 's') {
            exp = exp.slice(0, exp.length - 3)
        } else {
            exp = exp.slice(0, exp.length - 1)
        }
        if(exp.length === 0) {
            resetExpInput()
        } else {
            updateExpInput()
        }
    })

    $('.switch').click(function(){
        resetExpInput()
        if(result == 0) {
            result = exp * -1
        } else {
            result *= -1
        }
        updateExpResult()
    })

    $('.sqrt').click(function(){
        result = Math.sqrt(result)
        updateExpResult()
        resetExpInput()
    })

    function updateExpInput() {
        expInput.text(exp)
    }
    function updateExpResult() {
        resultInput.text(result)
    }
    function resetExpInput() {
        exp = ""
        expInput.text(exp)
    }
    function resetExpResult() {
        resultInput.text("")
    }
})

//Toggle Theme
$('.toggle__container').click(function(){
    if(!$('#toggle__handle').is(':checked')) {
        $('.container--wrapper').addClass('dark')
    } else {
        $('.container--wrapper').removeClass('dark')
    }
})