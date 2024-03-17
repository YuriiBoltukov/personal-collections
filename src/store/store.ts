import { configureStore } from '@reduxjs/toolkit';
import { collectionSliceReducer } from '../public/modules/collections';

const store = configureStore({
  reducer: {
    collections: collectionSliceReducer,
  },
});

export default store;
