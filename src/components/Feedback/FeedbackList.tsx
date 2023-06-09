import { useEffect } from 'react';
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

	useEffect(() => {
		dispatch(getProductRequests({ sortingOption, category: sortingCategory }));
	}, [sortingOption, sortingCategory]);

	return (
		<main className="my-8 mx-6">
			{productRequests.length === 0 && <FeedbackEmpty />}
			<section className="flex flex-col gap-4">
				{productRequests.map((singleRequest: ProductRequests) => {
					return (
						<article
							onClick={() => {
								if (singleRequest._id) {
									getSingleRequest(singleRequest._id);
								}
							}}
						>
							<FeedbackCard singleRequest={singleRequest} />
						</article>
					);
				})}
			</section>
		</main>
	);
};

export default FeedbackList;
