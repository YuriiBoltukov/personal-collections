import { Response, Request } from 'express';

function prepareCollection(collection: any) {
  return {
    id: collection._id.toString(),
    title: collection.title,
  };
}

async function collections(req: Request, res: Response) {
  //const collectionsDB = await Collection.find({});
  //const collectionsMock = collectionsDB.map(prepareCollection);
  //throw new Error('BROKEN')

  const collections = [
    {
      id: 12,
      name: 'Vasya',
    },
  ];

  res.send(collections);
}

export default collections;
