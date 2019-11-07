import React from "react";

const FontSize = props => {
	const increase = () => props.onIncreaseSize(2);
	const decrease = () => props.onDecreaseSize(-2);
	return (
		<div className="panel panel-warning">
			<div className="panel-heading">
				<h3 className="panel-title">Size :{props.fontSize}px</h3>
			</div>
			<div className="panel-body">
				<button type="button" className="btn btn-success" onClick={decrease}>
					Giảm
        		</button>
				&nbsp;
        		<button type="button" className="btn btn-success" onClick={increase}>
					Tăng
        		</button>
			</div>
		</div>
	);
};

export default FontSize;
