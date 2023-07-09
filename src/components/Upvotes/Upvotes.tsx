import { useEffect, useState } from 'react';
import { ProductRequests } from '../../interfaces/IProductRequests';
import Button from '../Button/Button';
import ArrowUp from '../SVGComponents/ArrowUp';
import { updateRequestUpvotes } from '../../redux/features/productRequests/productRequestsSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { useLocation } from 'react-router';

type UpvotesProps = {
	singleRequest: ProductRequests;
};

const Upvotes = ({ singleRequest }: UpvotesProps) => {
	const [hasVoted, setHasVoted] = useState(false);

	const buttonClass =
		'flex items-center gap-2.5 px-4 py-2 rounded-lg tablet:px-2 hover:bg-lavender-blue';

	const location = useLocation();
	const { pathname } = location;

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
				} ${pathname === '/roadmap' ? 'tablet:flex-row' : 'tablet:flex-col'}`}
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
