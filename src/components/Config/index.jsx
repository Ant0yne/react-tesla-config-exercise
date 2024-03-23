import { useState } from "react";

import Selec from "../Selec";

import "./config.css";

const Config = ({ configs, setResult }) => {
	const [selecChoice, setSelecChoice] = useState([]);

	return (
		<>
			<main>
				{configs.map((config, i) => {
					if (selecChoice[i] === undefined) {
						const tempArr = [...selecChoice];
						tempArr.push({
							id: config.id,
							value: 0,
						});
						setSelecChoice(tempArr);
					}
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
