import { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { useRegisterMutation } from '$gql/generated'

import Button from '$components/button'
import { Input } from '$components/input'
import { WaterMark } from '$components/water_mark'
import { theme } from '$utils/theme'
import { UserContext } from '$utils/user_context_provider'

import { Container, FormContainer, Heading, Logo } from './styles'

type FormData = {
	name: string
	email: string
	password: string
	confirm_password: string
	phone: string
}

type Error = {
	input: 'name' | 'email' | 'password' | 'confirm_password' | 'phone'
	message: string
}

const SignUp: React.FC = () => {
	const nav = useNavigation()
	const [register] = useRegisterMutation()
	const [_, set_user] = useContext(UserContext)

	const [errors, set_errors] = useState<Error[]>([])
	const [form_data, set_form_data] = useState<FormData>({
		email: '',
		name: '',
		password: '',
		confirm_password: '',
		phone: '',
	})

	const submit = async () => {
		const res = await register({
			variables: {
				data: form_data,
			},
		})
		if (res.errors) {
			// TODO: handle errors
			res.errors.forEach((err) => console.log(err))
			return
		}
		set_user({
			...form_data,
			status: res.data?.createUser.status!,
		})
		nav.navigate('home')
	}

	return (
		<Container>
			<Logo />
			<Heading>Cadastro</Heading>
			<WaterMark />
			<FormContainer>
				<Input
					label="Nome de usuário"
					placeholder="John Doe"
					error={errors.find((err) => err.input === 'name')?.message}
					onChangeText={(val) => {
						if (
							val.length <= 3 &&
							!errors.find((err) => err.input === 'name')
						) {
							set_errors([
								...errors,
								{
									input: 'name',
									message: 'nome muito curto',
								},
							])
						} else
							set_errors(
								errors.filter((err) => err.input !== 'name')
							)
						set_form_data({ ...form_data, name: val })
					}}
				/>
				<Input
					label="Email"
					placeholder="johndoe@mail.com"
					error={errors.find((err) => err.input === 'email')?.message}
					onChangeText={(val) =>
						set_form_data({ ...form_data, email: val })
					}
				/>
				<Input
					label="Celular"
					placeholder="johndoe@mail.com"
					error={errors.find((err) => err.input === 'phone')?.message}
					onChangeText={(val) =>
						set_form_data({ ...form_data, phone: val })
					}
				/>
				<Input
					label="Senha"
					secureTextEntry={true}
					placeholder="senha super secreta"
					error={
						errors.find((err) => err.input === 'password')?.message
					}
					onChangeText={(val) =>
						set_form_data({ ...form_data, password: val })
					}
				/>
				<Input
					label="Confirmar Senha"
					secureTextEntry={true}
					placeholder="segredo!"
					error={
						errors.find((err) => err.input === 'confirm_password')
							?.message
					}
					onChangeText={(val) =>
						set_form_data({ ...form_data, confirm_password: val })
					}
				/>
				<Button
					label="Criar uma conta"
					backgroundColor={theme.colors.blue3}
					color={theme.colors.light3}
					style={{ marginTop: 10 }}
					onPress={submit}
				/>
			</FormContainer>
		</Container>
	)
}

export default SignUp
