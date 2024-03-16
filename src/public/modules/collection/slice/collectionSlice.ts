import { createSlice } from '@reduxjs/toolkit';
import { mock }        from '../../../../MOCK/mock.ts';
import { items }       from '../../../../MOCK/items.ts';

const initialState = {
  collections: mock,
  items: items
};

const collectionSlice = createSlice({
  name: 'collectionsReducer',
  initialState,
  reducers: {
  },
});

export default collectionSlice.reducer;