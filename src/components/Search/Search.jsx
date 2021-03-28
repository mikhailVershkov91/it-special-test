import React from "react";
import TextField from "@material-ui/core/TextField";
import s from "./Search.module.css";
import Button from "@material-ui/core/Button";

const Search = () => {
	return (
		<form className={s.input} noValidate autoComplete="off">
			<div className={s.input__container}>
				<TextField
					className={s.input__textField}
					id="outlined-basic"
					label="Search"
					variant="outlined"
				/>
				<Button className={s.input__button} variant="contained">
					Find
				</Button>
			</div>
		</form>
	);
};

export default Search;
