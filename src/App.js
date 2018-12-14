import React, { Component } from 'react';

import './normalize.css';
import './App.scss';

import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        this is the bottom of the app
      </div>
    );
  }
}

export default App;
