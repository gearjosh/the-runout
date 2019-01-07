import React from 'react';

import AlbumCoverWithInfo from './AlbumCoverWithInfo';

import './styles/ListenLog.scss';

function ListenLog(props) {

  let bigListenArray = Object.keys(props.listens);
  let smallListenArray = [];

  function createSmallListenArray() {
    for(let i = 0; i < 5; i ++) {
      smallListenArray.push(bigListenArray[i]);
    }
  }
  createSmallListenArray();

  return (
    <div>
      <h1>Your Recent Listens</h1>
      <div className="listenLog">
        {smallListenArray.map((albumId) => {
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
      </div>
    );
  };

  export default ListenLog;
