import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Chat from './Chat.js';

const MainUI = () => {
	return (
		<div className="app-container">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="chat" element={<Chat />} />
			</Routes>
		</div>
	);
};

export default MainUI;
