import React from 'react';

import { Container } from '../Container/Container';

import styles from './Header.module.scss';
import Logo from '../../assets/Logo.svg';

export const Header: React.FC = () => {
  const navItems = [
    {
      title: 'Home',
      url: '/'
    },
    {
      title: 'Pokédex',
      url: '/pokedex'
    },
    {
      title: 'Legendaries',
      url: '/legendaries'
    },
    {
      title: 'Documentation',
      url: '/docs'
    }
  ];

  return (
    <header>
      <Container>
        <div className={styles.header}>
          <a className={styles.logo} href="/">
            <img src={Logo} alt="Pokemon Desk" />
          </a>
          <nav className={styles.navigation}>
            {
              navItems.map(item => (
                <a className={styles.navigation__item} href={item.url} key={Date.now()}>
                  {item.title}
                </a>
              ))
            }
          </nav>
        </div>
      </Container>
    </header>
  );
};
