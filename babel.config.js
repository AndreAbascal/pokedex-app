module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			// outros plugins aqui
			'react-native-reanimated/plugin',
		],
	};
};
