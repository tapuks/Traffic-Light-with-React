import React, { useState } from "react";

//create your first component
export function Home() {
	const [color1, setColor1] = useState("iluminated");
	const [color2, setColor2] = useState("yellowLight");
	const [color3, setColor3] = useState("greenLight");

	return (
		<div className="trafficLight">
			<button
				className={color1}
				onClick={() => {
					setColor1("iluminated");
					setColor2("yellowLight");
					setColor3("greenLight");
				}}></button>
			<button
				className={color2}
				onClick={() => {
					setColor2("iluminated");
					setColor1("redLight");
					setColor3("greenLight");
				}}></button>
			<button
				className={color3}
				onClick={() => {
					setColor3("iluminated");
					setColor2("yellowLight");
					setColor1("redLight");
				}}></button>
		</div>
	);
}
