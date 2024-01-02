import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import type { UseQueryOptions } from '@tanstack/react-query';
import type { PlanetResponse } from '@/types/responses';

type OptionParams = Omit<
  UseQueryOptions<PlanetResponse, Error, PlanetResponse, ['planet', string]>,
  'queryKey' | 'queryFn'
>;

type Params = {
  id: string;
  options?: OptionParams;
};

export default function usePlanetDetail({ id, options }: Params) {
  const fetcher = async () => {
    const { data } = await axios.get<PlanetResponse>(`https://swapi.dev/api/planets/${id}/`);
    return data;
  };

  return useQuery({ queryKey: ['planet', id], queryFn: fetcher, ...options });
}
