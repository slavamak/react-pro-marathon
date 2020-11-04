import React from 'react';

import { Container } from '@/components/Container';
import styles from './Home.module.scss';

export const HomePage: React.FC = () => {
  return (
    <section className={styles.root}>
      <Container>
        <h2>Section content</h2>
      </Container>
    </section>
  )
};
