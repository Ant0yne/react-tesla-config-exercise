import { useState } from "react";

import Choice from "../Choice";

import "./selec.css";

const Selec = ({
	config,
	setResult,
	selecChoice,
	setSelecChoice,
	selecIndex,
}) => {
	const [isSelec, setIsSelec] = useState([]);
	const { title, buttons } = config;

	return (
		<>
			<div>
				<h2>Selectionnez votre {title}</h2>
				<div className="buttons">
					{/* create a Choice component for each button in each item in the JSON */}
					{buttons.map((button, i) => {
						if (isSelec.length < i + 1) {
							const tempArr = [...isSelec];
							tempArr.push(false);
							setIsSelec(tempArr);
						}
						return (
							<Choice
								button={button}
								setResult={setResult}
								selecChoice={selecChoice}
								setSelecChoice={setSelecChoice}
								selecIndex={selecIndex}
								key={i}
								index={i}
								isSelec={isSelec}
								setIsSelec={setIsSelec}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Selec;
