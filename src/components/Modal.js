import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Modal.css';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ content, setModalContent, setModalIsOpen }) => {
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
