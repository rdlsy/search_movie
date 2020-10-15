import React, { useState, useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Container from './Components/Container';
import Footer from './Components/Footer';
import SearchResult from './Components/SearchResult';
import './App.css';

function App() {
  const [movies, setMovies] = useState('');
  const onInsert = useCallback(
    (title) => {
      setMovies(title);
    }, [movies]
  );

  return (
    <div className="App">
      <Header onInsert={onInsert} />
      <Switch>
        <Route path="/" exact={true} component={Container} />
        <Route path="/search" component={SearchResult} movies={movies} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
