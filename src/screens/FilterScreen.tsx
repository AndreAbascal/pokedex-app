import React, { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderBackButton, HeaderTitle } from '@react-navigation/elements';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { resetFilters, resetSearchText, setFilters } from '../store/slices/filtersSlice';
import { Picker } from '@react-native-picker/picker';

export default function FilterScreen() {
	const navigation = useNavigation();
	const isFocused = useIsFocused(); // Hook to check if the screen is currently focused
	const dispatch = useDispatch();
	//const searchText = useSelector((state: RootState) => state.filters.searchText);

	const reduxSearch = useSelector((state: RootState) => state.filters.searchText);
	const reduxType = useSelector((state: RootState) => state.filters.selectedType);

	const [searchText, setSearchText] = useState(reduxSearch);
	const [selectedType, setSelectedType] = useState(reduxType);

	const pokemonTypes = [
		{ label: 'All', value: 0 },
		{ label: 'Normal', value: 1 },
		{ label: 'Fighting', value: 2 },
		{ label: 'Flying', value: 3 },
		{ label: 'Poison', value: 4 },
		{ label: 'Ground', value: 5 },
		{ label: 'Rock', value: 6 },
		{ label: 'Bug', value: 7 },
		{ label: 'Ghost', value: 8 },
		{ label: 'Steel', value: 9 },
		{ label: 'Fire', value: 10 },
		{ label: 'Water', value: 11 },
		{ label: 'Grass', value: 12 },
		{ label: 'Electric', value: 13 },
		{ label: 'Psychic', value: 14 },
		{ label: 'Ice', value: 15 },
		{ label: 'Dragon', value: 16 },
		{ label: 'Dark', value: 17 },
		{ label: 'Fairy', value: 18 },
		{ label: 'Stellar', value: 19 },
		{ label: 'Unknown', value: 20 },
		{ label: 'Shadow', value: 21 },
	];

	useEffect(() => {
        // Update local state when the screen becomes focused
        if (isFocused) {
            setSearchText(reduxSearch);
            setSelectedType(reduxType);
        }
    }, [isFocused, reduxSearch, reduxType]);

	const apply = () => {
		const filters: any = {};
		filters.searchText = (searchText || "").trim();
		filters.selectedType = selectedType;
		dispatch(setFilters(filters));
		navigation.goBack();
	};
	
	const reset = () => {
		dispatch(resetFilters());
		navigation.goBack();
	};

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<View style={styles.header}>
					<HeaderBackButton onPress={() => navigation.goBack()} tintColor="#000" />
					<HeaderTitle style={styles.headerTitle}>Filters</HeaderTitle>
				</View>

				<View style={styles.formWrapper}>
					<Text style={styles.pickerLabel}>Name/ID</Text>
					<View style={[styles.searchContainer, styles.inputWrapper]}>
						<Ionicons name="search" size={20} color="#999" style={styles.icon} />
						<TextInput
							placeholder="Name or number"
							placeholderTextColor="#999"
							style={styles.input}
							value={searchText}
							onChangeText={setSearchText}
						/>
						{searchText.length > 0 && (
							<TouchableOpacity
								onPress={() => {
									setSearchText('');
									dispatch(resetSearchText())
								}}
							>
								<Ionicons name="close-circle" size={20} color="#999" style={styles.clearIcon} />
							</TouchableOpacity>
						)}
					</View>
					<View style={styles.inputWrapper}>
						<Text style={styles.pickerLabel}>Type</Text>
						<View style={styles.pickerWrapper}>
							<Picker
								selectedValue={selectedType}
								onValueChange={(item: any) => {
									return setSelectedType(item.value.toString());
								}}
							>
								{pokemonTypes.map((type) => (
									<Picker.Item label={type.label} value={type} key={type.value} />
								))}
							</Picker>
						</View>
					</View>
				</View>

				<View style={styles.bottomContainer}>
					<TouchableOpacity style={[styles.bottomButton, styles.buttonReset]} onPress={reset}>
						<Text style={styles.buttonLabel}>Reset</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.bottomButton, styles.buttonApply]} onPress={apply}>
						<Text style={styles.buttonLabel}>Apply</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	bottomContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 16,
	},
	bottomButton: {
		alignItems: 'center',
		borderRadius: 8,
		fontSize: 18,
		fontWeight: 'bold',
		height: 40,
		letterSpacing: 0.3,
		justifyContent: 'center',
		paddingHorizontal: 24
	},
	buttonApply: {
		backgroundColor: '#9C27B0',
	},
	buttonLabel: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	buttonReset: {
		backgroundColor: '#ccc',
	},
	clearIcon: {
		marginLeft: 6,
	},
	container: {
		flex: 1,
		padding: 16,
	},
	formWrapper: {
		//backgroundColor: 'blue',
		borderRadius: 8,
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
		padding: 16,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 12,
	},
	headerTitle: {
		flex: 1,
		textTransform: 'capitalize',
	},
	icon: {
		marginRight: 6,
	},
	input: {
		flex: 1,
		fontSize: 14,
		height: 40,
		color: '#333',
	},
	inputWrapper: {
		marginBottom: 12
	},
	pickerLabel:{
		color: '#333',
		fontSize: 16,
		marginBottom: 8
	},
	pickerWrapper: {
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 8,
		overflow: 'hidden',
		marginBottom: 16,
		backgroundColor: 'white',
	},
	safeArea: {
		flex: 1,
		backgroundColor: '#F5FBFB',
	},
	searchContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#eef2f5',
		borderRadius: 12,
		marginLeft: -4,
		marginRight: 12,
		paddingHorizontal: 12,
		height: 40,
	}
});