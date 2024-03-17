import { UserState } from '../models/userState.interface.ts';
import { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../models/user.interfaces.ts';

export const setUserAction = () => {
  return {
    reducer: (state: UserState, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    prepare(value: User): { payload: User } {
      return {
        payload: value,
      };
    },
  };
};
