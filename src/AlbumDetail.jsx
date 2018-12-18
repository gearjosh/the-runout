import React from 'react';

import AlbumCover from './AlbumCover';
import AlbumCoreInfo from './AlbumCoreInfo';
import GenreTags from './GenreTags';
import BandMembers from './BandMembers';
import TrackList from './TrackList';
import ActionMenu from './ActionMenu';
// import AlbumCover4 from './AlbumCover4';

import './styles/AlbumDetail.scss';

function AlbumDetail() {
  return (
    <div className="albumDetail">
      <div className="albumDetailHead">
        <AlbumCover className="detailHeadElement"/>
        <div className="detailHeadElement">
          <AlbumCoreInfo/>
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
