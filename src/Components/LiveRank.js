import React, { useState, useEffect } from 'react';
import { useAsync } from 'react-async';
import '../css/LiveRank.scss';
import api from '../api';
import RankPoster from './RankPoster';

async function getRank() {
  const response = await api.fetchData();
  const result = response.data.boxOfficeResult.dailyBoxOfficeList;
  return result;
}

function LiveRank() {
  const { data: rank, error, isLoading } = useAsync({
    promiseFn: getRank,
  });
  const [movieName, setMovieName] = useState({
    name: null,
    active: false
  });

  if (isLoading) return <div></div>;
  if (error) return <div>에러가 발생했습니다</div>;

  const active = name => {
    setMovieName({
      name: name,
      active: !name.active
    });
  }

  return (
    <article className="LiveRank">
      <h2 className="SubTitle">실시간랭킹</h2>
      <div className="LiveRankWrap">
        <ol className="List">
          {rank.map((item, index) => (
            <li
              key={index}
              // onMouseOver={() => setMovieName(item.movieNm)}
              onClick={() => active(item.movieNm, item.active)}
              style={{ cursor: 'pointer' }}
              className={(item.movieNm === movieName.name) ? 'active' : ''}
              active={item.active}
            >
              {item.rank + '. ' + item.movieNm}
            </li>
          ))
            .slice(0, 6)
          }
        </ol>
        {movieName.name && <RankPoster movieName={movieName.name} />}
        {/* {
          !movieName.name ?
            (
              <RankPoster movieName={rank[0].movieNm} />
            ) :
            (
              <RankPoster movieName={movieName.name} />
            )
        } */}
      </div>
    </article >
  );
}

export default LiveRank;