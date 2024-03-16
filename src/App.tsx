import style from './App.module.scss';
import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store/store.ts';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import DashboardPage from './public/pages/dashboard/Dashboard.page.tsx';
import LoginPage from './public/pages/login/Login.page.tsx';
import SearchResultPage from './public/pages/searchResultPage/SearchResult.page.tsx';
import SignupPage from './public/pages/signup/Signup.page.tsx';
import AdminPanelPage from './private/pages/adminPanel/AdminPanel.page.tsx';
import PrivateOfficePage from './private/pages/privateOffice/PrivateOffice.page.tsx';
import { Role } from './public/modules/user';
import { User } from './public/modules/user';
import CreateCollectionPage from './private/pages/CreateCollection/CreateCollection.page.tsx';
import CollectionPage from './public/pages/collection/Collection.page.tsx';
import { CollectionListComponent } from './public/components';
function App() {
  const [user, setUser]: [null | User, (value: User) => void] =
    useState<null | User>(null);
  const isAdmin = user ? user.role === Role.admin : false;
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

  const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    return isAdmin ? <>{children}</> : <Navigate to={'/Home'} />;
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Provider store={store}>
      <nav className={style.nav}>
        <NavLink className={style.nav_link} to={'/'}>
          dashboard
        </NavLink>
        <NavLink className={style.nav_link} to={'/login'}>
          login
        </NavLink>
        <NavLink className={style.nav_link} to={'/signup'}>
          signup
        </NavLink>
        <NavLink className={style.nav_link} to={'/searchResult'}>
          search result
        </NavLink>
        <NavLink className={style.nav_link} to={'/collection'}>
          collection
        </NavLink>
        {isAdmin && (
          <NavLink className={style.nav_link} to={'/private/privateOffice'}>
            Private office
          </NavLink>
        )}
        {isAdmin && (
          <NavLink className={style.nav_link} to={'/private/admin'}>
            admin panel
          </NavLink>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/collection/" element={<CollectionListComponent />} />
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
            </PrivateRoute>
          }
        />
      </Routes>
    </Provider>
  );
}

export default App;
