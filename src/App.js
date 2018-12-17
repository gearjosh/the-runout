import React, { Component } from 'react';

import './styles/normalize.css';
import './styles/App.scss';

import Header from './Header';
import Homepage from './Homepage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Homepage/>
      </div>
    );
  }
}

export default App;
