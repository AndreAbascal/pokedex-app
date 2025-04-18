import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setSearchText } from '../store/slices/filtersSlice';
import usePokemonList from '../hooks/usePokemonList';
import PokemonList from '../components/PokemonList';
import HomeHeader from '../components/HomeHeader';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const searchText = useSelector((state: RootState) => state.filters.searchText);
	const selectedType = useSelector((state: RootState) => state.filters.selectedType);
	const allPokemons = useSelector((state: RootState) => state.pokemon.allPokemons);
	const [offset, setOffset] = useState(0);
	const limit = 100;

	const { loading, error, hasMore, total } = usePokemonList(limit, offset, { searchText, selectedType: selectedType?.toString() });

	const openFilters = () => {
		navigation.navigate('Filter');
	};

	const handleLoadMore = () => {
		if (!searchText) {
			setOffset((prev) => prev + limit);
		}
	};

	const handleSearch = (value?: string) => {
		dispatch(setSearchText(value ?? ''));
	};

	useEffect(() => {
		// when filters change, reset offset to 0
		setOffset(0);
	}, [searchText, selectedType]);

	return (
		<SafeAreaView style={styles.container}>
			<HomeHeader onOpenFilter={openFilters} />
			{! loading && total !== null && (
				<Text style={{ textAlign: 'center', marginBottom: 8 }}>
					Showing {allPokemons.length} of {total} results
				</Text>
			)}
			{error ? (
				<View style={styles.placeholder}>
					<Image source={require('../../assets/icons/error_icon.png')} style={{ width: 50, height: 50 }} />
					<Text style={styles.error}>{error}</Text>
				</View>
			) : loading ? (
				<View style={styles.placeholder}>
					<ActivityIndicator size="large" style={styles.loading} />
				</View>
			) : (
				<PokemonList pokemons={allPokemons} batchSize={limit} onLoadMore={handleLoadMore} showLoadMore={hasMore && !loading} loading={loading} />
			)}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FBFB',
	},
	loading: {
		marginTop: 40,
	},
	error: {
		color: 'rgba(0,0,0,0.87)',
		fontSize: 16,
		fontWeight: 'bold',
		letterSpacing: 0.4,
		textAlign: 'center',
		marginTop: 20,
	},
	placeholder: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
	}
});
