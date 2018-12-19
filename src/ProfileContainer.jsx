import React from 'react';

import ProfileImage from './ProfileImage';
import AlbumCover from './AlbumCover';
import AlbumCover2 from './AlbumCover2';
import AlbumCover3 from './AlbumCover3';
import AlbumCover4 from './AlbumCover4';
import AlbumCover5 from './AlbumCover5';

import './styles/ProfileContainer.scss';

function ProfileContainer() {
  return (
    <div className="profileContainer">

      <div className="profileUserInfo">
        <ProfileImage/>
        <div>
          <h1>[Your Name]</h1>
          <h3>Location: [Where you live]</h3>
          <ul>
            <li>Albums Logged: [A number]</li>
            <li>Albums Rated: [A number]</li>
            <li>Albums Reviewed: [A number]</li>
          </ul>
        </div>
      </div>

      <div className="profileBody">
        <h1>Your Recent Listens</h1>
        <div className="listenLog">
          <AlbumCover/>
          <AlbumCover2/>
          <AlbumCover3/>
          <AlbumCover4/>
          <AlbumCover5/>
        </div>
      </div>

    </div>
  );
};

export default ProfileContainer;

// these will be the components to go here
// <UserInfo/>
// <ListenLog/>
