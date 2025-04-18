import React, { useEffect, useMemo, useState } from 'react';
import { Dimensions, View, Text, Image, StyleSheet, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useTheme } from 'react-native-paper';
import { AppTheme } from '../../theme/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderBackButton, HeaderTitle } from '@react-navigation/elements';
import DetailsStats from '../components/details/DetailsStats';
import { PokemonProvider } from '../contexts/PokemonContext';
import DetailsInfo from '../components/details/DetailsInfo';
import DetailsTypes from '../components/details/DetailsTypes';
import { fetchPokemonById } from '../services/api';

const screenWidth = Dimensions.get('window').width;

const capitalize = s => s && String(s[0]).toUpperCase() + String(s).slice(1);

const getHeight = (height: number) => {
	// Height is in decimetres, so we multiply by 10 to get cm
	return `${height * 10} cm`;
}

const getTypes = (types: string[]) => {
	return types.map((type) => capitalize(type)).join(', ');
}

const getWeight = (weight: number) => {
	// Weight is in hectograms, so we divide by 10 to get kg
	return `${weight / 10} kg`;
}

export default function DetailsScreen({ route }: any) {
	const { colors } = useTheme();
	const { id } = route.params;
	const navigation = useNavigation();
	const [pokemon, setPokemon] = useState<any>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchPokemon = async () => {
			setLoading(true);
			try {
				const res = await fetchPokemonById(id);
				const pokemon = res.data;
				setPokemon(pokemon);
			} catch (err) {
				console.error('Erro:', err);
			} finally {
				setLoading(false);
			}
		};

		fetchPokemon();
	}, [id]);

	if (loading || !pokemon) {
		return (
			<View style={styles.center}>
				<ActivityIndicator size="large" />
			</View>
		);
	}

	return (
		<SafeAreaView>
			<ScrollView contentContainerStyle={styles.container}>
				<PokemonProvider pokemon={pokemon}>
					<View style={styles.upContainer}>
						<View style={styles.header}>
							<HeaderBackButton onPress={() => navigation.goBack()} tintColor="#000" />
							<HeaderTitle style={styles.headerTitle}>{pokemon.name}</HeaderTitle>
							<Text style={styles.id}>#{String(pokemon.id).padStart(3, '0')}</Text>
						</View>
					</View>
					<View style={styles.heroContainer}>
						<Image source={{ uri: pokemon.sprite }} style={styles.image} />
					</View>
					<View style={styles.infoContainer}>
						<View style={styles.flavorTextContainer}>
							<Text style={styles.flavorTextHeader}>Flavor text</Text>
							<Text style={styles.flavorText}>{pokemon.flavor_text.replace("\n"," ").replace("\f", " ")}</Text>
						</View>
						<DetailsTypes />
						<DetailsInfo />
						<DetailsStats />
					</View>
				</PokemonProvider>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	backButton: {
		alignSelf: 'flex-start',
		marginBottom: 12,
	},
	backText: {
		fontSize: 16,
		color: '#4caf50',
	},
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		backgroundColor: '#F5FBFB',
		minHeight: '100%'
	},
	flavorText: {
		display: 'flex',
		fontSize: 16,
		fontStyle: 'italic',
		textAlign: 'center'
	},
	flavorTextContainer: {
		alignItems: 'center',
		backgroundColor: 'rgba(222, 222, 222, 0.85)',
		borderRadius: 50,
		padding: 12,
		textAlign: 'center'
	},
	flavorTextHeader: {
		display: 'flex',
		fontSize: 16,
		fontWeight: 'bold',
		justifyContent: 'center',
		letterSpacing: 0.4,
		textAlign: 'center'
	},
	header: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 12,
	},
	headerTitle: {
		flex: 1,
		textTransform: 'capitalize'
	},
	heroContainer: {
		alignItems: 'center',
		backgroundColor: '#EEE',
		display: 'flex',
		justifyContent: 'center',
		marginBottom: 16,
		paddingBottom: 4,
		paddingTop: 4
	},
	id: {
		fontSize: 18,
		color: '#888',
	},
	image: {
		width: screenWidth/2,
		height: screenWidth/2,
	},
	info: {
		fontSize: 16,
		marginBottom: 4,
	},
	infoContainer: {
		padding: 16
	},
	sectionTitle: {
		color: AppTheme.colors.primary,
		fontSize: 20,
		fontWeight: 'bold',
		letterSpacing: 0.2,
		marginBottom: 8,
		textTransform: 'capitalize',
	},
	title: {
		fontSize: 28,
		fontWeight: 'bold',
		marginBottom: 16,
		textTransform: 'capitalize',
	},
	upContainer: {
		padding: 16
	},
});
