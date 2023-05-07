import { ProductRequests } from '../../interfaces/IProductRequests';

type Tab = {
	name: string;
	content: string;
	index: number;
};

type RoadmapHeadingProps = {
	selectedTab: Tab;
	inProgressContent: ProductRequests[];
	plannedContent: ProductRequests[];
	liveContent: ProductRequests[];
};

const RoadmapHeading = ({
	selectedTab,
	inProgressContent,
	plannedContent,
	liveContent,
}: RoadmapHeadingProps) => {
	return (
		<div className="font-jost mt-5 px-6">
			{selectedTab.name === 'Planned' ? (
				<>
					<h1 className="text-dark-slate-blue text-title18px font-bold tracking-tightier mb-1">
						{selectedTab.name + ' ' + `(${plannedContent.length})`}
					</h1>
					<p className="text-light-slate-blue text-subtitleMobile">
						Ideas prioritized for research
					</p>
				</>
			) : selectedTab.name === 'In-Progress' ? (
				<>
					<h1 className="text-dark-slate-blue text-title18px font-bold tracking-tightier mb-1">
						{selectedTab.name + ' ' + `(${inProgressContent.length})`}
					</h1>
					<p className="text-light-slate-blue text-subtitleMobile">
						Currently being developed
					</p>
				</>
			) : (
				<>
					<h1 className="text-dark-slate-blue text-title18px font-bold tracking-tightier mb-1">
						{selectedTab.name + ' ' + `(${liveContent.length})`}
					</h1>
					<p className="text-light-slate-blue text-subtitleMobile">
						Released features
					</p>
				</>
			)}
		</div>
	);
};

export default RoadmapHeading;
