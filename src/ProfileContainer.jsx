import React from 'react';

import ProfileImage from './ProfileImage';
import AlbumCoverWithInfo from './AlbumCoverWithInfo';

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
          <AlbumCoverWithInfo/>
          <AlbumCoverWithInfo/>
          <AlbumCoverWithInfo/>
          <AlbumCoverWithInfo/>
          <AlbumCoverWithInfo/>
        </div>
      </div>

    </div>
  );
};

export default ProfileContainer;

// these will be the components to go here
// <UserInfo/>
// <ListenLog/>
