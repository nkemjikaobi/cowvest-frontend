import BasePageLayout from 'components/BasePageLayout';
import type { NextPage } from 'next';
import Link from 'next/link';
import { GiMoneyStack } from 'react-icons/gi';
import { useRouter } from 'next/router';
import { BsArrowRight } from 'react-icons/bs';
import { useState, useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import AuthContext from 'context/auth/AuthContext';
import { useEffect } from 'react';
import { ImSpinner9 } from 'react-icons/im';

const Register: NextPage = () => {
	const router = useRouter();

	const [passwordConfirm, setPasswordConfirm] = useState<string>('');

	const authContext = useContext(AuthContext);
	const { register, error, clearErrors, message, clearMessages, loading } =
		authContext;

	useEffect(() => {
		if (error !== null && Array.isArray(error)) {
			for (let i = 0; i < error.length; i++) {
				toast.error(error[i].msg);
			}
			clearErrors();
		} else if (error !== null) {
			toast.error(error);
			clearErrors();
		}
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

		register(user, router);
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
					<h3 className='ml-4 text-2xl md:text-3xl font-bold'>MyFinance</h3>
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
						className='bg-gray-200 mb-8 p-5 border border-gray-300 text-black rounded-md w-2/3 md:w-1/3 focus:border-black focus:outline-black'
						type='text'
						placeholder='firstname'
						name='first_name'
						onChange={handleChange}
					/>
				</div>
				<div>
					<input
						className='bg-gray-200 p-5 mb-8 border border-gray-300 text-black rounded-md w-2/3 md:w-1/3 focus:border-black focus:outline-black'
						type='text'
						placeholder='lastname'
						name='last_name'
						onChange={handleChange}
					/>
				</div>
				<div>
					<input
						className='bg-gray-200 p-5 mb-8 border border-gray-300 text-black rounded-md w-2/3 md:w-1/3 focus:border-black focus:outline-black'
						type='text'
						placeholder='username'
						name='username'
						onChange={handleChange}
					/>
				</div>
				<div>
					<input
						className='bg-gray-200 p-5 border border-gray-300 text-black rounded-md w-2/3 md:w-1/3 focus:border-black focus:outline-black'
						type='email'
						placeholder='email'
						name='email'
						onChange={handleChange}
					/>
				</div>
				<div className='relative'>
					<input
						className='bg-gray-200 p-5 border border-gray-300 text-black rounded-md w-2/3 md:w-1/3 focus:border-black focus:outline-black my-5'
						type='password'
						placeholder='password'
						name='password'
						onChange={handleChange}
					/>
				</div>
				<div className='relative'>
					<input
						className='bg-gray-200 p-5 border border-gray-300 text-black rounded-md w-2/3 md:w-1/3 focus:border-black focus:outline-black my-5'
						type='password'
						placeholder='confirm password'
						name='password_confirm'
						onChange={e => setPasswordConfirm(e.target.value)}
					/>
				</div>
				<div className='flex justify-center'>
					<button
						onClick={e => handleSubmit(e)}
						className='bg-white flex items-center justify-center p-5 w-2/3 md:w-1/3 border border-black rounded-md text-black my-5 hover:bg-blue-500 hover:text-white '
					>
						{loading ? (
							<>
								<ImSpinner9 className='animate-spin h-5 w-5 mr-3' />
								Creating user...
							</>
						) : (
							<>
								Create Account <BsArrowRight className='ml-4' />
							</>
						)}
					</button>
				</div>
				<div className='flex justify-center'>
					<Link href='/'>
						<a className='bg-black flex mb-4 items-center justify-center p-5 w-2/3 md:w-1/3 rounded-md text-white mt-4 hover:bg-blue-500 hover:text-white hover:border hover:border-black'>
							Sign In
						</a>
					</Link>
				</div>
			</div>
		</BasePageLayout>
	);
};

export default Register;
