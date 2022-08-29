import Logo from '../../assets/vectors/logo_letters.svg'
import GoogleSvg from '../../assets/vectors/google.svg'
import AppleSvg from '../../assets/vectors/apple.svg'

import IconButton from '../../components/icon_button'
import Button from '../../components/button'
import TextButton from '../../components/text_button'

import { theme } from '../../utils/theme'

import { ButtonsContainer, Container } from './styles'

const First: React.FC = () => {
	return (
		<Container>
			<Logo />
			<ButtonsContainer>
				<IconButton icon={GoogleSvg} label="Login com Google" />
				<IconButton icon={AppleSvg} label="Login com Apple" />
				<Button label="Criar uma conta" />
				<TextButton
					color={theme.colors.blue4}
					label="Já tem uma conta?"
				/>
			</ButtonsContainer>
		</Container>
	)
}

export default First
