import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export function Searchbar() {
	const [value, setValue] = React.useState('');
	const navigate = useNavigate();
	const searchQuery = () => {
		navigate('/search/' + value);
	};

	return (
		<div className="box-border rounded-xl border-2 border-white flex items-center py-1 px-2">
			<form className="" onSubmit={searchQuery}>
				<input
					type="text"
					className="bg-inherit text-white focus:outline-none"
					placeholder="Søg..."
					onFocus={() => {}}
					value={value}
					onChange={e => {
						setValue(e.target.value);
					}}
				/>
			</form>

			<img className="" src="/icons/search.svg" alt="Workflow" />
		</div>
	);
}
