import React from 'react';
import { useAsync } from 'react-async';
import api from '../api';
import SliderList from './SliderList';

async function getRankWeek() {
  const rwResponse = await api.fetchDataWeek();
  const rwResult = rwResponse.data.boxOfficeResult.weeklyBoxOfficeList;
  return rwResult;
}

function Slider() {
  const { data: rankWeek, error, isLoading } = useAsync({
    promiseFn: getRankWeek,
  });

  if (isLoading) return <div></div>;
  if (error) return <div>에러가 발생했습니다</div>;

  return (
    <article className="Slider">
      <div className="SliderWrap">
        <SliderList data={rankWeek} />
      </div>
    </article >
  );
}

export default Slider;