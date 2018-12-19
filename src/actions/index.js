import constants from './../constants';

export const selectAlbum = (idOfAlbum) => {
  return {
    type: c.SELECT_ALBUM,
    albumId: idOfAlbum
  };
}
