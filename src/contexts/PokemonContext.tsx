import React, { createContext, useContext } from 'react';
import { PokemonFull } from '../types/pokemon-full';
import { PokemonBasic } from '../types/pokemon';

type PokemonContextType = {
	pokemon: PokemonBasic | PokemonFull;
};

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const PokemonProvider = ({
	children,
	pokemon,
}: {
	children: React.ReactNode;
	pokemon: PokemonBasic | PokemonFull;
}) => {
	return (
		<PokemonContext.Provider value={{ pokemon }}>
			{children}
		</PokemonContext.Provider>
	);
};

export const usePokemon = (): PokemonBasic | PokemonFull => {
	const context = useContext(PokemonContext);
	if (!context) {
		throw new Error('usePokemon must be used within a PokemonProvider');
	}
	return context.pokemon;
};
