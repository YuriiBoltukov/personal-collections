import React from 'react';
import { Flex } from 'antd';
import { useSelector } from 'react-redux';
import { Item } from '../../modules/collections';
import { CardUi } from '../../UI';
import { State } from '../../../store/models/state.interface.ts';

export const CardListComponent: React.FC = () => {
  const items = useSelector((state: State) => state.collections.items);

  return (
    <Flex wrap="wrap" gap="middle" justify="space-between">
      {items.map((item: Item, i: number) => {
        return <CardUi key={i} item={item} />;
      })}
    </Flex>
  );
};
