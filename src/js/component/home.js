import React, { useState } from "react";

//create your first component
export function Home() {
	const [color1, setColor1] = useState("iluminated");
	const [color2, setColor2] = useState("yellow");
	const [color3, setColor3] = useState("greenLight");
	const clickRed = () => {
		console.log("red");
	};
	return (
		<div className="trafficLight">
			<button className="redLight" onClick={() => setColor({})}></button>
			<button className="yellowLight" onClick={() => setColor()}></button>
			<button
				className={color3}
				onClick={() => setColor3("iluminated")}></button>
		</div>
	);
}
