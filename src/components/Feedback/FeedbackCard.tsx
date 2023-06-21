import Card from '../Card/Card';
import { ProductRequests } from '../../interfaces/IProductRequests';
import { useLocation } from 'react-router';
import { useCallback } from 'react';
import Upvotes from '../Upvotes/Upvotes';
import CommentCount from '../Comments/CommentsCount';

type FeedbackCardPros = {
	singleRequest: ProductRequests;
};

const FeedbackCard = ({ singleRequest }: FeedbackCardPros) => {
	const location = useLocation();
	const { pathname } = location;

	const status = singleRequest.status;
	const formattedStatus = status.charAt(0).toUpperCase() + status.slice(1);

	const repliesCount = useCallback(() => {
		return (
			singleRequest.comments?.reduce((count, comment) => {
				if (comment.replies?.length !== undefined) {
					return count + comment.replies?.length;
				}
				return count;
			}, 0) || 0
		);
	}, [singleRequest.comments]);

	return (
		<Card cardClass="bg-white font-jost rounded-lg">
			<div
				className={`${
					pathname === '/roadmap' ? 'h-1.5 w-full rounded-t-lg ' : 'hidden'
				}${
					status === 'planned'
						? 'bg-peachy'
						: status === 'in-progress'
						? 'bg-purple'
						: 'bg-light-blue'
				} `}
			></div>
			<div
				className={`p-6  tablet:flex tablet:gap-10 tablet:${
					pathname !== '/roadmap' ? 'p-8' : 'p-5'
				}`}
			>
				<div
					className={`hidden tablet:block tablet:${
						pathname === '/roadmap' ? 'hidden' : ''
					}`}
				>
					<Upvotes singleRequest={singleRequest} />
				</div>
				<div>
					<div
						className={`${
							pathname === '/roadmap'
								? 'flex items-center gap-2 text-light-slate-blue text-subtitleMobile mb-4'
								: 'hidden'
						}`}
					>
						<div
							className={`${
								status === 'planned'
									? 'bg-peachy'
									: status === 'in-progress'
									? 'bg-purple'
									: 'bg-light-blue'
							} h-2 w-2 rounded-full`}
						></div>
						<span>
							{status === 'in-progress'
								? formattedStatus.replace('-', ' ').replace('p', 'P')
								: formattedStatus}
						</span>
					</div>
					<h1 className="text-dark-slate-blue text-subtitleMobile font-bold tracking-tight ">
						{singleRequest.title}
					</h1>
					<p
						className={`text-light-slate-blue text-subtitleMobile font-regular mt-2 ${
							pathname === '/roadmap' ? 'mb-6' : ''
						}`}
					>
						{singleRequest.description}
					</p>
					<div className="bg-white-smoke w-fit rounded-lg mt-2 px-4 py-1">
						<span className="text-blue font-semiBold text-subtitleMobile">
							{singleRequest.category.charAt(0).toUpperCase() +
								singleRequest.category.slice(1)}
						</span>
					</div>
					<div
						className={`hidden tablet:flex tablet:${
							pathname !== '/roadmap' ? 'hidden' : 'tablet:flex'
						} tablet:mt-4`}
					>
						<Upvotes singleRequest={singleRequest} />
						<CommentCount
							singleRequest={singleRequest}
							repliesCount={repliesCount}
						/>
					</div>
				</div>
				<div
					className={`hidden tablet:block tablet:my-auto grow tablet:${
						pathname === '/roadmap' ? 'hidden' : ''
					}`}
				>
					<CommentCount
						singleRequest={singleRequest}
						repliesCount={repliesCount}
					/>
				</div>
				<div className="flex justify-between mt-4 tablet:hidden">
					<Upvotes singleRequest={singleRequest} />
					<CommentCount
						singleRequest={singleRequest}
						repliesCount={repliesCount}
					/>
				</div>
			</div>
		</Card>
	);
};

export default FeedbackCard;
