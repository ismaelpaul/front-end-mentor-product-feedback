import { hamburguer } from '../../data/icons';
import bgImage from '../../assets/suggestions/mobile/background-header.png';

const Menu = () => {
	return (
		<header className="flex items-center tablet:hidden">
			<div className="w-full flex justify-between items-center p-6 absolute">
				<div className=" text-white font-jost">
					<h1 className="text-titleMobile font-semiBold tracking-tight">
						Frontend Mentor
					</h1>
					<p className="text-subtitleMobile opacity-75">Feedback Board</p>
				</div>
				<span>{hamburguer}</span>
			</div>
			<img src={bgImage} />
		</header>
	);
};

export default Menu;
