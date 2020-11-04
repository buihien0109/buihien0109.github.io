let numInput = document.querySelectorAll(".num__input");
let expInput = document.querySelector(".c_ex");
let resultInput = document.querySelector(".c_result");

let enter = document.querySelector(".enter");
let clear = document.querySelector(".clear");
let del = document.querySelector(".del");

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
        if(exp != "") {
            result = eval(exp);
            updateExpResult();
        } else {
            resultInput.innerText = "0";
        }

    } catch {
        expInput.innerText = "Error";
        exp = "";
        resetExpResult();
    }
});

// Xử lý ấn phím clear
clear.addEventListener("click", function () {
    resetExpInput();
    resetExpResult();
});

// Xử lý ấn phím del
del.addEventListener("click", function () {
    if (exp.length > 0) {
        exp = exp.slice(0, exp.length - 1);
        updateExpInput();
    } else {
        resetExpInput();
        return
    }
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
    exp = ""
    expInput.innerText = exp
}

function resetExpResult() {
    resultInput.innerText = ""
}