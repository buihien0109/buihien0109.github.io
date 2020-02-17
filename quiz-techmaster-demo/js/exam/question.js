class Question extends React.Component {
    constructor(props) {
        super(props)
       
    }

    getValue = (event) => {
        let value = event.target.value  
        this.props.onHandleChange([this.props.numberQuestion, value])
    }

    render() {
        const { lableAnswer, question, questions, numberQuestion, arrayAnswer, arrayAnswerTrue, checkResult} = this.props


        return (
            <div className="quiz__list--item" id={`question-${numberQuestion + 1}`}>
                <div className="item__question">
                    <b>Câu {numberQuestion + 1}</b>: 
                    {question.question}
                </div>
                <div className="item__answer">
                    {
                        question.answers.map((answer, index) => {
                            let className = 'item__answer--item'

                            if(checkResult) {
                                if (arrayAnswer[numberQuestion] === answer[index] && arrayAnswer[numberQuestion] === arrayAnswerTrue[numberQuestion]) {
                                    className += " true"
                                } else if (arrayAnswer[numberQuestion] === answer[index] && arrayAnswer[numberQuestion] !== arrayAnswerTrue[numberQuestion]) {
                                    className += " false"
                                }
                            }
                            
                            return (
                                <div className={className} key={index}>
                                    <label>
                                        <input 
                                            type="radio"
                                            className="option-input radio" 
                                            name={numberQuestion+1}
                                            value={lableAnswer[index]}
                                            onChange={this.getValue}
                                        />
                                        {answer}
                                    </label>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}