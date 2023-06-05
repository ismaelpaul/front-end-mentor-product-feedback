import { useCallback } from 'react';
import { ProductRequests } from '../../interfaces/IProductRequests';
import Card from '../Card/Card';
import ReplyingTo from '../ReplyingTo/ReplyingTo';
import UserInfo from '../UserInfo/UserInfo';

type FeedbackCardPros = {
	singleRequest: ProductRequests;
};

const CommentsList = ({ singleRequest }: FeedbackCardPros) => {
	const comments = singleRequest.comments ?? [];
	const cardClass = 'bg-white font-jost rounded-lg ';

	const repliesCount = useCallback(() => {
		return (
			singleRequest.comments?.reduce((count, comment) => {
				if (comment.replies?.length !== undefined) {
					return count + comment.replies?.length;
				}
				return count;
			}, 0) || 0
		);
	}, [singleRequest.comments]);

	return (
		<>
			<Card cardClass={cardClass}>
				<div className="p-6">
					<h1 className="text-dark-slate-blue text-title18px font-bold mb-6">
						{comments.length + repliesCount() + ' ' + 'Comments'}
					</h1>
					<>
						{comments.map((comment, index) => {
							return (
								<>
									<UserInfo userInfo={comment.user} />
									<p className="text-light-slate-blue text-subtitleMobile mt-4 mb-6">
										{comment.content}
									</p>
									{index === comments.length - 1 ? (
										<></>
									) : (
										<hr className="bg-regent-grey border-none h-px opacity-25 mb-6" />
									)}
									{comment.replies !== undefined
										? comment.replies.map((reply, index) => {
												return (
													<ReplyingTo
														comment={comment}
														reply={reply}
														index={index}
													/>
												);
										  })
										: null}
								</>
							);
						})}
					</>
				</div>
			</Card>
		</>
	);
};

export default CommentsList;
