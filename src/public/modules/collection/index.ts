import { Collection } from './models/collection.interface.ts';
import { Item } from './models/item.interface.ts';
import { ItemDetails } from './models/itemDetails.interface.ts';
import { rootReducer } from './reducers/reducers.reducer.ts';
import { collectionSliceReducer } from './slices/collection.slice.ts';
import { CollectionState } from './models/collectionState.interface.ts';

export type { Collection, Item, ItemDetails, CollectionState };
export { rootReducer, collectionSliceReducer };
