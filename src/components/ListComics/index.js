import React from 'react';

import { useComics } from '../../hooks/useComics';

import ComicCard from './ComicCard'

export default function ListComics() {
	const [comics] = useComics();

	return (
		<div>
			{comics.map((comic) =>(
				<ComicCard
					key={comic.id}
					title={comic.title}
					description={comic.description}
					thumbnail={comic.thumbnail}
				/>
			))};
		</div>
	);
}