import { useState } from "react";

import Header from "./components/Header";
import Config from "./components/Config";
import Buy from "./components/Buy";
import Footer from "./components/Footer";

import configs from "./assets/json/tesla_config.json";

import "./App.css";

function App() {
	const [result, setResult] = useState(0);

	return (
		<>
			<Header />
			<Config configs={configs} setResult={setResult} />
			<Buy result={result} />
			<Footer />
		</>
	);
}

export default App;
