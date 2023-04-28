const CategoriesItems = () => {
	const categories = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];

	return (
		<div className="flex flex-wrap gap-2">
			{categories.map((category) => {
				return (
					<ul className="bg-white-smoke w-fit rounded-lg">
						<li className="text-blue font-jost font-semiBold text-subtitleMobile px-4 py-2">
							{category}
						</li>
					</ul>
				);
			})}
		</div>
	);
};

export default CategoriesItems;
