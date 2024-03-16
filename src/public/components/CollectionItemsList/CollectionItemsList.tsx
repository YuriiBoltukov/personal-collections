import React from 'react';
import { List } from 'antd';
import { useSelector } from 'react-redux';
import CollectionItem from '../CollectionItem/CollectionItem.tsx';
import { RootState } from '@reduxjs/toolkit/query';
import { ItemType } from 'antd/es/menu/hooks/useItems';

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
