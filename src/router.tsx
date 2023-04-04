import React, { FC, PropsWithChildren } from 'react';
import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';

import {
  HomePage,
  LoginPage,
  ProfilePage,
  NegotiationPage,
  AboutPage,
  PropertiePage,
  AdminPage,
} from './ui/pages';
import { UseAuth } from './ui/hooks/auth/AuthContext';

const publicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <LoginPage />,
  },
];

const protectedRoutes: RouteObject[] = [
  {
    index: true,
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/negotiation',
    element: <NegotiationPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/propertie/:buildingId',
    element: <PropertiePage />,
  },
  {
    path: '/admin',
    element: <AdminPage />,
  },
];

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const { isLogged } = UseAuth();
  if (!isLogged) {
    return <Navigate to='/login' replace />;
  }

  return <>{children}</>;
};

const routes = publicRoutes.concat(
  protectedRoutes.map((route) => {
    return {
      path: route.path,
      element: <ProtectedRoute children={route.element} />,
    };
  }),
);

const router = createBrowserRouter(routes);
export { router };
