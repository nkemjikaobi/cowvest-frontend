import BasePageLayout from 'components/BasePageLayout';
import type { NextPage } from 'next';
import Link from 'next/link';
import { GiMoneyStack } from 'react-icons/gi';
import { useRouter } from 'next/router';
import { BsArrowRight } from 'react-icons/bs';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useState, useContext, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import AuthContext from 'context/auth/AuthContext';
import { ImSpinner9 } from 'react-icons/im';

const Home: NextPage = () => {
	const router = useRouter();
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const authContext = useContext(AuthContext);
	const { login, loading, message, error, clearErrors, clearMessages } =
		authContext;

	useEffect(() => {
		if (error !== null && Array.isArray(error)) {
			for (let i = 0; i < error.length; i++) {
				toast.error(error[i].msg);
			}
		} else if (error !== null) {
			toast.error(error);
		}
		clearErrors();

		//eslint-disable-next-line
	}, [error]);

	useEffect(() => {
		if (message !== null) {
			toast.success(message);
			clearMessages();
		}
		//eslint-disable-next-line
	}, [message]);

	const [user, setUser] = useState({
		email: '',
		password: '',
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

		await login(user, router);
	};
	return (
		<BasePageLayout title='Cowvest Home Page'>
			<Toaster position='top-right' />
			<nav className='flex items-center justify-between mt-12 px-5 md:px-20'>
				<div
					className='flex items-center cursor-pointer hover:text-blue-500'
					onClick={() => router.push('/')}
				>
					<GiMoneyStack className='text-3xl md:text-4xl' />
					<h3 className='ml-4 text-2xl md:text-3xl font-bold'>CowVest</h3>
				</div>
			</nav>
			<div className='container mx-auto text-center'>
				<h1 className='uppercase text-3xl md:text-5xl font-extrabold mb-4 mt-64'>
					Welcome
				</h1>
				<h4 className='font-bold mb-6 text-sm md:text-base'>
					Sign in to your account
				</h4>
				<div>
					<input
						className='bg-gray-200 p-5 border border-gray-300 text-black rounded-md w-1/3 focus:border-black focus:outline-black'
						type='email'
						placeholder='Email Address'
						name='email'
						onChange={handleChange}
					/>
				</div>
				<div className='relative'>
					<input
						className='bg-gray-200 p-5 border border-gray-300 text-black rounded-md w-1/3 focus:border-black focus:outline-black my-5'
						type={`${showPassword ? 'text' : 'password'}`}
						placeholder='Password'
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
				<div className='flex justify-center'>
					<button
						onClick={e => handleSubmit(e)}
						className='bg-black flex items-center justify-center p-5 w-1/3 rounded-md text-white mt-4 hover:bg-blue-500 hover:text-white hover:border hover:border-black'
					>
						{loading ? (
							<>
								<ImSpinner9 className='animate-spin h-5 w-5 mr-3' />
								Logging in...
							</>
						) : (
							<>
								Sign In <BsArrowRight className='ml-4' />
							</>
						)}
					</button>
				</div>
				<div className='flex justify-center'>
					<Link href='/register'>
						<a className='bg-white flex items-center justify-center p-5 w-1/3 border border-black rounded-md text-black my-5 hover:bg-blue-500 hover:text-white '>
							Create Account
						</a>
					</Link>
				</div>
			</div>
		</BasePageLayout>
	);
};

export default Home;
