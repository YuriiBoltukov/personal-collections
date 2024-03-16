import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Collection } from '../../modules/collection';
import { collections } from '../../modules/collection/MOCK/collections.ts';
import { CollectionItemsList } from '../../components';

const CollectionPage = () => {
  const [collection, setCollection] = useState<Collection | null>(null);
  const { id } = useParams();
  useEffect(() => {
    const selectedCollection = collections.find(
      collection => collection.id === id,
    );
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
      <p>{Date()}</p>
      <CollectionItemsList />
    </div>
  );
};

export default CollectionPage;
