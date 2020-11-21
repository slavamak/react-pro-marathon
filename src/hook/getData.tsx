import { useEffect, useState } from 'react';
import { IPokemon } from '@/interfaces';

import { req } from '@/utils/request';

interface IData {
  total: number;
  pokemons: Array<IPokemon>;
}

export const useData = (endpoint: string, query: object, deps: any[] = []) => {
  const [data, setData] = useState<IData>({ total: 0, pokemons: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await req(endpoint, query);

        setData(result);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [endpoint, query]);

  return {
    data,
    isLoading,
    isError,
  };
};
