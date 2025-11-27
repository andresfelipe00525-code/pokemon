import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
	PokemonDetail,
	PokemonListResponse,
} from '../types/pokemon.interface';

interface PokemonByTypeResponse {
	pokemon: {
		pokemon: {
			name: string;
			url: string;
		};
		slot: number;
	}[];
}

export const pokemonApi = createApi({
	reducerPath: 'pokemonApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
	tagTypes: ['Pokemon', 'List'],

	endpoints: (builder) => ({
		getPokemonList: builder.query<
			PokemonListResponse,
			{ limit: number; offset: number }
		>({
			query: ({ limit, offset }) => `pokemon?limit=${limit}&offset=${offset}`,

			providesTags: (result) =>
				result?.results
					? [
							...result.results.map((p) => ({
								type: 'Pokemon' as const,
								id: p.name,
							})),
							{ type: 'List', id: 'LIST' },
					  ]
					: [{ type: 'List', id: 'LIST' }],
		}),

		getPokemonByName: builder.query<PokemonDetail, string>({
			query: (name) => `pokemon/${name}`,
			providesTags: (_result, _error, name) => [{ type: 'Pokemon', id: name }],
		}),

		getTypes: builder.query<{ results: { name: string; url: string }[] }, void>(
			{
				query: () => 'type',
			},
		),

		getPokemonByType: builder.query<PokemonByTypeResponse, string>({
			query: (typeName) => `type/${typeName}`,
		}),
	}),
});

export const {
	useGetPokemonListQuery,
	useGetPokemonByNameQuery,
	useGetTypesQuery,
	useGetPokemonByTypeQuery,
} = pokemonApi;
