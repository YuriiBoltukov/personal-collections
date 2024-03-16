import { Collection } from './collection.interface.ts';
import { Item } from './item.interface.ts';

export interface CollectionState {
  collections: Collection[];
  items: Item[];
}
