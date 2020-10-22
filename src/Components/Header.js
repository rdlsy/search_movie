import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.scss';
import Aside from './Aside';

function Header({ history }) {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);
  const closeMenu = () => setOpen(!open);
  return (
    <header className="Header">
      <button type="button" className="MenuBtn" onClick={onToggle}><span></span></button>
      <h1 className="Logo"><a href="/">로고</a></h1>
      <Link to="/search" className="SearchBtn"></Link>
      <Aside history={history} open={open} closeMenu={closeMenu} />
    </header>
  );
}

export default Header;