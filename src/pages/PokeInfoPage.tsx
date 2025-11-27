import { useParams } from 'react-router-dom';
import PageContainer from '../components/ui/PageContainer';
import { useGetPokemonByNameQuery } from '../services/pokemon.api';
const PokeInfoPage = () => {
	const { name } = useParams();

	const { data, isLoading, error } = useGetPokemonByNameQuery(name || '', {
		skip: !name,
	});

	return (
		<PageContainer>
			{isLoading && (
				<p className="text-xl font-semibold text-blue-500">Loading...</p>
			)}

			{error && (
				<p className="text-xl font-bold text-red-600 border p-4 bg-red-100 rounded-lg shadow-md">
					Error loading Pokémon!
				</p>
			)}

			{data && (
				<article className="space-y-6 p-6 bg-white rounded-xl shadow-2xl border-4 border-red-600 max-w-lg mx-auto">
					<div className="flex flex-col items-center space-y-4 border-b pb-4 border-gray-200">
						<img
							src={
								data.sprites.other?.['official-artwork']?.front_default ?? ''
							}
							alt={data.name}
							className="w-48 h-48 object-contain drop-shadow-lg"
						/>
						<h2 className="text-3xl font-black capitalize text-red-700 tracking-wider">
							{data.name}
						</h2>
					</div>

					<div className="space-y-2">
						<h3 className="font-bold text-xl text-gray-800 border-l-4 border-yellow-400 pl-2">
							Types
						</h3>
						<ul className="flex gap-4 text-sm font-semibold">
							{data.types.map((type) => (
								<li
									key={type.type.url}
									className="px-4 py-1 bg-yellow-400 text-gray-900 rounded-full capitalize shadow-md border-2 border-yellow-600"
								>
									{type.type.name}
								</li>
							))}
						</ul>
					</div>

					<div className="space-y-3">
						<h3 className="font-bold text-xl text-gray-800 border-l-4 border-blue-500 pl-2">
							Stats
						</h3>
						<ul className="text-sm grid grid-cols-2 gap-4">
							{data.stats.map((stat) => (
								<li
									key={stat.stat.url}
									className="border border-gray-300 p-3 rounded-lg flex justify-between items-center bg-gray-50 shadow-sm"
								>
									<span className="capitalize font-semibold text-gray-700">
										{stat.stat.name.replace('-', ' ')}:
									</span>
									<span className="font-mono text-lg font-bold text-blue-600 bg-blue-100 px-2 rounded">
										{stat.base_stat}
									</span>
								</li>
							))}
						</ul>
					</div>
				</article>
			)}
		</PageContainer>
	);
};

export default PokeInfoPage;
