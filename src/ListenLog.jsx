import React from 'react';

import AlbumCoverWithInfo from './AlbumCoverWithInfo';

import './styles/ListenLog.scss';

function ListenLog() {
  return (
    <div>
      <h1>Your Recent Listens</h1>
      <div className="listenLog">
        <AlbumCoverWithInfo/>
        <AlbumCoverWithInfo/>
        <AlbumCoverWithInfo/>
        <AlbumCoverWithInfo/>
        <AlbumCoverWithInfo/>
      </div>
    </div>
  );
};

export default ListenLog;
