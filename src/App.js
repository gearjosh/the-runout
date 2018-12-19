import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './styles/normalize.css';
import './styles/App.scss';

import Header from './Header';
import Homepage from './Homepage'
import SearchResultsContainer from './SearchResultsContainer';
import AlbumDetail from './AlbumDetail';
import Profile from './Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route path='/searchresults' component={SearchResultsContainer}></Route>
          <Route path='/albumdetail' component={AlbumDetail}></Route>
          <Route path='/profile' component={Profile}></Route>
        </Switch>
      </div>
    );
  };
};

export default App;
