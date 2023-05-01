import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Chat from './Chat.js';
import '../styles/MainUI.css';

const MainUI = ({ userRef }) => {
	return (
		<div className="app-container">
			<Navbar userRef={userRef} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/chat" element={<Chat />} />
			</Routes>
		</div>
	);
};

export default MainUI;
