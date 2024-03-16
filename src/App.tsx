import style from './App.module.scss';
import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store/store.ts';
import {
  Routes,
  Route,
  NavLink,
  useLocation,
  Navigate,
} from 'react-router-dom';
import DashboardPage from './public/pages/dashboard/Dashboard.page.tsx';
import LoginPage from './public/pages/login/Login.page.tsx';
import SearchResultPage from './public/pages/searchResultPage/SearchResult.page.tsx';
import SignupPage from './public/pages/signup/Signup.page.tsx';
import AdminPanelPage from './private/pages/adminPanel/AdminPanel.page.tsx';
import PrivateOfficePage from './private/pages/privateOffice/PrivateOffice.page.tsx';
import { Role } from './public/modules/user';
import { User } from './public/modules/user';
import CreateCollectionPage from './private/pages/createCollection/CreateCollection.page.tsx';
import CollectionPage from './public/pages/collection/Collection.page.tsx';
import { CollectionsPage } from './public/pages/collections/Collections.page.tsx';
import { Layout, Menu, theme } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { Footer } from 'antd/lib/layout/layout';
import AnchorLink from 'antd/es/anchor/AnchorLink';

const ROUTES = (role: Role | undefined) => {
  return [
    {
      name: 'dashboard',
      path: '/',
      available: true,
    },
    {
      name: 'login',
      path: '/login',
      available: true,
    },
    {
      name: 'signup',
      path: '/signup',
      available: true,
    },
    {
      name: 'search result',
      path: '/searchResult',
      available: true,
    },
    {
      name: 'collection',
      path: '/collection',
      available: true,
    },
    {
      name: 'private office',
      path: '/private/privateOffice',
      available: role && [Role.user, Role.admin].includes(role),
    },
    {
      name: 'admin panel',
      path: '/private/admin',
      available: role === Role.admin,
    },
  ].filter(route => route.available);
};

function App() {
  const [user, setUser]: [null | User, (value: User) => void] =
    useState<null | User>(null);
  const location = useLocation();
  let menuItems = getMenu();

  const defaultSelectedKeys: string[] = [getCurrentActiveRoute()];
  function getMenu() {
    return ROUTES(user?.role).map(route => {
      return {
        key: route.path,
        label: (
          <NavLink className={style.nav_link} to={route.path}>
            {route.name}
          </NavLink>
        ),
      };
    });
  }

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

  useEffect(() => {
    menuItems = getMenu();
  }, [user]);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  function getCurrentActiveRoute() {
    const path = location.pathname;

    const currentRoute = menuItems.find(route => {
      return route.key === path;
    });

    if (currentRoute) {
      return currentRoute.key;
    }

    return menuItems[0].key;
  }

  const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    let available = false;
    const path = Array.isArray(children) ? children[1] : '';
    if (path === 'privateOffice') {
      available = user?.role === Role.user;
    } else {
      available = user?.role === Role.admin;
    }
    return available ? <>{children}</> : <Navigate to={'/'} />;
  };

  return (
    <Provider store={store}>
      <Layout>
        <Header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={defaultSelectedKeys}
            items={menuItems}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Header>
        <Content style={{ padding: '0 48px' }}>
          <div
            style={{
              padding: 24,
              minHeight: 380,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/collection/" element={<CollectionsPage />} />
              <Route path="/collection/:id" element={<CollectionPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/searchResult" element={<SearchResultPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/create" element={<CreateCollectionPage />} />
              <Route
                path="/private/admin"
                element={
                  <PrivateRoute>
                    <AdminPanelPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/private/privateOffice"
                element={
                  <PrivateRoute>
                    <PrivateOfficePage />
                    {'privateOffice'}
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ©{new Date().getFullYear()} Created by{' '}
          <AnchorLink
            href={'https://github.com/YuriiBoltukov'}
            title="YuriiBoltukov"
            target="blank"
          />
        </Footer>
      </Layout>
    </Provider>
  );
}

export default App;
