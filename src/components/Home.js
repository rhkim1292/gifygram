import '../styles/Home.css';
import { useState } from 'react';
import GifGrid from './GifGrid.js';

function Home() {
    const [query, setQuery] = useState('');
    const [gifUrls, setGifUrls] = useState([]);

    const searchGifs = async () => {
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
        console.log(json.results);
        const urls = json.results.map((result) => {
            return result['media_formats']['nanogif'].url;
        });
        console.log(urls);
        setGifUrls(urls);
    };
    return (
        <div className="home-container">
            <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
            <button onClick={searchGifs}>Search</button>
            <div className="results-container">
                <GifGrid gifUrls={gifUrls} />
            </div>
        </div>
    );
}

export default Home;
