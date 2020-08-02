import React from 'react';
import Grid from '@material-ui/core/Grid';

import ComicCard from '../../components/ListComics/ComicCard'
import { useComics } from '../../hooks/useComics';
import { useStyles } from './styles';

import ListComics from '../../components/ListComics';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';

export default function Home() {
	const classes = useStyles();
	const [{comics, page, loading}, handleChange] = useComics();

	return(
		<div>
			{loading ? <Loading /> : (
				<div>
					<ListComics>
						<Grid container className={classes.root} spacing={3}>
							{comics.map((comic) => (
								<Grid key={comic.id} item sm={6} md={4} xs={12}>
									<ComicCard
										id={comic.id}
										rare={comic.rare}
										title={comic.title}
										price={comic.price}
										thumbnail={comic.thumbnail}
									/>
								</Grid>
							))}
						</Grid>
					</ListComics>
					<Pagination page={page} handleChange={handleChange} />
				</div>
			)}
		</div>
	);
}