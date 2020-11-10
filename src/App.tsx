import React from 'react';
import { useRoutes, useTitle } from 'hookrouter';
import { routes } from '@/routes';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { NotFoundPage } from '@/pages/NotFound';

export const App = () => {
  const routeResult = useRoutes(routes);
  const pageTitle = routeResult ? routeResult.props.title || document.title : document.title;
  useTitle(pageTitle);

  if (routeResult) {
    return (
      <>
        <Header />
        <main>{routeResult}</main>
        <Footer />
      </>
    );
  }

  return <NotFoundPage />;
};
