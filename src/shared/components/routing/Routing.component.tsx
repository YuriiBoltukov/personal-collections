import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardPage from '../../../public/pages/dashboard/Dashboard.page.tsx';
import { CollectionsPage } from '../../../public/pages/collections/Collections.page.tsx';
import CollectionDetailsPage from '../../../public/pages/collectionDetails/CollectionDetails.page.tsx';
import LoginPage from '../../../public/pages/login/Login.page.tsx';
import SearchResultPage from '../../../public/pages/searchResultPage/SearchResult.page.tsx';
import SignupPage from '../../../public/pages/signup/Signup.page.tsx';
import CreateCollectionPage from '../../../private/pages/createCollection/CreateCollection.page.tsx';
import AdminPanelPage from '../../../private/pages/adminPanel/AdminPanel.page.tsx';
import PrivateOfficePage from '../../../private/pages/privateOffice/PrivateOffice.page.tsx';
import { Role } from '../../../public/modules/user';

export function RoutingComponent({ role }: { role: Role }) {
  // todo resolve public route
  // todo rewrite so weak logic
  const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    let available = false;
    const path = Array.isArray(children) ? children[1] : '';
    if (path === 'privateOffice') {
      available = role === Role.user;
    } else {
      available = role === Role.admin;
    }
    return available ? <>{children}</> : <Navigate to={'/'} />;
  };

  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/collections/" element={<CollectionsPage />} />
      <Route path="/collections/:id" element={<CollectionDetailsPage />} />
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
  );
}
