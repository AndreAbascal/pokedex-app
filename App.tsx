// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import FilterScreen from './src/screens/FilterScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { ThemeProvider } from './src/contexts/ThemeContext';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<Provider store={store}>
			<ThemeProvider>
				<NavigationContainer>
					<Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
						<Stack.Screen name="Home" component={HomeScreen} />
						<Stack.Screen name="Filter" component={FilterScreen} />
						<Stack.Screen name="Details" component={DetailsScreen} />
					</Stack.Navigator>
				</NavigationContainer>
			</ThemeProvider>
		</Provider>
	);
}
