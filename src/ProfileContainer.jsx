import React from 'react';

import UserInfo from './UserInfo';
import ListenLog from './ListenLog';

import './styles/ProfileContainer.scss';

function ProfileContainer(props) {
  console.log(props);
  return (
    <div className="profileContainer">

      <UserInfo />

      <div className="profileBody">
        <ListenLog selectedAlbum={props.selectedAlbum}
        listens={props.listens} />
      </div>

    </div>
  );
};

export default ProfileContainer;
