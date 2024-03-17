import { createSlice } from '@reduxjs/toolkit';
import { itemsMock } from '../MOCK/items.mock.ts';
import { setAllCollectionsAction } from './collection.action.ts';
import { CollectionState } from '../models/collectionState.interface.ts';

const initialState: CollectionState = {
  collections: [],
  items: itemsMock,
};

const collectionSlice = createSlice({
  name: 'collectionsReducer',
  initialState,
  reducers: {
    setAllCollections: setAllCollectionsAction(),
  },
});

export const { setAllCollections } = collectionSlice.actions;
export const collectionSliceReducer = collectionSlice.reducer;
