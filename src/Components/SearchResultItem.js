import React from 'react';

function SearchResultItem({ movie }) {
  const { title, posters, type, nation, runtime, repRlsDate, titleEng, prodYear, rating, company, directors, actors } = movie;
  const poster = posters.split('|')[0];
  const director = directors.director[0].directorNm;
  const actor = actors.actor.splice(0, 5);
  const noImage = '/movie/img/noimage.gif';
  let real_title = title.replaceAll(' !HS ', '');
  real_title = real_title.replaceAll(' !HE ', '');
  let real_repRlsDate = repRlsDate.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
  return (
    <div className="Movie">
      <div className="Inner">
        <div className="Movie_Title">
          {real_title}
          <span>{titleEng + ' · ' + prodYear + '년'}</span>
        </div>
        <div className="Movie_Info">
          <ul className="Movie_Info_List">
            <li>{type} · <span>{rating}</span> · {nation + ' · ' + runtime + '분'}</li>
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
                <dd>{director}</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>출연</dt>
                <dd>{actor.map((actor, index) => <span key={index}>{actor.actorNm}</span>)}</dd>
              </dl>
            </li>
          </ul>
          <figure className="Movie_Poster">
            <img src={poster ? poster : noImage} alt={real_title} />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default SearchResultItem;