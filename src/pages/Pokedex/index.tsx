import React from 'react';

import { Container } from '@/components/Container';

import styles from './Pokedex.module.scss';

export const PokedexPage = () => {
  return (
    <section className={styles.root}>
      <Container>
        <p>PokedexPage</p>
      </Container>
    </section>
  );
};
