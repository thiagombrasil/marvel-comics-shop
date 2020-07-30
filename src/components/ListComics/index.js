import React from 'react';
import Grid from '@material-ui/core/Grid';

import ComicCard from './ComicCard'
import { useComics } from '../../hooks/useComics';
import { useStyles } from './styles';

export default function ListComics() {
	const classes = useStyles();
	const [{comics, offSet, page}, handleNextClick, handlePrevClick] = useComics();

	return (
		<Grid container className={classes.root} spacing={3}>
			{comics.map((comic) =>(
				<Grid key={comic.id} item sm={6} md={4} xs={12}>
					<ComicCard
						id={comic.id}
						title={comic.title}
						description={comic.description}
						thumbnail={comic.thumbnail}
					/>
				</Grid>
			))}
		</Grid>
	);
}