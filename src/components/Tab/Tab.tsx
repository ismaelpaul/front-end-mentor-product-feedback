import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useEffect } from 'react';
import {
	IN_PROGRESS_REQUESTS,
	LIVE_REQUESTS,
	PLANNED_REQUESTS,
} from '../../redux/features/filteredRequests/filteredRequestsSlice';

type Tab = {
	name: string;
	content: string;
	index: number;
};

type TabProps = {
	selectedTab: Tab;
	setSelectedTab: (tab: Tab) => void;
};

const Tab = ({ selectedTab, setSelectedTab }: TabProps) => {
	const inProgressContent = useSelector(
		(state: RootState) => state.filteredRequests.inProgress
	);
	const plannedContent = useSelector(
		(state: RootState) => state.filteredRequests.planned
	);

	const liveContent = useSelector(
		(state: RootState) => state.filteredRequests.live
	);

	const dispatch = useDispatch();

	const tabs = [
		{ name: 'Planned', content: plannedContent },
		{ name: 'In-Progress', content: inProgressContent },
		{ name: 'Live', content: liveContent },
	];

	const handleTabClick = (name: string, index: number) => {
		setSelectedTab({ ...selectedTab, name, index });
	};

	useEffect(() => {
		const storedProductRequests = JSON.parse(
			localStorage.getItem('productRequests') || '[]'
		);

		dispatch(IN_PROGRESS_REQUESTS(storedProductRequests));
		dispatch(PLANNED_REQUESTS(storedProductRequests));
		dispatch(LIVE_REQUESTS(storedProductRequests));
	}, []);

	return (
		<>
			<nav className="flex justify-around mt-5 text-subtitleMobile font-jost font-bold">
				{tabs.map((tab, index) => {
					return (
						<div key={index} className="basis-24 text-center">
							<button
								key={index}
								className={`text-dark-slate-blue ${
									selectedTab.name === tab.name ? '' : 'opacity-40'
								}
								`}
								onClick={() => handleTabClick(tab.name, index)}
							>
								{tab.name + ' ' + `(${tab.content.length})`}
							</button>
							<div
								className={`h-1 w-full mt-4 ${
									index === selectedTab.index ? '' : 'hidden'
								} ${
									selectedTab.name === 'Planned'
										? 'bg-peachy'
										: selectedTab.name === 'In-Progress'
										? 'bg-purple'
										: 'bg-light-blue'
								}`}
							></div>
						</div>
					);
				})}
			</nav>
			<hr className="bg-regent-grey border-none h-px opacity-25" />
		</>
	);
};

export default Tab;
