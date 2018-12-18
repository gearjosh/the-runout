import React from 'react';

import AlbumCover from './AlbumCover';

import './styles/SearchResults.scss';

function SearchResults() {
  return (
      <div className="searchContainer">
        <div className="albumSearchResult">
          <AlbumCover/>
          <div className="searchInfo">
            <p>[Artist Name]</p>
            <p>[Album Title]</p>
            <p>Released [Year]</p>
          </div>
        </div>
      </div>
  )
}

export default SearchResults;
