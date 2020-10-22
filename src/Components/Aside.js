import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Aside.scss';

function Aside({ open, closeMenu }) {
  return (
    <aside className={open ? 'Aside open' : 'Aside'}>
      <div className="Inner">
        <button type="button" className="close" onClick={closeMenu}>닫기</button>
        <nav className="Nav">
          <ul>
            <li><Link to="/">홈</Link></li>
            <li><Link to="/search">검색</Link></li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Aside;