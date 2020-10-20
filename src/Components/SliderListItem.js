import React from 'react';

function SliderListItem({ movie }) {
  const { name, imgSrc, cate } = movie;
  return (
    <>
      <img src={imgSrc} alt={name} />
      <dl className="SliderItem">
        <dt>{name}</dt>
        <dd>{cate}</dd>
      </dl>
    </>
  );
}

export default SliderListItem;