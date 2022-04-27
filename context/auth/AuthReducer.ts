import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	CLEAR_ERRORS,
	LOGOUT,
	CLEAR_MESSAGES,
	SET_LOADING,
	FUND_WALLET,
	GET_BUDGETS,
	GET_EXPENSES,
	CREATE_BUDGET,
	ADD_EXPENSE,
	DELETE_BUDGET,
} from '../types';

const AuthReducer = (state: any, action: any) => {
	switch (action.type) {
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				user: action.payload,
				loading: false,
			};
		case AUTH_ERROR:
			localStorage.removeItem('token');
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				user: null,
				error: action.payload,
			};
		case REGISTER_SUCCESS:
			localStorage.setItem('token', action.payload.token);
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				message: action.payload.msg,
			};
		case REGISTER_FAIL:
			localStorage.removeItem('token');
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				user: null,
				error: action.payload,
			};
		case LOGIN_SUCCESS:
			localStorage.setItem('token', action.payload.token);
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				message: 'Login Successful',
				token: action.payload.token,
			};
		case FUND_WALLET:
			return {
				...state,
				user: action.payload.user,
				loading: false,
				message: action.payload.msg,
			};
		case GET_BUDGETS:
			return {
				...state,
				budgets: action.payload,
			};
		case GET_EXPENSES:
			return {
				...state,
				expenses: action.payload,
			};
		case CREATE_BUDGET:
			return {
				...state,
				budgets: [action.payload, ...state.budgets],
				message: action.payload.msg,
			};
		case ADD_EXPENSE:
			return {
				...state,
				expenses: [action.payload, ...state.expenses],
				message: action.payload.msg,
			};
		case DELETE_BUDGET:
			return {
				...state,
				budgets: state.budgets.filter(
					(budget: any) => budget._id !== action.payload.id
				),
				message: action.payload.msg,
			};
		case LOGIN_FAIL:
			localStorage.removeItem('token');
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				user: null,
				error: action.payload,
			};
		case LOGOUT:
			localStorage.removeItem('token');
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				user: null,
				error: action.payload,
				message: 'Logout successful',
			};

		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		case CLEAR_ERRORS:
			return {
				...state,
				error: null,
			};
		case CLEAR_MESSAGES:
			return {
				...state,
				message: null,
			};
		default:
			return state;
	}
};

export default AuthReducer;