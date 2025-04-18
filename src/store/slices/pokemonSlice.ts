import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PokemonFull } from '../../types/pokemon-full';
import { PokemonBasic } from '../../types/pokemon';


interface PokemonState {
	allPokemons: PokemonBasic[] | PokemonFull[];
}

const initialState: PokemonState = {
	allPokemons: [],
};

const pokemonSlice = createSlice({
	name: 'pokemon',
	initialState,
	reducers: {
		setPokemons(state, action: PayloadAction<PokemonBasic[] | PokemonFull[]>) {
			state.allPokemons = action.payload;
		},
		appendPokemons(state, action: PayloadAction<PokemonBasic[] | PokemonFull[]>) {
			//const existingIds = new Set(state.allPokemons.map((p) => p.id));
			//const newUnique = action.payload.filter((p) => !existingIds.has(p.id));
			state.allPokemons = [...state.allPokemons, ...action.payload];
		},
		clearPokemons(state) {
			state.allPokemons = [];
		},
	},
});

export const { setPokemons, appendPokemons, clearPokemons } = pokemonSlice.actions;
export default pokemonSlice.reducer;
