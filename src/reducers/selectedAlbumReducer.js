import constants from './../constants';
const { c, initialState } = constants;

export default (state = {}, action) => {
  switch (action.type) {
  case c.SELECT_ALBUM:
    return action.albumId;
  default:
    return state;
  }
};
