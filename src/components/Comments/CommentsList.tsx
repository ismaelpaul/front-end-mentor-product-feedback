import { useCallback, useState } from 'react';
import { Comments, ProductRequests } from '../../interfaces/IProductRequests';
import Card from '../Card/Card';
import ReplyingTo from '../ReplyingTo/ReplyingTo';
import UserInfo from '../UserInfo/UserInfo';
import Button from '../Button/Button';
import ReplyComment from '../ReplyComment/ReplyComment';

type FeedbackCardPros = {
	singleRequest: ProductRequests;
	comments: Comments[];
};

const CommentsList = ({ singleRequest, comments }: FeedbackCardPros) => {
	const [commentIndex, setCommentIndex] = useState(-1);
	const [replyIndex, setReplyIndex] = useState(-1);
	const buttonClass =
		'text-blue text-right font-semiBold text-subtitleMobile basis-0 ml-auto';
	const buttonText = 'Reply';
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

	const totalReplies = repliesCount();

	return (
		<main className="m-6 laptop:mx-[22.188rem] laptop:mt-8">
			<Card cardClass={cardClass}>
				<div className="p-6 tablet:px-8">
					<h1 className="text-dark-slate-blue text-title18px font-bold mb-6">
						{comments.length + totalReplies + ' ' + 'Comments'}
					</h1>
					<>
						{comments.map((comment, index) => {
							const hasReplies = comment.replies && comment.replies.length > 0;
							const isLastComment = index === comments.length - 1;
							return (
								<>
									<div className="flex flex-col tablet:gap-4">
										<div key={index} className="flex">
											<UserInfo userInfo={comment.user} />
											<Button
												buttonClass={buttonClass}
												buttonText={buttonText}
												onClick={() => {
													setCommentIndex(index);
												}}
											/>
										</div>
										<div className="tablet:flex tablet:ml-4">
											<div
												className={`border-solid border-l-[1.5px] border-light-slate-blue ${
													hasReplies ? 'h-auto' : 'hidden'
												} opacity-10 `}
											></div>
											<p className="text-light-slate-blue text-subtitleMobile mb-6 mt-4 tablet:ml-[3.5rem] tablet:text-text15px tablet:mt-0">
												{comment.content}
											</p>
										</div>
									</div>
									{index === commentIndex && <ReplyComment />}
									{comment.replies !== undefined
										? comment.replies.map((reply, index) => {
												return (
													<ReplyingTo
														comment={comment}
														reply={reply}
														index={index}
														replyIndex={replyIndex}
														setReplyIndex={setReplyIndex}
													/>
												);
										  })
										: null}
									{isLastComment ? (
										<></>
									) : (
										<hr className="bg-regent-grey border-none h-px opacity-25 mb-6" />
									)}
								</>
							);
						})}
					</>
				</div>
			</Card>
		</main>
	);
};

export default CommentsList;
