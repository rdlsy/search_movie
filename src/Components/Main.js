import React from 'react';
import Header from './Header';
import Container from './Container';
import Footer from './Footer';
import Slider from './Slider';
import LiveRank from './LiveRank';

function Main({ history }) {
  return (
    <>
      <Header history={history} />
      <Container>
        <Slider />
        <LiveRank history={history} />
      </Container>
      <Footer />
    </>
  );
}

export default Main;