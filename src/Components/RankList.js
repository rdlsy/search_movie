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
        openDt: item.openDt
      });
      return array;
    });
    const list = array.slice(0, 6);
    return list;
  }

  const [movies] = useState(rankList);

  return (
    <>
      <RankListItem movies={movies} />
    </>
  );
}

export default RankList;