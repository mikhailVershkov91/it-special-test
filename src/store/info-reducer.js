import { dataAPI } from "../axios/axios";

export const GET_INFO = "GET_INFO";

const initialState = {
	info: [],
};

const infoReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_INFO: {
			return {
				...state,
				info: action.info,
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

export const getInfo = () => {
	return async (dispatch) => {
		const response = await dataAPI.getData();
		console.log(response);
		dispatch(getInfoAC(response));
	};
};

export default infoReducer;
