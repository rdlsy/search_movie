import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.scss';

function Header() {
  return (
    <header className="Header">
      <button type="button" className="MenuBtn"><span></span></button>
      <h1 className="Logo"><a href="/">로고</a></h1>
      <Link to="/search" className="SearchBtn"></Link>
    </header>
  );
}

export default Header;