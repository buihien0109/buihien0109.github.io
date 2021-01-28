let monthEle = document.querySelector('.month');
let yearEle = document.querySelector('.year');
let dateEle = document.querySelector('.date-container');
let btnNext = document.querySelector('.btn-next');
let btnPrev = document.querySelector('.btn-prev');

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function getInfo() {
    let monthName = new Date(currentYear, currentMonth).toLocaleString(
        'en-us',
        { month: 'long' }
    );
    monthEle.innerText = monthName;
    yearEle.innerText = currentYear;
}

function startDay() {
    return new Date(currentYear, currentMonth, 1).getDay();
}

function currenDateClass(num) {
    const calenderFullDate = new Date(
        currentYear,
        currentMonth,
        num
    ).toDateString();
    const currentFullDate = new Date().toDateString();
    return calenderFullDate === currentFullDate ? 'active' : '';
}

function renderDay() {
    let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    dateEle.innerHTML = '';

    for (let i = 0; i < startDay(); i++) {
        dateEle.innerHTML += `
            <div class="day"></div>
        `;
    }

    for (let i = 0; i < daysInMonth; i++) {
        dateEle.innerHTML += `
            <div class="day ${currenDateClass(i + 1)}">${i + 1}</div>
        `;
    }
}

btnNext.addEventListener('click', function () {
    if (currentMonth == 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++;
    }
    update();
});

btnPrev.addEventListener('click', function () {
    if (currentMonth == 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    update();
});

function update() {
    getInfo();
    renderDay();
}

window.onload = update;
