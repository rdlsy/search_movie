import React, { useState, useCallback } from 'react';
import SliderListItem from './SliderListItem';
import Slider from 'react-slick';
import MovieView from './MovieView';

function SliderList({ data }) {
  const sliderList = () => {
    const array = [];
    data.map((item, index) => {
      array.push({
        id: index + 1,
        idx: item.idx,
        name: item.real_title,
        imgSrc: item.main_img,
        cate: item.cate_h,
        url: item.url_1min
      });
      return array;
    });
    let list = array.filter(n => {
      return n.name;
    })
    list = list.splice(0, 10);
    return list;
  }
  const [sliderItem] = useState(sliderList);

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

  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    idx: '',
    url: ''
  });

  const showPopup = useCallback((idx, url) => {
    setOpen(!open);
    setInfo({
      idx: idx,
      url: url
    });
  }, [open]);

  const closePopup = useCallback(() => {
    setOpen(!open);
  }, [open])


  return (
    <div className="SliderList">
      <Slider {...settings}>
        {sliderItem.map(movie => (
          <SliderListItem
            key={movie.id}
            movie={movie}
            showPopup={showPopup}
          />
        ))}
      </Slider>
      {
        open && (
          <MovieView info={info} closePopup={closePopup} />
        )
      }
    </div>
  );
}

export default SliderList;