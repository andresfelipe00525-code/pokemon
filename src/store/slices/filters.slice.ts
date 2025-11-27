import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
	search: string;
	type: string;
	page: number;
	pageSize: number;
}

const initialState: FiltersState = {
	search: '',
	type: 'allPokemons',
	page: 1,
	pageSize: 20,
};

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload;
			state.page = 1;
		},
		setType: (state, action: PayloadAction<string>) => {
			state.type = action.payload;
			state.page = 1;
		},
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
		setPageSize: (state, action: PayloadAction<number>) => {
			state.pageSize = action.payload;
			state.page = 1;
		},
		// AÑADIDO: Define el reducer para que pueda ser exportado
		resetFilters: () => initialState,
	},
});

export const { setSearch, setType, setPage, setPageSize, resetFilters } =
	filtersSlice.actions;

export default filtersSlice.reducer;
