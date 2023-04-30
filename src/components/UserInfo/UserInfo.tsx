type UserInfoProps = {
	userInfo: {
		image: string;
		name: string;
		username: string;
	};
};

const UserInfo = ({ userInfo }: UserInfoProps) => {
	return (
		<div className="flex items-center gap-4">
			<img
				src={userInfo.image}
				alt={`Profile image of ${userInfo.name} or ${userInfo.username}`}
				className="w-10 h-10 rounded-full"
				role="img"
			/>
			<div className="text-subtitleMobile">
				<h2 className="text-dark-slate-blue tracking-tight font-bold">
					{userInfo.name}
				</h2>
				<span className="text-light-slate-blue">{'@' + userInfo.username}</span>
			</div>
			<span className="text-blue text-right font-semiBold text-subtitleMobile grow">
				Reply
			</span>
		</div>
	);
};

export default UserInfo;
