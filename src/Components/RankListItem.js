import React from 'react';

function RankListItem({ movie, history }) {
  const { id, name, rankOldAndNew, rankInten, audiCnt } = movie;
  const rankIn = Math.abs(rankInten);
  const searchMovie = (name) => {
    history.push(`/search?title=${name}`);
  }
  const test = (a, b) => {
    let type;
    if (a === 'NEW') {
      type = 'New';
    } else if (b < 0) {
      type = 'Down';
    } else if (b > 0) {
      type = 'Up';
    } else {
      type = 'Minus'
    }
    return type;
  }

  return (
    <li onClick={() => searchMovie(movie.name)}>
      <span className="Title">
        {id + '.'}
        <span className="Name">{name}</span>
        <span className={test(rankOldAndNew, rankInten)}>{(!(rankIn === 0)) ? rankIn : ''}</span>
      </span>
      <span className="Count">{audiCnt}명</span>
    </li>
  );
}

export default RankListItem;