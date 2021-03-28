import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import MainPage from "./components/MainPage/MainPage";

const App = () => {
	return (
		<div>
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
