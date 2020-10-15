import React, { useState, useCallback, useRef } from 'react';

function Search() {
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
    }, [value]
  );
  return (
    <>
      <button type="button" className="SearchBtn" onClick={onToggle}>검색</button>
      <div className={isActive ? "SearchWrap active" : "SearchWrap"}>
        <input type="text" placeholder="검색어를 입력하세요." onChange={onChange} value={value} ref={searchInput} />
        <button type="button">검색</button>
      </div>
    </>
  );
}

export default Search;