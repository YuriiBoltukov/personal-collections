import Tags             from '../../UI/Tags/Tags.tsx';
import CreateCollection from '../../../private/pages/CreateCollection/CreateCollection.tsx';

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
