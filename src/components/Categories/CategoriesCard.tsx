import CategoriesItems from './CategoriesItems';
import Card from '../Card/Card';

import { useDispatch } from 'react-redux';
import { SET_SORTING_CATEGORY } from '../../redux/features/productRequests/productRequestsSlice';
import { AppDispatch } from '../../redux/store';

const CategoriesCard = () => {
	const cardClass = 'bg-white w-56 h-44 rounded-lg p-6';

	const categories = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];

	const dispatch = useDispatch<AppDispatch>();

	const handleCategoryChange = (category: string) => {
		dispatch(SET_SORTING_CATEGORY(category));
	};

	return (
		<div className="p-6">
			<Card cardClass={cardClass}>
				<CategoriesItems
					categories={categories}
					onCategoryChange={handleCategoryChange}
				/>
			</Card>
		</div>
	);
};

export default CategoriesCard;
