import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/store.ts';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from './public/pages/dashboard/Dashboard.page.tsx';
import LoginPage from './public/pages/login/Login.page.tsx';
import SearchResultPage from './public/pages/searchResultPage/SearchResult.page.tsx';
import SignupPage from './public/pages/signup/Signup.page.tsx';
import AdminPanelPage from './private/pages/adminPanel/AdminPanel.page.tsx';
import PrivateOfficePage from './private/pages/privateOffice/PrivateOffice.page.tsx';
import { Role, User } from './public/modules/user';
import CreateCollectionPage from './private/pages/createCollection/CreateCollection.page.tsx';
import CollectionDetailsPage from './public/pages/collectionDetails/CollectionDetails.page.tsx';
import { CollectionsPage } from './public/pages/collections/Collections.page.tsx';
import { Layout, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { FooterUI } from './shared/UI/footer/Footer.tsx';
import HeaderComponent from './shared/components/header/Header.component.tsx';

// another page with name like app.page or smth like that - src/shared/pages

function App() {
  const [user, setUser]: [null | User, (value: User) => void] =
    useState<null | User>(null);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

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

  // todo resolve public route
  // todo rewrite so weak logic
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

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Provider store={store}>
      <Layout style={{ minHeight: '100vh' }}>
        // another cmpnt - src/shared/components
        <HeaderComponent />
        <Content style={{ padding: '0 16px' }}>
          <div
            style={{
              padding: 24,
              minHeight: 380,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            // another entity - src/shared/modules/routing
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/collections/" element={<CollectionsPage />} />
              <Route
                path="/collections/:id"
                element={<CollectionDetailsPage />}
              />
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
        <FooterUI />
      </Layout>
    </Provider>
  );
}

export default App;
