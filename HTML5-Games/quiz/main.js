const quizzes = [
    {
        title: "Thủ đô của Việt Nam là?",
        answers: ["Hà Nội", "Hải Phòng", "Thành phố Hồ Chí Minh", "Đà Nẵng"],
        answerTrue: "Hà Nội"
    },
    {
        title: "Việt Nam nằm trong khu vực nào của châu Á?",
        answers: ["Đông Á", "Đông Nam Á", "Nam Á", "Tây Á"],
        answerTrue: "Đông Nam Á"
    },
    {
        title: "Quốc hoa của Việt Nam là gì",
        answers: ["Hoa Hồng", "Hoa Tulip", "Hoa Sen", "Hoa Hướng Dương"],
        answerTrue: "Hoa Sen"
    }
]

let current_question = 0
let user_answers = []

let title_question = document.querySelector('.quiz-title-inner')
let quiz_answer = document.querySelector('.quiz-answer')
let current_question_ele = document.querySelector('.current-question')
let total_question_ele = document.querySelector('.total-question')
let btn_next = document.querySelector('.btn-next')
let btn_skip = document.querySelector('.btn-skip')
let btn_result = document.querySelector('.btn-result')


function renderUI(question) {
    //render title
    title_question.innerHTML = question.title;

    // render answer
    quiz_answer.innerHTML = "";
    for (let i = 0; i < question.answers.length; i++) {
        quiz_answer.innerHTML += `
            <div class="quiz-item">
                <input type="radio" id="answer-${i+1}" name="question-${current_question + 1}">
                <label for="answer-${i+1}">
                    <p>${question.answers[i]}</p>
                </label>
            </div>
        `
    }

    // render current question
    current_question_ele.textContent = current_question + 1

    // render total question
    total_question_ele.textContent = quizzes.length
}

btn_next.addEventListener('click', function() {
    // check last question
    if(current_question == quizzes.length - 1) {
        btn_result.classList.remove('hide-btn')
        btn_result.classList.add('show-btn')
        btn_next.classList.add('hide-btn')
        btn_skip.classList.add('hide-btn')
        return
    }
    
    // check user answer quiz
    let answer_input = document.querySelectorAll('.quiz-item input')
    let total_check = 0

    answer_input.forEach(function(input) {
        if (input.checked){
            total_check++
        }
    })

    if(total_check) {        
        // increment current question
        current_question++
    
        // render UI
        renderUI(quizzes[current_question])

    } else {
        toastr.warning("Bạn chưa chọn đáp án cho câu hỏi")
        return
    }

})

btn_skip.addEventListener('click', function() {
    // check last question
    if(current_question == quizzes.length - 1) {
        btn_result.classList.remove('hide-btn')
        btn_result.classList.add('show-btn')
        btn_next.classList.add('hide-btn')
        btn_skip.classList.add('hide-btn')
        return
    }

    if(window.confirm('Bạn có muốn bỏ qua câu hỏi này không?')) {
        // increment current question
        current_question++
    
        // render UI
        renderUI(quizzes[current_question])
    }
    return
})

function init() {
    renderUI(quizzes[current_question])
}

window.onload = init()