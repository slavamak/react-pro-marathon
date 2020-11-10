import React from 'react';
import { Heading } from '@/components/Heading';

import styles from './PokemonCard.module.scss';

interface IPokemonCardProps {
  pokemon: {
    name: string;
    img: string;
    stats: {
      [n: string]: number;
    };
    types: string[];
  };
}

export const PokemonCard: React.FC<IPokemonCardProps> = ({ pokemon }) => {
  return (
    <div className={styles.root}>
      <div className={styles.infoWrap}>
        <Heading size={3} className={styles.titleName}>
          {pokemon.name}
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
