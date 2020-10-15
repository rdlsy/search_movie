import React from 'react';
import { useAsync } from 'react-async';
import qs from 'qs';
import api from '../api';

async function getMovies({ movies }) {
  const response = await api.fetchPoster(movies.name);
  let result = response.data.Data[0].Result[0].posters;
  result = result.split('|')[0];
  return result;
}

function SearchResult({ movies, location }) {
  const query = qs.parse(location.search.substr(1));
  const detail = query.detail === movies;
  const { data: poster, error, isLoading } = useAsync({
    promiseFn: getMovies,
    movies,
    watch: movies
  });

  if (isLoading) return <div className="Loading">로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;

  return (
    <>
      {detail && <img src={poster} />}
    </>
  );
}

export default SearchResult;