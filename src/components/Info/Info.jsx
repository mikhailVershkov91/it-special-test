import React from "react";
import s from "./Info.module.css";

const Info = ({ rowData }) => {
	return (
		<div className={s.info}>
			<div className={s.info__container}>
				<div>
					<span>User selected:</span> {rowData.id}
				</div>
				<div>
					<span>Description:</span> {rowData.description}
				</div>
				<div>
					<span>Address:</span> {rowData.adress.streetAddress}
				</div>
				<div>
					<span>City:</span> {rowData.adress.city}
				</div>
				<div>
					<span>State:</span> {rowData.adress.state}
				</div>
				<div>
					<span>Zip code:</span> {rowData.adress.zip}
				</div>
			</div>
		</div>
	);
};

export default Info;
