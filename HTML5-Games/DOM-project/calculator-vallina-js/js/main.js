$(document).ready(function(){
    let exp = ""
    let result = ""

    let expInput = document.querySelector('.c_ex')
    let resultInput = document.querySelector('.c_result')

    let numInput = document.querySelectorAll('.num__input')
    let enter = document.querySelector('.enter')
    let clear = document.querySelector('.clear')
    let del = document.querySelector('.del')
    let switchNum = document.querySelector('.switch')
    let sqrtNum = document.querySelector('.sqrt')

    // Khi ấn các nút số + biểu thức
    Array.from(numInput).forEach(num => {
        num.addEventListener('click', function() {
            let char = num.getAttribute('char')
            exp += char
            updateExpInput()
        })
    })

    // Xử lý ấn phím enter
    enter.addEventListener('click', function(){
        result = eval(exp)
        updateExpResult()
    })

    // Xử lý ấn phím clear
    clear.addEventListener('click', function(){
        resetExpInput()
        resetExpResult()
    })

    // Xử lý ấn phím del
    del.addEventListener('click', function() {
        exp = exp.slice(0, exp.length - 1)
        if(exp.length === 0) {
            resetExpInput()
        } else {
            updateExpInput()
        }
    })

    // Xử lý ấn phím switch
    switchNum.addEventListener('click', function() {
        resetExpInput()
        if(result == 0) {
            result = exp * -1
        } else {
            result *= -1
        }
        updateExpResult()
    })

    // Xử lý ấn phím căn bậc 2
    sqrtNum.addEventListener('click', function() {
        result = Math.sqrt(result)
        updateExpResult()
        resetExpInput()
    })

    //Function effect
    function updateExpInput() {
        expInput.innerText = exp
    }

    function updateExpResult() {
        resultInput.innerText = result
    }

    function resetExpInput() {
        exp = ""
        expInput.innerText = exp
    }

    function resetExpResult() {
        resultInput.innerText = ""
    }
})

//Toggle Theme
let whiteBg = {
    '--primary-color': '#2980B9',
    '--bold-color': '#2255A4',
    '--bolder-color': '#1B308F',
    '--boldest-color': '#241062',
    '--light-color': '#44A9C4',
    '--lighter-color': '#7AD9CA',
    '--bg-color': '#fff',
    '--text-color': '#414141',
    '--bg-sub-color': '#464646'
}

let darkBg = {
    '--primary-color': '#333333',
    '--bold-color': '#262626',
    '--bolder-color': '#202020',
    '--boldest-color': '#1A1A1A',
    '--light-color': '#4E4E4E',
    '--lighter-color': '#858585',
    '--bg-color': '#223239',
    '--text-color': '#fff',
    '--bg-sub-color': '#bbd7e4'
}

$('.toggle__container').click(function(){
    if(!$('#toggle__handle').is(':checked')) {
        for(let color in darkBg) {
            document.documentElement.style.setProperty(color, darkBg[color]);
        }
        
    } else {
        for(let color in whiteBg) {
            document.documentElement.style.setProperty(color, whiteBg[color]);
        }
    }
})