import React, { useState } from 'react';
import RankListItem from './RankListItem';

function RankList({ rank, history }) {
  const rankList = () => {
    const array = [];
    rank.map((item, index) => {
      array.push({
        id: index + 1,
        name: item.movieNm,
        rankOldAndNew: item.rankOldAndNew,
        rankInten: item.rankInten,
        audiCnt: item.audiCnt
      });
      return array;
    });
    return array;
  }

  const [movies] = useState(rankList);

  return (
    <ol className="List">
      {movies.map((movie, index) => (
        <RankListItem key={index} movie={movie} history={history} />
      ))}
    </ol>
  );
}

export default RankList;