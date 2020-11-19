import React, { useState } from 'react';

import { Container } from '@/components/Container';
import { PokemonCard } from '@/components/PokemonCard';
import { Heading } from '@/components/Heading';
import { useData } from '@/hook/getData';
import { IPagesProps } from '@/interfaces';

import styles from './Pokedex.module.scss';

export const PokedexPage: React.FC<IPagesProps> = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({});

  const { data, isLoading, isError } = useData('getPokemons', query, [searchValue]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setQuery((state) => ({
      ...state,
      name: event.target.value,
    }));
  };

  if (isLoading) {
    return <Container>Loading...</Container>;
  }

  if (isError) {
    return <Container>Something wrong!</Container>;
  }

  return (
    <section className={styles.root}>
      <Container>
        <Heading className={styles.heading}>
          {data.total} <strong>Pokemons</strong> for you to choose your favorite
        </Heading>
        <input type="text" value={searchValue} onChange={handleSearchChange} />
        <div className={styles.grid}>
          {data.pokemons.map((pokemon) => {
            return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
          })}
        </div>
      </Container>
    </section>
  );
};
