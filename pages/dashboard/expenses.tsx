import BasePageLayout from 'components/BasePageLayout';
import Expense from 'components/Expense';
import SideBar from 'components/SideBar';
import { CURRENCIES } from 'Constants';
import formatNumberWithCommas from 'helpers/formatNumberWithCommas';
import React from 'react';

const ExpensesPage = () => {
	return (
		<BasePageLayout title='Expenses'>
			<div className='grid grid-cols-6 gap-4'>
				<div className='bg-black text-white h-[100vh]'>
					<SideBar />
				</div>
				<div className='col-span-5 mt-16'>
					<div className='flex justify-between items-center'>
						<h2 className='text-3xl font-bold ml-4'>Expenses for Groceries</h2>
						<p className='text-2xl font-bold mr-8 text-green-500'>
							Total : {CURRENCIES.NAIRA}
							{formatNumberWithCommas(4420294)}
						</p>
					</div>
					<div>
						<Expense narration='Beverages' amount={3000} />
						<Expense narration='Fuel' amount={2000} />
						<Expense narration='Maggi' amount={250} />
						<Expense narration='PS5' amount={345000} />
						<Expense narration='Airpods' amount={32000} />
						<Expense narration='Phone' amount={30100} />
					</div>
				</div>
			</div>
		</BasePageLayout>
	);
};

export default ExpensesPage;
