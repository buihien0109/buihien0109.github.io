import React, { useState } from "react";
import "./App.css";
import Color from "./components/Color";
import FontSize from "./components/FontSize";
import Reset from "./components/Reset";
import Result from "./components/Result";

const App = props => {
	const [color, setColor] = useState("red");
	const [fontSize, setFontSize] = useState(12);
	const onIncreaseSize = value =>
		fontSize < 36 ? setFontSize(fontSize + value) : setFontSize(fontSize);
	const onDecreaseSize = value =>
		fontSize > 8 ? setFontSize(fontSize + value) : setFontSize(fontSize);
	const onChangeColor = color => setColor(color);
	const setDefault = data => {
		setColor(data.color);
		setFontSize(data.fontSize);
	};
	return (
		<div className="container mt-50">
			<div className="row">
				<Color color={color} onChangeColor={onChangeColor} />
				<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
					<FontSize
						fontSize={fontSize}
						onIncreaseSize={onIncreaseSize}
						onDecreaseSize={onDecreaseSize}
					/>
					<Reset setDefault={setDefault} />
				</div>
				<Result color={color} fontSize={fontSize} />
			</div>
		</div>
	);
};

export default App;
