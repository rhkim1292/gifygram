import '../styles/GifGrid.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const GifGrid = ({ gifUrls, setModalContent, modal, setModalIsOpen }) => {
	const handleClick = (url, index) => {
		if (!modal.current) return;
		setModalIsOpen(true);
		setModalContent(<img src={url} alt={`${index} full`} />);
		modal.current.showModal();
	};

	return (
		<div className="results-container">
			{gifUrls.map((url, index) => (
				<div className="image-cell" key={index}>
					<img key={url} src={url} alt={`${index}`} />
					<div
						className="image-overlay"
						onClick={() => {
							handleClick(url, index);
						}}
					>
						<FontAwesomeIcon icon={faHeart} /> 0
					</div>
				</div>
			))}
		</div>
	);
};

export default GifGrid;
