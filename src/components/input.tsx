import { transparentize } from 'color2k'
import { TextInputProps } from 'react-native'
import styled from 'styled-components/native'
import { theme } from '$utils/theme'

type Tprops = TextInputProps & {
	label: string
	error?: string
}

export const Input: React.FC<Tprops> = ({ label, error, ...props }) => {
	return (
		<Container>
			<Label>{label}</Label>
			<TextInput
				error={error}
				placeholderTextColor={transparentize(theme.colors.dark4, 0.5)}
				{...props}
			/>
			{error && <ErrorMessage>{error}</ErrorMessage>}
		</Container>
	)
}

const Container = styled.View`
	margin-bottom: 18px;
`

const Label = styled.Text`
	color: ${({ theme }) => theme.colors.light3};
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: 12px;
	letter-spacing: ${(12 / 100) * 12}px;
`

const TextInput = styled.TextInput<{
	error?: string
}>`
	border: 1px solid
		${({ error, theme }) => (error ? theme.colors.red : 'transparent')};
	border-radius: 4px;
	margin-top: 8px;
	padding: 8px 12px;
	background-color: ${({ theme }) => theme.colors.light1};
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: 10px;
	letter-spacing: 0.12px;
`

const ErrorMessage = styled.Text`
	color: ${({ theme }) => theme.colors.red};
	font-family: ${({ theme }) => theme.fonts.regular};
	margin-top: 4px;
	font-size: 10px;
`
