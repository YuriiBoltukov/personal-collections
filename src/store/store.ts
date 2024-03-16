import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../public/modules/collection/reducers/reducers.ts';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
