import '../styles/GifGrid.css';

const GifGrid = ({ gifUrls }) => {
	return (
		<div className="results-container">
			{gifUrls.map((url, index) => (
				<div className="image-cell" key={index}>
					<img key={url} src={url} alt={`${index}`} />
				</div>
			))}
		</div>
	);
};

export default GifGrid;
