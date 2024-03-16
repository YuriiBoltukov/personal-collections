import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../public/modules/collection';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
