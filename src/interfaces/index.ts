export interface IPagesProps {
  title?: string;
}

export interface IPokemon {
  id: number;
  name: string;
  img: string;
  stats: {
    [n: string]: number;
  };
  types: string[];
}

export interface IPokemons {
  total: number;
  pokemons: IPokemon[];
}

export interface IPokemonProps extends IPagesProps {
  id: string | number;
}
