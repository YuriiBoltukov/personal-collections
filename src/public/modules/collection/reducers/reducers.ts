import { combineReducers } from 'redux';
import collectionsReducer from '../slice/collectionSlice.ts';

const rootReducer = combineReducers({
  collections: collectionsReducer,
});

export default rootReducer;
