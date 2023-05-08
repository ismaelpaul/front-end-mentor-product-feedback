import { useState } from 'react';
import FeedbackCard from '../../components/Feedback/FeedbackCard';
import NavRoadmap from '../../components/Nav/NavRoadmap';
import Tab from '../../components/Tab/Tab';
import { ProductRequests } from '../../interfaces/IProductRequests';
import RoadmapHeading from '../../components/Roadmap/RoadmapHeading';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const RoadmapPage = () => {
	const [selectedTab, setSelectedTab] = useState({
		name: 'Planned',
		content: '',
		index: 0,
	});

	const storedRequests = localStorage.getItem('productRequests');
	const productRequests = storedRequests ? JSON.parse(storedRequests) : [];

	const inProgressContent = useSelector(
		(state: RootState) => state.filteredRequests.inProgress
	);
	const plannedContent = useSelector(
		(state: RootState) => state.filteredRequests.planned
	);

	const liveContent = useSelector(
		(state: RootState) => state.filteredRequests.live
	);

	return (
		<>
			<NavRoadmap />
			<Tab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
			<RoadmapHeading
				selectedTab={selectedTab}
				inProgressContent={inProgressContent}
				plannedContent={plannedContent}
				liveContent={liveContent}
			/>

			{productRequests.map((request: ProductRequests) => {
				return request.status === selectedTab.name.toLowerCase() ? (
					<main key={request._id} className="my-6 mx-6 flex flex-col gap-4">
						<FeedbackCard singleRequest={request} />
					</main>
				) : null;
			})}
		</>
	);
};

export default RoadmapPage;
