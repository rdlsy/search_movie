import React, { useState, useCallback, useRef } from 'react';
import '../css/Header.scss';

function Header({ onInsert }) {
  const [value, setValue] = useState('');
  const [isActive, setActive] = useState(false);
  const searchInput = useRef();
  const onToggle = useCallback(
    () => {
      setActive(!isActive);
    }, [isActive]
  );
  const onChange = useCallback(
    e => {
      setValue(e.target.value);
    }, []
  );
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      if (value) {
        onInsert(value);
      }
      setValue('');

    }, [onInsert, value]
  );
  return (
    <header className="Header">
      <button type="button" className="MenuBtn"><span></span></button>
      <h1 className="Logo"><a href="/">로고</a></h1>
      <button type="button" className="SearchBtn" onClick={onToggle}>검색</button>
      <form onSubmit={onSubmit}>
        <div className={isActive ? "SearchWrap active" : "SearchWrap"}>
          <input type="text" placeholder="검색어를 입력하세요." onChange={onChange} value={value} ref={searchInput} />
          <button type="submit">검색</button>
        </div>
      </form>
    </header>
  );
}

export default Header;