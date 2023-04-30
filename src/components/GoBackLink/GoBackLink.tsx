import { Link } from 'react-router-dom';
import ArrowLeft from '../SVGComponents/ArrowLeft';

type LinkProps = {
	link: string;
};
const GoBackLink = ({ link }: LinkProps) => {
	return (
		<Link to={link}>
			<nav className="flex items-center gap-4">
				<ArrowLeft />
				<span className="text-light-slate-blue text-subtitleMobile font-jost font-bold">
					Go Back
				</span>
			</nav>
		</Link>
	);
};

export default GoBackLink;
