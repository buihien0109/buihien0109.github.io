let questions = [
    {
        question: "What is the full form of RAM ?",
        answer: "Random Access Memory",
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Aceapt Memory",
            "None of these",
        ],
    },
    {
        question: "What is the full form of CPU?",
        answer: "Central Processing Unit",
        options: [
            "Central Program Unit",
            "Central Processing Unit",
            "Central Preload Unit",
            "None of these",
        ],
    },
    {
        question: "What is the full form of E-mail",
        answer: "Electronic Mail",
        options: [
            "Electronic Mail",
            "Electric Mail",
            "Engine Mail",
            "None of these",
        ],
    },
];

let current_question = 0;

function showQuestion(count) {
    let quiz_question = document.querySelector(".quiz-question p");
    let quiz_answer = document.querySelector(".quiz-answer");

    // lấy ra câu hỏi hiện tại
    let question = questions[count];

    // Hiển thị câu hỏi
    quiz_question.innerText = `Câu ${count + 1} : ${question.question}`;

    // Hiển thị câu trả lời
    quiz_answer.innerHTML = '';
    for(let i = 0; i < question.options.length; i++) {
        let q = question.options[i];
        quiz_answer.innerHTML += `
            <div class="quiz-item">
                <input 
                    type="radio" 
                    id="answer-${i + 1}" 
                    name="question-${count+1}"
                />
                <label for="answer-${i + 1}">
                    <span></span>
                    <p>${q}</p>
                </label>
            </div>
        `
    }

    // Update progress bar
    updateProgressBar();
    
    // Nếu chưa có câu trả lời thì disable nút next
    if(count == questions.length - 1) {
        document.querySelector('.next-btn').classList.add('disable')
    } else{
        document.querySelector('.next-btn').classList.remove('disable')
    }

    if(count == 0) {
        document.querySelector('.prev-btn').classList.add('disable')
    } else {
        document.querySelector('.prev-btn').classList.remove('disable')
    }
}

window.onload = function () {
    showQuestion(current_question);
};

document.querySelector('.next-btn').addEventListener('click', nextQuestion)
document.querySelector('.prev-btn').addEventListener('click', prevQuestion)

function nextQuestion() {
    current_question++
    if(current_question > questions.length - 1) {
        current_question = questions.length - 1;
    }
    showQuestion(current_question);
}

function prevQuestion() {
    current_question--
    if(current_question < 0) {
        current_question = 0;
    }
    showQuestion(current_question);
}

function updateProgressBar() {
    document.querySelector('.quiz-progress-bar').style.width = `${(current_question + 1) * 100 / questions.length}%`;
}