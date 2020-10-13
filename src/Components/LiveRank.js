import React from 'react';
import { useAsync } from 'react-async';
import '../css/LiveRank.scss';
import api from '../api';
import RankList from './RankList';

async function getRank() {
  const response = await api.fetchData();
  const result = response.data.boxOfficeResult.dailyBoxOfficeList;
  return result;
}

function LiveRank() {
  const { data: rank, error, isLoading } = useAsync({
    promiseFn: getRank,
  });

  if (isLoading) return <div></div>;
  if (error) return <div>에러가 발생했습니다</div>;

  return (
    <article className="LiveRank">
      <div className="inner">
        <h2 className="SubTitle">실시간랭킹</h2>
        <div className="LiveRankWrap">
          <RankList rank={rank} />
        </div>
      </div>
    </article >
  );
}

export default LiveRank;