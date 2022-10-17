import { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import * as yup from 'yup'

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

const REQUIRED = 'Campo obrigatório'
const validation_schema = yup.object().shape({
	email: yup.string().email('email invalido').required(REQUIRED),
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
	phone: yup
		.string()
		.required(REQUIRED)
		.matches(
			/^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/,
			'numero invalido'
		),
})

const SignUp: React.FC = () => {
	const nav = useNavigation()
	const [register] = useRegisterMutation()
	const [_, set_user] = useContext(UserContext)

	const submit = async (form_data: FormData) => {
		const res = await register({
			variables: {
				data: {
					email: form_data.email,
					name: form_data.name,
					password: form_data.password,
					phone: form_data.phone,
				},
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
			<Formik
				initialValues={{
					email: '',
					name: '',
					password: '',
					confirm_password: '',
					phone: '',
				}}
				// doesn't work for some reason
				onSubmit={() => {}}
				validationSchema={validation_schema}
			>
				{({
					handleChange,
					handleBlur,
					handleSubmit,
					values,
					errors,
				}) => (
					<FormContainer>
						<Input
							label="Nome de usuário"
							placeholder="John Doe"
							onChangeText={handleChange('name')}
							onBlur={handleBlur('name')}
							value={values.name}
							error={
								values.name.length > 0 ? errors.name : undefined
							}
						/>
						<Input
							label="Email"
							placeholder="johndoe@mail.com"
							onChangeText={handleChange('email')}
							onBlur={handleBlur('email')}
							value={values.email}
							error={
								values.email.length > 0
									? errors.email
									: undefined
							}
						/>
						<Input
							label="Celular"
							placeholder="+55 (XX) XXXXX-XXXX"
							onChangeText={handleChange('phone')}
							onBlur={handleBlur('phone')}
							value={values.phone}
							error={
								values.phone.length > 0
									? errors.phone
									: undefined
							}
						/>
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
							onPress={() => submit(values)}
						/>
					</FormContainer>
				)}
			</Formik>
		</Container>
	)
}

export default SignUp
