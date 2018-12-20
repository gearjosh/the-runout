import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Homepage from './Homepage'
import SearchResultsContainer from './SearchResultsContainer';
import AlbumDetail from './AlbumDetail';
import ProfileContainer from './ProfileContainer';

import './styles/normalize.css';
import './styles/App.scss';

class App extends Component {

  // constructor(props) {
  //   super(props);
  // };

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' render={() => <Homepage listens={this.props.listens}/>}></Route>
          <Route path='/searchresults' component={SearchResultsContainer}></Route>
          <Route path='/albumdetail' render={() => <AlbumDetail selectedAlbum={this.props.selectedAlbum} listens={this.props.listens}/>}></Route>
          <Route path='/profile' component={ProfileContainer}></Route>
        </Switch>
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    selectedAlbum: state.selectedAlbum,
    listens: state.listens
  };
};

export default withRouter(connect(mapStateToProps)(App));
