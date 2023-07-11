import '../styles/GifGrid.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import LikeButton from './LikeButton.js';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '..';

const GifGrid = ({
	userData,
	gifUrls,
	setModalContent,
	modal,
	modalIsOpenRef,
	setModalIsOpen,
}) => {
	const handleClick = (gifId, url, index) => {
		if (!modal.current) return;

		let likeButton = null;

		setModalIsOpen(true);

		getDoc(doc(db, 'gif-data', gifId)).then((docSnap) => {
			if (!docSnap.exists()) {
				throw new Error(
					"tried rendering like button, but gif doesn't exist in database"
				);
			}
			const gifData = docSnap.data();
			if (gifData.usersLiked.includes(userData.current.uid)) {
				console.log('setting unlike button');
				likeButton = (
					<LikeButton
						gifId={gifId}
						likeStatus={true}
						userData={userData}
					/>
				);
			} else {
				console.log('setting like button');
				likeButton = (
					<LikeButton
						gifId={gifId}
						likeStatus={false}
						userData={userData}
					/>
				);
			}
			if (modalIsOpenRef.current)
				setModalContent(
					<div className="modal-content">
						<div className="modal-img-container">
							<img src={url} alt={`${index} full`} />
						</div>
						<div className="modal-desc-container">{likeButton}</div>
					</div>
				);
		});

		modal.current.showModal();
	};

	return (
		<div className="results-container">
			{gifUrls.map((gif, index) => (
				<div className="image-cell" key={index}>
					<img key={gif.id} src={gif.url} alt={`${index}`} />
					<div
						className="image-overlay"
						onClick={() => {
							handleClick(gif.id, gif.url, index);
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
