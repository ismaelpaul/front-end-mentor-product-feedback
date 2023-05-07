import CreateFeedback from '../../components/Feedback/NewFeedback/CreateFeedback';
import GoBackLink from '../../components/GoBackLink/GoBackLink';

const NewFeedbackPage = () => {
	const link = '/';
	const goBackClass =
		'text-light-slate-blue text-subtitleMobile font-jost font-bold';

	return (
		<div className="gap-6 m-6">
			<GoBackLink goBackClass={goBackClass} link={link} />
			<CreateFeedback />
		</div>
	);
};

export default NewFeedbackPage;
