import ArrowLeft from '../SVGComponents/ArrowLeft';

const GoBackLink = () => {
	return (
		<nav className="flex items-center gap-4">
			<ArrowLeft />
			<span className="text-light-slate-blue text-subtitleMobile font-jost font-bold">
				Go Back
			</span>
		</nav>
	);
};

export default GoBackLink;
