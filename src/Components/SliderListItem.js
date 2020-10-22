import React from 'react';

function SliderListItem({ movie, showPopup }) {
  const { idx, name, imgSrc, cate, url } = movie;

  const getUrl = (idx, url) => {
    showPopup(idx, url);
  }

  return (
    <div onClick={() => getUrl(idx, url)}>
      <img src={imgSrc} alt={name} />
      <dl className="SliderItem">
        <dt>{name}</dt>
        <dd>{cate}</dd>
      </dl>
    </div>
  );
}

export default SliderListItem;