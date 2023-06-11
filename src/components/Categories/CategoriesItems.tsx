import { useSelector } from 'react-redux';
import { selectedSortingCategory } from '../../redux/features/productRequests/productRequestsSlice';

type CategoriesItemsProps = {
	categories: string[];
	onCategoryChange: (category: string) => void;
};
const CategoriesItems = ({
	categories,
	onCategoryChange,
}: CategoriesItemsProps) => {
	const selectedCategory = useSelector(selectedSortingCategory);

	return (
		<div className="flex flex-wrap gap-2">
			{categories.map((category, index) => {
				return (
					<ul
						key={index}
						className={`w-fit rounded-lg ${
							selectedCategory === category
								? 'bg-blue text-white'
								: 'bg-white-smoke text-blue '
						}`}
					>
						<li>
							<button
								className=" font-jost font-semiBold text-subtitleMobile px-4 py-2"
								onClick={() => {
									onCategoryChange(category);
								}}
							>
								{category}
							</button>
						</li>
					</ul>
				);
			})}
		</div>
	);
};

export default CategoriesItems;
