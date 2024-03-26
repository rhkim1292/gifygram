import gifygramLogoSmall from '../images/gifygram-logo-small.png';
import '../styles/Loading.css';

const Loading = () => {
	return (
		<div className="loading-container">
			<img
				className="gifygram-logo-small"
				src={gifygramLogoSmall}
				alt="gifygram logo small"
			/>
		</div>
	);
};

export default Loading;
