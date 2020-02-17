
$(document).ready(function () {
    //smooth scroll
    $('body').on('click','.link-to-question', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {
                window.location.hash = hash;
            });
        }
    });

    renderNumber()
    renderAnswer()
    // $("input[type='radio']").click(function () {
    //     let numberQuestion = $(this).attr("name")
    //     let valueQuestion = $(`input[name='${numberQuestion}']:checked`).val();
    //     if (valueQuestion) {
    //         console.log(numberQuestion + "-" + valueQuestion)
    //    }
    // });
    console.log(answers)



});

const MIN_NUMBER = 1
const MAX_NUMBER = 11
const LABLE_ANSWER = ['A', 'B', 'C', 'D']

let arrNumber = [];
let questions = [
    {
        question: 'In object-oriented programming, which of the following is an explanation of overriding that achieves polymorphism? ',
        answers: [
            'A feature that allows a class to provide a specific implementation of a method that is already provided by one of its super classes',
            'Creating a class through abstraction by collecting common properties of multiple classes',
            'Defining multiple methods in a class that have the same name, but differ in terms of the number of arguments, argument types, or argument order',
            'Hiding internal contracts and structures of an object from its external specification'
        ],
        answers_true: 'B',
        explain: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
    },
    {
        question: 'What is the Hamming distance of bit strings 10101 and 11110?  ',
        answers: [
            '0',
            '2',
            '3',
            '5'
        ],
        answers_true: 'D',
        explain: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
    },
    {
        question: 'The binary search algorithm is used to search for a given item when items are sorted. If the number of items is 1 million, which of the following is the closest to the maximum number of comparisons required to find the item? ',
        answers: [
            '15',
            '20',
            '25',
            '30'
        ],
        answers_true: 'A',
        explain: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
    },
    {
        question: 'In a table search, which of the following is a characteristic of the search technique known as hashing? ',
        answers: [
            'It is a method in which a collision between storage locations of data does not occur. ',
            'It is a search technique that uses a binary tree. ',
            'The storage locations of data are determined based on the function values of their keys. ',
            'The time required to perform the search is approximately proportional to the size of the entire table.'
        ],
        answers_true: 'A',
        explain: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
    },
    {
        question: 'In object-oriented programming, which of the following is an explanation of overriding that achieves polymorphism?',
        answers: [
            'A feature that allows a class to provide a specific implementation of a method that is already provided by one of its super classes',
            'Creating a class through abstraction by collecting common properties of multiple classes',
            'Defining multiple methods in a class that have the same name, but differ in terms of the number of arguments, argument types, or argument order',
            'Hiding internal contracts and structures of an object from its external specification'
        ],
        answers_true: 'C',
        explain: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
    },
    {
        question: 'Which of the following is the average cycles per instruction (CPI) of a computer that can execute 1 billion instructions per second with a clock rate of 2.4 GHz',
        answers: [
            '0.04',
            '0.12',
            '2.4',
            '25'
        ],
        answers_true: 'A',
        explain: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
    },
    {
        question: 'When two computers have been prepared, and the computer in use fails, which of the following is the system that continues processing by promptly switching to the backup computer that has started the same online processing programs as those on the currently - used computer in advance, and is on standby?',
        answers: [
            'Cold standby system',
            'Hot standby system',
            'Multiprocessor system',
            'Multiuser system'
        ],
        answers_true: 'D',
        explain: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
    },
    {
        question: 'Which of the following is an explanation of an absolute path name in a file system?',
        answers: [
            'The path name from the current directory to the target file ',
            'The path name from the home directory to the target file ',
            'The path name from the root directory to the target file',
            'The shortest path name among path names from a certain directory to the target file'
        ],
        answers_true: 'B',
        explain: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
    },
    {
        question: 'There exists a device with an MTBF of forty-five (45) hours and an MTTR of five (5) hours.What is the availability of a system that connects two(2) such devices in series ?',
        answers: [
            '0.81',
            '0.90',
            '0.95',
            '0.99'
        ],
        answers_true: 'C',
        explain: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
    },
    {
        question: 'Which of the following is the main purpose of optimization by a compiler?',
        answers: [
            'To improve the maintainability of a program ',
            'To make debugging of a program easier ',
            'To reduce the execution time of a program ',
            'To reduce the time needed to generate object codes '
        ],
        answers_true: 'D',
        explain: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
    },
    {
        question: 'Which of the following is the OSS that is provided as an integrated development environment for software ?',
        answers: [
            'Apache Tomcat',
            'Eclipse ',
            'GCC',
            'Linux'
        ],
        answers_true: 'A',
        explain: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
    }
]

for (let i = MIN_NUMBER; i <= MAX_NUMBER; i++) {
    arrNumber.push(i)
}

function renderNumber() {
    renderNumber = ''
    for (let i = 0; i < arrNumber.length; i++) {
        renderNumber += `
                        <div class="number-question__item">
                            <span class="number-question__item--circle"></span>
                            ${arrNumber[i]}
                        </div>
        `
    }
    $('.number-question').append(renderNumber)
}

function renderAnswer() {
    let renderAnswer = ''
    let renderAnswerItem = ''
    let url = window.location.pathname
    

    for (let i = 0; i < questions.length; i++) {
        const q = questions[i]
        let explain = `
                <div class="item__explain">
                    <span class="item__explain--title">Giải thích:</span>
                    <div class="item__explain--content">${q.explain}</div>
                </div>
                `
        let renderExplain = url === "/exam.html" ? "" : explain
        renderAnswer += `
                        <div class="quiz__list--item" data-item-id="${i + 1}">
                            <div class="item__question">
                                <b>Câu ${i + 1}: </b>${q.question}
                            </div>
                            <div class="item__answer">
                                <div class="item__answer--item">
                                    <label>
                                        <input 
                                            type="radio" 
                                            class="option-input radio" 
                                            name="${i + 1}"
                                            value="${LABLE_ANSWER[0]}"
                                        >
                                        ${q.answers[0]}
                                    </label>
                                </div>
                                <div class="item__answer--item">
                                    <label>
                                        <input 
                                            type="radio" 
                                            class="option-input radio" 
                                            name="${i + 1}"
                                            value="${LABLE_ANSWER[1]}"
                                        />
                                         ${q.answers[1]}
                                    </label>
                                </div>
                                <div class="item__answer--item">
                                    <label>
                                        <input 
                                            type="radio" 
                                            class="option-input radio" 
                                            name="${i + 1}"
                                            value="${LABLE_ANSWER[2]}"
                                        />
                                         ${q.answers[2]}
                                    </label>
                                </div>
                                <div class="item__answer--item">
                                    <label>
                                        <input 
                                            type="radio" 
                                            class="option-input radio" 
                                            name="${i + 1}"
                                            value="${LABLE_ANSWER[3]}"
                                        />
                                         ${q.answers[3]}
                                    </label>
                                </div>
                            </div>
                            ${renderExplain}
                        </div>
        `

    }
    $('.quiz__list').append(renderAnswer)
}

let answers = questions.map(question => question.answers_true)
let tot = answers.length;

function getCheckedValue(radioName) {
    var radios = document.getElementsByName(radioName); // Get radio group by-name
    for (var y = 0; y < radios.length; y++)
        if (radios[y].checked) return radios[y].value; // return the checked value
}

function getScore() {
    var score = 0;
    for (var i = 0; i < tot; i++)
        if (getCheckedValue(i + 1) === answers[i]) {
            score += 1;
        } // increment only
    return score;
}

function returnScore() {
    document.getElementById("myresults").innerHTML =
        "Your score is " + getScore() + "/" + tot;
}

$(document).ready(function () {
    
})
