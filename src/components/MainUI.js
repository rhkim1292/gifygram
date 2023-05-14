import { Navigate, Route, Routes } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Chat from './Chat.js';
import Profile from './Profile.js';
import Modal from './Modal.js';
import '../styles/MainUI.css';
import { db } from '../index.js';
import { useEffect, useRef, useState } from 'react';

const MainUI = ({ userRef }) => {
	const [modalContent, setModalContent] = useState(null);
	const [modalIsOpen, setModalIsOpen] = useState(false);

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
	}, [modalIsOpen, modalCloseBtn]);

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
				<Route
					path="/"
					element={
						<Home
							setModalContent={setModalContent}
							modal={modal}
							setModalIsOpen={setModalIsOpen}
						/>
					}
				/>
				<Route path="/chat" element={<Chat />} />
				<Route
					path="/profile"
					element={<Profile user={userRef.current} />}
				/>
			</Routes>
			<Modal
				content={modalContent}
				setModalContent={setModalContent}
				setModalIsOpen={setModalIsOpen}
				modalIsOpen={modalIsOpen}
			/>
		</div>
	);
};

export default MainUI;
