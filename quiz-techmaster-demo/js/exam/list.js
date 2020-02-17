class List extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { questions, lableAnswer, arrayAnswer, arrayAnswerTrue, checkResult, onHandleChange} = this.props
        return (
            <div className="quiz__list">
                {
                    questions.map((question, index) => {
                        return (
                            <Question 
                                key={index}
                                questions={questions}
                                question={question}
                                numberQuestion={index}
                                lableAnswer={lableAnswer}
                                arrayAnswer={arrayAnswer}
                                arrayAnswerTrue={arrayAnswerTrue}
                                checkResult={checkResult}
                                onHandleChange={onHandleChange}
                            />
                        )
                    })
                }
            </div>
        )
    }
}