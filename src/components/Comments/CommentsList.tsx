import { ProductRequests } from '../../interfaces/IProductRequests';
import Card from '../Card/Card';
import ReplyingTo from '../ReplyingTo/ReplyingTo';
import UserInfo from '../UserInfo/UserInfo';
import AddComment from './AddComment';

type FeedbackCardPros = {
	singleRequest: ProductRequests;
};

const CommentsList = ({ singleRequest }: FeedbackCardPros) => {
	const comments = singleRequest.comments ?? [];
	const cardClass = 'bg-white font-jost rounded-lg ';

	return (
		<>
			<Card cardClass={cardClass}>
				<h1>{comments.length + ' ' + 'Comments'}</h1>
				<>
					{comments.map((comment, index) => {
						return (
							<>
								<UserInfo userInfo={comment.user} />
								<p className="text-light-slate-blue text-subtitleMobile">
									{comment.content}
								</p>
								{index === comments.length - 1 ? <></> : <hr />}
								{comment.replies
									? comment.replies.map((reply) => {
											return <ReplyingTo reply={reply} />;
									  })
									: null}
							</>
						);
					})}
				</>
			</Card>
			<AddComment cardClass={cardClass} />
		</>
	);
};

export default CommentsList;
