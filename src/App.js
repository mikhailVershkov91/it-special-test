import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import MainPage from "./components/MainPage";

const App = () => {
	return (
		<div>
			<p>Hello world</p>
			<MainPage />
		</div>
	);
};

const MainApp = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};

export default MainApp;
