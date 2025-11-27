import { configureStore } from '@reduxjs/toolkit';
import trainerReducer from './slices/trainer.slice';
import filtersReducer from './slices/filters.slice';
import { pokemonApi } from '../services/pokemon.api';

export const store = configureStore({
	reducer: {
		trainer: trainerReducer,
		filters: filtersReducer,
		[pokemonApi.reducerPath]: pokemonApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
