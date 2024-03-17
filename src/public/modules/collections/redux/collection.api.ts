import { Collection } from '../models/collection.interface.ts';

const COLLECTION_LIST_URL = 'http://localhost:1000/collections/list';

export async function getCollectionList(): Promise<Collection[] | null> {
  let result: Collection[] | null = null;
  try {
    const response = await fetch(COLLECTION_LIST_URL);
    console.log('response', response);
    result = await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  return result;
}
