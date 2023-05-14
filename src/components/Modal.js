import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Modal.css';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef } from 'react';

const Modal = ({ content, setModalContent, setModalIsOpen, modalIsOpen }) => {
	const img = useRef(null);
	const imgContainer = useRef(null);

	useEffect(() => {
		const handleModalResize = () => {
			if (!img.current) return;

			const imgClientAR =
				img.current.clientHeight / img.current.clientWidth;
			const imgNatAR =
				img.current.naturalHeight / img.current.naturalWidth;

			if (imgClientAR - imgNatAR < -0.01) {
				imgContainer.current.classList.remove('landscape');
				img.current.classList.remove('landscape');
				imgContainer.current.classList.add('portrait');
				img.current.classList.add('portrait');
			} else if (imgClientAR - imgNatAR > 0.01) {
				imgContainer.current.classList.remove('portrait');
				img.current.classList.remove('portrait');
				imgContainer.current.classList.add('landscape');
				img.current.classList.add('landscape');
			}
		};
		if (!modalIsOpen) {
			window.removeEventListener('resize', handleModalResize);
			return;
		}
		window.addEventListener('resize', handleModalResize);
	}, [modalIsOpen]);

	useEffect(() => {
		img.current = document.querySelector('div.modal-img-container img');

		imgContainer.current = document.querySelector(
			'dialog.modal-container div.modal-content div.modal-img-container'
		);

		if (!img.current) return;

		if (img.current.naturalHeight >= img.current.naturalWidth) {
			imgContainer.current.classList.add('portrait');
			img.current.classList.add('portrait');
			// modal.current.classList.add('portrait');
		} else {
			imgContainer.current.classList.add('landscape');
			img.current.classList.add('landscape');
			// modal.current.classList.add('landscape');
		}

		const imgClientAR = img.current.clientHeight / img.current.clientWidth;
		const imgNatAR = img.current.naturalHeight / img.current.naturalWidth;

		if (imgClientAR - imgNatAR < -0.01) {
			imgContainer.current.classList.remove('landscape');
			img.current.classList.remove('landscape');
			imgContainer.current.classList.add('portrait');
			img.current.classList.add('portrait');
		} else if (imgClientAR - imgNatAR > 0.01) {
			imgContainer.current.classList.remove('portrait');
			img.current.classList.remove('portrait');
			imgContainer.current.classList.add('landscape');
			img.current.classList.add('landscape');
		}
	}, [content]);

	const handleCloseModal = (e) => {
		const dialogDimensions = e.currentTarget.getBoundingClientRect();
		if (
			e.clientX < dialogDimensions.left ||
			e.clientX > dialogDimensions.right ||
			e.clientY < dialogDimensions.top ||
			e.clientY > dialogDimensions.bottom
		) {
			setModalIsOpen(false);
			setModalContent(null);
			e.currentTarget.close();
		}
	};

	return (
		<dialog className="modal-container" onClick={handleCloseModal}>
			{content}
			<FontAwesomeIcon icon={faXmark} className="modal-close-btn" />
		</dialog>
	);
};

export default Modal;
