import React from 'react';
import { useDetail } from '../../hooks/useDetail';
import Loading from '../../components/Loading';
import ComicDetails from '../../components/ComicDetails';

import { useStyles } from './styles';

export default function Details() {
  const classes = useStyles();
  const [ details, cover, loading] = useDetail();
  const description = details.description==null ? 'Descrição indisponível' : details.description;

	return (
    <div className={classes.container}>
      {loading ? 
        <Loading /> : (
          <div>
            <ComicDetails
              comicId={details.id}
              title={details.title}
              description={description}
              cover={cover}
            />
          </div>
      )}
    </div>
	);
}