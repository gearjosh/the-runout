import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  switch (action.type) {
    case c.SELECT_ALBUM:
      return action.albumId;
    default:
      return state;
  }
};
