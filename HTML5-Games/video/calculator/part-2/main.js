let numInput = document.querySelectorAll(".num__input");
let expInput = document.querySelector(".c_ex");
let resultInput = document.querySelector(".c_result");

let enter = document.querySelector(".enter");

let exp = "";

// Khi ấn các nút số + biểu thức
Array.from(numInput).forEach((num) => {
    num.addEventListener("click", function () {
        let char = num.getAttribute("char");
        exp += char;
        updateExpInput();
    });
});

enter.addEventListener("click", function () {
    result = eval(exp);
    updateExpResult();
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