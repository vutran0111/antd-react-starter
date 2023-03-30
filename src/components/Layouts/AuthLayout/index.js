import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/hooks';
import './index.scss';

function AuthLayout() {
  const { isAuth } = useAuth();

  return (
    <div className="auth-layout">
      {!isAuth &&
        <Navigate
          to={{
            pathname: '/login',
          }}
        />}
      {isAuth && <Outlet />}
    </div>
  );
}

export default AuthLayout;
