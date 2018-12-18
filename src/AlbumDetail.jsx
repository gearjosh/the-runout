import React from 'react';

import AlbumCover from './AlbumCover';
// import AlbumCover4 from './AlbumCover4';

import './styles/AlbumDetail.scss';

function AlbumDetail() {
  return (
    <div className="albumDetail">
      <div className="albumDetailHead">
        <AlbumCover className="detailHeadElement"/>

        <div className="detailHeadElement">
          <div>
            <h1>[Album Title]</h1>
            <h2>by [Artist Name]</h2>
            <h3>Released [Year]</h3>
          </div>
          <div><span className="genreTag">Stoner Metal</span><span className="genreTag">Hip-Hop</span><span className="genreTag">Soul</span></div>
          <div>
            <ul>
              <li>Vocals: [Vocalist]</li>
              <li>Bass: [Bassist]</li>
              <li>Guitar: [Guitarist]</li>
              <li>Drums: [Drummer]</li>
            </ul>
          </div>
        </div>

        <div className="detailHeadElement">
          This is where you will log album listens
        </div>
      </div>
      <div className="albumDetailBody">
        <div className="trackList">
          <h3>Track List</h3>
          <ol>
            <li>[Track Name]</li>
            <li>[Track Name]</li>
            <li>[Track Name]</li>
            <li>[Track Name]</li>
            <li>[Track Name]</li>
            <li>[Track Name]</li>
            <li>[Track Name]</li>
            <li>[Track Name]</li>
            <li>[Track Name]</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AlbumDetail;
