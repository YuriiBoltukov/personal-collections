import Tags from '../../components/Tags/Tags.tsx';
import CollectionCard from '../../components/CollectionCard/CollectionCard.tsx';
import { mock } from '../../MOCK/mock.ts';
import CreateCollection from '../../components/CreateCollection/CreateCollection.tsx';

function Dashboard() {
  return (
    <div>
      Dashboard
      <CreateCollection />
      <div>
        Collections:
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
          {
            mock.map((card) => {
              return <CollectionCard id={card.id}  description={card.description} name={card.name} theme={card.theme}/>
            })
          }
        </div>
        Tags:
        <div>
          <Tags />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
