import Logo from '$assets/vectors/logo_letters.svg'
import GoogleSvg from '$assets/vectors/google.svg'
import AppleSvg from '$assets/vectors/apple.svg'

import IconButton from '$components/icon_button'
import Button from '$components/button'
import TextButton from '$components/text_button'

import { theme } from '$utils/theme'

import { ButtonsContainer, Container } from './styles'
import { WaterMark } from '$components/water_mark'
import { useNavigation } from '@react-navigation/native'

const First: React.FC = () => {
	const nav = useNavigation()
	const go_to_home = () => nav.navigate('home')
	const signup = () => nav.navigate('signup')
	const signin = () => nav.navigate('signin')

	return (
		<Container>
			<Logo />
			<ButtonsContainer>
				<IconButton
					icon={GoogleSvg}
					label="Login com Google"
					onPress={go_to_home}
				/>
				<IconButton
					icon={AppleSvg}
					label="Login com Apple"
					onPress={go_to_home}
				/>
				<Button label="Criar uma conta" onPress={signup} />
				<TextButton
					color={theme.colors.blue4}
					label="Já tem uma conta?"
					onPress={signin}
				/>
			</ButtonsContainer>
			<WaterMark />
		</Container>
	)
}

export default First
