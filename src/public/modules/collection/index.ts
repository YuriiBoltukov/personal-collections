import { Collection } from './models/collection.interface.ts';
import { Item } from './models/interface.item.ts';
import { ItemDetails } from './models/interface.itemDetails.ts';
import { rootReducer } from './reducers/reducers.ts';
import { collectionSliceReducer } from './slice/collectionSlice.ts';
import { CollectionState } from './models/interface.collectionState.ts';

export type { Collection, Item, ItemDetails, CollectionState };
export { rootReducer, collectionSliceReducer };
