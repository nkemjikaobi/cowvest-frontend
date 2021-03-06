import Link from 'next/link';
import React, { useContext } from 'react';
import { MdLogout } from 'react-icons/md';
import { useRouter } from 'next/router';
import { GiMoneyStack, GiTakeMyMoney } from 'react-icons/gi';
import { BsClockHistory } from 'react-icons/bs';
import AuthContext from 'context/auth/AuthContext';

const SideBar = () => {
	const router = useRouter();

	const authContext = useContext(AuthContext);
	const { logout } = authContext;
	return (
		<div className='px-7 py-24'>
			<Link href='/dashboard'>
				<a href='#' className='text-2xl font-bold'>
					MyFinance
				</a>
			</Link>
			<Link href='/dashboard'>
				<a
					href='#'
					className={`flex items-center mt-16 hover:text-[#498feb] cursor-pointer ${
						router.pathname === '/dashboard' && 'text-[#498feb]'
					}`}
				>
					<GiTakeMyMoney className='text-3xl mr-4' /> Budgets
				</a>
			</Link>
			<Link href='#'>
				<a
					href='#'
					className={`flex items-center mt-16 hover:text-[#498feb] cursor-pointer ${
						router.pathname === '/dashboard/expenses' && 'text-[#498feb]'
					}`}
				>
					<GiMoneyStack className='text-3xl mr-4' /> Expenses
				</a>
			</Link>
			<Link href='/dashboard/history'>
				<a
					href='#'
					className={`flex items-center mt-16 hover:text-[#498feb] cursor-pointer ${
						router.pathname === '/dashboard/history' && 'text-[#498feb]'
					}`}
				>
					<BsClockHistory className='text-3xl mr-4' /> History
				</a>
			</Link>
			<button
				className='flex items-center mt-16 hover:text-[#498feb] cursor-pointer'
				onClick={() => {
					logout(router);
				}}
			>
				<MdLogout className='text-3xl mr-4' /> Logout
			</button>
		</div>
	);
};

export default SideBar;
