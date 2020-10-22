import React from 'react';
import { Link } from 'react-router-dom';
import '../css/MovieView.scss';

function MovieView({ closePopup, info }) {
  const link = `https://www.filecity.co.kr/#idx=${info.idx}`
  return (
    <div className="MovieView">
      <p className="view_title">1분 미리보기</p>
      <button type="button" onClick={closePopup} className="close">닫기</button>
      <div className="Inner">
        <video controls width="100%">
          <source src={info.url} type="video/mp4" />
        </video>
        <Link to={link} className="goLink" target="_blank">파일시티 이동</Link>
      </div>
    </div>
  );
}

export default MovieView;