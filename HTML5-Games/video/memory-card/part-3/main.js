// Mockup mảng ban đầu
const cardsData = [
    {
        question: "1 + 1 = ?",
        answer: "2",
    },
    {
        question: "Tên bạn là gì?",
        answer: "Bùi Hiên",
    },
    {
        question: "Bạn đang làm gì?",
        answer: "Học lập trình Javascript",
    },
];

// Khai báo biến
const cardsContainer = document.getElementById("cards-container");
const currentEl = document.getElementById('current');

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentActiveCard = 0;
let cardsEl = [];

// Tạo tất cả card
function createCards() {
    cardsData.forEach((data, index) => createCard(data, index));
}

// Tạo card đơn
function createCard(data, index) {
    const card = document.createElement("div");
    card.classList.add("card");

    if (index === 0) {
        card.classList.add("active");
    }

    card.innerHTML = `
		<div class="inner-card">
			<div class="inner-card-front">
				<p>
				${data.question}
				</p>
			</div>
			<div class="inner-card-back">
				<p>
				${data.answer}
				</p>
			</div>
		</div>
	`;

    card.addEventListener("click", () => card.classList.toggle("show-answer"));

    // Add to DOM cards
    cardsEl.push(card);

    cardsContainer.appendChild(card);

    updateCurrentText();
}

// Hiển thị số lượng card hiện có
function updateCurrentText() {
    currentEl.innerText = `${currentActiveCard + 1}/${cardsEl.length}`;
}

createCards();

// Next button
nextBtn.addEventListener('click', () => {
	cardsEl[currentActiveCard].className = 'card left';

	currentActiveCard = currentActiveCard + 1;

	if (currentActiveCard > cardsEl.length - 1) {
		currentActiveCard = cardsEl.length - 1;
	}

	cardsEl[currentActiveCard].className = 'card active';

	updateCurrentText();
});

// Prev button
prevBtn.addEventListener('click', () => {
	cardsEl[currentActiveCard].className = 'card right';

	currentActiveCard = currentActiveCard - 1;

	if (currentActiveCard < 0) {
		currentActiveCard = 0;
	}

	cardsEl[currentActiveCard].className = 'card active';

	updateCurrentText();
});
