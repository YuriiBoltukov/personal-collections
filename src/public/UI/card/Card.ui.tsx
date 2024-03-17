import { Tag } from 'antd';
import { Item } from '../../modules/collections';
export function CardUi({ item }: { item: Item }) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        marginBottom: '10px',
      }}
    >
      <div>ID: {item.id}</div>
      <div>Name: {item.name}</div>
      <div>
        Tags:{' '}
        {item.tags.map((tag: string) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </div>
  );
}
