import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Modal.css';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ content, setModalContent, setModalIsOpen }) => {
	const handleClose = (e) => {
		setModalIsOpen(false);
		setModalContent(null);
		e.currentTarget.parentElement.close();
	};

	return (
		<dialog className="modal-container">
			{content}
			<FontAwesomeIcon
				icon={faXmark}
				className="modal-close-btn"
				onClick={handleClose}
			/>
		</dialog>
	);
};

export default Modal;
