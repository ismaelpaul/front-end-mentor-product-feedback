import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import GoBackLink from '../GoBackLink/GoBackLink';

const NavFeedbackDetail = () => {
	const goBackClass =
		'text-light-slate-blue text-subtitleMobile font-jost font-bold';
	const arrowClass = '';
	const buttonText = 'Edit Feedback';
	const buttonClass =
		'bg-blue text-white font-jost font-semiBold text-subtitleMobile rounded-lg w-32 h-10';

	const link = '/';
	return (
		<header className="flex gap-6 m-6 justify-between items-center">
			<GoBackLink
				goBackClass={goBackClass}
				arrowClass={arrowClass}
				link={link}
			/>
			<Link to={'/edit-feedback'}>
				<Button buttonText={buttonText} buttonClass={buttonClass} />
			</Link>
		</header>
	);
};

export default NavFeedbackDetail;
