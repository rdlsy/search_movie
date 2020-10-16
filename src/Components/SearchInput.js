import React, { useState, useEffect, useCallback, useRef } from 'react';

function SearchInput({ onInsert }) {
  const [value, setValue] = useState('');
  const searchInput = useRef();

  const onChange = useCallback(
    e => {
      setValue(e.target.value);
    }, [value]
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
  useEffect(() => {
    searchInput.current.focus();
  }, []);
  return (
    <div className="SearchWrap">
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="검색어를 입력하세요." onChange={onChange} value={value} ref={searchInput} />
        <button type="submit">검색</button>
      </form>
    </div>
  );
}

export default SearchInput;