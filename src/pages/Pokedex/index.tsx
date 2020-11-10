import React, { useState } from 'react';

import { Container } from '@/components/Container';
import { PokemonCard } from '@/components/PokemonCard';
import { IPagesProps } from '@/interfaces';

import styles from './Pokedex.module.scss';
import data from '../../pokemons.json';

export const PokedexPage: React.FC<IPagesProps> = () => {
  const [pokemons] = useState([...data]);

  return (
    <section className={styles.root}>
      <Container>
        <div className={styles.grid}>
          {pokemons.map((pokemon) => {
            return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
          })}
        </div>
      </Container>
    </section>
  );
};
