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
import { LoadingPage } from './ui/pages/LoadingPage';

const publicRoutes: RouteObject[] = [
  {
    index: true,
    path: '/',
    element: <LoadingPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
];

const protectedRoutes: RouteObject[] = [
  {
    path: '/home',
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
];

const privateRoutes: RouteObject[] = [
  {
    path: '/admin',
    element: <AdminPage />,
  },
];

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const useAuth = UseAuth();
  if (!useAuth.isLogged()) {
    return <Navigate to='/login' replace />;
  }

  return <>{children}</>;
};

const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const useAuth = UseAuth();
  if (!useAuth.isLogged()) {
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
).concat(
  privateRoutes.map((route) => {
    return {
      path: route.path,
      element: <PrivateRoute children={route.element} />,
    };
  })
)

const router = createBrowserRouter(routes);
export { router };
