import React, { useCallback } from 'react'
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import {
	useFonts,
	Poppins_300Light,
	Poppins_400Regular,
	Poppins_700Bold,
} from '@expo-google-fonts/poppins'
import * as SplashScreen from 'expo-splash-screen'
import { ThemeProvider } from 'styled-components'

import SignUp from '$pages/signup'
import SignIn from '$pages/signin'
// import First from './src/pages/first'

import { theme } from '$utils/theme'

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
		<View style={{ flex: 1 }} onLayout={onLayoutRootView}>
			<ThemeProvider theme={theme}>
				<StatusBar style="light" backgroundColor={theme.colors.dark1} />
				<SignIn />
			</ThemeProvider>
		</View>
	)
}
