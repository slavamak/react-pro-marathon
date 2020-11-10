import React from 'react';
import { A, usePath } from 'hookrouter';
import cn from 'classnames';

import { Container } from '@/components/Container';
import { HEADER_NAV } from '@/routes';

import { ReactComponent as Logo } from './assets/logo.svg';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const path = usePath();

  return (
    <header className={styles.root}>
      <Container>
        <div className={styles.header}>
          <A className={styles.logo} title="PokemonDesk" href="/">
            <Logo />
          </A>
          <nav className={styles.navigation}>
            {HEADER_NAV.map(({ title, url }) => (
              <A className={cn(styles.navigation__item, { [styles.active]: path === url })} href={url} key={title}>
                {title}
              </A>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
};
