import { Product } from '../types';
import { useFetch } from './useFetch';

export function useGetOrder() {
	const url = 'https://api.punkapi.com/v2/beers?page=1&per_page=7';

	return useFetch<Product[]>(url);
}
