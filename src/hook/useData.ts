import { useEffect, useState } from 'react';

import { req } from '@/utils/request';

export const useData = <T>(endpoint: string, query: object, deps: any[] = []) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await req<T>(endpoint, query);

        setData(result);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, deps);

  return {
    data,
    isLoading,
    isError,
  };
};
