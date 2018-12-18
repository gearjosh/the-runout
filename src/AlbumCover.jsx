import React from 'react';

import dopesmoker from './img/dopesmoker.jpg';

import './styles/AlbumCover.scss';


function AlbumCover() {
  return (
    <div className="albumCover">
      <img src={dopesmoker} alt="the album cover art for Dopesmoker by Sleep"></img>
    </div>
  )
}

export default AlbumCover;
