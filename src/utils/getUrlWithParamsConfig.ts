import { config } from '@/config';

export const getUrlWithParamsConfig = (endpointConfig: string, query: object) => {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint].uri,
    query: {
      ...query,
    },
  };

  return url;
};
