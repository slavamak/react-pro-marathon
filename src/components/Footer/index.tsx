import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '@/components/Container';
import { INav } from '@/interfaces';

import styles from './Footer.module.scss';

const FooterNav: INav[] = [
  {
    title: 'Ours Team',
    url: '/team',
    id: 1,
  },
];

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
            {FooterNav.map(({ title, url, id }) => (
              <li key={id}>
                <Link to={url}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};
