import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HomePage } from '@/pages/Home';
import { PokedexPage } from '@/pages/Pokedex';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { NotFoundPage } from './pages/NotFound';

export const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/pokedex" component={PokedexPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};
