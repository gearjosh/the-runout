import React from 'react';

import profile_image from './img/profile_image.jpeg';

import './styles/ProfileImage.scss';

function ProfileImage() {
  return (
    <div className="profileImage">
      <img src={profile_image}></img>
    </div>
  );
};

export default ProfileImage;
