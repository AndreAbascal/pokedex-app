import React, {useRef} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchText } from '../store/slices/filtersSlice';
import { RootState } from '../store';

interface HomeHeaderProps {
	onOpenFilter?: () => void;
}

export default function HomeHeader({ onOpenFilter }: HomeHeaderProps) {
	const dispatch = useDispatch();
	const searchText = useSelector((state: RootState) => state.filters.searchText);

	return (
		<View style={styles.container}>
			<View style={styles.topbar}>
				<View style={styles.titleWrapper}>
					<Text style={styles.title}>Pokédex</Text>
				</View>
				<TouchableOpacity style={styles.filterButton} onPress={onOpenFilter}>
					<Ionicons name="filter-outline" size={20} color="white" />
				</TouchableOpacity>
			</View>
			{/*<View>
				<Text style={styles.title}>Pokédex</Text>
			</View>
			<View style={styles.topbar}>
				<View style={styles.searchContainer}>
					<Ionicons name="search" size={20} color="#999" style={styles.icon} />
					<TextInput
						placeholder="Name or number"
						placeholderTextColor="#999"
						style={styles.input}
						value={searchText}
						onChangeText={(text) => {
							dispatch(setSearchText(text));
							onSearch?.(text);
						}}
					/>
					{searchText.length > 0 && (
						<TouchableOpacity
							onPress={() => {
								dispatch(setSearchText(''));
								onSearch?.('');
							}}
						>
							<Ionicons name="close-circle" size={20} color="#999" style={styles.clearIcon} />
						</TouchableOpacity>
					)}
				</View>
				<TouchableOpacity style={styles.sendButton} onPress={onSearch}>
					<Ionicons name="send" size={20} color="white" />
				</TouchableOpacity>
			</View>*/}
		</View>
	);
}

const styles = StyleSheet.create({
	clearIcon: {
		marginLeft: 6,
	},
	container: {
		width: '100%',
		paddingHorizontal: 20,
		paddingTop: 16,
		paddingBottom: 0,
		backgroundColor: '#f5fbfb',
	},
	icon: {
		marginRight: 6,
	},
	input: {
		flex: 1,
		fontSize: 14,
		color: '#333',
	},
	searchContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#eef2f5',
		borderRadius: 12,
		marginLeft: -4,
		marginRight: 12,
		paddingHorizontal: 12,
		height: 40,
	},
	filterButton: {
		alignItems: 'center',
		backgroundColor: '#311B92',
		borderRadius: 12,
		display: 'flex',
		height: 40,
		justifyContent: 'center',
		marginRight: -8,
		padding: 10,
		width: 40
	},
	title: {
		color: '#2d2d2d',
		fontSize: 28,
		fontWeight: 'bold',
		marginBottom: 16,
	},
	titleWrapper: {
	},
	topbar: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
});
