const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const startGame = document.getElementById("start-game");
const game = document.querySelector('.container');
const btnStartGame = document.getElementById('btn-start-game');
const selectEl = document.getElementById('level');



// danh sách các từ
const words = [
    "write",
    "began",
    "he",
    "sea",
    "eye",
    "learn",
    "have",
    "love",
    "dog",
    "game",
    "element",
    "read",
    "such",
    "up",
    "them",
    "every",
    "point",
    "all",
    "form",
    "thing",
];

// Khởi tạo từ
let randomWord;

// Khởi tạo score
let score = 0;

// Khởi tạo thời gian
let time = 20;

// Set difficulty to value in ls or medium
let level;


// Focus text khi bắt đầu game
text.focus();

// Đếm ngược thời gian
const timeInterval = setInterval(updateTime, 1000);

// Random 1 từ trong mảng
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

// Thêm từ vào trong DOM
function addWordToDOM() {
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}

// Update điểm
function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}

// Update thời gian
function updateTime() {
    time--;
    if(time <= 5) {
        timeEl.style.color = "red";
    }
    timeEl.innerHTML = time + "s";

    if (time === 0) {
        clearInterval(timeInterval);
        // end game
        gameOver();
    }
}

// Game over, show end screen
function gameOver() {
    endgameEl.innerHTML = `
    <h1>Hết giờ</h1>
    <p>Điểm của bạn là: ${score}</p>
    <button onclick="location.reload()">Chơi lại</button>
  `;

    endgameEl.style.display = "flex";
}

addWordToDOM();

// Event listeners

// Typing
text.addEventListener("input", (e) => {
    const insertedText = e.target.value;

    if (insertedText === randomWord) {
        addWordToDOM();
        updateScore();

        // Clear
        e.target.value = "";

        if (level === "hard") {
            time += 2;
        } else if (level === "medium") {
            time += 3;
        } else {
            time += 5;
        }

        updateTime();
    }
});

btnStartGame.addEventListener('click', function() {
    level = selectEl.value;
    startGame.classList.add('hide');
    game.classList.remove('hide');
})