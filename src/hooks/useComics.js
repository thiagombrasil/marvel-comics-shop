import { useState, useEffect } from 'react';
import axios from 'axios';

import { timestamp, publicKey, hash, baseUrl } from '../services/api';

export const useComics = () => {

	const [comics, setComics] = useState([]);
	const [offSet, setOffSet] = useState(0);
	const [page, setPage] = useState(1);
    const [load, setLoad] = useState(true);

    const randomComic = () => {
        let key1 = Math.floor(Math.random() * 18);
        let key2 = 0;

        do {
            const random = Math.floor(Math.random() * 18);             
            key2 = random;
        } while(key2 === key1)

        return {key1, key2};
    }

	useEffect(() => {
        const getComics = async () => {
        const newUrl = baseUrl + `?limit=18&offset=${offSet}&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

        const response = await axios.get(newUrl);
        const comics = response.data.data.results;
        const {key1, key2} = randomComic();

        comics.map((comic) => {
            return comic['rare'] = false
        });

        comics[key1].rare = true;
        comics[key2].rare = true;

        setComics(comics);

        setLoad(false);
        }

        getComics();

    }, [offSet]);

    function scrollToTop(){
        const element = document.querySelector('#back-to-top-anchor');

        if(element){
            element.scrollIntoView();
        }
    }

    const handleChange = (event, value) => {
        setPage(value);
        setOffSet((value - 1) * 18);

        scrollToTop();
    };

    return [{comics, page, load}, handleChange];
}