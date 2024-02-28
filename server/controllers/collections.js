function prepareCollection(collection) {
  return {
    id: collection._id.toString(),
    title: collection.title,
  };
}

module.exports.collections = async function collections(req, res) {
  //const collectionsDB = await Collection.find({});
  //const collections = collectionsDB.map(prepareCollection);
  const collections = [
    {
      id: 12,
      name: 'Vasya'
    }
  ]

  res.send(collections)
}
