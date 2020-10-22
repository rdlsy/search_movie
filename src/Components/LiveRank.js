import React from 'react';
import { useAsync } from 'react-async';
import api from '../api';
import RankList from './RankList';
import '../css/LiveRank.scss';

async function getRank() {
  const response = await api.fetchData();
  const result = response.data.boxOfficeResult.dailyBoxOfficeList;
  return result;
}

function LiveRank({ history }) {
  const { data: rank, error, isLoading } = useAsync({
    promiseFn: getRank,
  });

  if (error) return <div>에러가 발생했습니다.</div>;

  return (
    <article className="LiveRank">
      <div className="inner">
        <h2 className="SubTitle">실시간랭킹 <span>(일별 박스오피스)</span></h2>
        <div className="LiveRankWrap">
          {
            (isLoading) ?
              <div className="Loading">
                <span className="l1"></span>
                <span className="l2"></span>
                <span className="l3"></span>
              </div> :
              <RankList rank={rank} history={history} />
          }
        </div>
      </div>
    </article >
  );
}

export default LiveRank;