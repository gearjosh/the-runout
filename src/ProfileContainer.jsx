import React from 'react';

import UserInfo from './UserInfo';
import ListenLog from './ListenLog';

import './styles/ProfileContainer.scss';

function ProfileContainer() {
  return (
    <div className="profileContainer">

      <UserInfo/>
      <div className="profileBody">
        <ListenLog/>
      </div>

    </div>
  );
};

export default ProfileContainer;
