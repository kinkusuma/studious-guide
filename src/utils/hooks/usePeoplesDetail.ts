import axios from 'axios';
import { useQueries } from '@tanstack/react-query';
import type { UseQueryOptions } from '@tanstack/react-query';
import type { PeopleResponse } from '@/types/responses';

type OptionParams = Omit<
  UseQueryOptions<PeopleResponse, Error, PeopleResponse, ['people', string]>,
  'queryKey' | 'queryFn'
>;

type Params = {
  ids: string[];
  options?: OptionParams;
};

export default function usePeoplesDetail({ ids, options }: Params) {
  const fetcher = async (id: string = '0') => {
    const { data } = await axios.get<PeopleResponse>(`https://swapi.dev/api/people/${id}/`);
    return data;
  };

  return useQueries({
    queries: ids.map((id) => ({
      queryKey: ['people', id],
      queryFn: () => fetcher(id),
      ...(options as OptionParams[])
    })),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending)
      };
    }
  });
}
