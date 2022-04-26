import Link from 'next/link';
import React from 'react'
import { FaUsers } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { useRouter } from 'next/router';
import { GiMoneyStack, GiTakeMyMoney } from 'react-icons/gi';

const SideBar = () => {
    const router = useRouter();
  return (
		<div className='px-7 py-24'>
			<Link href='/dashboard'>
				<a href='#' className='text-2xl font-bold'>
					CowVest
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
			<Link href='/dashboard/expenses'>
				<a
					href='#'
					className={`flex items-center mt-16 hover:text-[#498feb] cursor-pointer ${
						router.pathname === '/dashboard/expenses' && 'text-[#498feb]'
					}`}
				>
					<GiMoneyStack className='text-3xl mr-4' /> Expenses
				</a>
			</Link>
			<button className='flex items-center mt-16 hover:text-[#498feb] cursor-pointer'>
				<MdLogout className='text-3xl mr-4' /> Logout
			</button>
		</div>
	);
}

export default SideBar