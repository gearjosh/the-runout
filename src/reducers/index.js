import { combineReducers } from 'redux';
import selectedAlbumReducer from './selectedAlbumReducer';
import listenLogReducer from './listenLogReducer';

const rootReducer = combineReducers({
  selectedAlbum: selectedAlbumReducer,
  listens: listenLogReducer
});

export default rootReducer;
