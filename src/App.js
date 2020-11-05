import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Search from './components/Search';
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
