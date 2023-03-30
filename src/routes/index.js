import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import { AuthLayout, GuestLayout } from '@/components/Layouts';
import LoginPage from '@/pages/LoginPage';
import ProfilePage from '@/pages/ProfilePage';
import NotFoundPage from '@/pages/NotFoundPage';

function Routing() {
  return (
    <Routes>
      <Route element={<GuestLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/me" element={<ProfilePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Routing;
