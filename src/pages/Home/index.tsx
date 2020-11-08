import React from 'react';

import { Container } from '@/components/Container';
import { Parallax } from '@/components/Parallax';
import { Heading } from '@/components/Heading';
import { Button } from '@/components/Button';

import styles from './Home.module.scss';

export const HomePage: React.FC = () => {
  return (
    <section className={styles.root}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.content}>
            <Heading>
              <strong>Find</strong> all your favorite <strong>Pokemon</strong>
            </Heading>
            <Heading className={styles['sub-heading']} size={2}>
              You can know the type of Pokemon, its strengths, disadvantages and abilities
            </Heading>
            <Button className={styles.button} color="green" mobileFullWidth isAnchor href="/pokedex">
              See pokemons
            </Button>
          </div>
          <div className={styles.image}>
            <Parallax />
          </div>
        </div>
      </Container>
    </section>
  );
};
