import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateBudget = ({ setCreateBudget }: any) => {
	const [budget, setBudget] = useState<any>({
		name: '',
		max_spending: '',
		start_date: new Date(),
		end_date: new Date(),
		hasExpired: false,
	});

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setBudget({ ...budget, [name]: value });
	};
	return (
		<div className='text-white relative bg-black rounded-lg p-10'>
			<div className='absolute right-5 top-10 cursor-pointer'>
				<AiOutlineClose onClick={() => setCreateBudget(false)} />
			</div>
			<div className='flex flex-col justify-center items-center'>
				<h4 className='mb-4 text-2xl tablet:text-xl font-bold mt-8'>
					Create Budget
				</h4>
				<div>
					<input
						type='text'
						className='p-5 text-black border border-gray-300 rounded-md  mb-4 focus:outline-none'
						placeholder='food stuff'
						name='name'
						onChange={e => handleChange(e)}
					/>
				</div>
				<div>
					<input
						type='number'
						className='p-5 text-black border border-gray-300 rounded-md  mb-4 focus:outline-none'
						placeholder='30,000'
						name='max_spending'
						onChange={e => handleChange(e)}
					/>
				</div>
				<div>
					<DatePicker
						onChange={(date: any) =>
							setBudget({ ...budget, ['start_date']: date })
						}
						minDate={new Date()}
						dateFormat='yyyy-MM-dd'
						showYearDropdown
						scrollableMonthYearDropdown
						className='p-5 text-black border border-gray-300 rounded-md  mb-4 focus:outline-none'
						selected={budget.start_date}
					/>
				</div>
				<div>
					<DatePicker
						onChange={(date: any) =>
							setBudget({ ...budget, ['end_date']: date })
						}
						minDate={new Date()}
						dateFormat='yyyy-MM-dd'
						showYearDropdown
						scrollableMonthYearDropdown
						className='p-5 text-black border border-gray-300 rounded-md  mb-4 focus:outline-none'
						selected={budget.end_date}
					/>
				</div>
				<button className='flex items-center mb-4 hover:text-blue-900'>
					Create Budget <BsArrowRight className='ml-4' />
				</button>
			</div>
		</div>
	);
};

export default CreateBudget;
