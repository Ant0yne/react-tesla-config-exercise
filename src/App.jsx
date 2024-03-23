import { useState } from "react";

import Header from "./components/Header";
import Config from "./components/Config";
import Buy from "./components/Buy";
import Footer from "./components/Footer";

// JSON with all the configs and their prices
import configs from "./assets/json/tesla_config.json";

import "./App.css";

function App() {
	// NUMBER -> the result once the config are chosen
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
