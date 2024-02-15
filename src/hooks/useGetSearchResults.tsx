import { useMemo } from 'react';
import { Product } from '../types';
import { useFetch } from './useFetch';

export function useGetSearchResults(query: string, page: number, amount: number) {
	const url = useMemo(() => {
		const url = new URL('https://api.punkapi.com/v2/beers');
		url.searchParams.set('beer_name', query);
		url.searchParams.set('page', page.toString());
		url.searchParams.set('per_page', amount.toString());
		return url;
	}, [page, amount, query]);

	return useFetch<Product[]>(url);
}
