import React from 'react';

import { Container } from '@/components/Container';
import { IPokemonProps, IPokemon } from '@/interfaces';
import { useData } from '@/hook/useData';
import { toCapitalizeFirstLetter } from '@/utils/toCapitalizeFirstLetter';

export const PokemonPage: React.FC<IPokemonProps> = ({ id }) => {
  const { data, isLoading } = useData<IPokemon>('getPokemon', { id });

  if (isLoading) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <h1>Yo! {data && toCapitalizeFirstLetter(data.name)}</h1>
    </Container>
  );
};
