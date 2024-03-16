import { Collection } from './models/interface.collection.ts';
import { Item } from './models/interface.item.ts';
import { ItemDetails } from './models/interface.itemDetails.ts';
import { rootReducer } from './reducers/reducers.ts';
import { collectionSliceReducer } from './slice/collectionSlice.ts';

export type { Collection, Item, ItemDetails };
export { rootReducer, collectionSliceReducer };
