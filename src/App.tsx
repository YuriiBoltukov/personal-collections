import style from './App.module.scss';
import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store/store.ts';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Dashboard from './public/pages/dashboard/Dashboard.tsx';
import Login from './public/pages/login/Login.tsx';
import SearchResultPage from './public/pages/searchResultPage/SearchResultPage.tsx';
import Signup from './public/pages/signup/Signup.tsx';
import AdminPanel from './private/pages/adminPanel/AdminPanel.tsx';
import PrivateOffice from './private/pages/privateOffice/PrivateOffice.tsx';
import { Role } from './public/modules/user';
import { User } from './public/modules/user';
import CreateCollection from './private/pages/CreateCollection/CreateCollection.tsx';
import CollectionPage from './public/pages/collection/Collection.tsx';
import { CollectionList } from './public/components';
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
  // @ts-ignore
  const PrivateRoute = ({ children }) => {
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
        <Route path="/" element={<Dashboard />} />
        <Route path="/collection/" element={<CollectionList />} />
        <Route path="/collection/:id" element={<CollectionPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/searchResult" element={<SearchResultPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create" element={<CreateCollection />} />
        <Route
          path="/private/admin"
          element={
            <PrivateRoute>
              <AdminPanel />
            </PrivateRoute>
          }
        />
        <Route
          path="/private/privateOffice"
          element={
            <PrivateRoute>
              <PrivateOffice />
            </PrivateRoute>
          }
        />
      </Routes>
    </Provider>
  );
}

export default App;
