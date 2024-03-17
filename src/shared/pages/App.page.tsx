import { Role, User } from '../../public/modules/user';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { Layout } from 'antd';
import { ContentComponent, HeaderComponent } from '../components';
import { FooterUI } from '../UI';
import store from '../../store/store.ts';

export function AppPage() {
  const [user, setUser]: [null | User, (value: User) => void] =
    useState<null | User>(null);

  async function getUser() {
    try {
      const response = await fetch('http://localhost:1000/user/1');
      const user = await response.json();
      console.log(user);
      setUser(user);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Provider store={store}>
      <Layout style={{ minHeight: '100vh' }}>
        <HeaderComponent role={user?.role || Role.undefined} />
        <ContentComponent role={user?.role || Role.undefined} />
        <FooterUI />
      </Layout>
    </Provider>
  );
}
