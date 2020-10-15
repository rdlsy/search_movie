import React from 'react';
import '../css/Container.scss';
import Slider from './Slider';
import LiveRank from './LiveRank';

function Container() {
  return (
    <section className="Content">
      {/* <Slider /> */}
      <LiveRank />
    </section>
  );
}

export default Container;