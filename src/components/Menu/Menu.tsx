import { useDispatch, useSelector } from 'react-redux';
import bgImage from '../../assets/suggestions/mobile/background-header.png';
import Hamburguer from '../SVGComponents/Hamburguer';
import {
	SET_SIDEBAR,
	selectIsSidebarOpen,
} from '../../redux/features/sidebar/sidebarSlice';
import CloseMenu from '../SVGComponents/CloseMenu';

const Menu = () => {
	const isSidebarOpen = useSelector(selectIsSidebarOpen);

	const dispatch = useDispatch();

	const toggleSidebar = () => {
		dispatch(SET_SIDEBAR(!isSidebarOpen));
	};

	return (
		<header className="flex items-center tablet:hidden">
			<div className="w-full flex justify-between items-center p-6 absolute">
				<div className=" text-white font-jost">
					<h1 className="text-titleMobile font-semiBold tracking-tight">
						Frontend Mentor
					</h1>
					<p className="text-subtitleMobile opacity-75">Feedback Board</p>
				</div>
				<div onClick={toggleSidebar}>
					{isSidebarOpen ? <CloseMenu /> : <Hamburguer />}
				</div>
			</div>
			<img src={bgImage} />
		</header>
	);
};

export default Menu;
