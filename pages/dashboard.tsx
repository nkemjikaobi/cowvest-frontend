import BasePageLayout from 'components/BasePageLayout';
import DetailCard from 'components/DetailCard';
import FundWallet from 'components/modals/FundWallet';
import SideBar from 'components/SideBar';
import React, { useState } from 'react';

const DashboardPage = () => {
	const [fundWallet, setFundWallet] = useState<boolean>(true);
	return (
		<BasePageLayout title='Dashboard'>
			<div className={`grid grid-cols-6 gap-4 ${fundWallet && 'blur-lg'}`}>
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
					<div className='mt-8'>
						<button
							className='border bg-black border-black px-5 py-3 rounded-lg hover:bg-blue-900'
							onClick={() => setFundWallet(true)}
						>
							Fund Wallet
						</button>
					</div>
				</div>
			</div>
			{fundWallet && (
				<div className='fixed left-[30%] top-[30%] w-[40%]'>
					<FundWallet setFundWallet={setFundWallet} />
				</div>
			)}
		</BasePageLayout>
	);
};

export default DashboardPage;
