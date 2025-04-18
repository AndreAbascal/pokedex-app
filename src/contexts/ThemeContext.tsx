import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useColorScheme } from 'react-native';

const ThemeContext = createContext<any>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const systemTheme = useColorScheme();
	const [theme, setTheme] = useState<'light' | 'dark'>(systemTheme || 'light');

	const toggleTheme = () => {
		setTheme((t) => {
			return t === 'light' ? 'dark' : 'light';
		});
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);
