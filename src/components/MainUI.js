import { Navigate, Route, Routes } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Chat from './Chat.js';
import Profile from './Profile.js';
import '../styles/MainUI.css';
import { db } from '../index.js';
import { useEffect } from 'react';

const MainUI = ({ userRef }) => {
	useEffect(() => {
		if (!userRef.current) return;
		setDoc(doc(db, 'users', userRef.current.uid), {
			displayName: userRef.current.displayName,
			email: userRef.current.email,
		});
	}, [userRef]);

	if (!userRef.current) return <Navigate to="/login" />;

	return (
		<div className="app-container">
			<Navbar userRef={userRef} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/chat" element={<Chat />} />
				<Route
					path="/profile"
					element={<Profile user={userRef.current} />}
				/>
			</Routes>
		</div>
	);
};

export default MainUI;
