let nums = document.querySelectorAll(".num__input");
let expEle = document.querySelector(".c_ex");
let resultEle = document.querySelector(".c_result");

let enter = document.querySelector(".enter");
let clear = document.querySelector(".clear");
let del = document.querySelector(".del");

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

function resetResultEle() {
    resultEle.innerText = ""
}