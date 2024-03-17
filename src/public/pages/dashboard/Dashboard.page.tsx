import CreateCollectionPage from '../../../private/pages/createCollection/CreateCollection.page.tsx';
import { TagControlUi } from '../../UI';

function DashboardPage() {
  return (
    <div>
      Dashboard
      <CreateCollectionPage />
      <div>
        Collections: Tags:
        <div>
          <TagControlUi />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
