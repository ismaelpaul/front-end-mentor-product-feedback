import { useEffect, useState } from 'react';
import FeedbackCard from './FeedbackCard';
import {
	getProductRequest,
	getProductRequests,
	selectedSortingCategory,
	selectedSortingOption,
} from '../../redux/features/productRequests/productRequestsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import FeedbackEmpty from './FeedbackEmpty';
import { ProductRequests } from '../../interfaces/IProductRequests';
import { useNavigate } from 'react-router-dom';

const FeedbackList = () => {
	const [hoveringFeedback, setHoveringFeedback] = useState(-1);

	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();

	const { productRequests } = useSelector(
		(state: RootState) => state.productRequests
	);

	const sortingOption = useSelector(selectedSortingOption);

	const sortingCategory = useSelector(selectedSortingCategory);

	const getSingleRequest = async (id: string) => {
		const productRequest = await dispatch(getProductRequest(id));

		navigate(`/product-requests/${productRequest.payload._id}`);
	};

	const onMouseOver = (index: number) => {
		setHoveringFeedback(index);
	};
	const onMouseLeave = () => {
		setHoveringFeedback(-1);
	};

	useEffect(() => {
		dispatch(getProductRequests({ sortingOption, category: sortingCategory }));
	}, [sortingOption, sortingCategory]);

	return (
		<main className="my-8 mx-6 tablet:mx-10 laptop:mx-0">
			{productRequests.length === 0 && <FeedbackEmpty />}
			<section className="flex flex-col gap-4">
				{productRequests.map(
					(singleRequest: ProductRequests, index: number) => {
						return (
							<article
								key={singleRequest._id}
								onClick={() => {
									if (singleRequest._id) {
										getSingleRequest(singleRequest._id);
									}
								}}
								onMouseOver={() => {
									onMouseOver(index);
								}}
								onMouseOut={onMouseLeave}
								className="cursor-pointer"
							>
								<FeedbackCard
									singleRequest={singleRequest}
									hoveringFeedback={hoveringFeedback}
									index={index}
								/>
							</article>
						);
					}
				)}
			</section>
		</main>
	);
};

export default FeedbackList;
