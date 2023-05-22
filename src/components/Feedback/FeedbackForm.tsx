import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { ProductRequests } from '../../interfaces/IProductRequests';
import DropdownFeedback from '../Dropdown/DropdownFeedback';
import { useSelector } from 'react-redux';
import { selectOptionForm } from '../../redux/features/productRequests/productRequestsSlice';
import { UseFormRegister } from 'react-hook-form';

type FeedbackFormProps = {
	singleRequest?: ProductRequests;
	register: UseFormRegister<ProductRequests>;
	onSubmit?: (
		e?: BaseSyntheticEvent<object, any, any> | undefined
	) => Promise<void>;
};

const FeedbackForm = ({
	singleRequest,
	register,
	onSubmit,
}: FeedbackFormProps) => {
	const categoryOptions = [
		{ label: 'Feature', value: 'feature' },
		{ label: 'UI', value: 'ui' },
		{ label: 'UX', value: 'ux' },
		{ label: 'Enhancement', value: 'enhancement' },
		{ label: 'Bug', value: 'bug' },
	];

	const selectedOption = useSelector(selectOptionForm);

	return (
		<div>
			<form id="feedback-form" onSubmit={onSubmit}>
				<div className="text-subtitleMobile mt-6">
					<label className="text-dark-slate-blue font-bold tracking-tight mb-1">
						Feedback Title
					</label>
					<p className="text-light-slate-blue font-regular mb-4">
						Add a short, descriptive headline
					</p>
					<input
						{...register('title')}
						name="title"
						type="text"
						value={singleRequest?.title}
						className=" bg-white-ghost text-dark-slate-blue text-subtitleMobile content-center
            rounded-md resize-none w-full h-12 pl-4 leading-10 outline-none focus:outline-blue outline-1"
					/>
				</div>
				<div className="text-subtitleMobile mt-6">
					<label className="text-dark-slate-blue font-bold tracking-tight mb-1">
						Category
					</label>
					<p className="text-light-slate-blue font-regular mb-4">
						Choose a category for your feedback
					</p>
					<DropdownFeedback options={categoryOptions} />
					<input
						{...register('category')}
						name="category"
						type="hidden"
						value={selectedOption.value}
					/>
				</div>
				<div className="text-subtitleMobile mt-6">
					<label className="text-dark-slate-blue font-bold tracking-tight mb-1">
						Feedback Detail
					</label>
					<p className="text-light-slate-blue font-regular mb-4">
						Include any specific comments on what should be improved, added,
						etc.
					</p>
					<textarea
						{...register('description')}
						name="description"
						className="bg-white-ghost text-dark-slate-blue text-text15px content-center
            rounded-md resize-none w-full h-28 pt-4 pl-5 leading-10 outline-none focus:outline-blue outline-1"
					/>
				</div>
			</form>
		</div>
	);
};

export default FeedbackForm;
