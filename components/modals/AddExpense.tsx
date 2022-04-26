import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';

const AddExpense = ({ setAddExpense }: any) => {
	const [expense, setExpense] = useState<any>({
		narration: '',
		amount: '',
		budget: '',
	});

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setExpense({ ...expense, [name]: value });
	};
	return (
		<div className='text-white relative bg-black rounded-lg p-10'>
			<div className='absolute right-5 top-10 cursor-pointer'>
				<AiOutlineClose onClick={() => setAddExpense(false)} />
			</div>
			<div className='flex flex-col justify-center items-center'>
				<h4 className='mb-4 text-2xl tablet:text-xl font-bold mt-8'>
					Add Expense
				</h4>
				<div>
					<input
						type='text'
						className='p-5 text-black border border-gray-300 rounded-md  mb-4 focus:outline-none'
						placeholder='2 bags of rice'
						name='narration'
						onChange={e => handleChange(e)}
					/>
				</div>
				<div>
					<input
						type='number'
						className='p-5 text-black border border-gray-300 rounded-md  mb-4 focus:outline-none'
						placeholder='12,500'
						name='amount'
						onChange={e => handleChange(e)}
					/>
				</div>
				<button className='flex items-center mb-4 hover:text-blue-900'>
					Add Expense <BsArrowRight className='ml-4' />
				</button>
			</div>
		</div>
	);
};

export default AddExpense;
