import { configureStore } from '@reduxjs/toolkit';
import { collectionSliceReducer } from '../public/modules/collections';
import { userSliceReducer } from '../public/modules/user/redux/user.slice.ts';

const store = configureStore({
  reducer: {
    user: userSliceReducer,
    collections: collectionSliceReducer,
  },
});

export default store;
