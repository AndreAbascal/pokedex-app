// src/store/slices/filtersSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
	searchText: string;
	selectedType: number;
}

const initialState: FiltersState = {
	searchText: '',
	selectedType: 0,
};

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setFilters(state, action: PayloadAction<Partial<FiltersState>>) {
			const { selectedType, searchText } = action.payload;
			if (selectedType !== undefined) state.selectedType = selectedType;
			if (searchText !== undefined) state.searchText = searchText;
		},
		resetFilters(state) {
			state.searchText = '';
			state.selectedType = 0;
		},
		resetSearchText(state) {
			state.searchText = '';
		},
		setSearchText(state, action: PayloadAction<string>) {
			state.searchText = action.payload;
		}
	},
});

export const { setFilters, resetFilters, resetSearchText, setSearchText } = filtersSlice.actions;
export default filtersSlice.reducer;
