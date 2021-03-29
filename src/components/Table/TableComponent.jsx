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

	// const rowSelectedHandler = (params) => {
	// 	console.log(params);
	// 	console.log("Clicked");
	// };

	return (
		<DataGrid
			className={s.table}
			rows={data}
			columns={columns}
			hideFooterPagination="false"
			disableColumnMenu="false"
			autoHeight="true"
			pageSize={15}
			// onRowClick={() => rowSelectedHandler(params)}
		/>
	);
};

export default TableComponent;

// const rows = [
// 	{
// 		id: 95,
// 		firstName: "Edith",
// 		lastName: "Ellington",
// 	},
// 	{
// 		id: 293,
// 		firstName: "Alisa",
// 		lastName: "Bealka",
// 	},
// 	{
// 		id: 132,
// 		firstName: "Petya",
// 		lastName: "Voroncov",
// 	},
// 	{
// 		id: 454,
// 		firstName: "Kolya",
// 		lastName: "Bunek",
// 	},
// 	{
// 		id: 99,
// 		firstName: "Masha",
// 		lastName: "Artushev",
// 	},
// 	{
// 		id: 12,
// 		firstName: "Misha",
// 		lastName: "Ivanov",
// 	},
// 	{
// 		id: 43,
// 		firstName: "Vova",
// 		lastName: "Petrov",
// 	},
// 	{
// 		id: 22,
// 		firstName: "Evgen",
// 		lastName: "Sidorov",
// 	},
// 	{
// 		id: 54,
// 		firstName: "Max",
// 		lastName: "Kononenko",
// 	},
// 	{
// 		id: 23,
// 		firstName: "Tima",
// 		lastName: "Van",
// 	},
// 	{
// 		id: 667,
// 		firstName: "Andrey",
// 		lastName: "Dreling",
// 	},
// 	{
// 		id: 324,
// 		firstName: "Marat",
// 		lastName: "Kondratyev",
// 	},
// 	{
// 		id: 154,
// 		firstName: "Oleg",
// 		lastName: "Maximov",
// 	},
// 	{
// 		id: 674,
// 		firstName: "Vera",
// 		lastName: "Shatc",
// 	},
// 	{
// 		id: 389,
// 		firstName: "Dasha",
// 		lastName: "Yau",
// 	},
// ];
