import React from 'react';

import './styles/GenreTags.scss';

function GenreTags() {
  return (
    <div>
      <span className="genreTag unselectable">Stoner Metal</span>
      <span className="genreTag unselectable">Hip-Hop</span>
      <span className="genreTag unselectable">Soul</span>
      <button className="genreTag unselectable addGenreButton">+</button>
    </div>
  );
};

export default GenreTags;
