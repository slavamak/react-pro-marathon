import React from 'react';

import { Button } from '@/components/Button';
import { Heading } from '@/components/Heading';
import { Container } from '@/components/Container';

import styles from './NotFound.module.scss';

export const NotFoundPage = () => {
  return (
    <section className={styles.root}>
      <Container>
        <Heading>404</Heading>
        <Heading size={2}>The rocket team has won this time.</Heading>
        <Button color="yellow" isAnchor href="/">
          Return
        </Button>
      </Container>
    </section>
  );
};
