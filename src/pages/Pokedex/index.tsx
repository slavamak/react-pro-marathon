import React, { useState } from 'react';

import { Container } from '@/components/Container';
import { PokemonCard } from '@/components/PokemonCard';
import { Heading } from '@/components/Heading';
import { useData } from '@/hook/useData';
import { useDebounce } from '@/hook/useDebounce';
import { IPagesProps, IPokemon, IPokemons } from '@/interfaces';

import styles from './Pokedex.module.scss';

interface IQuery {
  name?: string;
}

export const PokedexPage: React.FC<IPagesProps> = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});

  const debouncedValue = useDebounce(searchValue, 500);

  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [debouncedValue]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setQuery((state: IQuery) => ({
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
          {data && data.total} <strong>Pokemons</strong> for you to choose your favorite
        </Heading>
        <input type="text" value={searchValue} onChange={handleSearchChange} />
        <div className={styles.grid}>
          {data &&
            data.pokemons.map((pokemon: IPokemon) => {
              return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
            })}
        </div>
      </Container>
    </section>
  );
};
