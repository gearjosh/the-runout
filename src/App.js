import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Homepage from './Homepage'
import SearchResultsContainer from './SearchResultsContainer';
import AlbumDetail from './AlbumDetail';
import ProfileContainer from './ProfileContainer';

import dopesmoker from './img/dopesmoker.jpg';

import './styles/normalize.css';
import './styles/App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.initialState = {
      selectedAlbum: 55625,
      listens: [
        {
          1545248383000: {
            albumId: 55625,
            albumCover: {dopesmoker},
            title: 'Dopesmoker',
            artist: 'Sleep',
            firstListen: false
          },
        }
      ]
    };
    console.log(this.initialState);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route path='/searchresults' component={SearchResultsContainer}></Route>
          <Route path='/albumdetail' component={AlbumDetail}></Route>
          <Route path='/profile' component={ProfileContainer}></Route>
        </Switch>
      </div>
    );
  };
};

export default App;
