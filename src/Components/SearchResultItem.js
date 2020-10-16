import React from 'react';

function SearchResultItem({ data }) {
  console.log(data)

  const { title, posters, type, nation, runtime, titleEng, prodYear, rating, company, directors, actors } = data;
  const poster = posters.split('|')[0];
  const director = directors.director[0].directorNm;
  const actor = actors.actor.splice(0, 5);
  console.log(actor)

  return (
    <div className="Movie">
      <div className="Inner">
        <div className="Movie_Title">
          {title}<br />
          <span>{titleEng + '·' + prodYear + '년'}</span>
        </div>
        <div className="Movie_Info">
          <ul className="Movie_Info_List">
            <li>{type} · <span>{rating}</span> · {nation + '·' + runtime + '년'}</li>
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
                <dd></dd>
              </dl>
            </li>
          </ul>
          <figure className="Movie_Poster">
            <img src={poster} alt={title} />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default SearchResultItem;