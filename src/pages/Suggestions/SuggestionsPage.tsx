import { useSelector } from 'react-redux';
import FeedbackList from '../../components/Feedback/FeedbackList';
import Nav from '../../components/Nav/Nav';
import { selectIsSidebarOpen } from '../../redux/features/sidebar/sidebarSlice';
import SuggestionsBar from '../../components/SuggestionsBar/SuggestionsBar';

const SuggestionsPage = () => {
	const isSidebarOpen = useSelector(selectIsSidebarOpen);
	return (
		<div className="laptop:flex laptop:justify-center laptop:mx-[10.313rem] laptop:my-[5.875rem] laptop:gap-8">
			<header
				className={`mt-0 mx-0 ${
					isSidebarOpen ? 'fixed top-0 contents' : ''
				} tablet:mt-14 tablet:mx-10 laptop:mt-0 laptop:mx-0`}
			>
				<Nav />
			</header>
			<div className="laptop:flex laptop:flex-col laptop:grow">
				<SuggestionsBar />
				<FeedbackList />
			</div>
		</div>
	);
};

export default SuggestionsPage;
