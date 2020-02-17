let listQuestion = [
    {
        question: 'In object-oriented programming, which of the following is an explanation of overriding that achieves polymorphism? ',
        answers: [
            'A feature that allows a class to provide a specific implementation of a method that is already provided by one of its super classes',
            'Creating a class through abstraction by collecting common properties of multiple classes',
            'Defining multiple methods in a class that have the same name, but differ in terms of the number of arguments, argument types, or argument order',
            'Hiding internal contracts and structures of an object from its external specification'
        ],
        answers_true: 'B'
    },
    {
        question: 'What is the Hamming distance of bit strings 10101 and 11110?  ',
        answers: [
            '0',
            '2',
            '3',
            '5'
        ],
        answers_true: 'D'
    },
    {
        question: 'The binary search algorithm is used to search for a given item when items are sorted. If the number of items is 1 million, which of the following is the closest to the maximum number of comparisons required to find the item? ',
        answers: [
            '15',
            '20',
            '25',
            '30'
        ],
        answers_true: 'A'
    },
    {
        question: 'In a table search, which of the following is a characteristic of the search technique known as hashing? ',
        answers: [
            'It is a method in which a collision between storage locations of data does not occur. ',
            'It is a search technique that uses a binary tree. ',
            'The storage locations of data are determined based on the function values of their keys. ',
            'The time required to perform the search is approximately proportional to the size of the entire table.'
        ],
        answers_true: 'A'
    },
    {
        question: 'In object-oriented programming, which of the following is an explanation of overriding that achieves polymorphism?',
        answers: [
            'A feature that allows a class to provide a specific implementation of a method that is already provided by one of its super classes',
            'Creating a class through abstraction by collecting common properties of multiple classes',
            'Defining multiple methods in a class that have the same name, but differ in terms of the number of arguments, argument types, or argument order',
            'Hiding internal contracts and structures of an object from its external specification'
        ],
        answers_true: 'C'
    },
    {
        question: 'Which of the following is the average cycles per instruction (CPI) of a computer that can execute 1 billion instructions per second with a clock rate of 2.4 GHz',
        answers: [
            '0.04',
            '0.12',
            '2.4',
            '25'
        ],
        answers_true: 'A'
    },
    {
        question: 'When two computers have been prepared, and the computer in use fails, which of the following is the system that continues processing by promptly switching to the backup computer that has started the same online processing programs as those on the currently - used computer in advance, and is on standby?',
        answers: [
            'Cold standby system',
            'Hot standby system',
            'Multiprocessor system',
            'Multiuser system'
        ],
        answers_true: 'D'
    },
    {
        question: 'Which of the following is an explanation of an absolute path name in a file system?',
        answers: [
            'The path name from the current directory to the target file ',
            'The path name from the home directory to the target file ',
            'The path name from the root directory to the target file',
            'The shortest path name among path names from a certain directory to the target file'
        ],
        answers_true: 'B'
    },
    {
        question: 'There exists a device with an MTBF of forty-five (45) hours and an MTTR of five (5) hours.What is the availability of a system that connects two(2) such devices in series ?',
        answers: [
            '0.81',
            '0.90',
            '0.95',
            '0.99'
        ],
        answers_true: 'C'
    },
    {
        question: 'Which of the following is the main purpose of optimization by a compiler?',
        answers: [
            'To improve the maintainability of a program ',
            'To make debugging of a program easier ',
            'To reduce the execution time of a program ',
            'To reduce the time needed to generate object codes '
        ],
        answers_true: 'D'
    },
    {
        question: 'Which of the following is the OSS that is provided as an integrated development environment for software ?',
        answers: [
            'Apache Tomcat',
            'Eclipse ',
            'GCC',
            'Linux'
        ],
        answers_true: 'A'
    }
]
let newArr = []
for (let i = 1; i <= listQuestion.length; i++) {
    newArr.push(i)
}
let newnArrayAnswerTrue = listQuestion.map((question, index) => {
    return question.answers_true
})

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            questions: listQuestion,
            arrNumber: newArr,
            arrayAnswer: Array(listQuestion.length).fill(null),
            arrayAnswerTrue: newnArrayAnswerTrue,
            lableAnswer: ['A', 'B', 'C', 'D'],
            time: 60,
            score: 0,
            checkResult: false
        }
    }


    onHandleChange = (value) => {
        const updatedArray = [...this.state.arrayAnswer]
        updatedArray[value[0]] = value[1]
        this.setState({
            arrayAnswer: updatedArray,
        });
    };

    onHandleCheckResult = () => {
        const { arrayAnswer, arrayAnswerTrue} = this.state
        let point = 0

        // const updatedArray = [...this.state.arrayAnswer]

        for (let i = 0; i < arrayAnswerTrue.length; i++) {
            if (arrayAnswerTrue[i] === arrayAnswer[i]) {
                point++
                // updatedArray[i] = true
            } else {
                // updatedArray[i] = false
            }
        }

        this.setState({
            score : point,
            checkResult : true
        })
    }

    render() {
        const { questions, arrNumber, arrayAnswer, arrayAnswerTrue, lableAnswer, time, score, checkResult } = this.state
        return (
            <section id="quiz">
                <div className="container">
                    <Time
                        time={time}
                        arrNumber={arrNumber}
                        arrayAnswer={arrayAnswer}
                    />
                    <List
                        questions={questions}
                        lableAnswer={lableAnswer}
                        onHandleChange={this.onHandleChange}
                        arrayAnswer={arrayAnswer}
                        arrayAnswerTrue={arrayAnswerTrue}
                        checkResult={checkResult}
                    />
                    <Result
                        score={score}
                        checkResult={checkResult}
                        onHandleCheckResult={this.onHandleCheckResult}
                    />
                </div>
            </section>

        )
    }
}