import React from 'react';
import { RouteObject } from 'react-router-dom';
import Layout from '@/layout';
import NotFound from '@/pages/NotFound';
import Main from '@/pages/Main';

export default [
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <Main /> }],
  },
  {
    path: '/*',
    element: <NotFound />,
  },
] as RouteObject[];
