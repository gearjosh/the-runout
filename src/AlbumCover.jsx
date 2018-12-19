import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectAlbum } from './actions';

import dopesmoker from './img/dopesmoker.jpg';

import './styles/AlbumCover.scss';

function AlbumCover(props) {
  let _albumId;

  function handleNewAlbumSelection(idOfAlbum) {
    const { dispatch } = props;
    // event.preventDefault();
    dispatch(selectAlbum(idOfAlbum));
  }

  return (
    <div className="albumCover" onClick={() => {handleNewAlbumSelection(props.albumId)}}>
      <Link to="/albumdetail">
        <img src={dopesmoker} alt="the album cover art for Dopesmoker by Sleep"></img>
      </Link>
    </div>
  );
};

export default connect()(AlbumCover);
