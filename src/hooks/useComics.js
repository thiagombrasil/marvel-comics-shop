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

            axios.get(newUrl)
                .then(response => {
                setComics(response.data.data.results);
            });
        }

        getComics();
    }, [offSet]);

	const handlePrevClick = () => {
        var newPage = page - 1;
        var newOffSet = offSet - 8;

        if(newPage <= 1){
            newPage = 1;
        }

        if(newOffSet <= 0){
            newOffSet = 0;
        }

        setPage(newPage);
        setOffSet(newOffSet);
    }

    const handleNextClick = () => {
        const newPage = page + 1;
        const newOffSet = offSet + 8;

        setPage(newPage);
        setOffSet(newOffSet);
    }

    return [{comics, offSet, page}, handleNextClick, handlePrevClick];
}