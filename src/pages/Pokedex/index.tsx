import React, { useEffect, useState } from 'react';

import { Container } from '@/components/Container';
import { PokemonCard } from '@/components/PokemonCard';
import { Heading } from '@/components/Heading';
import { IPagesProps, IPokemon } from '@/interfaces';

import styles from './Pokedex.module.scss';

interface IData {
  total: number;
  pokemons: Array<IPokemon>;
}

const usePokemons = () => {
  const [data, setData] = useState<IData>({ total: 0, pokemons: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons');
        const result = await response.json();

        setData(result);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

export const PokedexPage: React.FC<IPagesProps> = () => {
  const { data, isLoading, isError } = usePokemons();

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
        <div className={styles.grid}>
          {data.pokemons.map((pokemon) => {
            return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
          })}
        </div>
      </Container>
    </section>
  );
};
