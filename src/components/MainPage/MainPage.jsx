import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfo } from "../../store/info-reducer";
import Header from "../Header/Header";
import Search from "../Search/Search";
import s from "./MainPage.module.css";
import TableComponent from "../Table/TableComponent";

const MainPage = () => {
	const dispatch = useDispatch();

	const getDataHandler = () => {
		dispatch(getInfo());
	};

	const info = useSelector((state) => state.info.info);
	// console.log(info);

	return (
		<div className={s.main}>
			<Header />
			<Search />
			<TableComponent info={info} />
			<button onClick={getDataHandler}>Получить данные</button>
		</div>
	);
};

export default MainPage;
