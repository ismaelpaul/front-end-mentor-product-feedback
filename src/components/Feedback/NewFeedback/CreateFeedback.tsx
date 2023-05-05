import Button from '../../Button/Button';
import Card from '../../Card/Card';
import NewFeedback from '../../SVGComponents/NewFeedback';
import Category from './Category';
import FeedbackDetail from './FeedbackDetail';
import FeedbackTitle from './FeedbackTitle';

const CreateFeedback = () => {
	const cardClass = 'bg-white font-jost rounded-lg mt-14';
	const buttonTextAdd = 'Add Feedback';
	const buttonTextCancel = 'Cancel';
	const buttonClass =
		'text-white-smoke text-subtitleMobile font-semiBold rounded-lg w-full h-10';

	return (
		<main>
			<Card cardClass={cardClass}>
				<div className="p-6 pt-10">
					<div className="absolute top-20 left-14">
						<NewFeedback />
					</div>
					<h1 className="text-dark-slate-blue text-title18px font-bold tracking-tightier">
						Create new Feedback
					</h1>
					<FeedbackTitle />
					<Category />
					<FeedbackDetail />
					<div className="flex flex-col gap-4 mt-10">
						<Button
							buttonClass={`bg-purple ${buttonClass}`}
							buttonText={buttonTextAdd}
						/>
						<Button
							buttonClass={`bg-dark-slate-blue ${buttonClass}`}
							buttonText={buttonTextCancel}
						/>
					</div>
				</div>
			</Card>
		</main>
	);
};

export default CreateFeedback;
