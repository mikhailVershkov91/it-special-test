import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfo } from "../store/info-reducer";

const MainPage = () => {
	const dispatch = useDispatch();

	const getDataHandler = () => {
		dispatch(getInfo());
	};

	const info = useSelector((state) => state.info.info);
	console.log(info);

	return (
		<div>
			<button onClick={getDataHandler}>Получить данные</button>
		</div>
	);
};

export default MainPage;
