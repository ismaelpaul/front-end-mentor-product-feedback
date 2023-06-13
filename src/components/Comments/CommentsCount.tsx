import { ProductRequests } from '../../interfaces/IProductRequests';
import Comments from '../SVGComponents/Comments';

type CommentsCountProps = {
	singleRequest: ProductRequests;
	repliesCount: () => number;
};

const CommentsCount = ({ singleRequest, repliesCount }: CommentsCountProps) => {
	return (
		<div className="flex items-center gap-2.5 tablet:grow tablet:justify-end">
			<Comments />
			<span className="text-dark-slate-blue text-subtitleMobile font-semiBold">
				{singleRequest.comments
					? singleRequest.comments.length + repliesCount()
					: 0}
			</span>
		</div>
	);
};

export default CommentsCount;
