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
            {movie.id + '.' + (movie.rankOldAndNew === 'NEW' ? <span className="Type">NEW</span> : '')}
            <span className="Name">{movie.name}</span>
          </span>
          <span className="Count">{movie.audiAcc}명</span>
        </li>
      ))
      }
    </ol>
  );
}

export default RankListItem;