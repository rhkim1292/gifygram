import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Modal.css';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const Modal = ({ content, setModalContent, setModalIsOpen }) => {
	useEffect(() => {
		const img = document.querySelector('div.modal-img-container img');

		const imgContainer = document.querySelector(
			'dialog.modal-container div.modal-content div.modal-img-container'
		);

		if (!img) return;

		if (img.naturalHeight >= img.naturalWidth) {
			imgContainer.classList.add('portrait');
			img.classList.add('portrait');
			// modal.current.classList.add('portrait');
		} else {
			imgContainer.classList.add('landscape');
			img.classList.add('landscape');
			// modal.current.classList.add('landscape');
		}

		const imgClientAR = img.clientHeight / img.clientWidth;
		const imgNatAR = img.naturalHeight / img.naturalWidth;

		if (imgClientAR - imgNatAR < -0.01) {
			imgContainer.classList.remove('landscape');
			img.classList.remove('landscape');
			imgContainer.classList.add('portrait');
			img.classList.add('portrait');
		} else if (imgClientAR - imgNatAR > 0.01) {
			imgContainer.classList.remove('portrait');
			img.classList.remove('portrait');
			imgContainer.classList.add('landscape');
			img.classList.add('landscape');
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
