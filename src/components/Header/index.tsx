import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '@/components/Container';
import { INav } from '@/interfaces';

import { ReactComponent as Logo } from './assets/logo.svg';
import styles from './Header.module.scss';

const HeaderNav: INav[] = [
  {
    title: 'Home',
    url: '/',
    id: 1,
  },
  {
    title: 'Pokédex',
    url: '/pokedex',
    id: 2,
  },
  {
    title: 'Legendaries',
    url: '/legendaries',
    id: 3,
  },
  {
    title: 'Documentation',
    url: '/docs',
    id: 4,
  },
];

export const Header: React.FC = () => {
  return (
    <header className={styles.root}>
      <Container>
        <div className={styles.header}>
          <Link className={styles.logo} title="PokemonDesk" to="/">
            <Logo />
          </Link>
          <nav className={styles.navigation}>
            {HeaderNav.map(({ title, url, id }) => (
              <Link className={styles.navigation__item} to={url} key={id}>
                {title}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
};
