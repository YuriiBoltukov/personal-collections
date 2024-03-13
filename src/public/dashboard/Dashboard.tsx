import Tags from '../../components/Tags/Tags.tsx';
import CreateCollection from '../../components/CreateCollection/CreateCollection.tsx';

function Dashboard() {
  return (
    <div>
      Dashboard
      <CreateCollection />
      <div>
        Collections:

        Tags:
        <div>
          <Tags />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
