import { useDispatch, useSelector } from 'react-redux';
import Card from '../../Card/Card';
import EditFeedbackIcon from '../../SVGComponents/EditFeedback';
import { AppDispatch, RootState } from '../../../redux/store';
import FeedbackForm from '../FeedbackForm';
import { useEffect } from 'react';
import { ZodType, z } from 'zod';
import { ProductRequests } from '../../../interfaces/IProductRequests';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
	SET_SELECTED_CATEGORY,
	SET_SELECTED_STATUS,
	deleteProductRequest,
	selectedCategoryForm,
	selectedStatusForm,
	updateProductRequest,
} from '../../../redux/features/productRequests/productRequestsSlice';
import Button from '../../Button/Button';
import { Link, useNavigate } from 'react-router-dom';

const EditFeedback = () => {
	const singleRequest = useSelector(
		(state: RootState) => state.productRequests.singleRequest
	);

	const cardClass = 'bg-white font-jost rounded-lg mt-14';
	const buttonClass =
		'text-white-smoke text-subtitleMobile font-semiBold rounded-lg w-full h-10';

	const buttonTextSave = 'Save Changes';
	const buttonTextCancel = 'Cancel';
	const buttonTextDelete = 'Delete';

	const selectedCategory = useSelector(selectedCategoryForm);
	const selectedStatus = useSelector(selectedStatusForm);

	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();

	const schema: ZodType<ProductRequests> = z.object({
		title: z.string().min(3).max(60),
		category: z.string(),
		description: z.string().min(5).max(250),
		upvotes: z.number(),
		status: z.string(),
	});

	const { register, handleSubmit, watch } = useForm<ProductRequests>({
		resolver: zodResolver(schema),
		defaultValues: singleRequest ? singleRequest : {},
	});

	const watchedValues = watch();

	const categoryUpperCase =
		singleRequest.category.charAt(0).toUpperCase() +
		singleRequest.category.slice(1);

	const statusUpperCase =
		singleRequest.status.charAt(0).toUpperCase() +
		singleRequest.status.slice(1);

	const handleDelete = async (id: string) => {
		await dispatch(deleteProductRequest(id));
		navigate('/');
	};

	const submitData = async (data: ProductRequests) => {
		data.category = selectedCategory.value;
		data.status = selectedStatus.value;

		const updatedData: Partial<ProductRequests> = {};

		if (data.title !== singleRequest.title) {
			updatedData.title = data.title;
		}

		if (data.category !== singleRequest.category) {
			updatedData.category = data.category;
		}

		if (data.description !== singleRequest.description) {
			updatedData.description = data.description;
		}

		if (data.status !== singleRequest.status) {
			updatedData.status = data.status;
		}
		const convertedData: ProductRequests = updatedData as ProductRequests;

		if (singleRequest._id) {
			await dispatch(
				updateProductRequest({
					id: singleRequest._id,
					updatedRequest: convertedData,
				})
			);
		}

		navigate('/');
	};

	const onSubmit = handleSubmit(submitData);

	useEffect(() => {
		if (singleRequest) {
			dispatch(
				SET_SELECTED_CATEGORY({
					label: categoryUpperCase,
					value: singleRequest.category,
				})
			);
			dispatch(
				SET_SELECTED_STATUS({
					label: statusUpperCase,
					value: singleRequest.status,
				})
			);
		}
	}, [singleRequest]);

	return (
		<main className="mx-6 tablet:mx-[7.125rem] tablet:mb-10 laptop:mx-[28.125rem]">
			<Card cardClass={cardClass}>
				<div className="px-6 py-10 laptop:px-[2.625rem]">
					<div className="absolute top-[5.5rem] left-14 tablet:top-28 tablet:left-[8.5rem] laptop:left-12 laptop:top-[8.5rem] laptop:ml-[28.125rem]">
						<EditFeedbackIcon />
					</div>
					<h1 className="text-dark-slate-blue text-title18px font-bold tracking-tightier mb-6 tablet:text-title24px tablet:mb-10 laptop:mb-[4.688rem]">
						Editing '{singleRequest.title}'
					</h1>
					<FeedbackForm
						singleRequest={singleRequest}
						register={register}
						watchedValues={watchedValues}
						onSubmit={onSubmit}
					/>
					<div className="flex flex-col gap-4 mt-10 tablet:flex-row tablet:justify-between">
						<Button
							buttonClass={`bg-red tablet:w-[5.8rem] ${buttonClass}`}
							buttonText={buttonTextDelete}
							onClick={() => {
								if (singleRequest._id) {
									handleDelete(singleRequest._id);
								}
							}}
						/>
						<div className="tablet:flex tablet:gap-4">
							<Link
								to={`/product-requests/${singleRequest._id}`}
								className="tablet:text-right"
							>
								<Button
									buttonClass={`bg-dark-slate-blue tablet:w-[5.8rem] ${buttonClass}`}
									buttonText={buttonTextCancel}
								/>
							</Link>
							<Button
								type={'submit'}
								form={'feedback-form'}
								buttonClass={`bg-purple tablet:w-36 ${buttonClass}`}
								buttonText={buttonTextSave}
							/>
						</div>
					</div>
					<div className="flex flex-col gap-4 mt-10 tablet:hidden">
						<Button
							buttonClass={`bg-purple tablet:w-36 ${buttonClass}`}
							buttonText={buttonTextSave}
						/>
						<Link to={`/product-requests/${singleRequest._id}`}>
							<Button
								buttonClass={`bg-dark-slate-blue  ${buttonClass}`}
								buttonText={buttonTextCancel}
							/>
						</Link>
						<Button
							buttonClass={`bg-red ${buttonClass}`}
							buttonText={buttonTextDelete}
							onClick={() => {
								if (singleRequest._id) {
									handleDelete(singleRequest._id);
								}
							}}
						/>
					</div>
				</div>
			</Card>
		</main>
	);
};

export default EditFeedback;
