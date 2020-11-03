import React from 'react';

import { Container } from '../Container/Container';

import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer>
      <Container>
        <div className={styles.footer}>
          <p>
            Make with{' '}
            <span role="img" aria-label="Make with love">
              ❤️
            </span>
          </p>
          <ul className={styles.footer__nav}>
            <li>
              <a href="/team">Ours Team</a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};
