import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Nav />}></Route>
		</Routes>
	);
}

export default App;
