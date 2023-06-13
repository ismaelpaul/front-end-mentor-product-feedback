import { useSelector } from 'react-redux';
import FeedbackCard from '../../components/Feedback/FeedbackCard';
import NavFeedbackDetail from '../../components/Nav/NavFeedbackDetail';
import { RootState } from '../../redux/store';
import CommentsList from '../../components/Comments/CommentsList';
import AddComment from '../../components/Comments/AddComment';

const FeedbackDetailPage = () => {
	const cardClass = 'bg-white font-jost rounded-lg ';

	const singleRequest = useSelector(
		(state: RootState) => state.productRequests.singleRequest
	);

	return (
		<>
			<NavFeedbackDetail />
			<section className="m-6">
				<FeedbackCard singleRequest={singleRequest} />
			</section>

			{singleRequest.comments?.length != 0 && (
				<CommentsList singleRequest={singleRequest} />
			)}
			<AddComment cardClass={cardClass} />
		</>
	);
};

export default FeedbackDetailPage;
