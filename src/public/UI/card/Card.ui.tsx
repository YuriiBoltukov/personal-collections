import { Card, Divider, Tag } from 'antd';
import { Item } from '../../modules/collections';
export function CardUi({ item }: { item: Item }) {
  return (
    <Card title={item.name} extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Created date: {item.createdDate}</p>
      <p>Likes: {item.likes}</p>
      <Divider />
      {item.tags.map((tag: string) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </Card>
  );
}
