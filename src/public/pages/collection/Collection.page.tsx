import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Collection } from '../../modules/collection';
import { collectionsMock } from '../../modules/collection/MOCK/collections.mock.ts';
import { CardListComponent } from '../../components';

const CollectionPage = () => {
  const [collection, setCollection] = useState<Collection | null>(null);
  const { id } = useParams();
  useEffect(() => {
    const selectedCollection = collectionsMock.find(
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
      <CardListComponent />
    </div>
  );
};

export default CollectionPage;
