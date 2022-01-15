const cardsContainer = document.getElementById('cards-container');

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const currentEl = document.getElementById('current');

const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');

const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');

const addCardBtn = document.getElementById('add-card');
const clearBtn = document.getElementById('clear');

const addContainer = document.getElementById('add-container');

// Card hiện tại
let currentActiveCard = 0;

// Lưu trữ DOM cards
let cardsEl = [];

// Mảng card ban đầu
let cardsData = [
  {
    question: 'Thủ đô của Việt Nam là gì?',
    answer: 'Hà Nội'
  },
  {
    question: 'Đố biết 1 + 1 = ?',
    answer: 'Mình sẽ không nói là bằng 2 đâu'
  },
  {
    question: 'Hôm nay là thứ mấy',
    answer: 'Thứ sáu'
  }
];

// Tạo tất cả card
function createCards() {
	cardsData.forEach((data, index) => createCard(data, index));
}

// Tạo card đơn
function createCard(data, index) {
	const card = document.createElement('div');
	card.classList.add('card');

	if (index === 0 || cardsEl == 0) {
		card.classList.add('active');
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

	card.addEventListener('click', () => card.classList.toggle('show-answer'));

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

// Event listeners

// Next button
nextBtn.addEventListener('click', () => {
	if(cardsEl.length == 0) {
		return
	} else {
		cardsEl[currentActiveCard].className = 'card left';

		currentActiveCard = currentActiveCard + 1;
	
		if (currentActiveCard > cardsEl.length - 1) {
			currentActiveCard = cardsEl.length - 1;
		}
	
		cardsEl[currentActiveCard].className = 'card active';
	
		updateCurrentText();
	}
});

// Prev button
prevBtn.addEventListener('click', () => {
	if(cardsEl.length == 0) {
		return
	} else {
		cardsEl[currentActiveCard].className = 'card right';

		currentActiveCard = currentActiveCard - 1;
	
		if (currentActiveCard < 0) {
			currentActiveCard = 0;
		}
	
		cardsEl[currentActiveCard].className = 'card active';
	
		updateCurrentText();
	}
});

// Show add container
showBtn.addEventListener('click', () => addContainer.classList.add('show'));
// Hide add container
hideBtn.addEventListener('click', () => addContainer.classList.remove('show'));

// Add new card
addCardBtn.addEventListener('click', () => {
	const question = questionEl.value;
	const answer = answerEl.value;

	if (question.trim() && answer.trim()) {
		const newCard = { question, answer };

		createCard(newCard);

		questionEl.value = '';
		answerEl.value = '';

		addContainer.classList.remove('show');

		cardsData.push(newCard);
	}
});

// Xử lý khi xóa tất cả card
clearBtn.addEventListener('click', () => {
	currentActiveCard = 0;
	cardsEl = [];
	cardsData = [];
	cardsContainer.innerHTML = '';
	currentEl.innerText = '';
});
