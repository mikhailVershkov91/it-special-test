import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfo } from "../../store/info-reducer";
import Header from "../Header/Header";
import Search from "../Search/Search";
import s from "./MainPage.module.css";
import TableComponent from "../Table/TableComponent";
import PaginationComponent from "../Pagination/PaginationComponent";
import Info from "../Info/Info";

const MainPage = () => {
	const dispatch = useDispatch();
	const info = useSelector((state) => state.info.info);

	// const getDataHandler = () => {
	// 	dispatch(getInfo());
	// };

	useEffect(() => {
		dispatch(getInfo());
	}, [dispatch]);

	return (
		<div className={s.main}>
			<Header />
			<Search />
			<TableComponent info={info} />
			<PaginationComponent />
			<Info />
			{/* <button onClick={getDataHandler}>Получить данные</button> */}
		</div>
	);
};

export default MainPage;
