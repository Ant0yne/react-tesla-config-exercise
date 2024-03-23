import "./choice.css";

const Choice = ({
	button,
	setResult,
	selecChoice,
	setSelecChoice,
	selecIndex,
}) => {
	const { text, price } = button;

	const handleChoice = () => {
		const tempArr = [...selecChoice];
		tempArr[selecIndex].value = price;
		setSelecChoice(tempArr);
		let tempResult = 0;
		for (const choice of selecChoice) {
			tempResult += choice.value;
		}
		setResult(tempResult);
	};

	return (
		<>
			<button onClick={handleChoice}>
				{text} - {price}
			</button>
		</>
	);
};

export default Choice;
