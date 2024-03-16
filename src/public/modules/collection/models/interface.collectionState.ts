import { Collection } from './collection.interface.ts';
import { Item } from './interface.item.ts';

export interface CollectionState {
  collections: Collection[];
  items: Item[];
}
