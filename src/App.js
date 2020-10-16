import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Components/Main';
import Search from './Components/Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact={true} component={Main} />
        <Route path="/search" component={Search} />
      </Switch>
    </div>
  );
}

export default App;
