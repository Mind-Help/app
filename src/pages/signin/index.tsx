import Button from '$components/button'
import { Input } from '$components/input'
import { WaterMark } from '$components/water_mark'
import { theme } from '$utils/theme'
import { Container, FormContainer, Heading, Logo } from './styles'

const SignUp: React.FC = () => {
	return (
		<Container>
			<Logo />
			<Heading>Cadastro</Heading>
			<WaterMark />
			<FormContainer>
				<Input label="Nome de usuário / Email" placeholder="John Doe" />
				<Input
					label="Senha"
					secureTextEntry={true}
					placeholder="senha super secreta"
				/>
				<Button
					label="Entrar"
					backgroundColor={theme.colors.blue3}
					color={theme.colors.light3}
					style={{ marginTop: 10 }}
				/>
			</FormContainer>
		</Container>
	)
}

export default SignUp
