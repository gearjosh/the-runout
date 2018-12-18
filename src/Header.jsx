import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './Logo';
import MagnifyingGlass from './MagnifyingGlass'

import './styles/Header.scss';

function Header() {
  return (
    <div className="header">
      <div className="topBar">
        <Link to="/">
          <Logo/>
        </Link>
        <p>Because albums deserve to be listened to</p>
        <form className="search">
          <input placeholder="Search albums..."></input>
          <button type="submit" className="magnifierSpace">
            <Link to="/searchresults">
              <MagnifyingGlass id="magnifier"/>
            </Link>
          </button>
        </form>
      </div>
      <div className="bottomBar">
        <Link to="#" replace>Profile</Link>
        <Link to="#" replace>People</Link>
        <Link to="#" replace>Lists</Link>
      </div>
    </div>
  )
}

export default Header;
