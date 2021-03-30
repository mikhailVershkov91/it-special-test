import { dataAPI } from "../axios/axios";

export const GET_INFO = "GET_INFO";
export const CLEAR_FILTERED_INFO = "CLEAR_FILTERED_INFO";
export const FILTERED_INFO = "FILTERED_INFO";
export const SELECTED_ROW = "SELECTED_ROW";
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
export const TOGGLE_CURRENT_PAGE = "TOGGLE_CURRENT_PAGE";

const initialState = {
	info: [],
	filteredInfo: [],
	selectedRow: [],
	isFetching: true,
	perPage: 25,
	currentPage: 1,
};

const infoReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_INFO: {
			return {
				...state,
				info: action.info,
			};
		}
		case CLEAR_FILTERED_INFO: {
			return {
				...state,
				filteredInfo: [],
			};
		}
		case TOGGLE_CURRENT_PAGE: {
			return {
				...state,
				currentPage: action.currentPage,
			};
		}
		case FILTERED_INFO: {
			return {
				...state,
				filteredInfo: state.info.filter((item) => {
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
		case TOGGLE_IS_FETCHING: {
			return {
				...state,
				isFetching: action.isFetching,
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

export const clearFilteredInfoAC = () => ({
	type: CLEAR_FILTERED_INFO,
});

export const findInfoAC = (inputText) => ({
	type: FILTERED_INFO,
	inputText,
});

export const selectedRowAC = (rowData) => ({
	type: SELECTED_ROW,
	rowData,
});

export const toggleIsFetching = (isFetching) => ({
	type: TOGGLE_IS_FETCHING,
	isFetching,
});

export const toggleCurrentPageAC = (currentPage) => ({
	type: TOGGLE_CURRENT_PAGE,
	currentPage,
});

export const getInfo = () => {
	return async (dispatch) => {
		dispatch(toggleIsFetching(true));
		const response = await dataAPI.getData();
		console.log(response);
		dispatch(getInfoAC(response));
		dispatch(toggleIsFetching(false));
	};
};

export default infoReducer;
