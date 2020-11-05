import React from 'react';
import '../css/Container.scss';

function Container({ children }) {
  return (
    <section className="Content">
      {children}
    </section>
  );
}

export default Container;