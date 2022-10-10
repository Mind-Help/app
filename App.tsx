import React, { useCallback } from 'react'
import { View } from 'react-native'
import {
	useFonts,
	Poppins_300Light,
	Poppins_400Regular,
	Poppins_700Bold,
} from '@expo-google-fonts/poppins'
import * as SplashScreen from 'expo-splash-screen'
import { ThemeProvider } from 'styled-components'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import SignUp from '$pages/signup'
import SignIn from '$pages/signin'
// import First from './src/pages/first'

import { theme } from '$utils/theme'
import Routes from '$routes/index'
import UserContextProvider from '$utils/user_context_provider'

const apollo_client = new ApolloClient({
	uri: 'http://localhost:4000/graphql',
	credentials: 'include',
	cache: new InMemoryCache({}),
})

export default function App() {
	const [fontsLoaded] = useFonts({
		Poppins_300Light,
		Poppins_400Regular,
		Poppins_700Bold,
	})

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync()
		}
	}, [fontsLoaded])

	if (!fontsLoaded) {
		return null
	}

	return (
		<ApolloProvider client={apollo_client}>
			<UserContextProvider>
				<ThemeProvider theme={theme}>
					<View style={{ flex: 1 }} onLayout={onLayoutRootView}>
						<Routes />
					</View>
				</ThemeProvider>
			</UserContextProvider>
		</ApolloProvider>
	)
}
