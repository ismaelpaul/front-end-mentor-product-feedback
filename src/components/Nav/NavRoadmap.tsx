import Button from '../Button/Button';
import GoBackLink from '../GoBackLink/GoBackLink';

const NavRoadmap = () => {
	const link = '/';
	const goBackClass = 'text-white text-subtitleMobile font-jost font-bold';
	const arrowClass = 'stroke-white-ghost';
	const buttonText = '+ Add Feedback';
	const buttonClass =
		'bg-purple text-white-ghost text-subtitleMobile font-semiBold rounded-lg w-32 h-10';

	return (
		<header className="bg-dark-grey-blue flex justify-between items-center p-6  h-24">
			<div className="flex flex-col gap-1">
				<GoBackLink
					goBackClass={goBackClass}
					arrowClass={arrowClass}
					link={link}
				/>
				<h1 className="text-white text-title18px tracking-tight font-bold font-jost">
					Roadmap
				</h1>
			</div>
			<Button buttonClass={buttonClass} buttonText={buttonText} />
		</header>
	);
};

export default NavRoadmap;
