import React, { useState, useCallback } from 'react';
import SearchInput from './SearchInput';
import SearchResult from './SearchResult';
import '../css/Search.scss'

function Search({ location }) {
  const [movie, setMovie] = useState('');
  const onInsert = useCallback((title) => {
    setMovie(title);
  }, []);
  return (
    <section className="SearchArea">
      <SearchInput onInsert={onInsert} />
      <SearchResult movie={movie} />
    </section>
  );
}

export default Search;