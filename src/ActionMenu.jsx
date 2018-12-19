import React from 'react';
import LogAlbumButton from './LogAlbumButton';
import FirstListenButton from './FirstListenButton';

import './styles/ActionMenu.scss';

function ActionMenu() {
  return (
    <div className="actionMenu">
      <FirstListenButton/>
      <LogAlbumButton/>
    </div>
  );
};

export default ActionMenu;
