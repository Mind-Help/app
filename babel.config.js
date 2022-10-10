module.exports = function (api) {
	api.cache(true)
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				require.resolve('babel-plugin-module-resolver'),
				{
					root: ['./src'],
					alias: {
						$components: './src/components',
						$pages: './src/pages',
						$assets: './src/assets',
						$utils: './src/utils',
						$routes: './src/routes',
						$gql: './src/gql',
					},
				},
			],
		],
	}
}
