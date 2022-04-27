import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import setAuthToken from '../../utils/setAuthToken';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	CLEAR_ERRORS,
	CLEAR_MESSAGES,
	SET_LOADING,
	FUND_WALLET,
	ERROR,
	GET_BUDGETS,
	GET_EXPENSES,
	CREATE_BUDGET,
	ADD_EXPENSE,
	DELETE_BUDGET,
} from '../types';

const AuthState = (props: any) => {
	const initialState = {
		token: typeof window !== 'undefined' && localStorage.getItem('token'),
		isAuthenticated: null,
		loading: false,
		user: null,
		error: null,
		message: null,
		budgets: null,
		expenses: null,
	};

	const [state, dispatch] = useReducer(AuthReducer, initialState);

	const customAxios = axios.create({
		baseURL: process.env.NEXT_PUBLIC_BASE_URL,
		headers: {
			'Content-Type': 'application/json',
			authorization: `${
				typeof window !== 'undefined' && localStorage.token
					? localStorage.getItem('token')
					: ''
			}`,
		},
	});

	//Load User
	const loadUser = async () => {
		try {
			const res = await customAxios.get('/api/v1/auth');
			dispatch({
				type: USER_LOADED,
				payload: res.data.user,
			});
		} catch (err: any) {
			dispatch({
				type: AUTH_ERROR,
				payload: err.response.data.msg,
			});
		}
	};

	//Register User
	const register = async (user: any, router: any) => {
		setLoading();

		try {
			const res = await customAxios.post('/api/v1/users', user);
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data,
			});

			//loadUser();
			router.push('/');
		} catch (err: any) {
			dispatch({
				type: REGISTER_FAIL,
				payload: err.response.data.errors
					? err.response.data.errors
					: err.response.data.msg,
			});
		}
	};

	//Login User
	const login = async (user: any, router: any) => {
		setLoading();

		try {
			const res = await customAxios.post('/api/v1/auth', user);
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data,
			});

			router.push('/dashboard');
		} catch (err: any) {
			dispatch({
				type: LOGIN_FAIL,
				payload: err.response.data.errors
					? err.response.data.errors
					: err.response.data.msg,
			});
		}
	};

	//Fund Wallet
	const fundWallet = async (amount: any) => {
		setLoading();

		try {
			const res = await customAxios.put('/api/v1/fund', amount);
			dispatch({
				type: FUND_WALLET,
				payload: res.data,
			});
		} catch (err: any) {
			console.log(err.response);
			dispatch({
				type: ERROR,
				payload: err.response.data.msg,
			});
		}
	};

	//Get Budgets
	const getBudgets = async () => {
		setLoading();

		try {
			const res = await customAxios.get('/api/v1/budgets');
			dispatch({
				type: GET_BUDGETS,
				payload: res.data,
			});
		} catch (err: any) {
			dispatch({
				type: ERROR,
				payload: err.response.data.msg,
			});
		}
	};
	//Create Budget
	const createBudget = async (budget: any) => {
		setLoading();

		try {
			const res = await customAxios.post('/api/v1/budgets', budget);
			dispatch({
				type: CREATE_BUDGET,
				payload: res.data,
			});
		} catch (err: any) {
			dispatch({
				type: ERROR,
				payload: err.response.data.msg,
			});
		}
	};

	//Get Expenses
	const getExpenses = async (budgetId: any) => {
		setLoading();

		try {
			const res = await customAxios.get(`/api/v1/expenses/${budgetId}`);
			dispatch({
				type: GET_EXPENSES,
				payload: res.data,
			});
		} catch (err: any) {
			dispatch({
				type: ERROR,
				payload: err.response.data.msg,
			});
		}
	};

	//Add Expense
	const addExpense = async (expense: any) => {
		setLoading();

		try {
			const res = await customAxios.post('api/v1/expenses', expense);
			dispatch({
				type: ADD_EXPENSE,
				payload: res.data,
			});
		} catch (err: any) {
			dispatch({
				type: ERROR,
				payload: err.response.data.msg,
			});
		}
	};

	//Delete budget
	const deleteBudget = async (budgetId: any) => {
		setLoading();

		try {
			const res = await customAxios.delete(`/api/v1/expenses/${budgetId}`);
			dispatch({
				type: DELETE_BUDGET,
				payload: res.data,
			});
		} catch (err: any) {
			dispatch({
				type: ERROR,
				payload: err.response.data.msg,
			});
		}
	};

	//Set loading
	const setLoading = () => dispatch({ type: SET_LOADING });

	//Logout User
	const logout = () => dispatch({ type: LOGOUT });

	//Clear Errors
	const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

	//Clear Messages
	const clearMessages = () => dispatch({ type: CLEAR_MESSAGES });

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				isAuthenticated: state.isAuthenticated,
				loading: state.loading,
				user: state.user,
				error: state.error,
				message: state.message,
				budgets: state.budgets,
				expenses: state.expenses,
				register,
				clearErrors,
				clearMessages,
				loadUser,
				login,
				logout,
				fundWallet,
				getBudgets,
				getExpenses,
				createBudget,
				addExpense,
				deleteBudget
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
