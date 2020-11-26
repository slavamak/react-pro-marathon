import React, { useEffect } from 'react';
import gsap from 'gsap';

import { Container } from '@/components/Container';
import { Parallax } from '@/components/Parallax';
import { Heading } from '@/components/Heading';
import { Button } from '@/components/Button';
import { NavLinkEnum } from '@/routes';
import { IPagesProps } from '@/interfaces';

import styles from './Home.module.scss';

export const HomePage: React.FC<IPagesProps> = () => {
  useEffect(() => {
    gsap.fromTo(
      `.${styles.content}`,
      {
        transform: `translateY(50px)`,
        opacity: 0,
      },
      {
        transform: `translateY(0)`,
        opacity: 1,
        delay: 0.75,
        duration: 1.25,
        ease: 'expo',
      },
    );
    gsap.fromTo(
      `.${styles.button}`,
      {
        transform: `translateY(30px)`,
        opacity: 0,
      },
      {
        transform: `translateY(0)`,
        opacity: 1,
        delay: 1,
        duration: 1,
        ease: 'expo',
      },
    );
  }, []);

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
            <Button className={styles.button} color="green" mobileFullWidth isAnchor href={NavLinkEnum.POKEDEX}>
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
