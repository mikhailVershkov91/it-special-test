import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import s from "./PaginationComponent.module.css";

const PaginationComponent = () => {
	return (
		<div className={s.pagination}>
			<Pagination count={10} />
		</div>
	);
};

export default PaginationComponent;
