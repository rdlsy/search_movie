import React, { useState, useCallback } from 'react';
import qs from 'qs';
import SearchInput from './SearchInput';
import SearchResult from './SearchResult';
import '../css/Search.scss'
import { useEffect } from 'react';

function Search({ location, history }) {
  const [movie, setMovie] = useState(null);
  const onInsert = useCallback((title) => {
    setMovie(title);
  }, []);

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });

  useEffect(() => {
    if (query) setMovie(query.title);
    if (movie) onInsert(movie);
  }, [query, movie, onInsert]);

  return (
    <section className="SearchArea">
      <SearchInput onInsert={onInsert} history={history} query={query} />
      {(movie) ?
        <SearchResult movie={movie} /> : ''
      }
    </section>
  );
}

export default Search;