import 'dotenv/config';
import { ExpoConfig, ConfigContext } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
	...config,
	"name": "pokedex-app-rn",
	"slug": "pokedex-app-rn",
	"scheme": "pokedex-app-rn",
	"version": "1.0.0",
	"orientation": "portrait",
	"icon": "./assets/icon.png",
	"userInterfaceStyle": "light",
	"newArchEnabled": true,
	"splash": {
		"image": "./assets/splash-icon.png",
		"resizeMode": "contain",
		"backgroundColor": "#ffffff"
	},
	"ios": {
		"bundleIdentifier": "com.andreabascal.pokedexapprn",
		"supportsTablet": true
	},
	"android": {
		"package": "com.andreabascal.pokedexapprn",
		"adaptiveIcon": {
			"foregroundImage": "./assets/adaptive-icon.png",
			"backgroundColor": "#cf3935"
		}
	},
	"web": {
		"favicon": "./assets/favicon.png"
	},
	"plugins": [
		"expo-localization"
	],
	"extra": {
		apiHost: process.env.EXPO_API_HOST,
		"eas": {
			"projectId": "220574c2-6a78-480a-a66c-e9d325e0124d"
		}
	}
});