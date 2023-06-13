import { Dispatch, SetStateAction } from 'react';
import { Comments, Reply } from '../../interfaces/IProductRequests';
import Button from '../Button/Button';
import UserInfo from '../UserInfo/UserInfo';
import ReplyComment from '../ReplyComment/ReplyComment';

type ReplyProps = {
	reply: Reply;
	index: number;
	comment: Comments;
	replyIndex: number;
	setReplyIndex: Dispatch<SetStateAction<number>>;
};
const ReplyingTo = ({
	comment,
	reply,
	index,
	replyIndex,
	setReplyIndex,
}: ReplyProps) => {
	const buttonClass =
		'text-blue text-right font-semiBold text-subtitleMobile basis-0 ml-auto';
	const buttonText = 'Reply';

	return (
		<div className="flex tablet:ml-4 tablet:gap-2">
			<div
				className={`pl-4 border-solid border-l-[1.5px] border-light-slate-blue ${
					index === (comment.replies?.length ?? 0) - 1 ? 'h-6' : 'h-auto'
				} opacity-10`}
			></div>
			<div className="flex flex-col tablet:gap-2.5">
				<div className="flex">
					<UserInfo userInfo={reply.user} />
					<Button
						buttonClass={buttonClass}
						buttonText={buttonText}
						onClick={() => {
							setReplyIndex(index);
						}}
					/>
				</div>
				<p className="text-light-slate-blue text-subtitleMobile mb-6 tablet:ml-[4.5rem] tablet:text-text15px">
					<span className="text-purple font-bold">
						{'@' + reply.replyingTo + ' '}
					</span>
					{reply.content}
				</p>
				{index === replyIndex && <ReplyComment />}
			</div>
		</div>
	);
};

export default ReplyingTo;
