import React, { useState } from 'react';
import '../css/Header.scss';

function Header() {
  const [input, setInput] = useState('');
  const [isActive, setActive] = useState(false);

  const InputToggle = (e) => {
    setActive(!isActive);
  }

  const onChange = (e) => {
    setInput(e.target.value);
  }
  return (
    <header className="Header">
      <button type="button" className="MenuBtn"><span></span></button>
      <h1 className="Logo"><a href="/">로고</a></h1>
      <button type="button" className="SearchBtn" onClick={InputToggle}>검색</button>
      <div className={isActive ? "SearchWrap active" : "SearchWrap"}>
        <input type="text" placeholder="검색어를 입력하세요." onChange={onChange} value={input} />
        <button type="submit">검색</button>
      </div>
    </header>
  );
}

export default Header;