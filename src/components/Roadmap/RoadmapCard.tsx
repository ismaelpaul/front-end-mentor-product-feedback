import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import RoadmapItems from './RoadmapItems';

const RoadmapCard = () => {
	const cardClass = 'bg-white w-56 rounded-lg p-6';
	return (
		<div className="px-6">
			<Card cardClass={cardClass}>
				<div className="flex justify-between font-jost mb-6">
					<h1 className=" text-dark-slate-blue text-title18px font-bold tracking-tightier ">
						Roadmap
					</h1>
					<Link to={'/roadmap'}>
						<span className="text-blue underline text-subtitleMobile ">
							View
						</span>
					</Link>
				</div>
				<RoadmapItems />
			</Card>
		</div>
	);
};

export default RoadmapCard;
