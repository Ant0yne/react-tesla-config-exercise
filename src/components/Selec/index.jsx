import Choice from "../Choice";

import "./selec.css";

const Selec = ({
	config,
	setResult,
	selecChoice,
	setSelecChoice,
	selecIndex,
}) => {
	const { title, buttons } = config;

	return (
		<>
			<div>
				<h2>Selectionnez {title}</h2>
				<div>
					{buttons.map((button, i) => {
						return (
							<Choice
								button={button}
								setResult={setResult}
								selecChoice={selecChoice}
								setSelecChoice={setSelecChoice}
								selecIndex={selecIndex}
								key={i}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Selec;
