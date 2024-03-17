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
  reducers: {
    addCollections: {
      reducer: (state, action) => {
        state.collections.push(action.payload);
      },
      prepare(value) {
        return {
          payload: {
            key: 'dfgdr',
            value: value,
          },
        };
      },
    },
  },
});

export const { addCollections } = collectionSlice.actions;
export const collectionSliceReducer = collectionSlice.reducer;
