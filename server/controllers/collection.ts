import { Response, Request } from 'express';
import { Collection } from '../models/Collection';

function prepareCollection(collection: any) {
  return {
    id: collection._id.toString(),
    title: collection.title,
  };
}

export async function getCollections(req: Request, res: Response) {
  //const collectionsDB = await Collection.find({});
  //const collections = collectionsDB.map(prepareCollection);
  //throw new Error('BROKEN')
  const categoriesDB = await Collection.find({});
  //const categories = categoriesDB.map(prepareCategory);
  console.log(categoriesDB);
  const collections = [
    {
      id: 12,
      name: 'Vasya',
    },
  ];

  res.send(collections);
}

export async function createCollection(req: Request, res: Response) {
  //const collectionsDB = await Collection.find({});
  //const collections = collectionsDB.map(prepareCollection);
  //throw new Error('BROKEN')

  const categoriesDB = await Collection.create(req.body);
  //const categories = categoriesDB.map(prepareCategory);
  console.log(req.body);

  res.send(req.body);
}
