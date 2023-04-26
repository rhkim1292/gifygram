import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import Username from './components/Username.js';
import './styles/App.css';
import LoginUI from './components/LoginUI.js';

function App() {
	const [user, loading] = useAuthState(auth);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route exact path="/">
					{user ? <Navigate to="/username" /> : <LoginUI />}
				</Route>
				<Route exact path="/username">
					{user ? <Username user={user} /> : <Navigate to="/" />}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
