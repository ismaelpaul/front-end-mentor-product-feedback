import { useSelector } from 'react-redux';
import FeedbackList from '../../components/Feedback/FeedbackList';
import Nav from '../../components/Nav/Nav';
import { selectIsSidebarOpen } from '../../redux/features/sidebar/sidebarSlice';

const SuggestionsPage = () => {
	const isSidebarOpen = useSelector(selectIsSidebarOpen);
	return (
		<>
			<header
				className={`mt-0 mx-0 ${
					isSidebarOpen ? 'fixed top-0 contents' : ''
				} tablet:mt-14 tablet:mx-10`}
			>
				<Nav />
			</header>

			<FeedbackList />
		</>
	);
};

export default SuggestionsPage;
