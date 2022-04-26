import BasePageLayout from 'components/BasePageLayout';
import DetailCard from 'components/DetailCard';
import CreateBudget from 'components/modals/CreateBudget';
import FundWallet from 'components/modals/FundWallet';
import SideBar from 'components/SideBar';
import React, { useState } from 'react';

const DashboardPage = () => {
	const [fundWallet, setFundWallet] = useState<boolean>(false);
	const [createBudget, setCreateBudget] = useState<boolean>(false);
	return (
		<BasePageLayout title='Dashboard'>
			<div
				className={`grid grid-cols-6 gap-4 ${fundWallet && 'blur-lg'} ${
					createBudget && 'blur-lg'
				}`}
			>
				<div className='bg-black text-white h-[100vh]'>
					<SideBar />
				</div>
				<div className='col-span-5'>
					<div className=' grid grid-cols-3 gap-4 mt-16 mr-4'>
						<DetailCard
							name='Balance'
							icon='ImUsers'
							count={100000}
							isCurrency={true}
						/>
						<DetailCard name='Budgets' icon='FaUsers' count={5} />
						<DetailCard name='Expenses' icon='FaUsers' count={12} />
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
		</BasePageLayout>
	);
};

export default DashboardPage;
