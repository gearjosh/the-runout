import React from 'react';

import ProfileImage from './ProfileImage';

import './styles/UserInfo.scss';

function UserInfo() {
  return (
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
  );
};

export default UserInfo;
