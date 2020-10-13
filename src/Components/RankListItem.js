import React from 'react';

function RankListItem({ movies, active }) {
  return (
    <ol className="List">
      {movies.map((movie, index) => (
        <li
          key={index}
          style={{ cursor: 'pointer' }}
          className={movie.active ? 'active' : ''}
          onClick={() => active(movie.name)}
          onMouseOver={() => active(movie.name)}
        >
          {movie.id + '. ' + movie.name}
        </li>
      ))
      }
    </ol>
  );
}

export default RankListItem;