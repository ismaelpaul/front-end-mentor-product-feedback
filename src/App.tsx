import { Route, Routes } from 'react-router-dom';
import SuggestionsPage from './pages/Suggestions/SuggestionsPage';
import FeedbackDetailPage from './pages/FeedbackDetail/FeedbackDetailPage';
import NewFeedbackPage from './pages/NewFeedback/NewFeedbackPage';
import RoadmapPage from './pages/Roadmap/RoadmapPage';

function App() {
	return (
		<Routes>
			<Route path="/" element={<SuggestionsPage />}></Route>
			<Route
				path="/product-requests/:request_id"
				element={<FeedbackDetailPage />}
			></Route>
			<Route path="/new-feedback" element={<NewFeedbackPage />}></Route>
			<Route path="/roadmap" element={<RoadmapPage />}></Route>
		</Routes>
	);
}

export default App;
