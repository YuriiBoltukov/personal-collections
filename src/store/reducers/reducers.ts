import { combineReducers } from 'redux';
import collectionsReducer      from '../slice/collectionSlice';

const rootReducer = combineReducers({
  collections: collectionsReducer,
});

export default rootReducer;