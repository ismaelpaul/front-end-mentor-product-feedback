import { useEffect, useState } from 'react';
import { ProductRequests } from '../../interfaces/IProductRequests';
import Button from '../Button/Button';
import ArrowUp from '../SVGComponents/ArrowUp';
import { updateRequestUpvotes } from '../../redux/features/productRequests/productRequestsSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';

type UpvotesProps = {
	singleRequest: ProductRequests;
};

const Upvotes = ({ singleRequest }: UpvotesProps) => {
	const [hasVoted, setHasVoted] = useState(false);

	const buttonClass =
		'flex items-center gap-2.5 w-fit px-4 py-2 rounded-lg tablet:flex-col tablet:px-2';

	const dispatch = useDispatch<AppDispatch>();

	const handleUpvoteClick = async () => {
		if (singleRequest._id) {
			const vote = hasVoted ? -1 : 1;

			const votedRequests = JSON.parse(
				localStorage.getItem('votedRequests') || '{}'
			);
			votedRequests[singleRequest._id] = !hasVoted;
			localStorage.setItem('votedRequests', JSON.stringify(votedRequests));

			setHasVoted(!hasVoted);
			dispatch(updateRequestUpvotes({ id: singleRequest._id, vote }));
		}
	};

	useEffect(() => {
		if (singleRequest._id) {
			const votedRequests = JSON.parse(
				localStorage.getItem('votedRequests') || '{}'
			);
			if (votedRequests[singleRequest._id]) {
				setHasVoted(votedRequests[singleRequest._id]);
			}
		}
	}, [singleRequest._id]);

	return (
		<>
			<Button
				buttonClass={`${buttonClass} ${
					hasVoted ? 'bg-blue ' : 'bg-white-smoke'
				}`}
				onClick={handleUpvoteClick}
			>
				<ArrowUp hasVoted={hasVoted} />
				<span
					className={`text-subtitleMobile font-semiBold tracking-tight ${
						hasVoted ? 'text-white' : 'text-dark-slate-blue'
					}`}
				>
					{singleRequest.upvotes}
				</span>
			</Button>
		</>
	);
};

export default Upvotes;
