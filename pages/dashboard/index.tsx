import BasePageLayout from 'components/BasePageLayout';
import BudgetCard from 'components/BudgetCard';
import DetailCard from 'components/DetailCard';
import AddExpense from 'components/modals/AddExpense';
import CreateBudget from 'components/modals/CreateBudget';
import FundWallet from 'components/modals/FundWallet';
import SideBar from 'components/SideBar';
import React, { useState, useContext } from 'react';
import AuthContext from 'context/auth/AuthContext';
import { useEffect } from 'react';

const DashboardPage = () => {
	const [fundWallet, setFundWallet] = useState<boolean>(false);
	const [createBudget, setCreateBudget] = useState<boolean>(false);
	const [addExpense, setAddExpense] = useState<boolean>(false);

	const authContext = useContext(AuthContext);
	const { user, getBudgets, budgets } = authContext;

	useEffect(() => {
		getBudgets();
		//eslint-disable-next-line
	}, []);
	return (
		<BasePageLayout title='Dashboard'>
			<div
				className={`grid grid-cols-6 gap-4 ${addExpense && 'blur-lg'} ${
					fundWallet && 'blur-lg'
				} ${createBudget && 'blur-lg'}`}
			>
				<div className='bg-black text-white h-[100vh]'>
					<SideBar />
				</div>
				<div className='col-span-5'>
					<h3 className='mt-8 text-2xl'>
						Hello ,{' '}
						<span className='text-purple-700'>
							{user && user.first_name} 😌
						</span>
					</h3>
					<div className=' grid grid-cols-3 gap-4 mt-16 mr-4'>
						<DetailCard
							name='Balance'
							icon='ImUsers'
							count={user && user.balance}
							isCurrency={true}
						/>
						<DetailCard
							name='Budgets'
							icon='FaUsers'
							count={budgets ? budgets.length : 0}
						/>
						<DetailCard name='Expenses' icon='FaUsers' count={24} />
					</div>
					<div className='my-8'>
						<button
							className='border bg-black border-black px-5 py-3 rounded-lg hover:bg-blue-900'
							onClick={() => setFundWallet(true)}
						>
							Fund Wallet
						</button>
					</div>
					<div className='mt-16'>
						<div className='flex items-center mb-4'>
							<h3 className='text-4xl mr-32'>Budgets</h3>
							<button
								className='border bg-black border-black px-5 py-3 rounded-lg hover:bg-blue-900'
								onClick={() => setCreateBudget(true)}
							>
								Create Budget
							</button>
						</div>
						<hr />
						<div className=' grid grid-cols-3 gap-4 mt-16 mr-4'>
							<BudgetCard
								name='Transport'
								amount='40000'
								progress={60}
								setAddExpense={setAddExpense}
							/>
							<BudgetCard
								name='Groceries'
								amount='430000'
								progress={30}
								setAddExpense={setAddExpense}
							/>
							<BudgetCard
								name='Miscellaneous'
								amount='20000'
								progress={75}
								setAddExpense={setAddExpense}
							/>
						</div>
					</div>
				</div>
			</div>
			{fundWallet && (
				<div className='fixed left-[30%] top-[30%] w-[40%]'>
					<FundWallet setFundWallet={setFundWallet} />
				</div>
			)}
			{createBudget && (
				<div className='fixed left-[30%] top-[30%] w-[40%]'>
					<CreateBudget setCreateBudget={setCreateBudget} />
				</div>
			)}
			{addExpense && (
				<div className='fixed left-[30%] top-[30%] w-[40%]'>
					<AddExpense setAddExpense={setAddExpense} />
				</div>
			)}
		</BasePageLayout>
	);
};

export default DashboardPage;
