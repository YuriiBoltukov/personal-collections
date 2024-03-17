import { PayloadAction } from '@reduxjs/toolkit';
import { CollectionState } from '../models/collectionState.interface.ts';
import { Collection } from '../models/collection.interface.ts';

export const setAllCollectionsAction = () => {
  return {
    reducer: (state: CollectionState, action: PayloadAction<Collection[]>) => {
      state.collections = action.payload;
    },
    prepare(value: Collection[]): { payload: Collection[] } {
      return {
        payload: value,
      };
    },
  };
};
