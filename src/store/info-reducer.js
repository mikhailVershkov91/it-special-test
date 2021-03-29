import { dataAPI } from "../axios/axios";

export const GET_INFO = "GET_INFO";
export const FILTERED_INFO = "FILTERED_INFO";
export const SELECTED_ROW = "SELECTED_ROW";

const initialState = {
	info: [],
	selectedRow: [],
};

const infoReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_INFO: {
			return {
				...state,
				info: action.info,
			};
		}
		case FILTERED_INFO: {
			return {
				...state,
				info: state.info.filter((item) => {
					let flag;
					for (let prop in item) {
						flag = false;
						flag = item[prop].toString().indexOf(action.inputText) > -1;
						if (flag) break;
					}
					return flag;
				}),
			};
		}
		case SELECTED_ROW: {
			return {
				...state,
				selectedRow: action.rowData,
			};
		}
		default:
			return state;
	}
};

export const getInfoAC = (info) => ({
	type: GET_INFO,
	info,
});

export const findInfoAC = (inputText) => ({
	type: FILTERED_INFO,
	inputText,
});

export const selectedRowAC = (rowData) => ({
	type: SELECTED_ROW,
	rowData,
});

export const getInfo = () => {
	return async (dispatch) => {
		const response = await dataAPI.getData();
		console.log(response);
		dispatch(getInfoAC(response));
	};
};

export default infoReducer;
