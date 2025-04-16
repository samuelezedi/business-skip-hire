import { useQuery } from '@tanstack/react-query';
import { getSkips } from '../api/skip';
import { Skip } from '../types/skip';

export const useSkips = () => {
  return useQuery<Skip[]>({
    queryKey: ['skips'],
    queryFn: getSkips,
  });
};