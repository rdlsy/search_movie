import React from 'react';
import { useAsync } from 'react-async';
import api from '../api';

async function getPoster({ activeMovie }) {
  const response = await api.fetchPoster(activeMovie);
  let result = response.data.Data[0].Result[0].posters;
  result = result.split('|')[0];
  return result;
}

function RankPoster({ activeMovie }) {
  const { data: movie, error, isLoading } = useAsync({
    promiseFn: getPoster,
    activeMovie,
    watch: activeMovie
  });

  if (isLoading) return <div className="Loading">로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;

  return (
    <a href="#" className="PosterImg">
      <img src={movie} />
    </a>
  );
}

export default RankPoster;