import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import { useEffect } from 'react';
import {
	IN_PROGRESS_REQUESTS,
	LIVE_REQUESTS,
	PLANNED_REQUESTS,
} from '../../redux/features/filteredRequests/filteredRequestsSlice';

const RoadmapItems = () => {
	const { productRequests } = useSelector(
		(state: RootState) => state.productRequests
	);
	const inProgress = useSelector(
		(state: RootState) => state.filteredRequests.inProgress
	);
	const planned = useSelector(
		(state: RootState) => state.filteredRequests.planned
	);
	const live = useSelector((state: RootState) => state.filteredRequests.live);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(IN_PROGRESS_REQUESTS(productRequests));
		dispatch(PLANNED_REQUESTS(productRequests));
		dispatch(LIVE_REQUESTS(productRequests));
	}, []);

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
