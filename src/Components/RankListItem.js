import React from 'react';

function RankListItem({ movies }) {
  return (
    <ol className="List">
      {movies.map((movie, index) => (
        <li
          key={index}
          style={{ cursor: 'pointer' }}
        >
          <span className="Title">
            {movie.id + '.'}
            <span className="Name">{movie.name}</span>
            {(movie.rankOldAndNew === 'NEW') ? <span className="Type">NEW</span> : ''}
          </span>
          <span className="Count">{movie.openDt}</span>
        </li>
      ))
      }
    </ol>
  );
}

export default RankListItem;