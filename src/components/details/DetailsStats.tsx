import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native"; 
import { usePokemon } from "../../contexts/PokemonContext";

const screenWidth = Dimensions.get('window').width;

export default function DetailsStats() {
	const pokemon = usePokemon();
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Stats</Text>
			<View style={styles.itemWrapper}>
				{pokemon?.stats?.map((stat, index) => (
					<View key={index} style={styles.item}>
						<Text style={styles.itemLabel}>{stat.label}</Text>
						<Text style={styles.itemValue}>{stat.value ?? 0}</Text>
					</View>
				)) ?? (
					<View></View>
				)}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 16
	},
	header: {
		fontSize: 20,
		fontWeight: "bold",
		letterSpacing: 0.4
	},
	item: {
		backgroundColor: "rgba(222, 222, 222, 0.85)",
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
		fontSize: 32,
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