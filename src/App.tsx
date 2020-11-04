import React from 'react';

import { Container } from './components/Container/Container';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <section style={{ height: '100vh' }}>
          <Container>
            <h2>Section content</h2>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};
