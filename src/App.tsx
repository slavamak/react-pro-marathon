import React from 'react';

import { HomePage } from '@/pages/Home';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  );
};
