import React from 'react';

import { Container } from '@/components/Container';
import { INav } from '@/interfaces';

import styles from './Footer.module.scss';

const FooterNav: INav[] = [
  {
    title: 'Ours Team',
    url: '/team',
    id: Date.now()
  }
];

export const Footer: React.FC = () => {
  return (
    <footer className={styles.root}>
      <Container>
        <div className={styles.footer}>
          <p>Make with <span role="img" aria-label="Make with love">❤️</span></p>
          <ul className={styles.footer__nav}>
            {
              FooterNav.map(({title, url, id}) => (
                <li key={id}><a href={url}>{title}</a></li>
              ))
            }
          </ul>
        </div>
      </Container>
    </footer>
  );
};
