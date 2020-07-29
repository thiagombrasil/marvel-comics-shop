import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { useComics } from '../../hooks/useComics';

import ComicCard from './ComicCard'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    maxWidth: '1120px',
    margin: '0 auto',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
}));

export default function ListComics() {
	const classes = useStyles();
	const [comics] = useComics();

	return (
		<Grid container className={classes.root} spacing={3}>
			{comics.map((comic) =>(
				<Grid key={comic.id} item sm={6} md={4} xs={12}>
					<ComicCard
						key={comic.id}
						title={comic.title}
						description={comic.description}
						thumbnail={comic.thumbnail}
					/>
				</Grid>
			))};
		</Grid>
	);
}