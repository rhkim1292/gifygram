import { useState } from 'react';
import Tenor from 'tenorjs';
import GifGrid from './GifGrid.js';

const Search = () => {
    const [query, setQuery] = useState('');
    const [gifUrls, setGifUrls] = useState([]);

    const searchGifs = async () => {
        const response = await Tenor.Search.Query(query, '10', '0', 'high');
        const urls = response.results.map((result) => result.media[0].gif.url);
        setGifUrls(urls);
    };

    return (
        <div>
            <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
            <button onClick={searchGifs}>Search</button>
            <GifGrid gifUrls={gifUrls} />
        </div>
    );
};

export default Search;
