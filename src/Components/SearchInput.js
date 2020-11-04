import React, { useState, useEffect, useCallback, useRef } from 'react';

function SearchInput({ onInsert, history, query }) {
  const [value, setValue] = useState('');
  const searchInput = useRef();

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
        history.push(`/search?title=${value}`)
      }
    }, [onInsert, history, value]
  );
  const goHome = () => {
    history.push('/')
  }
  useEffect(() => {
    if (query.title) setValue(query.title);
    searchInput.current.focus();
  }, [query]);
  return (
    <div className="SearchWrap">
      <button type="button" className="BackBtn" onClick={goHome}><span></span><span></span></button>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="검색어를 입력하세요." onChange={onChange} value={value} ref={searchInput} />
        <button type="submit">검색</button>
      </form>
    </div>
  );
}

export default SearchInput;