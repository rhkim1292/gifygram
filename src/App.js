import firebase from 'firebase/compat/app';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import LoginUI from './components/LoginUI.js';
import { useEffect, useRef, useState } from 'react';
import MainUI from './components/MainUI.js';
import gifygramLogoSmall from './images/gifygram-logo-small.png';

function App() {
	const userRef = useRef(null);
	const [userLoaded, setUserLoaded] = useState(false);

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			userRef.current = user;
			setUserLoaded(true);
		});
	}, []);

	if (!userLoaded) {
		return (
			<div className="loading-container">
				<img
					className="gifygram-logo-small"
					src={gifygramLogoSmall}
					alt="gifygram logo small"
				/>
			</div>
		);
	}

	return (
		<Routes>
			<Route
				exact
				path="/login"
				element={<LoginUI userRef={userRef} />}
			/>
			<Route exact path="/*" element={<MainUI userRef={userRef} />} />
		</Routes>
	);
}

export default App;
