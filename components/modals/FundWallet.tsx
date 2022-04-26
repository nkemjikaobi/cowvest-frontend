import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';

const FundWallet = ({ setFundWallet }: any) => {
	const [amount, setAmount] = useState<any>();
	return (
		<div className='text-white relative bg-black rounded-lg p-10'>
			<div className='absolute right-5 top-10 cursor-pointer'>
				<AiOutlineClose onClick={() => setFundWallet(false)} />
			</div>
			<div className='flex flex-col justify-center items-center'>
				<h4 className='mb-4 text-base tablet:text-xl font-bold mt-8'>
					Fund Account
				</h4>
				<div>
					<input
						type='number'
						className='p-5 text-black border border-gray-300 rounded-md  mb-4 focus:outline-none'
						onChange={e => setAmount(e.target.value)}
						value={amount}
						placeholder='30,000'
					/>
				</div>
				<button className='flex items-center mb-4 hover:text-blue-900'>
					Fund Account <BsArrowRight className='ml-4' />
				</button>
			</div>
		</div>
	);
};

export default FundWallet;
