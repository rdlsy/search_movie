import React from 'react';
import { useAsync } from 'react-async';
import api from '../api';

async function getPoster({ movie }) {
  const response = await api.fetchPoster(movie.name);
  let result = response.data.Data[0].Result[0].posters;
  result = result.split('|')[0];
  return result;
}

function SliderListItem({ movie }) {
  const { data: poster, error, isLoading } = useAsync({
    promiseFn: getPoster,
    movie,
    watch: movie
  });

  const { name, openDt } = movie;

  if (isLoading) return <div className="Loading">로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;

  return (
    <>
      <img src={poster} />
      <dl className="SliderItem">
        <dt>{name}</dt>
        <dd>{openDt} 개봉</dd>
      </dl>
    </>
  );
}

export default SliderListItem;