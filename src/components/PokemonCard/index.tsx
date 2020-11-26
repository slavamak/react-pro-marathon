import React from 'react';

import { Heading } from '@/components/Heading';
import { IPokemon } from '@/interfaces';
import { toCapitalizeFirstLetter } from '@/utils/toCapitalizeFirstLetter';

import styles from './PokemonCard.module.scss';

interface IPokemonCardProps {
  pokemon: IPokemon;
}

export const PokemonCard: React.FC<IPokemonCardProps> = ({ pokemon }) => {
  return (
    <div className={styles.root}>
      <div className={styles.infoWrap}>
        <Heading size={3} className={styles.titleName}>
          {toCapitalizeFirstLetter(pokemon.name)}
        </Heading>
        <div className={styles.statWrap}>
          <div className={styles.statItem}>
            <div className={styles.statValue}>{pokemon.stats.attack}</div>
            Attack
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>{pokemon.stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={styles.labelWrap}>
          {pokemon.types.map((type: string) => (
            <span className={styles.label} key={type}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.pictureWrap}>
        <img src={pokemon.img} alt={pokemon.name} />
      </div>
    </div>
  );
};
