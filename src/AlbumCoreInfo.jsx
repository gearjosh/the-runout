import React from 'react';

// import './styles/AlbumCoreInfo.scss';

function AlbumCoreInfo(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>by {props.artist}</h2>
      <h3><em>Released {props.releaseYear}</em></h3>
    </div>
  );
};

export default AlbumCoreInfo;
