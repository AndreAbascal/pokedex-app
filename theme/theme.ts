// theme.ts
import { MD3LightTheme as DefaultTheme, MD3DarkTheme as DarkTheme } from 'react-native-paper';

export const AppThemePrimaryColor = "#3867AD";
export const AppThemeSecondaryColor = "#625B71";
export const AppThemeTertiaryColor = "#7D5260";

export const AppTheme = {
	...DefaultTheme,
	colors: {
		"primary": "rgb(41, 94, 167)",
		"onPrimary": "rgb(255, 255, 255)",
		"primaryContainer": "rgb(214, 227, 255)",
		"onPrimaryContainer": "rgb(0, 27, 62)",
		"secondary": "rgb(104, 79, 164)",
		"onSecondary": "rgb(255, 255, 255)",
		"secondaryContainer": "rgb(233, 221, 255)",
		"onSecondaryContainer": "rgb(35, 0, 92)",
		"tertiary": "rgb(152, 64, 99)",
		"onTertiary": "rgb(255, 255, 255)",
		"tertiaryContainer": "rgb(255, 217, 227)",
		"onTertiaryContainer": "rgb(62, 0, 31)",
		"error": "rgb(186, 26, 26)",
		"onError": "rgb(255, 255, 255)",
		"errorContainer": "rgb(255, 218, 214)",
		"onErrorContainer": "rgb(65, 0, 2)",
		"background": "rgb(253, 251, 255)",
		"onBackground": "rgb(26, 27, 30)",
		"surface": "rgb(253, 251, 255)",
		"onSurface": "rgb(26, 27, 30)",
		"surfaceVariant": "rgb(224, 226, 236)",
		"onSurfaceVariant": "rgb(68, 71, 78)",
		"outline": "rgb(116, 119, 127)",
		"outlineVariant": "rgb(196, 198, 208)",
		"shadow": "rgb(0, 0, 0)",
		"scrim": "rgb(0, 0, 0)",
		"inverseSurface": "rgb(47, 48, 51)",
		"inverseOnSurface": "rgb(241, 240, 244)",
		"inversePrimary": "rgb(170, 199, 255)",
		"elevation": {
			"level0": "transparent",
			"level1": "rgb(242, 243, 251)",
			"level2": "rgb(236, 238, 248)",
			"level3": "rgb(230, 234, 245)",
			"level4": "rgb(228, 232, 244)",
			"level5": "rgb(223, 229, 243)"
		},
		"surfaceDisabled": "rgba(26, 27, 30, 0.12)",
		"onSurfaceDisabled": "rgba(26, 27, 30, 0.38)",
		"backdrop": "rgba(45, 48, 56, 0.4)"
	}
};

export const AppThemeDark = {
	...DarkTheme,
	colors: {
		"primary": "rgb(170, 199, 255)",
		"onPrimary": "rgb(0, 48, 100)",
		"primaryContainer": "rgb(0, 70, 141)",
		"onPrimaryContainer": "rgb(214, 227, 255)",
		"secondary": "rgb(208, 188, 255)",
		"onSecondary": "rgb(56, 30, 114)",
		"secondaryContainer": "rgb(79, 55, 138)",
		"onSecondaryContainer": "rgb(233, 221, 255)",
		"tertiary": "rgb(255, 176, 202)",
		"onTertiary": "rgb(93, 17, 52)",
		"tertiaryContainer": "rgb(122, 41, 75)",
		"onTertiaryContainer": "rgb(255, 217, 227)",
		"error": "rgb(255, 180, 171)",
		"onError": "rgb(105, 0, 5)",
		"errorContainer": "rgb(147, 0, 10)",
		"onErrorContainer": "rgb(255, 180, 171)",
		"background": "rgb(26, 27, 30)",
		"onBackground": "rgb(227, 226, 230)",
		"surface": "rgb(26, 27, 30)",
		"onSurface": "rgb(227, 226, 230)",
		"surfaceVariant": "rgb(68, 71, 78)",
		"onSurfaceVariant": "rgb(196, 198, 208)",
		"outline": "rgb(142, 144, 153)",
		"outlineVariant": "rgb(68, 71, 78)",
		"shadow": "rgb(0, 0, 0)",
		"scrim": "rgb(0, 0, 0)",
		"inverseSurface": "rgb(227, 226, 230)",
		"inverseOnSurface": "rgb(47, 48, 51)",
		"inversePrimary": "rgb(41, 94, 167)",
		"elevation": {
			"level0": "transparent",
			"level1": "rgb(33, 36, 41)",
			"level2": "rgb(38, 41, 48)",
			"level3": "rgb(42, 46, 55)",
			"level4": "rgb(43, 48, 57)",
			"level5": "rgb(46, 51, 62)"
		},
		"surfaceDisabled": "rgba(227, 226, 230, 0.12)",
		"onSurfaceDisabled": "rgba(227, 226, 230, 0.38)",
		"backdrop": "rgba(45, 48, 56, 0.4)"
	}
}