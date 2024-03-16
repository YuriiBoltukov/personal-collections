import { createSlice } from '@reduxjs/toolkit';
import { collectionsMock } from '../MOCK/collections.mock.ts';
import { itemsMock } from '../MOCK/items.mock.ts';

const initialState = {
  collections: collectionsMock,
  items: itemsMock,
};

const collectionSlice = createSlice({
  name: 'collectionsReducer',
  initialState,
  reducers: {},
});

export const collectionSliceReducer = collectionSlice.reducer;
