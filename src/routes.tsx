import React from 'react';

import { HomePage } from '@/pages/Home';
import { PokedexPage } from '@/pages/Pokedex';
import { EmptyPage } from '@/pages/Empty';

interface INav {
  title: string;
  url: NavLinkEnum;
  component: (title: string) => () => JSX.Element;
}

interface IAcc {
  [n: string]: () => JSX.Element;
}

export enum NavLinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/docs',
  OURS_TEAM = '/team',
}

export const HEADER_NAV: INav[] = [
  {
    title: 'Home',
    url: NavLinkEnum.HOME,
    component: (title) => () => <HomePage title={title} />,
  },
  {
    title: 'Pokédex',
    url: NavLinkEnum.POKEDEX,
    component: (title) => () => <PokedexPage title={title} />,
  },
  {
    title: 'Legendaries',
    url: NavLinkEnum.LEGENDARIES,
    component: (title) => () => <EmptyPage title={title} />,
  },
  {
    title: 'Documentation',
    url: NavLinkEnum.DOCUMENTATION,
    component: (title) => () => <EmptyPage title={title} />,
  },
];

export const FOOTER_NAV: INav[] = [
  {
    title: 'Ours Team',
    url: NavLinkEnum.OURS_TEAM,
    component: (title) => () => <EmptyPage title={title} />,
  },
];

const transformArray = (array: INav[]) => {
  return array.reduce((acc: IAcc, item: INav) => {
    acc[item.url] = item.component(item.title);
    return acc;
  }, {});
};

const headerNav = transformArray(HEADER_NAV);
const footerNav = transformArray(FOOTER_NAV);

export const routes = {
  ...headerNav,
  ...footerNav,
};
