import { useState, useEffect } from 'react';
import axios from 'axios';

import { timestamp, publicKey, hash, baseUrl } from '../services/api';

export const useComics = () => {

	const [comics, setComics] = useState([]);
	const [offSet, setOffSet] = useState(0);
	const [page, setPage] = useState(1);
    const [load, setLoad] = useState(true);

	useEffect(() => {
        const getComics = async () => {
            const newUrl = baseUrl + `?limit=18&offset=${offSet}&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

            const response = await axios.get(newUrl);
            const comics = response.data.data.results;

            setComics(comics);

            setLoad(false);
        }

        getComics();
    }, [offSet]);

    const handleChange = (event, value) => {
        setPage(value);
        setOffSet((value - 1) * 18);
    };

    return [{comics, page, load}, handleChange];
}