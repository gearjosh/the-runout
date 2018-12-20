import React from 'react';

import AlbumCoverWithInfo from './AlbumCoverWithInfo';

import './styles/SearchResultsContainer.scss';

import createSmallListenArray from './constants';

function SearchResultsContainer(props) {

  let bigListenArray = Object.keys(props.listens);

  let sleepArray = [];

  function createSleepArray() {
    bigListenArray.forEach((albumId) => {
      if (props.listens[albumId].artist === 'Sleep') {
        sleepArray.push(albumId);
      }
    });
  }

  createSleepArray();

  return (
      <div className="searchContainer">
        {sleepArray.map((albumId) => {
          let album = props.listens[albumId];
          return <AlbumCoverWithInfo
            albumId={albumId}
            title={album.title}
            artist={album.artist}
            albumCover={album.albumCover}
            firstListen={album.firstListen}
            loggedAt={album.loggedAt}
            releaseYear={album.releaseYear}
            key={albumId} />
        })}
      </div>
  );
};

export default SearchResultsContainer;
