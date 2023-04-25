import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { getProductRequests } from '../../redux/features/productRequestsSlice';
import Card from '../Card/Card';
import ArrowUp from '../SVGComponents/ArrowUp';
import Comments from '../SVGComponents/Comments';
import { ProductRequests } from '../../interfaces/IProductRequests';
import FeedbackEmpty from './FeedbackEmpty';

const FeedbackCard = () => {
	const dispatch = useDispatch<AppDispatch>();

	const { productRequests } = useSelector(
		(state: RootState) => state.productRequests
	);

	useEffect(() => {
		dispatch(getProductRequests());
	}, []);

	return (
		<article className="flex flex-col gap-4 mx-6 mt-8 mb-14">
			{productRequests.length === 0 && <FeedbackEmpty />}
			{productRequests.map((request: ProductRequests, index) => {
				return (
					<Card key={index} cardClass="w-full bg-white font-jost rounded-lg ">
						<div className=" p-6">
							<div>
								<h1 className="text-dark-slate-blue text-subtitleMobile font-bold tracking-tight ">
									{request.title}
								</h1>
								<p className="text-light-slate-blue text-subtitleMobile font-regular mt-2">
									{request.description}
								</p>
								<div className="bg-white-smoke w-fit rounded-lg mt-2">
									<span className="text-blue font-semiBold text-subtitleMobile px-4 py-2">
										{request.category.charAt(0).toUpperCase() +
											request.category.slice(1)}
									</span>
								</div>
							</div>
							<div className="flex justify-between mt-4">
								<div className="flex items-center gap-2.5 bg-white-smoke w-fit px-4 py-2 rounded-lg">
									<ArrowUp />
									<span className="text-dark-slate-blue text-subtitleMobile font-semiBold tracking-tight">
										{request.upvotes}
									</span>
								</div>
								<div className="flex items-center gap-2.5">
									<Comments />
									<span className="text-dark-slate-blue text-subtitleMobile font-semiBold">
										{request.comments ? request.comments.length : 0}
									</span>
								</div>
							</div>
						</div>
					</Card>
				);
			})}
		</article>
	);
};

export default FeedbackCard;
