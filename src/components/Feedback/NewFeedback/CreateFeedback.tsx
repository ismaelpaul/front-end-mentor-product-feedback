import { ZodType, z } from 'zod';
import Button from '../../Button/Button';
import Card from '../../Card/Card';
import NewFeedback from '../../SVGComponents/NewFeedback';
import FeedbackForm from '../FeedbackForm';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch, useSelector } from 'react-redux';
import {
	SET_SELECTED_CATEGORY,
	addProductRequest,
	selectedCategoryForm,
} from '../../../redux/features/productRequests/productRequestsSlice';
import { ProductRequests } from '../../../interfaces/IProductRequests';
import { AppDispatch } from '../../../redux/store';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const CreateFeedback = () => {
	const cardClass = 'bg-white font-jost rounded-lg mt-14';
	const buttonTextAdd = 'Add Feedback';
	const buttonTextCancel = 'Cancel';
	const buttonClass =
		'text-white-smoke text-subtitleMobile py-2.5 font-semiBold rounded-lg w-full tablet:text-text14px  tablet:w-fit tablet:px-4 tablet:py-3';

	const selectedCategory = useSelector(selectedCategoryForm);

	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();

	const schema: ZodType<ProductRequests> = z.object({
		title: z.string().min(3).max(60),
		category: z.string(),
		description: z.string().min(5).max(250),
		upvotes: z.number(),
		status: z.string(),
	});

	const { register, handleSubmit, reset } = useForm<ProductRequests>({
		resolver: zodResolver(schema),
		defaultValues: {
			title: '',
			category: '',
			description: '',
			upvotes: 0,
			status: 'suggestion',
		},
	});

	const submitData = async (data: ProductRequests) => {
		data.category = selectedCategory.value;
		dispatch(SET_SELECTED_CATEGORY({ label: 'Feature', value: 'feature' }));
		await dispatch(addProductRequest(data));
		reset();
		navigate('/');
	};

	const onSubmit = handleSubmit(submitData);

	return (
		<main className="mx-6 tablet:mx-[7.125rem] tablet:mb-10">
			<Card cardClass={cardClass}>
				<div className="p-6 pt-10">
					<div className="absolute top-[5.5rem] left-14 tablet:top-28 tablet:left-[8.5rem]">
						<NewFeedback />
					</div>
					<h1 className="text-dark-slate-blue text-title18px font-bold tracking-tightier tablet:text-title24px">
						Create new Feedback
					</h1>
					<FeedbackForm register={register} onSubmit={onSubmit} />
					<div className="flex flex-col gap-4 mt-10 tablet:flex-row-reverse">
						<Button
							type={'submit'}
							form={'feedback-form'}
							buttonClass={`bg-purple ${buttonClass}`}
							buttonText={buttonTextAdd}
						/>
						<Link to={'/'}>
							<Button
								buttonClass={`bg-dark-slate-blue ${buttonClass}`}
								buttonText={buttonTextCancel}
							/>
						</Link>
					</div>
				</div>
			</Card>
		</main>
	);
};

export default CreateFeedback;
