let card = document.getElementsByClassName("card");
let cards = [...card];

const deck = document.getElementById("card-deck");

let matchedCard = document.getElementsByClassName("match");

let moves = 0;
let counter = document.querySelector(".moves");

let openedCards = [];

let second = 0
let minute = 0
let timer = document.querySelector(".timer");
let interval;

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

document.body.onload = startGame();

function startGame() {
    cards = shuffle(cards);
    deck.innerHTML = "";
    for (let i = 0; i < cards.length; i++) {
        deck.appendChild(cards[i]);
        cards[i].classList.remove("open", "match", "disabled");
    }
}

function displayCard() {
    this.classList.toggle("open");
    this.classList.toggle("disabled");
};

function cardOpen() {
    openedCards.push(this);
    let len = openedCards.length;
    if (len === 2) {
        moveCounter();
        if (openedCards[0].type === openedCards[1].type) {
            matched();
        } else {
            unmatched();
        }
    }
}

function moveCounter() {
    moves++;
    counter.innerHTML = moves;
    if (moves == 1) {
        second = 0;
        minute = 0;
        startTimer();
    }
}

function startTimer() {
    interval = setInterval(function () {
        timer.innerHTML = `${minute} mins ${second} secs`;
        second++;
        if (second == 60) {
            minute++;
            second = 0;
        }
    }, 1000);
}

function matched() {
    openedCards[0].classList.add("match", "disabled");
    openedCards[1].classList.add("match", "disabled");
    openedCards[0].classList.remove("open");
    openedCards[1].classList.remove("open");
    openedCards = [];
}

function unmatched() {
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function () {
        openedCards[0].classList.remove("open", "unmatched");
        openedCards[1].classList.remove("open", "unmatched");
        enable();
        openedCards = [];
    }, 1100);
}

function disable() {
    cards.filter(card => card.classList.add("disabled"))
}

function enable() {
    cards.filter(card => {
        card.classList.remove("disabled");
        Array.from(matchedCard).map(card => card.classList.add("disabled"))
    })
}

for (let i = 0; i < cards.length; i++) {
    card = cards[i];
    card.addEventListener("click", displayCard);
    card.addEventListener("click", cardOpen);
}
