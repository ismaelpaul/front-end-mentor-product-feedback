import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';

const SuggestionsBar = () => {
	const options = [
		{ label: 'Most Upvotes', value: 'upvotes' },
		{ label: 'Least Upvotes', value: 'upvotes' },
		{ label: 'Most Comments', value: 'comments' },
		{ label: 'Least Comments', value: 'comments' },
	];

	const buttonText = '+ Add Feedback';
	const buttonClass = 'bg-purple font-semiBold rounded-lg w-32 h-10';

	return (
		<div className="h-14 bg-dark-gray-blue">
			<div className="text-white text-subtitleMobile font-jost h-full flex items-center justify-between px-6">
				<div className="flex gap-2 ">
					<Dropdown options={options} defaultSelectedOption={options[0]} />
				</div>
				<Button buttonText={buttonText} buttonClass={buttonClass} />
			</div>
		</div>
	);
};

export default SuggestionsBar;
