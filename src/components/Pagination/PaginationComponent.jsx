import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import s from "./PaginationComponent.module.css";
import { useDispatch } from "react-redux";
import { toggleCurrentPageAC } from "../../store/info-reducer";

const PaginationComponent = ({ perPage, data }) => {
	const dispatch = useDispatch();
	const pagesCount = Math.ceil(data.length / perPage);

	const onChangeHandler = (event, page) => {
		dispatch(toggleCurrentPageAC(page));
	};

	return (
		<div className={s.pagination}>
			<Pagination count={pagesCount} onChange={onChangeHandler} />
		</div>
	);
};

export default PaginationComponent;
