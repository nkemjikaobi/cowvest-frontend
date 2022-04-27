import { CURRENCIES } from 'Constants';
import formatNumberWithCommas from 'helpers/formatNumberWithCommas';
import React from 'react';
import { GiMoneyStack } from 'react-icons/gi';
import ProgressBar from '@ramonak/react-progress-bar';
import { useRouter } from 'next/router';
import Moment from 'react-moment';
import 'moment-timezone';

const BudgetCard = ({ setAddExpense, budget }: any) => {
	const router = useRouter();
	return (
		<div className='bg-black drop-shadow-md rounded-lg p-5'>
			<div className='flex justify-between items-center'>
				<p>{budget.name}</p>
				<GiMoneyStack className='text-4xl' />
			</div>

			<p className='text-4xl text-gray-500 my-4'>
				{CURRENCIES.NAIRA}
				{budget.max_spending ? formatNumberWithCommas(budget.max_spending) : 0}
			</p>
			<div>
				<ProgressBar completed={43} className='mb-4' baseBgColor='#0F172B' />
			</div>
			<div>
				<div className='mb-4 flex justify-between items-center'>
					<p>
						<Moment format='MMM Do YYYY' date={budget.start_date} /> - {''}
						<Moment format='MMM Do YYYY' date={budget.end_date} />
					</p>
					{budget.hasExpired ? (
						<button className='border bg-red-500 border-black px-5 py-3 rounded-lg hover:bg-green-600'>
							Expired
						</button>
					) : (
						<button className='border bg-green-500 border-black px-5 py-3 rounded-lg hover:bg-green-600'>
							Active
						</button>
					)}
				</div>
				<hr className='mb-4' />
				<div className='flex justify-between items-center'>
					<button
						className='border bg-purple-900 border-black px-5 py-3 rounded-lg hover:bg-blue-900'
						onClick={() => setAddExpense(true)}
					>
						Add Expense
					</button>
					<button
						className='border bg-purple-900 border-black px-5 py-3 rounded-lg hover:bg-blue-900'
						onClick={() => router.push('/dashboard/expenses')}
					>
						View Expenses
					</button>
				</div>
			</div>
		</div>
	);
};

export default BudgetCard;
