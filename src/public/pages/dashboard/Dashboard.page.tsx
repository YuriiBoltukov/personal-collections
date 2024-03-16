import CreateCollectionPage from '../../../private/pages/CreateCollection/CreateCollection.page.tsx';
import { TagsUi } from '../../UI';

function DashboardPage() {
  return (
    <div>
      Dashboard
      <CreateCollectionPage />
      <div>
        Collections: Tags:
        <div>
          <TagsUi />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
