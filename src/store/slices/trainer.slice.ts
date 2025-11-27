import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: string = '';

const trainerSlice = createSlice({
	name: 'trainer',
	initialState,
	reducers: {
		setTrainer: (_state, action: PayloadAction<string>) => {
			return action.payload;
		},

		clearTrainer: () => {
			return initialState;
		},
	},
});

export const { setTrainer, clearTrainer } = trainerSlice.actions;

export default trainerSlice.reducer;
