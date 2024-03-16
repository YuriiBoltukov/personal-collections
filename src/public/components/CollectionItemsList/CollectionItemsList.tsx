import React from 'react';
import { List } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/query';
import { Item } from '../../modules/collection';
import { CollectionItem } from '../../UI';

export const CollectionItemsList: React.FC = () => {
  const items = useSelector((state: RootState) => state.collections.items);

  return (
    <List
      dataSource={items}
      renderItem={(item: Item) => (
        <List.Item>
          <CollectionItem item={item} />
        </List.Item>
      )}
    />
  );
};
