import React from 'react';

import AlbumCoverWithInfo from './AlbumCoverWithInfo';

import './styles/SearchResultsContainer.scss';

import createSmallListenArray from './constants';

function SearchResultsContainer(props) {

  //everything having to do with createSleepArray is for demo purposes only and needs to go. replace with real code that does real things
  // start here >

  function createSleepArray() {
    bigListenArray.forEach((albumId) => {
      if (props.listens[albumId].artist === 'Sleep') {
        sleepArray.push(albumId);
      }
    });
  }

  let bigListenArray = Object.keys(props.listens);

  let sleepArray = createSleepArray();

  return (
      <div className="searchContainer">
        {sleepArray.map((albumId) => {
          // < end here
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
