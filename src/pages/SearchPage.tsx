import { useParams } from 'react-router-dom';
import { useGetSearchResults } from '../hooks/useGetSearchResults';
import { usePagination } from '../hooks/usePagination';
import { useState } from 'react';
import { FavoriteList, FavoriteListItem } from '../components';

export function SearchPage() {
	const { query } = useParams();
	const [quer, setQuery] = useState(query ? query : '');
	const { Pagination, paginationData } = usePagination(5);
	const { data } = useGetSearchResults(quer, paginationData.page, paginationData.first);

	if (!data) {
		return <div>no search results found</div>;
	}

	return (
		<div className="flex flex-col justify-center">
			{data.map(item => (
				<FavoriteListItem item={item} edit={false}></FavoriteListItem>
			))}
			<Pagination pagesNumber={2}></Pagination>
		</div>
	);
}
