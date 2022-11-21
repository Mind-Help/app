module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
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
		[
			require.resolve('react-native-dotenv'),
			{
				envName: 'APP_ENV',
				moduleName: '@env',
				path: '.env',
			},
		],
	],
}
