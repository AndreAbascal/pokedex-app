import React from 'react';
import { render } from '@testing-library/react-native';
import PokemonCard from '../src/components/PokemonCard';
import { PokemonBasic } from '../src/types/pokemon';

// Mock the useNavigation hook
jest.mock('@react-navigation/native', () => ({
	...jest.requireActual('@react-navigation/native'),
	useNavigation: () => ({
		navigate: jest.fn(), // Mock the navigate function
	}),
}));

describe('PokemonCard', () => {
	it('renders pokemon name and left padded id', () => {
		const item: PokemonBasic = {
			id: 1,
			name: 'Bulbasaur',
			display_name: 'Bulbasaur',
			sprite: 'https://example.com/bulbasaur.png',
			color: {
				name: 'green', rgba_code: 'rgba(0, 255, 0, 1)',
				id: 0,
				display_name: 'Green',
				hex_code: '#00FF00'
			},
		};
		const { getByText } = render(
			<PokemonCard pokemon={item} />
		);

		expect(getByText('Bulbasaur')).toBeTruthy();
		expect(getByText('0001')).toBeTruthy();
	});
});
