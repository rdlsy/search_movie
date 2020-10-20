import React, { useState, useCallback } from 'react';
import SearchInput from './SearchInput';
import SearchResult from './SearchResult';
import '../css/Search.scss'

function Search({ history }) {
  const [movie, setMovie] = useState(null);
  const onInsert = useCallback((title) => {
    setMovie(title);
  }, []);
  return (
    <section className="SearchArea">
      <SearchInput onInsert={onInsert} history={history} />
      {(movie) ?
        <SearchResult movie={movie} /> : ''
      }
    </section>
  );
}

export default Search;