import { Dimensions, TouchableOpacityProps } from 'react-native'
import { transparentize } from 'color2k'
import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

type Tprops = TouchableOpacityProps & {
	label: string
}

const Button: React.FC<Tprops> = ({ label, ...props }) => {
	return (
		<Container {...props}>
			<Text>{label}</Text>
		</Container>
	)
}

export default Button

const Container = styled.TouchableOpacity`
	position: relative;
	background-color: ${({ theme }) => theme.colors.light1};
	max-width: ${Dimensions.get('window').width}px;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: ${RFValue(8)}px ${RFValue(72)}px;
	border-radius: 4px;
	border-bottom-width: 2px;
	border-right-width: 2px;
	border-color: ${({ theme }) => transparentize(theme.colors.dark4, 0.5)};
`

const Text = styled.Text`
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(12)}px;
	letter-spacing: 0.72px;
	color: ${({ theme }) => theme.colors.dark1};
`
