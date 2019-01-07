import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Logo from './Logo';
import MagnifyingGlass from './MagnifyingGlass'

import './styles/Header.scss';

function Header(props) {
  let _searchTerm;

  // function handleNewAlbumSearch(event) {
  //   const { dispatch } = props;
  //   event.preventDefault();
  //   dispatch(ACTION CREATOR GOES HERE())
  // }

  return (
    <div className="header">
      <div className="topBar">
        <Link to="/">
          <Logo/>
        </Link>
        <p id="because">Because albums deserve to be listened to</p>
        <form id="searchForm" className="search">
          <input
            placeholder="Search albums..."
            ref={(input) => {_searchTerm = input;}} />
          <button type="submit" className="magnifierSpace">
            <Link to="/searchresults">
              <MagnifyingGlass id="magnifier"/>
            </Link>
          </button>
        </form>
      </div>
      <div className="bottomBar">
        <Link to="/profile" replace>Profile</Link>
        <Link to="#" replace>People</Link>
        <Link to="#" replace>Lists</Link>
      </div>
    </div>
  );
};

export default Header;
