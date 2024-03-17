import { AppPage } from './shared/pages/App.page.tsx';
import store from './store/store.ts';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <AppPage />
    </Provider>
  );
}

export default App;
