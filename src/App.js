import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './styles/normalize.css';
import './styles/App.scss';

import Header from './Header';
import Homepage from './Homepage'
import SearchResultsContainer from './SearchResultsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route path='/searchresults' component={SearchResultsContainer}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
