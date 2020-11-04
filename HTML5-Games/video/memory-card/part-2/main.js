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