let card = document.getElementsByClassName("card");
let cards = [...card];

const deck = document.getElementById("card-deck");

let openedCards = [];


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
