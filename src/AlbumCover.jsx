import React from 'react';
import { Link } from 'react-router-dom';

import dopesmoker from './img/dopesmoker.jpg';

import './styles/AlbumCover.scss';


function AlbumCover() {
  return (
    <div className="albumCover">
      <Link to="/albumdetail">
        <img src={dopesmoker} alt="the album cover art for Dopesmoker by Sleep"></img>
      </Link>
    </div>
  )
}

export default AlbumCover;
