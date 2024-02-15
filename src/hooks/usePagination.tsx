import { useState } from 'react';

export function usePagination(first: number) {
	const [currentPage, setCurrentPage] = useState(1);

	const goToPage = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	const paginationData = {
		first: first,
		page: currentPage,
	};

	const Pagination: React.FunctionComponent<{
		pagesNumber: number | undefined;
	}> = ({ pagesNumber }) => {
		const pages = Array.from({ length: pagesNumber || 0 }, (_, x) => x + 1);

		return (
			<div className="flex justify-center ">
				{pages.map((el, index) =>
					currentPage === el ? (
						<button
							key={index}
							onClick={() => {
								goToPage(el);
							}}
							className="h-10 px-5 text-amber-900 transition-colors duration-150 rounded-l-lg focus:shadow-outline bg-amber-100">
							{el}
						</button>
					) : (
						<button
							key={index}
							onClick={() => {
								goToPage(el);
							}}
							className="h-10 px-5 text-amber-900 transition-colors duration-150 bg-white rounded-l-lg focus:shadow-outline hover:bg-amber-100">
							{el}
						</button>
					)
				)}
			</div>
		);
	};

	return { paginationData, Pagination };
}
