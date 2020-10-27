import React from 'react';
import Slider from 'react-slick';
import MovieStill from './MovieStill';

function SearchResultDetail({ movie }) {
  const { title, posters, type, nation, runtime, repRlsDate, titleEng, prodYear, rating, company, director, actor, stlls } = movie;
  const poster = posters.split('|')[0];
  const still = stlls.split('|');
  const directorNm = director[0].directorNm;
  const actors = actor.splice(0, 5);
  //actors = actor.splice(0, 5);
  const noImage = '/search_movie/img/noimage.gif';
  const ratingGrade = rating[0].ratingGrade;
  let real_title = title.replaceAll(' !HS ', '');
  real_title = real_title.replaceAll(' !HE ', '');
  let real_repRlsDate = repRlsDate.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
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
    <div className="Movie_Detail">
      <div className="Inner">
        <div className="Movie_Title">
          {real_title}
          <span>{titleEng + ' · ' + prodYear + '년'}</span>
        </div>
        <div className="Movie_Info">
          <ul className="Movie_Info_List">
            <li>{type} · <span>{ratingGrade}</span> · {nation + ' · ' + runtime + '분'}</li>
            <li>
              <dl>
                <dt>개봉일</dt>
                <dd>{real_repRlsDate}</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>제작사</dt>
                <dd>{company}</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>감독</dt>
                <dd>{directorNm}</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>출연</dt>
                <dd>{actors.map((actor, index) => <span key={index}>{actor.actorNm}</span>)}</dd>
              </dl>
            </li>
          </ul>
          <figure className="Movie_Poster">
            <img src={poster ? poster : noImage} alt={real_title} />
          </figure>
        </div>
      </div>
      <div className="Movie_Stills">
        <p className="SubTitle">이미지</p>
        <ul>
          <Slider {...settings}>
            {still.map((still, index) => (
              <MovieStill
                key={index}
                still={still}
              />
            ))}
          </Slider>
        </ul>
      </div>
    </div>
  );
}

export default SearchResultDetail;