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

    /* Funções para atribuições de preço
    function getRndNum(min, max) {
        return Math.random() * (max - min) + min;
    }

    function setPrices(item) {
        item.rare ?
            item['price'] = Number.parseFloat(getRndNum(100, 200)).toPrecision(5) :
            item['price'] = Number.parseFloat(getRndNum(20, 80)).toPrecision(4)
    }

    */

    console.log(comics);

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

    const handleChange = (event, value) => {
        setPage(value);
        setOffSet((value - 1) * 18);
    };

    return [{comics, page, load}, handleChange];
}