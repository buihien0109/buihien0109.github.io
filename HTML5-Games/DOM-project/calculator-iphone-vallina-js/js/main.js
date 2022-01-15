let exp = "";
let result = "";

let resultInput = document.querySelector(".screen-calculator");
let numInput = document.querySelectorAll(".num__input");
let enter = document.querySelector(".enter");
let clear = document.querySelector(".clear");
let switchNum = document.querySelector(".switch");
let percent = document.querySelector(".percent");

let timeEle = document.querySelector(".time");
let showIphone = document.querySelector(".show-iphone");
let btnBackHome = document.querySelector(".btn_back-home");

let calculator = document.querySelector(".calculator");
let inphoneIU = document.querySelector(".iphone__ui");

let timeOut;

Array.from(numInput).forEach((num) => {
    num.addEventListener("click", function () {
        let char = num.getAttribute("char");
        exp += char;
    });
});

enter.addEventListener("click", function () {
    try {
        result = eval(exp);
        equalValue();
        updateExpResult();
    } catch {
        resultInput.text("Error");
    }
});

clear.addEventListener("click", function () {
    resetExpInput();
    resetExpResult();
});

switchNum.addEventListener("click", function () {
    resetExpInput();
    if (result == 0) {
        result = exp * -1;
    } else {
        result *= -1;
    }
    equalValue();
    updateExpResult();
});

percent.addEventListener("click", function () {
    result /= 100;
    equalValue();
    updateExpResult();
});

//Function effect
function updateExpResult() {
    resultInput.innerText = result;
}

function resetExpInput() {
    exp = "";
}

function resetExpResult() {
    resultInput.innerText = "";
}

function equalValue() {
    exp = result;
}

showIphone.addEventListener("click", function () {
    clearTimeout(timeOut);
    calculator.classList.add("show");
    inphoneIU.classList.add("hide");
});

btnBackHome.addEventListener("click", function () {
    calculator.classList.remove("show");
    inphoneIU.classList.remove("hide");
});

function getTime() {
    let date, hour, minute, time;
    date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;

    if (hour > 12) {
        hour = hour - 12;
        time = `${hour}:${minute} PM`;
    } else {
        time = `${hour}:${minute} AM`;
    }
    return time;
}

function setTime(time) {
    timeOut = setTimeout(() => {
        document.querySelector('.talkbubble1').classList.add('hide-talkbubble')
        document.querySelector('.talkbubble2').classList.remove('hide-talkbubble')
        setTimeout(() => {
            document.querySelector('.talkbubble2').classList.add('hide-talkbubble')
        }, time);
    }, time);
}

//set clock
let time = getTime();
timeEle.innerText = time;

//set time suggest
setTime(5000);