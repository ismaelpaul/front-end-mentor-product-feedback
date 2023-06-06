import { ProductRequests } from '../../interfaces/IProductRequests';

type RoadmapItemsProps = {
	inProgress: ProductRequests[];
	planned: ProductRequests[];
	live: ProductRequests[];
};

const RoadmapItems = ({ inProgress, planned, live }: RoadmapItemsProps) => {
	return (
		<div className="text-light-slate-blue font-regular font-jost text-roadmap flex flex-col gap-2">
			<div className="flex items-center gap-4">
				<div className="bg-peachy h-2 w-2 rounded-full"></div>
				<span className="text-roadmap">Planned</span>
				<span className="font-bold grow text-end">{planned.length}</span>
			</div>
			<div className="flex items-center gap-4">
				<div className="bg-purple h-2 w-2 rounded-full"></div>
				<span>In-Progress</span>
				<span className="font-bold grow text-end">{inProgress.length}</span>
			</div>
			<div className="flex items-center gap-4">
				<div className="bg-light-blue h-2 w-2 rounded-full"></div>
				<span>Live</span>
				<span className="font-bold grow text-end">{live.length}</span>
			</div>
		</div>
	);
};

export default RoadmapItems;
