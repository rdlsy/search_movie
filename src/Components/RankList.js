import React, { useEffect, useState, useCallback } from 'react';
import RankListItem from './RankListItem';
import RankPoster from './RankPoster';

function RankList({ rank }) {

  const rankList = () => {
    const array = [];
    rank.map((item, index) => {
      array.push({
        id: index + 1,
        name: item.movieNm,
        active: false
      });
    })
    const list = array.slice(0, 6);
    return list;
  }

  const [movies, setMovies] = useState(rankList);
  const [activeMovie, setActiveMovie] = useState(null);

  const active = useCallback(
    (name) => {
      setActiveMovie(name);
      setMovies(movies =>
        movies.map(movie =>
          movie.name === name ? { ...movie, active: !movie.active } : { ...movie, active: false },
        ),
      );
    }, [],
  );

  useEffect(() => {
    setMovies(movies =>
      movies.map(item =>
        item.id === 1 ? { ...item, active: true } : item,
      ),
    );
    setActiveMovie(movies[0].name);
  }, []);

  return (
    <>
      <RankListItem movies={movies} active={active} />
      <RankPoster activeMovie={activeMovie} />
    </>
  );
}

export default RankList;