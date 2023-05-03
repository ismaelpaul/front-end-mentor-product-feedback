import { Comments, Reply } from '../../interfaces/IProductRequests';
import UserInfo from '../UserInfo/UserInfo';

type ReplyProps = {
	reply: Reply;
	index: number;
	comment: Comments;
};
const ReplyingTo = ({ comment, reply, index }: ReplyProps) => {
	return (
		<div className="flex">
			<div
				className={`pl-4 border-l-2 border-light-slate-blue ${
					index === (comment.replies?.length ?? 0) - 1 ? 'h-6' : 'h-auto'
				} opacity-10`}
			></div>
			<div className="flex flex-col">
				<UserInfo userInfo={reply.user} />
				<p className="text-light-slate-blue text-subtitleMobile mt-4 mb-6">
					<span className="text-purple font-bold">
						{'@' + reply.replyingTo + ' '}
					</span>
					{reply.content}
				</p>
			</div>
		</div>
	);
};

export default ReplyingTo;
