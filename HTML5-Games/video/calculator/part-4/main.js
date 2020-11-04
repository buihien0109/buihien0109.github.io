let numInput = document.querySelectorAll(".num__input");
let expInput = document.querySelector(".c_ex");
let resultInput = document.querySelector(".c_result");

let enter = document.querySelector(".enter");
let clear = document.querySelector(".clear");
let del = document.querySelector(".del");
let switchNum = document.querySelector(".switch");
let sqrtNum = document.querySelector(".sqrt");

let exp = "";

// Khi ấn các nút số + biểu thức
Array.from(numInput).forEach((num) => {
    num.addEventListener("click", function () {
        let char = num.getAttribute("char");
        exp += char;
        updateExpInput();
    });
});

// Xử lý ấn phím enter
enter.addEventListener("click", function () {
    try {
        result = eval(exp);
        updateExpResult();
    } catch {
        expInput.innerText = "Error";
    }
});

// Xử lý ấn phím clear
clear.addEventListener("click", function () {
    resetExpInput();
    resetExpResult();
});

// Xử lý ấn phím del
del.addEventListener("click", function () {
    exp = exp.slice(0, exp.length - 1);
    if (exp.length === 0) {
        resetExpInput();
    } else {
        updateExpInput();
    }
});

// Xử lý ấn phím switch
switchNum.addEventListener("click", function () {
    resetExpInput();
    if (result == 0) {
        result = exp * -1;
    } else {
        result *= -1;
    }
    updateExpResult();
});

// Xử lý ấn phím căn bậc 2
sqrtNum.addEventListener("click", function () {
    result = Math.sqrt(result);
    updateExpResult();
    resetExpInput();
});

//Function effect
function updateExpInput() {
    let expCopy = exp;
    expCopy = expCopy.replace(/\*/g, "×");
    expCopy = expCopy.replace(/\//g, "÷");
    expCopy = expCopy.replace(/\-/g, "−");
    expCopy = expCopy.replace(/\+/g, "+");
    expInput.innerText = expCopy;
}

function updateExpResult() {
    resultInput.innerText = result;
}

function resetExpInput() {
    exp = "";
    expInput.innerText = exp;
}

function resetExpResult() {
    resultInput.innerText = "";
}