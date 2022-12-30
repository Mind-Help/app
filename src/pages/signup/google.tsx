import { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import * as yup from 'yup'

import { useSignUpGoogleMutation } from '$gql/generated'

import Button from '$components/button'
import Input from '$components/input'
import WaterMark from '$components/water_mark'

import { theme } from '$utils/theme'
import { User, UserContext } from '$utils/user_context_provider'

import { Container, FormContainer, Heading, Logo } from './styles'

type FormData = {
	name: string
	password: string
}

const REQUIRED = 'Campo obrigatório'
const validation_schema = yup.object().shape({
	name: yup
		.string()
		.min(3, ({ min }) => `Nome deve ter no minimo ${min} caracteres`)
		.required(REQUIRED),
	password: yup
		.string()
		.min(8, ({ min }) => `Senha deve ter no minimo ${min} caracteres`)
		.required(REQUIRED)
		.matches(
			/(?=^.{7,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9])?.*/,
			'Senha deve contern no minimo 8 caracteres, algarismos, letras maiusculas e minusculas'
		),
	confirm_passowrd: yup
		.string()
		.required(REQUIRED)
		.oneOf([yup.ref('password')], 'Senhas não coincidem'),
})

const Google: React.FC = () => {
	const nav = useNavigation()
	const [register] = useSignUpGoogleMutation()
	const [user, set_user] = useContext(UserContext)

	const submit = async (form_data: FormData) => {
		const new_user: User = {
			id: undefined,
			email: user.email,
			name: form_data.name,
			status: user.status,
			photo: user.photo,
			phone: undefined,
			createdAt: undefined,
			updatedAt: undefined,
		}
		nav.navigate('home')
		const res = await register({
			variables: {
				data: {
					name: new_user.name,
					email: new_user.email,
					password: form_data.password,
					photo: new_user.photo,
				},
			},
		})

		if (res.errors) {
			res.errors.forEach((err) => console.log(err))
			return
		}
		if (res.data) set_user(new_user)
		else console.log({ res, error: 'error at signup form' })
	}

	return (
		<Container>
			<Logo />
			<Heading style={{ textAlign: 'center' }}>
				Informações Extras
			</Heading>
			<WaterMark />
			<Formik
				initialValues={{
					name: '',
					password: '',
					confirm_password: '',
				}}
				// doesn't work for some reason
				onSubmit={() => {}}
				validationSchema={validation_schema}
			>
				{({
					handleChange,
					handleBlur,
					// handleSubmit,
					values,
					errors,
					isSubmitting,
					isValid,
				}) => (
					<FormContainer>
						{!user.name && (
							<Input
								label="Nome de usuário"
								placeholder="John Doe"
								onChangeText={handleChange('name')}
								onBlur={handleBlur('name')}
								value={values.name}
								error={
									values.name.length > 0
										? errors.name
										: undefined
								}
							/>
						)}
						<Input
							label="Senha"
							secureTextEntry={true}
							placeholder="senha super secreta"
							onChangeText={handleChange('password')}
							onBlur={handleBlur('password')}
							value={values.password}
							error={
								values.password.length > 0
									? errors.password
									: undefined
							}
						/>
						<Input
							label="Confirmar Senha"
							secureTextEntry={true}
							placeholder="segredo!"
							onChangeText={handleChange('confirm_password')}
							onBlur={handleBlur('confirm_password')}
							value={values.confirm_password}
							error={
								values.confirm_password.length > 0
									? errors.confirm_password
									: undefined
							}
						/>
						<Button
							label="Criar uma conta"
							backgroundColor={theme.colors.blue3}
							color={theme.colors.light3}
							style={{ marginTop: 10 }}
							disabled={isSubmitting}
							onPress={() =>
								submit({
									...values,
									name: user.name ?? values.name,
								})
							}
						/>
					</FormContainer>
				)}
			</Formik>
		</Container>
	)
}

export default Google
