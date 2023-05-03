import DropdownFeedback from '../../Dropdown/DropdownFeedback';

const Category = () => {
	const options = [
		{ label: 'Feature', value: 'feature' },
		{ label: 'UI', value: 'ui' },
		{ label: 'UX', value: 'ux' },
		{ label: 'Enhancement', value: 'enhancement' },
		{ label: 'Bug', value: 'bug' },
	];
	return (
		<div className="text-subtitleMobile mt-6">
			<h2 className="text-dark-slate-blue font-bold tracking-tight mb-1">
				Category
			</h2>
			<p className="text-light-slate-blue font-regular mb-4">
				Choose a category for your feedback
			</p>
			<DropdownFeedback options={options} defaultSelectedOption={options[0]} />
		</div>
	);
};

export default Category;
