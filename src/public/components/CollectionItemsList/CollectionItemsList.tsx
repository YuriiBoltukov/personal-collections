import React from 'react';
import { List } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { ItemType }   from './types';
import CollectionItem from '../CollectionItem/CollectionItem.tsx';


const CollectionItemsList: React.FC = () => {
  const items = useSelector((state: RootState) => state.collections.items);

  return (
    <List
      dataSource={items}
      renderItem={(item: ItemType) => (
        <List.Item>
          <CollectionItem item={item} />
        </List.Item>
      )}
    />
  );
};

export default CollectionItemsList;