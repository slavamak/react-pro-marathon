import React from 'react';

import { Heading } from '@/components/Heading';
import { Container } from '@/components/Container';
import { IPagesProps } from '@/interfaces';

import styles from './Empty.module.scss';

export const EmptyPage: React.FC<IPagesProps> = ({ title }) => {
  return (
    <section className={styles.root}>
      <Container>
        <Heading>Empty page: {title}</Heading>
      </Container>
    </section>
  );
};
