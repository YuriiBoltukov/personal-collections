import React, { useState, useEffect } from 'react';
import { Collection } from '../../models/interface.collection';
import { mock } from '../../MOCK/mock';
import { useParams }                  from 'react-router-dom';
import CollectionItemsList            from '../CollectionItemsList/CollectionItemsList.tsx';


const CollectionPage = () => {
  const [collection, setCollection] = useState<Collection | null>(null);
  const {id} = useParams()
  useEffect(() => {
    const selectedCollection = mock.find(collection => collection.id === id);
    if (selectedCollection) {
      setCollection(selectedCollection);
    }
  }, [id]);

  if (!collection) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{collection.name}</h1>
      <p>{collection.description}</p>
      <p>{ Date() }</p>
      <CollectionItemsList />
    </div>
  );
};

export default CollectionPage;