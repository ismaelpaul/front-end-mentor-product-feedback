import { useDispatch, useSelector } from 'react-redux';
import bgImageMobile from '../../assets/suggestions/mobile/background-header.png';
import bgImageTablet from '../../assets/suggestions/tablet/background-header.png';
import Hamburguer from '../SVGComponents/Hamburguer';
import {
	SET_SIDEBAR,
	selectIsSidebarOpen,
} from '../../redux/features/sidebar/sidebarSlice';
import CloseMenu from '../SVGComponents/CloseMenu';
import CategoriesCard from '../Categories/CategoriesCard';
import RoadmapCard from '../Roadmap/RoadmapCard';

const Menu = () => {
	const isSidebarOpen = useSelector(selectIsSidebarOpen);

	const dispatch = useDispatch();

	const toggleSidebar = () => {
		dispatch(SET_SIDEBAR(!isSidebarOpen));
	};

	return (
		<div className="flex items-center tablet:mb-10  relative">
			<div className="w-full flex justify-between items-center p-6 absolute tablet:w-fit tablet:bottom-1">
				<div className=" text-white font-jost">
					<h1 className="text-titleMobile font-semiBold tracking-tight tablet:text-title20px">
						Frontend Mentor
					</h1>
					<p className="text-subtitleMobile opacity-75 tablet:text-text15px">
						Feedback Board
					</p>
				</div>
				<div onClick={toggleSidebar} className="tablet:hidden">
					{isSidebarOpen ? <CloseMenu /> : <Hamburguer />}
				</div>
			</div>
			<img className="block tablet:hidden" src={bgImageMobile} />
			<div className="hidden tablet:flex items-center gap-2.5">
				<img className=" rounded-lg" src={bgImageTablet} />
				<CategoriesCard />
				<RoadmapCard />
			</div>
		</div>
	);
};

export default Menu;
