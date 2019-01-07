import React from 'react';

import AlbumCover from './AlbumCover';

import './styles/AlbumCoverWithInfo.scss';

function AlbumCoverWithInfo(props) {
  return (
    <div className="albumCoverWithInfo">
      <AlbumCover
        albumId={props.albumId}
        albumCover={props.albumCover}
        key={props.albumId} />
      <div className="albumInfoBox">
        <ul>
          <li className="boldPText">{props.title}</li>
          <li>by {props.artist}</li>
          <br/>
          <li><em>Released {props.releaseYear}</em></li>
        </ul>
      </div>
    </div>
  );
};

export default AlbumCoverWithInfo;
