import { useCallback, useState } from 'react';
import { ProductRequests } from '../../interfaces/IProductRequests';
import Card from '../Card/Card';
import ReplyingTo from '../ReplyingTo/ReplyingTo';
import UserInfo from '../UserInfo/UserInfo';
import Button from '../Button/Button';
import ReplyComment from '../ReplyComment/ReplyComment';

type FeedbackCardPros = {
	singleRequest: ProductRequests;
};

const CommentsList = ({ singleRequest }: FeedbackCardPros) => {
	const [commentIndex, setCommentIndex] = useState(-1);
	const [replyIndex, setReplyIndex] = useState(-1);

	const comments = singleRequest.comments ?? [];

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

	return (
		<main className="m-6">
			<Card cardClass={cardClass}>
				<div className="p-6 tablet:px-8">
					<h1 className="text-dark-slate-blue text-title18px font-bold mb-6">
						{comments.length + repliesCount() + ' ' + 'Comments'}
					</h1>
					<>
						{comments.map((comment, index) => {
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
													index === comments.length - 1 ? 'h-auto' : 'hidden'
												} opacity-10 `}
											></div>
											<p className="text-light-slate-blue text-subtitleMobile mb-6 mt-4 tablet:ml-[3.5rem] tablet:text-text15px tablet:mt-0">
												{comment.content}
											</p>
										</div>
									</div>
									{index === commentIndex && <ReplyComment />}
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
														replyIndex={replyIndex}
														setReplyIndex={setReplyIndex}
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
		</main>
	);
};

export default CommentsList;
