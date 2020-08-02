import React from 'react';
import { useDetail } from '../../hooks/useDetail';
import Loading from '../../components/Loading';
import ComicDetails from '../../components/ComicDetails';

export default function Details() {
  const [ details, cover, loading] = useDetail();
  const description = details.description==null ? 'Descrição indisponível' : details.description;

	return (
    <div>
      {loading ? 
        <Loading /> : (
          <div>
            <ComicDetails
              comic={details}
              title={details.title}
              description={description}
              cover={cover}
            />
          </div>
      )}
    </div>
	);
}