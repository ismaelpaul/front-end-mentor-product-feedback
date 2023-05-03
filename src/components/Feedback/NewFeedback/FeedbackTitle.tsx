const FeedbackTitle = () => {
	return (
		<div className="text-subtitleMobile mt-6">
			<h2 className="text-dark-slate-blue font-bold tracking-tight mb-1">
				Feedback Title
			</h2>
			<p className="text-light-slate-blue font-regular mb-4">
				Add a short, descriptive headline
			</p>
			<textarea
				maxLength={60}
				className=" bg-white-ghost text-dark-slate-blue text-subtitleMobile content-center
            rounded-md resize-none w-full h-12 pl-4 leading-10 outline-none focus:outline-blue outline-1"
			/>
		</div>
	);
};

export default FeedbackTitle;
