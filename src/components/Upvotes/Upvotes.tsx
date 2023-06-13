import { ProductRequests } from '../../interfaces/IProductRequests';
import ArrowUp from '../SVGComponents/ArrowUp';

type UpvotesProps = {
	singleRequest: ProductRequests;
};

const Upvotes = ({ singleRequest }: UpvotesProps) => {
	return (
		<div className="flex items-center gap-2.5 bg-white-smoke w-fit px-4 py-2 rounded-lg tablet:flex-col tablet:px-2">
			<ArrowUp />
			<span className="text-dark-slate-blue text-subtitleMobile font-semiBold tracking-tight">
				{singleRequest.upvotes}
			</span>
		</div>
	);
};

export default Upvotes;
