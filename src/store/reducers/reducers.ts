import { combineReducers } from 'redux';
import counterReducer from '../slice/counterSlice.ts';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;