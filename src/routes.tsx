import React from 'react';

import { HomePage } from '@/pages/Home';
import { PokedexPage } from '@/pages/Pokedex';
import { EmptyPage } from '@/pages/Empty';

interface INav {
  title: string;
  url: string;
  component: (title: string) => () => JSX.Element;
}

interface IAcc {
  [n: string]: () => JSX.Element;
}

export const HEADER_NAV: INav[] = [
  {
    title: 'Home',
    url: '/',
    component: (title) => () => <HomePage title={title} />,
  },
  {
    title: 'Pokédex',
    url: '/pokedex',
    component: (title) => () => <PokedexPage title={title} />,
  },
  {
    title: 'Legendaries',
    url: '/legendaries',
    component: (title) => () => <EmptyPage title={title} />,
  },
  {
    title: 'Documentation',
    url: '/docs',
    component: (title) => () => <EmptyPage title={title} />,
  },
];

export const FOOTER_NAV: INav[] = [
  {
    title: 'Ours Team',
    url: '/team',
    component: (title) => () => <EmptyPage title={title} />,
  },
];

const headerNav = HEADER_NAV.reduce((acc: IAcc, item: INav) => {
  acc[item.url] = item.component(item.title);
  return acc;
}, {});

const footerNav = FOOTER_NAV.reduce((acc: IAcc, item: INav) => {
  acc[item.url] = item.component(item.title);
  return acc;
}, {});

export const routes = {
  ...headerNav,
  ...footerNav,
};
