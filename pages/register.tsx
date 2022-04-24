import BasePageLayout from 'components/BasePageLayout';
import type { NextPage } from 'next';
import Link from 'next/link';
import { GiMoneyStack } from 'react-icons/gi';
import { useRouter } from 'next/router';
import { BsArrowRight } from 'react-icons/bs';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Register: NextPage = () => {
	const router = useRouter();

	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [passwordConfirm, setPasswordConfirm] = useState<string>('');
	const [user, setUser] = useState({
		first_name: '',
		last_name: '',
		username: '',
		password: '',
		email: '',
	});

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		//Validation
		const hasEmptyFields = Object.values(user).some(element => element === '');

		if (hasEmptyFields) {
			return toast.error('Please fill in all fields');
		}
		if (user.password !== passwordConfirm) {
			return toast.error('Passwords do not match!');
		}
	};
	return (
		<BasePageLayout title='Register'>
			<Toaster position='top-right' />
			<nav className='flex items-center justify-between mt-12 px-5 md:px-20'>
				<div
					className='flex items-center cursor-pointer hover:text-blue-500'
					onClick={() => router.push('/')}
				>
					<GiMoneyStack className='text-3xl md:text-4xl' />
					<h3 className='ml-4 text-2xl md:text-3xl font-bold'>CowVest</h3>
				</div>
				<ul className='flex items-center justify-between w-1/8'>
					<li className='text-base md:text-xl hover:text-blue-500'>
						<Link href='/register'>
							<a href='#'>Register</a>
						</Link>
					</li>
				</ul>
			</nav>
			<div className='container mx-auto text-center'>
				<h1 className='uppercase text-3xl md:text-5xl font-extrabold mb-4 mt-32'>
					Welcome
				</h1>
				<h4 className='font-bold mb-6 text-sm md:text-base'>
					Create your account
				</h4>
				<div>
					<input
						className='bg-gray-200 mb-8 p-5 border border-gray-300 text-black rounded-md w-1/3 focus:border-black focus:outline-black'
						type='text'
						placeholder='firstname'
						name='first_name'
						onChange={handleChange}
					/>
				</div>
				<div>
					<input
						className='bg-gray-200 p-5 mb-8 border border-gray-300 text-black rounded-md w-1/3 focus:border-black focus:outline-black'
						type='text'
						placeholder='lastname'
						name='last_name'
						onChange={handleChange}
					/>
				</div>
				<div>
					<input
						className='bg-gray-200 p-5 mb-8 border border-gray-300 text-black rounded-md w-1/3 focus:border-black focus:outline-black'
						type='text'
						placeholder='username'
						name='username'
						onChange={handleChange}
					/>
				</div>
				<div>
					<input
						className='bg-gray-200 p-5 border border-gray-300 text-black rounded-md w-1/3 focus:border-black focus:outline-black'
						type='email'
						placeholder='email'
						name='email'
						onChange={handleChange}
					/>
				</div>
				<div className='relative'>
					<input
						className='bg-gray-200 p-5 border border-gray-300 text-black rounded-md w-1/3 focus:border-black focus:outline-black my-5'
						type={`${showPassword ? 'text' : 'password'}`}
						placeholder='password'
						name='password'
						onChange={handleChange}
					/>
					{showPassword ? (
						<AiOutlineEyeInvisible
							className='absolute top-10 left-[950px] md:right-32  text-2xl text-black  cursor-pointer'
							onClick={() => setShowPassword(false)}
						/>
					) : (
						<AiOutlineEye
							className='absolute top-10 left-[950px] md:right-32  text-2xl text-black  cursor-pointer'
							onClick={() => setShowPassword(true)}
						/>
					)}
				</div>
				<div className='relative'>
					<input
						className='bg-gray-200 p-5 border border-gray-300 text-black rounded-md w-1/3 focus:border-black focus:outline-black my-5'
						type={`${showPassword ? 'text' : 'password'}`}
						placeholder='confirm password'
						name='password_confirm'
						onChange={e => setPasswordConfirm(e.target.value)}
					/>
					{showPassword ? (
						<AiOutlineEyeInvisible
							className='absolute top-10 left-[950px] md:right-32  text-2xl text-black  cursor-pointer'
							onClick={() => setShowPassword(false)}
						/>
					) : (
						<AiOutlineEye
							className='absolute top-10 left-[950px] md:right-32  text-2xl text-black  cursor-pointer'
							onClick={() => setShowPassword(true)}
						/>
					)}
				</div>
				<div className='flex justify-center'>
					<Link href='/'>
						<a className='bg-black flex items-center justify-center p-5 w-1/3 rounded-md text-white mt-4 hover:bg-blue-500 hover:text-white hover:border hover:border-black'>
							Sign In <BsArrowRight className='ml-4' />
						</a>
					</Link>
				</div>
				<div className='flex justify-center'>
					<button
						onClick={e => handleSubmit(e)}
						className='bg-white flex items-center justify-center p-5 w-1/3 border border-black rounded-md text-black my-5 hover:bg-blue-500 hover:text-white '
					>
						Create Account
					</button>
				</div>
			</div>
		</BasePageLayout>
	);
};

export default Register;
