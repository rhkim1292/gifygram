import firebase from 'firebase/compat/app';
import { Routes, Route } from 'react-router-dom';
import LoginUI from './components/LoginUI.js';
import { useEffect, useRef, useState } from 'react';
import MainUI from './components/MainUI.js';
import Loading from './components/Loading.js';

function App() {
	const userRef = useRef(null);
	const [userLoaded, setUserLoaded] = useState(false);

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			userRef.current = user;
			setUserLoaded(true);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (!userLoaded) {
		return <Loading />;
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
