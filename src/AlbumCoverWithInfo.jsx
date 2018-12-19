import React from 'react';

import AlbumCover from './AlbumCover';

import './styles/AlbumCoverWithInfo.scss';

function AlbumCoverWithInfo() {
  return (
    <div className="albumCoverWithInfo">
      <AlbumCover/>
      <div className="albumInfoBox">
        <ul>
          <li className="boldPText">[Album Title]</li>
          <li>by [Artist Name]</li>
          <li>Released [Year]</li>
        </ul>
      </div>
    </div>
  );
};

export default AlbumCoverWithInfo;
