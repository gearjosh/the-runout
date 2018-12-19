import { combineReducers } from 'redux';
import selectedAlbumReducer from './selectedAlbumReducer';

const rootReducer = combineReducers({
  selectedAlbum: selectedAlbumReducer
});

export default rootReducer;
