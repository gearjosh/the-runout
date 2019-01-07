import React from 'react';

import AlbumCover from './AlbumCover';
import AlbumCoreInfo from './AlbumCoreInfo';
import GenreTags from './GenreTags';
import BandMembers from './BandMembers';
import TrackList from './TrackList';
import ActionMenu from './ActionMenu';
// import AlbumCover4 from './AlbumCover4';

import './styles/AlbumDetail.scss';

function AlbumDetail(props) {
  console.log(props);
  return (
    <div className="albumDetail">
      <div className="albumDetailHead">
        <AlbumCover
          albumId={props.selectedAlbum}
          albumCover={props.listens[props.selectedAlbum].albumCover}
          firstListen={props.listens[props.selectedAlbum].firstListen}
          loggedAt={props.listens[props.selectedAlbum].loggedAt}
          className="detailHeadElement"/>
        <div className="detailHeadElement">
          <AlbumCoreInfo
            title={props.listens[props.selectedAlbum].title}
            artist={props.listens[props.selectedAlbum].artist}
            releaseYear={props.listens[props.selectedAlbum].releaseYear}/>
          <GenreTags/>
          <BandMembers/>
        </div>
        <div className="detailHeadElement">
          <TrackList/>
        </div>
        <div className="detailHeadElement">
          <ActionMenu/>
        </div>
      </div>
      <div className="albumDetailBody">

      </div>
    </div>
  );
};

export default AlbumDetail;
