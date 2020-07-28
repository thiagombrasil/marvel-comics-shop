import { useState, useEffect } from 'react';
import axios from 'axios';

import { timestamp, publicKey, hash, baseURL } from '../services/api';

export const useComics = () => {

	const [comics, setComics] = useState([]);

	const getComics = async () => {
		axios.get(`${baseURL}ts=${timestamp}&apikey=${publicKey}&hash=${hash}`)
			.then(response => {
				setComics(response.data.data.results);
			});
	}

	useEffect(() => {getComics()}, []);

	return [comics];
}