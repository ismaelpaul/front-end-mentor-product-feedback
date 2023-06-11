import { useSelector } from 'react-redux';
import FeedbackList from '../../components/Feedback/FeedbackList';
import Nav from '../../components/Nav/Nav';
import { selectIsSidebarOpen } from '../../redux/features/sidebar/sidebarSlice';

const SuggestionsPage = () => {
	const isSidebarOpen = useSelector(selectIsSidebarOpen);
	return (
		<section className={isSidebarOpen ? 'fixed' : ''}>
			<Nav />
			<FeedbackList />
		</section>
	);
};

export default SuggestionsPage;
