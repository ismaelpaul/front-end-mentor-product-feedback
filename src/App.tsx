import { Route, Routes } from 'react-router-dom';
import SuggestionsPage from './pages/Suggestions/SuggestionsPage';
import FeedbackDetailPage from './pages/FeedbackDetail/FeedbackDetailPage';

function App() {
	return (
		<Routes>
			<Route path="/" element={<SuggestionsPage />}></Route>
			<Route
				path="/product-requests/:request_id"
				element={<FeedbackDetailPage />}
			></Route>
		</Routes>
	);
}

export default App;
