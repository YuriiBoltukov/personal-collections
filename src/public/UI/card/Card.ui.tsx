import { Card, Divider, Tag } from 'antd';
import { Item } from '../../modules/collections';
import { Link } from 'react-router-dom';
export function CardUi({ item }: { item: Item }) {
  return (
    <Card
      title={item.name}
      extra={<Link to="/items/:id">More</Link>}
      style={{ width: 300 }}
    >
      <p>Created date: {item.createdDate}</p>
      <p>Likes: {item.likes}</p>
      <Divider />
      {item.tags.map((tag: string) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </Card>
  );
}
