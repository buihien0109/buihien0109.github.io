class Result extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let message =   <span id="myresults" className="my-results">
                            Ket qua: {this.props.score}
                        </span>
        return (
            <>
                {this.props.checkResult ? message : ""}
                <button 
                    className="check-result"
                    onClick={this.props.onHandleCheckResult}
                >
                    Kiểm tra kết quả
                </button>
            </>
        )
    }
}