import selectedAlbumReducer from './../../reducers/selectedAlbumReducer';
import constants from './../../constants';
const { c } = constants;

describe('selectedAlbumReducer', () => {

  test('should return state unchanged if no action type recognized', () => {
    expect(selectedAlbumReducer({}, {type: null})).toEqual({});
  });

});
