import { BaseSyntheticEvent } from 'react';
import { ProductRequests } from '../../interfaces/IProductRequests';
import DropdownFeedback, { Options } from '../Dropdown/DropdownFeedback';
import { useDispatch, useSelector } from 'react-redux';
import {
	SET_SELECTED_CATEGORY,
	SET_SELECTED_STATUS,
	selectedCategoryForm,
	selectedStatusForm,
} from '../../redux/features/productRequests/productRequestsSlice';
import { UseFormRegister } from 'react-hook-form';

type FeedbackFormProps = {
	singleRequest?: ProductRequests;
	register: UseFormRegister<ProductRequests>;
	onSubmit?: (
		e?: BaseSyntheticEvent<object, any, any> | undefined
	) => Promise<void>;
	watchedValues?: ProductRequests;
	errors: Record<string, any>;
};

const FeedbackForm = ({
	register,
	onSubmit,
	watchedValues,
	errors,
}: FeedbackFormProps) => {
	const categoryOptions = [
		{ label: 'Feature', value: 'feature' },
		{ label: 'UI', value: 'ui' },
		{ label: 'UX', value: 'ux' },
		{ label: 'Enhancement', value: 'enhancement' },
		{ label: 'Bug', value: 'bug' },
	];

	const statusOptions = [
		{ label: 'Planned', value: 'planned' },
		{ label: 'Suggestion', value: 'planned' },
		{ label: 'In-progress', value: 'in-progress' },
		{ label: 'Live', value: 'live' },
	];
	const errorClass = 'text-red text-12px mt-1 inline-block';
	const dispatch = useDispatch();

	const selectedCategory = useSelector(selectedCategoryForm);
	const selectedStatus = useSelector(selectedStatusForm);

	const path = window.location.pathname;

	const handleCategorySelect = (option: Options) => {
		dispatch(SET_SELECTED_CATEGORY(option));
	};

	const handleStatusSelect = (option: Options) => {
		dispatch(SET_SELECTED_STATUS(option));
	};

	return (
		<div>
			<form id="feedback-form" onSubmit={onSubmit}>
				<div className="text-subtitleMobile tablet:text-text14px">
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
						defaultValue={watchedValues?.title || ''}
						className={` bg-white-ghost text-dark-slate-blue text-subtitleMobile content-center cursor-pointer
            rounded-md resize-none w-full h-12 pl-4 leading-10 ${
							errors.title ? 'focus:outline-red' : 'focus:outline-blue'
						} outline-1 laptop:text-text15px`}
					/>
					{errors.title && (
						<span className={errorClass}>{errors.title.message}</span>
					)}
				</div>
				<div className="text-subtitleMobile mt-6 tablet:text-text14px">
					<label className="text-dark-slate-blue font-bold tracking-tight mb-1">
						Category
					</label>
					<p className="text-light-slate-blue font-regular mb-4">
						Choose a category for your feedback
					</p>
					<DropdownFeedback
						options={categoryOptions}
						selectedOption={selectedCategory}
						onOptionSelect={handleCategorySelect}
					/>
					<input
						{...register('category')}
						name="category"
						type="hidden"
						value={selectedCategory.value}
					/>
				</div>
				{path === '/edit-feedback' ? (
					<div className="text-subtitleMobile mt-6 tablet:text-text14px">
						<label className="text-dark-slate-blue font-bold tracking-tight mb-1">
							Update Status
						</label>
						<p className="text-light-slate-blue font-regular mb-4">
							Change feature state
						</p>
						<DropdownFeedback
							options={statusOptions}
							selectedOption={selectedStatus}
							onOptionSelect={handleStatusSelect}
						/>
						<input
							{...register('status')}
							name="status"
							type="hidden"
							value={selectedStatus.value}
						/>
					</div>
				) : null}
				<div className="text-subtitleMobile mt-6 tablet:text-text14px">
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
						className={`bg-white-ghost text-dark-slate-blue text-subtitleMobile content-center cursor-pointer
            rounded-md resize-none w-full h-28 pt-4 px-5 leading-5 ${
							errors.description
								? 'focus:outline-red border border-solid border-red'
								: 'focus:outline-blue'
						} outline-1 laptop:text-text15px`}
						defaultValue={watchedValues?.description || ''}
					/>
					{errors.description && (
						<span className={errorClass}>{errors.description.message}</span>
					)}
				</div>
			</form>
		</div>
	);
};

export default FeedbackForm;
