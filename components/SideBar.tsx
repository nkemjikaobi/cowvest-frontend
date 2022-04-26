import Link from 'next/link';
import React from 'react'
import { RiDashboardLine } from "react-icons/ri";
import { FaUsers } from 'react-icons/fa';
import { ImUsers } from 'react-icons/im';
import { MdLogout } from 'react-icons/md';
import { useRouter } from 'next/router';

const SideBar = () => {
    const router = useRouter();
  return (
		<div className='px-7 py-24'>
			<Link href='/dashboard'>
				<a href='#' className='text-2xl font-bold'>
					CowVest
				</a>
			</Link>
			<Link href='#'>
				<a
					href='#'
					className={`flex items-center mt-16 hover:text-[#498feb] cursor-pointer ${
						router.pathname === '/admin' && 'text-[#498feb]'
					}`}
				>
					<RiDashboardLine className='text-3xl mr-4' /> Manage
				</a>
			</Link>
			<Link href='#'>
				<a
					href='#'
					className={`flex items-center mt-16 hover:text-[#498feb] cursor-pointer ${
						router.pathname === '/admin/contestants' && 'text-[#498feb]'
					}`}
				>
					<ImUsers className='text-3xl mr-4' /> Budgets
				</a>
			</Link>
			<Link href='#'>
				<a
					href='#'
					className={`flex items-center mt-16 hover:text-[#498feb] cursor-pointer ${
						router.pathname === '/admin/users' && 'text-[#498feb]'
					}`}
				>
					<FaUsers className='text-3xl mr-4' /> Transactions
				</a>
			</Link>
			<button
				className='flex items-center mt-16 hover:text-[#498feb] cursor-pointer'
			>
				<MdLogout className='text-3xl mr-4' /> Logout
			</button>
		</div>
	);
}

export default SideBar