import React from 'react';
import { RouteObject } from 'react-router-dom';
import Layout from '@/layout';
import NotFound from '@page/notFound';
import Home from '@page/home';
import Intro from '@page/intro';
import Contact from '@page/contact';

interface TypePage {
  path: string;
  element: React.ReactNode;
}
type TypeHandlePage = (pages: TypePage[]) => RouteObject[];

const handlePage: TypeHandlePage = pages => {
  return pages.map(({ path, element }) => {
    return {
      path,
      element: <Layout>{element}</Layout>,
    };
  });
};

export default [
  ...handlePage([
    { path: '/', element: <Home /> },
    { path: '/intro', element: <Intro /> },
    { path: '/contact', element: <Contact /> },
  ]),
  { path: '/*', element: <NotFound /> },
] as Array<RouteObject>;
