import { Collection } from './models/collection.interface.ts';
import { Item } from './models/item.interface.ts';
import { ItemDetails } from './models/itemDetails.interface.ts';
import { collectionSliceReducer } from './redux/collection.slice.ts';
import { CollectionState } from './models/collectionState.interface.ts';

export type { Collection, Item, ItemDetails, CollectionState };
export { collectionSliceReducer };
