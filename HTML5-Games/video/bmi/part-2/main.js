const btn_submit = document.getElementById("btn-submit");
const input_height = document.getElementById("height");
const input_weight = document.getElementById("weight");

let isValid;

const inputs = document.querySelectorAll(".input");

btn_submit.addEventListener("click", function () {
    Array.from(inputs).map((e) => e.classList.remove("error"));
    Array.from(inputs).map((e) => e.classList.remove("success"));
    isValid = checkInputs();
});

function checkInputs() {
    weight = input_weight.value.trim();
    height = input_height.value.trim();

    let isValid = true;

    if (weight === "") {
        setErrorFor(input_weight, "Cân nặng không được để trống.");
        isValid = false;
    } else if (!isNumber(weight)) {
        setErrorFor(input_weight, "Không đúng định dạng.");
        isValid = false;
    } else {
        setSuccessFor(input_weight);
    }

    if (height === "") {
        setErrorFor(input_height, "Chiều cao không được để trống");
        isValid = false;
    } else if (!isNumber(height)) {
        setErrorFor(input_height, "Không đúng định dạng.");
        isValid = false;
    } else {
        setSuccessFor(input_height);
    }
    return isValid;
}

function setErrorFor(input, message) {
    const formInput = input.parentElement;
    const small = formInput.querySelector("small");
    formInput.classList.add("error");
    small.innerText = message;
}

function setSuccessFor(input) {
    const formInput = input.parentElement;
    formInput.classList.add("success");
}

function isNumber(num) {
    return /^\d+$/.test(num);
}