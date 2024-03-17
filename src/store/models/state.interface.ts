import { CollectionState } from '../../public/modules/collections';
import store from '../store.ts';
import { useDispatch } from 'react-redux';
import { UserState } from '../../public/modules/user/models/userState.interface.ts';

export interface State {
  user: UserState;
  collections: CollectionState;
}

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
