import React from 'react';

import { Container } from '@/components/Container';
import { INav } from '@/interfaces';

import { ReactComponent as Logo } from './assets/logo.svg';
import styles from './Header.module.scss';

const HeaderNav: INav[] = [
  {
    title: 'Home',
    url: '/',
    id: Date.now()
  },
  {
    title: 'Pokédex',
    url: '/pokedex',
    id: Date.now()
  },
  {
    title: 'Legendaries',
    url: '/legendaries',
    id: Date.now()
  },
  {
    title: 'Documentation',
    url: '/docs',
    id: Date.now()
  }
];

export const Header: React.FC = () => {
  return (
    <header className={styles.root}>
      <Container>
        <div className={styles.header}>
          <a className={styles.logo} href="/" title="PokemonDesk">
            <Logo />
          </a>
          <nav className={styles.navigation}>
            {
              HeaderNav.map(({ title, url, id }) => (
                <a className={styles.navigation__item} href={url} key={id}>
                  {title}
                </a>
              ))
            }
          </nav>
        </div>
      </Container>
    </header>
  );
};
