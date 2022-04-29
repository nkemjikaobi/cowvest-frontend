import BasePageLayout from 'components/BasePageLayout';
import SideBar from 'components/SideBar';
import React, { useContext, useState } from 'react';
import AuthContext from 'context/auth/AuthContext';
import { ImSpinner9 } from 'react-icons/im';
import { useEffect } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/router';
import History from 'components/History';
import formatNumberWithCommas from 'helpers/formatNumberWithCommas';
import { CURRENCIES } from 'Constants';

const HistoryPage = () => {
	const authContext = useContext(AuthContext);
	const { transactionHistory, loading, getTransactionHistory } = authContext;
	const router = useRouter();

	const [credit, setCredit] = useState<any>();
	const [debit, setDebit] = useState<any>();

	useEffect(() => {
		if (transactionHistory.length === 0) {
			getTransactionHistory();
		}
		//eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (transactionHistory.length !== 0) {
			const debit = transactionHistory.filter(
				(history: any) => history.type === 'debit'
			);
			const credit = transactionHistory.filter(
				(history: any) => history.type === 'credit'
			);

			const initialValue = 0;
			const debitCount = debit.reduce(
				(previousValue: any, currentValue: any) =>
					parseInt(previousValue) + parseInt(currentValue.amount),
				initialValue
			);
			const creditCount = credit.reduce(
				(previousValue: any, currentValue: any) =>
					parseInt(previousValue) + parseInt(currentValue.amount),
				initialValue
			);

			setDebit(debitCount);
			setCredit(creditCount);
		}
		//eslint-disable-next-line
	}, [transactionHistory]);

	return (
		<BasePageLayout title='Expenses'>
			<div className='grid grid-cols-6 gap-4'>
				<div className='hidden md:block md:bg-black md:text-white md:h-[300vh]'>
					<SideBar />
				</div>

				<div className='col-span-5 mt-16'>
					<div className='block md:hidden'>
						<AiOutlineArrowLeft
							className='text-2xl ml-8'
							onClick={() => router.push('/dashboard')}
						/>
					</div>
					<div className='flex justify-between items-center mr-8'>
						<h2 className='text-3xl font-bold ml-4'>Transaction History</h2>
						<p className='text-green-500'>
							Total Credit: {CURRENCIES.NAIRA}{' '}
							{credit && formatNumberWithCommas(credit)}
						</p>
						<p className='text-red-500'>
							Total Debit: {CURRENCIES.NAIRA}{' '}
							{debit && formatNumberWithCommas(debit)}
						</p>
					</div>
					<div className='ml-4 md:ml-0'>
						{loading ? (
							<div>
								<ImSpinner9 className='animate-spin h-5 w-5 mr-3' />
								Fetching transaction history...
							</div>
						) : transactionHistory.length === 0 ? (
							<div className='text-base mt-8 ml-4'>
								No transaction history found.
							</div>
						) : (
							transactionHistory &&
							transactionHistory.map((history: any) => (
								<History history={history} key={history._id} />
							))
						)}
					</div>
				</div>
			</div>
		</BasePageLayout>
	);
};

export default HistoryPage;
