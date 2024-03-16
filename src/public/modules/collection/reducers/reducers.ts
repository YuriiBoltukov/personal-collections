import { combineReducers } from 'redux';
import { collectionSliceReducer } from '../slice/collectionSlice.ts';

export const rootReducer = combineReducers({
  collections: collectionSliceReducer,
});
