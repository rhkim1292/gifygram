import '../styles/GifGrid.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const GifGrid = ({ gifUrls }) => {
	if (gifUrls.length === 0) return null;

	return (
		<div className="results-container">
			{gifUrls.map((url, index) => (
				<div className="image-cell" key={index}>
					<img key={url} src={url} alt={`${index}`} />
					<div className="image-overlay">
						<FontAwesomeIcon icon={faHeart} /> 0
					</div>
				</div>
			))}
		</div>
	);
};

export default GifGrid;
