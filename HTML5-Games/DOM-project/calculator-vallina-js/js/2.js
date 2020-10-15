let numInput = document.querySelectorAll('.num__input');

let expInput = document.querySelector('.c_ex')

let exp = "";

// Khi ấn các nút số + biểu thức
Array.from(numInput).forEach(num => {
    num.addEventListener('click', function() {
        let char = num.getAttribute('char')
        exp += char
        updateExpInput()
    })
})


 //Function effect
 function updateExpInput() {
    expInput.innerText = exp
}