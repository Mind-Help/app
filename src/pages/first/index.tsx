import { Alert } from 'react-native'
import { useContext } from 'react'

import { useNavigation } from '@react-navigation/native'

// import { FIREBASE_WEB_CLIENT_ID, FIREBASE_WEB_CLIENT_SECRET } from '@env'

import {
	GoogleSignin,
	statusCodes,
} from '@react-native-google-signin/google-signin'

import Logo from '$assets/vectors/logo_letters.svg'
import GoogleSvg from '$assets/vectors/google.svg'
import AppleSvg from '$assets/vectors/apple.svg'

import IconButton from '$components/icon_button'
import Button from '$components/button'
import TextButton from '$components/text_button'
import WaterMark from '$components/water_mark'

import { UserContext } from '$utils/user_context_provider'
import { theme } from '$utils/theme'

import { ButtonsContainer, Container } from './styles'
import { UserStatus } from '$gql/generated'

GoogleSignin.configure()
const First: React.FC = () => {
	const [_, set_user] = useContext(UserContext)
	const nav = useNavigation()

	const with_google = async () => {
		try {
			await GoogleSignin.hasPlayServices()
			const userInfo = await GoogleSignin.signIn()

			set_user({
				id: null,
				email: userInfo.user.email,
				name: userInfo.user.name!,
				photo: userInfo.user.photo!,
				status: UserStatus.Normal,
				createdAt: undefined,
				updatedAt: undefined,
				phone: undefined,
				resume: undefined,
			})
			nav.navigate('google_signup')
		} catch (error: any) {
			if (error.code === statusCodes.SIGN_IN_CANCELLED) {
				// user cancelled the login flow
				Alert.alert(
					'login cancelado',
					'o usuário cancelou a ação de login com google'
				)
				return
			} else if (error.code === statusCodes.IN_PROGRESS) {
				// operation (e.g. sign in) is in progress already
			} else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
				// play services not available or outdated
				Alert.alert(
					'Google Play Services não encontrado',
					'Por favor instale a versão mais do Google Play Services'
				)
				return
			} else {
				console.log('error at google sigin\nstatus code: ', error)
			}
		}
	}
	const with_apple = async () => {
		// TODO: apple login
		console.log('install gentoo')
		nav.navigate('home')
	}

	return (
		<Container>
			<Logo />
			<ButtonsContainer>
				<IconButton
					icon={GoogleSvg}
					label="Login com Google"
					// disabled={!request}
					onPress={with_google}
				/>
				<IconButton
					icon={AppleSvg}
					label="Login com Apple"
					onPress={with_apple}
				/>
				<Button
					label="Criar uma conta"
					onPress={() => nav.navigate('signup')}
				/>
				<TextButton
					color={theme.colors.blue4}
					label="Já tem uma conta?"
					onPress={() => nav.navigate('signin')}
				/>
			</ButtonsContainer>
			<WaterMark />
		</Container>
	)
}

export default First
