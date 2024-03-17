import { Role } from '../../public/modules/user';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Layout } from 'antd';
import { ContentComponent, HeaderComponent } from '../components';
import { FooterUI } from '../UI';
import { getUser } from '../../public/modules/user/redux/user.api.ts';
import { State, useAppDispatch } from '../../store/models/state.interface.ts';
import { setUser } from '../../public/modules/user/redux/user.slice.ts';

export function AppPage() {
  const dispatch = useAppDispatch();
  const user = useSelector((state: State) => state.user.user);

  async function fetchUser() {
    const user = await getUser('1');
    if (user) dispatch(setUser(user));
  }

  useEffect(() => {
    fetchUser();
  }, [dispatch]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderComponent role={user?.role || Role.undefined} />
      <ContentComponent role={user?.role || Role.undefined} />
      <FooterUI />
    </Layout>
  );
}
