import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Collection } from '../../modules/collections';
import { collectionsMock } from '../../modules/collections/MOCK/collections.mock.ts';
import { CardListComponent } from '../../components';
import Title from 'antd/es/typography/Title';
import { Divider, Flex, Image, Space } from 'antd';

const CollectionDetailsPage = () => {
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
    <>
      <Flex justify="space-between" gap="middle" align="center">
        <Flex vertical>
          <Image width={273} src={collection.image} alt={collection.name} />
        </Flex>
        <Flex vertical align="flex-end">
          <Title>{collection.name}</Title>
        </Flex>
      </Flex>
      <Flex vertical align="flex-end" justify="space-between">
        <Title level={3}>{collection.description}</Title>
        <Title level={5}>{collection.createdDate}</Title>
      </Flex>
      <Divider />
      <Space direction="vertical" size={32}>
        <Title level={2}>Items of the collection</Title>
        <CardListComponent />
      </Space>
    </>
  );
};

export default CollectionDetailsPage;
