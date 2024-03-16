import React from 'react';
import { Tag } from 'antd';
import  Item  from '../../models/interface.item.ts'
function CollectionItem( { item }: Item ) {
  return (
    <div style={ { border: '1px solid #ccc', padding: '10px', marginBottom: '10px' } }>
      <div>ID: { item.id }</div>
      <div>Name: { item.name }</div>
      <div>
        Tags: { item.tags.map( tag => (
        <Tag key={ tag }>{ tag }</Tag>
      ) ) }
      </div>
    </div>
  );
}

export default CollectionItem;