import React, { PropsWithChildren } from 'react';

import { HomePage } from '@/pages/Home';
import { PokedexPage } from '@/pages/Pokedex';
import { EmptyPage } from '@/pages/Empty';
import { PokemonPage } from '@/pages/Pokemon';
import { IPokemonProps } from './interfaces';

interface INav {
  title: string;
  url: NavLinkEnum;
  component: (props: PropsWithChildren<any>) => JSX.Element;
}

interface IAcc {
  [n: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

export enum NavLinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/docs',
  OURS_TEAM = '/team',
  POKEMON = '/pokedex/:id',
}

export const HEADER_NAV: INav[] = [
  {
    title: 'Home',
    url: NavLinkEnum.HOME,
    component: (title) => <HomePage title={title} />,
  },
  {
    title: 'Pokédex',
    url: NavLinkEnum.POKEDEX,
    component: (title) => <PokedexPage title={title} />,
  },
  {
    title: 'Legendaries',
    url: NavLinkEnum.LEGENDARIES,
    component: (title) => <EmptyPage title={title} />,
  },
  {
    title: 'Documentation',
    url: NavLinkEnum.DOCUMENTATION,
    component: (title) => <EmptyPage title={title} />,
  },
];

export const FOOTER_NAV: INav[] = [
  {
    title: 'Ours Team',
    url: NavLinkEnum.OURS_TEAM,
    component: (title) => <EmptyPage title={title} />,
  },
];

const SECOND_ROUTES: INav[] = [
  {
    title: 'Pokemon',
    url: NavLinkEnum.POKEMON,
    component: ({ title, id }: IPokemonProps) => <PokemonPage title={title} id={id} />,
  },
];

export const routes = [...HEADER_NAV, ...FOOTER_NAV, ...SECOND_ROUTES].reduce((acc: IAcc, item: INav) => {
  acc[item.url] = item.component;
  return acc;
}, {});
