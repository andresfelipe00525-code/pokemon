import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setSearch, setType } from '../../../store/slices/filters.slice';

const POKEMON_TYPES = [
	'allPokemons',
	'normal',
	'fire',
	'water',
	'grass',
	'electric',
	'ice',
	'fighting',
	'poison',
	'ground',
	'flying',
	'psychic',
	'bug',
	'rock',
	'ghost',
	'dragon',
	'steel',
	'fairy',
];

const SearchBar = () => {
	const dispatch = useAppDispatch();
	const { search, type } = useAppSelector((state) => state.filters);
	const [searchTerm, setSearchTerm] = useState(search);

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setSearchTerm(value);
		dispatch(setSearch(value));
	};

	const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const value = event.target.value;
		dispatch(setType(value));
	};

	return (
		<div
			className="
            flex flex-col md:flex-row gap-4 p-5 bg-red-700 rounded-xl shadow-2xl border-4 border-yellow-400
        "
		>
			<div className="flex">
				<input
					type="text"
					placeholder="Search Pokémon by name..."
					value={searchTerm}
					onChange={handleSearchChange}
					className="
                        w-full p-3 rounded-lg border-4 border-blue-500 focus:border-yellow-300 focus:ring-2 focus:ring-yellow-300 
                        transition duration-200 bg-gray-900 text-white placeholder-gray-500 font-semibold shadow-inner
                    "
				/>
			</div>

			<div className="w-full md:w-64">
				<select
					value={type}
					onChange={handleTypeChange}
					className="
                        w-full p-3 rounded-lg border-4 border-red-500 bg-blue-600 text-white capitalize 
                        appearance-none cursor-pointer font-bold shadow-md hover:bg-blue-700
                    "
				>
					{POKEMON_TYPES.map((typeOption) => (
						<option key={typeOption} value={typeOption}>
							{typeOption === 'allPokemons' ? 'All Types' : typeOption}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default SearchBar;
