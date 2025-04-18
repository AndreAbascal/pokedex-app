import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native"; 
import { usePokemon } from "../../contexts/PokemonContext";

const screenWidth = Dimensions.get('window').width;

const getHeight = (height: number) => {
	return `${height * 10} cm`; // Height is in decimetres, so we multiply by 10 to get cm
}

const getWeight = (weight: number) => {
	// Weight is in hectograms, so we divide by 10 to get kg
	return `${weight / 10} kg`;
}

export default function DetailsInfo() {
	const pokemon = usePokemon();

	return (
		<View style={styles.container}>
			<Text style={[styles.header]}>Info</Text>
			<View style={styles.itemWrapper}>
				<View style={[styles.item,{backgroundColor: pokemon.color.rgba_code}]}>
					<Text style={styles.itemLabel}>Height</Text>
					<Text style={styles.itemValue}>{getHeight(pokemon.height)}</Text>
				</View>
				<View style={[styles.item,{backgroundColor: pokemon.color.rgba_code}]}>
					<Text style={styles.itemLabel}>Weight</Text>
					<Text style={styles.itemValue}>{getWeight(pokemon.weight)}</Text>
				</View>
				<View style={[styles.item,{backgroundColor: pokemon.color.rgba_code}]}>
					<Text style={styles.itemLabel}>Base XP</Text>
					<Text style={styles.itemValue}>{pokemon.base_experience}</Text>
				</View>
				<View style={[styles.item,{backgroundColor: pokemon.color.rgba_code}]}>
					<Text style={styles.itemLabel}>Happiness</Text>
					<Text style={styles.itemValue}>{pokemon.base_happiness}</Text>
				</View>
				<View style={[styles.item,{backgroundColor: pokemon.color.rgba_code}]}>
					<Text style={styles.itemLabel}>Evasion</Text>
					<Text style={styles.itemValue}>{pokemon.evasion ?? "-"}</Text>
				</View>
				<View style={[styles.item,{backgroundColor: pokemon.color.rgba_code}]}>
					<Text style={styles.itemLabel}>Accuracy</Text>
					<Text style={styles.itemValue}>{pokemon.accuracy ?? "-"}</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
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
		backgroundColor: "#CCC",
		borderRadius: 20,
		height: screenWidth/3-32,
		justifyContent: "center",
		marginBottom: 24,
		width: screenWidth/3-32
	},
	itemLabel: {
		color: "grey",
		fontSize: 14,
		fontWeight: "bold",
		textAlign: "center",
		width: "100%"
	},
	itemValue: {
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
		width: "100%"
	},
	itemWrapper: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
		marginTop: 16,
		width: "100%"
	},
});