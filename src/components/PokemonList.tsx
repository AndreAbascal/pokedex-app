import React, { useCallback, useMemo } from 'react';
import { ActivityIndicator, Button, Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { PokemonBasic } from '../types/pokemon';
import PokemonCard from './PokemonCard';
import { batch } from 'react-redux';

interface Props {
	pokemons: PokemonBasic[];
	onLoadMore: () => void;
	showLoadMore: boolean;
	loading: boolean;
	batchSize: number;
}

//const screenWidth = Dimensions.get('window').width;

export default function PokemonList({ pokemons, onLoadMore, showLoadMore, loading, batchSize }: Props) {

	const { width: screenWidth } = useWindowDimensions();
	const numColumns = screenWidth < 768 ? 2 : 4;
	const itemSize = useMemo(() => screenWidth / numColumns - 20, [screenWidth, numColumns]);

	const cardStyle = useMemo(() => [styles.cardWrapper, { width: itemSize }], [itemSize]);

	const maxPerBatch = useMemo(() => {
		if(batchSize < 20) {
			return batchSize;
		}
		return batchSize / 2;
	},[batchSize]);

	const renderFooter = useMemo(() => {
		if (!showLoadMore) return null;
		return loading ? (
			<ActivityIndicator size="small" style={{ marginVertical: 16 }} />
		) : (
			<View style={styles.loadMoreWrapper}>
				<TouchableOpacity onPress={onLoadMore} style={styles.loadMoreButton}>
					<Text style={styles.loadMoreButtonText}>Load More</Text>
				</TouchableOpacity>
			</View>
		);
	}, [showLoadMore, loading, onLoadMore]);

	const renderItem = useCallback(
		({ item }: { item: PokemonBasic }) => (
			<View style={cardStyle}>
				<PokemonCard pokemon={item} />
			</View>
		),
		[cardStyle]
	);

	/*
	Decisions:
	- initialNumToRender: Controls how many items are rendered initially
	- keyExtractor: Using the Pokemon ID as a stable key is a good choice for performance since it's unique for each Pokemon.
	- maxToRenderPerBatch: Smaller number improves performance, but could lead to a less smooth experience when scrolling. Bigger number means less visual blank areas when scrolling.
	- numColumns: Multi-column layout based on screen size
	- renderItem: Using a memoized function to render each item so as to avoid unnecessary re-renders
	- removeClippedSubviews:
		Improves performance by unmounting components that are outside the viewport.
		More useful for Android since iOS has improved built-in "view recycling" mechanisms.

	*/

	return (
		<FlatList
			contentContainerStyle={styles.list}
			data={pokemons}
			initialNumToRender={batchSize}
			keyExtractor={(item) => item.id.toString()}
			maxToRenderPerBatch={batchSize}
			numColumns={numColumns}
			refreshing={loading}
			renderItem={renderItem}
			removeClippedSubviews={true}
			ListFooterComponent={renderFooter}
		/>
	);
}

const styles = StyleSheet.create({
	list: {
		padding: 10,
		gap: 12,
	},
	cardWrapper: {
		margin: 6,
	},
	loadMoreButton: {
		alignItems: 'center',
		backgroundColor: "rgba(222, 222, 222, 0.85)",
		borderRadius: 24,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		minHeight: 40,
		minWidth: 120,
		textAlign: 'center'
	},
	loadMoreButtonText: {
		fontSize: 16,
		fontWeight: 'bold',
		paddingHorizontal: 12,
		paddingVertical: 8,
		textAlign: 'center'
	},
	loadMoreWrapper: {
		borderRadius: 24,
		marginVertical: 16,
		alignItems: 'center',
	},
});
