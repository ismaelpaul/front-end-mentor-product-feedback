import CategoriesItems from './CategoriesItems';
import Card from '../Card/Card';

const CategoriesCard = () => {
	const cardClass = 'bg-white w-56 h-44 rounded-lg p-6';
	return (
		<div className="p-6">
			<Card cardClass={cardClass}>
				<CategoriesItems />
			</Card>
		</div>
	);
};

export default CategoriesCard;
