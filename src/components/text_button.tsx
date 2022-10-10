import { Dimensions, TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

type Tprops = TouchableOpacityProps & {
	label: string
	color: string
}

const TextButton: React.FC<Tprops> = ({ label, color, ...props }) => {
	return (
		<Container {...props}>
			<Text color={color}>{label}</Text>
		</Container>
	)
}

export default TextButton

const Container = styled.TouchableOpacity.attrs({
	activeOpacity: 0.9,
})`
	position: relative;
	background-color: transparent;
	max-width: ${Dimensions.get('window').width}px;
	align-items: center;
	justify-content: center;
`

const Text = styled.Text<{
	color: string
}>`
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(12)}px;
	letter-spacing: 1.44px;
	color: ${({ color }) => color};
	text-decoration: underline;
	text-align: center;
`
