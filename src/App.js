import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './styles/normalize.css';
import './styles/App.scss';

import Header from './Header';
import Homepage from './Homepage'
import SearchResultsContainer from './SearchResultsContainer';
import AlbumDetail from './AlbumDetail';
import ProfileContainer from './ProfileContainer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedAlbum: null,
      listens: [
        {
          1545248383000: {
            albumId: 1,
            albumCover: null,
            title: 'The Case of the Poopy Pants',
            artist: 'Poopypants Jones',
            firstListen: false
          },
        }
      ]
    };
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
