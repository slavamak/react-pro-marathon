import React from 'react';
import { A } from 'hookrouter';

import { Container } from '@/components/Container';
import { FOOTER_NAV } from '@/routes';

import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.root}>
      <Container>
        <div className={styles.footer}>
          <p className={styles.footer__text}>
            Make with{' '}
            <span role="img" aria-label="Make with love">
              ❤️
            </span>
          </p>
          <ul className={styles.footer__nav}>
            {FOOTER_NAV.map(({ title, url }) => (
              <li key={title}>
                <A href={url}>{title}</A>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};
