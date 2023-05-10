import '../styles/Home.css';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GifGrid from './GifGrid.js';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function Home() {
	const [query, setQuery] = useState('');
	const [gifUrls, setGifUrls] = useState([]);
	const isLoading = useRef(false);
	const [searchIsFocused, setSearchIsFocused] = useState(false);
	const [pos, setPos] = useState('');

	useEffect(() => {
		setGifUrls([]);
		setPos('');
		searchGifs();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query]);

	useEffect(() => {
		function handleScroll() {
			const scrollTop = document.documentElement.scrollTop;
			const windowHeight = window.innerHeight;
			const offsetHeight = document.documentElement.offsetHeight;
			const bottomThreshold = 5;

			if (scrollTop + windowHeight >= offsetHeight - bottomThreshold) {
				searchGifs();
			}
		}

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [gifUrls]);

	const searchGifs = () => {
		if (isLoading.current) return;
		// if (!query) {
		// 	setGifUrls([]);
		// 	setPos('');
		// 	return;
		// }

		isLoading.current = true;

		const apiKey = 'AIzaSyBJOOwPOsBC3X1eeG_DphyGLUbxexnyzqU';
		const clientKey = 'gifygram';
		var lmt = 9;

		// test search term
		var search_term = query;

		// using default locale of en_US
		var url;
		if (!query) {
			url =
				'https://tenor.googleapis.com/v2/featured?' +
				'&key=' +
				apiKey +
				'&client_key=' +
				clientKey +
				'&limit=' +
				lmt +
				'&pos=' +
				pos;
		} else {
			url =
				'https://tenor.googleapis.com/v2/search?q=' +
				search_term +
				'&key=' +
				apiKey +
				'&client_key=' +
				clientKey +
				'&limit=' +
				lmt +
				'&pos=' +
				pos;
		}

		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				const newGifs = data.results.map((gif) => {
					return gif.media_formats.gif.url;
				});
				setPos(data.next);
				setGifUrls((prevGifs) => [...prevGifs, ...newGifs]);
				isLoading.current = false;
			})
			.catch((error) => console.log(error));
	};

	const clearSearch = () => {
		setQuery('');
		setGifUrls([]);
		setPos('');
	};

	const handleSearchFocus = () => {
		setSearchIsFocused(true);
	};

	const handleSearchBlur = () => {
		setSearchIsFocused(false);
	};

	return (
		<div className="home-container">
			<label
				className="search-wrapper"
				onFocus={handleSearchFocus}
				onBlur={handleSearchBlur}
			>
				{!searchIsFocused && (
					<svg
						viewBox="0 0 24 24"
						width="16"
						height="16"
						stroke="currentColor"
						strokeWidth="2"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="css-i6dzq1"
					>
						<circle cx="11" cy="11" r="8"></circle>
						<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
					</svg>
				)}
				<input
					value={query}
					onChange={(event) => setQuery(event.target.value)}
					placeholder="Search"
				/>
				{searchIsFocused && (
					<FontAwesomeIcon
						icon={faCircleXmark}
						className="clear-btn"
						onMouseDown={clearSearch}
					/>
				)}
			</label>
			{<GifGrid gifUrls={gifUrls} />}
		</div>
	);
}

export default Home;
