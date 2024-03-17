import { useParams } from 'react-router-dom';
import { CardListComponent } from '../../components';
import Title from 'antd/es/typography/Title';
import { Divider, Flex, Image, Space } from 'antd';
import { useSelector } from 'react-redux';
import { State } from '../../../store/models/state.interface.ts';

const CollectionDetailsPage = () => {
  const { id } = useParams();
  const collection = useSelector((state: State) =>
    state.collections.collections.find(collection => collection.id === id),
  );

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
