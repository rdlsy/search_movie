import React from 'react';
import { useAsync } from 'react-async';
import SearchResultItem from './SearchResultItem';
import api from '../api';

async function getMovies({ movie }) {
  const response = await api.fetchPoster(movie);
  let result = response.data.Data[0].Result[0];
  return result;
}

function SearchResult({ movie }) {
  const { data: data, error, isLoading } = useAsync({
    promiseFn: getMovies,
    movie,
    watch: movie
  });

  if (isLoading) return <div className="Loading">로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;

  return (
    (movie) ? <SearchResultItem data={data} /> : ''
  );
}

export default SearchResult;