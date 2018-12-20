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
  console.log(props);
  return (
    <div className="albumCover" onClick={() => {handleNewAlbumSelection(props.albumId)}}>
      <Link to="/albumdetail">
        <img src={props.albumCover} alt="the album cover art for {props.title} by {props.artist}"></img>
      </Link>
    </div>
  );
};

export default connect()(AlbumCover);
