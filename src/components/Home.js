import '../styles/Home.css';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GifGrid from './GifGrid.js';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function Home() {
    const [query, setQuery] = useState('');
    const [gifUrls, setGifUrls] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchIsFocused, setSearchIsFocused] = useState(false);

    useEffect(() => {
        searchGifs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    const searchGifs = async () => {
        if (!query) {
            setGifUrls([]);
            return;
        }

        setIsLoading(true);

        const apiKey = 'AIzaSyBJOOwPOsBC3X1eeG_DphyGLUbxexnyzqU';
        const clientkey = 'gifygram';
        var lmt = 9;

        // test search term
        var search_term = query;

        // using default locale of en_US
        var url =
            'https://tenor.googleapis.com/v2/search?q=' +
            search_term +
            '&key=' +
            apiKey +
            '&client_key=' +
            clientkey +
            '&limit=' +
            lmt;
        const response = await fetch(url);
        const json = await response.json();
        const urls = json.results.map((result) => {
            return result['media_formats']['nanogif'].url;
        });
        setGifUrls(urls);

        setIsLoading(false);
    };

    const clearSearch = () => {
        setQuery('');
        setGifUrls([]);
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
            {isLoading ? <div>Loading...</div> : <GifGrid gifUrls={gifUrls} />}
        </div>
    );
}

export default Home;
