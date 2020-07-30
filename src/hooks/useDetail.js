import { useState, useEffect } from 'react';
import axios from 'axios';

import noImage from '../assets/no-image.gif'

import { baseUrl, timestamp, publicKey, hash } from '../services/api';

export const useDetail = () => {
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cover, setCover] = useState('');
  
    const comicDetail = async (id) => {
        const newUrl = baseUrl + `/${id}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
        const response = await axios.get(newUrl);

        const details = response.data.data.results[0];

        const coverSource = details.thumbnail.path + '.' +details.thumbnail.extension;
        const cover = 
            coverSource === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ?
                noImage : coverSource;

        setDetails(details);
        setCover(cover);


        setLoading(false);
    }

    useEffect(() => {
        const url = window.location.href;
        const sliptUrl = url.split('/');
        const id = sliptUrl[4];

        comicDetail(id);
    }, []);

    return [details , cover, loading];
}