

import apiClient from './client';
import { Skip } from '../types/skip';

export const getSkips = async (): Promise<Skip[]> => {
  const response = await apiClient.get<Skip[]>('/skips/by-location?postcode=NR32&area=Lowestoft');
  return response.data;
};