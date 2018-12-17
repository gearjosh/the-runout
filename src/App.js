import React, { Component } from 'react';

import './styles/normalize.css';
import './styles/App.scss';

import Header from './Header';
import MagnifyingGlass from './MagnifyingGlass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        this is the bottom of the app

        <svg width="17px" height="16px" viewBox="0 0 17 16" version="1.1">
            <title>magnifier - simple-line-icons</title>
            <desc>Created with Sketch.</desc>
            <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" font-family="simple-line-icons" font-size="16" font-weight="normal">
                <g id="header-search-v2" transform="translate(-245.000000, -10.000000)" fill="#546271">
                    <text id="magnifier---simple-line-icons">
                        <tspan x="246" y="25"></tspan>
                    </text>
                </g>
            </g>
        </svg>
      </div>
    );
  }
}

export default App;
