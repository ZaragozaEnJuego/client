import React, { FC, PropsWithChildren } from 'react';
import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';

import { HomePage, LoginPage, ProfilePage, NegotiationPage, AboutPage } from './ui/pages';

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
];

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  //TODO:
  //  const { privateKey, publicKey } = useProfile();
  if (false) {
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
