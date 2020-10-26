import React from 'react';
import { useAsync } from 'react-async';
import SearchResultItem from './SearchResultItem';
import api from '../api';

// async function getMovies({ movie }) {
//   const response = await api.fetchPoster(movie);
//   let result = response.data;
//   return result;
// }

async function getMovies({ movie }) {
  const response = await api.fetchPoster2(movie);
  let result = response.data;
  return result;
}


function SearchResult({ movie }) {
  const { data: movies, error, isLoading } = useAsync({
    promiseFn: getMovies,
    movie,
    watch: movie
  });

  if (isLoading) return <div className="Loading"><span className="l1"></span><span className="l2"></span><span className="l3"></span></div>;
  if (error) return <div>에러가 발생했습니다</div>;

  return (
    <>
      {
        (movies.Data[0].TotalCount === 0) ? <div className="Empty">검색결과 없음</div> :
          movies.Data[0].Result.map((movie, index) => (
            <SearchResultItem key={index} movie={movie} />
          ))
      }
    </>
  );
}

export default SearchResult;