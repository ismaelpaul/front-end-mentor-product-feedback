import Card from '../Card/Card';
import ArrowUp from '../SVGComponents/ArrowUp';
import Comments from '../SVGComponents/Comments';
import { ProductRequests } from '../../interfaces/IProductRequests';

type FeedbackCardPros = {
	singleRequest: ProductRequests;
};

const FeedbackCard = ({ singleRequest }: FeedbackCardPros) => {
	const repliesCount = () => {
		return (
			singleRequest.comments?.reduce((count, comment) => {
				if (comment.replies?.length !== undefined) {
					return count + comment.replies?.length;
				}
				return count;
			}, 0) || 0
		);
	};
	return (
		<Card cardClass="bg-white font-jost rounded-lg ">
			<div className=" p-6">
				<div>
					<h1 className="text-dark-slate-blue text-subtitleMobile font-bold tracking-tight ">
						{singleRequest.title}
					</h1>
					<p className="text-light-slate-blue text-subtitleMobile font-regular mt-2">
						{singleRequest.description}
					</p>
					<div className="bg-white-smoke w-fit rounded-lg mt-2">
						<span className="text-blue font-semiBold text-subtitleMobile px-4 py-2">
							{singleRequest.category.charAt(0).toUpperCase() +
								singleRequest.category.slice(1)}
						</span>
					</div>
				</div>
				<div className="flex justify-between mt-4">
					<div className="flex items-center gap-2.5 bg-white-smoke w-fit px-4 py-2 rounded-lg">
						<ArrowUp />
						<span className="text-dark-slate-blue text-subtitleMobile font-semiBold tracking-tight">
							{singleRequest.upvotes}
						</span>
					</div>
					<div className="flex items-center gap-2.5">
						<Comments />
						<span className="text-dark-slate-blue text-subtitleMobile font-semiBold">
							{singleRequest.comments
								? singleRequest.comments.length + repliesCount()
								: 0}
						</span>
					</div>
				</div>
			</div>
		</Card>
	);
};

export default FeedbackCard;
