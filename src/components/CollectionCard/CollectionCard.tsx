import { Collection } from '../../models/interface.collection.ts';
import { Card } from 'antd';

const { Meta } = Card;
function CollectionCard( card: Collection ) {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Meta title={card.name} description={card.description} />
    </Card>
  );
}

export default CollectionCard;