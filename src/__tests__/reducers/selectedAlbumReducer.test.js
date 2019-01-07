import selectedAlbumReducer from './../../reducers/selectedAlbumReducer';
import constants from './../../constants';
const { c, initialState } = constants;

describe('selectedAlbumReducer', () => {

  test('should return state unchanged if no action type recognized', () => {
    expect(selectedAlbumReducer({}, {type: null})).toEqual({});
  });

  test('should return initial state unchanged if no action type recognized', () => {
    expect(selectedAlbumReducer(initialState, {type: null})).toEqual(initialState);
  });

  test('should return selected album value equal to provided album id', () => {
    expect(selectedAlbumReducer(initialState, {
      type: c.SELECT_ALBUM,
      albumId: 1234
    })).toEqual(1234);
  });

});
