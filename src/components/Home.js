import '../styles/Home.css';
import { useEffect, useState } from 'react';
import GifGrid from './GifGrid.js';

function Home() {
    const [query, setQuery] = useState('');
    const [gifUrls, setGifUrls] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
        var lmt = 8;

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

    return (
        <div className="home-container">
            <div className="search-wrapper">
                <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search"
                />
                {query && (
                    <button className="clear-btn" onClick={clearSearch}>
                        x
                    </button>
                )}
            </div>
            {isLoading ? <div>Loading...</div> : <GifGrid gifUrls={gifUrls} />}
        </div>
    );
}

export default Home;
