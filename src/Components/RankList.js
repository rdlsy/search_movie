import React, { useState } from 'react';
import RankListItem from './RankListItem';
function RankList({ rank }) {
  const rankList = () => {
    const array = [];
    rank.map((item, index) => {
      array.push({
        id: index + 1,
        name: item.movieNm,
        rankOldAndNew: item.rankOldAndNew,
        audiAcc: item.audiAcc
      });
    });
    const list = array.slice(0, 6);
    return list;
  }

  const [movies, setMovies] = useState(rankList);

  return (
    <>
      <RankListItem movies={movies} />
    </>
  );
}

export default RankList;