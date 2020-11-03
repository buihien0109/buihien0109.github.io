let card = document.getElementsByClassName("card");
let cards = [...card];

const deck = document.getElementById("card-deck");

let matchedCard = document.getElementsByClassName("match");

let moves = 0;
let counter = document.querySelector(".moves");


let closeicon = document.querySelector(".close");

let modal = document.getElementById("popup1");

let openedCards = [];

let second = 0
let minute = 0
let hour = 0
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
        cards[i].classList.remove("show", "open", "match", "disabled");
    }
}

function displayCard() {
    this.classList.toggle("open");
    this.classList.toggle("show");
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
    //start timer on first click
    if (moves == 1) {
        second = 0;
        minute = 0;
        hour = 0;
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
        if (minute == 60) {
            hour++;
            minute = 0;
        }
    }, 1000);
}

function matched() {
    openedCards[0].classList.add("match", "disabled");
    openedCards[1].classList.add("match", "disabled");
    openedCards[0].classList.remove("show", "open", "no-event");
    openedCards[1].classList.remove("show", "open", "no-event");
    openedCards = [];
}

function unmatched() {
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function () {
        openedCards[0].classList.remove("show", "open", "no-event", "unmatched");
        openedCards[1].classList.remove("show", "open", "no-event", "unmatched");
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

function congratulations() {
    if (matchedCard.length == 4) {
        clearInterval(interval);
        finalTime = timer.innerHTML;

        modal.classList.add("show");

        document.getElementById("finalMove").innerHTML = moves;
        document.getElementById("totalTime").innerHTML = finalTime;

        closeModal();
    }
}

function closeModal() {
    closeicon.addEventListener("click", function (e) {
        window.location.reload();
    });
}

function playAgain() {
   window.location.reload();
}

for (let i = 0; i < cards.length; i++) {
    card = cards[i];
    card.addEventListener("click", displayCard);
    card.addEventListener("click", cardOpen);
    card.addEventListener("click", congratulations);
}
