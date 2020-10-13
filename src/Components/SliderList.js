import React, { useState } from 'react';
import SliderListItem from './SliderListItem';

function SliderList({ data }) {
  const sliderList = () => {
    const rwArray = [];
    data.map((item, index) => {
      rwArray.push({
        id: index + 1,
        name: item.movieNm
      });
    });
    return rwArray;
  }
  const [sliderItem, setSliderItem] = useState(sliderList);

  return (
    <div className="SliderList">
      {sliderItem.map(movie => (
        <SliderListItem
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
  );
}

export default SliderList;