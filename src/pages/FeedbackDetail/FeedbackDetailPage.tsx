import { useSelector } from 'react-redux';
import FeedbackCard from '../../components/Feedback/FeedbackCard';
import NavFeedbackDetail from '../../components/Nav/NavFeedbackDetail';
import { RootState } from '../../redux/store';
import CommentsList from '../../components/Comments/CommentsList';
import AddComment from '../../components/Comments/AddComment';
import { useState } from 'react';
import { Comments } from '../../interfaces/IProductRequests';

const FeedbackDetailPage = () => {
	const singleRequest = useSelector(
		(state: RootState) => state.productRequests.singleRequest
	);

	const [comments, setComments] = useState<Comments[]>(
		singleRequest.comments || []
	);

	const cardClass = 'bg-white font-jost rounded-lg ';

	return (
		<>
			<NavFeedbackDetail />
			<section className="m-6 laptop:mx-[22.188rem] laptop:mt-8">
				<FeedbackCard singleRequest={singleRequest} />
			</section>

			{singleRequest.comments?.length != 0 && (
				<CommentsList
					key={singleRequest.comments?.length}
					singleRequest={singleRequest}
					comments={comments}
				/>
			)}
			<AddComment cardClass={cardClass} setComments={setComments} />
		</>
	);
};

export default FeedbackDetailPage;
