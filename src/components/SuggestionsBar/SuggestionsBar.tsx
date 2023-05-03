import { useSelector } from 'react-redux';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/DropdownSuggestions';
import { selectIsSidebarOpen } from '../../redux/features/sidebar/sidebarSlice';
import Sidebar from '../Sidebar/Sidebar';

const SuggestionsBar = () => {
	const isSidebarOpen = useSelector(selectIsSidebarOpen);

	const options = [
		{ label: 'Most Upvotes', value: 'upvotes' },
		{ label: 'Least Upvotes', value: 'upvotes' },
		{ label: 'Most Comments', value: 'comments' },
		{ label: 'Least Comments', value: 'comments' },
	];

	const buttonText = '+ Add Feedback';
	const buttonClass = 'bg-purple font-semiBold rounded-lg w-32 h-10';

	return (
		<div>
			<div
				className={` fixed w-full h-full z-10 ${
					isSidebarOpen
						? 'bg-black/50 flex justify-end'
						: ' delay-500 bg-black/0 hidden'
				}`}
			>
				<Sidebar />
			</div>

			<div className="text-white text-subtitleMobile font-jost h-14 bg-dark-gray-blue flex items-center justify-between px-6">
				<div className="flex gap-2 ">
					<Dropdown options={options} defaultSelectedOption={options[0]} />
				</div>
				<Button buttonText={buttonText} buttonClass={buttonClass} />
			</div>
		</div>
	);
};

export default SuggestionsBar;
