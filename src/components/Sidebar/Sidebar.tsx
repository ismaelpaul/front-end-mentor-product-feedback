import { useSelector } from 'react-redux';
import CategoriesCard from '../Categories/CategoriesCard';
import RoadmapCard from '../Roadmap/RoadmapCard';
import { selectIsSidebarOpen } from '../../redux/features/sidebar/sidebarSlice';

const Sidebar = () => {
	const isSidebarOpen = useSelector(selectIsSidebarOpen);

	return (
		<div
			className={` 
				bg-white-ghost fixed top-18 rigth-0 h-full flex flex-col ${
					isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
				}  ease-in-out duration-500`}
		>
			<CategoriesCard />
			<RoadmapCard />
		</div>
	);
};

export default Sidebar;
