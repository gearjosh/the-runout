import React from 'react';

import AlbumCover from './AlbumCover';

import './styles/SearchResult.scss';

function SearchResult() {
  return (
    <div className="albumSearchResult">
      <AlbumCover/>
      <div className="searchInfo">
        <p className="boldPText">[Album Title]</p>
        <p>by [Artist Name]</p>
        <p>Released [Year]</p>
      </div>
    </div>
  );
};

export default SearchResult;
