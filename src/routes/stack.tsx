import { createNativeStackNavigator } from '@react-navigation/native-stack'

import First from '$pages/first'
import Home from '$pages/home'
import SignIn from '$pages/signin'
import SignUp from '$pages/signup'

const { Screen, Navigator } = createNativeStackNavigator()

export const StackRoutes: React.FC = () => {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="first" component={First} />
			<Screen name="signup" component={SignUp} />
			<Screen name="signin" component={SignIn} />
			<Screen name="home" component={Home} />
		</Navigator>
	)
}
