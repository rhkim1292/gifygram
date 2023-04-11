import { useState, useEffect } from 'react';
import '../styles/GifGrid.css';

const GifGrid = ({ gifUrls, query }) => {
    const [page, setPage] = useState(1);
    const [gifsToShow, setGifsToShow] = useState(gifUrls.slice(0, 9));
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (query === '') {
            setPage(1);
            setGifsToShow(gifUrls.slice(0, 9));
        }
    }, [query, gifUrls]);

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 30
            ) {
                loadMoreGifs();
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gifsToShow]);

    const loadMoreGifs = () => {
        if (isLoading || gifsToShow.length === gifUrls.length) return;

        setIsLoading(true);

        const nextPage = page + 1;
        const startIndex = (nextPage - 1) * 9;
        const endIndex = startIndex + 9;
        const newGifsToShow = [
            ...gifsToShow,
            ...gifUrls.slice(startIndex, endIndex),
        ];
        setGifsToShow(newGifsToShow);
        setPage(nextPage);

        setIsLoading(false);
    };

    return (
        <div className="results-container">
            {gifsToShow.map((url, index) => (
                <div className="image-cell" key={index}>
                    <img key={url} src={url} alt={`${index}`} />
                </div>
            ))}
            {isLoading && <div>Loading...</div>}
        </div>
    );
};

export default GifGrid;
