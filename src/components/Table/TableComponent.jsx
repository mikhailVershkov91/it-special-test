import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import s from "./TableComponent.module.css";
import PaginationComponent from "../Pagination/PaginationComponent";
import Info from "../Info/Info";
import { useDispatch, useSelector } from "react-redux";
import { selectedRowAC } from "../../store/info-reducer";

const columns = [
	{
		field: "id",
		headerName: "id",
		width: 60,
		valueGetter: (params) => `${params.row.id}`,
	},
	{
		field: "firstName",
		headerName: "First name",
		width: 150,
		valueGetter: (params) => `${params.row.firstName}`,
	},
	{
		field: "lastName",
		headerName: "Last name",
		width: 150,
		valueGetter: (params) => `${params.row.lastName}`,
	},
	{
		field: "email",
		headerName: "Email",
		width: 150,
		valueGetter: (params) => `${params.row.email}`,
	},
	{
		field: "phone",
		headerName: "Phone",
		width: 150,
		valueGetter: (params) => `${params.row.phone}`,
	},
	{
		field: "adress",
		headerName: "Address",
		width: 150,
		valueGetter: (params) =>
			`${params.row.adress.city}, ${params.row.adress.streetAddress}`,
	},
	{
		field: "description",
		headerName: "Description",
		width: 484,
		valueGetter: (params) => `${params.row.description}`,
	},
];

const TableComponent = () => {
	const dispatch = useDispatch();
	let data = useSelector((state) => state.info.info);
	let filteredData = useSelector((state) => state.info.filteredInfo);
	const rowData = useSelector((state) => state.info.selectedRow);
	const currentPage = useSelector((state) => state.info.currentPage);
	const perPage = useSelector((state) => state.info.perPage);

	const from = currentPage * perPage - perPage;
	const to = currentPage * perPage;
	let paginatedData = [...data].slice(from, to);

	// const arrayUnique = (data) => {
	// 	return data.filter((e, i, a) => a.indexOf(e) == i);
	// };

	// let key = Math.random();
	// console.log(key);

	// const fixedData = data.map((item, index) => {
	// 	if(item.id = )
	// })

	// const json = data.map(item => {

	// }
	// JSON.stringify(data);
	// console.log(json);

	if (filteredData.length) {
		paginatedData = filteredData;
	}

	const rowSelectedHandler = (row) => {
		dispatch(selectedRowAC(row.data));
	};

	return (
		<>
			<DataGrid
				className={s.table}
				// getRowId={(r) => r.id}
				// key={data.id + data.phone}
				rows={paginatedData}
				// rows={data.map((item) => (
				// 	<tr key={item.id + item.phone} />
				// ))}
				columns={columns}
				hideFooterPagination="false"
				disableColumnMenu="false"
				autoHeight="true"
				hideFooter="true"
				pageSize={perPage}
				onRowSelected={rowSelectedHandler}
			/>
			<PaginationComponent perPage={perPage} data={data} />
			{rowData.adress && <Info rowData={rowData} />}
		</>
	);
};

export default TableComponent;
