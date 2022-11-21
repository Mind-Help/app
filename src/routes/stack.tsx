import { createNativeStackNavigator } from '@react-navigation/native-stack'

import First from '$pages/first'
import Home from '$pages/home'
import SignIn from '$pages/signin'
import SignUp from '$pages/signup'
import Google from '$pages/signup/google'
import Call from '$pages/call'
import Settings from '$pages/settings'

const { Screen, Navigator } = createNativeStackNavigator()

export const StackRoutes: React.FC = () => {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="first" component={First} />
			<Screen name="signup" component={SignUp} />
			<Screen name="google_signup" component={Google} />
			<Screen name="signin" component={SignIn} />
			<Screen name="home" component={Home} />
			<Screen name="call" component={Call} />
			<Screen name="settings" component={Settings} />
		</Navigator>
	)
}
