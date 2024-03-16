import React from 'react';
import { List } from 'antd';
import { useSelector } from 'react-redux';
import { Item } from '../../modules/collection';
import { CollectionItem } from '../../UI';
import { State } from '../../../store/models/state.interface.ts';

export const CollectionItemsList: React.FC = () => {
  const items = useSelector((state: State) => state.collections.items);

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
