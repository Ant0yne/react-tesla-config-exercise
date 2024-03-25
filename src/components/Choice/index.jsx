import "./choice.css";

const Choice = ({
	button,
	setResult,
	selecChoice,
	setSelecChoice,
	selecIndex,
	index,
	isSelec,
	setIsSelec,
}) => {
	const { text, price } = button;

	/**
	 * change the value in the item corresponding to the selecIndex by the one from this button
	 *
	 * update the result with the add of all the value in selecIndex
	 *
	 */
	const handleChoice = () => {
		const tempArrSelec = [...isSelec];
		for (let i = 0; i < tempArrSelec.length; i++) {
			console.log("test");
			if (i === index) {
				tempArrSelec[i] = true;
			} else {
				tempArrSelec[i] = false;
			}
		}
		setIsSelec(tempArrSelec);
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
			<button
				className={isSelec[index] === true ? "button-selected" : ""}
				onClick={handleChoice}>
				{text} - {price} €
			</button>
		</>
	);
};

export default Choice;
