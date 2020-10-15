import React from 'react';
import { useAsync } from 'react-async';
import api from '../api';
import SliderList from './SliderList';
import '../css/Slider.scss';

async function getRankWeek() {
  const response = await api.fetchDataWeek();
  const result = response.data.boxOfficeResult.weeklyBoxOfficeList;
  return result;
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