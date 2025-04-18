import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { usePokemon } from "../../contexts/PokemonContext";


export default function DetailsTypes() {
	const pokemon = usePokemon();
	const types = pokemon.types.map((type) => type.display_name);
	return (
		<View style={styles.container}>
			<Text style={[styles.header]}>Types</Text>
			<View style={styles.itemWrapper}>
				{pokemon.types.map((type) => (
					<Image key={type.id} source={{ uri: type.sprite }} style={styles.sprite} />
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	chip: {
		alignItems: "center",
		backgroundColor: "rgba(222, 222, 222, 0.85)",
		borderRadius: 20,
		display: "flex",
		height: 40,
		justifyContent: "center",
		marginRight: 12,
		paddingHorizontal: 12,
		paddingVertical: 8
	},
	container: {
		display: "flex",
		flexDirection: "column",
		marginTop: 16
	},
	header: {
		fontSize: 20,
		fontWeight: "bold",
		letterSpacing: 0.6
	},
	item: {
		display: "flex",
		height: 40,
		marginRight: 12,
		width: 120
	},
	itemWrapper: {
		display: "flex",
		flexDirection: "row",
		marginTop: 16,
		width: "100%"
	},
	sprite: {
		marginRight: 12,
		minHeight: 28,
		minWidth: 80,
		resizeMode: 'contain'
	},
	types: {
		fontSize: 18,
		fontWeight: 'bold'
	}
});