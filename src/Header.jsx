import React from 'react';

import Logo from './Logo';
import MagnifyingGlass from './MagnifyingGlass'

import './styles/Header.scss';

function Header() {
  return (
    <div className="header">
      <div className="topBar">
        <Logo/>
        <p>Because albums deserve to be listened to</p>
        <form className="search">
          <input placeholder="Search albums..."></input>
          <button type="submit" className="magnifierSpace">
            <MagnifyingGlass id="magnifier"/>
          </button>
        </form>
      </div>
      <div className="bottomBar">
        <a href="#">Profile</a>
        <a href="#">People</a>
        <a href="#">Lists</a>
      </div>
    </div>
  )
}

export default Header;
