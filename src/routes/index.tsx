import { theme } from '$utils/theme'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { StackRoutes } from './stack'

const Routes: React.FC = () => {
	return (
		<NavigationContainer>
			<StatusBar
				barStyle="default"
				backgroundColor={theme.colors.dark1}
			/>
			<StackRoutes />
		</NavigationContainer>
	)
}

export default Routes
