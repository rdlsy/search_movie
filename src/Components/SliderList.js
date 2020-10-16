import React, { useState } from 'react';
import SliderListItem from './SliderListItem';
import Slider from 'react-slick';

function SliderList({ data }) {
  const sliderList = () => {
    const array = [];
    data.map((item, index) => {
      array.push({
        id: index + 1,
        name: item.real_title,
        imgSrc: item.main_img,
        cate: item.cate_h
      });
    });
    let list = array.filter(n => {
      return n.name;
    })
    list = list.splice(0, 10);
    return list;
  }
  const [sliderItem, setSliderItem] = useState(sliderList);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1175,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2
        }
      },
    ]
  }

  return (
    <div className="SliderList">
      <Slider {...settings}>
        {sliderItem.map(movie => (
          <SliderListItem
            key={movie.id}
            movie={movie}
          />
        ))}
      </Slider>
    </div>
  );
}

export default SliderList;