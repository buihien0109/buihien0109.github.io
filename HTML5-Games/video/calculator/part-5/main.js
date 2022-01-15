let nums = document.querySelectorAll(".num__input");
let expEle = document.querySelector(".c_ex");
let resultEle = document.querySelector(".c_result");

let enter = document.querySelector(".enter");
let clear = document.querySelector(".clear");
let del = document.querySelector(".del");
let switchNum = document.querySelector(".switch");
let sqrtNum = document.querySelector(".sqrt");

let exp = "";
let result = null;

// Khi ấn các nút số + biểu thức
Array.from(nums).forEach((num) => {
    num.addEventListener("click", function () {
        let char = num.getAttribute("char");
        exp += char;
        updateExpEle();
    });
});

// Xử lý ấn phím enter
enter.addEventListener("click", function () {
    try {
        if(exp == "") {
            resultEle.innerText = "0"; 
        } else {
            result = eval(exp);
            updateResultEle();
        }

    } catch {
        expEle.innerText = "Error";
        exp = "";
        resetResultEle();
    }
});

// Xử lý ấn phím clear
clear.addEventListener("click", function () {
    resetExpEle();
    resetResultEle();
});

// Xử lý ấn phím del
del.addEventListener("click", function () {
    if (exp.length > 0) {
        exp = exp.slice(0, exp.length - 1);
        updateExpEle();
    } else {
        resetExpEle();
        return
    }
});

// Xử lý ấn phím switch
switchNum.addEventListener("click", function () {
    resetExpEle();
    if (result == 0) {
        result = exp * -1;
    } else {
        result *= -1;
    }
    updateResultEle();
});

// Xử lý ấn phím căn bậc 2
sqrtNum.addEventListener("click", function () {
    result = Math.sqrt(result);
    updateResultEle();
    resetExpEle();
});

//Function effect
function updateExpEle() {
    let expCopy = exp;
    expCopy = expCopy.replace(/\*/g, "×");
    expCopy = expCopy.replace(/\//g, "÷");
    expCopy = expCopy.replace(/\-/g, "−");
    expCopy = expCopy.replace(/\+/g, "+");
    expEle.innerText = expCopy;
}

function updateResultEle() {
    resultEle.innerText = result;
}

function resetExpEle() {
    exp = ""
    expEle.innerText = exp
}

function resetResultEle() {
    resultEle.innerText = ""
}

// Toggle theme
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


document.querySelector('.toggle__container')
    .addEventListener('click', function () {
        if(!document.querySelector('#toggle__handle').checked) {
            for(let color in darkBg) {
                document.documentElement.style.setProperty(color, darkBg[color]);
            }
            
        } else {
            for(let color in whiteBg) {
                document.documentElement.style.setProperty(color, whiteBg[color]);
            }
        }
    })