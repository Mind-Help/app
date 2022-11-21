import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ENDPOINT_URL } from '@env'

import { theme } from '$utils/theme'
import Routes from '$routes/index'
import UserContextProvider from '$utils/user_context_provider'

const apollo_client = new ApolloClient({
	uri: ENDPOINT_URL ?? 'http://192.168.100.249:3000/',
	credentials: 'include',
	cache: new InMemoryCache({}),
})

const App: React.FC = () => {
	return (
		<ApolloProvider client={apollo_client}>
			<ThemeProvider theme={theme}>
				<UserContextProvider>
					<Routes />
				</UserContextProvider>
			</ThemeProvider>
		</ApolloProvider>
	)
}

export default App
