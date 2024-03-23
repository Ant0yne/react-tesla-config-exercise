import { useState } from "react";

import Selec from "../Selec";

import "./config.css";

const Config = ({ configs, setResult }) => {
	// ARRAY -> objects with value for each config selected -> id:STRING value:NUMBER
	const [selecChoice, setSelecChoice] = useState([]);

	/**
	 *
	 * @param {Object} config
	 * @param {Number} i
	 *
	 * check if object with same id as the item in the JSON exist in selecChoice
	 *
	 * if not -> create it and push it to selecChoice
	 */
	const createSelecChoice = (config, i) => {
		if (selecChoice[i] === undefined) {
			const tempArr = [...selecChoice];
			tempArr.push({
				id: config.id,
				value: 0,
			});
			setSelecChoice(tempArr);
		}
	};

	return (
		<>
			<main>
				{/* create a component Selec for each item in JSON */}
				{configs.map((config, i) => {
					createSelecChoice(config, i);
					return (
						<Selec
							config={config}
							setResult={setResult}
							selecChoice={selecChoice}
							setSelecChoice={setSelecChoice}
							selecIndex={i}
							key={config.id}
						/>
					);
				})}
			</main>
		</>
	);
};

export default Config;
