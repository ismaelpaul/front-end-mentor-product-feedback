import Button from '../Button/Button';
import GoBackLink from '../GoBackLink/GoBackLink';

const NavFeedbackDetail = () => {
	const buttonText = 'Edit Feedback';
	const buttonClass =
		'bg-blue text-white font-jost font-semiBold text-subtitleMobile rounded-lg w-32 h-10';

	const link = '/';
	return (
		<div className="flex justify-between">
			<GoBackLink link={link} />

			<Button buttonText={buttonText} buttonClass={buttonClass} />
		</div>
	);
};

export default NavFeedbackDetail;
