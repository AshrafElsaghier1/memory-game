import { useEffect, useState } from 'react';

const BASE_URL = 'https://api.pexels.com/v1/search';
const randomPages = () => Math.round(Math.random() * (10 - 1) + 1);

const useGetImages = gameOptions => {
    const [images, setImages] = useState([]);

    const buildUrl = () => {
        let url = new URL('https://api.pexels.com/v1/search');
        url.search = new URLSearchParams({
            query: gameOptions.category,
            orientation: 'sqaure',
            size: 'small',
            per_page: gameOptions.cardsCount / 2,
            page: randomPages(),
        });

        return url;
    };
    const fetchPics = () => {
        fetch(buildUrl(), {
            headers: {
                Authorization: '563492ad6f917000010000017344c337df48442aa5a6a3a88ffbab18',
            },
        })
            .then(data => data.json())
            .then(res => setImages(res.photos));
    };
    useEffect(() => {
        if (!gameOptions) return;
        fetchPics();
    }, [gameOptions]);
    return images;
};

export default useGetImages;
