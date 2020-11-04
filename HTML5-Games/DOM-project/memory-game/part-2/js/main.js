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

function displayCard() {
    this.classList.toggle("open");
    this.classList.toggle("disabled");
};

function cardOpen() {
    openedCards.push(this);

    let len = openedCards.length;
    if (len === 2) {
       // update số lần di chuyển
        if (openedCards[0].type === openedCards[1].type) {
            // Xử lý khi 2 card giống nhau
            console.log('Giống nhau')
        } else {
            // Xử lý khi 2 card khác nhau
            console.log('Khác nhau')
        }
    }
}

for (let i = 0; i < cards.length; i++) {
    card = cards[i];
    card.addEventListener("click", displayCard);
    card.addEventListener("click", cardOpen);
}
