import CreateFeedback from '../../components/Feedback/NewFeedback/CreateFeedback';
import GoBackLink from '../../components/GoBackLink/GoBackLink';

const NewFeedbackPage = () => {
	const link = '/';
	const goBackClass =
		'text-light-slate-blue text-subtitleMobile font-jost font-bold tablet:text-text14px';

	return (
		<>
			<nav className="mt-8 mx-6 tablet:mt-14 tablet:mx-[7.125rem]">
				<GoBackLink goBackClass={goBackClass} link={link} />
			</nav>
			<CreateFeedback />
		</>
	);
};

export default NewFeedbackPage;
