import { combineReducers } from 'redux';
import { collectionSliceReducer } from '../slices/collection.slice.ts';

export const rootReducer = combineReducers({
  collections: collectionSliceReducer,
});
