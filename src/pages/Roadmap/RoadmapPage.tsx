import { useState } from 'react';
import FeedbackCard from '../../components/Feedback/FeedbackCard';
import NavRoadmap from '../../components/Nav/NavRoadmap';
import Tab from '../../components/Tab/Tab';
import { ProductRequests } from '../../interfaces/IProductRequests';
import RoadmapHeading from '../../components/Roadmap/RoadmapHeading';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Planned from '../../components/Roadmap/Planned/Planned';
import InProgress from '../../components/Roadmap/InProgress/InProgress';
import Live from '../../components/Roadmap/Live/Live';

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
			<div className="tablet:hidden">
				<Tab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
			</div>
			<div className="tablet:hidden">
				<RoadmapHeading
					selectedTab={selectedTab}
					inProgressContent={inProgressContent}
					plannedContent={plannedContent}
					liveContent={liveContent}
				/>
			</div>
			<main className="mx-6 tablet:hidden">
				{productRequests.map((request: ProductRequests) => {
					return request.status === selectedTab.name.toLowerCase() ? (
						<article key={request._id} className="mb-4 tablet:my-0">
							<FeedbackCard singleRequest={request} />
						</article>
					) : null;
				})}
			</main>
			<main className="hidden tablet:flex tablet:gap-2.5 tablet:mx-[2.438rem] laptop:mx-[10.313rem]">
				<Planned />
				<InProgress />
				<Live />
			</main>
		</>
	);
};

export default RoadmapPage;
