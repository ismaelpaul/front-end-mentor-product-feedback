import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import FeedbackCard from '../../Feedback/FeedbackCard';
import { ProductRequests } from '../../../interfaces/IProductRequests';
import { useLocation } from 'react-router';

const Planned = () => {
	const plannedContent = useSelector(
		(state: RootState) => state.filteredRequests.planned
	);

	const location = useLocation();
	const { pathname } = location;

	return (
		<div className="mt-8 flex-1 w-0">
			<h1 className="text-dark-slate-blue text-text14px font-bold tracking-tightier mb-1">
				{'Planned' + ' ' + `(${plannedContent.length})`}
			</h1>
			<p className="text-light-slate-blue text-text14px mb-6">
				Ideas prioritized for research
			</p>
			<main className={`${pathname === '/roadmap' ? 'mx-0' : 'mx-10'}`}>
				{plannedContent.map((request: ProductRequests) => {
					return (
						<article
							key={request._id}
							className="my-6 flex flex-col gap-4 tablet:my-0 tablet:mb-4"
						>
							<FeedbackCard singleRequest={request} />
						</article>
					);
				})}
			</main>
		</div>
	);
};

export default Planned;
