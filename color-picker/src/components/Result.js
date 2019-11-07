import React from "react";

const Result = props => {
	const setStyle = (color, fontSize) => ({
		fontSize: fontSize,
		color: color,
		borderColor: color
	});
	return (
		<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<p>
				Color : {props.color} - Fontsize : {props.fontSize}px
      		</p>
			<div id="content" style={setStyle(props.color, props.fontSize)}>
				Nội dung setting
      		</div>
		</div>
	);
};

export default Result;
