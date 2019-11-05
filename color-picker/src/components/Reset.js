import React, { useState } from "react";

const Reset = props => {
	const [defaultValue] = useState({
		color: "red",
		fontSize: 12
	});
	const setDefault = () => props.setDefault(defaultValue);
	return (
		<button type="button" className="btn btn-primary" onClick={setDefault}>
			reset
    	</button>
	);
};

export default Reset;
