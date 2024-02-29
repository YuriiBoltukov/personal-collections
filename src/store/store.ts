import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/reducers.ts';

//const initialStore = {}

const store = configureStore({
  reducer: rootReducer,
});

export default store;