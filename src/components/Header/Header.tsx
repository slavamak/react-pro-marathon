import React from 'react';

import { Container } from '../Container/Container';

import styles from './Header.module.scss';
import Logo from '../../assets/Logo.svg';

export const Header: React.FC = () => {
  return (
    <header>
      <Container>
        <div className={styles.header}>
          <a className={styles.logo} href="/">
            <img src={Logo} alt="Pokemon Desk" />
          </a>
          <nav className={styles.navigation}>
            <a className={styles.navigation__item} href="/">
              Home
            </a>
            <a className={styles.navigation__item} href="/pokedex">
              Pokédex
            </a>
            <a className={styles.navigation__item} href="/legendaries">
              Legendaries
            </a>
            <a className={styles.navigation__item} href="/docs">
              Documentation
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
};
