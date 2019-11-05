import React, { useState } from "react";

const Color = props => {
	const [colors] = useState(["red", "green", "blue", "#ccc"]);
	const setStyle = color => ({ backgroundColor: color });
	const handleChangeColor = color => props.onChangeColor(color);
	let eleColor = colors.map((color, index) => {
		return (
			<span
				key={index}
				style={setStyle(color)}
				onClick={() => handleChangeColor(color)}
				className={props.color === color ? "active" : ""}
			></span>
		);
	});

	return (
		<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
			<div className="panel panel-primary">
				<div className="panel-heading">
					<h3 className="panel-title">Color Picker</h3>
				</div>
				<div className="panel-body">
					{eleColor}
					<hr />
				</div>
			</div>
		</div>
	);
};

export default Color;
