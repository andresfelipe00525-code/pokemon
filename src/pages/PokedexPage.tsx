import {
	useGetPokemonByTypeQuery,
	useGetPokemonListQuery,
} from '../services/pokemon.api';
import { useAppSelector } from '../store/hooks';

import PokeCard from '../components/ui/pokedex/PokeCard';

const PokedexPage = () => {
	const trainer = useAppSelector((state) => state.trainer);
	const { search, type, page, pageSize } = useAppSelector(
		(state) => state.filters,
	);

	const offset = (page - 1) * pageSize;

	const listQuery = useGetPokemonListQuery(
		{ limit: pageSize, offset: offset },
		{ skip: type !== 'allPokemons' },
	);

	const typeQuery = useGetPokemonByTypeQuery(type, {
		skip: type === 'allPokemons',
	});

	const isLoading = listQuery.isLoading || typeQuery.isLoading;
	const error = listQuery.error || typeQuery.error;

	const currentData = type === 'allPokemons' ? listQuery.data : typeQuery.data;

	const results = currentData
		? 'results' in currentData
			? currentData.results
			: currentData.pokemon.map((item) => item.pokemon)
		: [];

	const filtered = results.filter((pokemon) =>
		pokemon.name.toLowerCase().includes(search.toLowerCase()),
	);

	if (isLoading) {
		return (
			<div className="flex justify-center items-center min-h-screen bg-gray-900">
				<div className="text-xl font-bold text-yellow-400 animate-spin p-4 border-4 border-red-600 rounded-full shadow-lg">
					Loading Data...
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="flex justify-center items-center min-h-screen bg-gray-100">
				<div className="p-8 text-center bg-white rounded-xl shadow-xl border-4 border-red-500">
					<h2 className="text-2xl font-bold text-red-600">Error!</h2>
					<p className="text-gray-700 mt-2">Could not fetch Pokémon data.</p>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-100 p-8">
			<h1 className="text-5xl font-extrabold text-red-700 text-center mb-8 tracking-tighter drop-shadow-md border-b-4 border-blue-500 pb-2">
				Welcome, Trainer {trainer}{' '}
			</h1>

			<p className="text-lg text-gray-700 text-center mb-6">
				Current View: {type} | Search: "{search}"
			</p>

			<p className="text-xl font-bold text-center mb-8 bg-blue-100 p-3 rounded-lg shadow-inner border-b-4 border-blue-500 max-w-lg mx-auto"></p>
			<span className="text-red-700 uppercase mr-3">Type:</span>
			<span className="capitalize text-blue-800 font-extrabold mr-4">
				{type === 'allPokemons' ? 'All Types' : type}
			</span>
			{filtered.length > 0 ? (
				filtered.map((pokemon) => (
					<PokeCard key={pokemon.name} pokemon={pokemon} />
				))
			) : (
				<div className="col-span-full text-center p-4 text-red-500 font-bold">
					No Pokémon found matching "{search}".
				</div>
			)}
		</div>
	);
};

export default PokedexPage;
