import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Chat from './Chat.js';
import Profile from './Profile.js';
import Modal from './Modal.js';
import '../styles/MainUI.css';
import { useEffect, useRef, useState } from 'react';

const MainUI = ({ userData }) => {
	const [modalContent, setModalContent] = useState(null);
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const modalIsOpenRef = useRef(false);
	const modalCloseBtn = useRef(null);
	const modal = useRef(null);
	const lastScrollHeight = useRef(0);

	useEffect(() => {
		modal.current = document.querySelector('dialog.modal-container');
		modalCloseBtn.current = document.querySelector(
			'dialog.modal-container svg.modal-close-btn'
		);
	}, []);

	useEffect(() => {
		modalIsOpenRef.current = modalIsOpen;
		if (!modalCloseBtn.current) return;
		if (modalIsOpen) {
			lastScrollHeight.current = document.documentElement.scrollTop;
			document.documentElement.style.top = `-${lastScrollHeight.current}px`;
			document.documentElement.classList.add('no-scroll');
			modalCloseBtn.current.classList.remove('modal-closed-btn');
		} else {
			document.documentElement.classList.remove('no-scroll');
			document.documentElement.scrollBy(0, lastScrollHeight.current);
			modalCloseBtn.current.classList.add('modal-closed-btn');
		}
	}, [modalIsOpen]);

	if (!userData.current) {
		return <Navigate to="/login" />;
	}

	return (
		<div className="app-container">
			<Navbar userData={userData} />
			<Routes>
				<Route
					path="/"
					element={
						<Home
							userData={userData}
							setModalContent={setModalContent}
							modal={modal}
							modalIsOpenRef={modalIsOpenRef}
							setModalIsOpen={setModalIsOpen}
						/>
					}
				/>
				<Route path="/chat" element={<Chat />} />
				<Route
					path="/profile"
					element={<Profile userData={userData} />}
				/>
			</Routes>
			<Modal
				content={modalContent}
				setModalContent={setModalContent}
				modalIsOpen={modalIsOpen}
				setModalIsOpen={setModalIsOpen}
			/>
		</div>
	);
};

export default MainUI;
