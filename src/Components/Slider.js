import React from 'react';
import { useAsync } from 'react-async';
import api from '../api';
import SliderList from './SliderList';
import '../css/Slider.scss';

async function getRankCity() {
  const response = await api.fetchRankCity();
  return response;
}

function Slider() {
  const { data: rankcity, error, isLoading } = useAsync({
    promiseFn: getRankCity,
  });

  if (isLoading) return <div></div>;
  if (error) return <div>에러가 발생했습니다</div>;

  return (
    <article className="Slider">
      <div className="SliderWrap">
        <SliderList data={rankcity} />
      </div>
    </article >
  );
}

export default Slider;