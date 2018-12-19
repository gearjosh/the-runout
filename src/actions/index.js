import constants from './../constants';
const { c } = constants;

export const selectAlbum = (idOfAlbum) => {
  return {
    type: c.SELECT_ALBUM,
    albumId: idOfAlbum
  };
}
