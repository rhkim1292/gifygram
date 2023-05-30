import firebase from 'firebase/compat/app';
import { Routes, Route } from 'react-router-dom';
import LoginUI from './components/LoginUI.js';
import { useEffect, useRef, useState } from 'react';
import MainUI from './components/MainUI.js';
import Loading from './components/Loading.js';
import { getDoc, doc, setDoc } from 'firebase/firestore';
import { db } from './index.js';

function App() {
	const userData = useRef(null);
	const [userLoaded, setUserLoaded] = useState(false);

	// useEffect(() => {
	// 	firebase.auth().onAuthStateChanged((user) => {
	// 		userRef.current = user;
	// 		setUserLoaded(true);
	// 	});
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, []);

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			// userData.current = user;
			if (!user) {
				setUserLoaded(true);
			} else {
				setUserLoaded(false);
				getDoc(doc(db, 'users', user.uid)).then((docSnap) => {
					if (!docSnap.exists()) {
						userData.current = {
							uid: user.uid,
							displayName: user.displayName,
							email: user.email,
							gifsLiked: [],
							photoURL: user.photoURL,
						};
						setDoc(
							doc(db, 'users', userData.current.uid),
							userData.current,
							{ merge: true }
						).then(() => {
							setUserLoaded(true);
						});
					} else {
						userData.current = docSnap.data();
						setUserLoaded(true);
					}
				});
			}
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
				element={<LoginUI userData={userData} />}
			/>
			<Route exact path="/*" element={<MainUI userData={userData} />} />
		</Routes>
	);
}

export default App;
