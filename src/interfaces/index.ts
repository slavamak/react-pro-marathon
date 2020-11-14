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
