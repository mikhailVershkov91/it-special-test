import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import s from "./Search.module.css";
import Button from "@material-ui/core/Button";
import { findInfoAC } from "../../store/info-reducer";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
	const [text, setText] = useState("");
	const dispatch = useDispatch();

	const findHandler = () => {
		dispatch(findInfoAC(text));
		setText("");
	};

	const onChangeHandler = (e) => {
		setText(e.target.value);
	};

	return (
		<form className={s.input} noValidate autoComplete="off">
			<div className={s.input__container}>
				<TextField
					className={s.input__textField}
					id="outlined-basic"
					label="Search"
					variant="outlined"
					onChange={onChangeHandler}
					value={text}
				/>
				<Button
					className={s.input__button}
					variant="contained"
					onClick={findHandler}
				>
					Find
				</Button>
				{/* <Button
					className={s.input__button}
					variant="contained"
					onClick={}
				>
					Back
				</Button> */}
			</div>
		</form>
	);
};

export default Search;
