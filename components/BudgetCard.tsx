import { CURRENCIES } from 'Constants';
import formatNumberWithCommas from 'helpers/formatNumberWithCommas';
import React from 'react';
import { GiMoneyStack } from 'react-icons/gi';
import ProgressBar from '@ramonak/react-progress-bar';

const BudgetCard = ({ name, amount, progress, setAddExpense }: any) => {
	return (
		<div className='bg-black drop-shadow-md rounded-lg p-5'>
			<div className='flex justify-between items-center'>
				<p>{name}</p>
				<GiMoneyStack className='text-4xl' />
			</div>

			<p className='text-4xl text-gray-500 my-4'>
				{CURRENCIES.NAIRA}
				{amount ? formatNumberWithCommas(amount) : 0}
			</p>
			<div>
				<ProgressBar
					completed={progress}
					className='mb-4'
					baseBgColor='#0F172B'
				/>
			</div>
			<div>
				<div className='mb-4 flex justify-between items-center'>
					<p>2022-12-13 - 2011-02-09</p>
					<button className='border bg-green-500 border-black px-5 py-3 rounded-lg hover:bg-green-600'>
						Active
					</button>
				</div>
				<hr className='mb-4' />
				<div className='flex justify-between items-center'>
					<button
						className='border bg-purple-900 border-black px-5 py-3 rounded-lg hover:bg-blue-900'
						onClick={() => setAddExpense(true)}
					>
						Add Expense
					</button>
					<button className='border bg-purple-900 border-black px-5 py-3 rounded-lg hover:bg-blue-900'>
						View Expenses
					</button>
				</div>
			</div>
		</div>
	);
};

export default BudgetCard;
