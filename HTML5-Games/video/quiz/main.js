let questions = [{
        id: 1,
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
        id: 2,
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
        id: 3,
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

let question_count = 0;
let points = 0;

window.onload = function () {
    show(question_count);
};

function show(count) {
    let quiz_question = document.querySelector(".quiz-question p");
    let quiz_answer = document.querySelector(".quiz-answer");
    let question = questions[count];

    quiz_question.innerText = question.question;
    quiz_answer.innerHTML = '';
    for(let i = 0; i < question.options.length; i++) {
        let q = question.options[i];
        quiz_answer.innerHTML += `
            <div class="quiz-item">
                <input type="radio" id="answer-${i + 1}" name="question-${question.id}"  />
                <label for="answer-${i + 1}">
                    <span></span>
                    <p>${q}</p>
                </label>
            </div>
        `
    }
    // toggleActive();
}

function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let i = 0; i < option.length; i++) {
                if (option[i].classList.contains("active")) {
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        };
    }
}