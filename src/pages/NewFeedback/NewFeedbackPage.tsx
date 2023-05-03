import CreateFeedback from '../../components/Feedback/CreateFeedback';
import GoBackLink from '../../components/GoBackLink/GoBackLink';

const NewFeedbackPage = () => {
	const link = '/';
	return (
		<div className="gap-6 m-6">
			<GoBackLink link={link} />
			<CreateFeedback />
		</div>
	);
};

export default NewFeedbackPage;
