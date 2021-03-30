import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfo } from "../../store/info-reducer";
import Header from "../Header/Header";
import Search from "../Search/Search";
import s from "./MainPage.module.css";
import TableComponent from "../Table/TableComponent";
import Preloader from "../Preloader/Preloader";

const MainPage = () => {
	const dispatch = useDispatch();
	const isFetching = useSelector((state) => state.info.isFetching);

	useEffect(() => {
		dispatch(getInfo());
	}, [dispatch]);

	return (
		<div className={s.main}>
			<Header />
			<Search />
			{/* {info.map((item) => (
				// <TableComponent info={info} key={item.id + item.phone} />
			))} */}
			{isFetching ? <Preloader /> : <TableComponent />}
		</div>
	);
};

export default MainPage;
