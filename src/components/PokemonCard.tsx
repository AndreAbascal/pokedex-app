import React, { useCallback, useMemo } from 'react';
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PokemonBasic } from '../types/pokemon';
import { PokemonProvider } from '../contexts/PokemonContext';

interface Props {
	pokemon: PokemonBasic
}

function PokemonCard({ pokemon }: Props) {

	const navigation = useNavigation();

	const cardStyle = useMemo(() => [styles.card, { backgroundColor: pokemon.color.rgba_code }], [pokemon.color]);

	const onSelect = useCallback(() => {
		navigation.navigate('Details', { id: pokemon.id });
	}, [navigation, pokemon.id]);

	const leftPaddedId = useMemo(() => {
		return pokemon.id.toString().padStart(4, '0');
	}, [pokemon.id]);

	return (
		<PokemonProvider pokemon={pokemon}>
			<TouchableOpacity onPress={onSelect} style={cardStyle}>
				<Image source={{ uri: pokemon.sprite }} style={styles.image} />
				<Text style={styles.name}>{pokemon.display_name}</Text>
				{/*<Text style={styles.types}>{pokemon.types.join(', ')}</Text>*/}
				<Text style={styles.identifier}>{leftPaddedId}</Text>
			</TouchableOpacity>
		</PokemonProvider>
	);
}

// Custom memo comparison function
function areEqual(prevProps: Props, nextProps: Props) {
	return (
		prevProps.pokemon.id === nextProps.pokemon.id &&
		prevProps.pokemon.name === nextProps.pokemon.name &&
		prevProps.pokemon.sprite === nextProps.pokemon.sprite &&
		prevProps.pokemon.color?.rgba_code === nextProps.pokemon.color?.rgba_code
	);
}

// Export memoized version of component
export default React.memo(PokemonCard, areEqual);

const styles = StyleSheet.create({
	card: {
		borderRadius: 12,
		padding: 12,
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: 150,
	},
	identifier: {
		fontSize: 12,
		fontWeight: 'bold',
		letterSpacing: 0.2,
		color: '#555'
	},
	image: {
		width: 144,
		height: 144,
		marginBottom: 8,
	},
	name: {
		fontWeight: 'bold',
		fontSize: 16,
		letterSpacing: 0.2,
		textTransform: 'capitalize',
	},
	types: {
		fontSize: 12,
		color: '#555',
	},
});
