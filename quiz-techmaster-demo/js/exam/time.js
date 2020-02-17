class Time extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {arrNumber, arrayAnswer, time} = this.props

        return (
            <React.Fragment>
                <h2 className="quiz__title">
                    Đề thi Fundamental IT Engineer Examination (10/2019)
                </h2>
                <div className="quiz__answer">
                    <div className="quiz__answer--time">
                        <div className="box-time">
                            <span><i className="fa fa-clock-o" aria-hidden="true" /></span>
                            {time}
                        </div>
                    </div>
                    <div className="quiz__answer--numbers">
                        <p className="quiz__answer--numbers__title">
                            Câu hỏi đã trả lời :
                        </p>
                        <div className="number-question">
                            {
                                arrNumber.map((number, index) => {
                                    let className = 'number-question__item--circle'
                                    arrayAnswer[index] !== null
                                    ? className += ' active'
                                    : className
                                    return ( 
                                        <a 
                                            key={index}
                                            href={`#question-${number}`} 
                                            className="link-to-question"
                                        >
                                            <div 
                                                className="number-question__item" 
                                            > 
                                                <span className={className}></span>
                                                {number}
                                            </div>
                                        </a>
                                    )
                                })
                            }
                            
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}