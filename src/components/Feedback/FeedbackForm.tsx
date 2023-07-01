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
};

const FeedbackForm = ({
	register,
	onSubmit,
	watchedValues,
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
						className=" bg-white-ghost text-dark-slate-blue text-subtitleMobile content-center
            rounded-md resize-none w-full h-12 pl-4 leading-10 outline-none focus:outline-blue outline-1"
					/>
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
						className="bg-white-ghost text-dark-slate-blue text-subtitleMobile content-center
            rounded-md resize-none w-full h-28 pt-4 px-5 leading-5 outline-none focus:outline-blue outline-1"
						defaultValue={watchedValues?.description || ''}
					/>
				</div>
			</form>
		</div>
	);
};

export default FeedbackForm;
