import { theme } from '$utils/theme'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { StackRoutes } from './stack'

const Routes: React.FC = () => {
	return (
		<NavigationContainer>
			<StatusBar style="light" backgroundColor={theme.colors.dark1} />
			<StackRoutes />
		</NavigationContainer>
	)
}

export default Routes
