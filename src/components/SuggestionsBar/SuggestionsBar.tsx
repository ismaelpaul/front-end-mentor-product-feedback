import { useSelector } from 'react-redux';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/DropdownSuggestions';
import { selectIsSidebarOpen } from '../../redux/features/sidebar/sidebarSlice';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import Suggestions from '../SVGComponents/Suggestions';
import { RootState } from '../../redux/store';

const SuggestionsBar = () => {
	const options = [
		{ label: 'Most Upvotes', value: 'mostUpvotes' },
		{ label: 'Least Upvotes', value: 'leastUpvotes' },
		{ label: 'Most Comments', value: 'mostComments' },
		{ label: 'Least Comments', value: 'leastComments' },
	];

	const isSidebarOpen = useSelector(selectIsSidebarOpen);

	const buttonText = '+ Add Feedback';
	const buttonClass =
		'bg-purple font-semiBold rounded-lg w-32 h-10 tablet:h-11 hover:bg-heliotrope';

	const suggestions = useSelector(
		(state: RootState) => state.filteredRequests.suggestion
	);

	return (
		<div>
			<div
				className={` fixed w-screen h-screen z-10 ${
					isSidebarOpen
						? 'bg-black/50 flex justify-end'
						: ' delay-500 bg-black/0 hidden'
				} tablet:hidden`}
			>
				<Sidebar />
			</div>

			<div className="text-white text-subtitleMobile font-jost h-14 bg-dark-grey-blue flex items-center justify-between pl-6 pr-6 tablet:h-72px tablet:justify-normal tablet:rounded-lg tablet:gap-38px tablet:pr-2 tablet:mx-10 laptop:mx-0">
				<div className="hidden tablet:flex items-center">
					<Suggestions />
					<span className="text-title18px font-bold m-4">
						{suggestions.length} Suggestions
					</span>
				</div>
				<div className="flex gap-2 ">
					<Dropdown options={options} defaultSelectedOption={options[0]} />
				</div>
				<div className="tablet:grow text-end">
					<Link to={'/new-feedback'}>
						<Button buttonText={buttonText} buttonClass={buttonClass} />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SuggestionsBar;
