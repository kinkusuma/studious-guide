import axios from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';
import type { InfiniteData, UndefinedInitialDataInfiniteOptions } from '@tanstack/react-query';
import type { PlanetsResponse } from '@/types/responses';

type OptionParams = Omit<
  UndefinedInitialDataInfiniteOptions<
    PlanetsResponse,
    Error,
    InfiniteData<PlanetsResponse, string>,
    ['planets'],
    string
  >,
  'queryKey' | 'queryFn' | 'getNextPageParam' | 'initialPageParam'
>;

export default function usePlanets(options?: OptionParams) {
  const fetcher = async ({ pageParam: url }: { pageParam: string }) => {
    const { data } = await axios.get<PlanetsResponse>(url);
    return data;
  };

  return useInfiniteQuery({
    queryKey: ['planets'],
    queryFn: fetcher,
    initialPageParam: 'https://swapi.dev/api/planets/',
    getNextPageParam: (lastPage) => lastPage.next,
    ...options
  });
}
