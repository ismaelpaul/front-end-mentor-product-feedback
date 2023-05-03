import Button from '../Button/Button';
import EmptyFeedbackIllustration from '../SVGComponents/EmptyFeedbackIllustration';

const FeedbackEmpty = () => {
	const buttonText = '+ Add Feedback';
	const buttonClass =
		'text-white bg-purple text-subtileMobile font-semiBold rounded-lg w-32 h-10';

	return (
		<section className="bg-white rounded-lg">
			<article className="flex flex-col items-center justify-center font-jost text-subtitleMobile py-20 px-6">
				<EmptyFeedbackIllustration />
				<h1 className="text-dark-slate-blue text-title18px font-semiBold tracking-tightier mt-10">
					There is no feedback yet
				</h1>
				<p className="text-light-slate-blue text-center mt-3.5 mb-6">
					Got a suggestion? Found a bug that needs to be squashed? We love
					hearing about new ideas to improve our app.
				</p>
				<Button buttonClass={buttonClass} buttonText={buttonText} />
			</article>
		</section>
	);
};

export default FeedbackEmpty;
