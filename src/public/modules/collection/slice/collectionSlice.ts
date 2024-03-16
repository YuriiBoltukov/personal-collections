import { createSlice } from '@reduxjs/toolkit';
import { collections } from '../MOCK/collections.ts';
import { items }       from '../MOCK/items.ts';

const initialState = {
  collections: collections,
  items: items
};

const collectionSlice = createSlice({
  name: 'collectionsReducer',
  initialState,
  reducers: {
  },
});

export default collectionSlice.reducer;