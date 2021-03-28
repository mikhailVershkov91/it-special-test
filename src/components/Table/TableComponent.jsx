import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import s from "./TableComponent.module.css";

const columns = [
	{ field: "id", headerName: "ID", width: 60 },
	{ field: "firstName", headerName: "First name", width: 150 },
	{ field: "lastName", headerName: "Last name", width: 150 },
	{ field: "email", headerName: "Email", width: 150 },
	{ field: "phone", headerName: "Phone", width: 150 },
	{ field: "adress", headerName: "Address", width: 150 },
	{ field: "description", headerName: "Description", width: 484 },
];

const TableComponent = (props) => {
	const data = props.info;

	return (
		<div className={s.tableContainer}>
			<DataGrid
				className={s.table}
				rows={data}
				columns={columns}
				hideFooterPagination="false"
				disableColumnMenu="true"
				autoHeight="true"
			/>
		</div>
	);
};

export default TableComponent;
