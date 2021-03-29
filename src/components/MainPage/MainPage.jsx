import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfo } from "../../store/info-reducer";
import Header from "../Header/Header";
import Search from "../Search/Search";
import s from "./MainPage.module.css";
import TableComponent from "../Table/TableComponent";

const MainPage = () => {
	const dispatch = useDispatch();
	const info = useSelector((state) => state.info.info);

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
			<TableComponent info={info} />
		</div>
	);
};

export default MainPage;
