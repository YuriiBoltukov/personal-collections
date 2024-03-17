import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../models/userState.interface.ts';
import { setUserAction } from './user.action.ts';

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: setUserAction(),
  },
});

export const { setUser } = userSlice.actions;

export const userSliceReducer = userSlice.reducer;
