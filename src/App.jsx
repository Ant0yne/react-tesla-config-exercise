import { useState } from "react";

import Header from "./components/Header";
import Selec from "./components/Selec";
import Footer from "./components/Footer";

import configs from "./assets/json/tesla_config.json";

import "./App.css";

function App() {
	const [result, setResult] = useState(0);

	return (
		<>
			<Header />
			<Selec result={result} setResult={setResult} />
			<Footer />
		</>
	);
}

export default App;
