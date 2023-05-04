import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Chat from './Chat.js';
import Profile from './Profile.js';
import '../styles/MainUI.css';

const MainUI = ({ userRef }) => {
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
