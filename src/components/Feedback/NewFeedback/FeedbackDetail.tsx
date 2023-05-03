const FeedbackDetail = () => {
	return (
		<div className="text-subtitleMobile mt-6">
			<h2 className="text-dark-slate-blue font-bold tracking-tight mb-1">
				Feedback Detail
			</h2>
			<p className="text-light-slate-blue font-regular mb-4">
				Include any specific comments on what should be improved, added, etc.
			</p>
			<textarea
				className="bg-white-ghost text-dark-slate-blue text-text15px content-center
            rounded-md resize-none w-full h-28 pt-4 pl-5 leading-10 outline-none focus:outline-blue outline-1"
			/>
		</div>
	);
};

export default FeedbackDetail;
