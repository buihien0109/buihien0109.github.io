const wrapper = document.querySelector('.wrapper')

let cards = [
	'images/card1.jpg',
	'images/card2.jpg',
	'images/card3.jpg',
	'images/card4.jpg',
	'images/card5.jpg'
];

let currentCard = null;

//Nhân đôi mảng card
function makeImgArray() {
	let imgArr = [...cards, ...cards]; //Use ES6
	return imgArr;
}

//Đảo vị trí mảng Cards
function shuffle(array) {
	let currentIndex = array.length, temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

//Render mảng card ra ngoài view
function drawImg(imgArr) {
    let content = ''
	for (let i = 0; i < imgArr.length; i++) {
        content += `
            <div class="thumb">
                <div class="card" onclick="flipCard(this)" data-name="${imgArr[i]}">
                    <div class="front"><img src="${imgArr[i]}" alt="card front"></div>
                    <div class="back"><img src="images/back.jpg" alt="card back"></div>
                </div>
            </div>
        `
	}
	wrapper.insertAdjacentHTML('afterbegin', content)
}

function flipCard(card) {
    if(!card.classList.contains('flipped')) {
        card.classList.toggle('flipped')
        if(!currentCard) {
            currentCard = card
        } else {
            let cardsEle = document.querySelector('.card')
            Array.from(cardsEle).forEach(card => card.style.pointerEvents = 'none')

            if(checkCard(currentCard, card)) {
                setTimeout(function() {
                    currentCard.parentElement.style.opacity = '0';
                    card.parentElement.style.opacity = '0';
                    currentCard = null
                },800)
            } else {
                setTimeout(function() {
                    currentCard.classList.remove('flipped')
                    card.classList.remove('flipped')
                    currentCard = null
                },800)
            }
        }
    }
}

function checkCard(cardOne, cardTwo) {
    let imgCardOne = cardOne.getAttribute("data-name")
    let imgCardTwo = cardTwo.getAttribute("data-name")
    return imgCardOne == imgCardTwo
}

function init() {
    let imgArr = makeImgArray();
	shuffle(imgArr);
	drawImg(imgArr);
}

window.onload = init()
