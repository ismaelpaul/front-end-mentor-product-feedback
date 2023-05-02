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
	console.log(singleRequest, '<<<< single');

	return (
		<div className=" flex  flex-col gap-6 m-6">
			<NavFeedbackDetail />
			<FeedbackCard singleRequest={singleRequest} />
			{singleRequest.comments?.length != 0 && (
				<CommentsList singleRequest={singleRequest} />
			)}
			<AddComment cardClass={cardClass} />
		</div>
	);
};

export default FeedbackDetailPage;
