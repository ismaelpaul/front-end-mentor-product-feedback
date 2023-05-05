import { Link } from 'react-router-dom';
import ArrowLeft from '../SVGComponents/ArrowLeft';

type LinkProps = {
	link: string;
	goBackClass: string;
	arrowClass?: string;
};
const GoBackLink = ({ link, goBackClass, arrowClass }: LinkProps) => {
	return (
		<Link to={link}>
			<nav className="flex items-center gap-4">
				<ArrowLeft className={arrowClass} />
				<span className={goBackClass}>Go Back</span>
			</nav>
		</Link>
	);
};

export default GoBackLink;
