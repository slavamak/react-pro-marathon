import React from 'react';

import { Button } from '@/components/Button';
import { Heading } from '@/components/Heading';
import { Container } from '@/components/Container';
import { IPagesProps } from '@/interfaces';

import styles from './NotFound.module.scss';
import Image from './assets/404.png';

export const NotFoundPage: React.FC<IPagesProps> = () => {
  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <Heading className={styles.title}>404</Heading>
        <img className={styles.image} src={Image} alt="404" />
        <Heading className={styles['sub-title']} size={2}>
          <span>The rocket team</span> has won this time.
        </Heading>
        <Button className={styles.btn} color="yellow" isAnchor href="/">
          Return
        </Button>
      </Container>
    </section>
  );
};
