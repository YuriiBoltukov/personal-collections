import CreateCollection from '../../../private/pages/CreateCollection/CreateCollection.tsx';
import { Tags } from '../../UI';

function Dashboard() {
  return (
    <div>
      Dashboard
      <CreateCollection />
      <div>
        Collections: Tags:
        <div>
          <Tags />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
