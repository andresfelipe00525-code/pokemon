import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setType } from '../store/slices/filtersSlice';
import { useGetTypesQuery } from '../services/pokemon.api';

const TypeSelect = () => {
	const dispatch = useAppDispatch();
	const type = useAppSelector((s) => s.filters.type);

	const { data, isLoading } = useGetTypesQuery();

	return (
		<div className="flex flex-col items-start space-y-2">
			<label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
				Filter by Type
			</label>
			<select
				value={type}
				onChange={(e) => dispatch(setType(e.target.value))}
				className="p-2 border-4 border-blue-500 rounded-lg shadow-inner bg-yellow-100 text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200 w-full sm:w-auto"
			>
				{/* Option to view all Pokémon, using 'allPokemons' value */}
				<option value="allPokemons">All Pokémon</option>

				{/* Loading state option */}
				{isLoading && <option disabled>Loading...</option>}

				{/* Map API results to options */}
				{data?.results.map((t) => (
					<option key={t.url} value={t.url}>
						{t.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default TypeSelect;
