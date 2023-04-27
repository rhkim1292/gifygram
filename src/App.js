import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase/compat/app';
import Username from './components/Username.js';
import './styles/App.css';
import LoginUI from './components/LoginUI.js';
import { useState } from 'react';
import MainUI from './components/MainUI.js';

function App() {
	const [user, setUser] = useState(null);

	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			{user ? <Navigate to="/" /> : <Navigate to="/login" />}
			<Routes>
				<Route exact path="/" element={<MainUI />} />
				<Route exact path="/login" element={<LoginUI />} />
				<Route exact path="/username" element={<Username />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
