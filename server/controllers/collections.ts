import { Response, Request } from 'express';
import { collectionsMock } from '../MOCK/collections.mock';

function prepareCollection(collection: any) {
  return {
    id: collection._id.toString(),
    title: collection.title,
  };
}

async function getCollections(req: Request, res: Response) {
  //const collectionsDB = await Collection.find({});
  //const collectionsMock = collectionsDB.map(prepareCollection);
  //throw new Error('BROKEN')

  res.send(collectionsMock);
}

export default getCollections;
